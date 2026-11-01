# thiamuan3.github.io

Resume / portfolio webpage (TH/EN) ของ Anuchit Thiam-uan — deploy บน GitHub Pages ที่ <https://thiamuan3.github.io>

สร้างด้วย **Vue 3 + Vite + Tailwind CSS v4** — compile ก่อน push (ไม่มี CI): source อยู่ที่ root ของ repo, ผล build อยู่ใน `docs/` ซึ่ง GitHub Pages serve จาก `master /docs`

## โครงสร้างสำคัญ

```
index.html            ← Vite entry (ห้ามแก้บทบาทนี้)
src/
  assets/             รูปโปรไฟล์
  styles/main.css     Tailwind theme + print CSS
  composables/        useLang / useTheme / useToast
  data/               ★ เนื้อหา resume ทั้งหมด (EN/TH) — แก้เนื้อหาที่นี่
  components/         layout ราย section
docs/                 ผล build (commit ทุกครั้งหลัง deploy) — ★ ห้ามแก้ด้วยมือ
```

## Workflow

```bash
npm install
npm run dev       # พัฒนา
npm run build     # build ลง docs/ ก่อน deploy ทุกครั้ง
npm run preview   # ตรวจ production build บน local
```

**แก้เนื้อหา resume:** แก้ไฟล์ใน `src/data/` (ทุก field สองภาษาอยู่ในรูป `{ en, th }`) → `npm run build` → commit ทั้ง `src/` และ `docs/` → push ไป `master` → GitHub Pages อัปเดตเองใน ~1–2 นาที (HTML อาจติด edge cache สูงสุด ~10 นาที)

**กติกา:** ห้ามแก้ไฟล์ใน `docs/` โดยตรง — ทุก build เป็นการ replace ทั้งโฟลเดอร์ · ลำดับ deploy: push `docs/` ก่อน แล้วค่อยสลับ Pages source (ถ้าจะเปลี่ยน) ไม่งั้น site จะ 404

## GitHub Pages setting

Settings → Pages → Source: **Deploy from a branch** → Branch: `master` / folder: `/docs` — พร้อมติ๊ก Enforce HTTPS
