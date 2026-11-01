<script setup>
import { useLang } from '../composables/useLang'

defineProps({
  /** One entry from data/personality.js `traits[]` (dimension bar). */
  trait: { type: Object, required: true },
})

const { t } = useLang()

// Bar + bold-percent classes per colorKey. Static full strings only — a raw
// class assembled from the key would be dropped by Tailwind's scanner (plan step 7).
const colorClasses = {
  sky: { bar: 'bg-sky-500', percent: 'text-sky-600 dark:text-sky-400' },
  amber: { bar: 'bg-amber-500', percent: 'text-amber-500 dark:text-amber-400' },
  emerald: { bar: 'bg-emerald-500', percent: 'text-emerald-600 dark:text-emerald-400' },
  purple: { bar: 'bg-purple-500', percent: 'text-purple-600 dark:text-purple-400' },
  rose: { bar: 'bg-rose-500', percent: 'text-rose-500 dark:text-rose-400' },
}
</script>

<template>
  <div class="space-y-1.5">
    <div class="flex justify-between items-center text-xs sm:text-sm">
      <div v-if="trait.highlightSide === 'left'" class="font-medium text-slate-700 dark:text-slate-300">
        <span>{{ t(trait.leftLabel) }}</span>
        <span class="font-bold" :class="colorClasses[trait.colorKey].percent">{{ trait.percent }}%</span>
      </div>
      <div v-else class="text-slate-500 dark:text-slate-400">
        <span>{{ t(trait.leftLabel) }}</span> {{ 100 - trait.percent }}%
      </div>
      <div v-if="trait.highlightSide === 'left'" class="text-slate-500 dark:text-slate-400">
        {{ 100 - trait.percent }}% <span>{{ t(trait.rightLabel) }}</span>
      </div>
      <div v-else class="font-medium text-slate-700 dark:text-slate-300">
        <span class="font-bold" :class="colorClasses[trait.colorKey].percent">{{ trait.percent }}%</span>
        <span>{{ t(trait.rightLabel) }}</span>
      </div>
    </div>
    <div
      class="relative w-full h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden"
      :class="{ 'flex justify-end': trait.highlightSide === 'right' }"
    >
      <div class="h-full rounded-full" :class="colorClasses[trait.colorKey].bar" :style="{ width: `${trait.percent}%` }"></div>
    </div>
    <div class="flex justify-between text-[11px] text-slate-500 dark:text-slate-400">
      <span>{{ t(trait.leftShort) }}</span>
      <span>{{ t(trait.rightShort) }}</span>
    </div>
  </div>
</template>
