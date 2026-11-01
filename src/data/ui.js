/**
 * UI chrome strings (header nav, action buttons, document title, toast).
 * Content follows the two design exports (2026-11-01); EN = data-en of the EN
 * export, TH = data-th of the TH export per plan D9.
 *
 * @typedef {Object} Bi Bilingual string picked by locale key.
 * @property {string} en English text.
 * @property {string} th Thai text.
 */

/** @type {{ id: string, label: Bi }[]} Header nav links, in design order. */
export const nav = [
  { id: 'about', label: { en: 'About', th: 'เกี่ยวกับ' } },
  { id: 'personality', label: { en: 'ENFP-A Personality', th: 'ENFP-A บุคลิกภาพ' } },
  { id: 'skills', label: { en: 'Skills', th: 'ทักษะความเชี่ยวชาญ' } },
  { id: 'experience', label: { en: 'Experience', th: 'ประสบการณ์ทำงาน' } },
  { id: 'education', label: { en: 'Education', th: 'การศึกษา' } },
]

/** Header CTA button (opens mailto). */
export const getInTouch = { en: 'Get in Touch', th: 'ติดต่อร่วมงาน' }

/** Language switcher button titles — fixed per button, not locale-swapped (same in both exports). */
export const langSwitchTitles = {
  en: 'Switch to English',
  th: 'เปลี่ยนเป็นภาษาไทย',
}

/** Icon button titles — export ships each as one combined/unilingual string. */
export const buttonTitles = {
  print: 'Print Resume / พิมพ์ประวัติย่อ',
  theme: 'Toggle Dark / Light Mode',
  copyEmail: 'Copy Email',
}

/** Footer "Copy Email" button label. */
export const copyEmail = { en: 'Copy Email', th: 'คัดลอกอีเมล' }

/** Footer LinkedIn button label — A7 group, single value (never translated). */
export const linkedinLabel = 'LinkedIn Profile'

// canonical: TH export <title> (line 429); matches useLang defaults
/** @type {Bi} Document <title> per locale. */
export const docTitle = {
  en: 'Anuchit Thiam-uan (อนุชิต เทียมอวน) — Senior Backend / Full-stack Developer',
  th: 'อนุชิต เทียมอวน - เว็บพอร์ตโฟลิโอ & เรซูเม่ (ฉบับภาษาไทย)',
}

/** Toast messages for the copy-email action (success + fallback + error paths). */
export const toast = {
  emailCopied: { en: 'Email copied!', th: 'คัดลอกอีเมลแล้ว!' },
  copied: { en: 'Copied to clipboard!', th: 'คัดลอกข้อมูลสำเร็จ!' },
  copyFailed: { en: 'Failed to copy', th: 'ไม่สามารถคัดลอกได้' },
}
