---
title: "Verifikasi Sertifikat & Tautan Pendek"
---

Halaman verifikasi sertifikat digunakan oleh pihak luar (seperti sekolah, instansi, atau orang tua) untuk menguji validitas dan keaslian sertifikat digital yang diterbitkan oleh bimbingan belajar melalui platform PortalPintar.

---

## 🎖️ Cara kerja Verifikasi Sertifikat (`/c/[id]`)

Setiap sertifikat kelulusan program atau apresiasi nilai tryout yang diterbitkan bimbel dilengkapi dengan QR Code unik yang mengarah ke alamat `/c/[kode_unik]`.

Saat halaman ini diakses:

1.  **Pemeriksaan Database Otomatis**:
    *   Sistem mencari data kode sertifikat di database aman.
2.  **Lencana Status Validitas**:
    *   **Lencana Hijau ("Terverifikasi Asli")**: Menandakan sertifikat tersebut sah. Layar akan menampilkan nama lengkap penerima sertifikat, nama lembaga penerbit (bimbel), jenis penghargaan/kegiatan, skor pencapaian (jika ada), serta tanggal penerbitan.
    *   **Lencana Merah ("Sertifikat Tidak Valid")**: Menampilkan peringatan jika kode sertifikat tidak ditemukan di database (kemungkinan sertifikat palsu atau salah ketik kode).
3.  **Pengunduhan Salinan Resmi**:
    *   Jika sertifikat valid, tersedia tombol **"Unduh Salinan PDF"** bagi pengunjung untuk menyimpan berkas sertifikat asli beresolusi tinggi langsung ke perangkat mereka.

---

## 🔗 Tautan Pengalihan Pendek (`/v/[id]`)

*   Rute `/v/[id]` adalah sistem tautan pendek (shortlink) internal otomatis.
*   Tautan ini digunakan saat tutor atau admin membagikan preview media ajar interaktif. Saat diakses, sistem secara otomatis mengalihkan browser pengguna ke halaman pratinjau simulator media ajar yang sesuai di `/playground/preview/[id]`.

---

## Link Terkait
- `/c/[id]`
- `/v/[id]`
