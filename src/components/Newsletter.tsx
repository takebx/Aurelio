import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Check, ArrowRight } from 'lucide-react';

interface NewsletterProps {
  onSuccess: (email: string) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    if (!valid) {
      setError('Por favor, informe um endereço de e-mail válido.');
      return;
    }
    setSubmitted(true);
    onSuccess(email);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F3EFE7] text-[#0B0B0B] text-center border-t border-[#0B0B0B]/10">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="inline-flex items-center justify-center gap-3 text-[11px] font-sans-luxury tracking-[0.35em] uppercase text-[#B8964F] mb-4">
          <span className="w-8 h-[1px] bg-[#B8964F]" />
          <span>Convite Privado</span>
          <span className="w-8 h-[1px] bg-[#B8964F]" />
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#0B0B0B]">
          Receba o primeiro convite para o próximo desfile.
        </h2>

        <p className="mt-4 text-xs sm:text-sm text-[#6E6558] font-sans-luxury tracking-wide max-w-lg mx-auto leading-relaxed">
          Sem ruído nem promoções diárias. Apenas duas correspondências solenes por ano, como boas cartas seladas com cera.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto" noValidate>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu.nome@exemplo.com"
                  className="w-full px-4 py-3.5 bg-transparent border-b border-[#0B0B0B]/30 text-xs sm:text-sm font-sans-luxury tracking-wider text-[#0B0B0B] placeholder-[#A39A8B] focus:outline-none focus:border-[#B8964F] transition-colors"
                  aria-label="Seu endereço de e-mail"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#0B0B0B] text-[#F3EFE7] text-xs font-sans-luxury tracking-[0.25em] uppercase font-medium hover:bg-[#B8964F] hover:text-[#0B0B0B] transition-all duration-300 shrink-0 shadow-sm flex items-center justify-center gap-2"
              >
                <span>Inscrever-se</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            {error && (
              <p className="mt-3 text-xs text-[#5C2A2A] font-sans-luxury text-left">
                {error}
              </p>
            )}
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 p-6 bg-[#EAE4D8] border border-[#B8964F]/30 max-w-md mx-auto"
          >
            <div className="w-10 h-10 rounded-full bg-[#B8964F]/20 text-[#B8964F] flex items-center justify-center mx-auto mb-3">
              <Check className="w-5 h-5" />
            </div>
            <p className="font-serif-luxury text-lg text-[#0B0B0B]">
              Grazie mille. Seu nome está registrado.
            </p>
            <p className="text-xs text-[#6E6558] font-sans-luxury mt-1">
              O convite para o desfile outono/inverno chegará na sua caixa postal digital.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
