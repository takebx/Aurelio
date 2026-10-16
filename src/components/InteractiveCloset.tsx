import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLOSET_PIECES, CURATED_LOOKS, ClosetPiece, CuratedLook } from '../data/closetItems';
import { MannequinViewer } from './MannequinViewer';
import { formatEuro } from '../utils/cart';
import {
  ShoppingBag,
  Check,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  RotateCcw,
  SlidersHorizontal
} from 'lucide-react';

interface InteractiveClosetProps {
  onAddLookToCart: (pieces: ClosetPiece[]) => void;
  onOpenBooking: () => void;
}

const CATEGORY_SLOTS = [
  { key: 'outerwear', label: 'Sobretudo & Jaqueta' },
  { key: 'top', label: 'Tricô & Camisa' },
  { key: 'bottom', label: 'Calça de Alfaiataria' },
  { key: 'shoes', label: 'Calçados Artesanais' },
  { key: 'accessory', label: 'Bolsa ou Relógio' },
  { key: 'finishing', label: 'Toque Final' }
] as const;

export const InteractiveCloset: React.FC<InteractiveClosetProps> = ({
  onAddLookToCart,
  onOpenBooking
}) => {
  // Current active curated look preset
  const [activeLookId, setActiveLookId] = useState<string>('look-43');

  // Currently active slot map
  const [selectedSlotMap, setSelectedSlotMap] = useState<Record<string, string>>({
    outerwear: 'cappotto-nebbia',
    top: 'maglione-cashmere',
    bottom: 'pantaloni-bianchi',
    shoes: 'mocassino-roma',
    accessory: 'orologio-cronografo',
    finishing: 'occhiale-vespri'
  });

  // Active category tab for the customizer rack
  const [activeCategory, setActiveCategory] = useState<string>('outerwear');

  // Switch to a pre-curated capsule look
  const handleSelectCuratedLook = (look: CuratedLook) => {
    setActiveLookId(look.id);
    const newMap: Record<string, string> = {};
    look.pieceIds.forEach((id) => {
      const piece = CLOSET_PIECES[id];
      if (piece) {
        newMap[piece.category] = piece.id;
      }
    });
    setSelectedSlotMap(newMap);
  };

  // Swap a single piece on the mannequin
  const handleSelectPiece = (piece: ClosetPiece) => {
    setSelectedSlotMap((prev) => ({
      ...prev,
      [piece.category]: piece.id
    }));
    setActiveLookId('custom');
  };

  // Toggle/remove a piece slot if desired
  const handleTogglePiece = (category: string) => {
    setSelectedSlotMap((prev) => {
      const updated = { ...prev };
      delete updated[category];
      return updated;
    });
    setActiveLookId('custom');
  };

  // Resolve full piece objects
  const selectedPieces = Object.values(selectedSlotMap)
    .map((id) => CLOSET_PIECES[id])
    .filter(Boolean) as ClosetPiece[];

  // Outerwear, top, bottom, etc. for the single mannequin
  const activeOuterwear = selectedSlotMap.outerwear ? CLOSET_PIECES[selectedSlotMap.outerwear] : null;
  const activeTop = selectedSlotMap.top ? CLOSET_PIECES[selectedSlotMap.top] : null;
  const activeBottom = selectedSlotMap.bottom ? CLOSET_PIECES[selectedSlotMap.bottom] : null;
  const activeShoes = selectedSlotMap.shoes ? CLOSET_PIECES[selectedSlotMap.shoes] : null;
  const activeAccessory = selectedSlotMap.accessory ? CLOSET_PIECES[selectedSlotMap.accessory] : null;
  const activeFinishing = selectedSlotMap.finishing ? CLOSET_PIECES[selectedSlotMap.finishing] : null;

  // Price calculations
  const rawSubtotal = selectedPieces.reduce((sum, p) => sum + p.price, 0);
  const bundleDiscount = Math.round(rawSubtotal * 0.1); // 10% complete look benefit
  const finalLookTotal = Math.max(0, rawSubtotal - bundleDiscount);

  // Available options for active category
  const availableCategoryPieces = Object.values(CLOSET_PIECES).filter(
    (p) => p.category === activeCategory
  );

  return (
    <section id="closet" className="py-24 sm:py-32 bg-[#EAE4D8] text-[#0B0B0B] border-b border-[#0B0B0B]/10 overflow-hidden relative select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#B8964F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#0B0B0B]/10">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-sans-luxury tracking-[0.35em] uppercase text-[#B8964F] mb-3">
              <span className="w-8 h-[1px] bg-[#B8964F]" />
              <span>Provador Virtual · Guardaroba Su Misura</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal tracking-tight text-[#0B0B0B]">
              O Manequim Aurelio Roma
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#6E6558] font-sans-luxury tracking-wide leading-relaxed">
            Selecione e sobreponha cada peça diretamente sobre o manequim central do ateliê. Visualize a harmonia das texturas de lã, seda e couro toscano em tempo real.
          </p>
        </div>

        {/* CAPSULE LOOK PRESETS (Look 01, 02, 03, 04) */}
        <div className="mt-8 pb-8 border-b border-[#0B0B0B]/10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-sans-luxury tracking-[0.26em] uppercase text-[#6E6558] font-medium">
              Composições Completas da Temporada
            </span>
            <span className="text-[10px] font-sans-luxury tracking-widest uppercase text-[#B8964F]">
              Selecione para vestir o manequim instantaneamente
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CURATED_LOOKS.map((look) => {
              const isSelected = activeLookId === look.id;
              return (
                <button
                  key={look.id}
                  onClick={() => handleSelectCuratedLook(look)}
                  className={`p-4 text-left transition-all duration-300 border rounded-none cursor-pointer relative ${
                    isSelected
                      ? 'bg-[#0B0B0B] text-[#F3EFE7] border-[#0B0B0B] shadow-lg -translate-y-0.5'
                      : 'bg-[#F3EFE7] text-[#0B0B0B] border-[#0B0B0B]/15 hover:border-[#B8964F]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-sans-luxury tracking-[0.24em] uppercase mb-1">
                    <span className={isSelected ? 'text-[#E7CB8C]' : 'text-[#B8964F]'}>
                      {look.number}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E7CB8C]" />
                    )}
                  </div>
                  <h4 className="font-serif-luxury text-base font-normal leading-snug">
                    {look.name}
                  </h4>
                  <p className={`text-[10.5px] mt-1 line-clamp-2 leading-relaxed ${
                    isSelected ? 'text-[#F3EFE7]/70' : 'text-[#6E6558]'
                  }`}>
                    {look.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-COLUMN RESPONSIVE LAYOUT:
            [ LEFT: WARDROBE RACK ]  --  [ CENTER: SINGLE MANNEQUIN ]  --  [ RIGHT: LOOK TOTAL & CART ] */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: WARDROBE RACK & CATEGORIES                  */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 bg-[#F3EFE7] border border-[#0B0B0B]/15 p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#0B0B0B]/10 mb-4">
              <span className="text-xs font-sans-luxury tracking-[0.24em] uppercase text-[#0B0B0B] font-medium flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#B8964F]" />
                <span>Arara de Peças</span>
              </span>
              <span className="text-[10px] text-[#6E6558] font-sans-luxury">
                Clique para vestir
              </span>
            </div>

            {/* Category Slot Buttons */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {CATEGORY_SLOTS.map((slot) => {
                const isActive = activeCategory === slot.key;
                const currentPieceId = selectedSlotMap[slot.key];
                const currentPiece = currentPieceId ? CLOSET_PIECES[currentPieceId] : null;

                return (
                  <button
                    key={slot.key}
                    onClick={() => setActiveCategory(slot.key)}
                    className={`p-2.5 text-left border text-[11px] font-sans-luxury tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0B0B0B] text-[#F3EFE7] border-[#0B0B0B]'
                        : 'bg-[#EAE4D8] text-[#0B0B0B] border-[#0B0B0B]/10 hover:border-[#B8964F]'
                    }`}
                  >
                    <div className="text-[9px] uppercase tracking-widest opacity-60">
                      {slot.label}
                    </div>
                    <div className="font-serif-luxury truncate mt-1 text-xs">
                      {currentPiece ? currentPiece.name : 'Nenhum'}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Options available for the selected category */}
            <div>
              <div className="flex items-center justify-between text-[10.5px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mb-3">
                <span>Escolha para o manequim:</span>
                {selectedSlotMap[activeCategory] && (
                  <button
                    onClick={() => handleTogglePiece(activeCategory)}
                    className="text-[#5C2A2A] hover:underline"
                  >
                    Remover peça
                  </button>
                )}
              </div>

              <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                {availableCategoryPieces.map((piece) => {
                  const isEquipped = selectedSlotMap[piece.category] === piece.id;
                  return (
                    <button
                      key={piece.id}
                      onClick={() => handleSelectPiece(piece)}
                      className={`w-full p-3 border flex items-center justify-between text-left transition-all cursor-pointer ${
                        isEquipped
                          ? 'border-[#B8964F] bg-[#B8964F]/10 shadow-sm'
                          : 'border-[#0B0B0B]/10 hover:border-[#0B0B0B]/30 bg-white/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#EAE4D8] border border-[#0B0B0B]/10 shrink-0 p-1 flex items-center justify-center">
                          <img src={piece.img} alt={piece.name} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div>
                          <h5 className="font-serif-luxury text-sm text-[#0B0B0B] font-normal leading-snug">
                            {piece.name}
                          </h5>
                          <p className="text-[10px] text-[#6E6558] font-sans-luxury mt-0.5">
                            {piece.material} · {piece.origin}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0">
                        <span className="text-xs font-sans-luxury font-medium tabular-nums text-[#0B0B0B]">
                          {formatEuro(piece.price)}
                        </span>
                        {isEquipped ? (
                          <span className="w-5 h-5 rounded-full bg-[#B8964F] text-[#0B0B0B] flex items-center justify-center text-[10px] font-bold">
                            <Check className="w-3 h-3" />
                          </span>
                        ) : (
                          <span className="text-[10px] font-sans-luxury tracking-wider uppercase text-[#6E6558] hover:text-[#0B0B0B]">
                            Vestir
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CENTER COLUMN: THE SINGLE CENTRAL MANNEQUIN              */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <MannequinViewer
              outerwear={activeOuterwear}
              top={activeTop}
              bottom={activeBottom}
              shoes={activeShoes}
              accessory={activeAccessory}
              finishing={activeFinishing}
              onSelectSlot={(cat) => setActiveCategory(cat)}
              activeSlot={activeCategory}
            />

            {/* Minimalist Subtext Below Mannequin */}
            <p className="mt-3 text-[10.5px] font-sans-luxury tracking-[0.25em] uppercase text-[#6E6558] text-center">
              Manequim Central · Via dei Condotti 21, Roma
            </p>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: LOOK COMPOSITION BREAKDOWN & PURCHASE      */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-[#0B0B0B] text-[#F3EFE7] p-6 sm:p-8 shadow-xl border border-[#B8964F]/30">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h4 className="font-serif-luxury text-2xl font-normal text-[#F3EFE7]">
                    Peças no Manequim
                  </h4>
                  <p className="text-[10px] font-sans-luxury tracking-[0.25em] uppercase text-[#E7CB8C] mt-0.5">
                    {selectedPieces.length} Peças Sobrepostas
                  </p>
                </div>
                <div className="px-3 py-1 bg-[#B8964F]/20 border border-[#B8964F] text-[#E7CB8C] text-[10px] font-sans-luxury tracking-widest uppercase">
                  -10% no Look
                </div>
              </div>

              {/* Itemized Stack */}
              <div className="mt-4 space-y-2.5 max-h-52 overflow-y-auto pr-1 divide-y divide-white/10">
                {selectedPieces.map((piece) => (
                  <div key={piece.id} className="pt-2.5 first:pt-0 flex items-center justify-between text-xs font-sans-luxury">
                    <div className="flex items-center gap-2">
                      <span className="text-[9.5px] tracking-wider uppercase text-[#B8964F]">
                        {piece.categoryLabel}:
                      </span>
                      <span className="font-serif-luxury text-[#F3EFE7] truncate max-w-[170px]">
                        {piece.name}
                      </span>
                    </div>
                    <span className="tabular-nums text-white/80 font-medium shrink-0">
                      {formatEuro(piece.price)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Financial Calculation */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs font-sans-luxury">
                <div className="flex justify-between text-white/60">
                  <span>Soma das Peças</span>
                  <span className="tabular-nums text-white">{formatEuro(rawSubtotal)}</span>
                </div>
                <div className="flex justify-between text-[#E7CB8C]">
                  <span>Vantagem Look Completo (10%)</span>
                  <span className="tabular-nums font-medium">- {formatEuro(bundleDiscount)}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Frete Expresso Seguro Mundial</span>
                  <span className="text-[#E7CB8C] font-medium">Cortesia da Maison</span>
                </div>

                <div className="flex justify-between items-baseline pt-4 border-t border-white/10 text-base font-serif-luxury">
                  <span>Total do Look</span>
                  <div className="text-right">
                    <span className="block text-2xl text-[#E7CB8C] font-normal tabular-nums">
                      {formatEuro(finalLookTotal)}
                    </span>
                    <span className="text-[9.5px] font-sans-luxury text-white/40 tracking-wider">
                      Certificado de alfaiataria numerado incluso
                    </span>
                  </div>
                </div>
              </div>

              {/* Primary Actions */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={() => onAddLookToCart(selectedPieces)}
                  className="w-full py-4 bg-[#B8964F] text-[#0B0B0B] font-sans-luxury text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#F3EFE7] hover:text-[#0B0B0B] transition-all duration-300 shadow-lg flex items-center justify-center gap-3 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Adicionar Look do Manequim à Sacola</span>
                </button>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 border border-white/20 text-[#F3EFE7] font-sans-luxury text-[11px] tracking-[0.22em] uppercase hover:border-[#E7CB8C] hover:text-[#E7CB8C] hover:bg-white/5 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#B8964F]" />
                  <span>Agendar Prova Deste Look em Roma</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
