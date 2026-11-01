<script setup>
import { useLang } from '../composables/useLang'
import { section, card, traitsHeading, traits, strengths } from '../data/personality'
import TraitBar from './TraitBar.vue'

const { t } = useLang()

// Icon-chip colors per strength card from the export (bolt = orange,
// diversity_3 = emerald, hub = navy). Keyed by the data's icon name with a
// neutral fallback; full literal strings keep the classes scannable by Tailwind.
const strengthIconClasses = {
  bolt: 'bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400',
  diversity_3: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400',
  hub: 'bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400',
}
const strengthIconFallback = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
</script>

<template>
  <section
    id="personality"
    class="scroll-mt-20 py-12 bg-cream/60 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div
            class="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2"
          >
            <span class="material-symbols-outlined text-[18px]">{{ section.eyebrowIcon }}</span>
            <span>{{ t(section.eyebrow) }}</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            <span>{{ t(section.headingLead) }}</span>
            <span class="text-emerald-600 dark:text-emerald-400">{{ t(section.type) }}</span>
          </h2>
          <p class="text-base text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
            {{ t(section.intro) }}
          </p>
        </div>
        <div
          class="text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm inline-block self-start md:self-auto"
        >
          {{ t(section.profileBadge) }}
        </div>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-md p-6 lg:p-8"
      >
        <div
          class="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-linear-to-b from-emerald-50/60 to-white dark:from-emerald-950/20 dark:to-slate-900 border border-emerald-100 dark:border-emerald-900/30 text-center"
        >
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{{
            t(card.label)
          }}</span>
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-1">{{ t(card.type) }}</h3>
          <div class="relative w-44 h-44 my-4 flex items-center justify-center">
            <div
              class="w-36 h-36 rounded-full bg-emerald-100/80 dark:bg-emerald-900/40 flex items-center justify-center inset-shadow-sm"
            >
              <span class="material-symbols-outlined text-6xl text-emerald-600 dark:text-emerald-400">emoji_people</span>
            </div>
            <div
              class="absolute -bottom-1 -right-1 bg-white dark:bg-slate-800 p-2 rounded-full border border-slate-200 dark:border-slate-700 shadow"
            >
              <span class="material-symbols-outlined text-2xl text-orange-500">lightbulb</span>
            </div>
          </div>
          <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
            {{ t(card.quote) }}
          </p>
          <div class="w-full mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 text-center">
            {{ t(card.completedNote) }}
          </div>
        </div>
        <div class="lg:col-span-8 flex flex-col justify-between space-y-5">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h4 class="font-bold text-base text-slate-800 dark:text-slate-100">{{ t(traitsHeading) }}</h4>
            <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span class="material-symbols-outlined text-[18px]">tune</span>
              <span class="material-symbols-outlined text-[18px]">pie_chart</span>
            </div>
          </div>
          <TraitBar v-for="(trait, index) in traits" :key="index" :trait="trait" />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        <div
          v-for="(strength, index) in strengths"
          :key="index"
          class="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow transition"
        >
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
            :class="strengthIconClasses[strength.icon] ?? strengthIconFallback"
          >
            <span class="material-symbols-outlined">{{ strength.icon }}</span>
          </div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">{{ t(strength.title) }}</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            {{ t(strength.description) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
