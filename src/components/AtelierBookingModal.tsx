import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, MapPin, Check, Sparkles, User, Mail, Phone } from 'lucide-react';

interface AtelierBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AtelierBookingModal: React.FC<AtelierBookingModalProps> = ({
  isOpen,
  onClose
}) => {
  const [boutique, setBoutique] = useState('Roma — Via dei Condotti 21');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00');
  const [service, setService] = useState('Sartoria Sob Medida');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleDone = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
          className="relative w-full max-w-xl bg-[#F3EFE7] text-[#0B0B0B] border border-[#B8964F]/30 p-6 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Agendamento Privado no Ateliê"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full hover:bg-black/5 flex items-center justify-center text-[#0B0B0B] transition-colors"
            aria-label="Fechar agendamento"
          >
            <X className="w-5 h-5" />
          </button>

          {!confirmed ? (
            <div>
              <div className="pb-4 border-b border-[#0B0B0B]/10">
                <div className="text-[10px] font-sans-luxury tracking-[0.3em] uppercase text-[#B8964F]">
                  Atendimento Exclusivo
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#0B0B0B] mt-1 font-normal">
                  Visita Privada ao Ateliê
                </h3>
                <p className="mt-2 text-xs text-[#6E6558] font-sans-luxury leading-relaxed">
                  Agende uma consulta presencial de corte, medidas e prova com nossos mestres artesãos.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Boutique Selection */}
                <div>
                  <label className="block text-[10.5px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mb-1">
                    Boutique Maison *
                  </label>
                  <select
                    value={boutique}
                    onChange={(e) => setBoutique(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-[#0B0B0B]/20 text-xs font-sans-luxury tracking-wide focus:border-[#B8964F] focus:outline-none"
                  >
                    <option value="Roma — Via dei Condotti 21">Roma — Via dei Condotti 21 (Flagship)</option>
                    <option value="Milão — Via Montenapoleone 8">Milão — Via Montenapoleone 8</option>
                    <option value="Florença — Via de' Tornabuoni 14">Florença — Via de' Tornabuoni 14</option>
                    <option value="Paris — Rue du Faubourg Saint-Honoré">Paris — Faubourg Saint-Honoré</option>
                    <option value="Nova York — Madison Avenue 740">Nova York — Madison Avenue 740</option>
                  </select>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-[10.5px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mb-1">
                    Experiência Solicitada *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-[#0B0B0B]/20 text-xs font-sans-luxury tracking-wide focus:border-[#B8964F] focus:outline-none"
                  >
                    <option value="Sartoria Sob Medida">Sartoria Sob Medida (Casacos & Ternos)</option>
                    <option value="Pelletteria Personalizada">Pelletteria Personalizada (Bolsas e Couro Gravado)</option>
                    <option value="Apresentação Privada da Coleção">Apresentação Privada da Coleção Inverno MMXXVI</option>
                    <option value="Alta Perfumaria & Olfativo">Consultoria de Perfumaria & Fragrâncias</option>
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10.5px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mb-1">
                      Data Preferencial *
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#0B0B0B]/20 text-xs font-sans-luxury tracking-wide focus:border-[#B8964F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10.5px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mb-1">
                      Horário (CET) *
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-[#0B0B0B]/20 text-xs font-sans-luxury tracking-wide focus:border-[#B8964F] focus:outline-none"
                    >
                      <option value="10:30">10:30 (Manhã)</option>
                      <option value="11:30">11:30 (Manhã)</option>
                      <option value="14:30">14:30 (Tarde)</option>
                      <option value="16:00">16:00 (Tarde)</option>
                      <option value="17:30">17:30 (Entardecer)</option>
                    </select>
                  </div>
                </div>

                {/* Client Info */}
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[10.5px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mb-1">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nome e Sobrenome"
                      className="w-full px-3 py-2 bg-white border border-[#0B0B0B]/20 text-xs font-sans-luxury tracking-wide focus:border-[#B8964F] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10.5px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        className="w-full px-3 py-2 bg-white border border-[#0B0B0B]/20 text-xs font-sans-luxury tracking-wide focus:border-[#B8964F] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10.5px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mb-1">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+55 11 99999-9999"
                        className="w-full px-3 py-2 bg-white border border-[#0B0B0B]/20 text-xs font-sans-luxury tracking-wide focus:border-[#B8964F] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-4 bg-[#0B0B0B] text-[#F3EFE7] font-sans-luxury text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#B8964F] hover:text-[#0B0B0B] transition-all duration-300 shadow-md"
                >
                  Solicitar Agendamento Privado
                </button>
              </form>
            </div>
          ) : (
            /* Confirmation State */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#B8964F]/20 text-[#B8964F] flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>

              <div className="text-[10px] font-sans-luxury tracking-[0.3em] uppercase text-[#B8964F]">
                Prenotazione Ricevuta
              </div>

              <h3 className="font-serif-luxury text-3xl text-[#0B0B0B] mt-2">
                Esperamos por Você, {name}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#3A362F] font-sans-luxury max-w-md mx-auto leading-relaxed">
                Sua solicitação para <strong className="text-[#0B0B0B]">{service}</strong> na boutique <span className="underline">{boutique}</span> foi recebida. Nosso Concierge pessoal entrará em contato em até 4 horas pelo número <span className="font-mono">{phone}</span>.
              </p>

              <div className="mt-6 p-4 bg-[#EAE4D8] text-xs font-sans-luxury text-[#6E6558] max-w-sm mx-auto border border-[#0B0B0B]/10">
                <p>Horário reservado: {time} (CET)</p>
                <p>Data: {date || 'A combinar com concierge'}</p>
              </div>

              <button
                onClick={handleDone}
                className="mt-8 px-8 py-3.5 bg-[#0B0B0B] text-[#F3EFE7] text-xs font-sans-luxury tracking-widest uppercase hover:bg-[#B8964F] transition-colors"
              >
                Retornar à Maison
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
