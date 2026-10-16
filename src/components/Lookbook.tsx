import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';

const PANELS = [
  {
    id: '01',
    img: '/assets/img/lookbook-01.svg',
    title: 'Il Cappotto',
    desc: 'Lã fiamminga 780g, cinto estruturado com fivela forjada e ombro romano tradicional.',
    quote: null
  },
  {
    id: '02',
    img: '/assets/img/lookbook-02.svg',
    title: 'La Seta',
    desc: 'Tingimento artesanal em pequenos lotes com brilho acetinado sob a luz de Roma.',
    quote: null
  },
  {
    id: '03',
    img: '/assets/img/lookbook-03.svg',
    title: 'Natura Morta',
    desc: 'O objeto como retrato eterno: couro toscano, ouro e sombra escultural.',
    quote: null
  },
  {
    id: '04',
    img: null,
    title: 'O Caderno do Ateliê',
    desc: 'Verão de 1974 · Via dei Condotti',
    quote: '“A moda grita nos palanques efêmeros. A sartoria sussurra nas salas de pedra.”'
  }
];

export const Lookbook: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePanel, setActivePanel] = useState(0);

  const updateScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const max = scrollWidth - clientWidth;
    if (max > 0) {
      const progress = scrollLeft / max;
      setScrollProgress(progress);
      const index = Math.min(PANELS.length - 1, Math.round(progress * (PANELS.length - 1)));
      setActivePanel(index);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    updateScroll();
    return () => {
      el.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  const scrollBy = (offset: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  const scrollToPanel = (index: number) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollTo({ left: index * width, behavior: 'smooth' });
  };

  return (
    <section id="lookbook" className="py-24 sm:py-32 bg-[#0B0B0B] text-[#F3EFE7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-sans-luxury tracking-[0.35em] uppercase text-[#E7CB8C] mb-3">
              <span className="w-8 h-[1px] bg-[#B8964F]" />
              <span>Lookbook Editorial</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal tracking-tight text-[#F3EFE7]">
              Notturno — Inverno MMXXVI
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-2 text-xs font-sans-luxury tracking-[0.2em] text-[#E7CB8C] uppercase">
              <MoveHorizontal className="w-4 h-4" />
              <span>Arraste para explorar</span>
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollBy(-400)}
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-[#B8964F] hover:bg-white/5 transition-colors"
                aria-label="Painel anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollBy(400)}
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-[#B8964F] hover:bg-white/5 transition-colors"
                aria-label="Próximo painel"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Viewport */}
      <div
        ref={scrollRef}
        className="mt-12 overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing pb-8 scrollbar-none select-none"
      >
        <div className="flex items-stretch gap-6 sm:gap-8 px-6 sm:px-8 w-max max-w-none">
          {PANELS.map((panel, idx) => (
            <motion.div
              key={panel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex-none"
            >
              {panel.img ? (
                <div className="w-[78vw] sm:w-[480px] md:w-[540px] flex flex-col group">
                  <div className="relative aspect-[4/5] bg-[#161616] overflow-hidden border border-white/10 group-hover:border-[#B8964F]/50 transition-colors">
                    <img
                      src={panel.img}
                      alt={panel.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 pointer-events-none"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 font-serif-luxury italic text-2xl text-[#E7CB8C]">
                      {panel.id}
                    </div>
                  </div>
                  <div className="pt-5">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif-luxury text-2xl text-[#F3EFE7] font-normal">
                        {panel.title}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-[#F3EFE7]/60 font-sans-luxury tracking-wide leading-relaxed">
                      {panel.desc}
                    </p>
                  </div>
                </div>
              ) : (
                /* Quote Card */
                <div className="w-[78vw] sm:w-[420px] md:w-[460px] h-[calc(100%-48px)] aspect-[4/5] p-8 sm:p-12 border border-[#B8964F]/40 bg-[#141414] flex flex-col justify-between text-center relative overflow-hidden">
                  <div className="text-[10px] font-sans-luxury tracking-[0.35em] uppercase text-[#E7CB8C]">
                    {panel.desc}
                  </div>
                  <blockquote className="my-auto">
                    <p className="font-serif-luxury italic text-2xl sm:text-3xl text-[#F3EFE7] leading-relaxed">
                      {panel.quote}
                    </p>
                    <cite className="block mt-6 text-[10px] font-sans-luxury tracking-[0.3em] uppercase text-[#B8964F] not-italic">
                      Giulio Aurelio
                    </cite>
                  </blockquote>
                  <div className="text-xs text-[#F3EFE7]/40 font-serif-luxury tracking-widest">
                    ROMA · MCMLXXIV
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* FIXED & PERFECTLY CENTERED LUXURY PROGRESS SCROLLBAR */}
      <div className="mt-8 max-w-md mx-auto px-6">
        <div className="flex items-center justify-between text-[11px] font-sans-luxury tracking-[0.25em] text-[#E7CB8C] mb-3">
          <span>01</span>
          <span className="text-xs text-white/50 tracking-widest uppercase">
            Deslize ou clique nos pontos
          </span>
          <span>04</span>
        </div>

        {/* Centered Track Rail */}
        <div className="relative w-full h-[2px] bg-white/15 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 bottom-0 bg-[#E7CB8C] rounded-full"
            style={{
              left: `${scrollProgress * 70}%`,
              width: '30%'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Centered Dots for direct jumping */}
        <div className="flex items-center justify-center gap-6 mt-4">
          {PANELS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToPanel(idx)}
              className={`p-1 transition-all ${
                activePanel === idx ? 'scale-125 text-[#E7CB8C]' : 'text-white/30 hover:text-white/60'
              }`}
              aria-label={`Ir para look ${idx + 1}`}
            >
              <span className={`block w-2 h-2 rounded-full border ${
                activePanel === idx ? 'bg-[#E7CB8C] border-[#E7CB8C]' : 'border-current'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
