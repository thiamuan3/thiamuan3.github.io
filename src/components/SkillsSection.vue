<script setup>
import { useLang } from '../composables/useLang'
import { section, categories } from '../data/skills'

const { t } = useLang()

// Icon-chip + hover-border colors per category, in design order (blue/emerald/
// orange/purple). Full literal strings only — a class assembled from the index
// would be dropped by Tailwind's scanner (same pattern as Wave 3).
const accentClasses = [
  {
    icon: 'bg-blue-100 dark:bg-blue-950 text-primary dark:text-sky-400',
    hover: 'hover:border-primary',
  },
  {
    icon: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400',
    hover: 'hover:border-emerald-500',
  },
  {
    icon: 'bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400',
    hover: 'hover:border-orange-500',
  },
  {
    icon: 'bg-purple-500/10 dark:bg-purple-950 text-purple-600 dark:text-purple-400',
    hover: 'hover:border-purple-500',
  },
]
</script>

<template>
  <section id="skills" class="scroll-mt-20 py-12 border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <div
          class="inline-flex items-center gap-2 text-xs font-semibold text-primary dark:text-sky-400 uppercase tracking-wider mb-2"
        >
          <span class="material-symbols-outlined text-[18px]">{{ section.eyebrowIcon }}</span>
          <span>{{ t(section.eyebrow) }}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          {{ t(section.heading) }}
        </h2>
        <p class="text-base text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
          {{ t(section.intro) }}
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm transition"
          :class="accentClasses[index].hover"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" :class="accentClasses[index].icon">
              <span class="material-symbols-outlined">{{ category.icon }}</span>
            </div>
            <div>
              <h3 class="font-bold text-slate-900 dark:text-white text-base">{{ t(category.title) }}</h3>
              <span class="text-xs text-slate-500 dark:text-slate-400">{{ t(category.subtitle) }}</span>
            </div>
          </div>
          <div class="space-y-3">
            <div>
              <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {{ t(category.chipGroupLabel) }}
              </span>
              <div class="flex flex-wrap gap-1.5 mt-1.5">
                <span
                  v-for="chip in category.chips"
                  :key="chip"
                  class="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-mono"
                >
                  {{ chip }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
