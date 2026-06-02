---
title: "Halaman Masuk & Keamanan Akun"
---

Layar masuk (login) dan keamanan akun PortalPintar dirancang untuk menjaga keamanan data dengan hak akses yang tersegregasi rapi berdasarkan peran pengguna.

---

## 🔑 Halaman Masuk Multi-Peran (`/login`)

Semua pengguna utama (Pemilik Bimbel dan Staf Admin) masuk ke sistem melalui halaman ini:

1.  **Metode Autentikasi**:
    *   Pengguna memasukkan alamat email terdaftar dan kata sandi.
2.  **Deteksi Peran Otomatis**:
    *   Setelah berhasil masuk, sistem akan memeriksa hak akses pengguna dan mengarahkannya ke halaman yang sesuai (misal: Pemilik Bimbel diarahkan ke `/dashboard`, sedangkan staf cabang diarahkan ke cabang kerjanya).
3.  **Lupa Sandi & Pemulihan (`/forgot-password` & `/reset-password`)**:
    *   Jika pengguna lupa kata sandi, mereka dapat mengklik tautan *"Lupa Kata Sandi?"* di bawah formulir login.
    *   Sistem akan mengirimkan email tautan ubah kata sandi (*magic link* / *reset token*) ke inbox email terdaftar. Pengguna cukup mengklik tautan tersebut untuk membuat kata sandi baru secara aman.

---

## 🏢 Halaman Pendaftaran Pengelola Baru (`/register`)

Digunakan khusus oleh pemilik bimbingan belajar baru untuk membuat instansi/bimbel pertama mereka:
*   Mengisi email pengelola, kata sandi, nama lengkap pengelola, serta **Nama Bimbingan Belajar** yang ingin dibuat.
*   Setelah mendaftar, pengguna baru akan otomatis diarahkan ke halaman persiapan awal (`/onboarding`).

---

## 🔁 Pemilih Lembaga Aktif (`/select-org`)

Layar ini akan muncul secara otomatis jika satu alamat email pengguna terdaftar sebagai pengelola atau staf di lebih dari satu instansi/bimbingan belajar:
*   Menampilkan kartu pilihan lembaga-lembaga yang menaungi akun tersebut.
*   Pengguna cukup mengklik salah satu nama bimbel untuk memilih dan mengaktifkan ruang kerja (*workspace*) bimbel tersebut sebagai fokus kerja saat ini.

---

## Link Terkait
- `/login`
- `/register`
- `/forgot-password`
- `/select-org`
