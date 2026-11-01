<script setup>
import { useLang } from '../composables/useLang'
import { name, secondaryName, summary, location, contact, getEmail, getTel, getTelDisplay } from '../data/profile'
import { overviewCard } from '../data/about'
import { section as skillsSection, categories } from '../data/skills'
import { section as personalitySection, card as personalityCard, strengths } from '../data/personality'
import { section as expSection, items, earlyCareer } from '../data/experience'
import { degree, languages } from '../data/education'
import profileImg from '../assets/profile.jpg'

const { currentLang, t } = useLang()
</script>

<template>
  <!-- Print-only: hidden on screen, shown when printing -->
  <div class="hidden print:block" id="print-resume">
    <!-- A4 Page Container -->
    <div class="print-page">

      <!-- Header: name, role, photo, contact -->
      <header class="print-header">
        <div class="print-header-left">
          <img :src="profileImg" :alt="t(name)" width="72" height="96" class="print-photo" />
          <div class="print-header-main">
            <h1>{{ t(name) }} <span class="print-secondary-name">{{ t(secondaryName) }}</span></h1>
            <div class="print-role">Senior Full Stack / Backend Developer</div>
          </div>
        </div>
        <div class="print-contact">
          <div class="print-contact-item">
            <span class="print-contact-icon">📍</span><span>{{ t(location) }}</span>
          </div>
          <a :href="`tel:${getTel()}`" class="print-contact-item">
            <span class="print-contact-icon">📞</span><span>{{ getTelDisplay() }}</span>
          </a>
          <a :href="`mailto:${getEmail()}`" class="print-contact-item">
            <span class="print-contact-icon">✉</span><span>{{ getEmail() }}</span>
          </a>
          <a :href="contact.linkedinUrl" class="print-contact-item" target="_blank" rel="noopener noreferrer">
            <span class="print-contact-icon">🔗</span><span>{{ contact.linkedinDisplay }}</span>
          </a>
        </div>
      </header>

      <!-- Metrics Bar -->
      <section class="print-metrics">
        <div class="print-metric">
          <div class="print-metric-value">15+ {{ currentLang === 'th' ? 'ปี' : 'Years' }}</div>
          <div class="print-metric-label">{{ t(overviewCard.stats[0].label) }}</div>
        </div>
        <div class="print-metric">
          <div class="print-metric-value">PHP &amp; Node.js</div>
          <div class="print-metric-label">Core Tech Stack (Laravel/Vue)</div>
        </div>
        <div class="print-metric">
          <div class="print-metric-value">8+</div>
          <div class="print-metric-label">{{ t(overviewCard.stats[1].label) }}</div>
        </div>
        <div class="print-metric">
          <div class="print-metric-value">ENFP-A</div>
          <div class="print-metric-label">{{ t(personalityCard.type) }}</div>
        </div>
      </section>

      <!-- 2-Column Body -->
      <div class="print-grid">

        <!-- LEFT: Skills, Personality, Education, Languages -->
        <aside class="print-sidebar">
          <!-- Skills -->
          <section class="print-section">
            <h2 class="print-section-title">
              <span class="print-title-icon">&lt;/&gt;</span>{{ t(skillsSection.heading) }}
            </h2>
            <div v-for="cat in categories" :key="cat.title.en" class="print-skill-group">
              <div class="print-skill-group-name">{{ t(cat.title) }}</div>
              <div class="print-chips">
                <span v-for="chip in cat.chips" :key="chip" class="print-chip">{{ chip }}</span>
              </div>
            </div>
          </section>

          <!-- Personality -->
          <section class="print-section">
            <h2 class="print-section-title">
              <span class="print-title-icon">✦</span>{{ t(personalitySection.heading) }}
            </h2>
            <div class="print-personality-box">
              <div class="print-personality-badge">
                <span class="print-title-icon">★</span> {{ personalityCard.type.en }}
              </div>
              <div>{{ t(strengths[0].description) }}</div>
            </div>
          </section>

          <!-- Education -->
          <section class="print-section">
            <h2 class="print-section-title">
              <span class="print-title-icon">🎓</span>{{ t(degree.level) }}
            </h2>
            <div class="print-edu-item">
              <div class="print-edu-degree">{{ t(degree.name) }}</div>
              <div class="print-edu-school">{{ t(degree.university) }}</div>
              <div class="print-edu-year">{{ t(degree.level) }} {{ degree.years }}</div>
            </div>
          </section>

          <!-- Languages -->
          <section class="print-section">
            <h2 class="print-section-title">
              <span class="print-title-icon">🌐</span>{{ t(languages.title) }}
            </h2>
            <div v-for="lang in languages.items" :key="lang.name.en" class="print-lang-item">
              <span>{{ t(lang.name) }}</span>
              <span class="print-lang-level">{{ t(lang.level) }}</span>
            </div>
          </section>
        </aside>

        <!-- RIGHT: Summary + Experience -->
        <main class="print-main">
          <!-- Summary -->
          <section class="print-section">
            <h2 class="print-section-title">
              <span class="print-title-icon">📄</span>{{ currentLang === 'th' ? 'สรุปประวัติมืออาชีพ' : 'Professional Summary' }}
            </h2>
            <p class="print-summary">{{ t(summary) }}</p>
          </section>

          <!-- Experience -->
          <section class="print-section">
            <h2 class="print-section-title">
              <span class="print-title-icon">💼</span>{{ t(expSection.heading) }}
            </h2>
            <div class="print-exp-list">
              <article v-for="(item, i) in items" :key="i" class="print-exp-item">
                <div class="print-exp-header">
                  <span class="print-exp-title">{{ t(item.role) }} · <span class="print-exp-company">{{ item.company }}</span></span>
                  <span class="print-exp-period">{{ t(item.period) }}</span>
                </div>
                <ul class="print-exp-bullets">
                  <li v-for="(b, j) in item.bullets" :key="j" v-html="t(b)"></li>
                </ul>
              </article>

              <!-- Early Career -->
              <div class="print-early-career">
                <strong>{{ t(earlyCareer.title) }}:</strong>
                <span v-for="(entry, idx) in earlyCareer.entries" :key="idx">
                  {{ entry.company }} ({{ t(entry.period) }})
                  <template v-if="idx < earlyCareer.entries.length - 1">, </template>
                </span>
                — {{ t(earlyCareer.entries[0].summary) }}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<style>
