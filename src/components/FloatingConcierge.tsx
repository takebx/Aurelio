import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowUp, Calendar } from 'lucide-react';

interface FloatingConciergeProps {
  onOpenBooking: () => void;
}

export const FloatingConcierge: React.FC<FloatingConciergeProps> = ({ onOpenBooking }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#0B0B0B]/90 backdrop-blur-md text-[#F3EFE7] border border-[#B8964F]/40 flex items-center justify-center hover:bg-[#B8964F] hover:text-[#0B0B0B] transition-all shadow-lg"
            aria-label="Voltar ao topo da página"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Concierge Badge */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={onOpenBooking}
        className="group relative flex items-center gap-3 pl-3 pr-4 py-2.5 bg-[#0B0B0B] text-[#F3EFE7] border border-[#B8964F] shadow-[0_12px_40px_rgba(184,150,79,0.35)] rounded-full cursor-pointer hover:bg-[#B8964F] hover:text-[#0B0B0B] transition-all duration-300"
        aria-label="Falar com o Concierge da Maison"
      >
        <div className="w-7 h-7 rounded-full bg-[#B8964F] text-[#0B0B0B] group-hover:bg-[#0B0B0B] group-hover:text-[#B8964F] flex items-center justify-center text-xs font-serif-luxury font-medium transition-colors shrink-0">
          AR
        </div>
        <div className="text-left">
          <p className="text-[10px] font-sans-luxury tracking-[0.22em] uppercase font-semibold leading-tight">
            Concierge Privado
          </p>
          <p className="text-[9px] tracking-wider text-[#E7CB8C] group-hover:text-[#0B0B0B] transition-colors leading-none mt-0.5">
            Agendar Ateliê
          </p>
        </div>
      </motion.button>
    </div>
  );
};
