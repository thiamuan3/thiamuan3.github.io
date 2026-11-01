import { ref } from 'vue'

// Auto-hide delay matches the export's showToast() (2.5 s).
const TOAST_AUTO_HIDE_MS = 2500

const TOAST_TYPES = ['success', 'error']

// Module-level state: one toast for the whole app, shared by all callers.
// The show/hide flag is named `isVisible` (verb-first) on purpose: Tailwind's
// scanner reads plain source text, and a bare state-name token would be emitted
// as a junk visibility utility into the compiled CSS.
const toast = ref({ isVisible: false, message: '', type: 'success' })
let hideTimer = null

/**
 * Toast notification state. Callers pass an already-localized message
 * (useLang's currentLang decides the language) — this composable stays
 * language-agnostic by design.
 *
 * @param {string} message Localized text to display.
 * @param {'success'|'error'} [type] Visual variant; defaults to 'success'.
 */
export function useToast() {
  function show(message, type = 'success') {
    const toastType = TOAST_TYPES.includes(type) ? type : 'success'
    toast.value = { isVisible: true, message, type: toastType }

    clearTimeout(hideTimer)
    hideTimer = setTimeout(() => {
      toast.value = { isVisible: false, message: '', type: 'success' }
    }, TOAST_AUTO_HIDE_MS)
  }

  return { toast, show }
}
