import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Product } from '../types/store';
import { formatEuro } from '../utils/cart';
import { ArrowLeft, ArrowRight, Sparkles, Plus, Eye, ChevronRight } from 'lucide-react';

interface FlowMovementProps {
  products: Product[];
  onAddToCart: (product: Product, size?: string | null) => void;
  onQuickView: (product: Product) => void;
  onOpenBooking: () => void;
}

interface FlowPiece {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  cat: string;
  price: number;
  origin: string;
  material: string;
  hours: number;
  desc: string;
  image: string;
}

const FLOW_PIECES: FlowPiece[] = [
  {
    id: 'pulo-cashmere-avorio',
    num: '01',
    title: 'Pulôver Cashmere & Camisa Pura',
    subtitle: 'Malharia de Biella & Algodão Egípcio',
    cat: 'Malharia Nobre',
    price: 1250,
    origin: 'Biella, Norte da Itália',
    material: '100% Cashmere 2 Fios + Popeline 120s',
    hours: 22,
    desc: 'Toque aveludado com meio zíper forjado em latão fosco e colarinho clássico aberto.',
    image: '/assets/img/piece_cashmere_knit.jpg'
  },
  {
    id: 'calca-pregas-beige',
    num: '02',
    title: 'Calça Alfaiatada com Prega & Cinto',
    subtitle: 'Lã Fria Quatro Estações & Couro Toscano',
    cat: 'Alfaiataria Inferior',
    price: 890,
    origin: 'Roma & Florença',
    material: 'Lã Super 150s & Couro Genuíno Curtido',
    hours: 20,
    desc: 'Prega dupla clássica, caimento fluido e cinto toscano em couro conhaque.',
    image: '/assets/img/piece_pleated_trousers.jpg'
  },
  {
    id: 'oxford-brunito',
    num: '03',
    title: 'Sapato Oxford Brunito',
    subtitle: 'Costura Blake Rapid & Pátina Manual',
    cat: 'Calçados Sartoriais',
    price: 920,
    origin: 'Distrito de Marche',
    material: 'Couro de Bezerro Pleno & Solado Triplo',
    hours: 26,
    desc: 'Semi-brogue polido à mão com ceras botânicas e alma de faia no arco plantar.',
    image: '/assets/img/piece_oxford_shoes.jpg'
  },
  {
    id: 'relogio-aurelio-classic',
    num: '04',
    title: 'Relógio Mecânico Clássico',
    subtitle: 'Aço 316L, Safira & Couro de Bezerro',
    cat: 'Alta Relojoaria',
    price: 680,
    origin: 'Genebra & Roma',
    material: 'Aço Cirúrgico, Cristal de Safira e Couro',
    hours: 32,
    desc: 'Mostrador esmaltado marfim, marcadores romanos aplicados e pulseira manual.',
    image: '/assets/img/piece_luxury_watch.jpg'
  },
  {
    id: 'abito-doppiopetto-notte',
    num: '05',
    title: 'Terno Doppiopetto Blu Notte',
    subtitle: 'Entretela de Crina & Botões em Ouro 24k',
    cat: 'Alta Sartoria',
    price: 3200,
    origin: 'Via dei Condotti, Roma',
    material: '100% Lã Virgem Super 160s',
    hours: 64,
    desc: 'Transpassado 6x2 naval com lapela de lança de 11 cm e botões forjados a fogo.',
    image: '/assets/img/piece_suit_navy.jpg'
  },
  {
    id: 'abito-salvia-nobile',
    num: '06',
    title: 'Terno Salvia Nobile',
    subtitle: 'Lã & Seda com Ombro Napolitano',
    cat: 'Alta Sartoria',
    price: 2850,
    origin: 'Nápoles, Itália',
    material: '85% Lã Virgem · 15% Seda Pura',
    hours: 52,
    desc: 'Estrutura leve com ombro suave camicia e bolsos aplicados chapados.',
    image: '/assets/img/piece_suit_green.jpg'
  }
];

