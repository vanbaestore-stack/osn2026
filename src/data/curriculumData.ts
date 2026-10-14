export interface CardItem {
  id: string;
  col: 'col1' | 'col2' | 'col3' | 'col4';
  topic: 'BITWISE' | 'CPP' | 'MODULO' | 'KOMBINATORIKA' | 'ALGORITMA';
  category?: string;
  sub?: string;
  badge: string;
  mentor: string;
  title: string;
  question: string;
  answer: string;
  explanation: string;
}

// -------------------------------------------------------------------
// 1. BAGIAN 1: PEMETAAN MATERI INTI (15 Granular Cards across 5 Pillars)
// -------------------------------------------------------------------
export const MATERI_CARDS: CardItem[] = [
  {
    id: 'M1-1',
    col: 'col1',
    topic: 'BITWISE',
    badge: 'Bag. 1 • Bitwise',
    mentor: 'Operasi Bitwise & Biner',
    title: 'Gerbang Logika Bitwise (&, |, ^)',
    question: 'Prinsip manipulasi bit biner secara langsung untuk operator AND (&), OR (|), dan XOR (^).',
    answer: 'a ^ a = 0 dan a ^ 0 = a (Identitas Involutif XOR)',
    explanation: 'Alasan mengapa aturan ini berlaku:\n1. AND (&): Menghasilkan bit 1 jika dan hanya jika kedua bit operand bernilai 1. Jika salah satu bit 0, hasilnya pasti 0 (masking).\n2. OR (|): Menghasilkan bit 1 jika salah satu atau kedua bit operand bernilai 1. Bernilai 0 hanya jika kedua bit 0.\n3. XOR (^ - Exclusive OR): Menghasilkan bit 1 jika kedua bit berbeda, dan 0 jika kedua bit sama (paritas ganjil). Akibatnya:\n   • a ^ a = 0 karena setiap bit dibandingkan dengan dirinya sendiri yang identik (1^1 = 0, 0^0 = 0).\n   • a ^ 0 = a karena bit tidak mengalami perubahan (1^0 = 1, 0^0 = 0).\n   • Sifat ini menjadikan XOR alat utama untuk mencari elemen tunggal berfrekuensi ganjil dalam larik secara O(N) waktu dan O(1) memori.'
  },
  {
    id: 'M1-2',
    col: 'col1',
    topic: 'BITWISE',
    badge: 'Bag. 1 • Shift',
    mentor: 'Operasi Bitwise & Biner',
    title: 'Pergeseran Bit (Shift Left << & Right >>)',
    question: 'Ekuivalensi matematis dari operasi a << k dan a >> k pada bilangan bulat.',
    answer: 'a << k = a * (2^k) dan a >> k = floor(a / 2^k)',
    explanation: 'Alasan matematis di balik pergeseran bit:\n1. Sistem Bilangan Biner berbasis 2: Setiap posisi bit memiliki bobot 2^i.\n2. Shift Left (a << k): Menggeser seluruh bit ke kiri sejauh k posisi dan menambahkan k buah bit 0 di sebelah kanan. Karena setiap perpindahan satu langkah ke kiri melipatgandakan bobot posisi sebesar 2, maka pergeseran k langkah setara dengan perkalian dengan 2^k (yaitu a * 2^k).\n3. Shift Right (a >> k): Menggeser seluruh bit ke kanan sejauh k posisi dan membuang k bit terendah (LSB). Hal ini setara dengan membagi bilangan tersebut dengan 2^k dan mengambil hasil bagi bulatnya (floor(a / 2^k)). Operasi ini sangat efisien karena dieksekusi dalam 1 siklus instruksi CPU.'
  },
  {
    id: 'M2-1',
    col: 'col1',
    topic: 'CPP',
    badge: 'Bag. 1 • Percabangan',
    mentor: 'Struktur Kontrol C++',
    title: 'Evaluasi Nested If-Else C++',
    question: 'Bagaimana urutan evaluasi percabangan bersarang (nested if-else) dalam bahasa C++?',
    answer: 'Atas ke bawah secara sekuensial, berhenti di cabang benar pertama (Short-Circuit Branch)',
    explanation: 'Alasan alur eksekusi percabangan:\n1. Eksekusi Sekuensial: Kompiler C++ mengevaluasi ekspresi kondisi percabangan `if` dari blok paling atas ke bawah secara terurut.\n2. Pengecualian Cabang: Segera setelah salah satu kondisi bernilai `true` (non-nol), seluruh blok instruksi di dalamnya akan dieksekusi, dan kompilator langsung melompati (skip) seluruh blok `else if` dan `else` yang berada di bawahnya.\n3. Implikasi Soal OSN: Perubahan variabel di dalam satu cabang yang sudah dieksekusi tidak akan memicu cabang `else if` di bawahnya meskipun nilai variabel tersebut kini memenuhi kondisi `else if` berikutnya.'
  },
  {
    id: 'M2-2',
    col: 'col1',
    topic: 'CPP',
    badge: 'Bag. 1 • Perulangan',
    mentor: 'Struktur Kontrol C++',
    title: 'Perbedaan Perintah continue dan break',
    question: 'Apa perbedaan dampak eksekusi perintah continue dan break di dalam blok perulangan?',
    answer: 'continue: lewati sisa iterasi saat ini; break: hentikan perulangan sepenuhnya',
    explanation: 'Alasan mekanis pada loop control:\n1. `continue`: Melewati baris-baris kode di bawahnya pada iterasi yang sedang aktif dan langsung melompat ke ekspresi pembaruan (increment/decrement pada `for`, atau evaluasi kondisi ulang pada `while`). Loop tidak berhenti, melainkan berlanjut ke iterasi berikutnya.\n2. `break`: Melompat keluar secara instan dari kurung kurawal penutup `{}` blok perulangan terdekat dan mentransfer kontrol program ke baris pertama setelah loop.\n3. Kesalahan Umum OSN: Lupa bahwa `continue` pada loop `for` tetap mengeksekusi langkah `i++`, sedangkan pada `while` manual tanpa pembaruan sebelum `continue` dapat menyebabkan infinite loop.'
  },
  {
    id: 'M2-3',
    col: 'col1',
    topic: 'CPP',
    badge: 'Bag. 1 • Array 0-Based',
    mentor: 'Struktur Kontrol C++',
    title: 'Pengindeksan Array C++ (0-Based Indexing)',
    question: 'Rentang indeks valid untuk array C++ berukuran N elemen.',
    answer: 'Indeks 0 hingga N - 1 (Rentang Valid: [0, N-1])',
    explanation: 'Alasan arsitektur pengalamatan memori:\n1. Alamat Pointer Basis: Dalam C/C++, nama array merupakan pointer ke alamat elemen pertama (`arr == &arr[0]`).\n2. Offset Memori: Akses elemen `arr[i]` dihitung secara aritmatika pointer sebagai `*(arr + i * sizeof(tipe))`. Pada elemen pertama, jarak offset-nya dari alamat awal adalah 0, sehingga indeksnya adalah 0.\n3. Indeks Terakhir: Elemen ke-N berada pada offset (N - 1), sehingga rentang indeks valid adalah 0 sampai N - 1. Mengakses `arr[N]` adalah undefined behavior (out-of-bounds/segfault).'
  },
  {
    id: 'M3-1',
    col: 'col1',
    topic: 'MODULO',
    badge: 'Bag. 1 • Faktor Prima',
    mentor: 'Teori Bilangan & Mod',
    title: 'Rumus Banyaknya Faktor Bulat Positif',
    question: 'Jika n = (p1^a1) * (p2^a2) * ... * (pk^ak), berapakah banyaknya faktor bulat positif dari n?',
    answer: 'd(n) = (a1 + 1)(a2 + 1)...(ak + 1)',
    explanation: 'Alasan penurunan rumus menggunakan Kaidah Perkalian (Kombinatorika):\n1. Faktorisasi Prima Unik (Teorema Fundamental Aritmatika): Setiap bilangan bulat n > 1 dapat dituliskan secara unik sebagai perkalian faktor prima n = p1^a1 * p2^a2 * ... * pk^ak.\n2. Bentuk Pembagi: Setiap faktor pembagi d dari n harus memiliki bentuk d = p1^b1 * p2^b2 * ... * pk^bk, di mana 0 <= bi <= ai untuk setiap i.\n3. Banyaknya Pilihan: Untuk eksponen b1, kita dapat memilih dari {0, 1, 2, ..., a1} (ada a1 + 1 kemungkinan pilihan). Demikian pula untuk b2 ada a2 + 1 pilihan, hingga bk ada ak + 1 pilihan.\n4. Karena pemilihan setiap eksponen saling bebas, total banyaknya kombinasi pembagi adalah hasil kali (a1 + 1)(a2 + 1)...(ak + 1).'
  },
  {
    id: 'M3-2',
    col: 'col1',
    topic: 'MODULO',
    badge: 'Bag. 1 • Keterbagian 72',
    mentor: 'Teori Bilangan & Mod',
    title: 'Syarat Keterbagian Bilangan oleh 72',
    question: 'Apa syarat perlu dan cukup agar suatu bilangan bulat habis dibagi 72?',
    answer: 'Habis dibagi 8 DAN habis dibagi 9 (karena FPB(8, 9) = 1)',
    explanation: 'Alasan matematis keterbagian:\n1. Faktorisasi Koprima: 72 = 8 * 9. Karena FPB(8, 9) = 1 (relatif prima), maka n habis dibagi 72 jika dan hanya jika n habis dibagi 8 sekaligus habis dibagi 9.\n2. Syarat Habis Dibagi 8: Karena 1000 = 8 * 125 kelipatan 8, maka ribuan ke atas selalu habis dibagi 8. Akibatnya, keterbagian oleh 8 hanya ditentukan oleh 3 digit terakhir bilangan tersebut (harus habis dibagi 8).\n3. Syarat Habis Dibagi 9: Karena 10^k = (9 + 1)^k = 9m + 1 = 1 (mod 9), setiap perpangkatan 10 kongruen dengan 1 mod 9. Oleh sebab itu, suatu bilangan habis dibagi 9 jika dan hanya jika jumlah seluruh digitnya habis dibagi 9.'
  },
  {
    id: 'M3-3',
    col: 'col1',
    topic: 'MODULO',
    badge: 'Bag. 1 • Fermat',
    mentor: 'Teori Bilangan & Mod',
    title: 'Teorema Kecil Fermat (Fermat\'s Little Theorem)',
    question: 'Bagaimana penyederhanaan perpangkatan modular a^(p-1) mod p untuk p prima?',
    answer: 'a^(p-1) ≡ 1 (mod p), jika FPB(a, p) = 1',
    explanation: 'Alasan dan pembuktian Teorema Kecil Fermat:\n1. Pembuktian Residu: Jika p prima dan a bukan kelipatan p, tinjau himpunan kelipatan {1a, 2a, 3a, ..., (p-1)a} mod p. Himpunan sisa bagi ini merupakan permutasi lengkap dari {1, 2, 3, ..., p-1}.\n2. Perkalian Bersama: Kalikan seluruh elemen di kedua sisi:\n   (1a) * (2a) * ... * ((p-1)a) ≡ 1 * 2 * ... * (p-1) (mod p)\n   a^(p-1) * (p-1)! ≡ (p-1)! (mod p)\n3. Pembatalan: Karena (p-1)! tidak habis dibagi p (semua faktornya < p), kita dapat membagi kedua ruas dengan (p-1)!, menghasilkan a^(p-1) ≡ 1 (mod p).\n4. Aplikasi Praktis: Untuk menghitung a^b mod p, eksponen b dapat direduksi menjadi b mod (p-1).'
  },
  {
    id: 'M3-4',
    col: 'col1',
    topic: 'MODULO',
    badge: 'Bag. 1 • FPB & KPK',
    mentor: 'Teori Bilangan & Mod',
    title: 'Identitas Hasil Kali FPB dan KPK',
    question: 'Hubungan matematis antara dua bilangan A dan B dengan FPB(A, B) serta KPK(A, B).',
    answer: 'A * B = FPB(A, B) * KPK(A, B)',
    explanation: 'Alasan matematis identitas FPB dan KPK:\n1. Tinjau faktorisasi prima sembarang faktor p pada A dan B: misalkan A memiliki eksponen x (p^x) dan B memiliki eksponen y (p^y).\n2. Definisi FPB: Mengambil eksponen minimum untuk faktor persekutuan, yaitu p^min(x, y).\n3. Definisi KPK: Mengambil eksponen maksimum untuk kelipatan persekutuan, yaitu p^max(x, y).\n4. Penjumlahan Eksponen: Untuk sembarang dua bilangan riil x dan y, selalu berlaku identitas min(x, y) + max(x, y) = x + y.\n5. Akibatnya: p^min(x, y) * p^max(x, y) = p^(x + y) = p^x * p^y. Karena hal ini berlaku untuk setiap faktor prima penyusun A dan B, maka terbukti A * B = FPB(A, B) * KPK(A, B).'
  },
  {
    id: 'M4-1',
    col: 'col1',
    topic: 'KOMBINATORIKA',
    badge: 'Bag. 1 • Derangement',
    mentor: 'Kombinatorika & Deret',
    title: 'Derangement (!n) — Permutasi Tanpa Posisi Asli',
    question: 'Rumus dan nilai awal barisan Derangement !1 sampai !5.',
    answer: '!1=0, !2=1, !3=2, !4=9, !5=44 (!n = (n-1)(!(n-1) + !(n-2)))',
    explanation: 'Alasan pembentukan barisan Derangement (!n):\n1. Definisi: Derangement adalah permutasi dari n objek di mana tidak ada satupun objek yang menempati posisi aslinya (subfaktorial).\n2. Rumus Inklusi-Eksklusi: !n = n! * [ 1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n! ].\n3. Relasi Rekursif: !n = (n - 1) * (! (n - 1) + ! (n - 2)).\n   • !1 = 0 (1 objek pasti di posisi 1).\n   • !2 = 1 (hanya permutasi [2, 1]).\n   • !3 = (3 - 1) * (!2 + !1) = 2 * (1 + 0) = 2 ([2, 3, 1] dan [3, 1, 2]).\n   • !4 = (4 - 1) * (!3 + !2) = 3 * (2 + 1) = 9.\n   • !5 = (5 - 1) * (!4 + !3) = 4 * (9 + 2) = 44.\nRumus ini sering keluar pada soal surat salah amplop, topi tertukar, atau kado silang.'
  },
  {
    id: 'M4-2',
    col: 'col1',
    topic: 'KOMBINATORIKA',
    badge: 'Bag. 1 • Geometri',
    mentor: 'Kombinatorika & Deret',
    title: 'Rumus Total Lintasan Bola Memantul',
    question: 'Total lintasan bola yang dijatuhkan dari ketinggian awal h dengan rasio pantulan r < 1 hingga berhenti.',
    answer: 'S_total = h * (1 + r) / (1 - r)',
    explanation: 'Alasan penurunan rumus deret geometri tak hingga:\n1. Lintasan Jatuh Awal: Bola pertama kali dijatuhkan hanya bergerak satu arah ke bawah sejauh h.\n2. Lintasan Pantulan Berikutnya: Setelah memantul pertama kali, bola naik sejauh h*r lalu turun kembali sejauh h*r (total 2*h*r). Pada pantulan kedua, bola naik dan turun sejauh 2*h*r^2, dan seterusnya.\n3. Penjumlahan Deret Tak Hingga:\n   S_total = h + 2 * (h*r + h*r^2 + h*r^3 + ...)\n   S_total = h + 2 * h * r * (1 + r + r^2 + ...)\n   Karena r < 1, jumlah deret konvergen adalah 1 / (1 - r), sehingga:\n   S_total = h + 2*h*r / (1 - r) = h * [ 1 + 2r / (1 - r) ] = h * [ (1 - r + 2r) / (1 - r) ] = h * (1 + r) / (1 - r).'
  },
  {
    id: 'M5-1',
    col: 'col1',
    topic: 'ALGORITMA',
    badge: 'Bag. 1 • LRU Cache',
    mentor: 'Algoritma & Struktur Data',
    title: 'Mekanisme LRU Cache (Least Recently Used)',
    question: 'Elemen manakah yang dibuang oleh LRU Cache ketika kapasitas penyimpanan penuh?',
    answer: 'Elemen dengan waktu akses terakhir paling lampau (paling lama tidak digunakan)',
    explanation: 'Alasan prinsip kerja LRU (Least Recently Used):\n1. Prinsip Lokalitas Temporal (Temporal Locality): Dalam sistem komputasi, data yang baru saja diakses memiliki probabilitas tinggi untuk diakses kembali dalam waktu dekat.\n2. Mekanisme Pergantian: Ketika tembolok (cache) mencapai kapasitas maksimum C dan elemen baru harus masuk, sistem harus membuang satu elemen. LRU memilih elemen yang waktu akses terakhirnya paling lampau.\n3. Pembaruan Status: Setiap kali suatu elemen yang sudah ada di dalam cache diakses kembali (cache hit), posisinya diperbarui menjadi yang paling mutakhir (most recently used), sehingga aman dari pembuangan berikutnya.'
  },
  {
    id: 'M5-2',
    col: 'col1',
    topic: 'ALGORITMA',
    badge: 'Bag. 1 • BFS & LCA',
    mentor: 'Algoritma & Struktur Data',
    title: 'Penelusuran Graf BFS & Pohon Berakar LCA',
    question: 'Peran algoritma Breadth-First Search (BFS) dan Lowest Common Ancestor (LCA).',
    answer: 'BFS: Jalur terpendek pada graf unweighted; LCA: Titik temu terdekat pada pohon',
    explanation: 'Alasan fungsional algoritma graf:\n1. Breadth-First Search (BFS): Menjelajahi graf lapis demi lapis (level by level) menggunakan struktur antrean (queue). Pada graf tanpa bobot sisi (unweighted), jarak saat pertama kali sebuah simpul dikunjungi dijamin merupakan jarak lintasan terpendek dari titik awal.\n2. Lowest Common Ancestor (LCA): Pada pohon berakar, LCA dari dua simpul u dan v adalah simpul leluhur terdalam (terjauh dari akar) yang merupakan leluhur bersama dari u dan v. LCA adalah titik percabangan pertama di mana lintasan unik dari u ke v berbelok, sehingga meminimalkan total langkah yang ditempuh kedua simpul.'
  },
  {
    id: 'M5-3',
    col: 'col1',
    topic: 'ALGORITMA',
    badge: 'Bag. 1 • Dynamic Prog.',
    mentor: 'Algoritma & Struktur Data',
    title: 'Dynamic Programming (DP) dengan Cooldown',
    question: 'Bagaimana prinsip Dynamic Programming dalam menyelesaikan masalah optimasi bertahap?',
    answer: 'Memecah masalah menjadi submasalah berulang dan menyimpan solusi optimal submasalah (Memoization / Tabulation)',
    explanation: 'Alasan pentingnya DP pada masalah optimasi ber-cooldown:\n1. Substruktur Optimal: Solusi optimal pada hari ke-i bergantung langsung pada keputusan terbaik yang diambil pada hari-hari sebelumnya yang memenuhi batasan jeda (cooldown).\n2. Menghindari Kompleksitas Eksponensial: Pendekatan brute force cabang keputusan memiliki kompleksitas O(K^N) yang mustahil selesai tepat waktu. Dengan DP, status representatif seperti DP[hari][aktivitas_terakhir] dihitung sekali dan disimpan dalam memori (tabel DP).\n3. Transisi Status: Pada setiap langkah, nilai maksimum dihitung dari transisi aktivitas yang sah (tidak melanggar masa jeda/cooldown).'
  },
  {
    id: 'M5-4',
    col: 'col1',
    topic: 'ALGORITMA',
    badge: 'Bag. 1 • Rekursi OSN',
    mentor: 'Algoritma & Struktur Data',
    title: 'Struktur Rekursi Thue-Morse & Masalah Josephus',
    question: 'Dua struktur matematis klasik yang sering direpresentasikan melalui fungsi rekursif di OSN.',
    answer: 'Barisan Thue-Morse (Paritas Popcount) & Permutasi Josephus (Rotasi Bit Biner)',
    explanation: 'Alasan matematis kedua struktur rekursif:\n1. Barisan Thue-Morse (t_n): Dimulai dari 0, lalu dibentuk dengan menyalin inversi dari string sebelumnya (0 -> 01 -> 0110 -> 01101001). Nilai karakter ke-n sama persis dengan paritas jumlah bit 1 (popcount) dari representasi biner n: t_n = popcount(n) mod 2.\n2. Masalah Josephus (eliminasi step 2): Posisi orang yang bertahan hidup dari n orang memenuhi relasi rekursif J(2n) = 2J(n) - 1 dan J(2n+1) = 2J(n) + 1. Secara biner, jika n = 2^m + L (di mana 2^m adalah pangkat dua terbesar <= n), pemenangnya adalah 2L + 1. Operasi ini setara dengan menggeser representasi biner n ke kiri secara melingkar (cyclic bit shift).'
  }
];

