import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SuitItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  cutoutImg: string;
  fullImg: string;
  panelBg: string;
  shadowIntensity: string;
  tailorNotes: {
    shoulder: string;
    chest: string;
    lapel: string;
    fabric: string;
    stitching: string;
  };
  // Unique physics parameters
  floatDuration: number;
  floatYRange: [number, number];
  floatRotateRange: [number, number];
  floatScaleRange: [number, number];
  parallaxFactor: number;
}

const SUITS_DATA: SuitItem[] = [
  {
    id: 'classic-navy',
    num: '01',
    title: 'THE CLASSIC NAVY',
    subtitle: 'Lã Fria 4 Estações · Corte Romano Clássico',
    cutoutImg: '/assets/img/suit_navy_cutout.png',
    fullImg: '/assets/img/suit_classic_navy.jpg',
    panelBg: 'bg-[#EAE6DE]',
    shadowIntensity: 'rgba(20, 28, 45, 0.28)',
    tailorNotes: {
      shoulder: 'Ombro Estruturado 46.5 cm',
      chest: 'Girotorace 104 cm',
      lapel: 'Lapela Notched 9.0 cm',
      fabric: 'Super 150s Pure Wool (260g)',
      stitching: 'Pesponto AMF 2mm feito à mão'
    },
    floatDuration: 5.6,
    floatYRange: [-14, 12],
    floatRotateRange: [-1.8, 1.4],
    floatScaleRange: [0.99, 1.015],
    parallaxFactor: 24
  },
  {
    id: 'double-breasted',
    num: '02',
    title: 'THE DOUBLE BREASTED',
    subtitle: 'Abotoamento Duplo 4x2 · Veludo de Lã Borgonha',
    cutoutImg: '/assets/img/suit_burgundy_cutout.png',
    fullImg: '/assets/img/suit_double_breasted.jpg',
    panelBg: 'bg-[#F2ECE3]',
    shadowIntensity: 'rgba(45, 12, 18, 0.32)',
    tailorNotes: {
      shoulder: 'Ombro Pagoda 47.0 cm',
      chest: 'Girotorace 106 cm',
      lapel: 'Lapela Peak Larga 11.5 cm',
      fabric: 'Cashmere & Lã Virgem Bordô (340g)',
      stitching: 'Entretela em crina de cavalo inteiriça'
    },
    floatDuration: 7.2,
    floatYRange: [-18, 16],
    floatRotateRange: [1.2, -1.2],
    floatScaleRange: [1.0, 1.03],
    parallaxFactor: 38
  },
  {
    id: 'camel-tweed',
    num: '03',
    title: 'THE CAMEL TWEED',
    subtitle: 'Tweed Herringbone Puro · Bolsos Aplicados',
    cutoutImg: '/assets/img/suit_camel_cutout.png',
    fullImg: '/assets/img/suit_camel_tweed.jpg',
    panelBg: 'bg-[#E5DFD4]',
    shadowIntensity: 'rgba(42, 30, 18, 0.28)',
    tailorNotes: {
      shoulder: 'Spalla Camicia Desestruturada 46.0 cm',
      chest: 'Girotorace 102 cm',
      lapel: 'Lapela Entalhada com Casa Aberta',
      fabric: 'Tweed Fino com Espinha de Peixe (310g)',
      stitching: 'Bolsos chapados com costura dupla'
    },
    floatDuration: 6.4,
    floatYRange: [-12, 15],
    floatRotateRange: [1.6, -1.5],
    floatScaleRange: [0.985, 1.02],
    parallaxFactor: 30
  }
];

