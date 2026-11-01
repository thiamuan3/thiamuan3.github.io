import { items, earlyCareer } from './experience'

/**
 * Print-only copy for the one-page A4 resume (PrintResume.vue).
 *
 * Text is shortened here, not in experience.js, so fitting the paper never
 * changes the approved wording on the web page. Thai is reused from
 * experience.js (already approved for print); only English is rewritten, except
 * Noble's merged Auto Label + MOA bullet, which exists only in print.
 * Noble's umbrella "System Architecture & Automation" bullet is left out of
 * print (owner decision) — the Auto Label / Pre-Transfer / Back-Office bullets
 * and the Tech Stack tags already carry its content; the web page keeps it.
 * Entries without an override print their web wording unchanged.
 *
 * Bullets are HTML strings rendered with v-html — repo-static data only,
 * never user input.
 *
 * @typedef {{ en: string, th: string }} Bi
 */

const NOBLE = 'Noble Development Public Company Limited'
const MONEYTABLE = 'MoneyTable Public Company Limited'
const ADVANCE_INNOVATION = 'Advance Innovation Technology'

// Looked up by company so reordering experience.js cannot misalign the overrides.
const webBullets = (company) => items.find((item) => item.company === company).bullets
const webEarlySummary = (company) => earlyCareer.entries.find((entry) => entry.company === company).summary

const noble = webBullets(NOBLE)
const moneyTable = webBullets(MONEYTABLE)

/** @type {Record<string, Bi[]>} Print bullets keyed by experience company. */
export const printBullets = {
  [NOBLE]: [
    {
      en: '<strong>Auto Label &amp; MOA Generation:</strong> Automated mail-label and high-volume legal MOA document generation, eliminating manual data entry.',
      th: '<strong>Auto Label &amp; MOA Generation:</strong> พัฒนาระบบสร้างใบจ่าหน้าและเอกสารสัญญาแนบท้าย (MOA) อัตโนมัติ ลดปัญหาคอขวดจากการกรอกข้อมูลด้วยมือในกระบวนการกระจายเอกสารโครงการ',
    },
    {
      en: '<strong>Pre-Transfer Management System:</strong> Built the system to streamline cross-department document handoffs and unit inspection sign-offs.',
      th: noble[2].th,
    },
    {
      en: '<strong>Enterprise Back-Office Maintenance:</strong> Maintained and expanded Dockerized PHP/Laravel back-office suites (Universal Setup, POS, Operation Support, System Access Control).',
      th: noble[4].th,
    },
  ],
  [MONEYTABLE]: [
    {
      en: 'Built high-throughput Golang backend APIs for financial services portals.',
      th: moneyTable[0].th,
    },
    {
      en: 'Implemented loan-application verification workflows for compliance and ops.',
      th: moneyTable[1].th,
    },
  ],
}

/** @type {Record<string, Bi>} Print early-career summaries keyed by company. */
export const printEarlySummaries = {
  [ADVANCE_INNOVATION]: {
    en: 'Web Programmer (PHP) — Built customer-facing apps with CodeIgniter and MySQL.',
    th: webEarlySummary(ADVANCE_INNOVATION).th,
  },
}
