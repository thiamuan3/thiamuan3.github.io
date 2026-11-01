<script setup>
import { useLang } from '../composables/useLang'
import { name, secondaryName, summary, location, contact, getEmail, getTel, getTelDisplay } from '../data/profile'
import { items, earlyCareer } from '../data/experience'
import { degree, languages } from '../data/education'
import profileImg from '../assets/profile.jpg'

const { currentLang, t } = useLang()
</script>

<template>
  <div class="hidden print:block" id="print-resume">
    <main class="print-sheet">

      <!-- HEADER: Identity, Photo, Contact, Summary -->
      <header class="print-header-block">
        <div class="print-header-row">
          <div class="print-header-text">
            <h1 class="print-name">
              {{ t(name) }}
              <span class="print-secondary">{{ t(secondaryName) }}</span>
            </h1>
            <p class="print-role">Senior Full Stack Developer / Software Engineer</p>
            <div class="print-contact-line">
              {{ t(location) }} · {{ getEmail() }} · {{ getTelDisplay() }}
            </div>
            <div class="print-linkedin">{{ contact.linkedinDisplay }}</div>
          </div>
          <div class="print-header-photo">
            <img :src="profileImg" :alt="t(name)" width="88" height="105" class="print-photo-img" />
          </div>
        </div>
        <p class="print-summary">
          <span v-if="currentLang === 'th'">
            นักพัฒนา <strong>Full Stack</strong> ประสบการณ์กว่า <strong>15+ ปี</strong> ผ่านการทำงานกับองค์กรชั้นนำและมหาชน <strong>8+ แห่ง</strong> ในการออกแบบและพัฒนาระบบเว็บแอปพลิเคชัน ระบบอัตโนมัติทางธุรกิจ และระบบแบ็กเอนด์ระดับองค์กร ด้วย <strong>Node.js, Vue.js, PHP (Laravel, CodeIgniter)</strong> และ <strong>Golang</strong> พร้อมประสบการณ์ด้าน <strong>Docker</strong> และ AI-assisted development
          </span>
          <span v-else>
            Results-driven <strong>Full Stack Developer</strong> with over <strong>15+ years</strong> of experience across <strong>8+ enterprises &amp; public companies</strong>, designing and deploying scalable web applications, business automation pipelines, and enterprise backend systems. Specialized in <strong>Node.js, Vue.js, PHP (Laravel, CodeIgniter)</strong>, and <strong>Golang</strong>, with robust experience in <strong>Docker</strong> and AI-assisted development.
          </span>
        </p>
      </header>

      <!-- TWO-COLUMN LAYOUT -->
      <div class="print-grid">

        <!-- LEFT: Skills, Personality, Education, Languages, Stats -->
        <aside class="print-left">

          <!-- Technical Skills -->
          <section class="print-left-section">
            <h2 class="print-left-title">
              {{ currentLang === 'th' ? 'ทักษะทางเทคนิค' : 'Technical Skills' }}
            </h2>
            <div class="print-skill-item">
              <div class="print-skill-label">{{ currentLang === 'th' ? 'Backend & Architecture' : 'Backend &amp; Architecture' }}</div>
              <p class="print-skill-text">Node.js (Express, Fastify), PHP (Laravel, CodeIgniter), Golang, RESTful APIs, OOP Architecture</p>
            </div>
            <div class="print-skill-item">
              <div class="print-skill-label">{{ currentLang === 'th' ? 'Frontend & UI' : 'Frontend &amp; UI' }}</div>
              <p class="print-skill-text">Vue.js, Nuxt.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS</p>
            </div>
            <div class="print-skill-item">
              <div class="print-skill-label">{{ currentLang === 'th' ? 'Database & DevOps' : 'Database &amp; DevOps' }}</div>
              <p class="print-skill-text">MySQL, PostgreSQL, MongoDB, Docker Containerization, Git Workflow, Agile / Scrum</p>
            </div>
            <div class="print-skill-item">
              <div class="print-skill-label" style="color: #059669;">{{ currentLang === 'th' ? 'AI-Assisted Engineering' : 'AI-Assisted Engineering' }}</div>
              <p class="print-skill-text">Claude Code, Antigravity, OpenCode (Workflow automation &amp; agentic development)</p>
            </div>
          </section>

          <!-- Work Personality -->
          <section class="print-left-section">
            <h2 class="print-left-title">
              Work Personality: ENFP-A
            </h2>
            <p class="print-personality-sub">16Personalities · Campaigner (Assertive)</p>
            <ul class="print-personality-list">
              <li><strong>{{ currentLang === 'th' ? 'แก้ปัญหาได้หลากหลาย:' : 'Adaptive Problem Solver:' }}</strong> {{ currentLang === 'th' ? 'ปรับตัวและเข้าใจระบบ Legacy ได้รวดเร็ว' : 'Quickly unpacks legacy codebases into modern solutions.' }}</li>
              <li><strong>{{ currentLang === 'th' ? 'ทำงานข้ามสายงาน:' : 'Cross-Functional:' }}</strong> {{ currentLang === 'th' ? 'เชื่อมโยงระหว่างทีมเทคนิคและฝ่ายบริหาร' : 'Seamless bridging between technical units &amp; management.' }}</li>
              <li><strong>{{ currentLang === 'th' ? 'สถาปัตยกรรมที่ใช้ได้จริง:' : 'Pragmatic Architecture:' }}</strong> {{ currentLang === 'th' ? 'เน้นการออกแบบที่ดูแลรักษาง่าย' : 'Focuses on low-overhead, maintainable design.' }}</li>
            </ul>
          </section>

          <!-- Education -->
          <section class="print-left-section">
            <h2 class="print-left-title">
              {{ currentLang === 'th' ? 'การศึกษา' : 'Education' }}
            </h2>
            <div class="print-edu-degree">Bachelor of Science (B.Sc.)</div>
            <div class="print-edu-major">Computer Science</div>
            <div class="print-edu-school">Khon Kaen University (KKU)</div>
            <div class="print-edu-year">2007 – 2011</div>
          </section>

          <!-- Languages -->
          <section class="print-left-section">
            <h2 class="print-left-title">
              {{ currentLang === 'th' ? 'ภาษา' : 'Languages' }}
            </h2>
            <div v-for="lang in languages.items" :key="lang.name.en" class="print-lang-row">
              <span class="print-lang-name">{{ t(lang.name) }}</span>
              <span class="print-lang-level">{{ t(lang.level) }}</span>
            </div>
          </section>

          </aside>

        <!-- RIGHT: Professional Experience -->
        <section class="print-right">
          <h2 class="print-right-title">
            {{ currentLang === 'th' ? 'ประสบการณ์การทำงาน' : 'Professional Experience' }}
          </h2>

          <article v-for="(item, i) in items" :key="i" class="print-exp-entry" :class="i === 0 ? 'print-exp-highlight' : ''">
            <div class="print-exp-header-row">
              <h3 class="print-exp-role">{{ t(item.role) }}</h3>
              <span class="print-exp-period">{{ t(item.period) }}</span>
            </div>
            <div class="print-exp-company">{{ item.company }}</div>
            <ul class="print-exp-list">
              <li v-for="(b, j) in item.bullets" :key="j" v-html="t(b)"></li>
            </ul>
            <div class="print-exp-tags" v-if="item.techTags?.length">
              Tech Stack: {{ item.techTags.join(' · ') }}
            </div>
          </article>

          <!-- Early Career — page 2, formatted like left-column items -->
          <article class="print-early print-exp-entry" style="page-break-before: always;">
            <div class="print-early-header">
              <span>{{ currentLang === 'th' ? 'ช่วงเริ่มต้นอาชีพ' : 'Early Career Foundation' }}</span>
              <span class="print-early-range">{{ earlyCareer.range }}</span>
            </div>
            <div v-for="(entry, idx) in earlyCareer.entries" :key="idx" class="print-early-item">
              <div class="print-early-name">{{ entry.company }}</div>
              <div class="print-early-period-text">{{ t(entry.period) }}</div>
              <div class="print-early-desc">{{ t(entry.summary) }}</div>
            </div>
          </article>

        </section>
      </div>

    </main>
  </div>
