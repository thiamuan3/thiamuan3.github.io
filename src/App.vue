<script setup>
import { useLang } from './composables/useLang'
import { useTheme } from './composables/useTheme'
import { docTitle } from './data/ui'
import HeaderBar from './components/HeaderBar.vue'
import AboutSection from './components/AboutSection.vue'
import PersonalitySection from './components/PersonalitySection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import Toast from './components/Toast.vue'
import PrintResume from './components/PrintResume.vue'

// docTitle from ui.js overrides the Wave 1 default titles; useTheme registers
// the dark-mode print fix (plan D6).
useLang(docTitle)
useTheme()
</script>

<template>
  <!-- Screen layout: hidden when printing -->
  <div
    class="screen-only min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-orange-500 selection:text-white transition-colors duration-300 leading-relaxed text-lg"
  >
    <HeaderBar />
    <main>
      <AboutSection />
      <PersonalitySection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </main>
    <SiteFooter />
    <Toast />
  </div>
  <!-- Print layout: hidden on screen, visible when printing -->
  <PrintResume />
</template>
