<script setup>
import { useLang } from '../composables/useLang'
import { section, items, earlyCareer } from '../data/experience'
import ExperienceItem from './ExperienceItem.vue'

const { t } = useLang()

// Design order: items[0] = Noble (orange highlight dot), items[1] = Arthur
// (primary dot), everything else slate. The data has no dot-color field, so
// the variant is derived here from the highlight flag and position.
function dotVariant(item, index) {
  if (item.highlight) return 'highlight'
  return index === 1 ? 'primary' : 'default'
}
</script>

<template>
  <section
    id="experience"
    class="scroll-mt-20 py-12 bg-white dark:bg-navy-950/60 border-b border-slate-200 dark:border-slate-800"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div
            class="inline-flex items-center gap-2 text-xs font-semibold text-cinnabar uppercase tracking-wider mb-2"
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
        <div class="text-xs text-slate-500 dark:text-slate-400">
          {{ t(section.note) }}
        </div>
      </div>
      <div class="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
        <ExperienceItem
          v-for="(item, index) in items"
          :key="index"
          :item="item"
          :variant="dotVariant(item, index)"
        />
        <!-- Early career (2010–2013): smaller summary card, last timeline block. -->
        <div class="relative group">
          <div
            class="absolute -left-[32px] sm:-left-[40px] top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700"
          ></div>
          <div
            class="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-sm space-y-4"
          >
            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2"
            >
              <h3 class="font-bold text-slate-900 dark:text-white">{{ t(earlyCareer.title) }}</h3>
              <span class="text-xs text-slate-500 font-mono">{{ earlyCareer.range }}</span>
            </div>
            <div class="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <div v-for="(entry, index) in earlyCareer.entries" :key="index">
                <span class="font-semibold text-slate-900 dark:text-white">
                  {{ entry.company }} ({{ t(entry.period) }}):
                </span>
                <span>{{ t(entry.summary) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
