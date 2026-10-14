# OSNLink — Dashboard Belajar & Pembahasan OSN-K Informatika 2026

Platform dashboard interaktif, bank latihan soal, dan pembahasan lengkap kurikulum persiapan **Olimpiade Sains Nasional Tingkat Kabupaten/Kota (OSN-K) Bidang Informatika 2026**.

Aplikasi ini dibangun menggunakan **React 19 + TypeScript + Vite + Tailwind CSS v4**, dirancang dengan antarmuka modern bernuansa *editorial warm sand & obsidian*, mendukung **semua ukuran layar (mobile-friendly)**, dan **100% siap di-push ke GitHub**.

---

## 📱 Fitur Utama & Dukungan Mobile

1. **Dashboard Semua (4-Kolom Kanban Board)**
   - **Kolom 1: Materi Inti** (15 Konsep Fundamental: Bitwise, Percabangan, Array, Teori Bilangan, Fermat, Derangement, BFS/LCA, DP).
   - **Kolom 2: Biner & Kode C++** (27 Pembahasan Soal Latihan Bagian 2–4).
   - **Kolom 3: Bilangan & Deret** (24 Pembahasan Soal Latihan Bagian 5–7).
   - **Kolom 4: OSN-K 2026** (36 Kartu Naskah Lengkap Soal 1 s.d. 40 Bagian A, B, dan C).
   - **Mobile Column Switcher**: Pada perangkat smartphone/tablet, pengguna dapat dengan cepat berpindah antar kolom ("Semua", "Materi Inti", "Biner & C++", "Bilangan & Deret", "OSN-K 2026") tanpa perlu scroll tanpa henti.

2. **Dukungan Mobile Device Penuh**
   - **Responsive Drawer Sidebar**: Sidebar dapat dibuka-tutup dengan lancar di layar kecil melalui tombol menu hamburger dengan backdrop sentuh.
   - **Touch Targets Nyaman**: Semua tombol navigasi, filter, dan kartu memiliki area sentuh minimum 40–44px.
   - **Horizontal Scrollable Controls**: Tombol pencarian, pengurutan (*sort*), dan filter status otomatis menyesuaikan lebar layar perangkat tanpa terpotong.
   - **No Auto-Zoom Input**: Input teks dioptimalkan agar tidak menyebabkan *zoom-in* otomatis yang mengganggu di browser iOS/Safari mobile.

3. **Mode Flashcard Interaktif**
   - Latihan mandiri dengan tebak jawaban dan periksa kunci pembahasan resmi.
   - Pemilihan sub-modul naskah (Bagian 2 s.d. Bagian 7, OSN-K Bagian A, B, C).
   - Fitur acak urutan kartu (*shuffle*), penilaian mandiri (Paham / Ulangi), dan pintasan tombol keyboard / sentuhan layar.

4. **Laboratorium & Simulator Komputasi**
   - **Inspektor Bitwise & Popcount**: Konversi biner real-time, manipulasi `AND`, `OR`, `XOR`, `Shift Left/Right`, serta penghitung bit 1 (*popcount*).
   - **Kalkulator Teori Bilangan & Modulo**: Faktorisasi prima, jumlah faktor pembagi, FPB, KPK, uji keterbagian 72, dan perpangkatan modular $x^y \pmod m$ (Teorema Kecil Fermat).
   - **Derangement (!n) & Lintasan Pantulan Bola**: Hitung permutasi tanpa titik tetap $!n$ dan rumus total jarak jatuh bola memantul tak hingga $h \times \frac{1+r}{1-r}$.

5. **Pencarian Global & Filter Cepat**
   - Cari kartu berdasarkan nomor soal, rumus, nama topik, atau kata kunci.
   - Filter berdasarkan topik: *Bitwise & Biner*, *Kontrol & Array C++*, *Teori Bilangan & Mod*, *Kombinatorika & Deret*, *Algoritma, Graf & DP*.
   - Filter status: *Semua*, *Belum Paham*, *Sudah Paham*, dan *Kunci Terbuka*.

6. **Penyimpanan Progres Lokal (LocalStorage)**
   - Progres pemahaman tersimpan otomatis di browser tanpa memerlukan login database eksternal.
   - Tampilan visual *Radial Tick Gauge* dan *Module Distribution Bar Chart* memperbarui persentase penguasaan secara langsung.

---

## 🚀 Panduan Instalasi & Menjalankan di Lokal

