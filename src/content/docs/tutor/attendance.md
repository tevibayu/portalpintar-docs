---
title: "Pengisian Presensi & Laporan Sesi oleh Tutor"
---

Halaman Presensi Akademik adalah layar utama yang wajib diisi oleh Tutor setiap kali selesai mengajar suatu sesi kelas. Layar ini mencatat kehadiran guru, topik materi, serta laporan detail pencapaian belajar masing-masing siswa.

---

## 🔒 Verifikasi Pengajar & Detail Sesi

Di bagian atas layar, tutor melakukan konfirmasi keaktifan mengajar:
*   **Status Kehadiran Tutor**: Tombol centang *"Tutor Hadir"* untuk membuktikan tutor hadir mengajar di kelas pada jam tersebut.
*   **Mata Pelajaran**: Memilih program materi/mata pelajaran yang diajarkan pada sesi tersebut dari menu pilihan dropdown.
*   **Penjelasan Materi (Silabus)**: Kotak input untuk menuliskan rangkuman materi ajar (contoh: *"Belajar rumus luas lingkaran dan pembahasan latihan soal halaman 12"*).

---

## 📊 Matriks Kehadiran & Indikator Sikap Siswa

Tutor menilai perkembangan murid secara instan melalui 7 tombol indikator (metrics):
1.  **Hdr (Hadir)**: Mengonfirmasi kehadiran murid.
2.  **Fks (Fokus)**: Menilai apakah murid konsentrasi selama penjelasan materi.
3.  **Tny (Bertanya)**: Murid aktif menanyakan hal yang belum dimengerti.
4.  **Jwb (Menjawab)**: Murid aktif merespons pertanyaan dari tutor.
5.  **Tgs (Tugas)**: Murid berhasil menyelesaikan latihan soal/tugas di kelas.
6.  **Skp (Sikap)**: Perilaku murid dinilai sopan dan tertib.
7.  **Wkt (Tepat Waktu)**: Murid datang sebelum atau pas saat kelas dimulai (terlambat akan otomatis terhitung jika tombol ini tidak aktif).

---

## ✍️ Catatan Sesi & Optimasi AI (AI Note Generator)

*   **Catatan Manual**: Tutor menuliskan poin-poin observasi mengenai murid (contoh: *"Budi sudah paham rumus dasar, tapi masih sering keliru menghitung perkalian desimal"*).
*   **Optimasi AI Gemini (Saran AI)**:
    *   Tutor dapat mengklik tombol **"AI"** untuk memoles catatan kasar tersebut menjadi bahasa laporan yang rapi, santun, dan profesional untuk dibaca orang tua.
    *   Tutor dapat meninjau hasil draf AI, mengedit kembali, lalu mengklik **"Terapkan"** untuk memasukkannya ke kolom laporan akhir.

---

## 💾 Mekanisme Auto-Save & Publikasi

*   **Auto-Save 5 Detik**: Aplikasi memiliki fitur autosave otomatis di latar belakang yang mendeteksi perubahan data setiap 5 detik agar data kerja tidak hilang apabila koneksi internet terputus.
*   **Tombol Simpan Perubahan**: Klik tombol ini untuk menyimpan final presensi. Status sesi akan terupdate, yang nantinya memicu pengiriman notifikasi/slip laporan langsung ke wali murid.

---

## Link Terkait
- `/u/tutor/[token]/attendance/[sessionId]`