</template>

<style>
/* ========== PRINT ONLY: show print layout ========== */
@media print {
  .screen-only { display: none !important; }
  #print-resume { display: block !important; }
  @page { size: A4 portrait; margin: 10mm 12mm; }
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  body { background: #FFFFFF !important; padding: 0 !important; margin: 0 !important; }
}

/* ========== A4 Sheet ========== */
.print-sheet {
  font-family: 'Inter', 'Prompt', 'Sarabun', sans-serif;
  color: #13254D;
  background: #FFFFFF;
  max-width: 210mm;
  margin: 0 auto;
  padding: 0;
}

/* ========== HEADER ========== */
.print-header-block {
  border-bottom: 2px solid #1E3A8A;
  padding-bottom: 10px;
  margin-bottom: 12px;
}

.print-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
}

.print-header-text { flex: 1; }

.print-name {
  font-family: 'Prompt', 'Inter', sans-serif;
  font-size: 23pt;
  font-weight: 700;
  color: #1E3A8A;
  line-height: 1.15;
  margin: 0;
}
.print-secondary {
  font-size: 14pt;
  font-weight: 400;
  color: #475569;
  margin-left: 4px;
}

.print-role {
  font-size: 12pt;
  font-weight: 600;
  color: #EA580C;
  margin: 2px 0 0 0;
}

