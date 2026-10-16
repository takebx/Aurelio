import React from 'react';

export const Marquee: React.FC = () => {
  const phrases = [
    'Maison Aurelio — Roma',
    'Sartoria dal 1962',
    '100% Manifattura Italiana',
    'Couro Pleno de Flor Trançado',
    'Entrega Mundial Assegurada',
    'Edizione Inverno MMXXVI'
  ];

  return (
    <div
      className="bg-[#0B0B0B] text-[#F3EFE7] border-y border-[#F3EFE7]/10 py-4 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="flex w-max animate-[marquee_36s_linear_infinite] hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {phrases.map((phrase) => (
              <span
                key={phrase}
                className="flex items-center text-[11px] font-sans-luxury tracking-[0.36em] uppercase px-6 text-[#F3EFE7]/70 whitespace-nowrap"
              >
                <span>{phrase}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8964F] ml-6" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
