import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, ProductColor } from '../types/store';
import { formatBRL } from '../utils/cart';
import { X, Check, ShoppingBag, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string | null, qty: number, color?: string | null) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.sizes ? product.sizes[0] : null
  );
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(
    product.colors ? product.colors[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity, selectedColor?.name);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 450);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="relative w-full max-w-4xl bg-[#F3EFE7] text-[#0B0B0B] shadow-2xl border border-[#0B0B0B]/10 overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row"
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização rápida de ${product.name}`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/70 hover:bg-[#0B0B0B] hover:text-[#F3EFE7] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Product Image Column */}
          <div className="md:w-1/2 bg-[#EAE5DC] flex items-center justify-center p-8 relative min-h-[300px]">
            <img
              src={product.img}
              alt={product.name}
              className="max-h-[420px] w-auto object-contain filter drop-shadow-xl"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#0B0B0B] text-[#F3EFE7] text-[10px] font-sans-luxury tracking-[0.25em] uppercase font-bold">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right: Info Column */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Category & Origin */}
              <div className="flex items-center gap-2 text-[10px] font-sans-luxury tracking-[0.25em] uppercase text-[#6E6558]">
                <span>{product.catLabel}</span>
                {product.origin && (
                  <>
                    <span>·</span>
                    <MapPin className="w-3 h-3 text-[#B8964F]" />
                    <span>{product.origin}</span>
                  </>
                )}
              </div>

              {/* Title */}
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#0B0B0B] font-normal mt-2 leading-snug">
                {product.name}
              </h3>

              {/* Price & Installments */}
              <div className="mt-3">
                <div className="flex items-baseline gap-3">
                  <p className="text-2xl font-sans-luxury font-semibold text-[#0B0B0B] tracking-wide tabular-nums">
                    {formatBRL(product.price)}
                  </p>
                  {product.originalPrice && (
                    <span className="text-sm font-sans-luxury text-[#6E6558] line-through tabular-nums">
                      {formatBRL(product.originalPrice)}
                    </span>
                  )}
                </div>
                {product.installments && (
                  <p className="text-xs text-[#6E6558] font-sans-luxury mt-0.5 font-light">
                    ou <span className="font-semibold text-[#0B0B0B]">{product.installments}</span> sem juros no cartão
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-[#3A362F] font-sans-luxury font-light leading-relaxed">
                {product.desc}
              </p>

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-5 pt-4 border-t border-[#0B0B0B]/10">
                  <div className="flex items-center justify-between text-xs font-sans-luxury tracking-widest uppercase mb-2">
                    <span className="text-[#0B0B0B] font-medium">Cor Selecionada</span>
                    <span className="text-[#6E6558] font-normal">
                      {selectedColor?.name || product.colors[0].name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c)}
                        className={`w-6 h-6 rounded-full border transition-all cursor-pointer ${
                          selectedColor?.name === c.name
                            ? 'ring-2 ring-[#0B0B0B] ring-offset-2 scale-110'
                            : 'border-black/20 hover:scale-105'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                        aria-label={`Cor ${c.name}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Handcrafted Specs List */}
              <div className="mt-5 border-t border-[#0B0B0B]/10 pt-4">
                <h4 className="text-[10px] font-sans-luxury tracking-[0.25em] uppercase text-[#6E6558] mb-2 font-medium">
                  Especificações da Confecção
                </h4>
                <ul className="space-y-1.5 text-xs text-[#3A362F] font-sans-luxury">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#B8964F] mt-0.5">—</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size Selector (if applicable) */}
              {product.sizes && (
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs font-sans-luxury tracking-widest uppercase mb-2">
                    <span className="text-[#0B0B0B] font-medium">Tamanho</span>
                    <span className="text-[#6E6558] text-[10px]">Modelagem Regular</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[42px] h-10 px-3 border text-xs font-sans-luxury tracking-wider transition-all cursor-pointer ${
                          selectedSize === size
                            ? 'border-[#0B0B0B] bg-[#0B0B0B] text-[#F3EFE7]'
                            : 'border-[#0B0B0B]/20 text-[#0B0B0B] hover:border-[#0B0B0B]'
                        }`}
                        aria-label={`Tamanho ${size}`}
                        aria-pressed={selectedSize === size}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-[#0B0B0B]/10">
              <button
                onClick={handleAdd}
                className="w-full py-4 bg-[#0B0B0B] text-[#F3EFE7] hover:bg-[#B8964F] hover:text-[#0B0B0B] text-xs font-sans-luxury tracking-[0.25em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Adicionado à Sacola!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Adicionar à Sacola — {formatBRL(product.price * quantity)}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