/* ========== PRINT STYLES ========== */
@media print {
  /* Hide screen layout, show print layout */
  body > header,
  #app > *:not(#print-resume) {
    display: none !important;
  }

  #print-resume {
    display: block !important;
  }

  @page {
    size: A4 portrait;
    margin: 10mm 12mm;
  }

  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}

/* ========== PRINT RESUME STYLES ========== */
.print-page {
  font-family: 'Sarabun', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #13254D;
  font-size: 10pt;
  line-height: 1.45;
  max-width: 210mm;
  margin: 0 auto;
}

/* Header */
.print-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  border-bottom: 2px solid #1E3A8A;
  padding-bottom: 10px;
  margin-bottom: 12px;
}

.print-header-left {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.print-photo {
  width: 72px;
  height: 96px;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
  border: 1px solid #E2E8F0;
  flex-shrink: 0;
}

.print-header-main h1 {
  font-family: 'Inter', 'Sarabun', sans-serif;
  font-size: 20pt;
  font-weight: 700;
  color: #1E3A8A;
  letter-spacing: -0.3px;
  line-height: 1.15;
  margin: 0;
}

.print-secondary-name {
  font-size: 12pt;
  font-weight: 500;
  color: #475569;
  margin-left: 4px;
}

.print-role {
  font-size: 11.5pt;
  font-weight: 600;
  color: #EA580C;
  margin-top: 3px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.print-contact {
  display: grid;
  grid-template-columns: auto auto;
  gap: 4px 16px;
  font-size: 8.8pt;
  text-align: right;
  flex-shrink: 0;
}

.print-contact-item {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: inherit;
}

.print-contact-icon {
  font-size: 10pt;
}

/* Metrics Bar */
.print-metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-left: 3px solid #EA580C;
  padding: 6px 12px;
  border-radius: 4px;
  margin-bottom: 14px;
  break-inside: avoid;
}

.print-metric {
  text-align: center;
}

.print-metric-value {
  font-family: 'Inter', 'Sarabun', sans-serif;
  font-weight: 700;
  font-size: 11pt;
  color: #C62828;
  line-height: 1.1;
}

.print-metric-label {
  font-size: 7.5pt;
  color: #475569;
  font-weight: 500;
  margin-top: 1px;
}

/* 2-Column Grid */
.print-grid {
  display: grid;
  grid-template-columns: 58mm 1fr;
  gap: 14mm;
}

/* Sidebar */
.print-sidebar {
  border-right: 1px solid #E2E8F0;
  padding-right: 12mm;
}

.print-section {
  margin-bottom: 12px;
  break-inside: avoid;
}

.print-section-title {
  font-family: 'Inter', 'Sarabun', sans-serif;
  font-size: 9.8pt;
  font-weight: 700;
  color: #1E3A8A;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  border-bottom: 1.5px solid #2563EB;
  padding-bottom: 3px;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 5px;
}

.print-title-icon {
  font-size: 11pt;
  color: #2563EB;
}

/* Skills */
.print-skill-group {
  margin-bottom: 6px;
}

.print-skill-group-name {
  font-size: 8.2pt;
  font-weight: 600;
  margin-bottom: 3px;
}

.print-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}

