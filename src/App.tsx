import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ALL_CARDS, MATERI_CARDS, LATIHAN_CARDS, OSNK_CARDS, CardItem } from './data/curriculumData';

const STORAGE_KEY = 'osnlink_2026_mastered_v2';
const INITIAL_MASTERED = ['M1-1', 'M1-2', 'B2-S1-1', 'B2-S1-2', 'B5-S1-1', 'OSNK-1', 'OSNK-2'];
const INITIAL_EXPANDED = ['B5-S1-2', 'OSNK-2'];

type ViewType = 'board' | 'materi' | 'latihan' | 'osnk' | 'lab';
type TopicType = 'ALL' | 'BITWISE' | 'CPP' | 'MODULO' | 'KOMBINATORIKA' | 'ALGORITMA';
type SortType = 'DEFAULT' | 'UNMASTERED' | 'MASTERED';
type StatusFilterType = 'ALL' | 'UNMASTERED' | 'MASTERED' | 'EXPANDED';
type MobileColTab = 'all' | 'col1' | 'col2' | 'col3' | 'col4';

export default function App() {
  // --- Persistent State ---
  const [mastered, setMastered] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return new Set(parsed);
      }
    } catch (e) {
      console.warn(e);
    }
    return new Set(INITIAL_MASTERED);
  });

  const [expanded, setExpanded] = useState<Set<string>>(new Set(INITIAL_EXPANDED));
  const [mainView, setMainView] = useState<ViewType>('board');
  const [topicFilter, setTopicFilter] = useState<TopicType>('ALL');
  const [sortOrder, setSortOrder] = useState<SortType>('DEFAULT');
  const [statusFilter, setStatusFilter] = useState<StatusFilterType>('ALL');
  const [focusedSubFilter, setFocusedSubFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [colReversed, setColReversed] = useState<{ [key: string]: boolean }>({
    col1: false,
    col2: false,
    col3: false,
    col4: false,
  });
  const [allExpandedMode, setAllExpandedMode] = useState<boolean>(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  const [mobileColTab, setMobileColTab] = useState<MobileColTab>('all');

  // --- Modals & Notification ---
  const [flashcardOpen, setFlashcardOpen] = useState<boolean>(false);
  const [resetModalOpen, setResetModalOpen] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // --- Flashcard State ---
  const [fcDeckSelector, setFcDeckSelector] = useState<string>('ALL');
  const [fcIndex, setFcIndex] = useState<number>(0);
  const [fcDeck, setFcDeck] = useState<CardItem[]>([]);
  const [fcGuess, setFcGuess] = useState<string>('');
  const [fcRevealed, setFcRevealed] = useState<boolean>(false);
  const [fcFeedback, setFcFeedback] = useState<{ match: boolean; text: string } | null>(null);

  // --- Lab Calculators State ---
  const [bitA, setBitA] = useState<number>(72);
  const [bitB, setBitB] = useState<number>(51);
  const [shiftK, setShiftK] = useState<number>(3);
  const [numX, setNumX] = useState<number>(2025);
  const [numY, setNumY] = useState<number>(700);
  const [numM, setNumM] = useState<number>(67);
  const [derangeN, setDerangeN] = useState<number>(5);
  const [ballH, setBallH] = useState<number>(25);
  const [ballNum, setBallNum] = useState<number>(4);
  const [ballDen, setBallDen] = useState<number>(5);

  // --- Save to LocalStorage ---
  const saveProgress = useCallback((newSet: Set<string>) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(newSet)));
    } catch (e) {
      console.warn(e);
    }
  }, []);

  const triggerToast = useCallback((msg: string) => {
    setToastMsg(msg);
  }, []);

  useEffect(() => {
    if (!toastMsg) return;
    const t = setTimeout(() => setToastMsg(null), 2200);
    return () => clearTimeout(t);
  }, [toastMsg]);

  // --- Card Interactions ---
  const toggleMastered = useCallback((id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setMastered(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        triggerToast(`Status "${id}" diubah ke Belum Paham`);
      } else {
        next.add(id);
        triggerToast(`"${id}" ditandai Sudah Paham`);
      }
      saveProgress(next);
      return next;
    });
  }, [saveProgress, triggerToast]);

  const toggleExpand = useCallback((id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const toggleExpandAll = useCallback(() => {
    if (allExpandedMode) {
      setExpanded(new Set(['B5-S1-2', 'OSNK-2']));
      setAllExpandedMode(false);
      triggerToast('Kartu dikembalikan ke tampilan ringkas');
    } else {
      const allIds = new Set(ALL_CARDS.map(c => c.id));
      setExpanded(allIds);
      setAllExpandedMode(true);
      triggerToast('Seluruh kartu dibuka ke mode pembahasan hitam (#161615)');
    }
  }, [allExpandedMode, triggerToast]);

  const reverseColumn = useCallback((colKey: string) => {
    setColReversed(prev => ({ ...prev, [colKey]: !prev[colKey] }));
  }, []);

  const cycleSortOrder = () => {
    const list: SortType[] = ['DEFAULT', 'UNMASTERED', 'MASTERED'];
    const idx = (list.indexOf(sortOrder) + 1) % list.length;
    setSortOrder(list[idx]);
  };

  const cycleStatusFilter = () => {
    const list: StatusFilterType[] = ['ALL', 'UNMASTERED', 'MASTERED', 'EXPANDED'];
    const idx = (list.indexOf(statusFilter) + 1) % list.length;
    setStatusFilter(list[idx]);
  };

  const resetAllFilters = () => {
    setTopicFilter('ALL');
    setStatusFilter('ALL');
    setSortOrder('DEFAULT');
    setSearchQuery('');
  };

  const confirmResetProgress = () => {
    const emptySet = new Set<string>();
    setMastered(emptySet);
    saveProgress(emptySet);
    setResetModalOpen(false);
    triggerToast('Progres belajar direset ke 0%');
  };

  // --- Filtering & Sorting Helper ---
  const filterAndSortCards = useCallback((cards: CardItem[], colKey?: string) => {
    const q = searchQuery.trim().toLowerCase();
    let list = cards.filter(c => {
      if (topicFilter !== 'ALL' && c.topic !== topicFilter) return false;
      if (statusFilter === 'UNMASTERED' && mastered.has(c.id)) return false;
      if (statusFilter === 'MASTERED' && !mastered.has(c.id)) return false;
      if (statusFilter === 'EXPANDED' && !expanded.has(c.id)) return false;
      if (q) {
        const hay = `${c.id} ${c.badge} ${c.title} ${c.question} ${c.answer} ${c.explanation} ${c.mentor}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    if (sortOrder === 'UNMASTERED') {
      list.sort((a, b) => Number(mastered.has(a.id)) - Number(mastered.has(b.id)));
    } else if (sortOrder === 'MASTERED') {
      list.sort((a, b) => Number(mastered.has(b.id)) - Number(mastered.has(a.id)));
    }

    if (colKey && colReversed[colKey]) {
      list = [...list].reverse();
    }
    return list;
  }, [searchQuery, topicFilter, statusFilter, mastered, expanded, sortOrder, colReversed]);

  // Columns for Board View
  const col1Cards = useMemo(() => filterAndSortCards(ALL_CARDS.filter(c => c.col === 'col1'), 'col1'), [filterAndSortCards]);
  const col2Cards = useMemo(() => filterAndSortCards(ALL_CARDS.filter(c => c.col === 'col2'), 'col2'), [filterAndSortCards]);
  const col3Cards = useMemo(() => filterAndSortCards(ALL_CARDS.filter(c => c.col === 'col3'), 'col3'), [filterAndSortCards]);
  const col4Cards = useMemo(() => filterAndSortCards(ALL_CARDS.filter(c => c.col === 'col4'), 'col4'), [filterAndSortCards]);

  const totalVisibleCards = col1Cards.length + col2Cards.length + col3Cards.length + col4Cards.length;
  const progressPct = ALL_CARDS.length > 0 ? Math.round((mastered.size / ALL_CARDS.length) * 100) : 0;

  // --- Flashcard Deck Setup ---
  useEffect(() => {
    const pool = [...LATIHAN_CARDS, ...OSNK_CARDS];
    let nextDeck = pool;
    if (fcDeckSelector !== 'ALL') {
      nextDeck = pool.filter(c => c.category === fcDeckSelector || c.sub === fcDeckSelector);
    }
    setFcDeck(nextDeck);
    setFcIndex(0);
    setFcGuess('');
    setFcRevealed(false);
    setFcFeedback(null);
  }, [fcDeckSelector]);

  const shuffleDeck = () => {
    const shuffled = [...fcDeck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setFcDeck(shuffled);
    setFcIndex(0);
    setFcGuess('');
    setFcRevealed(false);
    setFcFeedback(null);
    triggerToast('Urutan kartu Flashcard diacak');
  };

  const handleRevealFlashcard = () => {
    const card = fcDeck[fcIndex];
    if (!card) return;
    const trimmed = fcGuess.trim();
    if (trimmed) {
      const isMatch = card.answer.toLowerCase().includes(trimmed.toLowerCase());
      setFcFeedback({
        match: isMatch,
        text: isMatch
          ? `✓ Jawaban "${trimmed}" sesuai dengan kunci resmi!`
          : `Tebakan Anda: "${trimmed}". Periksa kunci jawaban di bawah.`
      });
    } else {
      setFcFeedback(null);
    }
    setFcRevealed(true);
  };

  const recordFcResult = (isMaster: boolean) => {
    const card = fcDeck[fcIndex];
    if (!card) return;
    setMastered(prev => {
      const next = new Set(prev);
      if (isMaster) next.add(card.id);
      else next.delete(card.id);
      saveProgress(next);
      return next;
    });
    // Move to next
    if (fcDeck.length > 0) {
      setFcIndex((fcIndex + 1) % fcDeck.length);
      setFcGuess('');
      setFcRevealed(false);
      setFcFeedback(null);
    }
  };

  const prevFlashcard = () => {
    if (!fcDeck.length) return;
    setFcIndex((fcIndex - 1 + fcDeck.length) % fcDeck.length);
    setFcGuess('');
    setFcRevealed(false);
    setFcFeedback(null);
  };

  const nextFlashcard = () => {
    if (!fcDeck.length) return;
    setFcIndex((fcIndex + 1) % fcDeck.length);
    setFcGuess('');
    setFcRevealed(false);
    setFcFeedback(null);
  };

  // --- Computational Lab Calculations ---
  const popcount32 = (n: number) => {
    let v = n >>> 0;
    let c = 0;
    while (v > 0) {
      c += v & 1;
      v >>>= 1;
    }
    return c;
  };

  const bitwiseTableRows = useMemo(() => {
    const a = Math.max(0, bitA || 0);
    const b = Math.max(0, bitB || 0);
    const k = Math.max(0, Math.min(31, shiftK ?? 3));
    const pad = a > 255 || b > 255 ? 12 : 8;
    const fmt = (v: number) => (v >>> 0).toString(2).padStart(pad, '0');

    return [
      { op: 'Bilangan A', dec: a, bin: `${fmt(a)}_2`, note: `popcount = ${popcount32(a)} (jumlah bit 1)` },
      { op: 'Bilangan B', dec: b, bin: `${fmt(b)}_2`, note: `popcount = ${popcount32(b)} (jumlah bit 1)` },
      { op: 'A & B (AND)', dec: a & b, bin: `${fmt(a & b)}_2`, note: '1 hanya jika kedua bit sama-sama bernilai 1' },
      { op: 'A | B (OR)', dec: a | b, bin: `${fmt(a | b)}_2`, note: '1 jika salah satu atau kedua bit bernilai 1' },
      { op: 'A ^ B (XOR)', dec: a ^ b, bin: `${fmt(a ^ b)}_2`, note: '1 jika kedua bit berbeda (paritas ganjil)' },
      { op: `A << ${k} (Shift Left A)`, dec: (a << k) >>> 0, bin: `${((a << k) >>> 0).toString(2)}_2`, note: `Ekuivalen dengan A × 2^${k} = ${a} × ${2 ** k} = ${a * (2 ** k)}` },
      { op: `A >> ${k} (Shift Right A)`, dec: a >> k, bin: `${fmt(a >> k)}_2`, note: `Ekuivalen dengan floor(A / 2^${k}) = floor(${a} / ${2 ** k}) = ${Math.floor(a / (2 ** k))}` },
      { op: `B << ${k} (Shift Left B)`, dec: (b << k) >>> 0, bin: `${((b << k) >>> 0).toString(2)}_2`, note: `Ekuivalen dengan B × 2^${k} = ${b} × ${2 ** k} = ${b * (2 ** k)}` },
      { op: `B >> ${k} (Shift Right B)`, dec: b >> k, bin: `${fmt(b >> k)}_2`, note: `Ekuivalen dengan floor(B / 2^${k}) = floor(${b} / ${2 ** k}) = ${Math.floor(b / (2 ** k))}` },
      { op: `(A | B) >> ${k}`, dec: (a | b) >> k, bin: `${fmt((a | b) >> k)}_2`, note: `Contoh Soal: (${a} | ${b}) = ${a | b}, lalu digeser kanan ${k} bit = ${(a | b) >> k}` },
      { op: `(A & B) << ${k}`, dec: ((a & b) << k) >>> 0, bin: `${(((a & b) << k) >>> 0).toString(2)}_2`, note: `Contoh Soal: (${a} & ${b}) = ${a & b}, lalu digeser kiri ${k} bit = ${((a & b) << k) >>> 0}` }
    ];
  }, [bitA, bitB, shiftK]);

  const numberTheoryResult = useMemo(() => {
    const x = Math.max(1, numX || 1);
    const y = Math.max(0, numY || 0);
    const m = Math.max(1, numM || 1);

    // GCD
    const calcGcd = (u: number, v: number): number => {
      let a = Math.abs(u);
      let b = Math.abs(v);
      while (b > 0) {
        const t = a % b;
        a = b;
        b = t;
      }
      return a;
    };
    const fpb = calcGcd(x, Math.max(1, y));
    const kpk = y > 0 ? Math.round((x / fpb) * y) : 0;

    // Prime Factorization
    let tmp = x;
    let divs = 1;
    const parts: string[] = [];
    for (let d = 2; d * d <= tmp; d++) {
      if (tmp % d === 0) {
        let count = 0;
        while (tmp % d === 0) {
          count++;
          tmp = Math.floor(tmp / d);
        }
        parts.push(count > 1 ? `${d}^${count}` : `${d}`);
        divs *= (count + 1);
      }
    }
    if (tmp > 1) {
      parts.push(`${tmp}^1`);
      divs *= 2;
    }
    const pfText = parts.length > 0 ? parts.join(' * ') : `${x}`;

    // Modular Exponentiation
    let res = 1n;
    let base = BigInt(x) % BigInt(m);
    let exp = BigInt(y);
    const mod = BigInt(m);
    while (exp > 0n) {
      if (exp & 1n) res = (res * base) % mod;
      base = (base * base) % mod;
      exp >>= 1n;
    }

    return {
      pfText,
      divs,
      fpb,
      kpk,
      divBy8: x % 8 === 0,
      divBy9: x % 9 === 0,
      powMod: res.toString()
    };
  }, [numX, numY, numM]);

  const derangeResult = useMemo(() => {
    const n = Math.min(12, Math.max(1, derangeN || 5));
    const d = [1, 0];
    for (let i = 2; i <= n; i++) {
      d[i] = (i - 1) * (d[i - 1] + d[i - 2]);
    }
    return { n, val: d[n] };
  }, [derangeN]);

  const ballResult = useMemo(() => {
    const h = ballH || 0;
    const num = ballNum || 0;
    const den = Math.max(1, ballDen || 1);
    if (num >= den) {
      return { valid: false, msg: `Rasio r = ${num}/${den} harus < 1.` };
    }
    const r = num / den;
    const tot = h * (1 + r) / (1 - r);
    return { valid: true, total: tot.toFixed(4), num, den, h };
  }, [ballH, ballNum, ballDen]);

  // --- Radial Tick Gauge Lines ---
  const radialTicks = useMemo(() => {
    const totalTicks = 36;
    const activeTicks = Math.round((progressPct / 100) * totalTicks);
    const cx = 110;
    const cy = 102;
    const rInner = 68;
    const rOuter = 86;

    const ticks = [];
    for (let i = 0; i < totalTicks; i++) {
      const deg = 180 - (i / (totalTicks - 1)) * 180;
      const rad = (deg * Math.PI) / 180;
      const x1 = (cx + rInner * Math.cos(rad)).toFixed(2);
      const y1 = (cy - rInner * Math.sin(rad)).toFixed(2);
      const x2 = (cx + rOuter * Math.cos(rad)).toFixed(2);
      const y2 = (cy - rOuter * Math.sin(rad)).toFixed(2);
      const isFilled = i < activeTicks;
      ticks.push({ x1, y1, x2, y2, isFilled });
    }
    return ticks;
  }, [progressPct]);

  // --- Card Renderer Component ---
  const renderCard = (card: CardItem, isFourthCol = false) => {
    const isExp = expanded.has(card.id);
    const isMast = mastered.has(card.id);

    if (isExp) {
      return (
        <article
          key={card.id}
          id={`card-${card.id}`}
          onClick={(e) => toggleExpand(card.id, e)}
          className="rounded-2xl p-5 biz-card-dark space-y-3.5 cursor-pointer"
        >
          {/* Top Row: Title + Toggle button */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-heading text-[15.5px] font-bold text-white leading-snug">{card.title}</h3>
            <button
              onClick={(e) => toggleExpand(card.id, e)}
              className="p-1 rounded-lg text-[#A09F98] hover:text-white hover:bg-[#262624] shrink-0"
              title="Tutup detail"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </div>

          {/* Question / Concept Prompt */}
          <p className="text-[12.5px] text-[#C9C8C2] leading-relaxed">{card.question}</p>

          {/* Metadata & Key Answer Block */}
          <div className="space-y-3 pt-2 text-[12px] border-t border-[#2C2C29]">
            <div className="p-3 rounded-xl bg-[#222220] border border-[#333330] space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#A09F98] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                KUNCI JAWABAN RESMI
              </div>
              <div className="text-white font-mono font-bold text-sm sm:text-base">
                {card.answer}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1D1D1B] border border-[#2A2A28] space-y-1.5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#D5D4CA] flex items-center gap-1.5 font-semibold">
                <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                ANALISIS &amp; ALASAN MENGAPA JAWABAN TERJADI
              </div>
              <div className="text-[#D8D7CE] text-[12.5px] leading-relaxed whitespace-pre-line">
                {card.explanation}
              </div>
            </div>
          </div>

          {/* Manager / Topic Row */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-[#333330] text-white flex items-center justify-center text-[10px] font-bold">
                {card.id.slice(0, 2)}
              </div>
              <div>
                <div className="text-[10px] text-[#8E8D86] leading-none">Kategori Modul</div>
                <div className="text-[11.5px] font-medium text-white mt-0.5">{card.mentor}</div>
              </div>
            </div>
            <button
              onClick={(e) => toggleMastered(card.id, e)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                isMast
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-[#262624] text-[#D8D7CE] border border-[#3A3A37] hover:bg-white hover:text-[#161615]'
              }`}
            >
              {isMast ? '✓ Sudah Paham' : 'Tandai Paham'}
            </button>
          </div>

          {/* Bottom Bar: Date/Badge Pill + Icons */}
          <div className="flex items-center justify-between pt-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#262624] border border-[#3A3A37] text-[11px] font-mono text-[#E6E5E0] tabular-nums">
              <svg className="w-3.5 h-3.5 text-[#A09F98]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              {card.badge}
            </span>
            <div className="flex items-center gap-3 text-[11px] font-mono text-[#A09F98] tabular-nums">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
                1
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
                {isMast ? '✓' : '0'}
              </span>
            </div>
          </div>
        </article>
      );
    }

    const surfaceClass = isFourthCol ? 'biz-card-tinted' : 'biz-card-light';
    return (
      <article
        key={card.id}
        id={`card-${card.id}`}
        onClick={(e) => toggleExpand(card.id, e)}
        className={`rounded-2xl p-5 ${surfaceClass} space-y-4 cursor-pointer group`}
      >
        <div className="flex items-start justify-between gap-2.5">
          <h3 className="font-heading text-[15px] font-bold text-[#161615] leading-snug">{card.title}</h3>
          <button
            onClick={(e) => toggleMastered(card.id, e)}
            className="p-1 rounded-lg text-[#787770] hover:text-[#161615] hover:bg-[#F2F1E8] shrink-0"
            title="Tandai Paham"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
            </svg>
          </button>
        </div>

        <p className="text-[12.5px] text-[#6E6D68] leading-relaxed line-clamp-3">{card.question}</p>

        <div className="text-[11.5px] text-[#787770] group-hover:text-[#161615] flex items-center gap-1 font-medium pt-0.5">
          <span>Buka kunci &amp; analisis jawaban</span>
          <span className="text-xs">↓</span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#DCDCD4] text-[11px] font-mono font-medium text-[#161615] tabular-nums">
            <svg className="w-3.5 h-3.5 text-[#6E6D68]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {card.badge}
          </span>

          <div className="flex items-center gap-2.5 text-[11.5px] font-mono text-[#6E6D68] tabular-nums">
            {isMast && (
              <span className="px-2 py-0.5 rounded-md bg-[#F2F1E8] text-[#161615] font-semibold">
                ✓ Paham
              </span>
            )}
            <span className="flex items-center gap-1 hover:text-[#161615]">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
              Kunci
            </span>
          </div>
        </div>
      </article>
    );
  };

  // --- Focused View Data ---
  const focusedViewCards = useMemo(() => {
    let base: CardItem[] = [];
    if (mainView === 'materi') {
      base = MATERI_CARDS;
    } else if (mainView === 'latihan') {
      base = focusedSubFilter === 'ALL'
        ? LATIHAN_CARDS
        : LATIHAN_CARDS.filter(c => c.category === focusedSubFilter);
    } else if (mainView === 'osnk') {
      base = focusedSubFilter === 'ALL'
        ? OSNK_CARDS
        : OSNK_CARDS.filter(c => c.sub === focusedSubFilter);
    }
    return filterAndSortCards(base);
  }, [mainView, focusedSubFilter, filterAndSortCards]);

  const hasActiveFilter = topicFilter !== 'ALL' || statusFilter !== 'ALL' || searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen flex bg-white text-[#161615] selection:bg-[#161615] selection:text-[#F2F1E8]">
      {/* MOBILE BACKDROP FOR SIDEBAR */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity"
        />
      )}

      {/* =================================================================== */}
      {/* LEFT SIDEBAR                                                        */}
      {/* =================================================================== */}
      <aside
        id="sidebar"
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64 shrink-0 bg-white border-r border-[#EBEAE4] flex flex-col justify-between transition-transform duration-200 overflow-y-auto ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6 space-y-7">
          {/* Brand Logo */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => { setMainView('board'); setMobileSidebarOpen(false); }}
              className="flex items-center gap-2.5 group text-left"
            >
              <span className="font-heading text-xl font-extrabold tracking-tight text-[#161615]">OSNLink</span>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#F2F1E8] text-[#5A5953] border border-[#E2E1D6] tabular-nums">2026</span>
            </button>
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-[#6E6D68] hover:bg-[#F5F4EF]"
              aria-label="Tutup Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Primary Navigation */}
          <nav className="space-y-1" aria-label="Menu Utama">
            <button
              onClick={() => { setMainView('board'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-colors ${
                mainView === 'board' ? 'bg-[#F5F4EF] text-[#161615] font-semibold' : 'text-[#5A5953] hover:bg-[#F8F7F3] hover:text-[#161615]'
              }`}
            >
              <span className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#161615]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span>Dashboard Semua</span>
              </span>
            </button>

            <button
              onClick={() => { setMainView('materi'); setFocusedSubFilter('ALL'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-colors ${
                mainView === 'materi' ? 'bg-[#F5F4EF] text-[#161615] font-semibold' : 'text-[#5A5953] hover:bg-[#F8F7F3] hover:text-[#161615]'
              }`}
            >
              <span className="flex items-center gap-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                <span>Materi Inti</span>
              </span>
              <span className="px-2 py-0.5 text-[11px] font-mono font-semibold rounded-full bg-[#F2F1E8] text-[#161615] tabular-nums">15</span>
            </button>

            <button
              onClick={() => { setMainView('latihan'); setFocusedSubFilter('ALL'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-colors ${
                mainView === 'latihan' ? 'bg-[#F5F4EF] text-[#161615] font-semibold' : 'text-[#5A5953] hover:bg-[#F8F7F3] hover:text-[#161615]'
              }`}
            >
              <span className="flex items-center gap-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                <span>Bank Latihan</span>
              </span>
              <span className="px-2 py-0.5 text-[11px] font-mono font-semibold rounded-full bg-[#F2F1E8] text-[#161615] tabular-nums">51</span>
            </button>

            <button
              onClick={() => { setMainView('osnk'); setFocusedSubFilter('ALL'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-colors ${
                mainView === 'osnk' ? 'bg-[#F5F4EF] text-[#161615] font-semibold' : 'text-[#5A5953] hover:bg-[#F8F7F3] hover:text-[#161615]'
              }`}
            >
              <span className="flex items-center gap-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                <span>OSN-K 2026</span>
              </span>
              <span className="px-2 py-0.5 text-[11px] font-mono font-semibold rounded-full bg-[#F2F1E8] text-[#161615] tabular-nums">36</span>
            </button>

            <button
              onClick={() => { setMainView('lab'); setMobileSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-colors ${
                mainView === 'lab' ? 'bg-[#F5F4EF] text-[#161615] font-semibold' : 'text-[#5A5953] hover:bg-[#F8F7F3] hover:text-[#161615]'
              }`}
            >
              <span className="flex items-center gap-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Lab &amp; Kalkulator</span>
              </span>
            </button>
          </nav>

          {/* Topik Kompetisi Filter */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between px-3">
              <span className="text-[11.5px] font-medium text-[#8C8B84]">Topik Kompetisi</span>
              {topicFilter !== 'ALL' && (
                <button
                  onClick={() => setTopicFilter('ALL')}
                  className="text-[11px] font-medium text-[#161615] underline"
                >
                  Semua
                </button>
              )}
            </div>

            <div className="space-y-0.5">
              {[
                { key: 'BITWISE', name: 'Bitwise & Biner', count: 17, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { key: 'CPP', name: 'Kontrol & Array C++', count: 25, icon: 'M7 17L17 7M17 7H8M17 7v9' },
                { key: 'MODULO', name: 'Teori Bilangan & Mod', count: 22, icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
                { key: 'KOMBINATORIKA', name: 'Kombinatorika & Deret', count: 12, icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
                { key: 'ALGORITMA', name: 'Algoritma, Graf & DP', count: 26, icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
              ].map(t => {
                const isAct = topicFilter === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => {
                      setTopicFilter(topicFilter === t.key ? 'ALL' : t.key as TopicType);
                      if (mainView === 'lab') setMainView('board');
                      setMobileSidebarOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-[13px] font-medium transition-colors ${
                      isAct ? 'bg-[#161615] text-white font-semibold' : 'text-[#3D3D3A] hover:bg-[#F8F7F3]'
                    }`}
                  >
                    <span className="flex items-center gap-3 truncate">
                      <svg className={`w-4 h-4 shrink-0 ${isAct ? 'text-white' : 'text-[#161615]'}`} fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={t.icon}></path>
                      </svg>
                      <span className="truncate">{t.name}</span>
                    </span>
                    <span className={`px-2 py-0.5 text-[11px] font-mono rounded-full tabular-nums ${
                      isAct ? 'bg-white/20 text-white' : 'bg-[#F5F4EF] text-[#5A5953]'
                    }`}>
                      {t.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Fokus Kompetisi */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-3">
              <span className="text-[11.5px] font-medium text-[#8C8B84]">Fokus Kompetisi</span>
              <button
                onClick={() => { setFlashcardOpen(true); setMobileSidebarOpen(false); }}
                className="w-6 h-6 rounded-lg hover:bg-[#F2F1E8] flex items-center justify-center text-[#161615]"
                title="Latihan Flashcard"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                </svg>
              </button>
            </div>

            <div className="space-y-2.5 px-2">
              <button
                onClick={() => {
                  setMainView('osnk');
                  setFocusedSubFilter('Bagian A');
                  setMobileSidebarOpen(false);
                }}
                className="w-full flex items-center gap-3 p-1.5 rounded-xl hover:bg-[#F8F7F3] text-left transition-colors"
              >
                <div className="relative w-8 h-8 rounded-full bg-[#E8E6DF] text-[#161615] flex items-center justify-center font-heading font-bold text-xs shrink-0">
                  BA
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-semibold text-[#161615] truncate">Bagian A • Abstraksi</div>
                  <div className="text-[11px] text-[#8C8B84] truncate tabular-nums">Soal 1–10 OSN-K 2026</div>
                </div>
              </button>

              <button
                onClick={() => {
                  setMainView('osnk');
                  setFocusedSubFilter('Bagian B');
                  setMobileSidebarOpen(false);
                }}
                className="w-full flex items-center gap-3 p-1.5 rounded-xl hover:bg-[#F8F7F3] text-left transition-colors"
              >
                <div className="relative w-8 h-8 rounded-full bg-[#161615] text-white flex items-center justify-center font-heading font-bold text-xs shrink-0">
                  BB
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-semibold text-[#161615] truncate">Bagian B • Optimasi</div>
                  <div className="text-[11px] text-[#8C8B84] truncate tabular-nums">Soal 11–25 OSN-K 2026</div>
                </div>
              </button>

              <button
                onClick={() => {
                  setMainView('osnk');
                  setFocusedSubFilter('Bagian C');
                  setMobileSidebarOpen(false);
                }}
                className="w-full flex items-center gap-3 p-1.5 rounded-xl hover:bg-[#F8F7F3] text-left transition-colors"
              >
                <div className="relative w-8 h-8 rounded-full bg-[#D9D8CE] text-[#161615] flex items-center justify-center font-heading font-bold text-xs shrink-0">
                  BC
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-semibold text-[#161615] truncate">Bagian C • Kode C++</div>
                  <div className="text-[11px] text-[#8C8B84] truncate tabular-nums">Soal 26–40 OSN-K 2026</div>
                </div>
              </button>

              <button
                onClick={() => {
                  setMainView('latihan');
                  setFocusedSubFilter('ALL');
                  setMobileSidebarOpen(false);
                }}
                className="w-full flex items-center gap-3 p-1.5 rounded-xl hover:bg-[#F8F7F3] text-left transition-colors"
              >
                <div className="relative w-8 h-8 rounded-full bg-[#F2F1E8] border border-[#DCDCD2] text-[#161615] flex items-center justify-center font-heading font-bold text-xs shrink-0">
                  L2-7
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white"></span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-semibold text-[#161615] truncate">Latihan Sesi 1 &amp; 2</div>
                  <div className="text-[11px] text-[#8C8B84] truncate tabular-nums">Bagian 2 s.d. Bagian 7</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-[#EBEAE4] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-[#161615] text-white flex items-center justify-center text-xs font-bold shrink-0">
              OSN
            </div>
            <div className="truncate">
              <div className="text-xs font-semibold text-[#161615] truncate">Peserta OSN-K</div>
              <div className="text-[11px] text-[#8C8B84] font-mono tabular-nums">
                {mastered.size}/{ALL_CARDS.length} dikuasai
              </div>
            </div>
          </div>
          <button
            onClick={() => setResetModalOpen(true)}
            className="p-2 rounded-lg text-[#6E6D68] hover:text-[#161615] hover:bg-[#F5F4EF] transition-colors"
            title="Reset Progres Belajar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
          </button>
        </div>
      </aside>

      {/* =================================================================== */}
      {/* MAIN WORKSPACE                                                      */}
      {/* =================================================================== */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">
        {/* TOP WARM ALABASTER-SAND PANEL */}
        <header className="bg-[#F2F1E8] border-b border-[#E5E4DA] px-4 sm:px-8 pt-4 sm:pt-5 pb-6 sm:pb-7">
          <div className="max-w-[1440px] mx-auto space-y-6 sm:space-y-7">
            {/* Top Utility Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
              {/* Left: Mobile Hamburger + Search Input */}
              <div className="flex items-center gap-2.5 sm:gap-3 flex-1 max-w-md w-full">
                <button
                  onClick={() => setMobileSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-xl bg-white/80 border border-[#DFDED4] text-[#161615] shrink-0"
                  aria-label="Buka Menu Navigasi"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
                <div className="relative flex-1">
                  <svg className="w-4 h-4 text-[#6E6D68] absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (mainView === 'lab' && e.target.value.trim()) setMainView('board');
                    }}
                    placeholder="Cari materi, rumus, bitwise, atau soal..."
                    className="w-full bg-transparent hover:bg-white/50 focus:bg-white rounded-xl pl-9 pr-8 py-2 text-sm text-[#161615] placeholder-[#787770] border border-transparent focus:border-[#D5D4C8] focus:outline-none transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#E2E1D6] text-[#161615] flex items-center justify-center text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Right: Actions (Scrollable on small mobile) */}
              <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                <button
                  onClick={cycleSortOrder}
                  className="shrink-0 min-h-[40px] px-3 py-2 rounded-xl text-[13px] font-medium text-[#3D3D3A] bg-white/40 hover:bg-white/80 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-[#161615]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
                  </svg>
                  <span>
                    Sort by: {sortOrder === 'DEFAULT' ? 'Kurikulum' : sortOrder === 'UNMASTERED' ? 'Belum Paham' : 'Sudah Paham'}
                  </span>
                </button>

                <button
                  onClick={cycleStatusFilter}
                  className="shrink-0 min-h-[40px] px-3 py-2 rounded-xl text-[13px] font-medium text-[#3D3D3A] bg-white/40 hover:bg-white/80 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-[#161615]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                  <span>
                    Filters: {statusFilter === 'ALL' ? 'Semua' : statusFilter === 'UNMASTERED' ? 'Belum Paham' : statusFilter === 'MASTERED' ? 'Sudah Paham' : 'Kunci Terbuka'}
                  </span>
                </button>

                <button
                  onClick={toggleExpandAll}
                  className="shrink-0 min-h-[40px] px-3 py-2 rounded-xl text-[13px] font-medium text-[#3D3D3A] bg-white/40 hover:bg-white/80 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-[#161615]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <span>{allExpandedMode ? 'Tutup Semua Kunci' : 'Buka Semua Kunci'}</span>
                </button>

                <button
                  onClick={() => setFlashcardOpen(true)}
                  className="shrink-0 min-h-[40px] px-4 py-2.5 rounded-xl text-[13px] font-semibold bg-[#161615] hover:bg-[#2B2B29] text-white shadow-sm transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                  </svg>
                  <span>Mode Flashcard</span>
                </button>
              </div>
            </div>

            {/* 4 Analytics Widgets Row */}
            <div className="grid grid-cols-12 gap-5 sm:gap-6 items-end pt-1">
              {/* Widget 1: Paired Bar Chart */}
              <div className="col-span-12 lg:col-span-4 bg-white/40 lg:bg-transparent p-4 lg:p-0 rounded-2xl">
                <div className="text-[13.5px] font-semibold text-[#161615] mb-3">Distribusi Modul &amp; Pembahasan</div>
                <div className="flex items-end gap-3 h-28">
                  <div className="flex flex-col justify-between h-full text-[11px] font-mono text-[#787770] tabular-nums pb-5 pr-1">
                    <span>30</span>
                    <span>15</span>
                    <span>0</span>
                  </div>
                  <div className="flex-1 grid grid-cols-5 gap-2.5 items-end h-full">
                    {/* Bar 1 */}
                    <div className="flex flex-col items-center h-full justify-end">
                      <div className="flex items-end gap-1 w-full justify-center h-[82%]">
                        <div className="w-3 rounded-t-sm bar-hatched h-[55%]" title="Target Dasar"></div>
                        <div className="w-3 rounded-t-sm bg-[#161615] h-[75%] transition-all duration-300" title="Bagian 1: 15 Konsep"></div>
                      </div>
                      <span className="text-[11px] text-[#6E6D68] mt-1.5 font-medium">Bag 1</span>
                    </div>
                    {/* Bar 2 */}
                    <div className="flex flex-col items-center h-full justify-end">
                      <div className="flex items-end gap-1 w-full justify-center h-[82%]">
                        <div className="w-3 rounded-t-sm bar-hatched h-[68%]" title="Latihan Dasar"></div>
                        <div className="w-3 rounded-t-sm bg-[#161615] h-[95%] transition-all duration-300" title="Bagian 2-3: 19 Soal"></div>
                      </div>
                      <span className="text-[11px] text-[#6E6D68] mt-1.5 font-medium">Bag 2-3</span>
                    </div>
                    {/* Bar 3 */}
                    <div className="flex flex-col items-center h-full justify-end">
                      <div className="flex items-end gap-1 w-full justify-center h-[82%]">
                        <div className="w-3 rounded-t-sm bar-hatched h-[52%]" title="Array & Bilangan"></div>
                        <div className="w-3 rounded-t-sm bg-[#161615] h-[85%] transition-all duration-300" title="Bagian 4-5: 16 Soal"></div>
                      </div>
                      <span className="text-[11px] text-[#6E6D68] mt-1.5 font-medium">Bag 4-5</span>
                    </div>
                    {/* Bar 4 */}
                    <div className="flex flex-col items-center h-full justify-end">
                      <div className="flex items-end gap-1 w-full justify-center h-[82%]">
                        <div className="w-3 rounded-t-sm bar-hatched h-[38%]" title="Modulo & Deret"></div>
                        <div className="w-3 rounded-t-sm bg-[#161615] h-[60%] transition-all duration-300" title="Bagian 6-7: 16 Soal"></div>
                      </div>
                      <span className="text-[11px] text-[#6E6D68] mt-1.5 font-medium">Bag 6-7</span>
                    </div>
                    {/* Bar 5 */}
                    <div className="flex flex-col items-center h-full justify-end">
                      <div className="flex items-end gap-1 w-full justify-center h-[82%]">
                        <div className="w-3 rounded-t-sm bar-hatched h-[78%]" title="Naskah 2026"></div>
                        <div className="w-3 rounded-t-sm bg-[#161615] h-[100%] transition-all duration-300" title="OSN-K 2026: 40 Soal"></div>
                      </div>
                      <span className="text-[11px] text-[#6E6D68] mt-1.5 font-medium">OSN 26</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Widget 2: Semi-Circular Radial Tick Gauge */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col items-center justify-end bg-white/40 lg:bg-transparent p-4 lg:p-0 rounded-2xl">
                <div className="relative w-56 h-28 flex items-end justify-center">
                  <svg viewBox="0 0 220 115" className="w-full h-full overflow-visible">
                    {radialTicks.map((t, idx) => (
                      <line
                        key={idx}
                        x1={t.x1}
                        y1={t.y1}
                        x2={t.x2}
                        y2={t.y2}
                        stroke={t.isFilled ? '#161615' : '#D5D4CA'}
                        strokeWidth={t.isFilled ? '2.2' : '1.6'}
                        strokeLinecap="round"
                      />
                    ))}
                  </svg>
                  <div className="absolute bottom-0 text-center">
                    <div className="font-heading text-3xl font-extrabold text-[#161615] tabular-nums leading-none">
                      {progressPct}%
                    </div>
                    <div className="text-[11.5px] text-[#6E6D68] mt-1">Materi &amp; soal dikuasai</div>
                  </div>
                </div>
              </div>

              {/* Widget 3: Big KPI Counter 1 */}
              <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col justify-between h-28 p-3 sm:p-0 bg-white/40 sm:bg-transparent rounded-2xl">
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[#161615] tabular-nums">
                  {totalVisibleCards}
                </div>
                <button onClick={toggleExpandAll} className="group flex items-center justify-between text-left w-full pt-2">
                  <span className="text-xs text-[#5A5953] leading-snug">Kartu materi<br />&amp; pembahasan</span>
                  <svg className="w-4 h-4 text-[#161615] group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>

              {/* Widget 4: Big KPI Counter 2 */}
              <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col justify-between h-28 p-3 sm:p-0 bg-white/40 sm:bg-transparent rounded-2xl">
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[#161615] tabular-nums">
                  No. 1–40
                </div>
                <button onClick={() => { setMainView('osnk'); setFocusedSubFilter('ALL'); }} className="group flex items-center justify-between text-left w-full pt-2">
                  <span className="text-xs text-[#5A5953] leading-snug">Naskah lengkap<br />OSN-K 2026</span>
                  <svg className="w-4 h-4 text-[#161615] group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* =================================================================== */}
        {/* MAIN CONTENT AREA                                                   */}
        {/* =================================================================== */}
        <main className="flex-1 px-4 sm:px-8 py-6 sm:py-7 max-w-[1440px] w-full mx-auto">
          {/* Active Filter Banner */}
          {hasActiveFilter && (
            <div className="mb-6 px-4 py-3 rounded-2xl bg-[#F7F6F2] border border-[#E6E5E0] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-[#3D3D3A]">
                <span className="w-2 h-2 rounded-full bg-[#161615]"></span>
                <span className="font-medium">
                  Filter Aktif — {[
                    topicFilter !== 'ALL' ? `Topik: ${topicFilter}` : null,
                    statusFilter !== 'ALL' ? `Status: ${statusFilter}` : null,
                    searchQuery ? `Pencarian: "${searchQuery}"` : null,
                  ].filter(Boolean).join(' • ')}
                </span>
              </div>
              <button
                onClick={resetAllFilters}
                className="text-xs font-semibold text-[#161615] underline hover:opacity-75"
              >
                Reset semua filter
              </button>
            </div>
          )}

          {/* VIEW 1: 4-COLUMN KANBAN BOARD */}
          {mainView === 'board' && (
            <div>
              {/* Mobile Quick Column Selector Tabs (Visible on mobile/tablet screens) */}
              <div className="xl:hidden flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none">
                <button
                  onClick={() => setMobileColTab('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
                    mobileColTab === 'all' ? 'bg-[#161615] text-white' : 'bg-[#F2F1E8] text-[#161615] hover:bg-[#E5E4DA]'
                  }`}
                >
                  Semua Kolom ({totalVisibleCards})
                </button>
                <button
                  onClick={() => setMobileColTab('col1')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
                    mobileColTab === 'col1' ? 'bg-[#161615] text-white' : 'bg-[#F2F1E8] text-[#161615] hover:bg-[#E5E4DA]'
                  }`}
                >
                  Materi Inti ({col1Cards.length})
                </button>
                <button
                  onClick={() => setMobileColTab('col2')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
                    mobileColTab === 'col2' ? 'bg-[#161615] text-white' : 'bg-[#F2F1E8] text-[#161615] hover:bg-[#E5E4DA]'
                  }`}
                >
                  Biner &amp; C++ ({col2Cards.length})
                </button>
                <button
                  onClick={() => setMobileColTab('col3')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
                    mobileColTab === 'col3' ? 'bg-[#161615] text-white' : 'bg-[#F2F1E8] text-[#161615] hover:bg-[#E5E4DA]'
                  }`}
                >
                  Bilangan &amp; Deret ({col3Cards.length})
                </button>
                <button
                  onClick={() => setMobileColTab('col4')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
                    mobileColTab === 'col4' ? 'bg-[#161615] text-white' : 'bg-[#F2F1E8] text-[#161615] hover:bg-[#E5E4DA]'
                  }`}
                >
                  OSN-K 2026 ({col4Cards.length})
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
                {/* COLUMN 1: Materi Inti */}
                {(mobileColTab === 'all' || mobileColTab === 'col1') && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-1">
                      <h2 className="font-heading text-[19px] font-bold text-[#161615]">Materi Inti</h2>
                      <button
                        onClick={() => reverseColumn('col1')}
                        className="px-2.5 py-1 rounded-lg border border-[#DCDCD4] bg-white hover:bg-[#F5F4EF] text-xs font-mono font-semibold text-[#161615] tabular-nums flex items-center gap-1 transition-colors"
                        title="Balik urutan kolom ini"
                      >
                        <span>{col1Cards.length}</span>
                        <span className="text-[#787770]">↑↓</span>
                      </button>
                    </div>
                    <div className="space-y-3.5">
                      {col1Cards.length > 0 ? (
                        col1Cards.map(c => renderCard(c, false))
                      ) : (
                        <div className="p-6 rounded-2xl border border-dashed border-[#DCDCD4] text-center text-xs text-[#8C8B84]">
                          Tidak ada kartu pada filter ini
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* COLUMN 2: Biner & Kode C++ */}
                {(mobileColTab === 'all' || mobileColTab === 'col2') && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-1">
                      <h2 className="font-heading text-[19px] font-bold text-[#161615]">Biner &amp; Kode C++</h2>
                      <button
                        onClick={() => reverseColumn('col2')}
                        className="px-2.5 py-1 rounded-lg border border-[#DCDCD4] bg-white hover:bg-[#F5F4EF] text-xs font-mono font-semibold text-[#161615] tabular-nums flex items-center gap-1 transition-colors"
                        title="Balik urutan kolom ini"
                      >
                        <span>{col2Cards.length}</span>
                        <span className="text-[#787770]">↑↓</span>
                      </button>
                    </div>
                    <div className="space-y-3.5">
                      {col2Cards.length > 0 ? (
                        col2Cards.map(c => renderCard(c, false))
                      ) : (
                        <div className="p-6 rounded-2xl border border-dashed border-[#DCDCD4] text-center text-xs text-[#8C8B84]">
                          Tidak ada kartu pada filter ini
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* COLUMN 3: Bilangan & Deret */}
                {(mobileColTab === 'all' || mobileColTab === 'col3') && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-1">
                      <h2 className="font-heading text-[19px] font-bold text-[#161615]">Bilangan &amp; Deret</h2>
                      <button
                        onClick={() => reverseColumn('col3')}
                        className="px-2.5 py-1 rounded-lg border border-[#DCDCD4] bg-white hover:bg-[#F5F4EF] text-xs font-mono font-semibold text-[#161615] tabular-nums flex items-center gap-1 transition-colors"
                        title="Balik urutan kolom ini"
                      >
                        <span>{col3Cards.length}</span>
                        <span className="text-[#787770]">↑↓</span>
                      </button>
                    </div>
                    <div className="space-y-3.5">
                      {col3Cards.length > 0 ? (
                        col3Cards.map(c => renderCard(c, false))
                      ) : (
                        <div className="p-6 rounded-2xl border border-dashed border-[#DCDCD4] text-center text-xs text-[#8C8B84]">
                          Tidak ada kartu pada filter ini
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* COLUMN 4: OSN-K 2026 */}
                {(mobileColTab === 'all' || mobileColTab === 'col4') && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-1">
                      <h2 className="font-heading text-[19px] font-bold text-[#161615]">OSN-K 2026</h2>
                      <button
                        onClick={() => reverseColumn('col4')}
                        className="px-2.5 py-1 rounded-lg border border-[#DCDCD4] bg-white hover:bg-[#F5F4EF] text-xs font-mono font-semibold text-[#161615] tabular-nums flex items-center gap-1 transition-colors"
                        title="Balik urutan kolom ini"
                      >
                        <span>{col4Cards.length}</span>
                        <span className="text-[#787770]">↑↓</span>
                      </button>
                    </div>
                    <div className="space-y-3.5">
                      {col4Cards.length > 0 ? (
                        col4Cards.map(c => renderCard(c, true))
                      ) : (
                        <div className="p-6 rounded-2xl border border-dashed border-[#DCDCD4] text-center text-xs text-[#8C8B84]">
                          Tidak ada kartu pada filter ini
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* VIEW 2: FOCUSED SINGLE-MODULE GRID */}
          {(mainView === 'materi' || mainView === 'latihan' || mainView === 'osnk') && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#EBEAE4]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#787770]">
                    {mainView === 'materi' && 'BAGIAN 1 • PEMETAAN MATERI INTI'}
                    {mainView === 'latihan' && 'BAGIAN 2 S.D. BAGIAN 7 • BANK SOAL LATIHAN'}
                    {mainView === 'osnk' && 'BAGIAN 8 • NASKAH RESMI OSN-K INFORMATIKA 2026'}
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-[#161615] mt-0.5">
                    {mainView === 'materi' && '15 Konsep Fundamental OSN Informatika'}
                    {mainView === 'latihan' && '51 Pembahasan Soal Latihan'}
                    {mainView === 'osnk' && 'Pembahasan Lengkap Soal 1 s.d. Soal 40'}
                  </h2>
                </div>

                {/* Sub-Filters for Latihan & OSN-K */}
                {mainView === 'latihan' && (
                  <div className="flex flex-wrap gap-1.5">
                    {['ALL', 'BAGIAN 2', 'BAGIAN 3', 'BAGIAN 4', 'BAGIAN 5', 'BAGIAN 6', 'BAGIAN 7'].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setFocusedSubFilter(cat)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                          focusedSubFilter === cat
                            ? 'bg-[#161615] text-white'
                            : 'bg-[#F2F1E8] text-[#161615] hover:bg-[#E5E4DA]'
                        }`}
                      >
                        {cat === 'ALL' ? 'Semua Bagian' : cat}
                      </button>
                    ))}
                  </div>
                )}

                {mainView === 'osnk' && (
                  <div className="flex flex-wrap gap-1.5">
                    {['ALL', 'Bagian A', 'Bagian B', 'Bagian C'].map(sub => (
                      <button
                        key={sub}
                        onClick={() => setFocusedSubFilter(sub)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                          focusedSubFilter === sub
                            ? 'bg-[#161615] text-white'
                            : 'bg-[#F2F1E8] text-[#161615] hover:bg-[#E5E4DA]'
                        }`}
                      >
                        {sub === 'ALL' ? 'Semua (Soal 1–40)' : sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                {focusedViewCards.length > 0 ? (
                  focusedViewCards.map(c => renderCard(c, false))
                ) : (
                  <div className="col-span-full p-8 rounded-2xl border border-dashed border-[#DCDCD4] text-center text-sm text-[#787770]">
                    Tidak ditemukan kartu yang sesuai.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* VIEW 3: COMPUTATIONAL LAB & CALCULATORS */}
          {mainView === 'lab' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#EBEAE4]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#787770]">
                    LABORATORIUM INTERAKTIF OSN-K
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-[#161615] mt-0.5">
                    Simulator Bitwise, Aritmatika Modular &amp; Kombinatorika
                  </h2>
                </div>
                <button
                  onClick={() => setMainView('board')}
                  className="self-start px-3.5 py-2 rounded-xl border border-[#DCDCD4] text-xs font-semibold text-[#161615] hover:bg-[#F5F4EF]"
                >
                  ← Kembali ke Papan Utama
                </button>
              </div>

              <div className="grid grid-cols-12 gap-6">
                {/* Calculator 1: Bitwise & Popcount Inspector */}
                <div className="col-span-12 lg:col-span-7 rounded-2xl p-5 sm:p-6 biz-card-light space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#787770]">MODUL 01 • BAGIAN 1 &amp; 2</span>
                      <h3 className="font-heading text-lg font-bold text-[#161615]">Inspektor Register Bitwise &amp; Paritas Popcount</h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-[#F2F1E8] text-xs font-mono font-semibold text-[#161615]">Basis-2</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#5A5953] mb-1">Bilangan A (Desimal)</label>
                      <input
                        type="number"
                        value={bitA}
                        onChange={(e) => setBitA(parseInt(e.target.value, 10) || 0)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCDCD4] bg-[#F9F9F6] font-mono text-sm text-[#161615] tabular-nums focus:outline-none focus:border-[#161615]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#5A5953] mb-1">Bilangan B (Desimal)</label>
                      <input
                        type="number"
                        value={bitB}
                        onChange={(e) => setBitB(parseInt(e.target.value, 10) || 0)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCDCD4] bg-[#F9F9F6] font-mono text-sm text-[#161615] tabular-nums focus:outline-none focus:border-[#161615]"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-medium text-[#5A5953]">Pergeseran k (Shift)</label>
                        <span className="text-[11px] font-mono text-[#8C8B84]">0–31 bit</span>
                      </div>
                      <input
                        type="number"
                        min={0}
                        max={31}
                        value={shiftK}
                        onChange={(e) => setShiftK(Math.max(0, Math.min(31, parseInt(e.target.value, 10) || 0)))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCDCD4] bg-[#F9F9F6] font-mono text-sm text-[#161615] tabular-nums focus:outline-none focus:border-[#161615]"
                      />
                    </div>
                  </div>

                  {/* Quick Shift k Shortcuts */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] font-mono text-[#787770] mr-1">Ubah k:</span>
                    {[1, 2, 3, 4, 5, 8, 16].map(kVal => (
                      <button
                        key={kVal}
                        type="button"
                        onClick={() => setShiftK(kVal)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                          shiftK === kVal
                            ? 'bg-[#161615] text-white font-bold'
                            : 'bg-[#F2F1E8] text-[#161615] hover:bg-[#E5E4DA]'
                        }`}
                      >
                        k={kVal}
                      </button>
                    ))}
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-[#E6E5E0]">
                    <table className="w-full text-left border-collapse font-mono text-xs tabular-nums">
                      <thead>
                        <tr className="bg-[#F2F1E8] text-[#5A5953] border-b border-[#E6E5E0]">
                          <th className="py-2.5 px-3">Operasi</th>
                          <th className="py-2.5 px-3">Desimal</th>
                          <th className="py-2.5 px-3">Representasi Biner</th>
                          <th className="py-2.5 px-3">Catatan / Langkah Perhitungan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EBEAE4]">
                        {bitwiseTableRows.map((r, i) => (
                          <tr key={i}>
                            <td className="py-2 px-3 font-semibold text-[#161615]">{r.op}</td>
                            <td className="py-2 px-3 font-bold text-[#161615]">{r.dec}</td>
                            <td className="py-2 px-3 text-[#5A5953]">{r.bin}</td>
                            <td className="py-2 px-3 text-[#787770]">{r.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      onClick={() => { setBitA(72); setBitB(51); setShiftK(3); }}
                      className="px-3 py-1.5 rounded-lg bg-[#F2F1E8] hover:bg-[#E5E4DA] text-xs font-mono text-[#161615]"
                    >
                      Preset (72 | 51) &gt;&gt; 3
                    </button>
                    <button
                      onClick={() => { setBitA(156); setBitB(89); setShiftK(3); }}
                      className="px-3 py-1.5 rounded-lg bg-[#F2F1E8] hover:bg-[#E5E4DA] text-xs font-mono text-[#161615]"
                    >
                      Preset (156 &amp; 89) &lt;&lt; 3
                    </button>
                    <button
                      onClick={() => { setBitA(2024); setBitB(2025); setShiftK(1); }}
                      className="px-3 py-1.5 rounded-lg bg-[#F2F1E8] hover:bg-[#E5E4DA] text-xs font-mono text-[#161615]"
                    >
                      Soal 33: Thue-Morse (2024, 2025)
                    </button>
                  </div>
                </div>

                {/* Calculator 2: Dark Card Style Number Theory & Modulo */}
                <div className="col-span-12 lg:col-span-5 rounded-2xl p-5 sm:p-6 biz-card-dark flex flex-col justify-between space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono uppercase text-[#A09F98]">MODUL 02 • TEORI BILANGAN</span>
                        <h3 className="font-heading text-lg font-bold text-white">Faktor Prima, FPB/KPK &amp; Eksponen Mod</h3>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-[#262624] border border-[#3A3A37] text-xs font-mono text-white">Fermat</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5">
                      <div>
                        <label className="block text-[11px] text-[#A09F98] mb-1">Bilangan X</label>
                        <input
                          type="number"
                          value={numX}
                          onChange={(e) => setNumX(parseInt(e.target.value, 10) || 1)}
                          className="w-full px-3 py-2 rounded-xl bg-[#262624] border border-[#3A3A37] font-mono text-sm text-white tabular-nums focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-[#A09F98] mb-1">Y / Pangkat</label>
                        <input
                          type="number"
                          value={numY}
                          onChange={(e) => setNumY(parseInt(e.target.value, 10) || 0)}
                          className="w-full px-3 py-2 rounded-xl bg-[#262624] border border-[#3A3A37] font-mono text-sm text-white tabular-nums focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-[#A09F98] mb-1">Modulo M</label>
                        <input
                          type="number"
                          value={numM}
                          onChange={(e) => setNumM(parseInt(e.target.value, 10) || 1)}
                          className="w-full px-3 py-2 rounded-xl bg-[#262624] border border-[#3A3A37] font-mono text-sm text-white tabular-nums focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#222220] border border-[#333330] p-4 font-mono text-xs space-y-2.5 tabular-nums text-[#E6E5E0]">
                      <div className="flex justify-between border-b border-[#333330] pb-1.5">
                        <span>Faktorisasi ({numX})</span>
                        <span className="font-bold text-white">{numberTheoryResult.pfText} ({numberTheoryResult.divs} faktor)</span>
                      </div>
                      <div className="flex justify-between border-b border-[#333330] pb-1.5">
                        <span>FPB &amp; KPK</span>
                        <span className="font-bold text-white">FPB={numberTheoryResult.fpb} | KPK={numberTheoryResult.kpk}</span>
                      </div>
                      <div className="flex justify-between border-b border-[#333330] pb-1.5">
                        <span>Keterbagian 72</span>
                        <span className="font-bold text-white">
                          Mod 8: {numberTheoryResult.divBy8 ? 'Ya' : 'Tidak'} | Mod 9: {numberTheoryResult.divBy9 ? 'Ya' : 'Tidak'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>{numX}^{numY} mod {numM}</span>
                        <span className="font-bold text-[#F2F1E8]">{numberTheoryResult.powMod}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <button
                      onClick={() => { setNumX(5000); setNumY(700); setNumM(67); }}
                      className="px-2.5 py-1.5 rounded-lg bg-[#262624] hover:bg-[#333330] text-xs font-mono text-white"
                    >
                      5000 &amp; 700
                    </button>
                    <button
                      onClick={() => { setNumX(2025); setNumY(15); setNumM(72); }}
                      className="px-2.5 py-1.5 rounded-lg bg-[#262624] hover:bg-[#333330] text-xs font-mono text-white"
                    >
                      Faktor 2025
                    </button>
                    <button
                      onClick={() => { setNumX(260); setNumY(130); setNumM(51); }}
                      className="px-2.5 py-1.5 rounded-lg bg-[#262624] hover:bg-[#333330] text-xs font-mono text-white"
                    >
                      260^130 mod 51
                    </button>
                  </div>
                </div>

                {/* Calculator 3: Derangement (!n) & Bouncing Ball Trajectory */}
                <div className="col-span-12 rounded-2xl p-5 sm:p-6 bg-[#F2F1E8] border border-[#E2E1D6] grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono uppercase text-[#6E6D68]">MODUL 03A • KOMBINATORIKA</span>
                        <h4 className="font-heading text-base font-bold text-[#161615]">Derangement (!n) — Permutasi Tanpa Titik Tetap</h4>
                      </div>
                      <input
                        type="number"
                        min="1"
                        max="12"
                        value={derangeN}
                        onChange={(e) => setDerangeN(parseInt(e.target.value, 10) || 1)}
                        className="w-20 px-3 py-1.5 rounded-xl bg-white border border-[#DCDCD4] font-mono text-sm text-[#161615] tabular-nums"
                      />
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-[#E6E5E0] font-mono text-xs space-y-1 tabular-nums">
                      <div className="font-bold text-[#161615]">!{derangeResult.n} = {derangeResult.val} permutasi</div>
                      <div className="text-[#6E6D68]">Nilai awal: !1=0, !2=1, !3=2, !4=9, !5=44</div>
                    </div>
                  </div>

                  <div className="space-y-3 md:border-l md:border-[#DFDED4] md:pl-6">
                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#6E6D68]">MODUL 03B • DERET GEOMETRI TAK HINGGA</span>
                      <h4 className="font-heading text-base font-bold text-[#161615]">Lintasan Bola Memantul: h * (1 + r) / (1 - r)</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <input
                        type="number"
                        value={ballH}
                        onChange={(e) => setBallH(parseFloat(e.target.value) || 0)}
                        placeholder="Tinggi h"
                        className="px-3 py-1.5 rounded-xl bg-white border border-[#DCDCD4] font-mono text-sm text-[#161615] tabular-nums"
                      />
                      <input
                        type="number"
                        value={ballNum}
                        onChange={(e) => setBallNum(parseFloat(e.target.value) || 0)}
                        placeholder="Pembilang r"
                        className="px-3 py-1.5 rounded-xl bg-white border border-[#DCDCD4] font-mono text-sm text-[#161615] tabular-nums"
                      />
                      <input
                        type="number"
                        value={ballDen}
                        onChange={(e) => setBallDen(parseFloat(e.target.value) || 1)}
                        placeholder="Penyebut r"
                        className="px-3 py-1.5 rounded-xl bg-white border border-[#DCDCD4] font-mono text-sm text-[#161615] tabular-nums"
                      />
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-[#E6E5E0] font-mono text-xs space-y-1 tabular-nums">
                      {ballResult.valid ? (
                        <>
                          <div className="font-bold text-[#161615]">Total Lintasan = {ballResult.total} meter</div>
                          <div className="text-[#6E6D68]">Rumus: {ballResult.h} * (1 + {ballResult.num}/{ballResult.den}) / (1 - {ballResult.num}/{ballResult.den})</div>
                        </>
                      ) : (
                        <div className="text-amber-700">{ballResult.msg}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* =================================================================== */}
      {/* INTERACTIVE FLASHCARD MODAL                                         */}
      {/* =================================================================== */}
      {flashcardOpen && fcDeck.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white border border-[#E6E5E0] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="bg-[#F2F1E8] px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#E5E4DA] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <span className="px-2.5 py-1 rounded-lg bg-[#161615] text-white font-mono text-xs font-semibold tabular-nums shrink-0">
                  {fcIndex + 1} / {fcDeck.length}
                </span>
                <select
                  value={fcDeckSelector}
                  onChange={(e) => setFcDeckSelector(e.target.value)}
                  className="bg-white border border-[#DCDCD4] rounded-xl px-2.5 sm:px-3 py-1.5 text-xs font-medium text-[#161615] focus:outline-none max-w-[190px] sm:max-w-xs truncate"
                >
                  <option value="ALL">Semua Latihan &amp; OSN-K (87 Kartu)</option>
                  <option value="BAGIAN 2">Bagian 2: Biner &amp; Dasar (11)</option>
                  <option value="BAGIAN 3">Bagian 3: Percabangan &amp; Loop (8)</option>
                  <option value="BAGIAN 4">Bagian 4: Loop &amp; Array (8)</option>
                  <option value="BAGIAN 5">Bagian 5: Bilangan &amp; Keterbagian (8)</option>
                  <option value="BAGIAN 6">Bagian 6: Modulo &amp; Perbandingan (7)</option>
                  <option value="BAGIAN 7">Bagian 7: Kombinatorika &amp; Deret (9)</option>
                  <option value="Bagian A">OSN-K 2026 Bagian A (10)</option>
                  <option value="Bagian B">OSN-K 2026 Bagian B (11)</option>
                  <option value="Bagian C">OSN-K 2026 Bagian C (15)</option>
                </select>
                <button
                  onClick={shuffleDeck}
                  className="px-2.5 py-1.5 rounded-xl bg-white border border-[#DCDCD4] hover:bg-[#F7F6F2] text-xs font-medium text-[#161615] shrink-0"
                >
                  Acak
                </button>
              </div>
              <button
                onClick={() => setFlashcardOpen(false)}
                className="w-8 h-8 rounded-xl bg-white border border-[#DCDCD4] flex items-center justify-center text-[#161615] hover:bg-[#F5F4EF] shrink-0"
                aria-label="Tutup Flashcard"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto flex-1">
              {fcDeck[fcIndex] && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg border border-[#DCDCD4] text-xs font-mono font-medium text-[#5A5953]">
                      {fcDeck[fcIndex].badge}
                    </span>
                    <span className="text-xs font-medium text-[#6E6D68]">
                      {mastered.has(fcDeck[fcIndex].id) ? '✓ Sudah Dikuasai' : 'Belum Ditandai'}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#161615]">
                    {fcDeck[fcIndex].title}
                  </h3>

                  <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-[#E6E5E0] font-mono text-xs sm:text-sm text-[#161615] leading-relaxed">
                    {fcDeck[fcIndex].question}
                  </div>

                  {/* Guess Input */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={fcGuess}
                      onChange={(e) => setFcGuess(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleRevealFlashcard();
                        }
                      }}
                      placeholder="Ketik jawaban Anda lalu tekan Enter..."
                      className="flex-1 px-4 py-2.5 rounded-xl border border-[#DCDCD4] font-mono text-sm text-[#161615] focus:outline-none focus:border-[#161615]"
                    />
                    <button
                      onClick={handleRevealFlashcard}
                      className="px-5 py-2.5 rounded-xl bg-[#161615] text-white text-xs font-semibold hover:bg-[#2B2B29] shrink-0 min-h-[44px]"
                    >
                      Buka Kunci Jawaban
                    </button>
                  </div>

                  {fcFeedback && (
                    <div
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono ${
                        fcFeedback.match
                          ? 'bg-[#F2F1E8] text-[#161615] border border-[#DCDCD4]'
                          : 'bg-amber-50 text-amber-900 border border-amber-200'
                      }`}
                    >
                      {fcFeedback.text}
                    </div>
                  )}

                  {/* Revealed Dark Solution */}
                  {fcRevealed && (
                    <div className="rounded-2xl p-5 biz-card-dark space-y-3.5">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#2E2E2B]">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A09F98] block">KUNCI JAWABAN RESMI</span>
                          <span className="font-mono text-lg font-bold text-white tabular-nums">
                            {fcDeck[fcIndex].answer}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => recordFcResult(true)}
                            className="px-3.5 py-1.5 rounded-xl bg-white text-[#161615] text-xs font-semibold hover:bg-[#F2F1E8]"
                          >
                            ✓ Tandai Paham
                          </button>
                          <button
                            onClick={() => recordFcResult(false)}
                            className="px-3.5 py-1.5 rounded-xl bg-[#262624] text-[#D8D7CE] border border-[#3A3A37] text-xs font-semibold hover:bg-[#333330]"
                          >
                            Ulangi Nanti
                          </button>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#D5D4CA] font-semibold flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          ANALISIS &amp; ALASAN MENGAPA JAWABAN TERJADI
                        </span>
                        <p className="text-xs sm:text-sm text-[#D8D7CE] leading-relaxed whitespace-pre-line">
                          {fcDeck[fcIndex].explanation}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-[#F9F9F6] border-t border-[#EBEAE4] flex items-center justify-between gap-2">
              <button
                onClick={prevFlashcard}
                className="px-3 sm:px-4 py-2 rounded-xl border border-[#DCDCD4] bg-white text-xs font-semibold text-[#161615] hover:bg-[#F5F4EF]"
              >
                ← Sebelumnya
              </button>
              <span className="text-[11px] font-mono text-[#787770] hidden sm:inline">
                Pintasan: Enter untuk periksa
              </span>
              <button
                onClick={nextFlashcard}
                className="px-3 sm:px-4 py-2 rounded-xl border border-[#DCDCD4] bg-white text-xs font-semibold text-[#161615] hover:bg-[#F5F4EF]"
              >
                Berikutnya →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* RESET CONFIRMATION MODAL                                            */}
      {/* =================================================================== */}
      {resetModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E6E5E0] rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-xl">
            <h3 className="font-heading text-lg font-bold text-[#161615]">Reset Progres Belajar?</h3>
            <p className="text-xs text-[#6E6D68] leading-relaxed">
              Seluruh tanda penguasaan soal dan materi di browser Anda akan dikembalikan ke 0%.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setResetModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-[#DCDCD4] text-xs font-semibold text-[#161615]"
              >
                Batal
              </button>
              <button
                onClick={confirmResetProgress}
                className="px-4 py-2 rounded-xl bg-[#161615] text-white text-xs font-semibold"
              >
                Ya, Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* TOAST CONTAINER                                                     */}
      {/* =================================================================== */}
      {toastMsg && (
        <div className="fixed bottom-5 right-5 z-50 pointer-events-none">
          <div className="px-4 py-2.5 rounded-xl bg-[#161615] text-white text-xs font-medium shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F2F1E8]"></span>
            <span>{toastMsg}</span>
          </div>
        </div>
      )}
    </div>
  );
}
