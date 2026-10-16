import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreCollection: () => void;
  onExploreLookbook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollection, onExploreLookbook }) => {
  return (
    <section className="relative h-screen min-h-[700px] max-h-[1050px] pt-32 sm:pt-36 pb-8 sm:pb-10 bg-[#F3EFE7] text-[#0B0B0B] overflow-hidden flex flex-col justify-between select-none">
      {/* Subtle paper grain texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />

      {/* TOP ROW: EDITORIAL COPY LEFT & ACCENT RIGHT */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-20 flex justify-between items-start pt-2">
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
      </div>

      {/* CENTER STAGE: COLOSSAL "AURELIO" LETTERS + REAL FASHION MODEL */}
      <div className="relative w-full flex-1 flex items-center justify-center my-auto min-h-0">
        {/* LAYER 1: Giant Colossal "AURELIO" typography in background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <h1 className="font-sans-luxury font-black tracking-[-0.04em] text-[#0B0B0B] text-[20vw] sm:text-[21vw] leading-none text-center select-none w-full px-2">
            AURELIO
          </h1>
        </motion.div>

        {/* LAYER 2: Real High-Fashion Editorial Model Walking in Profile */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
          className="relative z-10 flex items-center justify-center h-full max-h-[58vh] sm:max-h-[62vh] w-full max-w-4xl px-4 pointer-events-none"
        >
          <div className="relative h-full flex items-center justify-center">
            {/* Soft Ambient Floor Shadow */}
            <div className="absolute bottom-2 inset-x-8 h-8 bg-black/20 blur-lg rounded-full transform scale-y-50" />

            {/* Model Cutout Image */}
            <img
              src="/assets/img/hero_model_cutout.png"
              alt="Modelo de alta-costura Aurelio Roma vestindo sobretudo de lã e alfaiataria"
              className="h-full w-auto max-h-[56vh] sm:max-h-[60vh] object-contain filter drop-shadow-[0_12px_24px_rgba(11,11,11,0.15)]"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM ROW: ACTIONS LEFT + NEW COLLECTION RIGHT */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-20 flex items-end justify-between gap-6 pb-2">
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
      </div>
    </section>
  );
};
