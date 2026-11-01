/**
 * Experience section — timeline items + early-career card.
 * Canonical strings per plan D9: EN = data-en of the EN export, TH = data-th
 * of the TH export wherever the two differ. All years are CE (Q10).
 *
 * Bullets are HTML strings (bold `<strong>` lead-in, rendered with v-html in
 * ExperienceItem — repo-static data only, never user input; XSS discipline
 * per plan step 9). Companies/roles/tech tags follow A7 (see notes below).
 *
 * @typedef {Object} Bi Bilingual string picked by locale key.
 * @property {string} en English text.
 * @property {string} th Thai text.
 */

/**
 * @typedef {Object} ExperienceItem
 * @property {boolean} highlight True = orange enterprise emphasis card (Noble).
 * @property {Bi} period Date range shown on the badge/chip.
 * @property {Bi} role Job title (kept English in both exports).
 * @property {string} company A7 group: company names stay in English.
 * @property {Bi[]} bullets HTML strings with <strong> lead-in.
 * @property {string[]} techTags A7 group: never translated.
 */

/**
 * @typedef {Object} EarlyCareerEntry
 * @property {string} company A7 group: English name (Thai transliterations in
 *   the TH export intentionally not carried over).
 * @property {Bi} period Date range inside the bold label.
 * @property {Bi} summary "Role — description" text.
 */

/** Section header. */
export const section = {
  eyebrowIcon: 'history_edu',
  // canonical: TH export (EN export left English in the Thai slot)
  eyebrow: { en: 'Proven Track Record', th: 'ผลงานและประสบการณ์ที่พิสูจน์ได้' },
  heading: { en: 'Professional Experience', th: 'ประสบการณ์การทำงานระดับมืออาชีพ' },
  // canonical: TH export (EN export's Thai had a longer "Result Formula" phrasing)
  intro: {
    en: 'Structured around Action Verb + Task + Business Outcome for demonstrated engineering value.',
    th: 'เรียบเรียงตามรูปแบบ Action Verb + Task + Result เพื่อสะท้อนคุณค่าที่ส่งมอบแก่ธุรกิจจริง',
  },
  // canonical: TH export (EN export's Thai referenced "Cinnabar Red" styling that no longer applies)
  note: {
    en: '* Enterprise highlights illustrate scalable full-stack impact',
    th: '* ไฮไลท์สะท้อนการสร้างผลลัพธ์และความพร้อมในการรองรับระบบขนาดใหญ่',
  },
}

