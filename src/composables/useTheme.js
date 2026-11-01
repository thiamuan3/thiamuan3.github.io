import { computed, ref } from 'vue'

// localStorage key kept from the original site (plan D8).
const THEME_STORAGE_KEY = 'theme'

// Same precedence as the export's initTheme(): explicit localStorage value wins,
// otherwise follow the OS preference, otherwise light.
function resolveInitialIsDark() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'dark') return true
    if (stored === 'light') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  } catch {
    return false
  }
}

// Module-level ref: every caller shares one theme state.
const isDark = ref(resolveInitialIsDark())

function applyThemeToDocument(dark) {
  document.documentElement.classList.toggle('dark', dark)
}

let initialized = false

function initTheme() {
  if (initialized) return
  initialized = true
  // Usually a no-op: the inline theme-init script in index.html already set
  // .dark before paint (plan D7) — this keeps state and DOM in sync anyway.
  applyThemeToDocument(isDark.value)

  // Plan D6: printing from dark mode must still produce a light page.
  // Temporarily drop .dark for the whole print job, then restore it.
  let restoreDarkAfterPrint = false
  window.addEventListener('beforeprint', () => {
    restoreDarkAfterPrint = document.documentElement.classList.contains('dark')
    if (restoreDarkAfterPrint) document.documentElement.classList.remove('dark')
  })
  window.addEventListener('afterprint', () => {
    if (restoreDarkAfterPrint) document.documentElement.classList.add('dark')
    restoreDarkAfterPrint = false
  })
}

/**
 * Light/dark theme state. The inline script in index.html handles first paint;
 * this composable owns everything after Vue mounts.
 */
export function useTheme() {
  initTheme()

  function toggleTheme() {
    isDark.value = !isDark.value
    applyThemeToDocument(isDark.value)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDark.value ? 'dark' : 'light')
    } catch {
      /* storage unavailable — theme still toggles for this session */
    }
  }

  // Material Symbols icon name, mirroring the export: show the mode you'd switch to.
  const themeIcon = computed(() => (isDark.value ? 'light_mode' : 'dark_mode'))

  return { isDark, themeIcon, toggleTheme }
}
