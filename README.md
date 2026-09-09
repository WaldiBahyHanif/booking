# StayEase - Hotel Room Reservation System

Aplikasi web untuk reservasi kamar hotel yang dibangun menggunakan Next.js (App Router), Prisma ORM, Neon PostgreSQL, dan Auth.js (Google OAuth). Sistem ini mencakup alur lengkap dari sisi pengunjung (katalog, kalkulasi sewa otomatis, pemesanan) hingga sisi pengelola hotel (dashboard ringkasan metrik dan manajemen kamar).

---

## Ringkasan Fitur & Alur Kerja

### Sisi Pengunjung (Guest & User)
- Autentikasi Cepat: Masuk menggunakan akun Google tanpa perlu mendaftar manual.
- Katalog Kamar: Melihat daftar kamar lengkap beserta foto, kapasitas tamu, fasilitas (amenities), dan harga per malam.
- Kalkulasi Biaya Otomatis: Form pemesanan interaktif yang langsung menghitung durasi malam dan total biaya saat tanggal check-in dan check-out dipilih.
- Riwayat Reservasi: Halaman /my-reservation untuk melihat status pesanan aktif maupun riwayat pemesanan kamar yang pernah dibuat.

### Sisi Pengelola (Admin)
- Dashboard Analitik (/admin/dashboard): Menampilkan statistik ringkas berupa total kamar terdaftar, total transaksi reservasi, dan akumulasi pendapatan kotor secara real-time, lengkap dengan tabel seluruh transaksi tamu.
- Manajemen Kamar (/admin/room):
  - Menambah tipe kamar baru (+ Add New Room) lengkap dengan pemilihan fasilitas.
  - Mengubah data kamar, tarif, maupun fasilitas (Edit Room).
  - Menghapus kamar yang sudah tidak tersedia (Delete Room).
- Proteksi Rute: Membatasi akses folder /admin/* dan /my-reservation di tingkat edge menggunakan Next.js Middleware.

---

## Teknologi yang Digunakan

- Framework: Next.js (TypeScript) - App Router, Server Components, Server Actions
- Tampilan: Tailwind CSS & React Icons
- Basis Data: Neon PostgreSQL (Serverless Cloud Database)
- ORM: Prisma ORM
- Autentikasi: Auth.js / NextAuth v5 (Google OAuth Provider dengan @auth/prisma-adapter)

---

## Panduan Menjalankan Proyek di Komputer Lokal

1. Kloning Repositori & Pasang Dependensi
git clone https://github.com/<username>/<nama-repo>.git
cd <nama-repo>
npm install

2. Buat File Konfigurasi .env
Buat file bernama .env di folder utama proyek, lalu isi dengan variabel berikut:

DATABASE_URL="postgresql://<user>:<password>@<neon-host>/<dbname>?sslmode=require"
AUTH_SECRET="buat_secret_dengan_menjalankan_npx_auth_secret"
AUTH_URL="http://localhost:3000"
AUTH_GOOGLE_ID="isi_dengan_client_id_google_anda"
AUTH_GOOGLE_SECRET="isi_dengan_client_secret_google_anda"

3. Sinkronkan Skema Database
npx prisma db push

4. Jalankan Server Lokal
npm run dev

Buka browser dan akses alamat http://localhost:3000.

---

## Cara Mengaktifkan Hak Akses Admin

Setiap akun yang baru pertama kali login dengan Google akan otomatis mendapatkan peran user. Untuk mengubah akun menjadi admin:

1. Buka antarmuka database lewat terminal:
npx prisma studio

2. Klik tabel User, cari akun yang ingin dijadikan admin.
3. Ubah nilai kolom role dari user menjadi admin.
4. Klik tombol Save 1 change.
5. Di website, lakukan Sign Out lalu Sign In kembali agar sesi login diperbarui.

---

## Struktur Folder Proyek

booking/
├── app/
│   ├── admin/
│   │   ├── dashboard/page.tsx      (Halaman statistik & transaksi admin)
│   │   └── room/                   (Halaman daftar, tambah, dan edit kamar)
│   ├── my-reservation/page.tsx     (Riwayat pesanan kamar milik user)
│   ├── room/
│   │   ├── page.tsx                (Halaman katalog seluruh kamar)
│   │   └── [id]/page.tsx           (Halaman detail & form booking kamar)
│   ├── layout.tsx                  (Root layout & navbar)
│   └── page.tsx                    (Halaman utama / beranda)
├── components/
│   ├── admin/                      (Komponen form & tabel admin)
│   ├── navbar/                     (Navigasi & tombol autentikasi)
│   ├── booking-form.tsx            (Form tanggal & kalkulasi tarif)
│   └── room-card.tsx               (Kartu display info kamar)
├── lib/
│   ├── action.ts                   (Server actions mutasi data & booking)
│   ├── data.ts                     (Fungsi query data Prisma)
│   └── prisma.ts                   (Instansiasi client Prisma)
├── prisma/
│   └── schema.prisma               (Skema tabel database)
├── auth.ts                         (Konfigurasi NextAuth v5)
└── middleware.ts                   (Proteksi rute)
