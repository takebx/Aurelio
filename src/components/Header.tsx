import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, Calendar, Menu, X, Heart, User, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenBooking: () => void;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onSelectCategory?: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenBooking,
  onOpenSearch,
  onOpenWishlist,
  onSelectCategory
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always visible near top
      if (currentScrollY <= 20) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        // Hide when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navCategories = [
    { label: 'Ternos 3D', cat: 'sartorial-suits', isAnchor: true },
    { label: 'Jaquetas & Casacos', cat: 'outerwear' },
    { label: 'Calçados & Tênis', cat: 'footwear' },
    { label: 'Linho & Resort', cat: 'resort' },
    { label: 'Polos & Tricot', cat: 'polo' }
  ];

  const handleNavClick = (cat: string, isAnchor?: boolean) => {
    if (isAnchor && cat === 'sartorial-suits') {
      const el = document.getElementById('sartorial-suits');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      return;
    }
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    const el = document.getElementById('colecao');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Top Utility Bar (Black announcement strip as in reference) */}
        <div className="bg-[#0B0B0B] text-[#F3EFE7] text-[10px] sm:text-[10.5px] font-sans-luxury tracking-[0.22em] uppercase py-2 px-6 sm:px-8 border-b border-white/10 select-none">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8964F]" />
              <span className="font-light">Frete cortesia da Maison em encomendas acima de € 1.000</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-[#E7CB8C]">
              <button
                onClick={onOpenBooking}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Ateliê Roma
              </button>
              <span className="text-white/20">|</span>
              <span className="text-white/60">Rastreio VIP</span>
              <span className="text-white/20">|</span>
              <button
                onClick={onOpenBooking}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Concierge
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-[#F3EFE7]/95 backdrop-blur-md shadow-sm border-b border-[#0B0B0B]/10 py-3.5'
              : 'bg-[#F3EFE7]/90 backdrop-blur-sm border-b border-[#0B0B0B]/10 py-4 sm:py-5'
          } text-[#0B0B0B]`}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-6">
            {/* Left Nav: Clean Categories */}
            <nav className="hidden lg:flex items-center gap-7 text-[11px] font-sans-luxury tracking-[0.24em] uppercase font-medium">
              {navCategories.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.cat, item.isAnchor)}
                  className="relative py-1 hover:text-[#B8964F] transition-colors whitespace-nowrap cursor-pointer group"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-[#0B0B0B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </button>
              ))}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 text-[#0B0B0B] hover:text-[#B8964F]"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Center: Massive Iconic Brand Wordmark */}
            <a
              href="#top"
              className="flex flex-col items-center justify-center text-center group cursor-pointer"
              aria-label="Aurelio Roma"
            >
              <span className="font-serif-luxury text-3xl sm:text-4xl md:text-[38px] tracking-[0.3em] font-normal leading-none text-[#0B0B0B] group-hover:text-[#B8964F] transition-colors">
                AURELIO
              </span>
              <span className="text-[8.5px] sm:text-[9px] font-sans-luxury tracking-[0.55em] text-[#B8964F] mt-1 font-medium">
                ROMA · DAL 1962
              </span>
            </a>

            {/* Right: Actions (Search, Login/Booking, Wishlist, Cart) */}
            <div className="flex items-center gap-4 sm:gap-6 text-[11px] font-sans-luxury tracking-[0.2em] uppercase">
              {/* Search */}
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-1.5 hover:text-[#B8964F] transition-colors cursor-pointer"
                aria-label="Buscar produtos"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Buscar</span>
              </button>

              {/* Login / Atelier */}
              <button
                onClick={onOpenBooking}
                className="hidden md:flex items-center gap-1.5 hover:text-[#B8964F] transition-colors cursor-pointer"
                aria-label="Concierge / Ateliê"
              >
                <User className="w-4 h-4" />
                <span>Ateliê</span>
              </button>

              {/* Wishlist */}
              <button
                onClick={onOpenWishlist}
                className="flex items-center gap-1.5 hover:text-[#B8964F] transition-colors cursor-pointer relative"
                aria-label={`Lista de desejos (${wishlistCount})`}
              >
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Desejos</span>
                {wishlistCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-[#B8964F] text-[#0B0B0B] text-[9px] font-bold flex items-center justify-center font-mono">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button */}
              <button
                onClick={onOpenCart}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-[#0B0B0B] text-[#F3EFE7] hover:bg-[#B8964F] hover:text-[#0B0B0B] transition-colors rounded-none cursor-pointer"
                aria-label={`Sacola com ${cartCount} itens`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="tabular-nums">({cartCount})</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0B0B0B] text-[#F3EFE7] pt-32 px-8 pb-12 flex flex-col justify-between lg:hidden"
          >
            <div className="space-y-6">
              <p className="text-[10px] font-sans-luxury tracking-[0.3em] uppercase text-[#B8964F]">
                Navegar por Categoria
              </p>
              {navCategories.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.cat, item.isAnchor)}
                  className="block text-left font-serif-luxury text-3xl hover:text-[#E7CB8C] transition-colors w-full border-b border-white/10 pb-3"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="block text-left text-lg font-serif-luxury text-[#E7CB8C] pt-2"
              >
                Agendar Visita ao Ateliê Roma →
              </button>
            </div>

            <div className="border-t border-white/10 pt-6 text-center text-xs text-white/50 font-sans-luxury tracking-widest uppercase">
              Via dei Condotti 21 · Roma, Itália
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
