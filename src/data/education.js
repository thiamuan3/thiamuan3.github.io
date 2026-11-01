/**
 * Education & Languages section.
 * Canonical strings per plan D9: EN = data-en of the EN export, TH = data-th
 * of the TH export wherever the EN export left English/wrong text in the Thai
 * slot (the three known defects are fixed here). Years are CE (Q10).
 *
 * @typedef {Object} Bi Bilingual string picked by locale key.
 * @property {string} en English text.
 * @property {string} th Thai text.
 */

/**
 * @typedef {Object} LanguageItem
 * @property {Bi} name Language name row.
 * @property {Bi} level Proficiency label on the right.
 * @property {Bi} note Caption under the bar.
 * @property {number} percent Bar fill percentage (A7: number, single value).
 */

/** Section header. */
export const section = {
  eyebrowIcon: 'school',
  // canonical: TH export (D9 fix — EN export shipped "Academic Background" only)
  eyebrow: { en: 'Academic Background & Languages', th: 'ประวัติการศึกษา & ภาษา' },
  // canonical: TH export (D9 fix — heading uses the TH export's fuller Thai)
  heading: { en: 'Education & Languages', th: 'การศึกษา & ความสามารถทางภาษา' },
  intro: {
    en: 'Computer Science academic degree and verified linguistic proficiencies.',
    th: 'ประวัติการศึกษาด้านวิทยาการคอมพิวเตอร์ และระดับความเชี่ยวชาญการสื่อสารทางภาษา',
  },
}

/** Degree card (left column). */
export const degree = {
  level: { en: "Bachelor's Degree", th: 'ระดับปริญญาตรี (Bachelor\'s Degree)' },
  // canonical: TH export (EN export's Thai contained a stray <br>)
  name: {
    en: 'Bachelor of Science (B.Sc.) in Computer Science',
    th: 'วิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิทยาการคอมพิวเตอร์',
  },
  // canonical: TH export (D9 fix — EN export repeated the degree name here)
  focus: {
    en: 'Focus: Software Engineering, Data Structures & Systems Architecture',
    th: 'สาขาวิชา: วิศวกรรมซอฟต์แวร์, โครงสร้างข้อมูล และสถาปัตยกรรมระบบ',
  },
  // canonical: CE years only per Q10 (TH export had a dual Buddhist/CE range here)
  years: '2007 – 2011',
  university: { en: 'Khon Kaen University (KKU), Thailand', th: 'มหาวิทยาลัยขอนแก่น (Khon Kaen University)' },
}

/** Languages card (right column). */
export const languages = {
  title: { en: 'Languages', th: 'ความสามารถทางภาษา (Languages)' },
  items: [
    {
      name: { en: 'Thai', th: 'ภาษาไทย (Thai)' },
      level: { en: 'Native', th: 'เจ้าของภาษา (Native)' },
      note: { en: 'Native speaker', th: 'สื่อสารระดับเจ้าของภาษา' },
      percent: 100,
    },
    {
      name: { en: 'English', th: 'ภาษาอังกฤษ (English)' },
      level: { en: 'Working Proficiency', th: 'สื่อสารเพื่อการทำงาน (Working Proficiency)' },
      // canonical: TH export (EN export left English in the Thai slot)
      note: { en: 'Professional Working', th: 'ระดับใช้งานการทำงาน (Professional Working)' },
      percent: 80,
    },
  ],
  footnote: {
    en: 'Comfortable reading and writing technical specifications, documentation, and operational team communications.',
    th: 'อ่านและเขียน Technical Documentation และสื่อสารการทำงานได้อย่างราบรื่น',
  },
}
