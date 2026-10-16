import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types/store';
import {
  calculateSubtotal,
  calculateCartCount,
  calculateDiscount,
  calculateShipping,
  calculateTotal,
  formatEuro,
  FREE_SHIPPING_THRESHOLD,
  VALID_VOUCHERS
} from '../utils/cart';
import { X, Trash2, ArrowRight, ShieldCheck, Tag, Check, Sparkles, Package } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: string, size: string | null, qty: number) => void;
  onRemoveItem: (id: string, size: string | null) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onClearCart
}) => {
  const [voucherCode, setVoucherCode] = useState('');
  const [appliedVoucher, setAppliedVoucher] = useState<string | null>(null);
  const [voucherError, setVoucherError] = useState<string | null>(null);

  // Checkout modal state
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerCountry, setCustomerCountry] = useState('Brasil');

  const subtotal = calculateSubtotal(items);
  const count = calculateCartCount(items);
  const discount = calculateDiscount(subtotal, appliedVoucher);
  const shipping = calculateShipping(subtotal);
  const total = calculateTotal(items, appliedVoucher);

  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const shippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    setVoucherError(null);
    const code = voucherCode.trim().toUpperCase();
    if (VALID_VOUCHERS[code]) {
      setAppliedVoucher(code);
      setVoucherCode('');
    } else {
      setVoucherError('Código inválido. Experimente "ROMA1962" ou "SARTORIA"');
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerEmail || !customerAddress) {
      alert('Por favor, preencha os dados de entrega obrigatórios.');
      return;
    }
    setOrderConfirmed(true);
  };

  const handleCloseAll = () => {
    setIsCheckingOut(false);
    setOrderConfirmed(false);
    onClearCart();
    onClose();
  };

  if (!isOpen) return null;

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
            aria-label="Sacola de Compras"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#0B0B0B]/10 flex items-center justify-between">
              <div>
                <h3 className="font-serif-luxury text-xl font-normal text-[#0B0B0B]">
                  Sua Sacola
                </h3>
                <p className="text-[10px] font-sans-luxury tracking-[0.25em] uppercase text-[#6E6558] mt-0.5">
                  {count} {count === 1 ? 'peça selecionada' : 'peças selecionadas'}
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full hover:bg-black/5 flex items-center justify-center text-[#0B0B0B] transition-colors"
                aria-label="Fechar sacola"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="px-6 py-3 bg-[#EAE4D8] border-b border-[#0B0B0B]/10">
              <div className="flex items-center justify-between text-[11px] font-sans-luxury tracking-wider text-[#3A362F] mb-1.5">
                {amountToFreeShipping > 0 ? (
                  <span>
                    Adicione mais <strong className="text-[#0B0B0B] font-medium">{formatEuro(amountToFreeShipping)}</strong> para frete grátis mundial
                  </span>
                ) : (
                  <span className="text-[#2F3B2E] font-medium flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#2F3B2E]" />
                    Parabéns! Frete cortesia da Maison desbloqueado
                  </span>
                )}
              </div>
              <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#B8964F] transition-all duration-500 rounded-full"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 divide-y divide-[#0B0B0B]/10">
              {items.length === 0 ? (
                <div className="py-20 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#EAE4D8] flex items-center justify-center mb-4 text-[#6E6558]">
                    <Package className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-luxury text-2xl font-normal text-[#0B0B0B]">
                    Sua sacola está vazia
                  </h4>
                  <p className="text-xs text-[#6E6558] font-sans-luxury tracking-wide mt-2 max-w-xs leading-relaxed">
                    As criações exclusivas da coleção de inverno aguardam no catálogo.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-3 bg-[#0B0B0B] text-[#F3EFE7] text-xs font-sans-luxury tracking-widest uppercase hover:bg-[#B8964F] transition-colors"
                  >
                    Explorar Coleção
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.size || 'default'}`} className="pt-6 first:pt-0 flex gap-4">
                    {/* Item Thumbnail */}
                    <div className="w-20 h-24 bg-[#EAE4D8] shrink-0 p-2 border border-[#0B0B0B]/10 flex items-center justify-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif-luxury text-base text-[#0B0B0B] font-normal leading-snug">
                            {item.name}
                          </h4>
                          <span className="text-sm font-sans-luxury font-medium text-[#0B0B0B] tabular-nums whitespace-nowrap">
                            {formatEuro(item.price * item.qty)}
                          </span>
                        </div>
                        <p className="text-[10px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mt-0.5">
                          {item.size ? `Tam: ${item.size}` : 'Tamanho Único'}
                        </p>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-[#0B0B0B]/20 bg-white/40">
                          <button
                            onClick={() => onUpdateQty(item.id, item.size, item.qty - 1)}
                            className="w-7 h-7 flex items-center justify-center text-xs hover:bg-[#0B0B0B] hover:text-[#F3EFE7] transition-colors"
                            aria-label="Diminuir"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-xs font-sans-luxury font-medium tabular-nums">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.id, item.size, item.qty + 1)}
                            className="w-7 h-7 flex items-center justify-center text-xs hover:bg-[#0B0B0B] hover:text-[#F3EFE7] transition-colors"
                            aria-label="Aumentar"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => onRemoveItem(item.id, item.size)}
                          className="text-[10px] font-sans-luxury tracking-wider uppercase text-[#6E6558] hover:text-[#5C2A2A] flex items-center gap-1 transition-colors"
                          aria-label={`Remover ${item.name} da sacola`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Remover</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer with Calculations */}
            {items.length > 0 && (
              <div className="p-6 bg-[#EAE4D8] border-t border-[#0B0B0B]/10 space-y-4">
                {/* Coupon Code Form */}
                <form onSubmit={handleApplyVoucher} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={voucherCode}
                      onChange={(e) => setVoucherCode(e.target.value)}
                      placeholder="Cupom VIP (ex: ROMA1962)"
                      className="w-full pl-8 pr-3 py-2 bg-[#F3EFE7] border border-[#0B0B0B]/15 text-xs font-sans-luxury tracking-wider uppercase placeholder:normal-case placeholder-[#A39A8B] focus:outline-none focus:border-[#B8964F]"
                    />
                    <Tag className="w-3.5 h-3.5 text-[#6E6558] absolute left-2.5 top-2.5" />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#0B0B0B] text-[#F3EFE7] text-xs font-sans-luxury tracking-wider uppercase hover:bg-[#B8964F] hover:text-[#0B0B0B] transition-colors shrink-0"
                  >
                    Aplicar
                  </button>
                </form>

                {appliedVoucher && (
                  <p className="text-[11px] text-[#2F3B2E] font-sans-luxury flex items-center gap-1 font-medium">
                    <Check className="w-3.5 h-3.5" />
                    Cupom {appliedVoucher} aplicado com sucesso!
                  </p>
                )}

                {voucherError && (
                  <p className="text-[11px] text-[#5C2A2A] font-sans-luxury">
                    {voucherError}
                  </p>
                )}

                {/* Subtotals & Breakdowns */}
                <div className="space-y-1.5 text-xs font-sans-luxury pt-2 border-t border-[#0B0B0B]/10">
                  <div className="flex justify-between text-[#6E6558]">
                    <span>Subtotal</span>
                    <span className="tabular-nums text-[#0B0B0B] font-medium">{formatEuro(subtotal)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-[#2F3B2E]">
                      <span>Desconto VIP ({appliedVoucher})</span>
                      <span className="tabular-nums font-medium">- {formatEuro(discount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-[#6E6558]">
                    <span>Frete Expresso Seguro</span>
                    <span className="tabular-nums text-[#0B0B0B] font-medium">
                      {shipping === 0 ? 'Cortesia da Maison' : formatEuro(shipping)}
                    </span>
                  </div>

                  <div className="flex justify-between text-base font-serif-luxury pt-2 border-t border-[#0B0B0B]/10 text-[#0B0B0B]">
                    <span>Total Estimado</span>
                    <strong className="text-xl tabular-nums font-normal">{formatEuro(total)}</strong>
                  </div>
                </div>

                {/* Checkout Trigger */}
                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-4 bg-[#0B0B0B] text-[#F3EFE7] text-xs font-sans-luxury tracking-[0.25em] uppercase font-medium hover:bg-[#B8964F] hover:text-[#0B0B0B] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Avançar para Reserva</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Luxury Checkout Reservation Modal */}
        <AnimatePresence>
          {isCheckingOut && (
            <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => !orderConfirmed && setIsCheckingOut(false)}
                className="fixed inset-0 bg-black/75 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative w-full max-w-xl bg-[#F3EFE7] text-[#0B0B0B] p-6 sm:p-10 border border-[#B8964F]/30 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
              >
                {!orderConfirmed ? (
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#0B0B0B]/10">
                      <div>
                        <h3 className="font-serif-luxury text-2xl text-[#0B0B0B]">
                          Reserva de Pedido
                        </h3>
                        <p className="text-[10px] font-sans-luxury tracking-widest uppercase text-[#B8964F] mt-1">
                          Via dei Condotti 21 · Roma
                        </p>
                      </div>
                      <button
                        onClick={() => setIsCheckingOut(false)}
                        className="text-[#6E6558] hover:text-[#0B0B0B]"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <form onSubmit={handleCompleteOrder} className="mt-6 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10.5px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mb-1">
                            Nome Completo *
                          </label>
                          <input
                            type="text"
                            required
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            placeholder="Ex: Sofia Loren"
                            className="w-full px-3 py-2.5 bg-white border border-[#0B0B0B]/20 text-xs font-sans-luxury tracking-wide focus:border-[#B8964F] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[10.5px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mb-1">
                            E-mail de Confirmação *
                          </label>
                          <input
                            type="email"
                            required
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                            placeholder="seu@email.com"
                            className="w-full px-3 py-2.5 bg-white border border-[#0B0B0B]/20 text-xs font-sans-luxury tracking-wide focus:border-[#B8964F] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10.5px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mb-1">
                          Endereço para Entrega Segurada *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerAddress}
                          onChange={(e) => setCustomerAddress(e.target.value)}
                          placeholder="Avenida, Rua, Número, Apto"
                          className="w-full px-3 py-2.5 bg-white border border-[#0B0B0B]/20 text-xs font-sans-luxury tracking-wide focus:border-[#B8964F] focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10.5px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mb-1">
                            Cidade & Estado
                          </label>
                          <input
                            type="text"
                            value={customerCity}
                            onChange={(e) => setCustomerCity(e.target.value)}
                            placeholder="São Paulo, SP"
                            className="w-full px-3 py-2.5 bg-white border border-[#0B0B0B]/20 text-xs font-sans-luxury tracking-wide focus:border-[#B8964F] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[10.5px] font-sans-luxury tracking-widest uppercase text-[#6E6558] mb-1">
                            País
                          </label>
                          <select
                            value={customerCountry}
                            onChange={(e) => setCustomerCountry(e.target.value)}
                            className="w-full px-3 py-2.5 bg-white border border-[#0B0B0B]/20 text-xs font-sans-luxury tracking-wide focus:border-[#B8964F] focus:outline-none"
                          >
                            <option value="Brasil">Brasil</option>
                            <option value="Itália">Itália</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Estados Unidos">Estados Unidos</option>
                            <option value="França">França</option>
                          </select>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-[#EAE4D8] text-xs font-sans-luxury space-y-2 border border-[#0B0B0B]/10">
                        <div className="flex justify-between text-[#6E6558]">
                          <span>Itens ({count})</span>
                          <span>{formatEuro(subtotal)}</span>
                        </div>
                        {discount > 0 && (
                          <div className="flex justify-between text-[#2F3B2E]">
                            <span>Desconto VIP</span>
                            <span>- {formatEuro(discount)}</span>
                          </div>
                        )}
                        <div className="flex justify-between font-serif-luxury text-base font-medium pt-2 border-t border-[#0B0B0B]/10 text-[#0B0B0B]">
                          <span>Total a pagar</span>
                          <span className="tabular-nums">{formatEuro(total)}</span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 mt-6 bg-[#B8964F] text-[#0B0B0B] font-sans-luxury text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#0B0B0B] hover:text-[#F3EFE7] transition-all shadow-md cursor-pointer"
                      >
                        Confirmar Reserva do Pedido
                      </button>
                    </form>
                  </div>
                ) : (
                  /* Order Confirmation Receipt */
                  <div className="text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-[#B8964F]/20 text-[#B8964F] flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8" />
                    </div>

                    <div className="text-[10px] font-sans-luxury tracking-[0.3em] uppercase text-[#B8964F]">
                      Ordine Riservato con Successo
                    </div>

                    <h3 className="font-serif-luxury text-3xl text-[#0B0B0B] mt-2">
                      Grazie Mille, {customerName}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#3A362F] font-sans-luxury max-w-md mx-auto leading-relaxed">
                      Sua reserva para a Coleção MMXXVI foi confirmada sob o código <strong className="text-[#0B0B0B]">#AR-{Math.floor(1000 + Math.random() * 9000)}</strong>. Enviamos a documentação de rastreio e autenticidade para <span className="underline">{customerEmail}</span>.
                    </p>

                    <div className="mt-6 p-6 bg-[#EAE4D8] text-left text-xs font-sans-luxury space-y-2 border border-[#0B0B0B]/10 max-w-md mx-auto">
                      <p className="font-serif-luxury text-base text-[#0B0B0B] border-b border-[#0B0B0B]/10 pb-2">
                        Resumo da Encomenda
                      </p>
                      <p className="text-[#6E6558]">
                        Destino: {customerAddress}, {customerCity} · {customerCountry}
                      </p>
                      <p className="text-[#6E6558]">
                        Total Assegurado: <strong className="text-[#0B0B0B]">{formatEuro(total)}</strong>
                      </p>
                      <p className="text-[#2F3B2E] text-[11px] pt-2">
                        ✓ Certificado de procedência em pergaminho romano incluído.
                      </p>
                    </div>

                    <button
                      onClick={handleCloseAll}
                      className="mt-8 px-8 py-3.5 bg-[#0B0B0B] text-[#F3EFE7] text-xs font-sans-luxury tracking-widest uppercase hover:bg-[#B8964F] hover:text-[#0B0B0B] transition-colors"
                    >
                      Concluir e Retornar à Boutique
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};
