import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExploreCollection: () => void;
  onExploreLookbook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollection, onExploreLookbook }) => {
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-driven progress across the Hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 24,
    stiffness: 90,
    mass: 0.5
  });

  // Mouse tilt parallax for extra dimension
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 100 });
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // 1. MODEL SCROLL TRANSFORMATION: Walks forward across the letters as user scrolls
  const modelScrollX = useTransform(smoothProgress, [0, 1], [0, 160]);
  const modelScrollY = useTransform(smoothProgress, [0, 1], [0, 50]);
  const modelScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const modelOpacity = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0.35]);

  // Combined model mouse parallax
  const modelMouseX = useTransform(smoothMouseX, (val) => val * 35);
  const modelMouseY = useTransform(smoothMouseY, (val) => val * 20);

  // 2. AURELIO LETTERS SCROLL TRANSFORMATION: Expands and creates deep cinematic depth
  const lettersScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);
  const lettersY = useTransform(smoothProgress, [0, 1], [0, -50]);
  const lettersOpacity = useTransform(smoothProgress, [0, 0.85, 1], [1, 0.8, 0.2]);
  const lettersMouseX = useTransform(smoothMouseX, (val) => val * -20);
  const lettersMouseY = useTransform(smoothMouseY, (val) => val * -15);

  // 3. EDITORIAL COPY PARALLAX: Fades and drifts smoothly out on scroll
  const topRowY = useTransform(smoothProgress, [0, 0.6], [0, -35]);
  const topRowOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  const bottomRowY = useTransform(smoothProgress, [0, 0.6], [0, 35]);
  const bottomRowOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  // 4. SHADOW DYNAMIC EXPANSION: Follows model walk on scroll
  const shadowX = useTransform(smoothProgress, [0, 1], [0, 160]);
  const shadowScale = useTransform(smoothProgress, [0, 1], [1, 1.3]);
  const shadowOpacity = useTransform(smoothProgress, [0, 1], [0.25, 0.12]);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen min-h-[700px] max-h-[1050px] pt-28 sm:pt-32 pb-8 sm:pb-10 bg-[#F3EFE7] text-[#0B0B0B] overflow-hidden flex flex-col justify-between select-none"
      style={{ perspective: '1200px' }}
    >
      {/* Subtle paper grain texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />

      {/* TOP ROW: EDITORIAL COPY LEFT & ACCENT RIGHT */}
      <motion.div
        style={{ y: topRowY, opacity: topRowOpacity }}
        className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-20 flex justify-between items-start pt-2"
      >
        {/* Left Editorial Copy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-1"
        >
          <p className="text-[10.5px] sm:text-[11.5px] font-sans-luxury tracking-[0.38em] uppercase font-semibold text-[#0B0B0B] leading-tight">
            FASHION
            <br />
            THAT MOVES
            <br />
            WITH YOU.
          </p>
          <div className="w-8 h-[1px] bg-[#0B0B0B]/50 mt-1.5" />
        </motion.div>

        {/* Right Subtle Pill Indicator */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden sm:block text-right"
        >
          <span className="text-[10px] font-sans-luxury tracking-[0.32em] uppercase text-[#B8964F] font-medium">
            Collezione Inverno · Roma
          </span>
        </motion.div>
      </motion.div>

      {/* CENTER STAGE: COLOSSAL "AURELIO" LETTERS + DYNAMIC SCROLLING MODEL */}
      <div className="relative w-full flex-1 flex items-center justify-center my-auto min-h-0">
        {/* LAYER 1: Giant Colossal "AURELIO" typography in background with scroll depth */}
        <motion.div
          style={{
            scale: lettersScale,
            y: lettersY,
            opacity: lettersOpacity,
            x: lettersMouseX
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <h1 className="font-sans-luxury font-black tracking-[-0.04em] text-[#0B0B0B] text-[20vw] sm:text-[21vw] leading-none text-center select-none w-full px-2 transition-transform duration-75">
            AURELIO
          </h1>
        </motion.div>

        {/* LAYER 2: High-Fashion Model Walking Across the Screen with Scroll */}
        <motion.div
          style={{
            x: modelScrollX,
            y: modelScrollY,
            scale: modelScale,
            opacity: modelOpacity
          }}
          className="relative z-10 flex items-center justify-center h-full max-h-[58vh] sm:max-h-[62vh] w-full max-w-4xl px-4 pointer-events-none"
        >
          <motion.div
            style={{
              x: modelMouseX,
              y: modelMouseY
            }}
            className="relative h-full flex items-center justify-center"
          >
            {/* Dynamic Ambient Floor Shadow tracking movement */}
            <motion.div
              style={{
                scaleX: shadowScale,
                opacity: shadowOpacity
              }}
              className="absolute bottom-2 inset-x-8 h-8 bg-black blur-lg rounded-full transform scale-y-50"
            />

            {/* Model Cutout Image */}
            <motion.img
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
              src="/assets/img/hero_model_cutout.png"
              alt="Modelo de alta-costura Aurelio Roma vestindo sobretudo de lã e alfaiataria em movimento"
              className="h-full w-auto max-h-[56vh] sm:max-h-[60vh] object-contain filter drop-shadow-[0_16px_30px_rgba(11,11,11,0.2)]"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM ROW: ACTIONS LEFT + SCROLL INDICATOR CENTER + NEW COLLECTION RIGHT */}
      <motion.div
        style={{ y: bottomRowY, opacity: bottomRowOpacity }}
        className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-20 flex items-end justify-between gap-6 pb-2"
      >
        {/* Left Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-5 sm:gap-7"
        >
          {/* Solid Black Button */}
          <button
            onClick={onExploreCollection}
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#0B0B0B] text-[#F3EFE7] font-sans-luxury text-[10.5px] sm:text-[11px] tracking-[0.24em] uppercase font-semibold hover:bg-[#B8964F] hover:text-[#0B0B0B] transition-all duration-300 shadow-md cursor-pointer"
          >
            Ver Coleção
          </button>

          {/* Text link with underline */}
          <button
            onClick={onExploreLookbook}
            className="group inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] font-sans-luxury tracking-[0.22em] uppercase font-semibold text-[#0B0B0B] hover:text-[#B8964F] transition-colors cursor-pointer py-1 relative"
          >
            <span>Explorar Novidades</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-[#0B0B0B] group-hover:bg-[#B8964F] transition-colors" />
          </button>
        </motion.div>

        {/* Center Animated Scroll Prompt */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden md:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={onExploreLookbook}
        >
          <span className="text-[9px] font-sans-luxury tracking-[0.3em] uppercase text-[#6E6558]">
            Role para Explorar
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#B8964F]" />
        </motion.div>

        {/* Right Editorial Stamp: "NOVA COLEÇÃO 2026" */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-right"
        >
          <div className="text-[10px] sm:text-[11px] font-sans-luxury tracking-[0.28em] uppercase text-[#0B0B0B] leading-tight font-medium">
            <p>NOVA</p>
            <p>COLEÇÃO</p>
            <p className="text-xs sm:text-sm font-semibold mt-0.5">2026</p>
          </div>
          <div className="w-10 h-[1.5px] bg-[#0B0B0B] mt-1.5 ml-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};
