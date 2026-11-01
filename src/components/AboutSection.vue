<script setup>
import { useLang } from '../composables/useLang'
import { hero, overviewCard, statCards } from '../data/about'
import { name, summary, location, contact, getEmail, getTel, getTelDisplay } from '../data/profile'
import profileImg from '../assets/profile.jpg'

const { t } = useLang()

// Per-card value styling from the export (cinnabar / navy / saffron / emerald).
// Full literal class strings keep these utilities scannable by Tailwind.
const statValueClasses = [
  'text-xl sm:text-2xl font-black text-cinnabar mt-1',
  'text-xl sm:text-2xl font-black text-primary dark:text-sky-400 mt-1',
  'text-base sm:text-lg font-bold text-saffron-600 dark:text-saffron-500 mt-1',
  'text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1',
]

// Career Overview: first stat value is cinnabar, second is navy; row values differ too.
const overviewStatClasses = ['text-2xl font-black text-cinnabar', 'text-2xl font-black text-primary dark:text-sky-400']
const overviewRowClasses = ['font-semibold text-slate-900 dark:text-white', 'font-semibold text-emerald-600 dark:text-emerald-400']
</script>

<template>
  <section
    id="about"
    class="scroll-mt-20 pt-8 pb-10 sm:pt-12 sm:pb-16 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden"
  >
    <div
      class="no-print absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px]"
    ></div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div class="flex flex-col sm:flex-row items-start gap-6 lg:gap-8 max-w-3xl">
          <div class="shrink-0 relative">
            <div
              class="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-md bg-slate-100 dark:bg-slate-800 ring-4 ring-orange-100 dark:ring-orange-950/60"
            >
              <!-- Intrinsic 384x512 from src/assets/profile.jpg (compressed from the export PNG). -->
              <img
                class="w-full h-full object-cover object-top"
                :src="profileImg"
                :alt="t(hero.photoAlt)"
                width="384"
                height="512"
                loading="eager"
              />
            </div>
          </div>
          <div class="space-y-4">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {{ t(name) }}
            </h1>
            <p class="sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl sm:text-xl">
              {{ t(summary) }}
            </p>
            <div class="flex flex-wrap gap-2 sm:gap-3 pt-2 text-xs sm:text-sm">
              <a
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-primary transition"
                :href="`mailto:${getEmail()}`"
              >
                <span class="material-symbols-outlined text-orange-500 text-[18px]">email</span>{{ getEmail() }}
              </a>
              <a
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-primary transition"
                :href="`tel:${getTel()}`"
              >
                <span class="material-symbols-outlined text-emerald-500 text-[18px]">phone</span>{{ getTelDisplay() }}
              </a>
              <a
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-primary transition"
                :href="contact.linkedinUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="material-symbols-outlined text-blue-500 text-[18px]">share</span>{{ contact.linkedinDisplay }}
              </a>
              <span
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-primary transition"
              >
                <span class="material-symbols-outlined text-rose-500 text-[18px]">location_on</span>
                <span>{{ t(location) }}</span>
              </span>
            </div>
          </div>
        </div>
        <div
          class="w-full lg:w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4 shrink-0"
        >
          <div class="pb-3 border-b border-slate-100 dark:border-slate-800">
            <span class="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">{{ t(overviewCard.label) }}</span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-center">
            <div v-for="(stat, index) in overviewCard.stats" :key="index" class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div :class="overviewStatClasses[index]">{{ t(stat.value) }}</div>
              <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{{ t(stat.label) }}</div>
            </div>
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-1">
            <div v-for="(row, index) in overviewCard.rows" :key="index" class="flex items-center justify-between">
              <span class="text-slate-500">{{ t(row.label) }}</span>
              <span :class="overviewRowClasses[index]">{{ t(row.value) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
        <div
          v-for="(card, index) in statCards"
          :key="index"
          class="bg-white dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-orange-400 transition"
        >
          <div class="text-xs text-slate-500 dark:text-slate-400 font-medium">{{ t(card.title) }}</div>
          <div :class="statValueClasses[index]">{{ t(card.value) }}</div>
          <p class="text-xs text-slate-600 dark:text-slate-300 mt-1">{{ t(card.description) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
