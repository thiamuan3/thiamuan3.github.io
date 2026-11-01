<script setup>
import { useToast } from '../composables/useToast'

const { toast } = useToast()
</script>

<template>
  <!-- Slide-up toast from the export's #toast element (bottom-right, 2.5s auto-hide).
       no-print keeps it off paper (AC-06); role/aria-live announce the copy result. -->
  <div
    class="no-print fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 text-sm font-medium"
    :class="toast.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'"
    role="status"
    aria-live="polite"
  >
    <span
      v-if="toast.type === 'error'"
      class="material-symbols-outlined text-rose-400 dark:text-rose-600 text-[20px]"
      >error</span
    >
    <span v-else class="material-symbols-outlined text-emerald-400 dark:text-emerald-600 text-[20px]"
      >check_circle</span
    >
    <span>{{ toast.message }}</span>
  </div>
</template>