### Prasyarat
- **Node.js** (versi 18 ke atas disarankan)
- **npm** atau **pnpm** / **yarn**

### Langkah Menjalankan:
```bash
# 1. Clone repository (atau download ZIP)
git clone https://github.com/<username-anda>/<nama-repo>.git
cd <nama-repo>

# 2. Install dependensi
npm install

# 3. Jalankan server pengembangan (development)
npm run dev

# 4. Buka di browser
# http://localhost:3000 atau URL yang tertera di terminal
```

### Build untuk Produksi:
```bash
npm run build
```
File hasil kompilasi yang siap di-hosting akan tersedia di dalam direktori `dist/`.

---

## 📤 Langkah Demi Langkah Push ke GitHub

Jika Anda ingin mengunggah proyek ini ke akun GitHub pribadi:

1. **Buat Repository Baru di GitHub**:
   - Masuk ke [GitHub](https://github.com/).
   - Klik tombol **"New"** (atau tanda `+` di kanan atas) untuk membuat repository baru.
   - Beri nama repository (contoh: `osnlink-2026`).
   - Pilih **Public** atau **Private** (jangan centang "Initialize with a README" karena sudah tersedia).
   - Klik **Create repository**.

2. **Jalankan Perintah Git di Terminal Proyek**:
   ```bash
   # Masuk ke direktori proyek jika belum
   cd osnlink-2026

   # Inisialisasi git (jika belum)
   git init

   # Tambahkan semua file yang sudah siap
   git add .

   # Buat commit pertama
   git commit -m "feat: inisialisasi aplikasi OSNLink 2026 lengkap responsif mobile"

   # Ubah nama branch utama menjadi main
   git branch -M main

   # Hubungkan dengan remote repository GitHub Anda (ganti URL sesuai repo Anda)
   git remote add origin https://github.com/<username-anda>/osnlink-2026.git

   # Push ke GitHub
   git push -u origin main
   ```

---

## 🌐 Panduan Deployment

### 1. GitHub Pages (Otomatis via GitHub Actions)
Proyek ini sudah dilengkapi dengan file `.github/workflows/deploy.yml`:
1. Masuk ke repository di GitHub.
2. Buka menu **Settings** > **Pages**.
3. Pada bagian **Build and deployment** > **Source**, pilih **GitHub Actions**.
4. Setiap kali Anda melakukan `git push origin main`, web akan otomatis di-build dan dipublikasikan ke GitHub Pages.

### 2. Vercel
Proyek ini sudah dilengkapi dengan berkas konfigurasi **`vercel.json`**:
1. Kunjungi [vercel.com](https://vercel.com/) dan login menggunakan akun GitHub.
2. Klik **Add New** > **Project** dan pilih repository `osn2026`.
3. **PENTING (Root Directory)**:
   - Jika berkas `package.json` berada langsung di root repo, Framework Preset akan otomatis terdeteksi sebagai **Vite**.
   - Jika berkas berada di dalam subfolder (misalnya `osn2026/` atau subdirektori lainnya), klik **Edit** pada bagian **Root Directory** dan pilih subfolder tersebut.
4. Klik **Deploy**.

### 3. Netlify
1. Kunjungi [netlify.com](https://netlify.com/) dan login.
2. Pilih **Add new site** > **Import an existing project** dari GitHub.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Klik **Deploy site**.

---

## 🛠️ Struktur Direktori Proyek

```
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD otomatis untuk GitHub Pages
├── src/
│   ├── data/
│   │   └── curriculumData.ts # Data lengkap 102 kartu materi & pembahasan naskah
│   ├── App.tsx               # Komponen utama UI, state, filter, modal & lab komputasi
│   ├── index.css             # Konfigurasi Tailwind CSS v4, tipografi & utilitas tema
│   └── main.tsx              # Entry point React 19
├── index.html                # HTML entry dengan meta viewport & font web
├── package.json              # Dependensi & skrip build
├── tsconfig.json             # Konfigurasi compiler TypeScript
├── vite.config.ts            # Konfigurasi bundler Vite
├── .gitignore                # Filter berkas yang tidak perlu masuk git
└── README.md                 # Dokumentasi proyek
```

---

## 📄 Lisensi
Hak cipta materi dan pembahasan © 2026 OSN-K Informatika. Proyek ini dilisensikan di bawah [MIT License](LICENSE).
