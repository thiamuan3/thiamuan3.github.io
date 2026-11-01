/**
 * Skills section — 4 categories with bilingual labels and A7 tech chips.
 * Canonical strings per plan D9: EN = data-en of the EN export, TH = data-th
 * of the TH export wherever the EN export left English in the Thai slot.
 * Chips stay single-value (A7 group: tech tags are never translated).
 *
 * @typedef {Object} Bi Bilingual string picked by locale key.
 * @property {string} en English text.
 * @property {string} th Thai text.
 */

/**
 * @typedef {Object} SkillCategory
 * @property {string} icon Material Symbols name.
 * @property {Bi} title
 * @property {Bi} subtitle
 * @property {Bi} chipGroupLabel
 * @property {string[]} chips Tech tags (A7 — single value).
 */

/** Section header. */
export const section = {
  eyebrowIcon: 'terminal',
  // canonical: TH export (EN export left English in the Thai slot)
  eyebrow: { en: 'Technical Arsenal', th: 'คลังทักษะทางเทคนิค' },
  heading: { en: 'Technical Skills & Competencies', th: 'ทักษะและความเชี่ยวชาญทางเทคนิค' },
  intro: {
    en: 'Categorized by operational domain: Back-office systems, Enterprise APIs, Distributed Systems, and AI-Assisted Engineering',
    th: 'แยกตามหมวดหมู่ครอบคลุมการพัฒนา Back-office, Enterprise APIs, Distributed Architecture และการเขียนโปรแกรมร่วมกับ AI',
  },
}

/** Four skill categories, in design order. */
export const categories = [
  {
    icon: 'dns',
    // canonical: TH export (EN export left English in the Thai slot)
    title: { en: 'Backend & Languages', th: 'Backend & ภาษาโปรแกรม' },
    subtitle: { en: 'Core Server Technologies & Frameworks', th: 'ภาษาโปรแกรมและเฟรมเวิร์กเซิร์ฟเวอร์' },
    chipGroupLabel: { en: 'Core Technologies', th: 'เทคโนโลยีหลัก' },
    chips: ['PHP (Laravel, CodeIgniter)', 'Node.js', 'Golang (Go)'],
  },
  {
    icon: 'devices',
    // canonical: TH export
    title: { en: 'Frontend & Integration', th: 'Frontend & การเชื่อมต่อระบบ' },
    subtitle: { en: 'UI Frameworks & External APIs', th: 'ส่วนติดต่อผู้ใช้และการเชื่อมต่อระบบ' },
    chipGroupLabel: { en: 'Frontend & APIs', th: 'Frontend & APIs' }, // kept English in both exports
    chips: ['Vue.js', 'JavaScript', 'RESTful APIs & System Integration'],
  },
  {
    icon: 'cloud_sync',
    // canonical: TH export
    title: { en: 'Database & Tools', th: 'ฐานข้อมูล & เครื่องมือพัฒนา' },
    subtitle: { en: 'Persistence & DevOps Tooling', th: 'ฐานข้อมูลและเครื่องมือพัฒนา' },
    chipGroupLabel: { en: 'Storage & Workflow', th: 'ระบบจัดเก็บข้อมูลและเวิร์กโฟลว์' },
    chips: ['MySQL & Relational Databases', 'Docker', 'Git'],
  },
  {
    icon: 'smart_toy',
    // canonical: TH export
    title: { en: 'AI-Assisted Programming', th: 'การพัฒนาซอฟต์แวร์ด้วย AI' },
    subtitle: { en: 'Agentic Coding & AI Workflows', th: 'การพัฒนาซอฟต์แวร์ด้วย AI-Assisted Tools' },
    chipGroupLabel: { en: 'AI Tools & Agents', th: 'เครื่องมือและเอเจนต์ AI' },
    chips: ['Claude Code', 'Antigravity', 'OpenCode'],
  },
]
