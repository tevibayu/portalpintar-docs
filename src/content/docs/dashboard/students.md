---
title: "Direktori Data Siswa"
---

Halaman ini berfungsi sebagai pusat basis data (database) murid yang terdaftar di lembaga bimbingan belajar Anda. Di sini, admin dapat mengelola identitas siswa secara terorganisir.

---

## 👥 Fitur Manajemen Siswa

1.  **Tabel & Pencarian Siswa**:
    *   Daftar seluruh siswa terdaftar yang dilengkapi dengan nama lengkap, ID unik siswa, nama kelas aktif, serta status keaktifan (Aktif, Lulus, Cuti, Nonaktif).
    *   Fitur cari nama siswa dan filter daftar berdasarkan nama kelas atau cabang bimbel.
2.  **Tambah & Edit Siswa Baru**:
    *   Formulir input data profil siswa: Nama lengkap, alamat email, nomor WhatsApp siswa, tanggal lahir (penting untuk perhitungan profil kognitif AI), alamat tempat tinggal, serta nama dan nomor WhatsApp wali/orang tua.
3.  **Tautan Akses Portal Murid (Magic Link)**:
    *   Di setiap profil siswa, sistem menyediakan tombol untuk menyalin **Magic Link** unik siswa.
    *   Wali murid atau siswa dapat masuk ke portal personal mereka (`/u/student/[token]`) secara langsung tanpa perlu password melalui tautan ini.
4.  **Menu Navigasi Cepat**:
    *   Tombol akses langsung untuk melakukan edit massal via spreadsheet (`/dashboard/students/sheet`) atau membuka halaman analisis minat bakat AI siswa (`/dashboard/students/[id]/persona`).

---

## Link Terkait
- `/dashboard/students`
