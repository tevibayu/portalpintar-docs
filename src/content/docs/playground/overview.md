---
title: "Panduan Pembuatan Modul Interaktif (Playground Editor)"
---

Layar Playground & Editor Interaktif adalah fitur eksklusif PortalPintar yang dirancang untuk membantu guru menyulap video pembelajaran pasif (dari YouTube atau Google Drive) menjadi modul interaktif yang responsif dan melacak pemahaman murid saat menonton video tersebut.

---

## 🖥️ Editor & Player Interaktif (`/playground/editor/[id]`)

Panel editor terbagi menjadi tiga area utama:
1.  **Kanvas Player (Video Canvas)**: Tempat memutar video yang sedang diedit. Di sinilah interaksi akan muncul melayang (overlay) di atas video pada detik tertentu yang ditentukan.
2.  **Garis Waktu (Timeline Editor)**: Bilah di bawah video yang menampilkan penanda (titik warna) kapan interaksi disematkan dalam durasi video. Anda dapat mengklik penanda atau memindahkan kursor garis waktu untuk melompat ke bagian tersebut.
3.  **Bilah Sisi Pengatur (Properties Inspector)**: Panel di bagian kanan untuk mengedit detail konten kuis, rangkuman, atau tautan yang sedang dipilih.

---

## ⚙️ Jenis Interaksi Pembelajaran

Tutor dapat menambahkan tiga jenis interaksi yang akan memotong video secara otomatis:
*   **Kuis Pilihan Ganda (`quiz_multiple_choice`)**: Menyisipkan pertanyaan di tengah video. Video akan terhenti otomatis (jika *"Jeda Otomatis"* diaktifkan) dan tidak akan berlanjut sampai murid memilih jawaban yang benar.
*   **Rangkuman Materi (`summary_overlay`)**: Menampilkan kotak teks ringkasan poin-poin penting pelajaran di menit tertentu agar murid dapat mencatat materi krusial.
*   **Link Navigasi (`call_to_action`)**: Menyediakan tombol klik link keluar untuk mengarahkan siswa ke tugas LKPD, artikel luar, atau simulasi latihan lab virtual.

---

## 🤖 Automasi AI Video (AI Suggest Interaction)

*   **Deteksi Otomatis AI**: Tutor dapat mengklik tombol **"Buat Interaksi Otomatis"**. AI Gemini akan memindai dan menganalisis transkrip isi video, lalu secara cerdas menyarankan titik-titik menit penting untuk disisipi kuis atau rangkuman secara otomatis tanpa perlu tutor menonton dari awal sampai akhir.

---

## 🔗 Pembagian & Pengelolaan Modul

*   **Bagikan Link**: Salin tautan preview unik (`/playground/preview/[id]`) untuk dikirimkan langsung ke siswa via WhatsApp atau Google Classroom. Siswa dapat mengerjakan interaksi video tersebut secara langsung.
*   **Pengaturan Media**:
    *   *Ganti Sumber Video*: Memasukkan URL link YouTube baru atau Google Drive.
    *   *Ganti Thumbnail*: Mengubah gambar cover buku/materi yang akan tampil di halaman galeri utama.
*   **Mekanisme Penyimpanan**: Klik **"Simpan Perubahan"** untuk merekam seluruh kuis dan silabus ke server. Daftar riwayat materi yang pernah Anda buat akan tercatat di bagian bawah editor untuk akses cepat kembali.

---

## Link Terkait
- `/playground`