export const FlowMovementSection: React.FC<FlowMovementProps> = ({
  products,
  onAddToCart,
  onQuickView,
  onOpenBooking
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Scroll binding for sticky track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  // Calculate horizontal shift: translate horizontally across all pieces
  // Total cards = 6. Each card width + gap approx 420px.
  const x = useTransform(smoothProgress, [0, 1], ['0%', '-68%']);

  // Update active index based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const idx = Math.min(FLOW_PIECES.length - 1, Math.floor(latest * FLOW_PIECES.length));
      setActiveIdx(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToPiece = (index: number) => {
    if (!containerRef.current) return;
    const totalScrollable = containerRef.current.scrollHeight - window.innerHeight;
    const targetScroll = containerRef.current.offsetTop + (index / (FLOW_PIECES.length - 1)) * totalScrollable;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const currentPiece = FLOW_PIECES[activeIdx];

  const handleAddPiece = (pieceId: string) => {
    const match = products.find((p) => p.id === pieceId);
    if (match) {
      onAddToCart(match, match.sizes ? match.sizes[0] : null);
    }
  };

  const handleQuickView = (pieceId: string) => {
    const match = products.find((p) => p.id === pieceId);
    if (match) {
      onQuickView(match);
    }
  };

  return (
    <section
      ref={containerRef}
      id="flow-movement"
      className="relative h-[360vh] bg-[#F3EFE7] text-[#0B0B0B] select-none"
    >
      {/* STICKY VIEWPORT CONTAINER */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-6 sm:pb-8">
        {/* Subtle texture background */}
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-25" />

        {/* TOP HUD: SECTION TITLE & PROGRESS RAIL */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#0B0B0B]/10 pb-4">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-sans-luxury tracking-[0.38em] uppercase text-[#B8964F] mb-1.5">
              <span className="w-6 h-[1px] bg-[#B8964F]" />
              <span>Flow Movement · Anatomia Sartorial</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B0B0B] tracking-tight">
              A Transição de Cada Peça
            </h2>
          </div>

          {/* Stepper Dots & Active Count */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              {FLOW_PIECES.map((piece, i) => (
                <button
                  key={piece.id}
                  onClick={() => scrollToPiece(i)}
                  className={`group relative p-1.5 transition-all cursor-pointer`}
                  aria-label={`Ver peça ${piece.num}`}
                >
                  <span
                    className={`block transition-all duration-300 ${
                      activeIdx === i
                        ? 'w-7 h-1.5 bg-[#B8964F]'
                        : 'w-2 h-1.5 bg-[#0B0B0B]/20 group-hover:bg-[#0B0B0B]/50'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="text-right">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#0B0B0B] tabular-nums">
                {currentPiece.num}
              </span>
              <span className="text-xs font-sans-luxury tracking-widest text-[#6E6558] ml-1">
                / 06
              </span>
            </div>
          </div>
        </div>

        {/* CENTER HORIZONTAL KINETIC FLOW TRACK */}
        <div className="relative w-full flex-1 flex items-center my-auto overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-center gap-8 sm:gap-12 pl-6 sm:pl-16 pr-24 w-max"
          >
            {FLOW_PIECES.map((piece, idx) => {
              const isCurrent = activeIdx === idx;
              return (
                <div
                  key={piece.id}
                  className={`group relative flex-none w-[82vw] sm:w-[420px] md:w-[480px] transition-all duration-700 ease-out ${
                    isCurrent ? 'scale-100 opacity-100' : 'scale-95 opacity-75'
                  }`}
                >
                  {/* Card Container */}
                  <div className="bg-[#EAE4D8] border border-[#0B0B0B]/15 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col">
                    {/* Visual Aspect Ratio */}
                    <div className="relative aspect-[4/5] bg-[#221B16] overflow-hidden group/img">
                      <img
                        src={piece.image}
                        alt={piece.title}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/img:scale-106 pointer-events-none"
                        loading="lazy"
                      />

                      {/* Ambient Shadow Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                      {/* Big Floating Roman Number in Background of Card */}
                      <span className="absolute top-4 right-4 font-serif-luxury text-4xl sm:text-5xl text-white/20 font-light select-none pointer-events-none">
                        {piece.num}
                      </span>

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                        <span className="px-3 py-1 bg-[#0B0B0B]/90 backdrop-blur-md text-[#F3EFE7] text-[9.5px] font-sans-luxury tracking-[0.24em] uppercase border border-white/10">
                          {piece.cat}
                        </span>
                        <span className="px-2.5 py-0.5 bg-[#B8964F] text-[#0B0B0B] text-[9px] font-sans-luxury tracking-widest uppercase font-semibold">
                          {piece.hours}h de Ateliê
                        </span>
                      </div>

                      {/* Bottom Floating Info inside Image */}
                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-[#F3EFE7] transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                        <p className="text-[10px] font-sans-luxury tracking-[0.3em] uppercase text-[#E7CB8C]">
                          Origem: {piece.origin}
                        </p>
                        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal leading-tight mt-1 text-[#F3EFE7]">
                          {piece.title}
                        </h3>
                        <p className="text-xs text-white/80 font-sans-luxury font-light mt-1.5 line-clamp-2">
                          {piece.desc}
                        </p>
                      </div>
                    </div>

                    {/* Footer Details Strip */}
                    <div className="p-5 sm:p-6 bg-[#F3EFE7] flex items-center justify-between border-t border-[#0B0B0B]/10">
                      <div>
                        <span className="text-[10px] font-sans-luxury tracking-widest uppercase text-[#6E6558] block">
                          Preço da Peça
                        </span>
                        <span className="font-sans-luxury text-xl font-medium text-[#0B0B0B] tabular-nums">
                          {formatEuro(piece.price)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuickView(piece.id)}
                          className="w-10 h-10 border border-[#0B0B0B]/20 hover:border-[#0B0B0B] text-[#0B0B0B] flex items-center justify-center transition-colors cursor-pointer"
                          aria-label={`Ver detalhes de ${piece.title}`}
                          title="Visualização Rápida"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleAddPiece(piece.id)}
                          className="px-4 py-2.5 bg-[#0B0B0B] text-[#F3EFE7] hover:bg-[#B8964F] hover:text-[#0B0B0B] text-xs font-sans-luxury tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Adicionar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* BOTTOM HUD: SCROLL INVITATION & DIRECT CONTROLS */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          {/* Scroll instruction indicator */}
          <div className="flex items-center gap-3 text-xs font-sans-luxury tracking-[0.22em] uppercase text-[#6E6558]">
            <span className="w-2 h-2 rounded-full bg-[#B8964F] animate-pulse" />
            <span>Role para avançar o fluxo · 06 criações artesanais</span>
          </div>

          {/* Previous / Next Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToPiece(Math.max(0, activeIdx - 1))}
              disabled={activeIdx === 0}
              className="w-10 h-10 border border-[#0B0B0B]/20 flex items-center justify-center text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-[#F3EFE7] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              aria-label="Peça anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToPiece(Math.min(FLOW_PIECES.length - 1, activeIdx + 1))}
              disabled={activeIdx === FLOW_PIECES.length - 1}
              className="w-10 h-10 border border-[#0B0B0B]/20 flex items-center justify-center text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-[#F3EFE7] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              aria-label="Próxima peça"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenBooking}
              className="ml-3 px-5 py-2.5 bg-[#B8964F] text-[#0B0B0B] text-xs font-sans-luxury tracking-[0.2em] uppercase font-semibold hover:bg-[#0B0B0B] hover:text-[#F3EFE7] transition-all cursor-pointer shadow-sm"
            >
              Agendar no Ateliê
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