/** Timeline items, newest first, in design order. */
export const items = [
  {
    highlight: true,
    period: { en: 'Dec 2022 – Oct 2026', th: 'ธ.ค. 2022 – ต.ค. 2026' },
    role: { en: 'Senior Full Stack Developer', th: 'Senior Full Stack Developer' },
    company: 'Noble Development Public Company Limited',
    bullets: [
      {
        en: '<strong class="text-slate-900 dark:text-white">System Architecture &amp; Automation:</strong> Architected and engineered end-to-end automation systems with Node.js and Vue.js for property management and unit handover operations.',
        // canonical: TH export (EN export inserted an English parenthetical mid-sentence)
        th: '<strong class="text-slate-900 dark:text-white">System Architecture &amp; Automation:</strong> ออกแบบและพัฒนาระบบอัตโนมัติแบบครบวงจรด้วย Node.js และ Vue.js สำหรับงานบริหารจัดการและการส่งมอบโครงการอสังหาริมทรัพย์',
      },
      {
        en: '<strong class="text-slate-900 dark:text-white">Auto Label Generation System:</strong> Engineered an automated label generator that eliminated manual data entry bottlenecks in parcel and document routing across development projects.',
        th: '<strong class="text-slate-900 dark:text-white">Auto Label Generation System:</strong> พัฒนาระบบสร้างใบจ่าหน้าอัตโนมัติ ช่วยลดปัญหาคอขวดจากการกรอกข้อมูลด้วยมือในกระบวนการกระจายเอกสารโครงการ',
      },
      {
        en: '<strong class="text-slate-900 dark:text-white">Pre-Transfer Management System:</strong> Built pre-transfer operations management system, streamlining cross-department document handoffs and unit inspection sign-offs.',
        th: '<strong class="text-slate-900 dark:text-white">Pre-Transfer Management System:</strong> พัฒนาระบบบริหารจัดการก่อนโอนกรรมสิทธิ์ เพิ่มความคล่องตัวในการประสานงานด้านเอกสารข้ามแผนกและรอบการอนุมัติส่งมอบโครงการ',
      },
      {
        en: '<strong class="text-slate-900 dark:text-white">MOA Document Generation System:</strong> Developed automated Memorandum of Agreement (MOA) generation tools, handling high-volume contract document assembly with legal formatting requirements.',
        th: '<strong class="text-slate-900 dark:text-white">MOA Document Generation System:</strong> ออกแบบระบบสร้างเอกสารสัญญาแนบท้าย (MOA) อัตโนมัติ รองรับการรวบรวมเอกสารทางกฎหมายปริมาณมากได้อย่างถูกต้อง',
      },
      {
        en: '<strong class="text-slate-900 dark:text-white">Enterprise Back-Office Maintenance:</strong> Maintained and expanded critical PHP/Laravel back-office suites (Universal Setup, POS, Operation Support, System Access Control) containerized with Docker.',
        th: '<strong class="text-slate-900 dark:text-white">Enterprise Back-Office Maintenance:</strong> ดูแล ปรับปรุง และต่อขยายซอฟต์แวร์ Back-office ระดับองค์กรที่สร้างด้วย PHP และ Laravel (Universal Setup, POS, Operation Support, System Access Control) โดยบริหารจัดการผ่าน Docker',
      },
    ],
    techTags: ['Node.js', 'Vue.js', 'PHP / Laravel', 'Docker', 'MySQL'],
  },
  {
    period: { en: 'Sep 2021 – Sep 2022', th: 'ก.ย. 2021 – ก.ย. 2022' },
    role: { en: 'Senior Software Developer', th: 'Senior Software Developer' },
    company: 'Arthur Southeast Asia',
    bullets: [
      {
        en: 'Led full-stack feature delivery following clean architecture principles, code reviews, and performance optimization.',
        // canonical: TH export (uses the actual term "Clean Architecture")
        th: 'นำการพัฒนาโมดูลทั้งฝั่ง Backend และ Frontend ตามแนวทาง Clean Architecture, การตรวจสอบโค้ด (Code Reviews) และการปรับแต่งประสิทธิภาพระบบ',
      },
      {
        en: 'Collaborated with cross-functional stakeholders on enterprise applications and messaging APIs using Laravel.',
        th: 'ทำงานร่วมกับผู้มีส่วนได้ส่วนเสียข้ามสายงาน (Cross-functional Stakeholders) ในการพัฒนาระดับองค์กรและระบบส่งข้อความ (Messaging APIs) ด้วย Laravel อย่างมีประสิทธิภาพ',
      },
    ],
    techTags: ['PHP (Laravel)', 'Messaging APIs', 'Code Review & Architecture'],
  },
  {
    period: { en: 'Apr 2018 – Aug 2020', th: 'เม.ย. 2018 – ส.ค. 2020' },
    role: { en: 'Web Developer', th: 'Web Developer' },
    company: 'Gogoprint (Thailand) Co., Ltd.',
    bullets: [
      {
        en: 'Developed and maintained internal workflow platforms connecting operations with printing partner networks.',
        // canonical: TH export
        th: 'พัฒนาและปรับปรุงแพลตฟอร์มจัดการข้อมูลภายใน เพื่อเชื่อมโยงกระบวนการทำงานระหว่างฝ่ายปฏิบัติการและเครือข่ายโรงพิมพ์พันธมิตร',
      },
      {
        en: 'Improved order processing reliability and reduced partner API integration latency.',
        // canonical: TH export
        th: 'ยกระดับความเสถียรในการประมวลผลคำสั่งซื้อ และลดความหน่วง (Latency) ในการเชื่อมต่อกับ Partner APIs',
      },
    ],
    techTags: ['Internal Platforms', 'Partner APIs', 'Workflow Optimization'],
  },
  {
    period: { en: 'Jun 2017 – Mar 2018', th: 'มิ.ย. 2017 – มี.ค. 2018' },
    role: { en: 'Web Developer', th: 'Web Developer' },
    company: 'MoneyTable Public Company Limited',
    bullets: [
      {
        en: 'Built high-throughput backend APIs with Golang for financial services portal applications.',
        // canonical: TH export
        th: 'พัฒนา High-Throughput Backend APIs ด้วย Golang สำหรับบริการทางการเงินและเว็บพอร์ทัล',
      },
      {
        en: 'Implemented verification workflows for loan application processing by compliance and ops teams.',
        // canonical: TH export
        th: 'ออกแบบและพัฒนาเวิร์กโฟลว์การตรวจสอบใบสมัครสินเชื่อสำหรับทีมฝ่ายกำกับและปฏิบัติการ',
      },
    ],
    techTags: ['Golang (Go)', 'Backend APIs', 'Verification Workflows'],
  },
  {
    period: { en: 'Nov 2013 – Dec 2017', th: 'พ.ย. 2013 – ธ.ค. 2017' },
    role: { en: 'Software Engineer', th: 'Software Engineer' },
    company: 'Tarad Dot Com (TARAD.com)',
    bullets: [
      {
        en: 'Engineered core e-commerce backend services, database management, and high-availability RESTful APIs.',
        // canonical: TH export
        th: 'พัฒนาบริการ Backend หลักของระบบ e-Commerce การบริหารจัดการฐานข้อมูล และ High-Availability RESTful APIs',
      },
      {
        en: 'Participated in Agile/Scrum sprints, utilized Git for version control, maintained legacy systems, and built new transactional features.',
        // canonical: TH export
        th: 'ร่วมทำงานในรูปแบบ Agile/Scrum sprints ใช้ Git สำหรับควบคุมเวอร์ชัน พร้อมดูแลรักษาระบบเดิมและพัฒนาฟีเจอร์ธุรกรรมออนไลน์ใหม่',
      },
    ],
    techTags: ['PHP', 'e-Commerce APIs', 'Agile / Scrum', 'MySQL'],
  },
]

