---
title: "Pemasaran & Broadcast WhatsApp"
---

Halaman Broadcast & Campaign adalah modul pemasaran dan komunikasi massal. Fitur ini memungkinkan pemilik bimbel mengirimkan pesan pengumuman, promosi, kupon diskon, serta pengingat pembayaran ke ribuan nomor WhatsApp atau Email wali murid, siswa, dan tutor sekaligus.

---

## 📈 Rangkuman Broadcast (Stats Row)

*   **Total**: Jumlah kampanye pesan yang pernah dibuat.
*   **Berjalan**: Kampanye yang saat ini sedang aktif mengirim pesan di latar belakang.
*   **Terkirim**: Akumulasi pesan yang sukses masuk ke nomor tujuan.
*   **Gagal**: Jumlah pesan yang gagal dikirim (misal: karena nomor tidak terdaftar WA atau format salah).

---

## 📝 Manajemen Kampanye Pesan

Halaman utama menampilkan tabel seluruh kampanye yang dibuat beserta statusnya:
*   **Status Kampanye**:
    *   `Draft`: Kampanye baru ditulis dan belum dikirim.
    *   `Scheduled`: Kampanye dijadwalkan terkirim otomatis pada tanggal/jam tertentu.
    *   `Sending`: Pesan sedang mengalir dikirim bertahap.
    *   `Paused`: Pengiriman dihentikan sementara oleh admin.
    *   `Completed`: Semua pesan sukses terkirim ke seluruh target.
*   **Opsi Kontrol**:
    *   👁️ **Lihat Log**: Memantau laporan pengiriman detail per nomor penerima (sukses/gagal).
    *   ⏸️/▶️ **Jeda & Lanjutkan**: Menghentikan sementara atau melanjutkan pengiriman pesan.
    *   🛡️ **Validasi Nomor**: Memverifikasi validitas daftar nomor HP penerima sebelum pengiriman dilakukan untuk mencegah pemblokiran WhatsApp.
    *   ✏️ **Edit & Hapus**: Mengubah draf kampanye atau menghapus catatan kampanye.

---

## ⚙️ Wizard Pembuatan Kampanye Baru (4 Langkah)

Saat mengklik **"Buat Campaign"**, sistem akan memandu Admin melalui 4 langkah terstruktur:

### Langkah 1: Tujuan & Media
*   **Judul Campaign**: Nama internal kampanye (contoh: *"Pengumuman Libur Lebaran 2026"*).
*   **Pilihan Channel**: Memilih menggunakan saluran **WhatsApp** atau **Email** (WhatsApp disarankan untuk respons instan).

### Langkah 2: Target Penerima (Target Audience)
*   **Penyaring Peran**: Memilih mengirim pesan ke **Siswa** atau **Tutor**.
*   **Filter Kelas**: Memilih kelas tertentu saja (contoh: hanya kelas *12 SMA IPA*) atau semua kelas.
*   **Daftar Penerima**: Sistem otomatis menghimpun nomor telepon atau email dari database profil yang sesuai filter.

### Langkah 3: Konten Pesan (Dynamic Template)
*   **Isi Pesan**: Kotak editor teks untuk menyusun pesan broadcast.
*   **Interpolasi Variabel (Auto-Personalization)**:
    Anda dapat menyisipkan kode khusus yang otomatis berubah sesuai biodata tiap penerima:
    *   `{{name}}`: Berubah menjadi nama lengkap penerima.
    *   `{{username}}`: Berubah menjadi email/username login.
    *   `{{magic_link}}`: Otomatis menyisipkan tautan masuk tanpa sandi (Magic Link) personal penerima.
    *   `{{org_name}}`: Nama bimbingan belajar Anda.
    *   `{{today}}`: Tanggal hari ini.

### Langkah 4: Finalisasi & Jadwal Pengiriman
*   **Metode Pengiriman**: Langsung dikirim saat itu juga atau menjadwalkan tanggal dan jam tayang (*Scheduled*).
*   **Pengaturan Keamanan Anti-Spam**:
    *   *Delay Seconds*: Jeda waktu jeda antar pengiriman pesan (default 5 detik) agar WhatsApp tidak mendeteksi aktivitas Anda sebagai spam robot.
    *   *Batch Size*: Batasan jumlah pesan terkirim dalam satu kloter.
*   **Kirim Pesan Test**: Admin dapat memasukkan nomor HP-nya sendiri untuk menerima pesan contoh (preview) sebelum kampanye dilepas ke publik.

---

## Link Terkait
- `/dashboard/campaign`
