# PortalPintar Docs

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Dokumentasi resmi platform **PortalPintar** — sistem manajemen bimbingan belajar all-in-one untuk Admin, Tutor, Siswa, dan Wali.

---

## 📚 Struktur Konten

Dokumentasi diorganisir berdasarkan peran pengguna:

| Direktori | Konten |
| :--- | :--- |
| `src/content/docs/auth/` | Autentikasi & Onboarding |
| `src/content/docs/dashboard/` | Dashboard Admin & Owner |
| `src/content/docs/tutor/` | Portal Tutor / Tentor |
| `src/content/docs/student/` | Portal Siswa & Wali |
| `src/content/docs/playground/` | Playground Interaktif |
| `src/content/docs/public/` | Halaman Publik |

---

## 🗂️ Struktur Project

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── TableOfContents.astro
│   │   └── MobileTableOfContents.astro
│   ├── content/
│   │   └── docs/
│   │       ├── auth/
│   │       ├── dashboard/
│   │       ├── tutor/
│   │       ├── student/
│   │       ├── playground/
│   │       └── public/
│   ├── styles/
│   │   └── custom.css
│   └── content.config.ts
├── astro.config.mjs
├── wrangler.toml
├── package.json
└── tsconfig.json
```

---

## 🧞 Commands

Semua perintah dijalankan dari root direktori project:

| Perintah | Aksi |
| :--- | :--- |
| `bun install` | Install dependencies |
| `bun run dev` | Jalankan dev server di `localhost:4321` |
| `bun run build` | Build production site ke `./dist/` |
| `bun run preview` | Preview build secara lokal sebelum deploy |

---

## 🚀 Deploy ke Cloudflare Pages

Site ini dikonfigurasi untuk di-deploy sebagai **static site** ke Cloudflare Pages.

**Pengaturan build di Cloudflare Pages dashboard:**

| Setting | Nilai |
| :--- | :--- |
| Framework preset | `Astro` |
| Build command | `bun run build` |
| Build output directory | `dist` |
| Node.js version | `18` atau `20` |

**Environment variable yang diperlukan:**

| Variable | Value |
| :--- | :--- |
| `BUN_VERSION` | `1` |

---

## 🔗 Links

- **Repository**: [github.com/tevibayu/portalpintar-docs](https://github.com/tevibayu/portalpintar-docs)
- **Astro Starlight**: [starlight.astro.build](https://starlight.astro.build)
- **Astro Docs**: [docs.astro.build](https://docs.astro.build)