.print-chip {
  background: #EFF6FF;
  color: #1E3A8A;
  border: 1px solid #BFDBFE;
  padding: 1.5px 5px;
  border-radius: 3px;
  font-size: 7.5pt;
  font-weight: 500;
}

/* Personality */
.print-personality-box {
  background: #FFFBEB;
  border: 1px solid #FDE68A;
  border-radius: 4px;
  padding: 5px;
  font-size: 7.5pt;
  color: #92400E;
  line-height: 1.35;
}

.print-personality-badge {
  font-weight: 700;
  color: #B45309;
  display: flex;
  align-items: center;
  gap: 3px;
  margin-bottom: 2px;
}

/* Education */
.print-edu-degree {
  font-weight: 600;
  font-size: 8.5pt;
  line-height: 1.25;
}

.print-edu-school {
  font-size: 7.8pt;
  color: #475569;
}

.print-edu-year {
  font-size: 7.2pt;
  color: #EA580C;
  font-weight: 600;
}

/* Languages */
.print-lang-item {
  display: flex;
  justify-content: space-between;
  font-size: 8pt;
  margin-bottom: 2px;
}

.print-lang-level {
  color: #475569;
  font-size: 7.2pt;
}

/* Main Column */
.print-main {
  /* fluid */
}

.print-summary {
  font-size: 8.8pt;
  line-height: 1.45;
  text-align: justify;
  margin: 0;
}

/* Experience */
.print-exp-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.print-exp-item {
  break-inside: avoid;
}

.print-exp-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1px;
}

.print-exp-title {
  font-size: 9pt;
  font-weight: 700;
  color: #1E3A8A;
}

.print-exp-company {
  color: #EA580C;
  font-weight: 600;
}

.print-exp-period {
  font-family: 'Inter', 'Sarabun', sans-serif;
  font-size: 7.5pt;
  font-weight: 600;
  color: #475569;
  white-space: nowrap;
}

.print-exp-bullets {
  list-style-type: none;
  padding-left: 0;
  margin: 2px 0 0 0;
}

.print-exp-bullets li {
  position: relative;
  padding-left: 10px;
  font-size: 8.2pt;
  line-height: 1.35;
  margin-bottom: 2px;
}

.print-exp-bullets li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: -1px;
  color: #2563EB;
  font-weight: bold;
  font-size: 9pt;
}

/* Early Career */
.print-early-career {
  background: #F8FAFC;
  border: 1px dashed #E2E8F0;
  border-radius: 4px;
  padding: 4px 7px;
  font-size: 7.5pt;
  color: #475569;
  line-height: 1.3;
  margin-top: 3px;
}

.print-early-career strong {
  color: #1E3A8A;
}
</style>