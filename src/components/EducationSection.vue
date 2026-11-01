<script setup>
import { useLang } from '../composables/useLang'
import { section, degree, languages } from '../data/education'

const { t } = useLang()

// Bar fill + proficiency-label colors per language, in design order
// (Thai = emerald, English = primary). Full literal strings only — a class
// assembled from the index would be dropped by Tailwind's scanner (plan step 7).
const languageClasses = [
  { bar: 'bg-emerald-500', level: 'text-emerald-600 dark:text-emerald-400 font-bold' },
  { bar: 'bg-primary dark:bg-sky-500', level: 'text-primary dark:text-sky-400 font-bold' },
]
</script>

<template>
  <section id="education" class="scroll-mt-20 py-12 border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-6">
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-stretch">
          <!-- Degree card -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between hover:shadow-md transition"
          >
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div
                  class="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/80 flex items-center justify-center text-orange-600 dark:text-orange-400"
                >
                  <span class="material-symbols-outlined text-2xl">school</span>
                </div>
                <span
                  class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60"
                >
                  {{ degree.years }}
                </span>
              </div>
              <div>
                <span
                  class="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider block mb-1"
                >
                  {{ t(degree.level) }}
                </span>
                <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                  {{ t(degree.name) }}
                </h3>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
                  {{ t(degree.focus) }}
                </p>
              </div>
            </div>
            <div
              class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium"
            >
              <span class="material-symbols-outlined text-orange-500 text-[18px]">apartment</span>
              <span>{{ t(degree.university) }}</span>
            </div>
          </div>
          <!-- Languages card -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between hover:shadow-md transition"
          >
            <div class="space-y-5">
              <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-3">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400"
                  >
                    <span class="material-symbols-outlined text-[20px]">translate</span>
                  </div>
                  <h3 class="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    {{ t(languages.title) }}
                  </h3>
                </div>
                <span class="material-symbols-outlined text-slate-400 text-[18px]">public</span>
              </div>
              <div class="space-y-4">
                <div v-for="(item, index) in languages.items" :key="index" class="space-y-1.5">
                  <div class="flex justify-between items-center text-xs sm:text-sm">
                    <span class="font-medium text-slate-800 dark:text-slate-200">{{ t(item.name) }}</span>
                    <span :class="languageClasses[index].level">{{ t(item.level) }}</span>
                  </div>
                  <div class="w-full h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      class="h-full rounded-full"
                      :class="languageClasses[index].bar"
                      :style="{ width: `${item.percent}%` }"
                    ></div>
                  </div>
                  <div class="flex justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span>{{ t(item.note) }}</span>
                    <span>{{ item.percent }}%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/80 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1.5"
            >
              <span class="material-symbols-outlined text-[16px] text-slate-400 shrink-0 mt-0.5">info</span>
              <span>{{ t(languages.footnote) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
