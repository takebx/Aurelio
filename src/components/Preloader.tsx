import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Automatically fade out preloader after 1.4s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="fixed inset-0 z-50 bg-[#0B0B0B] text-[#F3EFE7] flex flex-col items-center justify-center select-none"
          aria-hidden="true"
        >
          <div className="text-center flex flex-col items-center">
            {/* Monogram drawing */}
            <svg viewBox="0 0 120 120" className="w-24 h-24 text-[#B8964F]">
              <motion.circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              />
              <motion.text
                x="60"
                y="72"
                textAnchor="middle"
                className="font-serif-luxury text-3xl fill-[#F3EFE7] font-normal"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                AR
              </motion.text>
            </svg>

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-6"
            >
              <h1 className="font-serif-luxury text-xl tracking-[0.4em] uppercase text-[#F3EFE7]">
                AURELIO
              </h1>
              <p className="text-[9px] font-sans-luxury tracking-[0.6em] text-[#B8964F] uppercase mt-1">
                ROMA · DAL 1962
              </p>
            </motion.div>

            {/* Progress rail */}
            <div className="w-32 h-[1px] bg-white/20 mt-8 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                className="w-full h-full bg-[#B8964F]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
