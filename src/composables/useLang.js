import { ref } from 'vue'

// localStorage key kept from the original site (plan D8, AC-04).
const LANG_STORAGE_KEY = 'portfolio_lang'
const SUPPORTED_LANGS = ['en', 'th']
const DEFAULT_LANG = 'en' // owner decision Q1: English first

// Document titles per language, from the two design exports (EN <title> and TH <title>).
// Wave 2's data module passes the real bilingual UI strings into useLang(titles)
// and can override these; defaults keep the Wave 1 shell fully functional.
const defaultDocumentTitles = {
  en: 'Anuchit Thiam-uan (อนุชิต เทียมอวน) — Senior Backend / Full-stack Developer',
  th: 'อนุชิต เทียมอวน - เว็บพอร์ตโฟลิโอ & เรซูเม่ (ฉบับภาษาไทย)',
}

let documentTitles = defaultDocumentTitles

function resolveInitialLang() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY)
    return SUPPORTED_LANGS.includes(saved) ? saved : DEFAULT_LANG
  } catch {
    // localStorage unavailable/blocked — fall back to English (plan risk R6).
    return DEFAULT_LANG
  }
}

// Module-level ref: every caller shares one language state.
const currentLang = ref(resolveInitialLang())

function applyLangToDocument(lang) {
  document.documentElement.lang = lang
  document.title = documentTitles[lang] || documentTitles[DEFAULT_LANG]
}

// Sync <html lang> + <title> once at startup so the very first frame is correct.
applyLangToDocument(currentLang.value)

/**
 * Bilingual language state.
 *
 * @param {{ en?: string, th?: string }} [titles] Optional per-language
 *   document.title overrides, supplied by the Wave 2 data module.
 */
export function useLang(titles) {
  if (titles) {
    documentTitles = titles
    applyLangToDocument(currentLang.value)
  }

  function setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang) || lang === currentLang.value) return
    currentLang.value = lang
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang)
    } catch {
      /* storage unavailable — keep the in-memory choice only */
    }
    applyLangToDocument(lang)
  }

  /**
   * Pick a value for the current language. Accepts a bilingual `{ en, th }`
   * object or an already-single-language string (A7 fields like 'VERIFIED').
   * English is the fallback when a translation is missing.
   */
  function t(value) {
    if (typeof value === 'string') return value
    if (!value) return ''
    return value[currentLang.value] ?? value.en
  }

  return { currentLang, setLang, t }
}
