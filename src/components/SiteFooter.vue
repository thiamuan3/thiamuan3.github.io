<script setup>
import { useLang } from '../composables/useLang'
import { useToast } from '../composables/useToast'
import { copyEmail, linkedinLabel, buttonTitles, toast as toastMessages } from '../data/ui'
import { footer as footerIdentity, contact, getTel, getTelDisplay, getEmail } from '../data/profile'

const { t } = useLang()
const { show } = useToast()

// Toast text is resolved from the current language; the clipboard API can reject
// (insecure context / permission), so the bilingual error path is required (AC-09).
async function onCopyEmail() {
  try {
    await navigator.clipboard.writeText(getEmail())
    show(t(toastMessages.emailCopied))
  } catch {
    show(t(toastMessages.copyFailed), 'error')
  }
}
</script>

<template>
  <footer class="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800"
      >
        <div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ t(footerIdentity.name) }}</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            {{ t(footerIdentity.tagline) }}
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <button
            class="no-print inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium transition"
            type="button"
            :title="buttonTitles.copyEmail"
            @click="onCopyEmail"
          >
            <span class="material-symbols-outlined text-[18px]">content_copy</span>
            <span>{{ t(copyEmail) }}</span>
          </button>
          <a
            class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium transition"
            :href="`tel:${getTel()}`"
          >
            <span class="material-symbols-outlined text-[18px]">call</span>
            <span>{{ getTelDisplay() }}</span>
          </a>
          <a
            class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary hover:bg-navy-800 text-white text-xs sm:text-sm font-medium transition shadow-sm"
            :href="contact.linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="material-symbols-outlined text-[18px]">open_in_new</span>
            <span>{{ linkedinLabel }}</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
