/**
 * Personality section (ENFP-A profile, trait bars, strength cards).
 * Canonical strings per plan D9: EN = data-en of the EN export, TH = data-th
 * of the TH export wherever the EN export left English in the Thai slot.
 * All dates use CE years (owner decision Q10) — Thai export's พ.ศ. converted.
 *
 * @typedef {Object} Bi Bilingual string picked by locale key.
 * @property {string} en English text.
 * @property {string} th Thai text.
 */

/**
 * @typedef {Object} TraitBar One 16Personalities dimension bar.
 * @property {'left'|'right'} highlightSide Which side carries the bold % and the filled bar.
 * @property {number} percent Highlighted trait's percentage (complement = other side).
 * @property {'sky'|'amber'|'emerald'|'purple'|'rose'} colorKey Bar color — mapped to a
 *   static class in the template (never a raw class string, plan D7/W1).
 * @property {Bi} leftLabel  Main-row left label (Thai carries the English term in parens).
 * @property {Bi} rightLabel Main-row right label.
 * @property {Bi} leftShort  Caption-row left label (Thai without parens).
 * @property {Bi} rightShort Caption-row right label.
 */

/**
 * @typedef {Object} StrengthCard
 * @property {string} icon Material Symbols name.
 * @property {Bi} title
 * @property {Bi} description
 */

/** Section header. `type` is reused by the profile card heading. */
export const section = {
  eyebrowIcon: 'psychology',
  // canonical: TH export (EN export left English in the Thai slot)
  eyebrow: { en: 'Workplace Psychology Profile', th: 'ผลวิเคราะห์จิตวิทยาการทำงาน' },
  // canonical: TH export
  headingLead: { en: '16Personalities Breakdown:', th: 'วิเคราะห์ผล 16Personalities:' },
  type: { en: 'Campaigner (ENFP-A)', th: 'นักรณรงค์ (ENFP-A)' },
  // canonical: TH export, Buddhist-era year converted to CE per Q10
  intro: {
    en: 'Official test results from 16Personalities.com (Completed: June 20, 2026), reflecting interpersonal agility and engineering leadership.',
    th: 'ข้อมูลผลการทดสอบจริงจาก 16Personalities.com (ทำแบบทดสอบเมื่อ: 20 มิ.ย. 2026) สะท้อนจุดแข็งในการขับเคลื่อนโปรเจกต์ไอที',
  },
  profileBadge: { en: 'Profile: ENFP-A (Assertive Campaigner)', th: 'ผลทดสอบ: ENFP-A (Assertive Campaigner)' },
}

/** Left-hand profile card. */
export const card = {
  label: { en: 'Personality Type', th: 'ประเภทบุคลิกภาพ' },
  type: section.type,
  // canonical: TH export (fuller sentence; EN export's Thai dropped the team clause)
  quote: {
    en: '“Campaigners are enthusiastic, creative, and sociable free spirits who can always find a reason to smile and energize team workflows.”',
    th: '“นักรณรงค์มีความกระตือรือร้น มีความคิดสร้างสรรค์ และมีมนุษยสัมพันธ์ที่ดี เป็นคนที่สามารถหาเหตุผลให้ยิ้มได้เสมอและสร้างพลังเชิงบวกให้กับทีมงาน”',
  },
  // canonical: TH export, Buddhist-era year converted to CE per Q10
  completedNote: { en: 'Completed: June 20, 2026', th: 'ทำแบบทดสอบแล้ว: 20 มิ.ย. 2026' },
}

// canonical: TH export (EN export had a shorter Thai label)
/** Traits panel heading. */
export const traitsHeading = { en: 'Personality Traits', th: 'ลักษณะและมิติบุคลิกภาพ' }