/**
 * Early-career card (2010–2013) — separate export: different shape from the
 * timeline items; the template renders it as the 6th (last) timeline block.
 */
export const earlyCareer = {
  // canonical: TH export (EN export left English in the Thai slot)
  title: { en: 'Early Career Experience (2010 – 2013)', th: 'ประสบการณ์ช่วงเริ่มต้น (2010 – 2013)' },
  range: '2010 – 2013',
  entries: [
    {
      company: 'Digicrafts Co., Ltd.',
      period: { en: 'Dec 2012 – Oct 2013', th: 'ธ.ค. 2012 – ต.ค. 2013' },
      summary: {
        en: 'Web Programmer (PHP) — Developed statistical reporting tools, marketing campaign sites, and digital inventory systems.',
        th: 'Web Programmer (PHP) — พัฒนาระบบรายงานสถิติ (Statistical Reporting Tools), เว็บไซต์แคมเปญส่งเสริมการตลาด และระบบจัดการคลังสินค้าดิจิทัล (Digital Inventory Systems)',
      },
    },
    {
      company: 'Advance Innovation Technology',
      period: { en: 'Nov 2011 – Nov 2012', th: 'พ.ย. 2011 – พ.ย. 2012' },
      summary: {
        en: 'Web Programmer (PHP) — Built customer-facing web applications using CodeIgniter and MySQL.',
        th: 'Web Programmer (PHP) — พัฒนาพอร์ทัลและเว็บแอปพลิเคชันสำหรับลูกค้าด้วย CodeIgniter และ MySQL',
      },
    },
    {
      company: 'NHS Intercon',
      period: { en: 'Apr 2010 – Oct 2011', th: 'เม.ย. 2010 – ต.ค. 2011' },
      summary: {
        en: 'Web Developer (PHP) — Developed database-driven web solutions to client specifications.',
        th: 'Web Developer (PHP) — พัฒนาเว็บโซลูชันแบบ Database-driven ตามความต้องการของธุรกิจ',
      },
    },
  ],
}
