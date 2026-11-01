/**
 * About section (hero + Career Overview card + 4 stat cards).
 * Canonical strings per plan D9: EN = data-en of the EN export, TH = data-th
 * of the TH export wherever the EN export left English in the Thai slot.
 *
 * @typedef {Object} Bi Bilingual string picked by locale key.
 * @property {string} en English text.
 * @property {string} th Thai text.
 */

import { stats, coreSpecialty, workingStyle } from './profile.js'

/** Hero photo / badge — export ships the badge title as one combined string. */
export const hero = {
  badgeTitle: 'Ready to work / พร้อมเริ่มงาน',
  photoAlt: {
    en: 'Anuchit Thiam-uan (อนุชิต เทียมอวน)',
    th: 'อนุชิต เทียมอวน (Anuchit Thiam-uan)',
  },
}

/**
 * Career Overview card (top-right of the hero).
 * The old "VERIFIED" badge was removed by owner decision — no backing source.
 */
export const overviewCard = {
  label: { en: 'Career Overview', th: 'ภาพรวมประสบการณ์' },
  stats: [
    { value: stats.yearsExperience, label: { en: 'Software Engineering', th: 'Software Engineering' } },
    { value: stats.enterpriseCount, label: { en: 'Enterprises & Public Cos.', th: 'องค์กรชั้นนำ & มหาชน' } },
  ],
  rows: [
    // canonical: TH export (EN export left these labels in English)
    { label: { en: 'Core Specialty:', th: 'ความเชี่ยวชาญหลัก:' }, value: coreSpecialty },
    { label: { en: 'Working Style:', th: 'รูปแบบการทำงาน:' }, value: workingStyle },
  ],
}

/**
 * @typedef {Object} StatCard
 * @property {Bi} title
 * @property {Bi|string} value Bilingual value or A7 single value.
 * @property {Bi} description
 */

/** Four highlight cards, in design order (values: reuse/EN-only where export has no translation). */
export const statCards = [
  {
    title: { en: 'Professional Experience', th: 'ประสบการณ์วิชาชีพ' },
    value: stats.yearsExperience,
    description: {
      en: 'Continuous track record in software engineering',
      th: 'การทำงานต่อเนื่องในสายงาน Software Development',
    },
  },
  {
    title: { en: 'Enterprise Impact', th: 'การพัฒนาองค์กร' },
    value: { en: 'Enterprise', th: 'Enterprise' },
    description: {
      en: 'Built systems for public enterprises & tech solution firms',
      th: 'พัฒนาระบบให้ทั้งบริษัทมหาชน และ Tech Solutions',
    },
  },
  {
    title: { en: 'Core Tech Stack', th: 'Core Tech Stack' },
    value: 'Node · Vue · PHP · Go', // plain text in export, no translation exists
    description: { en: 'RESTful APIs, MySQL, Docker & Git', th: 'RESTful APIs, MySQL, Docker & Git' },
  },
  {
    title: { en: 'Work Personality', th: 'บุคลิกภาพการทำงาน' },
    value: stats.personalityCode,
    description: {
      en: 'Adaptive communicator, pragmatic problem solver',
      th: 'ปรับตัวเก่ง มุ่งเน้นการแก้ปัญหาที่เรียบง่ายและยั่งยืน',
    },
  },
]
