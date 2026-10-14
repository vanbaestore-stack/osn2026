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
    answer: 'a ^ a = 0 dan a ^ 0 = a',
    explanation: 'AND (&) bernilai 1 jika kedua bit 1. OR (|) bernilai 1 jika salah satu atau kedua bit 1. XOR (^) bernilai 1 jika kedua bit berbeda, memiliki sifat identitas a ^ a = 0 dan a ^ 0 = a.'
  },
  {
    id: 'M1-2',
    col: 'col1',
    topic: 'BITWISE',
    badge: 'Bag. 1 • Shift',
    mentor: 'Operasi Bitwise & Biner',
    title: 'Pergeseran Bit (Shift Left << & Right >>)',
    question: 'Ekuivalensi matematis dari operasi a << k dan a >> k pada bilangan bulat.',
    answer: 'a * (2^k) dan floor(a / 2^k)',
    explanation: 'Shift Left (a << k) menggeser bit ke kiri sejauh k posisi, ekuivalen dengan a * (2^k). Shift Right (a >> k) menggeser bit ke kanan sejauh k posisi, ekuivalen dengan pembagian bulat a / (2^k).'
  },
  {
    id: 'M2-1',
    col: 'col1',
    topic: 'CPP',
    badge: 'Bag. 1 • Percabangan',
    mentor: 'Struktur Kontrol C++',
    title: 'Evaluasi Nested If-Else C++',
    question: 'Bagaimana urutan evaluasi percabangan bersarang (nested if-else) dalam bahasa C++?',
    answer: 'Atas ke bawah, berhenti di cabang benar pertama',
    explanation: 'Percabangan bersarang (nested if-else) dievaluasi dari atas ke bawah dan berhenti pada cabang pertama yang bernilai benar (short-circuit branch evaluation).'
  },
  {
    id: 'M2-2',
    col: 'col1',
    topic: 'CPP',
    badge: 'Bag. 1 • Perulangan',
    mentor: 'Struktur Kontrol C++',
    title: 'Perbedaan Perintah continue dan break',
    question: 'Apa perbedaan dampak eksekusi perintah continue dan break di dalam blok perulangan?',
    answer: 'continue: lewati sisa iterasi; break: hentikan loop',
    explanation: 'Perintah continue melewati sisa baris dalam iterasi saat ini dan lanjut ke iterasi berikutnya, sedangkan break menghentikan perulangan sepenuhnya.'
  },
  {
    id: 'M2-3',
    col: 'col1',
    topic: 'CPP',
    badge: 'Bag. 1 • Array 0-Based',
    mentor: 'Struktur Kontrol C++',
    title: 'Pengindeksan Array C++ (0-Based Indexing)',
    question: 'Rentang indeks valid untuk array C++ berukuran N elemen.',
    answer: 'Indeks 0 hingga ukuran - 1',
    explanation: 'Indeks array C++ selalu dimulai dari 0 hingga ukuran dikurangi 1 (0 s.d. N-1).'
  },
  {
    id: 'M3-1',
    col: 'col1',
    topic: 'MODULO',
    badge: 'Bag. 1 • Faktor Prima',
    mentor: 'Teori Bilangan & Mod',
    title: 'Rumus Banyaknya Faktor Bulat Positif',
    question: 'Jika n = (p1^a1) * (p2^a2) * ... * (pk^ak), berapakah banyaknya faktor bulat positif dari n?',
    answer: '(a1 + 1)(a2 + 1)...(ak + 1)',
    explanation: 'Jika faktorisasi prima n = (p1^a1) * (p2^a2) * ... * (pk^ak), maka banyaknya faktor bulat positif adalah hasil kali (a1 + 1)(a2 + 1)...(ak + 1).'
  },
  {
    id: 'M3-2',
    col: 'col1',
    topic: 'MODULO',
    badge: 'Bag. 1 • Keterbagian 72',
    mentor: 'Teori Bilangan & Mod',
    title: 'Syarat Keterbagian Bilangan oleh 72',
    question: 'Apa syarat perlu dan cukup agar suatu bilangan bulat habis dibagi 72?',
    answer: 'Habis dibagi 8 DAN habis dibagi 9',
    explanation: 'Syarat keterbagian 72 adalah habis dibagi 8 (3 digit terakhir habis dibagi 8) sekaligus habis dibagi 9 (jumlah seluruh digit habis dibagi 9).'
  },
  {
    id: 'M3-3',
    col: 'col1',
    topic: 'MODULO',
    badge: 'Bag. 1 • Fermat',
    mentor: 'Teori Bilangan & Mod',
    title: 'Teorema Kecil Fermat (Fermat\'s Little Theorem)',
    question: 'Bagaimana penyederhanaan perpangkatan modular a^(p-1) mod p untuk p prima?',
    answer: 'a^(p-1) mod p = 1 (jika FPB(a, p) = 1)',
    explanation: 'Teorema Kecil Fermat menyatakan jika p prima dan FPB(a, p) = 1, maka a^(p-1) mod p = 1.'
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
    explanation: 'Hubungan FPB dan KPK untuk dua bilangan A dan B memenuhi identitas A * B = FPB(A, B) * KPK(A, B).'
  },
  {
    id: 'M4-1',
    col: 'col1',
    topic: 'KOMBINATORIKA',
    badge: 'Bag. 1 • Derangement',
    mentor: 'Kombinatorika & Deret',
    title: 'Derangement (!n) — Permutasi Tanpa Posisi Asli',
    question: 'Rumus dan nilai awal barisan Derangement !1 sampai !5.',
    answer: '!1=0, !2=1, !3=2, !4=9, !5=44',
    explanation: 'Derangement (!n) menghitung banyaknya permutasi n unsur tanpa ada unsur yang menempati posisi aslinya: !n = n! * (1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n / n!), dengan nilai awal !1 = 0, !2 = 1, !3 = 2, !4 = 9, !5 = 44.'
  },
  {
    id: 'M4-2',
    col: 'col1',
    topic: 'KOMBINATORIKA',
    badge: 'Bag. 1 • Geometri',
    mentor: 'Kombinatorika & Deret',
    title: 'Rumus Total Lintasan Bola Memantul',
    question: 'Total lintasan bola yang dijatuhkan dari ketinggian awal h dengan rasio pantulan r < 1 hingga berhenti.',
    answer: 'h * (1 + r) / (1 - r)',
    explanation: 'Total lintasan bola memantul dari ketinggian awal h dengan rasio pantulan r < 1 hingga berhenti adalah h * (1 + r) / (1 - r).'
  },
  {
    id: 'M5-1',
    col: 'col1',
    topic: 'ALGORITMA',
    badge: 'Bag. 1 • LRU Cache',
    mentor: 'Algoritma & Struktur Data',
    title: 'Mekanisme LRU Cache (Least Recently Used)',
    question: 'Elemen manakah yang dibuang oleh LRU Cache ketika kapasitas penyimpanan penuh?',
    answer: 'Elemen dengan waktu akses terakhir paling lampau',
    explanation: 'LRU Cache (Least Recently Used) membuang elemen yang waktu akses terakhirnya paling lampau saat kapasitas penuh.'
  },
  {
    id: 'M5-2',
    col: 'col1',
    topic: 'ALGORITMA',
    badge: 'Bag. 1 • BFS & LCA',
    mentor: 'Algoritma & Struktur Data',
    title: 'Penelusuran Graf BFS & Pohon Berakar LCA',
    question: 'Peran algoritma Breadth-First Search (BFS) dan Lowest Common Ancestor (LCA).',
    answer: 'BFS: Jarak minimum graf; LCA: Titik temu terdekat pohon',
    explanation: 'BFS (Breadth-First Search) menentukan waktu tempuh atau jarak minimum penyebaran pesan pada graf tak berbobot. LCA (Lowest Common Ancestor) pada pohon berakar menentukan titik temu terdekat dari dua simpul.'
  },
  {
    id: 'M5-3',
    col: 'col1',
    topic: 'ALGORITMA',
    badge: 'Bag. 1 • Dynamic Prog.',
    mentor: 'Algoritma & Struktur Data',
    title: 'Dynamic Programming (DP) dengan Cooldown',
    question: 'Bagaimana prinsip Dynamic Programming dalam menyelesaikan masalah optimasi bertahap?',
    answer: 'Menyimpan solusi submasalah optimal',
    explanation: 'Dynamic Programming (DP) menyelesaikan masalah optimasi bertahap dengan menyimpan solusi submasalah, seperti penjadwalan latihan olimpiade dengan jeda (cooldown).'
  },
  {
    id: 'M5-4',
    col: 'col1',
    topic: 'ALGORITMA',
    badge: 'Bag. 1 • Rekursi OSN',
    mentor: 'Algoritma & Struktur Data',
    title: 'Struktur Rekursi Thue-Morse & Masalah Josephus',
    question: 'Dua struktur matematis klasik yang sering direpresentasikan melalui fungsi rekursif di OSN.',
    answer: 'Barisan Thue-Morse (paritas popcount) & Josephus',
    explanation: 'Rekursi khusus pada OSN sering merepresentasikan struktur matematis klasik seperti Barisan Thue-Morse dan Masalah Josephus.'
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
    explanation: '72 (1001000_2) | 51 (0110011_2) = 123 (1111011_2), kemudian 123 >> 3 = floor(123 / 8) = 15. Jawaban: 15.'
  },
  {
    id: 'B2-S1-2', col: 'col2', topic: 'BITWISE', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 1',
    mentor: 'Biner & Dasar', title: 'Evaluasi ((156 & 89) << 3) ^ (24 | 51)',
    question: 'Hitung hasil evaluasi ((156 & 89) << 3) ^ (24 | 51).',
    answer: '251',
    explanation: '156 & 89 = 24, lalu 24 << 3 = 192, sedangkan 24 | 51 = 59, sehingga 192 ^ 59 = 251. Jawaban: 251.'
  },
  {
    id: 'B2-S1-3', col: 'col2', topic: 'BITWISE', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 1',
    mentor: 'Biner & Dasar', title: 'Dampak Tombol b1, b2, b3, b5',
    question: 'Tombol 1 mengubah {1,2,5}, 2:{1,2,3,4}, 3:{2,3,5}, 4:{2,4,5}, 5:{1,3,4,5}. Status lampu 1 & 2 setelah b1, b2, b3, b5 ditekan?',
    answer: 'b (Keduanya terang)',
    explanation: 'Penekanan b1, b2, b3, b5 mengubah b1 sebanyak 3 kali (dari b1, b2, b5) dan mengubah b2 sebanyak 3 kali (dari b1, b2, b3), sehingga keduanya menyala. Jawaban: b (Keduanya terang).'
  },
  {
    id: 'B2-S1-4', col: 'col2', topic: 'BITWISE', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 1',
    mentor: 'Biner & Dasar', title: 'Minimum Tombol Agar Seluruh Lampu Menyala',
    question: 'Berapa banyak penekanan tombol minimum agar kelima lampu menyala semua?',
    answer: 'a (3 tombol: b1, b3, b4)',
    explanation: 'Sistem persamaan mod 2 menunjukkan seluruh lampu menyala dengan menekan tombol b1, b3, dan b4 masing-masing sekali. Jawaban: a (3).'
  },
  {
    id: 'B2-S1-5', col: 'col2', topic: 'BITWISE', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 1',
    mentor: 'Biner & Dasar', title: 'XOR Larik {42, 16, 40, 33, 0, 28, 41}',
    question: 'Berapakah biaya minimum agar hasil XOR elemen larik {42, 16, 40, 33, 0, 28, 41} bernilai 0?',
    answer: '0 (atau 4 multi-elemen, 6 satu elemen)',
    explanation: 'Nilai XOR seluruh elemen larik adalah 42 ^ 16 ^ 40 ^ 33 ^ 0 ^ 28 ^ 41 = 6. Jika memilih subkumpulan yang XOR-nya 0, elemen {0} sudah bernilai 0 (biaya 0); jika seluruh larik, tambahkan {4, 2} dengan biaya elemen terbesar 4 atau {6} dengan biaya 6.'
  },
  {
    id: 'B2-S2-1', col: 'col2', topic: 'CPP', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 2',
    mentor: 'Pemrograman Dasar', title: 'Penelusuran Variabel Input 3 4 5',
    question: 'Input 3 4 5: A menjadi 4, B menjadi 5, C mengambil nilai A yang baru. Berapakah A + B + C?',
    answer: '13',
    explanation: 'Input 3 4 5: A menjadi 4, B menjadi 5, C mengambil nilai A yang baru yaitu 4, sehingga A + B + C = 4 + 5 + 4 = 13. Jawaban: 13.'
  },
  {
    id: 'B2-S2-2', col: 'col2', topic: 'CPP', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 2',
    mentor: 'Pemrograman Dasar', title: 'Penelusuran Variabel Input 11 6 7',
    question: 'Input 11 6 7: B = 11 - 6, C = 11 - 7, A = B + C. Berapakah nilai (A + B) * C?',
    answer: '56',
    explanation: 'Input 11 6 7: B = 11 - 6 = 5, C = 11 - 7 = 4, A = 5 + 4 = 9, hasil (9 + 5) * 4 = 56. Jawaban: 56.'
  },
  {
    id: 'B2-S2-3', col: 'col2', topic: 'CPP', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 2',
    mentor: 'Pemrograman Dasar', title: 'Akumulasi Berantai Input 1 2 3 5',
    question: 'Input 1 2 3 5 menghasilkan a=2, b=4, c=9, d=20. Berapakah nilai x = a + b + c + d?',
    answer: '35',
    explanation: 'Input 1 2 3 5: a = 2, b = 2 + 2 = 4, c = 2 + 4 + 3 = 9, d = 2 + 4 + 9 + 5 = 20, maka x = 2 + 4 + 9 + 20 = 35. Jawaban: 35.'
  },
  {
    id: 'B2-S2-4', col: 'col2', topic: 'CPP', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 2',
    mentor: 'Pemrograman Dasar', title: 'Operasi Increment & Modulo Input 4 7 10',
    question: 'Input 4 7 10 dengan a++, b--, dan c = (a + b + 10) % 5. Berapakah x = a + b + c?',
    answer: '12',
    explanation: 'Input 4 7 10: a++ menghasilkan a = 5, b-- menghasilkan b = 6, c = (5 + 6 + 10) % 5 = 1, maka x = 5 + 6 + 1 = 12. Jawaban: 12.'
  },
  {
    id: 'B2-S2-5', col: 'col2', topic: 'CPP', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 2',
    mentor: 'Pemrograman Dasar', title: 'Logika Boolean Input 1 0 1',
    question: 'Input 1 0 1 pada ekspresi x = (1 && !0) || (0 && 1). Berapakah nilai x?',
    answer: '1',
    explanation: 'Input 1 0 1: x = (1 && !0) || (0 && 1) = 1 || 0 = 1. Jawaban: 1.'
  },
  {
    id: 'B2-S2-6', col: 'col2', topic: 'BITWISE', category: 'BAGIAN 2', badge: 'Bag. 2 • Sesi 2',
    mentor: 'Biner & Dasar', title: 'Shift & Bitwise AND Input 16 5',
    question: 'Input 16 5 untuk ekspresi (16 >> 3) & (5 << 2). Berapakah hasilnya?',
    answer: '0',
    explanation: 'Input 16 5: (16 >> 3) = 2 dan (5 << 2) = 20, maka 2 & 20 = 0. Jawaban: 0.'
  },

  // BAGIAN 3 (Col 2)
  {
    id: 'B3-S1-1', col: 'col2', topic: 'CPP', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 1',
    mentor: 'Percabangan C++', title: 'Evaluasi Percabangan Input 7 7 9',
    question: 'Input a=7, b=7, c=9 pada tiga cabang kondisi (<). Berapakah nilai hasil akhirnya?',
    answer: '0',
    explanation: 'Input 7 7 9: kondisi pertama salah, kondisi kedua salah karena a < b (7 < 7) bernilai false, kondisi ketiga salah karena 14 < 9 false, sehingga hasil tetap 0. Jawaban: 0.'
  },
  {
    id: 'B3-S1-2', col: 'col2', topic: 'CPP', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 1',
    mentor: 'Percabangan C++', title: 'Percabangan Nilai Awal a = 5, b = 3',
    question: 'Nilai awal a = 5, b = 3. Setelah dievaluasi kondisi a > b dan a > 6, berapakah a * b?',
    answer: '49',
    explanation: 'Nilai awal a = 5, b = 3: karena a > b, maka a menjadi 7, lalu karena a > 6, b menjadi 3 + 4 = 7, sehingga a * b = 49. Jawaban: 49.'
  },
  {
    id: 'B3-S1-3', col: 'col2', topic: 'CPP', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 1',
    mentor: 'Percabangan C++', title: 'Nested If-Else Input 89 78 100 105',
    question: 'Input A=89, B=78, C=100, D=105 pada nested if-else. Variabel manakah yang dicetak?',
    answer: 'C (100)',
    explanation: 'Input 89 78 100 105: A >= B benar (89 >= 78), A >= C salah (89 >= 100), C >= D salah (100 >= 105), masuk ke blok else yang mencetak C yaitu 100. Jawaban: C (100).'
  },
  {
    id: 'B3-S1-4', col: 'col2', topic: 'CPP', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 1',
    mentor: 'Percabangan C++', title: 'Syarat Agar Nilai C Tetap 3',
    question: 'Apa syarat nilai akhir A dan B sebelum dua if terakhir agar C yang dicetak tetap 3?',
    answer: 'A == B',
    explanation: 'Agar nilai C yang dicetak tetap 3 (tidak berubah menjadi 4 pada A < B maupun 2 pada A > B), nilai akhir A dan B sebelum pengujian dua if terakhir harus sama (A == B).'
  },
  {
    id: 'B3-S2-1', col: 'col2', topic: 'CPP', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 2',
    mentor: 'Perulangan C++', title: 'Perulangan i = 1..5 Dikurangi Saat Genap',
    question: 'Perulangan i dari 1 sampai 5 menjumlahkan i dan mengurangi 1 saat i genap. Hasilnya?',
    answer: '13',
    explanation: 'Perulangan i dari 1 sampai 5 menjumlahkan 1 + 2 + 3 + 4 + 5 = 15 dan mengurangi 1 sebanyak 2 kali saat i genap (i = 2 dan i = 4), menghasilkan 15 - 2 = 13. Jawaban: 13.'
  },
  {
    id: 'B3-S2-2', col: 'col2', topic: 'CPP', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 2',
    mentor: 'Perulangan C++', title: 'Dua While Berurutan Input a = 19',
    question: 'Input a = 19: while pertama mengurangi 2 hingga a=3, while kedua mengalikan 2 hingga a>=100. Total count?',
    answer: '14',
    explanation: 'Input a = 19: while pertama mengurangi a sebesar 2 sebanyak 8 kali hingga a = 3 (count = 8), while kedua mengalikan a dengan 2 sebanyak 6 kali (3 -> 6 -> 12 -> 24 -> 48 -> 96 -> 192) hingga a >= 100, sehingga total count = 8 + 6 = 14. Jawaban: 14.'
  },
  {
    id: 'B3-S2-3', col: 'col2', topic: 'CPP', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 2',
    mentor: 'Perulangan C++', title: 'Iterasi Pasangan (a, b, count)',
    question: 'Telusuri perubahan (a, b, count) dari (47, 5, 1) hingga kondisi a > 2*b salah. Nilai akhir count?',
    answer: '5',
    explanation: 'Nilai (a, b, count) tiap iterasi: (47, 5, 1), (42, 7, 2), (35, 9, 3), (26, 11, 4), (15, 13, 5), berhenti karena 15 > 26 salah. Jawaban: 5.'
  },
  {
    id: 'B3-S2-4', col: 'col2', topic: 'MODULO', category: 'BAGIAN 3', badge: 'Bag. 3 • Sesi 2',
    mentor: 'Perulangan C++', title: 'While KPK & FPB Input 5000 700',
    question: 'Input 5000 700: while pertama menghitung C=D=KPK, while kedua A=B=FPB. Nilai (C+D)/(A+B)?',
    answer: 'C (350)',
    explanation: 'Input 5000 700: while pertama menghitung C = D = KPK(5000, 700) = 35000, while kedua menghitung A = B = FPB(5000, 700) = 100, sehingga (C + D) / (A + B) = 70000 / 200 = 350. Jawaban: C (350).'
  },

  // BAGIAN 4 (Col 2)
  {
    id: 'B4-S1-1', col: 'col2', topic: 'CPP', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 1',
    mentor: 'Loop & Array C++', title: 'Perulangan dengan Break Saat a * b > 100',
    question: 'Iterasi mengubah a dan b lalu break saat a * b > 100. Berapakah hasil b % a?',
    answer: '5',
    explanation: 'Iterasi 1: a = 4, b = 8; Iterasi 2: a = 6, b = 13; Iterasi 3: a = 8, karena 8 * 13 = 104 > 100 maka break, lalu mencetak b % a = 13 % 8 = 5. Jawaban: 5.'
  },
  {
    id: 'B4-S1-2', col: 'col2', topic: 'MODULO', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 1',
    mentor: 'Loop & Array C++', title: 'Bilangan 1..12 Tidak Habis Dibagi 2 dan 3',
    question: 'Berapa banyak bilangan antara 1 hingga 12 yang tidak habis dibagi 2 dan tidak habis dibagi 3?',
    answer: '4',
    explanation: 'Menghitung bilangan antara 1 hingga 12 yang tidak habis dibagi 2 dan tidak habis dibagi 3, yaitu {1, 5, 7, 11}. Jawaban: 4.'
  },
  {
    id: 'B4-S1-3', col: 'col2', topic: 'CPP', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 1',
    mentor: 'Loop & Array C++', title: 'Jumlah i * j untuk i + j Ganjil (Input 5 7)',
    question: 'Untuk input 5 7, hitung total i * j bagi seluruh pasangan (i, j) dengan i + j ganjil.',
    answer: '204',
    explanation: 'Input 5 7: menjumlahkan i * j untuk pasangan (i, j) dengan i + j ganjil, yaitu (1 + 3 + 5) * (2 + 4 + 6) + (2 + 4) * (1 + 3 + 5 + 7) = 9 * 12 + 6 * 16 = 108 + 96 = 204. Jawaban: 204.'
  },
  {
    id: 'B4-S1-4', col: 'col2', topic: 'CPP', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 1',
    mentor: 'Loop & Array C++', title: 'Jumlah Karakter # untuk Input 20',
    question: 'Berapa banyak karakter # yang dicetak oleh deret langkah +3 untuk input 20?',
    answer: '70',
    explanation: 'Input 20: mencetak karakter # sebanyak 1 + 4 + 7 + 10 + 13 + 16 + 19 = 70. Jawaban: 70.'
  },
  {
    id: 'B4-S2-1', col: 'col2', topic: 'CPP', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 2',
    mentor: 'Loop & Array C++', title: 'Jumlah Bilangan Genap Array {3, 8, 7, 10, 2}',
    question: 'Hitung jumlah seluruh elemen genap dari array {3, 8, 7, 10, 2}.',
    answer: '20',
    explanation: 'Menjumlahkan bilangan genap dari {3, 8, 7, 10, 2}: 8 + 10 + 2 = 20. Jawaban: 20.'
  },
  {
    id: 'B4-S2-2', col: 'col2', topic: 'CPP', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 2',
    mentor: 'Loop & Array C++', title: 'Manipulasi Indeks Array a[0..9]',
    question: 'Array awal a = {3, 7, 1, 9, 4, 2, 6, 0, 5, 8}. Berapakah hasil a[2] + a[4] + a[9] setelah 4 mutasi?',
    answer: '27',
    explanation: 'Operasi pertama mengubah a[1] = a[0] = 3; kedua a[4] = a[3] = 9; ketiga a[6] = a[1] = 3; keempat a[9] = a[3] + a[9] = 9 + 8 = 17; hasil a[2] + a[4] + a[9] = 1 + 9 + 17 = 27. Jawaban: 27.'
  },
  {
    id: 'B4-S2-3', col: 'col2', topic: 'CPP', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 2',
    mentor: 'Loop & Array C++', title: 'Perubahan Array Karakter kata',
    question: 'Apakah string hasil akhir setelah modifikasi indeks i = 0..5 pada array karakter kata?',
    answer: '!!AAAAT!',
    explanation: 'Perubahan array karakter: i=0 -> kata[0]=\'!\'; i=1 -> kata[1]=\'!\'; i=2 -> kata[2]=\'A\'; i=3 -> kata[3]=\'A\'; i=4 -> kata[4]=kata[3]=\'A\'; i=5 -> kata[5]=\'A\'; menghasilkan !!AAAAT!. Jawaban: !!AAAAT!.'
  },
  {
    id: 'B4-S2-4', col: 'col2', topic: 'CPP', category: 'BAGIAN 4', badge: 'Bag. 4 • Sesi 2',
    mentor: 'Loop & Array C++', title: 'Elemen Ganjil pada Matriks 3x3 Akhir',
    question: 'Berapa banyak bilangan ganjil pada matriks 3x3 setelah seluruh iterasi selesai?',
    answer: '2',
    explanation: 'Matriks akhir setelah seluruh iterasi adalah baris 0: {3, 4, 2}, baris 1: {7, 4, 8}, baris 2: {8, 12, 10}, sehingga hanya terdapat 2 bilangan ganjil yaitu 3 dan 7. Jawaban: 2.'
  },

  // BAGIAN 5 (Col 3)
  {
    id: 'B5-S1-1', col: 'col3', topic: 'MODULO', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 1',
    mentor: 'Bilangan & Keterbagian', title: 'Kelebihan Berat Tiga Bagasi',
    question: 'Pasangan berat 3 bagasi adalah 13 kg, 21 kg, dan 32 kg. Jika batas bebas 20 kg, berapa kelebihan bagasinya?',
    answer: '13',
    explanation: 'Berat total ketiganya = (13 + 21 + 32) / 2 = 33 kg, sehingga kelebihan bagasi = 33 - 20 = 13 kg. Jawaban: 13.'
  },
  {
    id: 'B5-S1-2', col: 'col3', topic: 'MODULO', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 1',
    mentor: 'Bilangan & Keterbagian', title: 'Sistem Perkalian W, X, Y, Z',
    question: 'Diketahui W * Y = 32, X * Z = 100, dan W * X = (Y * Z) / 8. Berapakah nilai Y * Z?',
    answer: '160',
    explanation: '(W * Y) * (X * Z) = 32 * 100 = 3200; substitusi W * X = (Y * Z) / 8 menghasilkan (Y * Z)^2 / 8 = 3200 atau (Y * Z)^2 = 25600, sehingga Y * Z = 160. Jawaban: 160.'
  },
  {
    id: 'B5-S1-3', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 1',
    mentor: 'Bilangan & Keterbagian', title: 'Pasangan Bilangan 1..1000 Berjumlah Ganjil',
    question: 'Dari bilangan 1 sampai 1000, berapa banyak pasangan dua bilangan yang jumlahnya ganjil?',
    answer: '250000',
    explanation: 'Jumlah dua bilangan bernilai ganjil jika satu ganjil (500 pilihan) dan satu genap (500 pilihan), menghasilkan 500 * 500 = 250000 pasangan. Jawaban: 250000.'
  },
  {
    id: 'B5-S1-4', col: 'col3', topic: 'MODULO', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 1',
    mentor: 'Bilangan & Keterbagian', title: 'Urutan x, y = akar(x), z = x^2 (0 < x < 1)',
    question: 'Untuk 0 < x < 1, urutkan x, y = akar(x), dan z = x^2 dari yang terkecil ke terbesar.',
    answer: 'z, x, y',
    explanation: 'Untuk 0 < x < 1, berlaku x^2 < x < akar(x), sehingga urutan dari terkecil adalah z, x, y. Jawaban: z, x, y.'
  },
  {
    id: 'B5-S1-5', col: 'col3', topic: 'MODULO', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 1',
    mentor: 'Bilangan & Keterbagian', title: 'Digit Pertama yang Sama dari 2^n dan 5^n',
    question: 'Jika 2^n dan 5^n diawali oleh digit pertama yang sama yaitu d, berapakah nilai d?',
    answer: '3',
    explanation: 'Jika 2^n dan 5^n diawali digit d, perkalian keduanya memberikan d^2 * 10^(a+b) < 10^n < (d+1)^2 * 10^(a+b) yang hanya dipenuhi oleh d^2 < 10 < (d+1)^2 yaitu d = 3. Jawaban: 3.'
  },
  {
    id: 'B5-S1-6', col: 'col3', topic: 'MODULO', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 1',
    mentor: 'Bilangan & Keterbagian', title: 'Banyaknya Faktor Bulat Positif 2025',
    question: 'Tentukan banyaknya faktor bulat positif dari bilangan 2025.',
    answer: '15',
    explanation: 'Faktorisasi prima 2025 = 3^4 * 5^2, banyak faktor positif = (4 + 1) * (2 + 1) = 15. Jawaban: 15.'
  },
  {
    id: 'B5-S2-1', col: 'col3', topic: 'MODULO', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 2',
    mentor: 'Bilangan & Keterbagian', title: 'Keterbagian 72 pada 7448x24y (x != y)',
    question: 'Bilangan 8-digit 7448x24y habis dibagi 72 dengan syarat x != y. Berapakah nilai x - y?',
    answer: '7',
    explanation: 'Agar 7448x24y habis dibagi 8, 24y harus habis dibagi 8 sehingga y = 0 atau y = 8; agar jumlah digit 29 + x + y habis dibagi 9 dengan syarat x != y, diperoleh y = 0 dan x = 7 (karena y = 8 memberikan x = 8 yang melanggar x != y), maka x - y = 7. Jawaban: 7.'
  },
  {
    id: 'B5-S2-2', col: 'col3', topic: 'MODULO', category: 'BAGIAN 5', badge: 'Bag. 5 • Sesi 2',
    mentor: 'Bilangan & Keterbagian', title: 'Tahun 19ab Bukan Kabisat dengan Jumlah Digit Habis Dibagi 4',
    question: 'Berapa banyak tahun 19ab (01 <= ab <= 60) yang jumlah digitnya habis dibagi 4 namun bukan kabisat?',
    answer: '12',
    explanation: 'Tahun 19ab (01 <= ab <= 60) yang jumlah digitnya 10 + a + b habis dibagi 4 namun bukan kabisat adalah 1902, 1906, 1911, 1915, 1919, 1933, 1937, 1942, 1946, 1951, 1955, 1959. Jawaban: 12.'
  },

  // BAGIAN 6 (Col 3)
  {
    id: 'B6-S1-1', col: 'col3', topic: 'MODULO', category: 'BAGIAN 6', badge: 'Bag. 6 • Sesi 1',
    mentor: 'Modulo & Perbandingan', title: 'Eksponen Modular 20^2015 mod 9',
    question: 'Berapakah sisa pembagian 20^2015 oleh 9?',
    answer: '5',
    explanation: '20^2015 mod 9 = 2^2015 mod 9 = (2^3)^671 * 2^2 mod 9 = (-1)^671 * 4 mod 9 = -4 mod 9 = 5. Jawaban: 5.'
  },
  {
    id: 'B6-S1-2', col: 'col3', topic: 'MODULO', category: 'BAGIAN 6', badge: 'Bag. 6 • Sesi 1',
    mentor: 'Modulo & Perbandingan', title: 'Rotasi Poligon M = 8, N = 11, k = 1',
    question: 'Segi-8 (panah awal Utara/UT) mengelilingi segi-11 sebanyak 1 putaran searah jarum jam. Arah akhir?',
    answer: 'Tenggara (TG)',
    explanation: 'Mengikuti pola di mana poligon segi-M mengelilingi segi-N sebanyak k putaran menggeser arah panah sebesar (N * k) mod M langkah searah jarum jam: untuk M = 8, N = 11, k = 1 diperoleh 11 mod 8 = 3 langkah dari Utara (UT -> TL -> TM -> TG). Jawaban: Tenggara (TG).'
  },
  {
    id: 'B6-S1-3', col: 'col3', topic: 'MODULO', category: 'BAGIAN 6', badge: 'Bag. 6 • Sesi 1',
    mentor: 'Modulo & Perbandingan', title: 'Rotasi Poligon M = 8, N = 13, k = 17',
    question: 'Segi-8 (panah awal Utara/UT) mengelilingi segi-13 sebanyak 17 putaran searah jarum jam. Arah akhir?',
    answer: 'Barat Daya (BD)',
    explanation: 'Untuk M = 8, N = 13, k = 17 diperoleh (13 * 17) mod 8 = 221 mod 8 = 5 langkah searah jarum jam dari Utara (UT -> TL -> TM -> TG -> SL -> BD). Jawaban: Barat Daya (BD).'
  },
  {
    id: 'B6-S1-4', col: 'col3', topic: 'MODULO', category: 'BAGIAN 6', badge: 'Bag. 6 • Sesi 1',
    mentor: 'Modulo & Perbandingan', title: 'Siklus 7^7777777 mod 100 + 5^5555555 mod 10',
    question: 'Hitung hasil penjumlahan (7^7777777 mod 100) + (5^5555555 mod 10).',
    answer: '12',
    explanation: 'Siklus 7^n mod 100 berperiode 4 ({07, 49, 43, 01}), karena 7777777 mod 4 = 1 maka 7^7777777 mod 100 = 7, sedangkan 5^5555555 mod 10 = 5, sehingga 7 + 5 = 12. Jawaban: 12.'
  },
  {
    id: 'B6-S2-1', col: 'col3', topic: 'MODULO', category: 'BAGIAN 6', badge: 'Bag. 6 • Sesi 2',
    mentor: 'Modulo & Perbandingan', title: 'Perpangkatan Modular 260^130 mod 51',
    question: 'Tentukan sisa pembagian 260^130 oleh 51 menggunakan reduksi mod 3 dan mod 17.',
    answer: '25',
    explanation: '260^130 mod 51 = 5^130 mod 51: karena 5^130 mod 3 = (-1)^130 = 1 dan 5^130 mod 17 = (5^16)^8 * 5^2 mod 17 = 25 mod 17 = 8, bilangan mod 51 yang memenuhi keduanya adalah 25. Jawaban: 25.'
  },
  {
    id: 'B6-S2-2', col: 'col3', topic: 'MODULO', category: 'BAGIAN 6', badge: 'Bag. 6 • Sesi 2',
    mentor: 'Modulo & Perbandingan', title: 'Perbandingan Berbalik Nilai (6 * 8) / 4',
    question: 'Jika 6 pekerja menyelesaikan pekerjaan dalam 8 jam, berapa jam waktu untuk 4 pekerja?',
    answer: '12',
    explanation: 'Perbandingan berbalik nilai: (6 * 8) / 4 = 12 jam. Jawaban: 12.'
  },
  {
    id: 'B6-S2-3', col: 'col3', topic: 'MODULO', category: 'BAGIAN 6', badge: 'Bag. 6 • Sesi 2',
    mentor: 'Modulo & Perbandingan', title: 'Waktu Kerja Bento Sendirian',
    question: 'Dalam 6 jam selesai 3/5 bagian; sisa 2/5 bagian diselesaikan Bento dalam 12 jam. Waktu Bento sendirian dari awal?',
    answer: '30',
    explanation: 'Dalam 6 jam selesai 6/10 = 3/5 bagian; sisa 2/5 bagian diselesaikan Bento dalam 12 jam, sehingga waktu Bento sendirian dari awal adalah 12 * (5 / 2) = 30 jam. Jawaban: 30.'
  },

  // BAGIAN 7 (Col 3)
  {
    id: 'B7-S1-1', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 1',
    mentor: 'Kombinatorika & Deret', title: 'Derangement 5 Objek (!5)',
    question: 'Berapa banyak permutasi 5 objek tanpa ada satu pun objek yang menempati posisi aslinya (!5)?',
    answer: '44',
    explanation: 'Derangement 5 objek (!5) = 5! * (1/2! - 1/3! + 1/4! - 1/5!) = 60 - 20 + 5 - 1 = 44. Jawaban: 44.'
  },
  {
    id: 'B7-S1-2', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 1',
    mentor: 'Kombinatorika & Deret', title: 'Penyusunan Kata EMPAT (Awal & Akhir Vokal)',
    question: 'Berapa banyak susunan huruf kata EMPAT jika posisi awal dan akhir harus diisi huruf vokal?',
    answer: '12',
    explanation: 'Kata EMPAT memiliki 2 vokal (E, A) dan 3 konsonan (M, P, T): posisi awal dan akhir diisi vokal (2! = 2 cara) dan 3 posisi tengah diisi konsonan (3! = 6 cara), total 2 * 6 = 12 cara. Jawaban: 12.'
  },
  {
    id: 'B7-S1-3', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 1',
    mentor: 'Kombinatorika & Deret', title: 'Permutasi Kata TUJUH (J dan H Tidak Berdampingan)',
    question: 'Berapa banyak permutasi kata TUJUH sehingga huruf J dan H tidak berdampingan?',
    answer: '36',
    explanation: 'Total permutasi TUJUH = 5! / 2! = 60; permutasi dengan J dan H berdampingan = (4! / 2!) * 2! = 24; maka yang tidak berdampingan = 60 - 24 = 36. Jawaban: 36.'
  },
  {
    id: 'B7-S2-1a', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 2',
    mentor: 'Kombinatorika & Deret', title: '1a. Barisan Geometri [7, 21, 63] Suku ke-6',
    question: 'Tentukan nilai suku ke-6 dari barisan geometri terurut [7, 21, 63].',
    answer: '1701',
    explanation: '1a. Barisan terurut [7, 21, 63] adalah barisan geometri dengan a = 7, r = 3, sehingga suku ke-6 = 7 * 3^5 = 1701. Jawaban: 1701.'
  },
  {
    id: 'B7-S2-1b', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 2',
    mentor: 'Kombinatorika & Deret', title: '1b. Barisan Aritmatika [-7, -2, 3, ..., 38] Suku ke-100',
    question: 'Tentukan nilai suku ke-100 dari barisan aritmatika [-7, -2, 3, ..., 38].',
    answer: '488',
    explanation: '1b. Barisan terurut [-7, -2, 3, ..., 38] adalah barisan aritmatika dengan a = -7, b = 5, sehingga suku ke-100 = -7 + 99 * 5 = 488. Jawaban: 488.'
  },
  {
    id: 'B7-S2-1c', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 2',
    mentor: 'Kombinatorika & Deret', title: '1c. Aritmatika Tingkat 2 [3, 4, 6, 9, 13] Suku ke-10',
    question: 'Tentukan suku ke-10 dari barisan aritmatika tingkat 2: [3, 4, 6, 9, 13].',
    answer: '48',
    explanation: '1c. Barisan terurut [3, 4, 6, 9, 13] adalah aritmatika tingkat 2 dengan selisih +1, +2, +3, +4, sehingga suku ke-10 = 3 + (9 * 10) / 2 = 48. Jawaban: 48.'
  },
  {
    id: 'B7-S2-1d', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 2',
    mentor: 'Kombinatorika & Deret', title: '1d. Barisan Aritmatika dengan Suku ke-101 = 512',
    question: 'Tiga suku pertama barisan aritmatika bilangan bulat memuat 12, x, y dan suku ke-101 = 512. Nilai x + y?',
    answer: '39 (atau 24)',
    explanation: '1d. Agar barisan aritmatika bilangan bulat memiliki suku ke-101 = 512, suku pertama haruslah 12 (12 + 100b = 512 -> b = 5), sehingga 3 suku pertamanya adalah 12, 17, 22 dan x + y = 17 + 22 = 39 (atau jika 12 adalah suku tengah dari 3 suku pertama maka x + y = 2 * 12 = 24). Jawaban: 39 (atau 24).'
  },
  {
    id: 'B7-S2-2a', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 2',
    mentor: 'Kombinatorika & Deret', title: '2a. Lintasan Bola Memantul Hingga Detik ke-7',
    question: 'Bola jatuh dari h = 25 m dengan r = 4/5. Berapa meter lintasan hingga detik ke-7 (4 turun, 3 naik)?',
    answer: '122.6',
    explanation: '2a. Lintasan hingga detik ke-7 mencakup 4 kali turun dan 3 kali naik: 25 + 20 + 20 + 16 + 16 + 12.8 + 12.8 = 122.6 meter. Jawaban: 122.6.'
  },
  {
    id: 'B7-S2-2b', col: 'col3', topic: 'KOMBINATORIKA', category: 'BAGIAN 7', badge: 'Bag. 7 • Sesi 2',
    mentor: 'Kombinatorika & Deret', title: '2b. Lintasan Total Bola Memantul Hingga Berhenti',
    question: 'Berapa meter total lintasan bola dari h = 25 m dengan rasio r = 4/5 hingga berhenti?',
    answer: '225',
    explanation: '2b. Lintasan total hingga berhenti = 25 * (1 + 4/5) / (1 - 4/5) = 25 * 9 = 225 meter. Jawaban: 225.'
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
    explanation: 'Deretan awal [2, 5, 3, 4, 1, 2]; KWAK -> [3, 3, 4, 1, 2]; KWIK -> [5, 5, 6, 3]; KWAK -> [0, 6, 3]; KWIK -> [3, 9]; KWIK -> [12]. Jawaban: 12.'
  },
  {
    id: 'OSNK-2', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 02',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 2 (Tembolok Komputer / LRU Cache)',
    question: 'Urutan akses A, B, C, A, D, B, E, A pada tembolok kapasitas 3. Saat F masuk, elemen mana yang dikeluarkan?',
    answer: 'B',
    explanation: 'Urutan akses A, B, C, A, D, B, E, A menghasilkan riwayat isi tembolok (dari paling lama ke terbaru): [A] -> [A,B] -> [A,B,C] -> [B,C,A] -> [C,A,D] -> [A,D,B] -> [D,B,E] -> [B,E,A]; saat F masuk, elemen paling lama yang dikeluarkan adalah B. Jawaban: B.'
  },
  {
    id: 'OSNK-3', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 03',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 3 (Aplikasi Pesan Rahasia)',
    question: 'Bagaimana menentukan simpul penerima pesan paling akhir dari simpul A (menit 0) pada graf kontak?',
    answer: 'BFS (Simpul dengan Jarak Terpendek Terbesar)',
    explanation: 'Menggunakan penelusuran BFS dari simpul A (menit 0), tentukan panjang lintasan terpendek ke setiap simpul B..H pada graf kontak, lalu ambil simpul dengan jarak terpendek terbesar.'
  },
  {
    id: 'OSNK-4', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 04',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 4 (Bebeksweeper)',
    question: 'Metode deduksi untuk menentukan jumlah bebek A1..A5 pada masing-masing baris.',
    answer: 'Deduksi Batasan Ketetanggaan 8 Arah',
    explanation: 'Menggunakan deduksi batasan ketetanggaan 8 arah (seperti Minesweeper) untuk menentukan jumlah bebek A1..A5 pada masing-masing baris.'
  },
  {
    id: 'OSNK-5', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 05',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 5 (Bertemu Bebek)',
    question: 'Menentukan urutan kunjungan Pak Dengklek ke 5 bebek agar total jarak Manhattan minimum.',
    answer: 'TSP 5! = 120 Permutasi dengan Jarak |x1-x2| + |y1-y2|',
    explanation: 'Menggunakan jarak Manhattan |x1 - x2| + |y1 - y2| antar posisi Pak Dengklek dan 5 bebek, lalu mencari urutan kunjungan semua 5 titik (Traveling Salesperson Problem dengan 5! = 120 permutasi) yang total jaraknya minimum.'
  },
  {
    id: 'OSNK-6', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 06',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 6 (Enkripsi Bilangan Terkecil & Terbesar)',
    question: 'Dari string terkecil DFITITIEPMOK diperoleh pemetaan unik. Apakah string terbesar tanpa huruf bersebelahan sama?',
    answer: 'KOMPETITIFID',
    explanation: 'Dari string terkecil DFITITIEPMOK diperoleh pemetaan unik D=1, F=2, I=3, T=4, E=5, P=6, M=7, O=8, K=9; penyusunan greedy dari digit terbesar ke terkecil tanpa ada huruf bersebelahan yang sama menghasilkan KOMPETITIFID. Jawaban: KOMPETITIFID.'
  },
  {
    id: 'OSNK-7', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 07',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 7 (Misi Penyelamatan Bebek)',
    question: 'Batu awal manakah yang meminimalkan total batu yang dikunjungi kedua robot menuju α dan β?',
    answer: 'Lowest Common Ancestor LCA(α, β)',
    explanation: 'Batu awal yang meminimalkan total batu yang dikunjungi kedua robot menuju α dan β adalah Lowest Common Ancestor LCA(α, β) pada pohon berakar.'
  },
  {
    id: 'OSNK-8', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian A', badge: 'OSN-K • Soal 08',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 8 (Susun Kata)',
    question: 'Bagaimana menghitung banyaknya susunan valid yang melewati keenam kartu kata tepat satu kali?',
    answer: 'Banyaknya Lintasan Euler pada Graf Berarah',
    explanation: 'Merepresentasikan setiap kartu kata sebagai sisi berarah dari huruf awal ke huruf akhir, lalu menghitung banyaknya lintasan Euler (lintasan yang melewati keenam kartu tepat satu kali).'
  },
  {
    id: 'OSNK-9', col: 'col4', topic: 'BITWISE', sub: 'Bagian A', badge: 'OSN-K • Soal 09',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 9 (Papan Lampu)',
    question: 'Jika pola target butuh minimal k = 4 tombol berbeda ditekan ganjil kali, bagaimana untuk tepat 6 penekanan?',
    answer: '1 tombol (dari 10 tombol) ditekan ekstra 2 kali',
    explanation: 'Menentukan himpunan tombol baris/kolom minimal k yang harus ditekan ganjil kali untuk mencapai pola target; jika k = 4 tombol berbeda, maka untuk tepat 6 penekanan terdapat 1 tombol (dari 10 tombol) yang ditekan ekstra 2 kali.'
  },
  {
    id: 'OSNK-10', col: 'col4', topic: 'BITWISE', sub: 'Bagian A', badge: 'OSN-K • Soal 10',
    mentor: 'Bagian A • Abstraksi', title: 'Soal 10 (Koin Palsu)',
    question: 'Berapa penimbangan minimum untuk memastikan 100% label koin palsu dari 5 kantong A..E dengan bobot {1, 2, 4, 8}?',
    answer: '1',
    explanation: 'Ambil 0 koin A, 1 koin B, 2 koin C, 3 koin D, dan 4 koin E dalam satu kali penimbangan; karena himpunan jumlah subhimpunan dari {1, 2, 4, 8} untuk ukuran 0 ({0}), ukuran 1 ({1,2,4,8}), ukuran 2 ({3,5,6,9,10,12}), ukuran 3 ({7,11,13,14}), dan ukuran 4 ({15}) saling lepas sempurna, 1 penimbangan sudah 100% memastikan label koin palsu. Jawaban: 1.'
  },

  // Bagian B (Soal 11-25)
  {
    id: 'OSNK-11-13', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 11–13',
    mentor: 'Bagian B • Optimasi', title: 'Soal 11–13 (Kandang Kecil)',
    question: 'Bagaimana menentukan keliling minimum kandang ortogonal tunggal serta luas minimum dengan keliling tetap?',
    answer: '2 * ((X_max - X_min + 1) + (Y_max - Y_min + 1))',
    explanation: 'Keliling minimum kandang ortogonal tunggal yang memuat sekumpulan petak sama dengan keliling persegi panjang pembatas terkecil (bounding box), yaitu 2 * ((X_max - X_min + 1) + (Y_max - Y_min + 1)), sedangkan luas minimum dengan keliling tetap diperoleh dengan memotong sudut-sudut kosong bounding box tanpa menambah keliling (poligon ortogonal konveks).'
  },
  {
    id: 'OSNK-14', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 14',
    mentor: 'Bagian B • Optimasi', title: 'Soal 14 (Jadwal Pembinaan Tim Olimpiade 1)',
    question: 'Dengan cooldown A=1, B=1, C=1 serta poin K=5, O=3, T=2 selama 10 hari, berapakah total nilai maksimum?',
    answer: '40',
    explanation: 'Dengan A=1, B=1, C=1, pilih bergantian dua latihan tertinggi yaitu K (5) dan O (3) selama 10 hari: 5 * 5 + 5 * 3 = 40. Jawaban: 40.'
  },
  {
    id: 'OSNK-15', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 15',
    mentor: 'Bagian B • Optimasi', title: 'Soal 15 (Jadwal Pembinaan Tim Olimpiade 2)',
    question: 'Dengan cooldown A=1, B=2, C=3 serta poin K=5, O=3, T=2 selama 10 hari, berapakah total nilai maksimum?',
    answer: '32',
    explanation: 'Dengan A=1, B=2, C=3, jadwal optimal selama 10 hari adalah K, T, O, T, K, T, O, T, K, O yang memuat 3 kali K, 3 kali O, dan 4 kali T: 3 * 5 + 3 * 3 + 4 * 2 = 32. Jawaban: 32.'
  },
  {
    id: 'OSNK-16', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 16',
    mentor: 'Bagian B • Optimasi', title: 'Soal 16 (Jadwal Pembinaan Tim Olimpiade 3)',
    question: 'Dengan Dynamic Programming untuk A=1, B=1, C=1 pada bobot harian bervariasi selama 10 hari, berapa nilai maksimum?',
    answer: '56',
    explanation: 'Dengan Dynamic Programming untuk A=1, B=1, C=1, urutan optimal K(5), O(3), K(5), T(1), O(5), T(8), O(9), K(6), O(5), K(9) menghasilkan total maksimum 56. Jawaban: 56.'
  },
  {
    id: 'OSNK-17', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 17',
    mentor: 'Bagian B • Optimasi', title: 'Soal 17 (Pengiriman Pesan Berkualitas 1)',
    question: 'Pada S = ACCABBACAC dan M = 6, apakah subsekuens terkecil secara leksikografis yang mencapai skor maksimum 8?',
    answer: 'AABBAA',
    explanation: 'Pada S = ACCABBACAC dan M = 6, skor maksimum yang dapat dicapai adalah 8 (panjang 6 dengan 3 blok huruf sama), dan subsekuens terkecil secara leksikografis yang mencapai skor 8 adalah AABBAA. Jawaban: AABBAA.'
  },
  {
    id: 'OSNK-18', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 18',
    mentor: 'Bagian B • Optimasi', title: 'Soal 18 (Pengiriman Pesan Berkualitas 2)',
    question: 'Apakah string S (panjang 7) terkecil secara leksikografis yang subsekuens terbaiknya untuk M = 6 adalah ABCABC?',
    answer: 'CABCABC',
    explanation: 'Agar subsekuens terbaik dari S (panjang 7) untuk M = 6 adalah ABCABC (skor 5), tidak boleh ada dua huruf sama berjarak indeks <= 2 dan tidak boleh ada subsekuens skor 5 yang lebih kecil dari ABCABC (ABCABCA gagal karena menghasilkan ABABCA), sehingga S terkecil adalah CABCABC. Jawaban: CABCABC.'
  },
  {
    id: 'OSNK-19', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 19',
    mentor: 'Bagian B • Optimasi', title: 'Soal 19 (Pengiriman Pesan Berkualitas 3)',
    question: 'String S panjang 5 di mana menghapus 1 huruf menghasilkan subsekuens panjang 4 dengan skor sama namun lebih kecil?',
    answer: 'AAABA',
    explanation: 'Untuk S = AAABA (skor 6), menghapus huruf B menghasilkan subsekuens panjang 4 yaitu AAAA yang juga memiliki skor 6 (skor maksimum) dan lebih kecil secara leksikografis daripada AAABA. Jawaban: AAABA.'
  },
  {
    id: 'OSNK-20', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 20',
    mentor: 'Bagian B • Optimasi', title: 'Soal 20 (Peta Internet Sekolah 1)',
    question: 'Sinyal awal 18 ruang memiliki 5 ruang layak (>=8). Dipasang penguat kekuatan 4 di ruang 6. Total ruang layak?',
    answer: '10',
    explanation: 'Sinyal awal di ruang 1..18 adalah [4, 5, 7, 7, 7, 7, 8, 7, 6, 6, 6, 7, 9, 9, 9, 9, 7, 5] (5 ruang layak); memasang penguat kekuatan 4 di ruang 6 menambah sinyal di ruang 3..9 sebesar [1, 2, 3, 4, 3, 2, 1] sehingga ruang 3, 4, 5, 6, 8 ikut menjadi >= 8, total 5 + 5 = 10 ruang. Jawaban: 10.'
  },
  {
    id: 'OSNK-21', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 21',
    mentor: 'Bagian B • Optimasi', title: 'Soal 21 (Peta Internet Sekolah 2)',
    question: 'Dengan kekuatan Y = 10 dan syarat P = 6, berapa minimal penguat sinyal (k) untuk mencakup 150 ruang?',
    answer: '12',
    explanation: 'Dengan kekuatan Y = 10 dan syarat P = 6, penguat pertama dipasang di ruang 5, jarak maksimum antar penguat berurutan adalah 14, dan penguat ke-k menjangkau hingga ruang 14k - 5; agar 14k - 5 >= 150 diperlukan minimal k = 12 penguat sinyal. Jawaban: 12.'
  },
  {
    id: 'OSNK-22', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 22',
    mentor: 'Bagian B • Optimasi', title: 'Soal 22 (Peta Internet Sekolah 3)',
    question: 'Dengan k = 4 penguat sinyal berkekuatan Y dan syarat P = 6 untuk 150 ruang, berapakah nilai Y minimum?',
    answer: '23',
    explanation: 'Dengan k = 4 penguat sinyal berkekuatan Y dan P = 6, jangkauan maksimum adalah (Y - 5) + 3 * (2Y - 6) + (Y - 6) = 8Y - 29; agar 8Y - 29 >= 150 diperoleh 8Y >= 179 atau Y = 23. Jawaban: 23.'
  },
  {
    id: 'OSNK-23-24', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian B', badge: 'OSN-K • Soal 23–24',
    mentor: 'Bagian B • Optimasi', title: 'Soal 23–24 (Apel dan Jeruk 1–2)',
    question: 'Syarat perlu dan cukup agar sekumpulan keranjang apel dan jeruk dikatakan serasi.',
    answer: 'Ada subhimpunan tak-kosong dengan jumlah d_i = 0',
    explanation: 'Hitung selisih d_i = apel - jeruk untuk setiap keranjang; himpunan keranjang serasi jika dan hanya jika ada subhimpunan tak-kosong dengan jumlah d_i = 0.'
  },
  {
    id: 'OSNK-25', col: 'col4', topic: 'KOMBINATORIKA', sub: 'Bagian B', badge: 'OSN-K • Soal 25',
    mentor: 'Bagian B • Optimasi', title: 'Soal 25 (Apel dan Jeruk 3)',
    question: 'Dari 2^6 = 64 rencana pemberian tanda + atau - pada {1, 2, 3, 4, 5, 6}, berapa banyak rencana yang serasi?',
    answer: '58',
    explanation: 'Dari 2^6 = 64 rencana pemberian tanda + atau - pada {1, 2, 3, 4, 5, 6}, hanya ada 6 rencana yang tidak memiliki subhimpunan berjumlah 0 (semua +, semua -, hanya {1} yang + atau -, hanya {2} yang + atau -), sehingga yang serasi ada 64 - 6 = 58. Jawaban: 58.'
  },

  // Bagian C (Soal 26-40)
  {
    id: 'OSNK-26', col: 'col4', topic: 'CPP', sub: 'Bagian C', badge: 'OSN-K • Soal 26',
    mentor: 'Bagian C • Kode C++', title: 'Soal 26 (Pecah Belah 1 — BELAH1(10))',
    question: 'Berapakah nilai kembalian dari pemanggilan fungsi rekursif BELAH1(10)?',
    answer: '3',
    explanation: 'BELAH1(10) menghitung (1 + 3 + 5 + 7 + 9) - (2 + 6 + 10) + (4) - (8) = 25 - 18 + 4 - 8 = 3. Jawaban: 3.'
  },
  {
    id: 'OSNK-27', col: 'col4', topic: 'CPP', sub: 'Bagian C', badge: 'OSN-K • Soal 27',
    mentor: 'Bagian C • Kode C++', title: 'Soal 27 (Pecah Belah 2 — BELAH2(186))',
    question: 'Berapakah nilai kembalian dari pemanggilan fungsi BELAH2(186)?',
    answer: '60',
    explanation: 'BELAH2(186) menghitung 93 - 47 + 23 - 12 + 6 - 3 + 1 - 1 = 60. Jawaban: 60.'
  },
  {
    id: 'OSNK-28', col: 'col4', topic: 'CPP', sub: 'Bagian C', badge: 'OSN-K • Soal 28',
    mentor: 'Bagian C • Kode C++', title: 'Soal 28 (Pecah Belah 3 — Panjang 100)',
    question: 'Nilai maksimum yang dapat dihasilkan oleh algoritma Pecah Belah untuk permutasi 1..100.',
    answer: '3928',
    explanation: 'Untuk panjang 100, terdapat 50 + 13 + 3 + 1 = 67 posisi bertanda positif dan 25 + 6 + 2 = 33 posisi bertanda negatif; nilai maksimum diperoleh dengan menempatkan 34..100 di posisi positif dan 1..33 di posisi negatif: 4489 - 561 = 3928. Jawaban: 3928.'
  },
  {
    id: 'OSNK-29', col: 'col4', topic: 'CPP', sub: 'Bagian C', badge: 'OSN-K • Soal 29',
    mentor: 'Bagian C • Kode C++', title: 'Soal 29 (Campur, Aduk, Rata 1)',
    question: 'Vektor frekuensi {1, 0, 2, 0, 0, 0, 1, 0, 0, 1}. Bilangan bulat positif terkecil x tanpa 0 di depan?',
    answer: '20269',
    explanation: 'Vektor frekuensi {1, 0, 2, 0, 0, 0, 1, 0, 0, 1} berarti x terdiri dari satu digit 0, dua digit 2, satu digit 6, dan satu digit 9; bilangan terkecil tanpa angka 0 di depan adalah 20269. Jawaban: 20269.'
  },
  {
    id: 'OSNK-30', col: 'col4', topic: 'CPP', sub: 'Bagian C', badge: 'OSN-K • Soal 30',
    mentor: 'Bagian C • Kode C++', title: 'Soal 30 (Campur, Aduk, Rata 2)',
    question: 'Berapa banyak kemunculan digit 0 pada bilangan dari 997 hingga 1018?',
    answer: '31',
    explanation: 'Banyaknya digit 0 dari 997 hingga 1018 adalah 3 (pada 1000) + 9 * 2 (pada 1001..1009) + 2 (pada 1010) + 8 * 1 (pada 1011..1018) = 31. Jawaban: 31.'
  },
  {
    id: 'OSNK-31', col: 'col4', topic: 'CPP', sub: 'Bagian C', badge: 'OSN-K • Soal 31',
    mentor: 'Bagian C • Kode C++', title: 'Soal 31 (Campur, Aduk, Rata 3)',
    question: 'Total kontribusi digit 9 dari seluruh pemanggilan subrentang di dalam [997, 1018].',
    answer: '438',
    explanation: 'Setiap bilangan k dalam [997, 1018] dipanggil sebanyak (k - 996) * (1019 - k) kali; kontribusi digit 9 berasal dari 997 (2 * 1 * 22 = 44), 998 (2 * 2 * 21 = 84), 999 (3 * 3 * 20 = 180), dan 1009 (1 * 13 * 10 = 130), total 44 + 84 + 180 + 130 = 438. Jawaban: 438.'
  },
  {
    id: 'OSNK-32', col: 'col4', topic: 'BITWISE', sub: 'Bagian C', badge: 'OSN-K • Soal 32',
    mentor: 'Bagian C • Kode C++', title: 'Soal 32 (Mondar-Mandir 1 — MANDIR(12))',
    question: 'Berapa banyak karakter 1 pada string hasil pemanggilan MANDIR(12)?',
    answer: '2048',
    explanation: 'MANDIR(12) memiliki panjang 2^12 = 4096 dengan tepat setengah karakternya bernilai 1, yaitu 2048. Jawaban: 2048.'
  },
  {
    id: 'OSNK-33', col: 'col4', topic: 'BITWISE', sub: 'Bagian C', badge: 'OSN-K • Soal 33',
    mentor: 'Bagian C • Kode C++', title: 'Soal 33 (Mondar-Mandir 2 — Indeks 2025..2027)',
    question: 'Karakter ke-2025, 2026, 2027 (indeks 0-based: 2024, 2025, 2026) pada barisan Thue-Morse MANDIR.',
    answer: '100',
    explanation: 'Karakter ke-2025, 2026, 2027 (indeks 0-based: 2024, 2025, 2026) ditentukan oleh paritas jumlah bit 1: popcount(2024) = 7 (ganjil -> 1), popcount(2025) = 8 (genap -> 0), popcount(2026) = 8 (genap -> 0), menghasilkan 100. Jawaban: 100.'
  },
  {
    id: 'OSNK-34', col: 'col4', topic: 'ALGORITMA', sub: 'Bagian C', badge: 'OSN-K • Soal 34',
    mentor: 'Bagian C • Kode C++', title: 'Soal 34 (Mondar-Mandir 3 — Substring 00)',
    question: 'Berapa banyak kemunculan substring "00" pada MANDIR(12)?',
    answer: '682',
    explanation: 'Rekurensi jumlah substring 00 (a_n) dan 11 (b_n) memenuhi a_n = a_(n-1) + b_(n-1) dan b_n = a_(n-1) + b_(n-1) + (n % 2 == 0 ? 1 : 0), menghasilkan barisan a_1..a_12: 0, 0, 1, 2, 5, 10, 21, 42, 85, 170, 341, 682. Jawaban: 682.'
  },
  {
    id: 'OSNK-35', col: 'col4', topic: 'BITWISE', sub: 'Bagian C', badge: 'OSN-K • Soal 35',
    mentor: 'Bagian C • Kode C++', title: 'Soal 35 (Lipat Kode 1 — KODE(41))',
    question: 'Berapakah hasil pemanggilan fungsi Josephus bit KODE(41)?',
    answer: '19',
    explanation: 'LIPAT(41) = 32, sehingga KODE(41) = 2 * (41 - 32) + 1 = 19. Jawaban: 19.'
  },
  {
    id: 'OSNK-36', col: 'col4', topic: 'BITWISE', sub: 'Bagian C', badge: 'OSN-K • Soal 36',
    mentor: 'Bagian C • Kode C++', title: 'Soal 36 (Lipat Kode 2 — TUNGGAL(63))',
    question: 'Berapakah hasil penjumlahan blok pangkat dua pada pemanggilan TUNGGAL(63)?',
    answer: '1365',
    explanation: 'TUNGGAL(63) menjumlahkan bilangan ganjil pada tiap blok pangkat dua: 1^2 + 2^2 + 4^2 + 8^2 + 16^2 + 32^2 = 1 + 4 + 16 + 64 + 256 + 1024 = 1365. Jawaban: 1365.'
  },
  {
    id: 'OSNK-37', col: 'col4', topic: 'BITWISE', sub: 'Bagian C', badge: 'OSN-K • Soal 37',
    mentor: 'Bagian C • Kode C++', title: 'Soal 37 (Lipat Kode 3 — Konvergensi 1..63)',
    question: 'Jumlah nilai konvergensi berulang KODE(i) untuk seluruh i = 1..63.',
    answer: '665',
    explanation: 'Iterasi berulang KODE(i) menggeser bit secara siklik dan menghilangkan bit 0 hingga konvergen ke 2^(popcount(i)) - 1; jumlahnya untuk i = 1..63 adalah 3^6 - 2^6 = 729 - 64 = 665. Jawaban: 665.'
  },
  {
    id: 'OSNK-38', col: 'col4', topic: 'MODULO', sub: 'Bagian C', badge: 'OSN-K • Soal 38',
    mentor: 'Bagian C • Kode C++', title: 'Soal 38 (MAI 1 — MAI(13, 666666, 37))',
    question: 'Jika MAI(x, y, z) = (x + 2^y * z) % 67, berapakah hasil MAI(13, 666666, 37)?',
    answer: '50',
    explanation: 'MAI(x, y, z) = (x + 2^y * z) % 67; karena 666666 habis dibagi 66, menurut Teorema Kecil Fermat 2^666666 mod 67 = 1, sehingga (13 + 1 * 37) % 67 = 50. Jawaban: 50.'
  },
  {
    id: 'OSNK-39', col: 'col4', topic: 'MODULO', sub: 'Bagian C', badge: 'OSN-K • Soal 39',
    mentor: 'Bagian C • Kode C++', title: 'Soal 39 (MAI 2 — Tripel dalam 0..200)',
    question: 'Berapa banyak tripel (x, y, z) dalam rentang 0..200 yang menghasilkan MAI(x, y, z) == 0?',
    answer: '121203',
    explanation: 'Rentang 0..200 memuat 201 = 3 * 67 bilangan, sehingga untuk setiap pasangan (y, z) dari 201 * 201 kemungkinan selalu terdapat tepat 3 nilai x yang memenuhi (x + 2^y * z) % 67 == 0, total 3 * 201 * 201 = 121203. Jawaban: 121203.'
  },
  {
    id: 'OSNK-40', col: 'col4', topic: 'MODULO', sub: 'Bagian C', badge: 'OSN-K • Soal 40',
    mentor: 'Bagian C • Kode C++', title: 'Soal 40 (MAI 3 — Daun Rekursi MAI(0, 10, 2))',
    question: 'Pada pemanggilan MAI(0, 10, 2), berapa banyak daun rekursi (saat y = 0) yang bernilai 0?',
    answer: '16',
    explanation: 'Pemanggilan daun ke-k (untuk k = 0..1023) pada MAI(0, 10, 2) adalah MAI((2k) % 67, 0, 2); kondisi (2k) % 67 == 0 terpenuhi saat k kelipatan 67, yaitu k = 0, 67, 134, ..., 1005 sebanyak 16 kali. Jawaban: 16.'
  }
];

export const ALL_CARDS: CardItem[] = [...MATERI_CARDS, ...LATIHAN_CARDS, ...OSNK_CARDS];
