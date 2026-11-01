<script setup>
import { useLang } from '../composables/useLang'

/**
 * One timeline entry from data/experience.js `items[]`.
 *
 * @prop {import('../data/experience.js').ExperienceItem & Object} item
 * @prop {'highlight'|'primary'|'default'} variant Timeline-dot accent:
 *   'highlight' = Noble orange (item.highlight), 'primary' = Arthur blue
 *   (second item), 'default' = slate. The data module has no dot-color field,
 *   so the parent — which knows the design order — decides the variant.
 */
defineProps({
  item: { type: Object, required: true },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['highlight', 'primary', 'default'].includes(value),
  },
})

const { t } = useLang()

// Timeline-dot classes per variant, verbatim from the export. Full literal
// strings only (Tailwind scanner discipline, plan step 7).
const dotClasses = {
  highlight: 'bg-orange-500 ring-4 ring-orange-100 dark:ring-orange-950',
  primary: 'bg-primary ring-4 ring-blue-100 dark:ring-blue-950',
  default: 'bg-slate-400 dark:bg-slate-600 ring-4 ring-slate-100 dark:ring-slate-800',
}
</script>

<template>
  <div class="relative group">
    <div
      class="absolute -left-[36px] sm:-left-[45px] top-1.5 w-4 h-4 rounded-full"
      :class="dotClasses[variant]"
    ></div>
    <div
      class="p-6 rounded-2xl shadow-sm transition hover:shadow-md border"
      :class="
        item.highlight
          ? 'bg-cream/40 dark:bg-slate-900/70 border-orange-200/60 dark:border-slate-800'
          : 'bg-white dark:bg-slate-900/70 border-slate-200 dark:border-slate-800'
      "
    >
      <div
        class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b"
        :class="item.highlight ? 'border-slate-200/80 dark:border-slate-800' : 'border-slate-100 dark:border-slate-800'"
      >
        <div>
          <span
            v-if="item.highlight"
            class="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400 mb-1"
          >
            {{ t(item.period) }}
          </span>
          <h3
            class="font-bold text-slate-900 dark:text-white"
            :class="item.highlight ? 'text-xl' : 'text-lg'"
          >
            {{ t(item.role) }}
          </h3>
          <div class="text-sm font-semibold text-primary dark:text-sky-400">{{ item.company }}</div>
        </div>
        <div
          class="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 self-start sm:self-auto"
          :class="item.highlight ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-800'"
        >
          {{ t(item.period) }}
        </div>
      </div>
      <ul class="space-y-3.5 text-base text-slate-700 dark:text-slate-200 leading-relaxed sm:text-lg">
        <li v-for="(bullet, index) in item.bullets" :key="index" class="flex items-start gap-2.5">
          <span
            class="font-bold text-lg leading-none mt-0.5"
            :class="item.highlight ? 'text-emerald-500' : 'text-primary dark:text-sky-400'"
            >▸</span
          >
          <!-- v-html is limited to these repo-static bullets from
               data/experience.js (plan step 9 — never user input). -->
          <div v-html="t(bullet)"></div>
        </li>
      </ul>
      <div
        class="flex flex-wrap gap-2 mt-4 pt-3 border-t"
        :class="item.highlight ? 'border-slate-200/60 dark:border-slate-800/80' : 'border-slate-100 dark:border-slate-800'"
      >
        <span
          v-for="tag in item.techTags"
          :key="tag"
          class="text-xs px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 font-mono text-slate-600 dark:text-slate-300"
          :class="item.highlight ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-800'"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