export const SartorialFloatingSuits: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSuitId, setActiveSuitId] = useState<string | null>(null);
  const [activePageIndex, setActivePageIndex] = useState<number>(0);

  // Smooth mouse parallax physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 120, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handlePrev = () => {
    setActivePageIndex((prev) => (prev === 0 ? SUITS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePageIndex((prev) => (prev === SUITS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="sartorial-suits"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen py-24 sm:py-28 bg-[#EEEAE1] text-[#0B0B0B] overflow-hidden flex flex-col justify-between select-none border-b border-[#0B0B0B]/10"
      style={{ perspective: '1400px' }}
    >
      {/* 3 ARCHITECTURAL VERTICAL PANELS BACKGROUND (Matching Reference) */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-0">
        {/* Left Column (Cool pale stone) */}
        <div className="col-span-12 sm:col-span-3 bg-[#E9E4DC] border-r border-[#0B0B0B]/5 relative">
          {/* Architectural Line Drawings (Golden ratio guide) */}
          <svg className="absolute inset-0 w-full h-full opacity-30 stroke-[#B8964F]" viewBox="0 0 200 600" fill="none">
            <line x1="20" y1="120" x2="180" y2="120" strokeWidth="0.75" />
            <line x1="40" y1="80" x2="140" y2="400" strokeWidth="0.75" />
            <line x1="140" y1="80" x2="40" y2="400" strokeWidth="0.75" />
            <line x1="20" y1="280" x2="180" y2="280" strokeWidth="0.75" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* Center Column (Clean warm avorio) */}
        <div className="hidden sm:block sm:col-span-5 bg-[#F4EFE6] border-r border-[#0B0B0B]/5 relative">
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-[#0B0B0B]/10" />
        </div>

        {/* Right Column (Warm oatmeal / linen texture with architectural grid) */}
        <div className="hidden sm:block sm:col-span-4 bg-[#E4DDD2] relative overflow-hidden">
          {/* Blueprint Grid Pattern */}
          <div
            className="absolute top-28 right-8 w-44 h-44 opacity-25"
            style={{
              backgroundImage: 'linear-gradient(to right, #0B0B0B 1px, transparent 1px), linear-gradient(to bottom, #0B0B0B 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          />
          <div className="absolute top-44 left-0 w-full h-[1px] bg-[#0B0B0B]/10" />
        </div>
      </div>

      {/* TOP EDITORIAL TITLE STRIP */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full relative z-20 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <span className="w-6 h-[1.5px] bg-[#B8964F]" />
          <span className="text-[10px] sm:text-[11px] font-sans-luxury tracking-[0.35em] uppercase text-[#6E6558] font-medium">
            Architettura Sartoriale · Floating Studies
          </span>
        </motion.div>

        {/* Micro-UX Hint */}
        <div className="text-[10px] font-sans-luxury tracking-[0.25em] uppercase text-[#B8964F] hidden sm:block">
          Mova o cursor para navegar na profundidade
        </div>
      </div>

      {/* MAIN STAGE: THE 3 FLOATING SUITS WITH UNIQUE PHYSICS */}
      <div className="relative w-full flex-1 flex items-center justify-center my-auto px-4 sm:px-8 z-10">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-14 items-center">
          {SUITS_DATA.map((suit, index) => {
            const isSpotlighted = activeSuitId === suit.id;
            const isAnotherSpotlighted = activeSuitId !== null && !isSpotlighted;

            // Unique 3D rotational parallax per suit
            const suitParallaxX = useTransform(smoothMouseX, (val) => val * suit.parallaxFactor * (index === 0 ? -1.2 : index === 1 ? 0.3 : 1.2));
            const suitParallaxY = useTransform(smoothMouseY, (val) => val * (suit.parallaxFactor * 0.8));
            const suitRotateX = useTransform(smoothMouseY, (val) => val * -14);
            const suitRotateY = useTransform(smoothMouseX, (val) => val * 16 * (index === 0 ? -1 : 1));

            return (
              <motion.div
                key={suit.id}
                onClick={() => setActiveSuitId(isSpotlighted ? null : suit.id)}
                className={`relative flex flex-col items-center justify-center cursor-pointer transition-opacity duration-500 ${
                  isAnotherSpotlighted ? 'opacity-35 scale-95' : 'opacity-100'
                }`}
                style={{
                  x: suitParallaxX,
                  y: suitParallaxY,
                  rotateX: suitRotateX,
                  rotateY: suitRotateY,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* FLOATING JACKET CONTAINER */}
                <div className="relative w-full aspect-[3/4] max-w-[340px] flex items-center justify-center">
                  {/* DYNAMIC SHADOW BENEATH: Expands/contracts in counter-phase to levitation */}
                  <motion.div
                    animate={{
                      scale: [0.85, 1.15, 0.85],
                      opacity: [0.35, 0.18, 0.35],
                      filter: ['blur(16px)', 'blur(26px)', 'blur(16px)']
                    }}
                    transition={{
                      duration: suit.floatDuration,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="absolute bottom-4 w-4/5 h-10 rounded-full pointer-events-none transform -translate-y-2"
                    style={{ backgroundColor: suit.shadowIntensity }}
                  />

                  {/* UNIQUE INDEPENDENT LEVITATING JACKET */}
                  <motion.div
                    animate={{
                      y: suit.floatYRange,
                      rotate: suit.floatRotateRange,
                      scale: suit.floatScaleRange
                    }}
                    transition={{
                      duration: suit.floatDuration,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut'
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: suit.floatYRange[0] - 8,
                      transition: { duration: 0.4, ease: 'easeOut' }
                    }}
                    className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none"
                  >
                    <img
                      src={suit.cutoutImg}
                      alt={suit.title}
                      className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(11,11,11,0.18)] select-none transition-all duration-300"
                      loading="eager"
                    />

                    {/* INTERACTIVE SARTORIAL MEASUREMENT CHALK OVERLAY ON SPOTLIGHT */}
                    <AnimatePresence>
                      {isSpotlighted && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4"
                        >
                          {/* Top Collar Tag */}
                          <div className="self-center px-3 py-1 bg-[#0B0B0B]/90 text-[#E7CB8C] text-[9px] font-sans-luxury tracking-[0.25em] uppercase border border-[#B8964F]/40 shadow-xl backdrop-blur-md">
                            {suit.tailorNotes.shoulder}
                          </div>

                          {/* Middle Chest Line */}
                          <div className="w-full flex items-center justify-between text-[9px] font-sans-luxury tracking-widest text-[#B8964F] uppercase">
                            <span className="bg-[#F3EFE7]/90 px-2 py-0.5 border border-[#B8964F]/30">
                              {suit.tailorNotes.lapel}
                            </span>
                            <span className="bg-[#F3EFE7]/90 px-2 py-0.5 border border-[#B8964F]/30">
                              {suit.tailorNotes.chest}
                            </span>
                          </div>

                          {/* Bottom Fabric Badge */}
                          <div className="self-center px-3 py-1 bg-[#F3EFE7]/95 text-[#0B0B0B] text-[9px] font-sans-luxury tracking-[0.2em] uppercase border border-[#0B0B0B]/15 shadow-md">
                            {suit.tailorNotes.fabric}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* BOTTOM EDITORIAL LABEL (Matching Reference: 01 / THE CLASSIC NAVY) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="mt-6 text-center select-none"
                >
                  <p className="font-sans-luxury text-sm sm:text-base font-black tracking-tight text-[#0B0B0B] flex items-center justify-center gap-1.5">
                    <span>{suit.num}</span>
                    <span className="text-[#B8964F] font-normal">/</span>
                  </p>
                  <h3 className="font-sans-luxury text-xs sm:text-sm font-black tracking-[0.14em] uppercase text-[#0B0B0B] mt-0.5">
                    {suit.title.replace(`${suit.num} / `, '')}
                  </h3>
                  <p className="text-[10px] font-sans-luxury tracking-widest text-[#6E6558] mt-1 font-light opacity-80">
                    {suit.subtitle}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* EDITORIAL NAVIGATION CONTROLS & PAGINATION (Matching Reference) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full relative z-20 flex flex-col items-center gap-6">
        {/* Left / Right Chevron Nav Controls */}
        <div className="w-full flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 sm:px-8 pointer-events-none">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-[#0B0B0B]/20 bg-[#F4EFE6]/80 hover:bg-[#0B0B0B] hover:text-[#F3EFE7] hover:border-[#0B0B0B] transition-all duration-300 flex items-center justify-center text-[#0B0B0B] pointer-events-auto cursor-pointer shadow-sm"
            aria-label="Terno anterior"
          >
            <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-[#0B0B0B]/20 bg-[#F4EFE6]/80 hover:bg-[#0B0B0B] hover:text-[#F3EFE7] hover:border-[#0B0B0B] transition-all duration-300 flex items-center justify-center text-[#0B0B0B] pointer-events-auto cursor-pointer shadow-sm"
            aria-label="Próximo terno"
          >
            <ChevronRight className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Minimal Bottom Pagination Dots (Matching Reference) */}
        <div className="flex items-center gap-2.5 pt-4">
          {[0, 1, 2, 3].map((dotIdx) => {
            const isActive = activePageIndex === dotIdx;
            return (
              <button
                key={dotIdx}
                onClick={() => setActivePageIndex(dotIdx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-6 h-1.5 bg-[#0B0B0B]'
                    : 'w-1.5 h-1.5 bg-[#0B0B0B]/30 hover:bg-[#0B0B0B]/60'
                }`}
                aria-label={`Página ${dotIdx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
