---
title: "Buku Kas Pengeluaran & Inventaris Aset"
---

Dokumentasi ini merinci pengelolaan pembukuan operasional non-akademik di PortalPintar, yang meliputi pencatatan pengeluaran harian bimbel serta inventarisasi aset fisik lembaga.

---

## Tab 3: Pengeluaran (Buku Kas Keluar)

Digunakan untuk mencatat semua pengeluaran rutin bimbel (seperti biaya sewa gedung, listrik, internet, air, pembelian spidol, dan gaji staf admin):

1.  **Daftar Log Pengeluaran**:
    *   Tabel log pengeluaran lengkap dengan tanggal transaksi, deskripsi pengeluaran, nominal biaya, dan kategori (misal: *Operasional, Gaji Tutor, Utilitas, Marketing*).
2.  **Tombol Tambah Pengeluaran**:
    *   Membuka formulir popup untuk mencatat pengeluaran baru:
        *   **Judul Transaksi**: Deskripsi singkat tujuan pengeluaran.
        *   **Nominal (Rupiah)**: Jumlah uang yang dikeluarkan.
        *   **Kategori**: Memilih kategori pengeluaran agar laporan laba-rugi terkelompokkan dengan rapi.
        *   **Tanggal**: Tanggal terjadinya transaksi pengeluaran.
3.  **Hapus & Edit Transaksi**:
    *   Admin dapat mengedit kembali catatan pengeluaran jika terjadi kesalahan input atau menghapus transaksi yang dibatalkan melalui menu dropdown di sebelah kanan baris transaksi.

---

## Tab 4: Inventarisasi Aset Bimbel

Digunakan untuk memantau barang milik lembaga (aset fisik) agar tidak hilang dan mempermudah perhitungan penyusutan barang (contoh: Air Conditioner, meja belajar, papan tulis, laptop operasional):

1.  **Daftar Inventaris Aset**:
    *   Tabel barang yang memuat nama barang, kategori aset (misal: *Elektronik, Furnitur, Modul Cetak*), jumlah unit (quantity), harga pembelian awal, dan kondisi fisik saat ini (Bagus, Rusak Ringan, Rusak Total).
2.  **Tambah Aset Baru**:
    *   Formulir input barang baru:
        *   **Nama Aset**: Contoh: *AC Sharp 1 PK Cabang Dago*.
        *   **Kategori**: Dropdown pengelompokan jenis barang.
        *   **Kuantitas**: Jumlah unit barang yang dibeli.
        *   **Harga Beli**: Nominal harga per unit barang.
        *   **Kondisi Fisik**: Status kelayakan pakai barang saat ini.
3.  **Kontrol Kondisi & Penghapusan**:
    *   Fitur untuk memperbarui status kondisi aset secara berkala (misalnya mengubah status AC dari *Bagus* menjadi *Rusak Ringan* saat memerlukan servis) atau menghapus aset yang sudah dijual/dibuang.

---

## Link Terkait
- `/dashboard/finance` (Tab 3 & 4)