.print-contact-line {
  font-size: 9.5pt;
  color: #13254D;
  font-weight: 500;
  margin-top: 5px;
}
.print-linkedin {
  font-size: 8.5pt;
  color: #475569;
  font-family: monospace;
  margin-top: 1px;
}

.print-header-photo { flex-shrink: 0; }
.print-photo-img {
  width: 88px;
  height: 105px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #E2E8F0;
}

.print-summary {
  font-size: 10pt;
  line-height: 1.42;
  color: #13254D;
  text-align: justify;
  margin: 8px 0 0 0;
}
.print-summary strong { color: #1E3A8A; }

/* ========== TWO-COLUMN GRID ========== */
.print-grid {
  display: grid;
  grid-template-columns: 4fr 8fr;
  gap: 16px;
}

/* ========== LEFT COLUMN ========== */
.print-left { padding-right: 0; }

.print-left-section { margin-bottom: 10px; }

.print-left-title {
  font-size: 9.5pt;
  font-weight: 700;
  color: #1E3A8A;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #E2E8F0;
  padding-bottom: 2px;
  margin: 0 0 5px 0;
  font-family: 'Prompt', 'Inter', sans-serif;
}

/* Skills */
.print-skill-item { margin-bottom: 7px; }
.print-skill-label { font-size: 9pt; font-weight: 700; color: #13254D; }
.print-skill-text { font-size: 8.5pt; color: #334155; line-height: 1.3; margin: 1px 0 0 0; }

/* Personality */
.print-personality-sub { font-size: 8pt; color: #475569; font-weight: 500; margin: 0; }
.print-personality-list {
  font-size: 8.5pt;
  color: #334155;
  line-height: 1.3;
  margin: 4px 0 0 0;
  padding-left: 14px;
}
.print-personality-list li { margin-bottom: 2px; }
.print-personality-list strong { color: #13254D; }

/* Education */
.print-edu-degree { font-size: 9.5pt; font-weight: 700; color: #13254D; }
.print-edu-major { font-size: 9pt; color: #EA580C; font-weight: 600; }
.print-edu-school { font-size: 8.5pt; color: #475569; margin-top: 1px; }
.print-edu-year { font-size: 8pt; color: #64748B; font-family: monospace; }

/* Languages */
.print-lang-row { display: flex; justify-content: space-between; font-size: 9pt; margin-bottom: 1px; }
.print-lang-name { font-weight: 600; color: #13254D; }
.print-lang-level { color: #475569; }

/* ========== RIGHT COLUMN ========== */
.print-right-title {
  font-size: 9.5pt;
  font-weight: 700;
  color: #1E3A8A;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #1E3A8A;
  padding-bottom: 2px;
  margin: 0 0 8px 0;
  font-family: 'Prompt', 'Inter', sans-serif;
}

/* Experience entries */
.print-exp-entry {
  position: relative;
  padding-left: 10px;
  border-left: 2px solid #CBD5E1;
  margin-bottom: 9px;
  break-inside: avoid;
}
.print-exp-highlight { border-left-color: #EA580C; }

.print-exp-header-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.print-exp-role {
  font-size: 10.5pt;
  font-weight: 700;
  color: #1E3A8A;
  font-family: 'Prompt', 'Inter', sans-serif;
  margin: 0;
}
.print-exp-period {
  font-size: 8.5pt;
  font-weight: 600;
  color: #475569;
  font-family: monospace;
  white-space: nowrap;
}
.print-exp-company {
  font-size: 9pt;
  font-weight: 600;
  color: #13254D;
}

.print-exp-list {
  font-size: 9pt;
  line-height: 1.32;
  color: #13254D;
  margin: 3px 0 0 0;
  padding-left: 14px;
}
.print-exp-list li { margin-bottom: 1px; }
.print-exp-list strong { color: #13254D; }

.print-exp-tags {
  font-size: 7.8pt;
  font-weight: 500;
  color: #64748B;
  margin-top: 2px;
}

/* Early Career */
.print-early {
  border-top: 1px solid #E2E8F0;
  padding-top: 6px;
  margin-top: 2px;
}
.print-early-header {
  display: flex;
  justify-content: space-between;
  font-size: 9pt;
  font-weight: 700;
  color: #13254D;
  margin-bottom: 3px;
}
.print-early-range {
  font-size: 8pt;
  font-weight: 400;
  color: #64748B;
  font-family: monospace;
}
.print-early-item {
  margin-bottom: 3px;
  break-inside: avoid;
}
.print-early-name {
  font-size: 8.5pt;
  font-weight: 600;
  color: #13254D;
}
.print-early-period-text {
  font-size: 7.5pt;
  color: #64748B;
}
.print-early-desc {
  font-size: 8pt;
  color: #475569;
  line-height: 1.25;
}
</style>