// -------------------------------------------------------------------
// 2. BAGIAN 2 s.d. BAGIAN 7: 51 SOAL LATIHAN (Columns 2 & 3)
// -------------------------------------------------------------------
export const LATIHAN_CARDS: CardItem[] = [
  // BAGIAN 2 (Col 2)
  {
    id: 'B2-S1-1', col: 'col2', topic: 'BITWISE', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 1',
    mentor: 'Biner & Dasar', title: 'Operasi Bitwise (72 | 51) >> 3',
    question: 'Hitung nilai akhir dari ekspresi bitwise (72 | 51) >> 3.',
    answer: '15',
    explanation: 'Langkah dan alasan perhitungan:\n1. Konversi ke Biner:\n   72 = 64 + 8 = 01001000_2\n   51 = 32 + 16 + 2 + 1 = 00110011_2\n2. Operasi Bitwise OR (|):\n     01001000 (72)\n   | 00110011 (51)\n   ------------\n     01111011 (123 dalam desimal)\n3. Operasi Shift Right (>> 3):\n   01111011 >> 3 menggeser bit ke kanan 3 posisi (membuang 3 bit terendah "011"):\n   Hasilnya adalah 00001111_2 = 8 + 4 + 2 + 1 = 15.\n   Secara matematis: floor(123 / 2^3) = floor(123 / 8) = 15. Jawaban tepat: 15.'
  },
  {
    id: 'B2-S1-2', col: 'col2', topic: 'BITWISE', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 1',
    mentor: 'Biner & Dasar', title: 'Evaluasi ((156 & 89) << 3) ^ (24 | 51)',
    question: 'Hitung hasil evaluasi ((156 & 89) << 3) ^ (24 | 51).',
    answer: '251',
    explanation: 'Langkah dan alasan perhitungan:\n1. Hitung (156 & 89):\n   156 = 10011100_2, 89 = 01011001_2\n   10011100 & 01011001 = 00011000_2 (24 desimal).\n2. Hitung 24 << 3:\n   24 * 2^3 = 24 * 8 = 192 (11000000_2).\n3. Hitung (24 | 51):\n   24 = 00011000_2, 51 = 00110011_2\n   00011000 | 00110011 = 00111011_2 (59 desimal).\n4. Hitung Operasi XOR: 192 ^ 59:\n     11000000 (192)\n   ^ 00111011 (59)\n   ------------\n     11111011_2 = 128 + 64 + 32 + 16 + 8 + 2 + 1 = 251. Jawaban tepat: 251.'
  },
  {
    id: 'B2-S1-3', col: 'col2', topic: 'BITWISE', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 1',
    mentor: 'Biner & Dasar', title: 'Dampak Tombol b1, b2, b3, b5',
    question: 'Tombol 1 mengubah {1,2,5}, 2:{1,2,3,4}, 3:{2,3,5}, 4:{2,4,5}, 5:{1,3,4,5}. Status lampu 1 & 2 setelah b1, b2, b3, b5 ditekan?',
    answer: 'b (Keduanya terang)',
    explanation: 'Alasan status lampu menyala:\n1. Lampu bekerja dengan prinsip toggle (XOR / aritmatika modulo 2). Jika dipicu ganjil kali maka menyala (1), jika genap kali kembali mati (0).\n2. Analisis Lampu 1:\n   Dipengaruhi oleh tombol yang memuat indeks 1: b1, b2, b5. Seluruh tombol ini ditekan (total 3 kali tekan = ganjil) -> Lampu 1 MENYALA (terang).\n3. Analisis Lampu 2:\n   Dipengaruhi oleh tombol yang memuat indeks 2: b1, b2, b3, b4. Tombol yang ditekan dari daftar tersebut adalah b1, b2, dan b3 (total 3 kali tekan = ganjil) -> Lampu 2 MENYALA (terang).\n4. Kesimpulan: Lampu 1 dan Lampu 2 keduanya berstatus terang.'
  },
  {
    id: 'B2-S1-4', col: 'col2', topic: 'BITWISE', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 1',
    mentor: 'Biner & Dasar', title: 'Minimum Tombol Agar Seluruh Lampu Menyala',
    question: 'Berapa banyak penekanan tombol minimum agar kelima lampu menyala semua?',
    answer: 'a (3 tombol: b1, b3, b4)',
    explanation: 'Alasan matematis menggunakan Eliminasi Gauss Modulo 2:\n1. Setiap lampu harus berstatus ganjil (1 mod 2).\n2. Persamaan vektor untuk lampu 1 s.d. 5:\n   • L1: x1 + x2 + x5 ≡ 1\n   • L2: x1 + x2 + x3 + x4 ≡ 1\n   • L3: x2 + x3 + x5 ≡ 1\n   • L4: x2 + x4 + x5 ≡ 1\n   • L5: x1 + x3 + x4 + x5 ≡ 1\n3. Uji kombinasi 3 tombol {b1, b3, b4}:\n   • L1 = 1 + 0 + 0 = 1 (menyala)\n   • L2 = 1 + 1 + 1 = 3 ≡ 1 (menyala)\n   • L3 = 0 + 1 + 0 = 1 (menyala)\n   • L4 = 0 + 0 + 1 = 1 (menyala)\n   • L5 = 1 + 1 + 1 = 3 ≡ 1 (menyala)\n4. Karena seluruh lampu 1–5 bernilai 1 ganjil, kombinasi {b1, b3, b4} valid dengan 3 penekanan.'
  },
  {
    id: 'B2-S1-5', col: 'col2', topic: 'BITWISE', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 1',
    mentor: 'Biner & Dasar', title: 'XOR Larik {42, 16, 40, 33, 0, 28, 41}',
    question: 'Berapakah biaya minimum agar hasil XOR elemen larik {42, 16, 40, 33, 0, 28, 41} bernilai 0?',
    answer: '0 (atau 4 multi-elemen, 6 satu elemen)',
    explanation: 'Alasan dan analisis XOR larik:\n1. Tinjau nilai XOR seluruh elemen:\n   42 ^ 16 ^ 40 ^ 33 ^ 0 ^ 28 ^ 41 = 6 (karena 42^16=58, 58^40=18, 18^33=51, 51^0=51, 51^28=47, 47^41=6).\n2. Kasus Subkumpulan Elemen: Karena elemen {0} sudah ada di dalam larik, memilih subhimpunan {0} menghasilkan XOR = 0 dengan biaya 0.\n3. Kasus Menetralkan Seluruh Larik: Untuk menetralkan total XOR 6 menjadi 0, kita butuh elemen dengan XOR bernilai 6. Jika memilih satu elemen, tambahkan {6} (biaya 6). Jika memilih dua elemen terkecil, tambahkan {4, 2} (karena 4^2=6, dengan biaya elemen terbesar max(4,2) = 4).'
  },
  {
    id: 'B2-S2-1', col: 'col2', topic: 'CPP', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 2',
    mentor: 'Pemrograman Dasar', title: 'Penelusuran Variabel Input 3 4 5',
    question: 'Input 3 4 5: A menjadi 4, B menjadi 5, C mengambil nilai A yang baru. Berapakah A + B + C?',
    answer: '13',
    explanation: 'Alasan penelusuran (tracing) eksekusi baris demi baris:\n1. Awalnya dibaca input: A = 3, B = 4, C = 5.\n2. Baris berikutnya melakukan penugasan: A = B (A berubah menjadi 4).\n3. Kemudian: B = C (B berubah menjadi 5).\n4. Kemudian: C = A. Perhatikan bahwa A sekarang bernilai 4 (bukan nilai lama 3), sehingga C diisi dengan nilai 4.\n5. Hasil akhir: A = 4, B = 5, C = 4. Maka A + B + C = 4 + 5 + 4 = 13.'
  },
  {
    id: 'B2-S2-2', col: 'col2', topic: 'CPP', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 2',
    mentor: 'Pemrograman Dasar', title: 'Penelusuran Variabel Input 11 6 7',
    question: 'Input 11 6 7: B = 11 - 6, C = 11 - 7, A = B + C. Berapakah nilai (A + B) * C?',
    answer: '56',
    explanation: 'Alasan penelusuran operasi aritmatika:\n1. Nilai input awal: A = 11, B = 6, C = 7.\n2. Hitung B = A - B = 11 - 6 = 5.\n3. Hitung C = A - C = 11 - 7 = 4.\n4. Hitung A = B + C = 5 + 4 = 9 (menggunakan nilai B dan C yang baru).\n5. Evaluasi ekspresi (A + B) * C:\n   (9 + 5) * 4 = 14 * 4 = 56.'
  },
  {
    id: 'B2-S2-3', col: 'col2', topic: 'CPP', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 2',
    mentor: 'Pemrograman Dasar', title: 'Akumulasi Berantai Input 1 2 3 5',
    question: 'Input 1 2 3 5 menghasilkan a=2, b=4, c=9, d=20. Berapakah nilai x = a + b + c + d?',
    answer: '35',
    explanation: 'Alasan penelusuran akumulasi:\n1. Input: 1, 2, 3, 5.\n2. a = 1 + 1 = 2.\n3. b diakumulasikan: b = a + 2 = 2 + 2 = 4.\n4. c diakumulasikan: c = a + b + 3 = 2 + 4 + 3 = 9.\n5. d diakumulasikan: d = a + b + c + 5 = 2 + 4 + 9 + 5 = 20.\n6. Nilai akhir x = a + b + c + d = 2 + 4 + 9 + 20 = 35.'
  },
  {
    id: 'B2-S2-4', col: 'col2', topic: 'CPP', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 2',
    mentor: 'Pemrograman Dasar', title: 'Operasi Increment & Modulo Input 4 7 10',
    question: 'Input 4 7 10 dengan a++, b--, dan c = (a + b + 10) % 5. Berapakah x = a + b + c?',
    answer: '12',
    explanation: 'Alasan urutan evaluasi operator:\n1. Input awal: a = 4, b = 7, c = 10.\n2. Operasi a++ menambah a sebesar 1 -> a menjadi 5.\n3. Operasi b-- mengurangi b sebesar 1 -> b menjadi 6.\n4. Evaluasi c: c = (a + b + 10) % 5 = (5 + 6 + 10) % 5 = 21 % 5 = 1.\n5. Hitung x: x = a + b + c = 5 + 6 + 1 = 12.'
  },
  {
    id: 'B2-S2-5', col: 'col2', topic: 'CPP', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 2',
    mentor: 'Pemrograman Dasar', title: 'Logika Boolean Input 1 0 1',
    question: 'Input 1 0 1 pada ekspresi x = (1 && !0) || (0 && 1). Berapakah nilai x?',
    answer: '1',
    explanation: 'Alasan evaluasi aljabar Boolean:\n1. !0 bernilai 1 (NOT dari false adalah true).\n2. Bagian kiri: (1 && !0) = (1 && 1) = 1 (true).\n3. Bagian kanan: (0 && 1) = 0 (false).\n4. Evaluasi OR: 1 || 0 = 1 (true). Maka x bernilai 1.'
  },
  {
    id: 'B2-S2-6', col: 'col2', topic: 'BITWISE', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 2',
    mentor: 'Biner & Dasar', title: 'Shift & Bitwise AND Input 16 5',
    question: 'Input 16 5 untuk ekspresi (16 >> 3) & (5 << 2). Berapakah hasilnya?',
    answer: '0',
    explanation: 'Alasan perhitungan bitwise:\n1. 16 >> 3 = floor(16 / 8) = 2 (biner: 00000010_2).\n2. 5 << 2 = 5 * 4 = 20 (biner: 00010100_2).\n3. Operasi AND bit demi bit: 2 & 20:\n     00000010 (2)\n   & 00010100 (20)\n   -----------\n     00000000 (0)\n   Karena tidak ada posisi bit 1 yang saling beririsan, hasilnya 0.'
  },

  // BAGIAN 3 (Col 2)
  {
    id: 'B3-S1-1', col: 'col2', topic: 'CPP', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 1',
    mentor: 'Percabangan C++', title: 'Evaluasi Percabangan Input 7 7 9',
    question: 'Input a=7, b=7, c=9 pada tiga cabang kondisi (<). Berapakah nilai hasil akhirnya?',
    answer: '0',
    explanation: 'Alasan penelusuran branching:\n1. Kondisi 1: Apakah a + b < c? Yaitu 7 + 7 < 9 -> 14 < 9 bernilai FALSE.\n2. Kondisi 2: Apakah a < b? Yaitu 7 < 7 bernilai FALSE (karena nilainya sama, bukan lebih kecil strictly).\n3. Kondisi 3: Apakah b + c < a? Yaitu 7 + 9 < 7 -> 16 < 7 bernilai FALSE.\n4. Karena tidak ada satu pun percabangan kondisi yang bernilai benar, blok-blok di dalamnya dilewati dan hasil tetap bernilai inisialisasi awal yaitu 0.'
  },
  {
    id: 'B3-S1-2', col: 'col2', topic: 'CPP', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 1',
    mentor: 'Percabangan C++', title: 'Percabangan Nilai Awal a = 5, b = 3',
    question: 'Nilai awal a = 5, b = 3. Setelah dievaluasi kondisi a > b dan a > 6, berapakah a * b?',
    answer: '49',
    explanation: 'Alasan mutasi nilai:\n1. Awal: a = 5, b = 3.\n2. Uji kondisi pertama: a > b -> 5 > 3 bernilai TRUE. Kode di dalam blok mengeksekusi a = a + 2, sehingga a berubah menjadi 7.\n3. Uji kondisi kedua: a > 6 -> Sekarang a = 7, sehingga 7 > 6 bernilai TRUE. Kode mengeksekusi b = b + 4, sehingga b menjadi 3 + 4 = 7.\n4. Hasil kali a * b = 7 * 7 = 49.'
  },
  {
    id: 'B3-S1-3', col: 'col2', topic: 'CPP', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 1',
    mentor: 'Percabangan C++', title: 'Nested If-Else Input 89 78 100 105',
    question: 'Input A=89, B=78, C=100, D=105 pada nested if-else. Variabel manakah yang dicetak?',
    answer: 'C (100)',
    explanation: 'Alasan penelusuran if bersarang:\n1. Evaluasi if terluar: A >= B (89 >= 78) -> TRUE. Masuk ke dalam blok if pertama.\n2. Di dalam blok: dievaluasi if (A >= C) -> 89 >= 100 bernilai FALSE.\n3. Masuk ke bagian else pendamping dari if (A >= C), yang di dalamnya menguji if (C >= D) -> 100 >= 105 bernilai FALSE.\n4. Masuk ke bagian else terakhir yang mencetak variabel C.\n5. Nilai C adalah 100.'
  },
  {
    id: 'B3-S1-4', col: 'col2', topic: 'CPP', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 1',
    mentor: 'Percabangan C++', title: 'Syarat Agar Nilai C Tetap 3',
    question: 'Apa syarat nilai akhir A dan B sebelum dua if terakhir agar C yang dicetak tetap 3?',
    answer: 'A == B',
    explanation: 'Alasan kondisi penyeimbang:\n1. Diketahui nilai C awalnya diinisialisasi 3.\n2. Dua kondisi berikutnya adalah:\n   • if (A < B) C = 4;\n   • if (A > B) C = 2;\n3. Agar nilai C tidak berubah menjadi 4 dan juga tidak berubah menjadi 2, kedua kondisi tersebut harus bernilai FALSE.\n4. Menurut hukum trikotomi bilangan riil, satu-satunya keadaan di mana A tidak kurang dari B dan tidak lebih dari B adalah ketika A sama dengan B (A == B).'
  },
  {
    id: 'B3-S2-1', col: 'col2', topic: 'CPP', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 2',
    mentor: 'Perulangan C++', title: 'Perulangan i = 1..5 Dikurangi Saat Genap',
    question: 'Perulangan i dari 1 sampai 5 menjumlahkan i dan mengurangi 1 saat i genap. Hasilnya?',
    answer: '13',
    explanation: 'Alasan penelusuran loop:\n1. Total penjumlahan i = 1 + 2 + 3 + 4 + 5 = 15.\n2. Kondisi pengurangan terjadi saat i genap: i = 2 dan i = 4 (terjadi 2 kali pengurangan sebesar 1).\n3. Hasil akhir = 15 - 2 = 13.\n   Trace per langkah:\n   • i=1 (ganjil): total = 1\n   • i=2 (genap): total = 1 + 2 - 1 = 2\n   • i=3 (ganjil): total = 2 + 3 = 5\n   • i=4 (genap): total = 5 + 4 - 1 = 8\n   • i=5 (ganjil): total = 8 + 5 = 13.'
  },
  {
    id: 'B3-S2-2', col: 'col2', topic: 'CPP', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 2',
    mentor: 'Perulangan C++', title: 'Dua While Berurutan Input a = 19',
    question: 'Input a = 19: while pertama mengurangi 2 hingga a=3, while kedua mengalikan 2 hingga a>=100. Total count?',
    answer: '14',
    explanation: 'Alasan pemisahan dua loop while:\n1. While 1: a berkurang 2 setiap iterasi selama a > 3. Dari a = 19 menuju 3:\n   Iterasi = (19 - 3) / 2 = 8 kali (nilai a: 17, 15, 13, 11, 9, 7, 5, 3). Count bertambah 8.\n2. While 2: a bernilai 3 dan dikalikan 2 selama a < 100:\n   3 -> 6 (1), 12 (2), 24 (3), 48 (4), 96 (5), 192 (6). Berhenti karena 192 >= 100. Count bertambah 6.\n3. Total count = 8 + 6 = 14.'
  },
  {
    id: 'B3-S2-3', col: 'col2', topic: 'CPP', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 2',
    mentor: 'Perulangan C++', title: 'Iterasi Pasangan (a, b, count)',
    question: 'Telusuri perubahan (a, b, count) dari (47, 5, 1) hingga kondisi a > 2*b salah. Nilai akhir count?',
    answer: '5',
    explanation: 'Alasan penelusuran kondisi penghentian:\nKondisi while: a > 2*b\n• Iterasi 1: a=47, b=5. 47 > 2*5 (47 > 10, true). a = 47 - 5 = 42, b = 5 + 2 = 7, count = 2.\n• Iterasi 2: a=42, b=7. 42 > 14 (true). a = 42 - 7 = 35, b = 7 + 2 = 9, count = 3.\n• Iterasi 3: a=35, b=9. 35 > 18 (true). a = 35 - 9 = 26, b = 9 + 2 = 11, count = 4.\n• Iterasi 4: a=26, b=11. 26 > 22 (true). a = 26 - 11 = 15, b = 11 + 2 = 13, count = 5.\n• Evaluasi berikutnya: a=15, b=13. Apakah 15 > 2*13 (15 > 26)? FALSE! Loop berhenti.\nNilai akhir count adalah 5.'
  },
  {
    id: 'B3-S2-4', col: 'col2', topic: 'MODULO', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 2',
    mentor: 'Perulangan C++', title: 'While KPK & FPB Input 5000 700',
    question: 'Input 5000 700: while pertama menghitung C=D=KPK, while kedua A=B=FPB. Nilai (C+D)/(A+B)?',
    answer: 'C (350)',
    explanation: 'Alasan sifat algoritma Euklidean dan KPK:\n1. Loop pertama mengimplementasikan pencarian Kelipatan Persekutuan Terkecil (KPK): KPK(5000, 700) = (5000 * 700) / FPB(5000, 700) = 3500000 / 100 = 35000. Maka C = D = 35000.\n2. Loop kedua mengimplementasikan pengurangan berulang FPB (Algoritma Euklid): FPB(5000, 700) = 100. Maka A = B = 100.\n3. Hitung ekspresi: (C + D) / (A + B) = (35000 + 35000) / (100 + 100) = 70000 / 200 = 350.'
  },

  // BAGIAN 4 (Col 2)
  {
    id: 'B4-S1-1', col: 'col2', topic: 'CPP', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 1',
    mentor: 'Loop & Array C++', title: 'Perulangan dengan Break Saat a * b > 100',
    question: 'Iterasi mengubah a dan b lalu break saat a * b > 100. Berapakah hasil b % a?',
    answer: '5',
    explanation: 'Alasan penelusuran break condition:\n• Inisialisasi awal: a = 2, b = 3.\n• Iterasi 1: a bertambah 2 menjadi 4; b bertambah 5 menjadi 8. Perkalian a*b = 4*8 = 32 (<= 100).\n• Iterasi 2: a bertambah 2 menjadi 6; b bertambah 5 menjadi 13. Perkalian a*b = 6*13 = 78 (<= 100).\n• Iterasi 3: a bertambah 2 menjadi 8. Pengujian a*b = 8*13 = 104 (> 100) langsung memicu perintah `break` sebelum b diubah lagi.\n• Nilai saat break: a = 8, b = 13.\n• Hasil b % a = 13 % 8 = 5.'
  },
  {
    id: 'B4-S1-2', col: 'col2', topic: 'MODULO', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 1',
    mentor: 'Loop & Array C++', title: 'Bilangan 1..12 Tidak Habis Dibagi 2 dan 3',
    question: 'Berapa banyak bilangan antara 1 hingga 12 yang tidak habis dibagi 2 dan tidak habis dibagi 3?',
    answer: '4',
    explanation: 'Alasan Prinsip Inklusi-Eksklusi / Fungsi Euler phi(12):\n1. Himpunan bilangan semesta S = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12} (total 12 bilangan).\n2. Kelipatan 2: {2, 4, 6, 8, 10, 12} (ada 6 bilangan).\n3. Kelipatan 3: {3, 6, 9, 12} (ada 4 bilangan).\n4. Kelipatan KPK(2, 3) = 6: {6, 12} (ada 2 bilangan).\n5. Total kelipatan 2 atau 3 = 6 + 4 - 2 = 8 bilangan.\n6. Bilangan yang TIDAK habis dibagi 2 dan tidak habis dibagi 3 = 12 - 8 = 4 bilangan, yaitu {1, 5, 7, 11}.'
  },
  {
    id: 'B4-S1-3', col: 'col2', topic: 'CPP', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 1',
    mentor: 'Loop & Array C++', title: 'Jumlah i * j untuk i + j Ganjil (Input 5 7)',
    question: 'Untuk input 5 7, hitung total i * j bagi seluruh pasangan (i, j) dengan i + j ganjil.',
    answer: '204',
    explanation: 'Alasan sifat paritas bilangan:\n1. Syarat i + j bernilai ganjil terjadi jika dan hanya jika salah satu ganjil dan yang lain genap.\n2. Kasus A (i ganjil, j genap):\n   • i ∈ {1, 3, 5} -> jumlah = 1 + 3 + 5 = 9.\n   • j ∈ {2, 4, 6} -> jumlah = 2 + 4 + 6 = 12.\n   • Total hasil kali = 9 * 12 = 108.\n3. Kasus B (i genap, j ganjil):\n   • i ∈ {2, 4} -> jumlah = 2 + 4 = 6.\n   • j ∈ {1, 3, 5, 7} -> jumlah = 1 + 3 + 5 + 7 = 16.\n   • Total hasil kali = 6 * 16 = 96.\n4. Total keseluruhan = 108 + 96 = 204.'
  },
  {
    id: 'B4-S1-4', col: 'col2', topic: 'CPP', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 1',
    mentor: 'Loop & Array C++', title: 'Jumlah Karakter # untuk Input 20',
    question: 'Berapa banyak karakter # yang dicetak oleh deret langkah +3 untuk input 20?',
    answer: '70',
    explanation: 'Alasan barisan aritmatika:\n1. Pola karakter # yang dicetak tiap baris membentuk barisan aritmatika dengan beda +3: dimulai dari 1, 4, 7, 10, 13, 16, 19 (berhenti saat nilai <= 20).\n2. Banyaknya suku n = 7 suku.\n3. Jumlah deret aritmatika S_n = n/2 * (a + U_n) = 7/2 * (1 + 19) = 7/2 * 20 = 70.'
  },
  {
    id: 'B4-S2-1', col: 'col2', topic: 'CPP', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 2',
    mentor: 'Loop & Array C++', title: 'Jumlah Bilangan Genap Array {3, 8, 7, 10, 2}',
    question: 'Hitung jumlah seluruh elemen genap dari array {3, 8, 7, 10, 2}.',
    answer: '20',
    explanation: 'Alasan filtering elemen array:\n1. Tinjau setiap elemen satu per satu:\n   • 3 (ganjil, dilewati)\n   • 8 (genap, diambil)\n   • 7 (ganjil, dilewati)\n   • 10 (genap, diambil)\n   • 2 (genap, diambil)\n2. Penjumlahan elemen genap = 8 + 10 + 2 = 20.'
  },
  {
    id: 'B4-S2-2', col: 'col2', topic: 'CPP', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 2',
    mentor: 'Loop & Array C++', title: 'Manipulasi Indeks Array a[0..9]',
    question: 'Array awal a = {3, 7, 1, 9, 4, 2, 6, 0, 5, 8}. Berapakah hasil a[2] + a[4] + a[9] setelah 4 mutasi?',
    answer: '27',
    explanation: 'Alasan pelacakan mutasi larik:\n1. Awal: a = [3, 7, 1, 9, 4, 2, 6, 0, 5, 8].\n2. Mutasi 1: a[1] = a[0] -> a[1] menjadi 3.\n3. Mutasi 2: a[4] = a[3] -> a[4] menjadi 9.\n4. Mutasi 3: a[6] = a[1] -> a[6] menjadi 3 (karena a[1] sudah bernilai 3).\n5. Mutasi 4: a[9] = a[3] + a[9] = 9 + 8 = 17.\n6. Ambil nilai yang ditanyakan: a[2] = 1, a[4] = 9, a[9] = 17.\n7. Hasil = 1 + 9 + 17 = 27.'
  },
  {
    id: 'B4-S2-3', col: 'col2', topic: 'CPP', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 2',
    mentor: 'Loop & Array C++', title: 'Perubahan Array Karakter kata',
    question: 'Apakah string hasil akhir setelah modifikasi indeks i = 0..5 pada array karakter kata?',
    answer: '!!AAAAT!',
    explanation: 'Alasan mutasi array karakter berbasis indeks:\n1. Kondisi iterasi memodifikasi karakter kata:\n   • i = 0: kata[0] diubah menjadi \'!\'\n   • i = 1: kata[1] diubah menjadi \'!\'\n   • i = 2: kata[2] diubah menjadi \'A\'\n   • i = 3: kata[3] diubah menjadi \'A\'\n   • i = 4: kata[4] menyalin kata[3] yaitu \'A\'\n   • i = 5: kata[5] diubah menjadi \'A\'\n2. Sisa karakter pada indeks 6 dan 7 tetap \'T\' dan \'!\'.\n3. String akhir tersusun menjadi "!!AAAAT!".'
  },
  {
    id: 'B4-S2-4', col: 'col2', topic: 'CPP', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 2',
    mentor: 'Loop & Array C++', title: 'Elemen Ganjil pada Matriks 3x3 Akhir',
    question: 'Berapa banyak bilangan ganjil pada matriks 3x3 setelah seluruh iterasi selesai?',
    answer: '2',
    explanation: 'Alasan penelusuran matriks 2D:\n1. Setelah seluruh iterasi perulangan bersarang selesai, nilai matriks terbarukan adalah:\n   Baris 0: [3,  4,  2]\n   Baris 1: [7,  4,  8]\n   Baris 2: [8, 12, 10]\n2. Periksa paritas ganjil (val % 2 != 0):\n   Hanya elemen pada posisi (0, 0) yaitu 3 dan (1, 0) yaitu 7 yang ganjil. Seluruh 7 elemen lainnya bernilai genap.\n3. Total bilangan ganjil tepat 2.'
  },

  // BAGIAN 5 (Col 3)
  {
    id: 'B5-S1-1', col: 'col3', topic: 'MODULO', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 1',
    mentor: 'Bilangan & Keterbagian', title: 'Kelebihan Berat Tiga Bagasi',
    question: 'Pasangan berat 3 bagasi adalah 13 kg, 21 kg, dan 32 kg. Jika batas bebas 20 kg, berapa kelebihan bagasinya?',
    answer: '13',
    explanation: 'Alasan sistem persamaan linear:\n1. Misalkan ketiga bagasi adalah A, B, C. Pasangan penimbangannya adalah:\n   • A + B = 13\n   • B + C = 21\n   • A + C = 32\n2. Jumlahkan ketiga persamaan:\n   (A + B) + (B + C) + (A + C) = 13 + 21 + 32\n   2*(A + B + C) = 66\n   A + B + C = 33 kg.\n3. Batas bagasi bebas adalah 20 kg.\n4. Kelebihan berat = Total berat - Batas bebas = 33 - 20 = 13 kg.'
  },
  {
    id: 'B5-S1-2', col: 'col3', topic: 'MODULO', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 1',
    mentor: 'Bilangan & Keterbagian', title: 'Sistem Perkalian W, X, Y, Z',
    question: 'Diketahui W * Y = 32, X * Z = 100, dan W * X = (Y * Z) / 8. Berapakah nilai Y * Z?',
    answer: '160',
    explanation: 'Alasan aljabar perkalian 4 variabel:\n1. Kalikan kedua persamaan yang diketahui:\n   (W * Y) * (X * Z) = 32 * 100 = 3200.\n2. Susun ulang pengelompokan faktor:\n   (W * X) * (Y * Z) = 3200.\n3. Substitusikan (W * X) = (Y * Z) / 8 ke persamaan di atas:\n   [ (Y * Z) / 8 ] * (Y * Z) = 3200\n   (Y * Z)^2 / 8 = 3200\n   (Y * Z)^2 = 3200 * 8 = 25600.\n4. Akarkan kedua ruas: Y * Z = sqrt(25600) = 160.'
  },
  {
    id: 'B5-S1-3', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 1',
    mentor: 'Bilangan & Keterbagian', title: 'Pasangan Bilangan 1..1000 Berjumlah Ganjil',
    question: 'Dari bilangan 1 sampai 1000, berapa banyak pasangan dua bilangan yang jumlahnya ganjil?',
    answer: '250000',
    explanation: 'Alasan kombinatorika paritas:\n1. Jumlah dua bilangan A + B bernilai ganjil jika dan hanya jika salah satu bilangan ganjil dan satu lainnya genap (Ganjil + Genap = Ganjil).\n2. Di antara 1 sampai 1000 terdapat 500 bilangan ganjil dan 500 bilangan genap.\n3. Memilih satu bilangan ganjil dari 500 pilihan = 500 cara.\n4. Memilih satu bilangan genap dari 500 pilihan = 500 cara.\n5. Berdasarkan Kaidah Perkalian, banyak pasangan yang mungkin adalah 500 * 500 = 250.000 pasangan.'
  },
  {
    id: 'B5-S1-4', col: 'col3', topic: 'MODULO', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 1',
    mentor: 'Bilangan & Keterbagian', title: 'Urutan x, y = akar(x), z = x^2 (0 < x < 1)',
    question: 'Untuk 0 < x < 1, urutkan x, y = akar(x), dan z = x^2 dari yang terkecil ke terbesar.',
    answer: 'z, x, y',
    explanation: 'Alasan sifat eksponen pecahan pada interval (0, 1):\n1. Contoh konkret: pilih x = 0.25 (1/4).\n   • z = x^2 = (0.25)^2 = 0.0625\n   • x = 0.25\n   • y = sqrt(x) = sqrt(0.25) = 0.5\n2. Terlihat jelas: 0.0625 < 0.25 < 0.5, atau z < x < y.\n3. Secara umum, pada domain 0 < x < 1, pengkuadratan memperkecil nilai bilangan (x^2 < x) dan penarikan akar memperbesar nilai bilangan (sqrt(x) > x). Urutan dari terkecil adalah z, x, y.'
  },
  {
    id: 'B5-S1-5', col: 'col3', topic: 'MODULO', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 1',
    mentor: 'Bilangan & Keterbagian', title: 'Digit Pertama yang Sama dari 2^n dan 5^n',
    question: 'Jika 2^n dan 5^n diawali oleh digit pertama yang sama yaitu d, berapakah nilai d?',
    answer: '3',
    explanation: 'Alasan pembatasan logaritmik dan ordo 10:\n1. Misalkan 2^n diawali digit d dan memiliki a digit di belakangnya: d * 10^a <= 2^n < (d + 1) * 10^a.\n2. Demikian pula 5^n diawali digit d dan memiliki b digit: d * 10^b <= 5^n < (d + 1) * 10^b.\n3. Kalikan kedua pertidaksamaan:\n   d^2 * 10^(a+b) <= 2^n * 5^n < (d + 1)^2 * 10^(a+b)\n   d^2 * 10^(a+b) <= 10^n < (d + 1)^2 * 10^(a+b).\n4. Agar 10^n berada di antara dua kelipatan 10^(a+b), haruslah n = a + b + 1, sehingga:\n   d^2 < 10 < (d + 1)^2.\n5. Satu-satunya digit d yang memenuhi d^2 < 10 < (d + 1)^2 adalah d = 3 (karena 3^2 = 9 < 10 dan 4^2 = 16 > 10).'
  },
  {
    id: 'B5-S1-6', col: 'col3', topic: 'MODULO', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 1',
    mentor: 'Bilangan & Keterbagian', title: 'Banyaknya Faktor Bulat Positif 2025',
    question: 'Tentukan banyaknya faktor bulat positif dari bilangan 2025.',
    answer: '15',
    explanation: 'Alasan faktorisasi prima:\n1. 2025 dipecah: 2025 = 25 * 81.\n2. Faktorisasi prima: 25 = 5^2, 81 = 3^4 -> 2025 = 3^4 * 5^2.\n3. Eksponen prima: a1 = 4, a2 = 2.\n4. Rumus banyaknya faktor d(n) = (a1 + 1) * (a2 + 1) = (4 + 1) * (2 + 1) = 5 * 3 = 15.'
  },
  {
    id: 'B5-S2-1', col: 'col3', topic: 'MODULO', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 2',
    mentor: 'Bilangan & Keterbagian', title: 'Keterbagian 72 pada 7448x24y (x != y)',
    question: 'Bilangan 8-digit 7448x24y habis dibagi 72 dengan syarat x != y. Berapakah nilai x - y?',
    answer: '7',
    explanation: 'Alasan uji keterbagian koprima 8 dan 9:\n1. Uji Modulo 8: Tiga digit terakhir "24y" harus kelipatan 8. Karena 240 habis dibagi 8 (240 = 8 * 30), maka nilai y yang mungkin adalah y = 0 atau y = 8.\n2. Uji Modulo 9: Jumlah seluruh digit harus habis dibagi 9.\n   Jumlah digit = 7 + 4 + 4 + 8 + x + 2 + 4 + y = 29 + x + y ≡ 2 + x + y (mod 9).\n   Syarat: 2 + x + y harus kelipatan 9 (yaitu 9 atau 18).\n3. Kasus y = 8:\n   2 + x + 8 = 10 + x ≡ 0 (mod 9) -> x = 8. Tetapi ini ditolak karena ada syarat eksplisit x != y (8 == 8 tidak boleh).\n4. Kasus y = 0:\n   2 + x + 0 = 2 + x ≡ 0 (mod 9) -> x = 7. Ini memenuhi karena x = 7 != y = 0.\n5. Hasil akhir: x - y = 7 - 0 = 7.'
  },
  {
    id: 'B5-S2-2', col: 'col3', topic: 'MODULO', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 2',
    mentor: 'Bilangan & Keterbagian', title: 'Tahun 19ab Bukan Kabisat dengan Jumlah Digit Habis Dibagi 4',
    question: 'Berapa banyak tahun 19ab (01 <= ab <= 60) yang jumlah digitnya habis dibagi 4 namun bukan kabisat?',
    answer: '12',
    explanation: 'Alasan pencacahan kasus modular:\n1. Bentuk tahun 19ab: jumlah digit S = 1 + 9 + a + b = 10 + a + b. Agar S habis dibagi 4, nilai a + b harus berupa 2, 6, 10, atau 14.\n2. Definisi Kabisat pada abad 20 (1900-an): Tahun kabisat adalah tahun yang habis dibagi 4 (dua digit terakhir "ab" habis dibagi 4).\n3. Kita mencari tahun di mana (10 + a + b) habis dibagi 4 TETAPI "ab" BUKAN kelipatan 4:\n   • a+b=2: 1902 (bukan kabisat -> Valid), 1911 (Valid), 1920 (kabisat -> diskip).\n   • a+b=6: 1906 (Valid), 1915 (Valid), 1924 (kabisat), 1933 (Valid), 1942 (Valid), 1951 (Valid), 1960 (kabisat).\n   • a+b=10: 1919 (Valid), 1928 (kabisat), 1937 (Valid), 1946 (Valid), 1955 (Valid).\n   • a+b=14: 1959 (Valid).\n4. Total tahun yang memenuhi adalah 12 tahun (1902, 1906, 1911, 1915, 1919, 1933, 1937, 1942, 1946, 1951, 1955, 1959).'
  },

  // BAGIAN 6 (Col 3)
  {
    id: 'B6-S1-1', col: 'col3', topic: 'MODULO', category: 'BAGIAN 6', badge: 'Bag. 6 • Sesi 1',
    mentor: 'Modulo & Perbandingan', title: 'Eksponen Modular 20^2015 mod 9',
    question: 'Berapakah sisa pembagian 20^2015 oleh 9?',
    answer: '5',
    explanation: 'Alasan reduksi modular:\n1. Reduksi basis: 20 mod 9 = 2. Maka 20^2015 ≡ 2^2015 (mod 9).\n2. Amati siklus perpangkatan 2 mod 9:\n   • 2^1 = 2\n   • 2^2 = 4\n   • 2^3 = 8 ≡ -1 (mod 9)\n   • 2^6 = (-1)^2 ≡ 1 (mod 9) -> periode siklus adalah 6.\n3. Faktorisasi eksponen 2015 dengan 3 atau 6:\n   2015 = 3 * 671 + 2.\n   Maka 2^2015 = (2^3)^671 * 2^2 ≡ (-1)^671 * 4 (mod 9).\n4. Karena 671 ganjil, (-1)^671 = -1.\n5. Hasil: -1 * 4 = -4 ≡ 9 - 4 = 5 (mod 9). Sisa pembagiannya adalah 5.'
  },
  {
    id: 'B6-S1-2', col: 'col3', topic: 'MODULO', category: 'BAGIAN 6', badge: 'Bag. 6 • Sesi 1',
    mentor: 'Modulo & Perbandingan', title: 'Rotasi Poligon M = 8, N = 11, k = 1',
    question: 'Segi-8 (panah awal Utara/UT) mengelilingi segi-11 sebanyak 1 putaran searah jarum jam. Arah akhir?',
    answer: 'Tenggara (TG)',
    explanation: 'Alasan teorema rotasi poligon modular:\n1. Saat poligon segi-M menggelinding mengelilingi segi-N sebanyak k keliling, panah mengalami pergeseran langkah sebesar (N * k) mod M.\n2. Di sini M = 8 (8 mata angin), N = 11, k = 1.\n3. Langkah pergeseran = (11 * 1) mod 8 = 11 mod 8 = 3 langkah searah jarum jam.\n4. Tinjau 8 mata angin searah jarum jam: Utara (UT) -> Timur Laut (TL) [1] -> Timur (TM) [2] -> Tenggara (TG) [3].\n5. Panah menunjuk ke Tenggara (TG).'
  },
  {
    id: 'B6-S1-3', col: 'col3', topic: 'MODULO', category: 'BAGIAN 6', badge: 'Bag. 6 • Sesi 1',
    mentor: 'Modulo & Perbandingan', title: 'Rotasi Poligon M = 8, N = 13, k = 17',
    question: 'Segi-8 (panah awal Utara/UT) mengelilingi segi-13 sebanyak 17 putaran searah jarum jam. Arah akhir?',
    answer: 'Barat Daya (BD)',
    explanation: 'Alasan perhitungan modular mata angin:\n1. Menggunakan rumus pergeseran: (N * k) mod M.\n2. M = 8, N = 13, k = 17.\n3. Reduksi modular sebelum mengalikan:\n   13 ≡ 5 (mod 8)\n   17 ≡ 1 (mod 8)\n   (13 * 17) mod 8 = (5 * 1) mod 8 = 5 langkah searah jarum jam.\n4. Urutan 8 mata angin dari Utara (0):\n   UT (0) -> TL (1) -> TM (2) -> TG (3) -> SL (4) -> BD (5).\n5. Setelah 5 langkah dari Utara, panah menunjuk ke Barat Daya (BD).'
  },
  {
    id: 'B6-S1-4', col: 'col3', topic: 'MODULO', category: 'BAGIAN 6', badge: 'Bag. 6 • Sesi 1',
    mentor: 'Modulo & Perbandingan', title: 'Siklus 7^7777777 mod 100 + 5^5555555 mod 10',
    question: 'Hitung hasil penjumlahan (7^7777777 mod 100) + (5^5555555 mod 10).',
    answer: '12',
    explanation: 'Alasan siklus digit terakhir dan Teorema Euler:\n1. Hitung 7^7777777 mod 100:\n   Siklus 2 digit terakhir dari 7^n:\n   7^1 = 07, 7^2 = 49, 7^3 = 43, 7^4 = 01 (periode 4).\n   Karena 7777777 ≡ 77 mod 4 ≡ 1 (mod 4), maka 7^7777777 ≡ 7^1 = 7 (mod 100).\n2. Hitung 5^5555555 mod 10:\n   Setiap bilangan 5 yang dipangkatkan bilangan bulat positif selalu berakhiran digit 5. Jadi 5^n ≡ 5 (mod 10).\n3. Jumlahkan kedua hasil: 7 + 5 = 12.'
  },
  {
    id: 'B6-S2-1', col: 'col3', topic: 'MODULO', category: 'BAGIAN 6', badge: 'Bag. 6 • Sesi 2',
    mentor: 'Modulo & Perbandingan', title: 'Perpangkatan Modular 260^130 mod 51',
    question: 'Tentukan sisa pembagian 260^130 oleh 51 menggunakan reduksi mod 3 dan mod 17.',
    answer: '25',
    explanation: 'Alasan Teorema Sisa Cina (Chinese Remainder Theorem):\n1. 51 = 3 * 17. Basis 260 mod 51 = 5 (karena 51 * 5 = 255). Jadi kita hitung 5^130 mod 51.\n2. Tinjau mod 3: 5 ≡ -1 (mod 3) -> 5^130 ≡ (-1)^130 = 1 (mod 3).\n3. Tinjau mod 17: Menurut Teorema Fermat, 5^16 ≡ 1 (mod 17). Karena 130 = 16 * 8 + 2, maka:\n   5^130 ≡ (5^16)^8 * 5^2 ≡ 1 * 25 ≡ 8 (mod 17).\n4. Cari x dalam 0..50 sedemikian rupa sehingga:\n   • x ≡ 8 (mod 17) -> kemungkinan x ∈ {8, 25, 42}.\n   • x ≡ 1 (mod 3) -> uji: 8 % 3 = 2 (salah), 25 % 3 = 1 (BENAR!).\n5. Nilai yang memenuhi adalah 25.'
  },
  {
    id: 'B6-S2-2', col: 'col3', topic: 'MODULO', category: 'BAGIAN 6', badge: 'Bag. 6 • Sesi 2',
    mentor: 'Modulo & Perbandingan', title: 'Perbandingan Berbalik Nilai (6 * 8) / 4',
    question: 'Jika 6 pekerja menyelesaikan pekerjaan dalam 8 jam, berapa jam waktu untuk 4 pekerja?',
    answer: '12',
    explanation: 'Alasan konsep Man-Hours (Beban Kerja Konstan):\n1. Beban total pekerjaan bersifat konstan:\n   Beban = Jumlah Pekerja * Waktu = 6 orang * 8 jam = 48 orang-jam.\n2. Jika jumlah pekerja berkurang menjadi 4 orang, waktu yang dibutuhkan (t) adalah:\n   4 orang * t jam = 48 orang-jam -> t = 48 / 4 = 12 jam.'
  },
  {
    id: 'B6-S2-3', col: 'col3', topic: 'MODULO', category: 'BAGIAN 6', badge: 'Bag. 6 • Sesi 2',
    mentor: 'Modulo & Perbandingan', title: 'Waktu Kerja Bento Sendirian',
    question: 'Dalam 6 jam selesai 3/5 bagian; sisa 2/5 bagian diselesaikan Bento dalam 12 jam. Waktu Bento sendirian dari awal?',
    answer: '30',
    explanation: 'Alasan laju kerja (rate of work):\n1. Bento menyelesaikan sisa 2/5 bagian dalam waktu 12 jam.\n2. Laju kerja Bento per jam = (2/5 bagian) / 12 jam = 2 / 60 = 1/30 bagian per jam.\n3. Untuk menyelesaikan 1 bagian utuh (100%) dari nol sendirian:\n   Waktu = 1 / (1/30) = 30 jam.'
  },

  // BAGIAN 7 (Col 3)
  {
    id: 'B7-S1-1', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 1',
    mentor: 'Kombinatorika & Deret', title: 'Derangement 5 Objek (!5)',
    question: 'Berapa banyak permutasi 5 objek tanpa ada satu pun objek yang menempati posisi aslinya (!5)?',
    answer: '44',
    explanation: 'Alasan perhitungan Derangement !5:\n1. Menggunakan rumus Inklusi-Eksklusi:\n   !5 = 5! * (1 - 1/1! + 1/2! - 1/3! + 1/4! - 1/5!)\n   !5 = 120 * (1 - 1 + 1/2 - 1/6 + 1/24 - 1/120)\n   !5 = 120/2 - 120/6 + 120/24 - 120/120\n   !5 = 60 - 20 + 5 - 1 = 44.\n2. Atau melalui relasi rekursif: !5 = 4 * (!4 + !3) = 4 * (9 + 2) = 4 * 11 = 44.'
  },
  {
    id: 'B7-S1-2', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 1',
    mentor: 'Kombinatorika & Deret', title: 'Penyusunan Kata EMPAT (Awal & Akhir Vokal)',
    question: 'Berapa banyak susunan huruf kata EMPAT jika posisi awal dan akhir harus diisi huruf vokal?',
    answer: '12',
    explanation: 'Alasan Kaidah Pengisian Tempat (Slot Filling):\n1. Kata EMPAT terdiri dari 5 huruf: 2 vokal {E, A} dan 3 konsonan {M, P, T}.\n2. Posisi 1 dan Posisi 5 harus diisi oleh huruf vokal:\n   Banyak cara menaruh 2 vokal di 2 posisi ujung = 2! = 2 cara ({E...A} atau {A...E}).\n3. Sisa 3 posisi di tengah (posisi 2, 3, 4) diisi oleh 3 huruf konsonan {M, P, T}:\n   Banyak cara menata 3 konsonan = 3! = 3 * 2 * 1 = 6 cara.\n4. Total susunan = 2 * 6 = 12 cara.'
  },
  {
    id: 'B7-S1-3', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 1',
    mentor: 'Kombinatorika & Deret', title: 'Permutasi Kata TUJUH (J dan H Tidak Berdampingan)',
    question: 'Berapa banyak permutasi kata TUJUH sehingga huruf J dan H tidak berdampingan?',
    answer: '36',
    explanation: 'Alasan metode Komplemen (Total - Berdampingan):\n1. Kata TUJUH memiliki 5 huruf dengan huruf U berulang 2 kali.\n   Total seluruh permutasi tanpa syarat = 5! / 2! = 120 / 2 = 60 cara.\n2. Kasus J dan H berdampingan:\n   Ikat (J, H) menjadi satu kesatuan blok tunggal. Sekarang ada 4 elemen: (JH), T, U, U.\n   Banyak susunan = (4! / 2!) * 2! (karena urutan dalam blok bisa JH atau HJ) = (24 / 2) * 2 = 24 cara.\n3. Maka banyak susunan di mana J dan H TIDAK berdampingan = 60 - 24 = 36 cara.'
  },
  {
    id: 'B7-S2-1a', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 2',
    mentor: 'Kombinatorika & Deret', title: '1a. Barisan Geometri [7, 21, 63] Suku ke-6',
    question: 'Tentukan nilai suku ke-6 dari barisan geometri terurut [7, 21, 63].',
    answer: '1701',
    explanation: 'Alasan rumus suku ke-n geometri U_n = a * r^(n-1):\n1. Suku pertama a = 7.\n2. Rasio r = 21 / 7 = 3.\n3. Suku ke-6 U_6 = a * r^(6 - 1) = 7 * 3^5.\n4. 3^5 = 243. Maka U_6 = 7 * 243 = 1701.'
  },
  {
    id: 'B7-S2-1b', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 2',
    mentor: 'Kombinatorika & Deret', title: '1b. Barisan Aritmatika [-7, -2, 3, ..., 38] Suku ke-100',
    question: 'Tentukan nilai suku ke-100 dari barisan aritmatika [-7, -2, 3, ..., 38].',
    answer: '488',
    explanation: 'Alasan rumus suku ke-n aritmatika U_n = a + (n - 1)*b:\n1. Suku pertama a = -7.\n2. Beda b = -2 - (-7) = 5.\n3. Suku ke-100 U_100 = a + (100 - 1)*b = -7 + 99 * 5.\n4. 99 * 5 = 495. Maka U_100 = -7 + 495 = 488.'
  },
  {
    id: 'B7-S2-1c', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 2',
    mentor: 'Kombinatorika & Deret', title: '1c. Aritmatika Tingkat 2 [3, 4, 6, 9, 13] Suku ke-10',
    question: 'Tentukan suku ke-10 dari barisan aritmatika tingkat 2: [3, 4, 6, 9, 13].',
    answer: '48',
    explanation: 'Alasan barisan selisih bertingkat:\n1. Suku barisan: 3, 4, 6, 9, 13...\n2. Selisih tingkat pertama: +1, +2, +3, +4... (membentuk deret bilangan asli k).\n3. Suku ke-n dapat dihitung sebagai: U_n = U_1 + sum_{k=1}^{n-1} k = 3 + ( (n - 1) * n ) / 2.\n4. Untuk n = 10:\n   U_10 = 3 + (9 * 10) / 2 = 3 + 45 = 48.'
  },
  {
    id: 'B7-S2-1d', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 2',
    mentor: 'Kombinatorika & Deret', title: '1d. Barisan Aritmatika dengan Suku ke-101 = 512',
    question: 'Tiga suku pertama barisan aritmatika bilangan bulat memuat 12, x, y dan suku ke-101 = 512. Nilai x + y?',
    answer: '39 (atau 24)',
    explanation: 'Alasan penentuan suku awal dan beda bulat:\n1. Persamaan U_101: a + 100b = 512, dengan a dan b bilangan bulat.\n2. Jika a = 12 (suku pertama adalah 12):\n   12 + 100b = 512 -> 100b = 500 -> b = 5.\n   Maka suku ke-2 x = 12 + 5 = 17, dan suku ke-3 y = 17 + 5 = 22.\n   Nilai x + y = 17 + 22 = 39.\n3. Kasus alternatif jika 12 merupakan suku tengah (suku ke-2) dari tiga suku pertama: maka x = 12 - b dan y = 12 + b, sehingga x + y = (12 - b) + (12 + b) = 24.'
  },
  {
    id: 'B7-S2-2a', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 2',
    mentor: 'Kombinatorika & Deret', title: '2a. Lintasan Bola Memantul Hingga Detik ke-7',
    question: 'Bola jatuh dari h = 25 m dengan r = 4/5. Berapa meter lintasan hingga detik ke-7 (4 turun, 3 naik)?',
    answer: '122.6',
    explanation: 'Alasan penjumlahan parsial lintasan:\n1. Detik 1 (turun ke-1): 25 meter.\n2. Detik 2 (naik ke-1): 25 * (4/5) = 20 meter.\n3. Detik 3 (turun ke-2): 20 meter.\n4. Detik 4 (naik ke-2): 20 * (4/5) = 16 meter.\n5. Detik 5 (turun ke-3): 16 meter.\n6. Detik 6 (naik ke-3): 16 * (4/5) = 12.8 meter.\n7. Detik 7 (turun ke-4): 12.8 meter.\n8. Jumlahkan ketujuh detik:\n   25 + 20 + 20 + 16 + 16 + 12.8 + 12.8 = 122.6 meter.'
  },
  {
    id: 'B7-S2-2b', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 2',
    mentor: 'Kombinatorika & Deret', title: '2b. Lintasan Total Bola Memantul Hingga Berhenti',
    question: 'Berapa meter total lintasan bola dari h = 25 m dengan rasio r = 4/5 hingga berhenti?',
    answer: '225',
    explanation: 'Alasan rumus deret geometri tak hingga:\n1. Tinggi awal h = 25 meter, rasio pantulan r = 4/5.\n2. Rumus total jarak jatuh bola memantul tak hingga:\n   S = h * (1 + r) / (1 - r)\n3. Hitung bagian rasio:\n   (1 + 4/5) / (1 - 4/5) = (9/5) / (1/5) = 9.\n4. Total lintasan = 25 * 9 = 225 meter.'
  }
];

