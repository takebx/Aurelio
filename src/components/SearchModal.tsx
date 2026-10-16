import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types/store';
import { formatEuro } from '../utils/cart';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.desc.toLowerCase().includes(query.toLowerCase()) ||
          p.catLabel.toLowerCase().includes(query.toLowerCase()) ||
          (p.material && p.material.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
          className="relative w-full max-w-2xl bg-[#F3EFE7] text-[#0B0B0B] border border-[#B8964F]/30 p-6 sm:p-8 shadow-2xl z-10"
        >
          {/* Header & Input */}
          <div className="flex items-center justify-between pb-4 border-b border-[#0B0B0B]/10">
            <div className="flex items-center gap-3 flex-1 mr-4">
              <Search className="w-5 h-5 text-[#B8964F]" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar por peça, casaco, bolsa ou seda..."
                className="w-full bg-transparent text-sm sm:text-base font-sans-luxury tracking-wide text-[#0B0B0B] placeholder-[#A39A8B] focus:outline-none"
              />
            </div>
            <button
              onClick={onClose}
              className="text-[#6E6558] hover:text-[#0B0B0B]"
              aria-label="Fechar busca"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick suggestions */}
          {!query && (
            <div className="pt-6">
              <p className="text-[10px] font-sans-luxury tracking-[0.25em] uppercase text-[#6E6558] mb-3">
                Buscas Mais Frequentes
              </p>
              <div className="flex flex-wrap gap-2">
                {['Borsa Intreccio', 'Cappotto Nebbia', 'Mocassino', 'Seda Notte', 'Profumo Assoluto'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3.5 py-1.5 bg-[#EAE4D8] text-xs font-sans-luxury hover:bg-[#B8964F] hover:text-[#0B0B0B] transition-colors"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Results List */}
          {query && (
            <div className="mt-6 max-h-80 overflow-y-auto divide-y divide-[#0B0B0B]/10">
              {results.length === 0 ? (
                <p className="py-8 text-center text-xs text-[#6E6558] font-sans-luxury tracking-wide">
                  Nenhuma criação encontrada para "{query}".
                </p>
              ) : (
                results.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="w-full py-3 flex items-center justify-between text-left hover:bg-black/5 px-2 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-14 bg-[#EAE4D8] p-1 flex items-center justify-center shrink-0">
                        <img
                          src={product.img}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-serif-luxury text-base text-[#0B0B0B] group-hover:text-[#B8964F] transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-[10px] font-sans-luxury tracking-widest uppercase text-[#6E6558]">
                          {product.catLabel} · {product.material || 'Couro Pleno'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-sans-luxury text-xs font-medium text-[#0B0B0B] tabular-nums">
                        {formatEuro(product.price)}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#B8964F] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
