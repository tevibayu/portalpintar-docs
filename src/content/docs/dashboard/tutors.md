---
title: "Manajemen Tutor & Slip Gaji"
---

Halaman Manajemen Tutor digunakan oleh admin untuk mengelola basis data pengajar (tentor), mata pelajaran yang mereka kuasai, penugasan cabang, serta perhitungan otomatis honorarium mengajar bulanan.

---

## Fitur Utama Pengelolaan Tutor

1.  **Daftar Tutor Aktif**:
    *   Tabel yang menampilkan nama lengkap tutor, email, nomor WhatsApp, status aktif, mata pelajaran yang diampu, serta cabang bimbel tempat bertugas.
2.  **Tambah & Edit Profil Tutor**:
    *   Formulir input data profil pengajar, status kontrak, nomor rekening bank untuk penggajian, serta tarif honorarium dasar per sesi mengajar.
3.  **Pengaturan Spesialisasi Mata Pelajaran**:
    *   Memetakan mapel apa saja yang diperbolehkan diampu oleh tutor tersebut. Ini akan menyaring pilihan tutor secara otomatis saat admin membuat jadwal kelas baru.
4.  **Tautan Masuk Portal Tutor (Magic Link)**:
    *   Setiap profil tutor dilengkapi tombol untuk menyalin **Magic Link** unik tutor.
    *   Tutor dapat mengakses dasbor mengajar mereka di `/u/tutor/[token]` secara instan lewat HP/tablet tanpa password menggunakan link ini.
5.  **Perhitungan Slip Gaji Otomatis**:
    *   Sistem menghitung total jam mengajar tutor berdasarkan presensi sesi mengajar yang telah diselesaikan dan diverifikasi. Honorarium kotor dihitung otomatis dari (jumlah sesi x tarif honor sesi) dan dapat diekspor menjadi laporan penggajian bulanan.

---

## Link Terkait
- `/dashboard/tutors`
