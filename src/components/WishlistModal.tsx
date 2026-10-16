import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types/store';
import { formatEuro } from '../utils/cart';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  products: Product[];
  onRemoveFromWishlist: (id: string) => void;
  onAddToCart: (product: Product) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  products,
  onRemoveFromWishlist,
  onAddToCart
}) => {
  if (!isOpen) return null;

  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Slide-out Drawer */}
        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="w-screen max-w-md bg-[#F3EFE7] text-[#0B0B0B] shadow-2xl flex flex-col justify-between"
            role="dialog"
            aria-modal="true"
            aria-label="Lista de Desejos"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#0B0B0B]/10 flex items-center justify-between">
              <div>
                <h3 className="font-serif-luxury text-xl font-normal text-[#0B0B0B]">
                  Lista de Desejos
                </h3>
                <p className="text-[10px] font-sans-luxury tracking-[0.25em] uppercase text-[#6E6558] mt-0.5">
                  {wishlistProducts.length} {wishlistProducts.length === 1 ? 'peça guardada' : 'peças guardadas'}
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full hover:bg-black/5 flex items-center justify-center text-[#0B0B0B] transition-colors"
                aria-label="Fechar lista de desejos"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 divide-y divide-[#0B0B0B]/10">
              {wishlistProducts.length === 0 ? (
                <div className="py-20 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#EAE4D8] flex items-center justify-center mb-4 text-[#6E6558]">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-luxury text-2xl font-normal text-[#0B0B0B]">
                    Sua lista está vazia
                  </h4>
                  <p className="text-xs text-[#6E6558] font-sans-luxury tracking-wide mt-2 max-w-xs leading-relaxed">
                    Clique no ícone de coração das suas criações favoritas para salvá-las aqui.
                  </p>
                </div>
              ) : (
                wishlistProducts.map((product) => (
                  <div key={product.id} className="pt-6 first:pt-0 flex gap-4">
                    <div className="w-20 h-24 bg-[#EAE4D8] shrink-0 p-2 border border-[#0B0B0B]/10 flex items-center justify-center">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif-luxury text-base text-[#0B0B0B]">
                            {product.name}
                          </h4>
                          <span className="text-sm font-sans-luxury font-medium text-[#0B0B0B] tabular-nums">
                            {formatEuro(product.price)}
                          </span>
                        </div>
                        <p className="text-[10px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mt-0.5">
                          {product.catLabel}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <button
                          onClick={() => {
                            onAddToCart(product);
                            onRemoveFromWishlist(product.id);
                          }}
                          className="px-3 py-1.5 bg-[#0B0B0B] text-[#F3EFE7] hover:bg-[#B8964F] hover:text-[#0B0B0B] text-[10px] font-sans-luxury tracking-wider uppercase transition-colors flex items-center gap-1.5"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Mover para Sacola</span>
                        </button>

                        <button
                          onClick={() => onRemoveFromWishlist(product.id)}
                          className="text-[#6E6558] hover:text-[#5C2A2A] text-xs p-1 transition-colors"
                          aria-label={`Remover ${product.name} da lista`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {wishlistProducts.length > 0 && (
              <div className="p-6 bg-[#EAE4D8] border-t border-[#0B0B0B]/10">
                <button
                  onClick={() => {
                    wishlistProducts.forEach((p) => onAddToCart(p));
                    onClose();
                  }}
                  className="w-full py-4 bg-[#0B0B0B] text-[#F3EFE7] text-xs font-sans-luxury tracking-[0.25em] uppercase font-semibold hover:bg-[#B8964F] hover:text-[#0B0B0B] transition-colors"
                >
                  Adicionar Todas à Sacola
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