/** Five trait bars, in design order (Mind / Energy / Nature / Tactics / Identity). */
export const traits = [
  {
    highlightSide: 'left',
    percent: 54,
    colorKey: 'sky',
    leftLabel: { en: 'Extraverted', th: 'เปิดเผย (Extraverted)' },
    rightLabel: { en: 'Introverted', th: 'เก็บตัว (Introverted)' },
    leftShort: { en: 'Extraverted', th: 'เปิดเผย' },
    rightShort: { en: 'Introverted', th: 'เก็บตัว' },
  },
  {
    highlightSide: 'left',
    percent: 68,
    colorKey: 'amber',
    leftLabel: { en: 'Intuitive', th: 'หยั่งรู้ (Intuitive)' },
    rightLabel: { en: 'Observant', th: 'อยู่กับปัจจุบัน (Observant)' },
    leftShort: { en: 'Intuitive', th: 'หยั่งรู้' },
    rightShort: { en: 'Observant', th: 'อยู่กับปัจจุบัน' },
  },
  {
    highlightSide: 'right',
    percent: 58,
    colorKey: 'emerald',
    leftLabel: { en: 'Thinking', th: 'ชอบคิด (Thinking)' },
    rightLabel: { en: 'Feeling', th: 'แสดงอารมณ์ (Feeling)' },
    leftShort: { en: 'Thinking', th: 'ชอบคิด' },
    rightShort: { en: 'Feeling', th: 'แสดงอารมณ์' },
  },
  {
    highlightSide: 'right',
    percent: 51,
    colorKey: 'purple',
    leftLabel: { en: 'Judging', th: 'เจ้าระเบียบ (Judging)' },
    rightLabel: { en: 'Prospecting', th: 'มองหาโอกาส (Prospecting)' },
    leftShort: { en: 'Judging', th: 'เจ้าระเบียบ' },
    rightShort: { en: 'Prospecting', th: 'มองหาโอกาส' },
  },
  {
    highlightSide: 'left',
    percent: 56,
    colorKey: 'rose',
    leftLabel: { en: 'Assertive', th: 'มั่นใจ (Assertive)' },
    rightLabel: { en: 'Turbulent', th: 'ตื่นตัว (Turbulent)' },
    leftShort: { en: 'Assertive', th: 'มั่นใจ' },
    rightShort: { en: 'Turbulent', th: 'ตื่นตัว' },
  },
]

/** Three strength cards, in design order. */
export const strengths = [
  {
    icon: 'bolt',
    // canonical: TH export (EN export left English in the Thai slot)
    title: { en: 'Adaptive & Practical Problem Solving', th: 'การแก้ปัญหาที่ยืดหยุ่นและใช้งานได้จริง' },
    description: {
      en: 'Quickly unpacks changing project requirements and legacy codebases, turning technical friction into reliable software solutions.',
      th: 'พร้อมปรับตัวและเรียนรู้เทคโนโลยีใหม่ รวมถึงการทำความเข้าใจข้อกำหนดโครงการที่เปลี่ยนแปลงและระบบเดิม (Legacy Systems) ได้อย่างรวดเร็วและเป็นระบบ',
    },
  },
  {
    icon: 'diversity_3',
    // canonical: TH export
    title: { en: 'Cross-functional Collaboration', th: 'การประสานงานข้ามสายงานอย่างราบรื่น' },
    description: {
      en: 'Communicates empathetically across operations, business leads, and dev teams to ensure technical solutions address real workflow pain points.',
      th: 'สื่อสารอย่างมีประสิทธิภาพระหว่างฝ่ายปฏิบัติการ (Operations), ภาคธุรกิจ (Business) และทีมพัฒนา เพื่อให้ผลลัพธ์ทางเทคนิคสอดรับกับกระบวนการทำงานจริงของผู้ใช้',
    },
  },
  {
    icon: 'hub',
    // canonical: TH export
    title: { en: 'Pragmatic Architecture & Automation', th: 'สถาปัตยกรรมระบบที่เรียบง่ายและเป็นประโยชน์จริง' },
    description: {
      en: 'Focuses on maintainable, low-overhead tools and explicit data flows rather than over-engineered systems, prioritizing business outcomes.',
      th: 'มุ่งเน้นการออกแบบระบบที่เรียบง่าย ดูแลรักษาได้ในระยะยาว และการไหลของข้อมูลที่ชัดเจน เพื่อลดความซับซ้อนที่ไม่จำเป็นและเพิ่มความคล่องตัวในงานซอฟต์แวร์',
    },
  },
]
