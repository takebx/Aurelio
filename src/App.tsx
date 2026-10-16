import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types/store';
import { PRODUCTS } from './data/products';
import { calculateCartCount } from './utils/cart';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SartorialFloatingSuits } from './components/SartorialFloatingSuits';
import { Marquee } from './components/Marquee';
import { Collection } from './components/Collection';
import { AtelierStats } from './components/AtelierStats';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistModal } from './components/WishlistModal';
import { AtelierBookingModal } from './components/AtelierBookingModal';
import { SearchModal } from './components/SearchModal';
import { FloatingConcierge } from './components/FloatingConcierge';
import { ToastContainer, ToastMessage } from './components/Toast';

const CART_STORAGE_KEY = 'aurelio_cart_v2';
const WISHLIST_STORAGE_KEY = 'aurelio_wishlist_v2';

export default function App() {
  // Cart state persisted to localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : ['borsa-intreccio', 'cappotto-nebbia'];
    } catch {
      return ['borsa-intreccio'];
    }
  });

  // Modal states
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Toast notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (text: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, text }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistIds));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
  }, [wishlistIds]);

  const handleAddToCart = (product: Product, size?: string | null, qty = 1, color?: string | null) => {
    const targetSize = size || null;
    const targetColor = color || null;
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.size === targetSize && item.color === targetColor
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === targetSize && item.color === targetColor
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          img: product.img,
          size: targetSize,
          color: targetColor,
          qty
        }
      ];
    });

    showToast(`${product.name} — adicionado à sacola`);
  };

  const handleToggleWishlist = (id: string) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        showToast('Removido da lista de desejos');
        return prev.filter((item) => item !== id);
      } else {
        showToast('Guardado na lista de desejos');
        return [...prev, id];
      }
    });
  };

  const handleUpdateQty = (id: string, size: string | null, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(id, size);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size ? { ...item, qty } : item
      )
    );
  };

  const handleRemoveItem = (id: string, size: string | null) => {
    setCartItems((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
    showToast('Peça removida da sacola');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = calculateCartCount(cartItems);

  const scrollToCollection = () => {
    document.getElementById('colecao')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSuits = () => {
    document.getElementById('sartorial-suits')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#0B0B0B] selection:bg-[#B8964F] selection:text-[#0B0B0B] relative">
      {/* Intro Preloader */}
      <Preloader />

      {/* Main Luxury Header with Smart Hide on Scroll Down */}
      <Header
        cartCount={cartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      {/* Anchor top */}
      <span id="top" />

      {/* Hero Section */}
      <main id="main">
        <Hero
          onExploreCollection={scrollToCollection}
          onExploreLookbook={scrollToSuits}
        />

        {/* Sartorial Floating Suits Flow Movement Section (Replacing previous section below Hero) */}
        <SartorialFloatingSuits />

        {/* Marquee Banner */}
        <Marquee />

        {/* Collection Grid & Filtering (Vitrine Repaginada) */}
        <Collection
          products={PRODUCTS}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={(p, size, color) => handleAddToCart(p, size, 1, color)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Atelier Numbers & Heritage */}
        <AtelierStats />

        {/* Fashion Show Invitation Newsletter */}
        <Newsletter onSuccess={(email) => showToast(`Convite confirmado para ${email}`)} />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating Concierge & Back to Top */}
      <FloatingConcierge onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Modals & Drawers */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, size, qty, color) => handleAddToCart(p, size, qty, color)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        products={PRODUCTS}
        onRemoveFromWishlist={(id) => handleToggleWishlist(id)}
        onAddToCart={(p) => handleAddToCart(p, p.sizes ? p.sizes[0] : null, 1)}
      />

      <AtelierBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} />
    </div>
  );
}