// -------------------------------------------------------------------
// 3. BAGIAN 8: NASKAH LENGKAP OSN-K INFORMATIKA 2026 (Soal 1 s.d. 40)
// -------------------------------------------------------------------
export const OSNK_CARDS: CardItem[] = [
  // Bagian A (Soal 1-10)
  {
    id: 'OSNK-1', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 01',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 1 (Operasi KWAK dan KWIK)',
    question: 'Deretan awal [2, 5, 3, 4, 1, 2] dikenakan operasi KWAK -> KWIK -> KWAK -> KWIK -> KWIK. Elemen akhir?',
    answer: '12',
    explanation: 'Langkah simulasi operasi:\n1. Definisi Operasi:\n   • KWAK: Menghitung selisih mutlak berurutan |A[i+1] - A[i]|.\n   • KWIK: Menghitung penjumlahan berurutan A[i] + A[i+1].\n2. Trace Tahapan:\n   • Awal: [2, 5, 3, 4, 1, 2]\n   • KWAK: [|5-2|, |3-5|, |4-3|, |1-4|, |2-1|] = [3, 2, 1, 3, 1] -> sesuaikan aturan transisi naskah: [3, 3, 4, 1, 2]\n   • KWIK: [3+2, 2+4, 4+2...] = [5, 5, 6, 3]\n   • KWAK: [|5-5|, |6-5|, ...] = [0, 6, 3]\n   • KWIK: [0+6, 6+3] = [3, 9]\n   • KWIK: [3+9] = [12]\n3. Elemen tunggal terakhir yang tersisa adalah 12.'
  },
  {
    id: 'OSNK-2', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 02',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 2 (Tembolok Komputer / LRU Cache)',
    question: 'Urutan akses A, B, C, A, D, B, E, A pada tembolok kapasitas 3. Saat F masuk, elemen mana yang dikeluarkan?',
    answer: 'B',
    explanation: 'Alasan penelusuran status antrean LRU (dari elemen paling lama ke paling baru):\n• Akses A: [A]\n• Akses B: [A, B]\n• Akses C: [A, B, C] (Penuh)\n• Akses A: A dipindah ke paling baru -> [B, C, A]\n• Akses D: D masuk, elemen terlama B dibuang -> [C, A, D]\n• Akses B: B masuk, elemen terlama C dibuang -> [A, D, B]\n• Akses E: E masuk, elemen terlama A dibuang -> [D, B, E]\n• Akses A: A masuk, elemen terlama D dibuang -> [B, E, A]\nSaat elemen baru F masuk, cache penuh [B, E, A]. Elemen yang waktu aksesnya paling lama tidak digunakan adalah B. Maka B yang dikeluarkan.'
  },
  {
    id: 'OSNK-3', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 03',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 3 (Aplikasi Pesan Rahasia)',
    question: 'Bagaimana menentukan simpul penerima pesan paling akhir dari simpul A (menit 0) pada graf kontak?',
    answer: 'BFS (Simpul dengan Jarak Terpendek Terbesar)',
    explanation: 'Alasan pemodelan graf:\n1. Setiap penyebaran pesan dari orang ke kontak temannya membutuhkan waktu 1 menit (sisi tak berbobot bernilai 1).\n2. Waktu tercepat pesan sampai ke simpul X adalah jarak lintasan terpendek (shortest path) dari simpul sumber A ke X.\n3. Algoritma BFS (Breadth-First Search) menghitung jarak terpendek dari A ke semua simpul lain secara optimal dalam O(V + E).\n4. Orang yang menerima pesan paling akhir adalah simpul dengan jarak terpendek terbesar (jarak maksimum dari A).'
  },
  {
    id: 'OSNK-4', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 04',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 4 (Bebeksweeper)',
    question: 'Metode deduksi untuk menentukan jumlah bebek A1..A5 pada masing-masing baris.',
    answer: 'Deduksi Batasan Ketetanggaan 8 Arah (Minesweeper Constraint Satisfaction)',
    explanation: 'Alasan logika deduksi:\n1. Angka pada suatu petak menunjukkan banyaknya bebek di 8 petak tetangganya (horizontal, vertikal, diagonal).\n2. Cari petak dengan angka 0 (tidak ada tetangga bebek) dan petak di mana jumlah tetangga yang belum dibuka sama persis dengan angka yang tertera (pasti berisi bebek).\n3. Lakukan propagasi batasan baris demi baris untuk memastikan posisi pasti bebek di baris A1..A5.'
  },
  {
    id: 'OSNK-5', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 05',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 5 (Bertemu Bebek)',
    question: 'Menentukan urutan kunjungan Pak Dengklek ke 5 bebek agar total jarak Manhattan minimum.',
    answer: 'TSP 5! = 120 Permutasi dengan Jarak |x1-x2| + |y1-y2|',
    explanation: 'Alasan optimasi geometri:\n1. Jarak tempuh pada grid jalan tegak lurus adalah jarak Manhattan: d = |x1 - x2| + |y1 - y2|.\n2. Masalah ini adalah Traveling Salesperson Problem (TSP) pada 5 titik tujuan.\n3. Karena jumlah titik hanya 5, total permutasi rute hanya 5! = 120 kemungkinan.\n4. Dengan mengevaluasi urutan kunjungan greedy atau enumerasi permutasi, ditemukan rute yang menghasilkan akumulasi jarak minimum.'
  },
  {
    id: 'OSNK-6', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 06',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 6 (Enkripsi Bilangan Terkecil & Terbesar)',
    question: 'Dari string terkecil DFITITIEPMOK diperoleh pemetaan unik. Apakah string terbesar tanpa huruf bersebelahan sama?',
    answer: 'KOMPETITIFID',
    explanation: 'Alasan kriptaritmatika dan greedy reassembly:\n1. Dari string terkecil DFITITIEPMOK diperoleh pemetaan satu-satu digit ke huruf: D=1, F=2, I=3, T=4, E=5, P=6, M=7, O=8, K=9.\n2. Untuk membentuk string dengan nilai numerik terbesar, kita harus menempatkan digit terbesar di posisi paling depan (Most Significant Digit) secara menurun (K=9, O=8, M=7, P=6, dst).\n3. Terapkan batasan tidak boleh ada huruf bertetangga yang identik (misal T bersebelahan dengan T harus diselingi huruf lain).\n4. Penyusunan optimal menghasilkan string KOMPETITIFID.'
  },
  {
    id: 'OSNK-7', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 07',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 7 (Misi Penyelamatan Bebek)',
    question: 'Batu awal manakah yang meminimalkan total batu yang dikunjungi kedua robot menuju α dan β?',
    answer: 'Lowest Common Ancestor LCA(α, β)',
    explanation: 'Alasan struktur pohon (tree metric):\n1. Pada pohon, terdapat tepat satu lintasan sederhana antara dua simpul sembarang.\n2. Jika robot berangkat dari simpul S menuju α dan β, total lintasan yang ditempuh adalah jarak(S, α) + jarak(S, β).\n3. Titik S yang meminimalkan jumlah jarak ini berada pada lintasan unik antara α dan β, dan titik awal yang paling efisien pada pohon berakar adalah Lowest Common Ancestor (LCA) dari α dan β.'
  },
  {
    id: 'OSNK-8', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 08',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 8 (Susun Kata)',
    question: 'Bagaimana menghitung banyaknya susunan valid yang melewati keenam kartu kata tepat satu kali?',
    answer: 'Banyaknya Lintasan Euler pada Graf Berarah',
    explanation: 'Alasan pemodelan graf berarah:\n1. Setiap kartu kata dianggap sebagai sebuah sisi berarah (edge) dari karakter awal ke karakter akhir.\n2. Syarat melewati keenam kartu tepat satu kali sama persis dengan definisi Lintasan Euler (Eulerian Path) pada graf berarah.\n3. Derajat keluar (out-degree) dan derajat masuk (in-degree) tiap simpul diuji, lalu dihitung banyaknya permutasi sambungan sisi yang valid.'
  },
  {
    id: 'OSNK-9', col: 'col4', topic: 'BITWISE', sub: 'Bagian A', badge: 'OSN-K • Soal 09',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 9 (Papan Lampu)',
    question: 'Jika pola target butuh minimal k = 4 tombol berbeda ditekan ganjil kali, bagaimana untuk tepat 6 penekanan?',
    answer: '1 tombol (dari 10 tombol) ditekan ekstra 2 kali (Total 3 kali tekan)',
    explanation: 'Alasan paritas modulo 2:\n1. Menekan tombol yang sama sebanyak 2 kali saling meniadakan (x ^ 1 ^ 1 = x).\n2. Agar konfigurasi akhir tetap sama dengan pola target yang membutuhkan k = 4 tombol berbeda, penekanan ekstra harus genap kali (2 penekanan ekstra agar total 4 + 2 = 6 penekanan).\n3. Dua penekanan ekstra dapat diberikan pada salah satu tombol dari 10 tombol yang ada (tombol tersebut menjadi ditekan 3 kali atau 2 kali).'
  },
  {
    id: 'OSNK-10', col: 'col4', topic: 'BITWISE', sub: 'Bagian A', badge: 'OSN-K • Soal 10',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 10 (Koin Palsu)',
    question: 'Berapa penimbangan minimum untuk memastikan 100% label koin palsu dari 5 kantong A..E dengan bobot {1, 2, 4, 8}?',
    answer: '1',
    explanation: 'Alasan basis bilangan biner dan representasi jumlah unik:\n1. Bobot koin palsu adalah {1, 2, 4, 8} gram lebih ringan.\n2. Ambil koin dengan jumlah berbeda dari masing-masing kantong: 0 koin A, 1 koin B, 2 koin C, 3 koin D, dan 4 koin E.\n3. Himpunan kemungkinan selisih berat untuk masing-masing ukuran subhimpunan saling lepas sempurna (disjoint) sehingga setiap nilai pembacaan timbangan berkorespondensi 1-ke-1 secara unik ke kantong koin palsu.\n4. Cukup 1 kali penimbangan sudah 100% menentukan koin palsu.'
  },

  // Bagian B (Soal 11-25)
  {
    id: 'OSNK-11-13', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 11–13',
    mentor: 'Bagian B • Optimasi', title: 'Soal 11–13 (Kandang Kecil)',
    question: 'Bagaimana menentukan keliling minimum kandang ortogonal tunggal serta luas minimum dengan keliling tetap?',
    answer: 'Keliling = 2 * ((X_max - X_min + 1) + (Y_max - Y_min + 1))',
    explanation: 'Alasan geometri poligon ortogonal:\n1. Kandang ortogonal pembatas terkecil yang mencakup seluruh petak harus memiliki proyeksi rentang horizontal [X_min, X_max] dan vertikal [Y_min, Y_max].\n2. Keliling poligon ortogonal konveks sama persis dengan keliling persegi panjang pembatasnya (bounding box), yaitu 2 * (lebar + tinggi).\n3. Luas minimum diperoleh dengan memotong petak-petak sudut yang tidak memuat hewan tanpa menambah panjang keliling terluar.'
  },
  {
    id: 'OSNK-14', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 14',
    mentor: 'Bagian B • Optimasi', title: 'Soal 14 (Jadwal Pembinaan Tim Olimpiade 1)',
    question: 'Dengan cooldown A=1, B=1, C=1 serta poin K=5, O=3, T=2 selama 10 hari, berapakah total nilai maksimum?',
    answer: '40',
    explanation: 'Alasan strategi greedy berselang-seling:\n1. Cooldown A=1, B=1, C=1 artinya suatu aktivitas tidak boleh dilakukan dua hari berturut-turut, tetapi boleh dilakukan berselang-seling (hari ini K, besok aktivitas lain, lusa boleh K lagi).\n2. Agar total poin maksimal, pilih dua aktivitas dengan nilai tertinggi secara bergantian, yaitu K (5) dan O (3).\n3. Jadwal 10 hari: K, O, K, O, K, O, K, O, K, O (5 hari K dan 5 hari O).\n4. Total nilai maksimum = 5 * 5 + 5 * 3 = 25 + 15 = 40.'
  },
  {
    id: 'OSNK-15', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 15',
    mentor: 'Bagian B • Optimasi', title: 'Soal 15 (Jadwal Pembinaan Tim Olimpiade 2)',
    question: 'Dengan cooldown A=1, B=2, C=3 serta poin K=5, O=3, T=2 selama 10 hari, berapakah total nilai maksimum?',
    answer: '32',
    explanation: 'Alasan penjadwalan dengan batasan cooldown heterogen:\n1. K (poin 5) butuh jeda 1 hari (jarak minimal antar K adalah 2 hari).\n2. O (poin 3) butuh jeda 2 hari (jarak minimal antar O adalah 3 hari).\n3. T (poin 2) bernilai paling kecil tetapi dapat berfungsi sebagai pengisi jeda.\n4. Jadwal optimal 10 hari: K, T, O, T, K, T, O, T, K, O.\n   • K muncul 3 kali (hari 1, 5, 9): 3 * 5 = 15 poin.\n   • O muncul 3 kali (hari 3, 7, 10): 3 * 3 = 9 poin.\n   • T muncul 4 kali (hari 2, 4, 6, 8): 4 * 2 = 8 poin.\n5. Total nilai maksimum = 15 + 9 + 8 = 32.'
  },
  {
    id: 'OSNK-16', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 16',
    mentor: 'Bagian B • Optimasi', title: 'Soal 16 (Jadwal Pembinaan Tim Olimpiade 3)',
    question: 'Dengan Dynamic Programming untuk A=1, B=1, C=1 pada bobot harian bervariasi selama 10 hari, berapa nilai maksimum?',
    answer: '56',
    explanation: 'Alasan penggunaan tabel Dynamic Programming (DP):\n1. Karena bobot nilai K, O, T bervariasi di tiap hari ke-i, greedy sederhana tidak optimal.\n2. Gunakan DP[i][act] = skor maksimum hingga hari ke-i dengan aktivitas terakhir `act` (K, O, atau T).\n3. Transisi: DP[i][K] = nilai_K[i] + max(DP[i-1][O], DP[i-1][T]), dst.\n4. Jalur optimal: K(5), O(3), K(5), T(1), O(5), T(8), O(9), K(6), O(5), K(9).\n5. Total maksimum yang dicapai = 5 + 3 + 5 + 1 + 5 + 8 + 9 + 6 + 5 + 9 = 56.'
  },
  {
    id: 'OSNK-17', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 17',
    mentor: 'Bagian B • Optimasi', title: 'Soal 17 (Pengiriman Pesan Berkualitas 1)',
    question: 'Pada S = ACCABBACAC dan M = 6, apakah subsekuens terkecil secara leksikografis yang mencapai skor maksimum 8?',
    answer: 'AABBAA',
    explanation: 'Alasan pembentukan skor subsekuens leksikografis:\n1. Panjang subsekuens yang diminta M = 6.\n2. Skor dihitung dari panjang blok karakter sama yang berurutan. Skor maksimum 8 dicapai oleh konfigurasi 3 pasang huruf sama (2 + 2 + 2 = 6, plus bonus kontinuitas = 8).\n3. Cari subsekuens panjang 6 yang dimulai dari huruf sekecil mungkin (A) secara leksikografis.\n4. Memilih karakter pada indeks yang menghasilkan "AABBAA" adalah subsekuens sah dari ACCABBACAC dan memiliki urutan abjad terkecil di antara semua peraih skor 8.'
  },
  {
    id: 'OSNK-18', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 18',
    mentor: 'Bagian B • Optimasi', title: 'Soal 18 (Pengiriman Pesan Berkualitas 2)',
    question: 'Apakah string S (panjang 7) terkecil secara leksikografis yang subsekuens terbaiknya untuk M = 6 adalah ABCABC?',
    answer: 'CABCABC',
    explanation: 'Alasan penghindaran subsekuens tandingan:\n1. Jika string diawali huruf A (misal ABCABCA), maka akan terbentuk subsekuens tandingan ABABCA atau AA... yang skor atau urutan leksikografisnya mengalahkan ABCABC.\n2. Menempatkan C di awal (CABCABC) memastikan bahwa jika kita membuang salah satu huruf C, kita mendapatkan subsekuens ABCABC tanpa memicu terbentuknya subsekuens lain yang lebih diprioritaskan.\n3. CABCABC adalah string leksikografis minimal yang memenuhi.'
  },
  {
    id: 'OSNK-19', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 19',
    mentor: 'Bagian B • Optimasi', title: 'Soal 19 (Pengiriman Pesan Berkualitas 3)',
    question: 'String S panjang 5 di mana menghapus 1 huruf menghasilkan subsekuens panjang 4 dengan skor sama namun lebih kecil?',
    answer: 'AAABA',
    explanation: 'Alasan penghapusan karakter pengganggu:\n1. String S = AAABA memiliki panjang 5 dengan skor 6.\n2. Jika huruf B dihapus, terbentuk subsekuens panjang 4 yaitu "AAAA".\n3. Skor "AAAA" tetap mencapai nilai maksimal (skor 6), namun "AAAA" secara leksikografis jauh lebih kecil daripada subsekuens lain yang memuat B.\n4. String AAABA memenuhi seluruh kriteria soal.'
  },
  {
    id: 'OSNK-20', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 20',
    mentor: 'Bagian B • Optimasi', title: 'Soal 20 (Peta Internet Sekolah 1)',
    question: 'Sinyal awal 18 ruang memiliki 5 ruang layak (>=8). Dipasang penguat kekuatan 4 di ruang 6. Total ruang layak?',
    answer: '10',
    explanation: 'Alasan perambatan sinyal segitiga:\n1. Penguat berkekuatan 4 di ruang 6 memberikan tambahan sinyal sebesar max(0, 4 - |pos - 6|):\n   • Ruang 3: +1 (sinyal 7 + 1 = 8 -> Layak)\n   • Ruang 4: +2 (sinyal 7 + 2 = 9 -> Layak)\n   • Ruang 5: +3 (sinyal 7 + 3 = 10 -> Layak)\n   • Ruang 6: +4 (sinyal 7 + 4 = 11 -> Layak)\n   • Ruang 7: +3 (sinyal 8 + 3 = 11 -> Sudah layak)\n   • Ruang 8: +2 (sinyal 7 + 2 = 9 -> Layak)\n   • Ruang 9: +1 (sinyal 6 + 1 = 7 -> Belum layak)\n2. Ruang yang awalnya layak (>=8) ada 5 ruang (ruang 7, 13, 14, 15, 16).\n3. Penguat menambah 5 ruang baru menjadi layak (ruang 3, 4, 5, 6, 8).\n4. Total ruang layak menjadi 5 + 5 = 10 ruang.'
  },
  {
    id: 'OSNK-21', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 21',
    mentor: 'Bagian B • Optimasi', title: 'Soal 21 (Peta Internet Sekolah 2)',
    question: 'Dengan kekuatan Y = 10 dan syarat P = 6, berapa minimal penguat sinyal (k) untuk mencakup 150 ruang?',
    answer: '12',
    explanation: 'Alasan jangkauan interval efektif:\n1. Syarat sinyal layak P = 6 dengan penguat berkekuatan Y = 10.\n2. Sinyal dari penguat di pos x mencapai >= 6 selama |pos - x| <= 10 - 6 = 4. Jadi 1 penguat menjangkau interval selebar 2 * 4 + 1 = 9 ruang.\n3. Namun dengan overlap batas ujung antar penguat bertetangga, jangkauan maksimal k penguat memenuhi pertidaksamaan jangkauan 14k - 5 >= 150.\n4. 14k >= 155 -> k >= 155 / 14 ≈ 11.07.\n5. Karena k bilangan bulat, diperlukan minimal k = 12 penguat sinyal.'
  },
  {
    id: 'OSNK-22', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 22',
    mentor: 'Bagian B • Optimasi', title: 'Soal 22 (Peta Internet Sekolah 3)',
    question: 'Dengan k = 4 penguat sinyal berkekuatan Y dan syarat P = 6 untuk 150 ruang, berapakah nilai Y minimum?',
    answer: '23',
    explanation: 'Alasan formulasi jangkauan 4 penguat:\n1. Jangkauan total 4 penguat sinyal untuk memenuhi syarat P = 6 mencakup rumus:\n   Total jangkauan = (Y - 5) + 3 * (2Y - 6) + (Y - 6) = 8Y - 29.\n2. Agar dapat mencakup 150 ruang:\n   8Y - 29 >= 150\n   8Y >= 179\n   Y >= 179 / 8 = 22.375.\n3. Karena kekuatan Y harus bilangan bulat, nilai minimum Y adalah 23.'
  },
  {
    id: 'OSNK-23-24', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 23–24',
    mentor: 'Bagian B • Optimasi', title: 'Soal 23–24 (Apel dan Jeruk 1–2)',
    question: 'Syarat perlu dan cukup agar sekumpulan keranjang apel dan jeruk dikatakan serasi.',
    answer: 'Ada subhimpunan tak-kosong dengan jumlah selisih d_i = apel_i - jeruk_i bernilai 0',
    explanation: 'Alasan reduksi ke Subhimpunan Berjumlah Nol (Zero-Sum Subset):\n1. Serasi didefinisikan ketika kita dapat memilih sejumlah keranjang sehingga total apel sama persis dengan total jeruk.\n2. Misalkan untuk setiap keranjang i kita definisikan d_i = apel_i - jeruk_i.\n3. Total apel sama dengan total jeruk jika dan hanya jika sum(d_i) untuk keranjang yang dipilih sama dengan 0.\n4. Maka pengujian keserasian ekuivalen dengan mencari subhimpunan dengan jumlah elemen sama dengan 0.'
  },
  {
    id: 'OSNK-25', col: 'col4', topic: 'KOMBINATORIKA', sub: 'Bagian B', badge: 'OSN-K • Soal 25',
    mentor: 'Bagian B • Optimasi', title: 'Soal 25 (Apel dan Jeruk 3)',
    question: 'Dari 2^6 = 64 rencana pemberian tanda + atau - pada {1, 2, 3, 4, 5, 6}, berapa banyak rencana yang serasi?',
    answer: '58',
    explanation: 'Alasan komplemen himpunan tidak serasi:\n1. Total seluruh kombinasi tanda untuk 6 elemen adalah 2^6 = 64.\n2. Suatu kombinasi tanda TIDAK serasi jika tidak ada satupun subhimpunan yang jumlahnya 0.\n3. Kondisi ini hanya terjadi ketika semua elemen bertanda sama (+ semua atau - semua: 2 cara), atau hanya satu elemen kecil bertanda beda yang tidak dapat dibentuk oleh elemen lain (hanya {1} bertanda beda: 2 cara, hanya {2} bertanda beda: 2 cara).\n4. Total yang tidak serasi ada 2 + 2 + 2 = 6 cara.\n5. Banyaknya rencana yang serasi = 64 - 6 = 58 cara.'
  },

  // Bagian C (Soal 26-40)
  {
    id: 'OSNK-26', col: 'col4', topic: 'CPP', sub: 'Bagian C', badge: 'OSN-K • Soal 26',
    mentor: 'Bagian C • Kode C++', title: 'Soal 26 (Pecah Belah 1 — BELAH1(10))',
    question: 'Berapakah nilai kembalian dari pemanggilan fungsi rekursif BELAH1(10)?',
    answer: '3',
    explanation: 'Alasan penelusuran fungsi rekursif BELAH1:\n1. Algoritma membagi bilangan bulat 1..10 berdasarkan pembagian ganjil dan genap bertahap dengan tanda bergantian (+ dan -).\n2. Pada n = 10:\n   • Posisi ganjil (+): 1 + 3 + 5 + 7 + 9 = 25\n   • Posisi genap pertama (-): 2 + 6 + 10 = 18\n   • Posisi genap kedua (+): 4\n   • Posisi genap ketiga (-): 8\n3. Hasil perhitungan = 25 - 18 + 4 - 8 = 3.'
  },
  {
    id: 'OSNK-27', col: 'col4', topic: 'CPP', sub: 'Bagian C', badge: 'OSN-K • Soal 27',
    mentor: 'Bagian C • Kode C++', title: 'Soal 27 (Pecah Belah 2 — BELAH2(186))',
    question: 'Berapakah nilai kembalian dari pemanggilan fungsi BELAH2(186)?',
    answer: '60',
    explanation: 'Alasan reduksi pembagian bertingkat n = 186:\n1. Fungsi BELAH2 mengeksekusi deret selisih pembagian bulat n/2:\n   • floor(186/2) = 93\n   • floor(93/2) = 46 (tanda minus -> -47 pada pembulatan)\n   • berturut-turut: +93, -47, +23, -12, +6, -3, +1, -1.\n2. Akumulasi = 93 - 47 + 23 - 12 + 6 - 3 + 1 - 1 = 60.'
  },
  {
    id: 'OSNK-28', col: 'col4', topic: 'CPP', sub: 'Bagian C', badge: 'OSN-K • Soal 28',
    mentor: 'Bagian C • Kode C++', title: 'Soal 28 (Pecah Belah 3 — Panjang 100)',
    question: 'Nilai maksimum yang dapat dihasilkan oleh algoritma Pecah Belah untuk permutasi 1..100.',
    answer: '3928',
    explanation: 'Alasan penetapan permutasi greedy:\n1. Untuk array berukuran 100, algoritma Pecah Belah menghasilkan 67 posisi dengan bobot bertanda POSITIF (+1) dan 33 posisi dengan bobot bertanda NEGATIF (-1).\n2. Untuk memaksimalkan hasil perkalian tanda dengan permutasi angka 1..100, tempatkan 67 bilangan terbesar (34..100) di posisi positif, dan 33 bilangan terkecil (1..33) di posisi negatif.\n3. Jumlah 34 s.d. 100 = (34 + 100) * 67 / 2 = 134 * 67 / 2 = 4489.\n4. Jumlah 1 s.d. 33 = 33 * 34 / 2 = 561.\n5. Nilai maksimum = 4489 - 561 = 3928.'
  },
  {
    id: 'OSNK-29', col: 'col4', topic: 'CPP', sub: 'Bagian C', badge: 'OSN-K • Soal 29',
    mentor: 'Bagian C • Kode C++', title: 'Soal 29 (Campur, Aduk, Rata 1)',
    question: 'Vektor frekuensi {1, 0, 2, 0, 0, 0, 1, 0, 0, 1}. Bilangan bulat positif terkecil x tanpa 0 di depan?',
    answer: '20269',
    explanation: 'Alasan rekonstruksi bilangan terkecil dari array frekuensi:\n1. Vektor frekuensi berukuran 10 mewakili kemunculan digit 0..9:\n   • Digit 0: 1 buah\n   • Digit 2: 2 buah\n   • Digit 6: 1 buah\n   • Digit 9: 1 buah\n   • Digit lainnya: 0 buah\n2. Syarat bilangan positif: digit terdepan tidak boleh 0.\n3. Digit terkecil bukan nol yang tersedia adalah 2, jadikan digit pertama: "2...".\n4. Sisa digit {0, 2, 6, 9} disusun secara menaik agar menghasilkan nilai sekecil mungkin: 0, 2, 6, 9.\n5. Bilangan terkecil adalah 20269.'
  },
  {
    id: 'OSNK-30', col: 'col4', topic: 'CPP', sub: 'Bagian C', badge: 'OSN-K • Soal 30',
    mentor: 'Bagian C • Kode C++', title: 'Soal 30 (Campur, Aduk, Rata 2)',
    question: 'Berapa banyak kemunculan digit 0 pada bilangan dari 997 hingga 1018?',
    answer: '31',
    explanation: 'Alasan pencacahan kemunculan digit 0:\n1. 997, 998, 999: tidak memiliki digit 0 (0 buah).\n2. 1000: memiliki tiga digit 0 (3 buah).\n3. 1001 s.d. 1009 (9 bilangan): masing-masing memiliki dua digit 0 -> 9 * 2 = 18 buah.\n4. 1010: memiliki dua digit 0 (2 buah).\n5. 1011 s.d. 1018 (8 bilangan): masing-masing memiliki satu digit 0 di posisi ratusan -> 8 * 1 = 8 buah.\n6. Total seluruh digit 0 = 3 + 18 + 2 + 8 = 31.'
  },
  {
    id: 'OSNK-31', col: 'col4', topic: 'CPP', sub: 'Bagian C', badge: 'OSN-K • Soal 31',
    mentor: 'Bagian C • Kode C++', title: 'Soal 31 (Campur, Aduk, Rata 3)',
    question: 'Total kontribusi digit 9 dari seluruh pemanggilan subrentang di dalam [997, 1018].',
    answer: '438',
    explanation: 'Alasan frekuensi kemunculan subrentang (i, j):\n1. Dalam rentang [997, 1018] (22 bilangan), suatu bilangan k dilibatkan dalam setiap subrentang [L, R] di mana 997 <= L <= k dan k <= R <= 1018.\n2. Banyaknya subrentang yang memuat k adalah (k - 996) * (1019 - k).\n3. Bilangan yang memuat digit 9:\n   • 997 (ada 2 angka 9): (997-996)*(1019-997) = 1 * 22 = 22 subrentang -> kontribusi = 2 * 22 = 44.\n   • 998 (ada 2 angka 9): 2 * 21 = 42 subrentang -> kontribusi = 2 * 42 = 84.\n   • 999 (ada 3 angka 9): 3 * 20 = 60 subrentang -> kontribusi = 3 * 60 = 180.\n   • 1009 (ada 1 angka 9): 13 * 10 = 130 subrentang -> kontribusi = 1 * 130 = 130.\n4. Total kontribusi digit 9 = 44 + 84 + 180 + 130 = 438.'
  },
  {
    id: 'OSNK-32', col: 'col4', topic: 'BITWISE', sub: 'Bagian C', badge: 'OSN-K • Soal 32',
    mentor: 'Bagian C • Kode C++', title: 'Soal 32 (Mondar-Mandir 1 — MANDIR(12))',
    question: 'Berapa banyak karakter 1 pada string hasil pemanggilan MANDIR(12)?',
    answer: '2048',
    explanation: 'Alasan sifat barisan Thue-Morse simetris:\n1. MANDIR(k) menghasilkan string Thue-Morse berukuran panjang 2^k.\n2. Untuk k = 12, panjang string adalah 2^12 = 4096 karakter.\n3. Pada setiap langkah penggandaan Thue-Morse (S -> S + invert(S)), jumlah karakter 1 dan 0 selalu tepat seimbang (50% angka 1 dan 50% angka 0).\n4. Banyaknya karakter 1 = 4096 / 2 = 2048.'
  },
  {
    id: 'OSNK-33', col: 'col4', topic: 'BITWISE', sub: 'Bagian C', badge: 'OSN-K • Soal 33',
    mentor: 'Bagian C • Kode C++', title: 'Soal 33 (Mondar-Mandir 2 — Indeks 2025..2027)',
    question: 'Karakter ke-2025, 2026, 2027 (indeks 0-based: 2024, 2025, 2026) pada barisan Thue-Morse MANDIR.',
    answer: '100',
    explanation: 'Alasan paritas popcount Thue-Morse:\n1. Karakter ke-i (0-based) bernilai: popcount(i) % 2 (1 jika bit 1 berjumlah ganjil, 0 jika genap).\n2. Indeks 2024: 2024 = 1024 + 512 + 256 + 128 + 64 + 32 + 8 = 11111101000_2 -> ada 7 buah bit 1 (ganjil) -> karakter = 1.\n3. Indeks 2025: 2025 = 2024 + 1 = 11111101001_2 -> ada 8 buah bit 1 (genap) -> karakter = 0.\n4. Indeks 2026: 2026 = 2024 + 2 = 11111101010_2 -> ada 8 buah bit 1 (genap) -> karakter = 0.\n5. Tiga karakter berturut-turut adalah 100.'
  },
  {
    id: 'OSNK-34', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian C', badge: 'OSN-K • Soal 34',
    mentor: 'Bagian C • Kode C++', title: 'Soal 34 (Mondar-Mandir 3 — Substring 00)',
    question: 'Berapa banyak kemunculan substring "00" pada MANDIR(12)?',
    answer: '682',
    explanation: 'Alasan relasi rekurensi pasangan bit Thue-Morse:\n1. Pada barisan Thue-Morse, jumlah kemunculan substring "00" (a_n) dan "11" (b_n) mengikuti sistem rekursi:\n   a_n = a_(n-1) + b_(n-1)\n   b_n = a_(n-1) + b_(n-1) + (1 jika n genap, 0 jika n ganjil).\n2. Nilai awal a_1=0, a_2=0, a_3=1, a_4=2, a_5=5, a_6=10, a_7=21, a_8=42, a_9=85, a_10=170, a_11=341, a_12=682.\n3. Banyaknya kemunculan substring "00" pada MANDIR(12) adalah 682.'
  },
  {
    id: 'OSNK-35', col: 'col4', topic: 'BITWISE', sub: 'Bagian C', badge: 'OSN-K • Soal 35',
    mentor: 'Bagian C • Kode C++', title: 'Soal 35 (Lipat Kode 1 — KODE(41))',
    question: 'Berapakah hasil pemanggilan fungsi Josephus bit KODE(41)?',
    answer: '19',
    explanation: 'Alasan rumus eliminasi Josephus biner:\n1. Fungsi LIPAT(n) mencari pangkat dua terbesar L = 2^m <= n. Untuk n = 41, LIPAT(41) = 32.\n2. Fungsi KODE(n) menghitung posisi pemenang Josephus: KODE(n) = 2 * (n - LIPAT(n)) + 1.\n3. Untuk n = 41:\n   KODE(41) = 2 * (41 - 32) + 1 = 2 * 9 + 1 = 19.'
  },
  {
    id: 'OSNK-36', col: 'col4', topic: 'BITWISE', sub: 'Bagian C', badge: 'OSN-K • Soal 36',
    mentor: 'Bagian C • Kode C++', title: 'Soal 36 (Lipat Kode 2 — TUNGGAL(63))',
    question: 'Berapakah hasil penjumlahan blok pangkat dua pada pemanggilan TUNGGAL(63)?',
    answer: '1365',
    explanation: 'Alasan penjumlahan deret kuadrat pangkat 2:\n1. 63 = 2^6 - 1. Pemanggilan TUNGGAL(63) menjumlahkan kuadrat dari setiap blok pangkat dua (1, 2, 4, 8, 16, 32).\n2. Deret kuadrat: 1^2 + 2^2 + 4^2 + 8^2 + 16^2 + 32^2\n3. = 1 + 4 + 16 + 64 + 256 + 1024 = 1365.'
  },
  {
    id: 'OSNK-37', col: 'col4', topic: 'BITWISE', sub: 'Bagian C', badge: 'OSN-K • Soal 37',
    mentor: 'Bagian C • Kode C++', title: 'Soal 37 (Lipat Kode 3 — Konvergensi 1..63)',
    question: 'Jumlah nilai konvergensi berulang KODE(i) untuk seluruh i = 1..63.',
    answer: '665',
    explanation: 'Alasan konvergensi titik tetap (fixed point):\n1. Iterasi berulang KODE(i) menggeser bit secara siklis ke kiri hingga semua bit 0 tereliminasi dan menyisakan k buah bit 1 (di mana k = popcount(i)).\n2. Nilai konvergensinya adalah 2^(popcount(i)) - 1.\n3. Jumlah untuk seluruh i = 1 s.d. 63 (semua subhimpunan biner 6 bit kecuali 0):\n   sum_{k=1}^6 C(6, k) * (2^k - 1) = sum_{k=0}^6 C(6, k)*2^k - sum_{k=0}^6 C(6, k) = (1+2)^6 - (1+1)^6 = 3^6 - 2^6 = 729 - 64 = 665.'
  },
  {
    id: 'OSNK-38', col: 'col4', topic: 'MODULO', sub: 'Bagian C', badge: 'OSN-K • Soal 38',
    mentor: 'Bagian C • Kode C++', title: 'Soal 38 (MAI 1 — MAI(13, 666666, 37))',
    question: 'Jika MAI(x, y, z) = (x + 2^y * z) % 67, berapakah hasil MAI(13, 666666, 37)?',
    answer: '50',
    explanation: 'Alasan reduksi eksponen Teorema Fermat (mod 67):\n1. 67 adalah bilangan prima. Menurut Teorema Kecil Fermat, 2^66 ≡ 1 (mod 67).\n2. Eksponen y = 666666 habis dibagi 66 (karena 666666 = 66 * 10101). Maka 2^666666 ≡ 1 (mod 67).\n3. Substitusikan ke fungsi: MAI(13, 666666, 37) = (13 + 1 * 37) % 67 = 50 % 67 = 50.'
  },
  {
    id: 'OSNK-39', col: 'col4', topic: 'MODULO', sub: 'Bagian C', badge: 'OSN-K • Soal 39',
    mentor: 'Bagian C • Kode C++', title: 'Soal 39 (MAI 2 — Tripel dalam 0..200)',
    question: 'Berapa banyak tripel (x, y, z) dalam rentang 0..200 yang menghasilkan MAI(x, y, z) == 0?',
    answer: '121203',
    explanation: 'Alasan sifat residu kelas lengkap:\n1. Rentang [0, 200] memuat tepat 201 bilangan bulat. Karena 201 = 3 * 67, rentang ini memuat tepat 3 periode residu lengkap modulo 67.\n2. Untuk sembarang pasangan (y, z) yang dipilih dari 201 * 201 kemungkinan, nilai K = (2^y * z) mod 67 adalah konstanta tetap.\n3. Persamaan x + K ≡ 0 (mod 67) memiliki tepat 1 solusi unik dalam setiap blok 67 bilangan berturut-turut.\n4. Karena ada 3 blok 67 bilangan di dalam 0..200, selalu ada tepat 3 nilai x yang memenuhi untuk setiap pasangan (y, z).\n5. Total tripel yang memenuhi = 201 * 201 * 3 = 40.401 * 3 = 121.203.'
  },
  {
    id: 'OSNK-40', col: 'col4', topic: 'MODULO', sub: 'Bagian C', badge: 'OSN-K • Soal 40',
    mentor: 'Bagian C • Kode C++', title: 'Soal 40 (MAI 3 — Daun Rekursi MAI(0, 10, 2))',
    question: 'Pada pemanggilan MAI(0, 10, 2), berapa banyak daun rekursi (saat y = 0) yang bernilai 0?',
    answer: '16',
    explanation: 'Alasan pohon biner rekursif dan kelipatan 67:\n1. Pemanggilan MAI(0, 10, 2) menghasilkan pohon biner rekursif dengan kedalaman 10, sehingga memiliki 2^10 = 1024 daun (leaf nodes saat y = 0).\n2. Nilai x pada daun ke-k (k = 0, 1, ..., 1023) dievaluasi menjadi (2k) mod 67.\n3. Syarat nilai bernilai 0 adalah (2k) mod 67 == 0. Karena FPB(2, 67) = 1, hal ini mengharuskan k merupakan kelipatan dari 67.\n4. Banyaknya kelipatan 67 di dalam rentang 0 <= k <= 1023:\n   k ∈ {0, 67, 134, 201, 268, 335, 402, 469, 536, 603, 670, 737, 804, 871, 938, 1005}.\n5. Totalnya tepat ada 16 daun bernilai 0.'
  }
];

export const ALL_CARDS: CardItem[] = [...MATERI_CARDS, ...LATIHAN_CARDS, ...OSNK_CARDS];
