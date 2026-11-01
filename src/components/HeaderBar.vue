<script setup>
import { computed } from 'vue'
import { useLang } from '../composables/useLang'
import { useTheme } from '../composables/useTheme'
import { nav, getInTouch, langSwitchTitles, buttonTitles } from '../data/ui'
import { name, getEmail } from '../data/profile'

const { currentLang, setLang, t } = useLang()
const { themeIcon, toggleTheme } = useTheme()

const isEnglish = computed(() => currentLang.value === 'en')

// Toggle styles from the export's setLanguage(): active EN = sky, active TH = orange.
// Full literal strings keep the classes scannable by Tailwind.
const enButtonClass = computed(() =>
  isEnglish.value
    ? 'px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-primary dark:text-sky-400 shadow-xs font-bold transition-all'
    : 'px-2.5 py-1 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all',
)
const thButtonClass = computed(() =>
  isEnglish.value
    ? 'px-2.5 py-1 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all'
    : 'px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-orange-600 dark:text-orange-400 shadow-xs font-bold transition-all',
)

function onPrint() {
  window.print()
}
</script>

<template>
  <header
    class="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-navy-950/90 border-b border-slate-200 dark:border-slate-800 transition-colors"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a class="flex items-center gap-3 group min-w-0" href="#">
        <div
          class="w-10 h-10 rounded-xl bg-linear-to-tr from-primary to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform shrink-0"
        >
          AT
        </div>
        <div class="min-w-0">
          <span
            class="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white block leading-none truncate"
            >{{ t(name) }}</span
          >
        </div>
      </a>
      <nav class="no-print hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
        <a
          v-for="item in nav"
          :key="item.id"
          :class="
            item.id === 'personality'
              ? 'hover:text-primary dark:hover:text-orange-400 transition-colors flex items-center gap-1.5'
              : 'hover:text-primary dark:hover:text-orange-400 transition-colors'
          "
          :href="`#${item.id}`"
        >
          <span
            v-if="item.id === 'personality'"
            class="w-2 h-2 rounded-full bg-emerald-500 motion-safe:animate-pulse"
          ></span>
          <span>{{ t(item.label) }}</span>
        </a>
      </nav>
      <div class="flex items-center gap-1.5 sm:gap-3 shrink-0">
        <!-- Bilingual Language Switcher -->
        <div
          class="no-print inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold"
        >
          <button
            :class="enButtonClass"
            type="button"
            :aria-pressed="isEnglish"
            :title="langSwitchTitles.en"
            @click="setLang('en')"
          >
            EN
          </button>
          <button
            :class="thButtonClass"
            type="button"
            :aria-pressed="currentLang === 'th'"
            :title="langSwitchTitles.th"
            @click="setLang('th')"
          >
            TH
          </button>
        </div>
        <button
          class="no-print hidden sm:block p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          type="button"
          :title="buttonTitles.print"
          :aria-label="buttonTitles.print"
          @click="onPrint"
        >
          <span class="material-symbols-outlined text-[20px]">print</span>
        </button>
        <button
          class="no-print p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          type="button"
          :title="buttonTitles.theme"
          :aria-label="buttonTitles.theme"
          @click="toggleTheme"
        >
          <span class="material-symbols-outlined text-[20px]">{{ themeIcon }}</span>
        </button>
        <a
          class="no-print inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary hover:bg-navy-800 text-white text-xs sm:text-sm font-medium transition shadow-sm hover:shadow"
          :href="`mailto:${getEmail()}`"
        >
          <span class="material-symbols-outlined text-[16px]">mail</span>
          <span class="hidden sm:inline">{{ t(getInTouch) }}</span>
        </a>
      </div>
    </div>
  </header>
</template>
