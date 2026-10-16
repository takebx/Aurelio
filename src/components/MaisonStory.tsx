import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Scissors, Clock } from 'lucide-react';

interface MaisonStoryProps {
  onOpenBooking: () => void;
}

export const MaisonStory: React.FC<MaisonStoryProps> = ({ onOpenBooking }) => {
  return (
    <section id="maison" className="py-24 sm:py-32 bg-[#F3EFE7] text-[#0B0B0B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Artwork with floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3.2] bg-[#EAE4D8] overflow-hidden rounded-none shadow-[0_20px_50px_rgba(11,11,11,0.08)] group">
              <img
                src="/assets/img/atelier.svg"
                alt="Interior do ateliê Aurelio na Via dei Condotti em Roma"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Artisanal Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0B0B0B] text-[#F3EFE7] p-4 sm:p-5 border border-[#B8964F]/30 shadow-2xl flex items-center gap-4 max-w-[260px]"
            >
              <div className="w-10 h-10 rounded-full bg-[#B8964F]/15 flex items-center justify-center text-[#B8964F] shrink-0">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif-luxury text-base leading-tight font-medium text-[#E7CB8C]">
                  41 Mãos Artesãs
                </p>
                <p className="text-[10px] font-sans-luxury text-[#F3EFE7]/70 uppercase tracking-widest mt-0.5">
                  Por cada peça criada
                </p>
              </div>
            </motion.div>

            <p className="mt-8 text-[11px] font-sans-luxury tracking-[0.28em] uppercase text-[#6E6558]">
              O Ateliê da Via dei Condotti · Roma, Itália
            </p>
          </motion.div>

          {/* Right Column: Editorial Text & Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-[11px] font-sans-luxury tracking-[0.35em] uppercase text-[#B8964F] mb-4">
              <span className="w-8 h-[1px] bg-[#B8964F]" />
              <span>A História da Casa</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] tracking-tight text-[#0B0B0B]">
              Sessenta anos de{' '}
              <span className="italic text-[#B8964F]">gestos precisos</span>.
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#3A362F] font-sans-luxury font-light leading-relaxed">
              <p>
                Em 1962, Giulio Aurelio fundou uma pequena sala de corte de três por quatro metros perto do Panteon. Não havia vitrines ostensivas nem placas douradas — apenas uma pesada tesoura de alfaiate sobre a mesa de carvalho e a firme recusa da costura apressada.
              </p>
              <p>
                Hoje, cento e vinte artesãos dividem o mesmo edifício histórico em Roma. Cada bolsa atravessa quarenta e uma mãos distintas antes de merecer o monograma impresso. Cada sobretudo repousa quarenta e oito horas entre duas prensas de madeira pura para que a lã aprenda o caimento exato dos ombros.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 pl-6 border-l-2 border-[#B8964F] py-1">
              <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#0B0B0B] leading-snug">
                “O verdadeiro luxo não é o que grita nem o que cintila. É o que permanece silenciosamente através do tempo.”
              </p>
              <cite className="block mt-3 text-[11px] font-sans-luxury tracking-[0.25em] uppercase text-[#6E6558] not-italic">
                — Giulio Aurelio, Roma 1962
              </cite>
            </blockquote>

            <div className="mt-8 pt-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-[11px] font-sans-luxury tracking-[0.24em] uppercase text-[#0B0B0B] border-b border-[#0B0B0B] pb-1 hover:text-[#B8964F] hover:border-[#B8964F] transition-colors"
              >
                <span>Conhecer a visita privada ao ateliê</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
