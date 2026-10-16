import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface ToastMessage {
  id: string;
  text: string;
}

interface ToastProps {
  toasts: ToastMessage[];
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts }) => {
  return (
    <div
      className="fixed left-1/2 bottom-8 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none"
      aria-live="polite"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="px-6 py-3.5 bg-[#0B0B0B] text-[#F3EFE7] border border-[#B8964F]/40 shadow-2xl flex items-center gap-3 text-[11px] font-sans-luxury tracking-[0.2em] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#B8964F] animate-pulse" />
            <span>{toast.text}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
