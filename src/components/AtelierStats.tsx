import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Sparkles, MapPin } from 'lucide-react';

const STATS = [
  {
    num: '1962',
    label: 'Ano de Fundação',
    desc: 'Seis décadas ininterruptas de corte e costura artesanal em Roma.'
  },
  {
    num: '120',
    label: 'Mestres Artesãos',
    desc: 'Cada criação confiada a artesãos com décadas de formação.'
  },
  {
    num: '8',
    label: 'Boutiques Privadas',
    desc: 'Ateliês em Roma, Milão, Paris, Genebra e Nova York.'
  },
  {
    num: '100%',
    label: 'Manufatura na Itália',
    desc: 'Certificação de origem toscana, lombarda e romana pura.'
  }
];

export const AtelierStats: React.FC = () => {
  return (
    <section id="atelier" className="py-24 sm:py-32 bg-[#EAE4D8] text-[#0B0B0B] border-y border-[#0B0B0B]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center justify-center gap-3 text-[11px] font-sans-luxury tracking-[0.35em] uppercase text-[#B8964F] mb-4">
          <span className="w-8 h-[1px] bg-[#B8964F]" />
          <span>O Ateliê e Tradição</span>
          <span className="w-8 h-[1px] bg-[#B8964F]" />
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#0B0B0B] max-w-2xl mx-auto">
          Feito à mão, <span className="italic text-[#B8964F]">em Roma</span>.
        </h2>

        <p className="mt-4 text-xs sm:text-sm text-[#6E6558] font-sans-luxury tracking-wide max-w-xl mx-auto leading-relaxed">
          Sem linhas de montagem industriais. A cada temporada, um número estritamente limitado de encomendas é aceito pela Maison.
        </p>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 bg-[#F3EFE7] border border-[#0B0B0B]/10 flex flex-col justify-between text-left group hover:border-[#B8964F] hover:shadow-lg transition-all duration-300"
            >
              <div>
                <span className="font-serif-luxury text-5xl sm:text-6xl font-normal text-[#0B0B0B] group-hover:text-[#B8964F] transition-colors tabular-nums">
                  {stat.num}
                </span>
                <h3 className="mt-4 text-xs font-sans-luxury tracking-[0.25em] uppercase text-[#0B0B0B] font-medium">
                  {stat.label}
                </h3>
              </div>
              <p className="mt-4 text-xs text-[#6E6558] font-sans-luxury leading-relaxed border-t border-[#0B0B0B]/10 pt-4">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Craftsmanship Guarantee Strip */}
        <div className="mt-16 pt-8 border-t border-[#0B0B0B]/10 flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-xs font-sans-luxury tracking-widest uppercase text-[#6E6558]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B8964F]" />
            <span>Garantia Vitalícia de Costura</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#B8964F]" />
            <span>Certificado de Autenticidade Numerado</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#B8964F]" />
            <span>Entrega Segurada com Rastreio VIP</span>
          </div>
        </div>
      </div>
    </section>
  );
};
