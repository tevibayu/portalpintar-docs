---
title: "Manajemen SPP & Finansial Bimbel"
---

Halaman Keuangan & Aset adalah pusat kendali keuangan bimbel Anda. Layar ini membantu administrator memantau arus kas, menagih SPP siswa secara dinamis, serta melakukan pembayaran gaji tutor secara teratur.

---

## Privasi & Ringkasan Keuangan (Bagian Atas)

*   **Tombol Sensor Angka (Mata)**: Ikon mata di sebelah judul halaman untuk menyembunyikan atau menampilkan semua angka nominal keuangan di layar demi keamanan saat membukanya di tempat umum.
*   **Kartu Metrik Utama**:
    *   **Saldo Utama**: Sisa dana kas bersih bimbel yang siap digunakan.
    *   **Total Pendapatan**: Akumulasi uang masuk dari SPP dan penjualan modul program studi.
    *   **Piutang SPP**: Tagihan SPP tertunggak yang belum dibayarkan oleh wali murid.
    *   **Pengeluaran**: Total pengeluaran operasional dan gaji tutor pada bulan berjalan.

---

## Tab 1: SPP Siswa (Grid Tagihan Dinamis)

Modul ini berbentuk tabel matriks interaktif untuk mencocokkan kehadiran dan pembayaran siswa:

1.  **Penyaringan Kelas & Bulan**: Memilih program kelas dan periode bulan ajar untuk memuat daftar murid.
2.  **Matriks Kehadiran vs Pembayaran**:
    *   Setiap kolom mewakili tanggal pertemuan sesi kelas, dan baris mewakili nama murid.
    *   **Titik Merah (Hadir)**: Indikator bahwa siswa hadir/terlambat di kelas pada tanggal tersebut (berdasarkan absen tutor).
    *   **Tombol Centang Hijau (Lunas)**: Menandakan sesi tersebut telah dibayar. Admin cukup mengklik kotak sel untuk mengubah status pembayaran (paid/unpaid) secara instan.
3.  **Rencana Belajar Siswa (Dropdown Paket)**:
    *   Pilihan paket belajar siswa (misal: *Eceran per Sesi* atau *Paket Bulanan 8 Sesi*). Sistem secara otomatis mengkalkulasi nominal SPP yang harus dibayar berdasarkan pilihan paket ini.
4.  **Menu Opsi Cepat (Titik Tiga)**:
    *   *Tandai Semua Lunas*: Membayar semua sesi bulan ini sekaligus.
    *   *Kalkulasi Ulang*: Menghitung kembali tagihan berdasarkan perubahan kehadiran siswa.
5.  **Realisasi Target SPP**:
    *   Grafik progres di bagian bawah yang menunjukkan persentase dana SPP yang sudah terkumpul dari total target pendapatan kelas tersebut pada bulan ini.

---

## Tab 2: Penggajian Tutor (Tutor Payroll)

Sistem menghitung otomatis gaji guru di akhir periode:
1.  **Akumulasi Jam Ajar**: Sistem menyaring sesi ajar tutor yang sudah diverifikasi (status *Published*) selama bulan terpilih.
2.  **Kalkulasi Honor**: Menghitung otomatis (Jumlah Sesi Mengajar x Tarif Honor Tutor).
3.  **Tombol Bayar Gaji**: Admin mengklik tombol **"Bayar Gaji"** untuk memproses pengeluaran, yang secara otomatis mencatat pengeluaran kas di buku kas pengeluaran dengan kategori *"Gaji Tutor"*.
4.  **Estimasi Penggajian**: Membantu tutor melihat slip gaji digital mereka secara transparan.

---

## Link Terkait
- `/dashboard/finance`
