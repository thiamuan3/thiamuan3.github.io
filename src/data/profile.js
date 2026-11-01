/**
 * Identity + contact data for header, hero and footer.
 * Contact values are stored split and assembled at runtime (plan D10) so no
 * full email/phone string exists in source.
 *
 * @typedef {Object} Bi Bilingual string picked by locale key.
 * @property {string} en English text.
 * @property {string} th Thai text.
 */

/** Primary name. */
export const name = { en: 'Anuchit Thiam-uan', th: 'อนุชิต เทียมอวน' }

/** Secondary name in parentheses — deliberately swapped per language in the export. */
export const secondaryName = { en: '(อนุชิต เทียมอวน)', th: '(Anuchit Thiam-uan)' }

/** Hero career summary paragraph. */
export const summary = {
  en: 'Full Stack & Backend Developer with over 15 years of experience delivering scalable web applications, internal automation tools, and enterprise workflows using Node.js, Vue.js, PHP (Laravel, CodeIgniter), and Golang. Experienced in collaborating across listed real estate developers, e-commerce, and software agencies, focusing on reliable backend systems and practical automation that streamline operations.',
  th: 'นักพัฒนา Full Stack & Backend ประสบการณ์กว่า 15 ปี เชี่ยวชาญการพัฒนาระบบเว็บแอปพลิเคชัน เครื่องมืออัตโนมัติภายในองค์กร และสถาปัตยกรรมระบบด้วย Node.js, Vue.js, PHP (Laravel, CodeIgniter) และ Golang ผ่านการทำงานร่วมกับองค์กรอสังหาริมทรัพย์ชั้นนำ ธุรกิจอีคอมเมิร์ซ และดิจิทัลเอเจนซี มุ่งเน้นการสร้างระบบที่เสถียร ดูแลง่าย และช่วยเพิ่มประสิทธิภาพการทำงานจริงในองค์กร',
}

/** Location chip text. */
export const location = {
  en: 'Bangkok / Ayutthaya, Thailand',
  th: 'กรุงเทพฯ / อยุธยา (Bangkok / Ayutthaya, Thailand)',
}

/**
 * Contact parts — split so no complete email/phone string sits in source (D10).
 * telParts renders as "083-536-6941".
 */
export const contact = {
  emailLocal: 'thiam.uan3',
  emailDomain: 'gmail.com',
  telParts: ['083', '536', '6941'],
  linkedinUrl: 'https://linkedin.com/in/karidoe',
  linkedinDisplay: 'linkedin.com/in/karidoe',
}

/** Full email, assembled only at runtime. */
export function getEmail() {
  return `${contact.emailLocal}@${contact.emailDomain}`
}

/** Phone number for tel: links, assembled only at runtime. */
export function getTel() {
  return contact.telParts.join('')
}

/** Phone number as displayed ("083-536-6941"). */
export function getTelDisplay() {
  return contact.telParts.join('-')
}

/** Headline numbers reused by the hero Career Overview card and stat cards. */
export const stats = {
  yearsExperience: { en: '15+ Years', th: '15+ ปี' },
  enterpriseCount: '8+', // A7 group: bare number, single value
  personalityCode: 'ENFP-A', // A7 group: single value
}

/** Career Overview row values — export keeps these English in both locales. */
export const coreSpecialty = { en: 'Full Stack & Automation', th: 'Full Stack & Automation' }
export const workingStyle = { en: 'Agile / Cross-functional', th: 'Agile / Cross-functional' }

/** Footer identity block. */
export const footer = {
  name: { en: 'Anuchit Thiam-uan (อนุชิต เทียมอวน)', th: 'อนุชิต เทียมอวน (Anuchit Thiam-uan)' },
  tagline: {
    en: 'Senior Full Stack Developer / Software Engineer — Node.js · Vue.js · PHP (Laravel, CodeIgniter) · Go',
    th: 'Senior Full Stack Developer / Software Engineer — Node.js · Vue.js · PHP (Laravel, CodeIgniter) · Go',
  },
}
