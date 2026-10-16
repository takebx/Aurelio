import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#0B0B0B] text-[#F3EFE7] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Address */}
          <div className="lg:col-span-2">
            <a href="#top" className="inline-block">
              <span className="font-serif-luxury text-3xl tracking-[0.28em] text-[#F3EFE7]">
                AURELIO
              </span>
              <span className="block font-sans-luxury text-[9px] tracking-[0.45em] text-[#B8964F] mt-1 font-medium">
                ROMA · DAL 1962
              </span>
            </a>
            <p className="mt-6 text-xs text-[#F3EFE7]/60 font-sans-luxury leading-relaxed max-w-sm font-light">
              Maison de alfaiataria e artigos em couro toscano. Sessenta anos preservando a arte manual das oficinas históricas de Roma, Florença e Como.
            </p>
            <div className="mt-6 text-xs text-[#E7CB8C] font-sans-luxury space-y-1">
              <p>Palazzo Aurelio · Via dei Condotti 21</p>
              <p>00187 Roma, Itália</p>
              <p className="pt-2 text-white/50 hover:text-[#B8964F] transition-colors">
                <a href="mailto:maison@aurelio.it">maison@aurelio.it</a>
              </p>
            </div>
          </div>

          {/* Nav: Coleção */}
          <div>
            <h4 className="text-[10.5px] font-sans-luxury tracking-[0.3em] uppercase text-[#B8964F] font-medium mb-4">
              Coleção
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F3EFE7]/70 font-sans-luxury">
              <li><a href="#colecao" className="hover:text-white transition-colors">Bolsas em Couro Trançado</a></li>
              <li><a href="#colecao" className="hover:text-white transition-colors">Calçados & Mocassins Blake</a></li>
              <li><a href="#colecao" className="hover:text-white transition-colors">Sobretudos de Lã Fiamminga</a></li>
              <li><a href="#colecao" className="hover:text-white transition-colors">Vestidos de Noite em Seda</a></li>
              <li><a href="#colecao" className="hover:text-white transition-colors">Alta Perfumaria Romana</a></li>
            </ul>
          </div>

          {/* Nav: A Maison */}
          <div>
            <h4 className="text-[10.5px] font-sans-luxury tracking-[0.3em] uppercase text-[#B8964F] font-medium mb-4">
              A Maison
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F3EFE7]/70 font-sans-luxury">
              <li><a href="#sartorial-suits" className="hover:text-white transition-colors">Architettura Sartoriale</a></li>
              <li><a href="#atelier" className="hover:text-white transition-colors">Os Mestres Artesãos</a></li>
              <li><a href="#colecao" className="hover:text-white transition-colors">Catálogo Exclusivo</a></li>
              <li><a href="#atelier" className="hover:text-white transition-colors">Sustentabilidade & Herança</a></li>
              <li><a href="mailto:maison@aurelio.it" className="hover:text-white transition-colors">Imprensa Internacional</a></li>
            </ul>
          </div>

          {/* Customer Service & Boutiques */}
          <div>
            <h4 className="text-[10.5px] font-sans-luxury tracking-[0.3em] uppercase text-[#B8964F] font-medium mb-4">
              Atendimento VIP
            </h4>
            <div className="space-y-2.5 text-xs text-[#F3EFE7]/70 font-sans-luxury">
              <p>Segunda a Sábado · 10h às 19h (CET)</p>
              <p className="font-mono text-[#E7CB8C]">+39 06 699 2062</p>
              <p className="pt-2 text-[11px] text-white/50 leading-relaxed">
                Entrega expressa mundial segurada com embalagem comemorativa em madeira.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10.5px] font-sans-luxury tracking-wider text-[#F3EFE7]/40">
          <p>© 2026 Maison Aurelio S.r.l. — Todos os direitos reservados. P.IVA IT01498320581.</p>
          <div className="flex items-center gap-6">
            <a href="#contato" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#contato" className="hover:text-white transition-colors">Termos de Compra</a>
            <a href="#contato" className="hover:text-white transition-colors">Devoluções & Garantia</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
