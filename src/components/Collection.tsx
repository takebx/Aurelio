import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, ProductColor } from '../types/store';
import { formatBRL } from '../utils/cart';
import { VITRINE_CATEGORIES } from '../data/products';
import {
  ShoppingBag,
  Eye,
  Heart,
  Search,
  Filter,
  Grid3X3,
  Columns2,
  Sparkles,
  SlidersHorizontal,
  Check
} from 'lucide-react';

interface CollectionProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size?: string | null, color?: string | null) => void;
  searchQuery?: string;
  setSearchQuery?: (q: string) => void;
}

export const Collection: React.FC<CollectionProps> = ({
  products,
  onQuickView,
  onAddToCart,
  searchQuery = '',
  setSearchQuery
}) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [layoutMode, setLayoutMode] = useState<'4col' | '2col'>('4col');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [wishlistedIds, setWishlistedIds] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<Record<string, ProductColor>>({});
  const [addedItemEffect, setAddedItemEffect] = useState<string | null>(null);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlistedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectColor = (productId: string, color: ProductColor, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color
    }));
  };

  const handleAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const activeColor = selectedColors[product.id]?.name || (product.colors ? product.colors[0].name : null);
    const activeSize = product.sizes ? product.sizes[0] : null;
    onAddToCart(product, activeSize, activeColor);
    setAddedItemEffect(product.id);
    setTimeout(() => setAddedItemEffect(null), 1800);
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCat = selectedCat === 'all' || p.cat === selectedCat;
        const matchesSearch =
          !searchQuery ||
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.catLabel.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return 0;
      });
  }, [products, selectedCat, searchQuery, sortBy]);

  return (
    <section id="colecao" className="py-24 sm:py-32 bg-[#F3EFE7] text-[#0B0B0B] border-t border-[#0B0B0B]/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* HEADER DA VITRINE: TITULO & ORGANIZAÇÃO FORA DO COMUM */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#0B0B0B]/10">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-sans-luxury tracking-[0.35em] uppercase text-[#B8964F] mb-3">
              <span className="w-8 h-[1px] bg-[#B8964F]" />
              <span>Nuova Collezione · Vitrine Sartorial</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal tracking-tight text-[#0B0B0B]">
              Peças Exclusivas & <span className="italic text-[#B8964F]">Alfaiataria Moderna</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6558] font-sans-luxury font-light mt-2 max-w-xl leading-relaxed">
              Descubra a seleção completa de outerwear, calçados em couro nobre, peças em linho puro da Riviera e malharia fina com acabamento artesanal italiano.
            </p>
          </div>

          {/* VIEW SWITCHER & SORTING */}
          <div className="flex flex-wrap items-center gap-4 self-start lg:self-auto">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 border border-[#0B0B0B]/15 bg-white/50 px-3.5 py-2 text-xs font-sans-luxury">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#B8964F]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-[#0B0B0B] outline-none cursor-pointer tracking-wider uppercase text-[11px]"
              >
                <option value="featured">Ordem: Destaques</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>
            </div>

            {/* Grid Switcher (4 cols vs 2 cols) */}
            <div className="flex items-center border border-[#0B0B0B]/15 bg-white/50 p-1">
              <button
                onClick={() => setLayoutMode('4col')}
                className={`p-1.5 transition-colors cursor-pointer ${
                  layoutMode === '4col' ? 'bg-[#0B0B0B] text-[#F3EFE7]' : 'text-[#6E6558] hover:text-[#0B0B0B]'
                }`}
                title="Grade com 4 colunas"
                aria-label="4 colunas"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode('2col')}
                className={`p-1.5 transition-colors cursor-pointer ${
                  layoutMode === '2col' ? 'bg-[#0B0B0B] text-[#F3EFE7]' : 'text-[#6E6558] hover:text-[#0B0B0B]'
                }`}
                title="Grade editorial ampla com 2 colunas"
                aria-label="2 colunas"
              >
                <Columns2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* CATEGORY TABS RAIL (Organização Fora do Comum) */}
        <div className="mt-8 flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 no-scrollbar border-b border-[#0B0B0B]/10">
          {VITRINE_CATEGORIES.map((cat) => {
            const isActive = selectedCat === cat.id;
            const categoryCount = cat.id === 'all'
              ? products.length
              : products.filter((p) => p.cat === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-5 py-3 text-xs font-sans-luxury tracking-[0.2em] uppercase transition-all duration-300 relative whitespace-nowrap cursor-pointer flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-[#0B0B0B] text-[#F3EFE7] shadow-sm font-semibold'
                    : 'bg-white/40 text-[#6E6558] hover:bg-white hover:text-[#0B0B0B] border border-[#0B0B0B]/10'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full tabular-nums font-mono ${
                  isActive ? 'bg-[#B8964F] text-[#0B0B0B] font-bold' : 'bg-[#0B0B0B]/10 text-[#6E6558]'
                }`}>
                  {categoryCount}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="activeVitrineTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8964F]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* VITRINE PRODUCT GRID COM EFEITOS INTERATIVOS */}
        <div
          className={`mt-12 grid gap-x-6 gap-y-12 sm:gap-y-16 transition-all duration-300 ${
            layoutMode === '4col'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1 md:grid-cols-2 lg:gap-x-12'
          }`}
        >
          {filteredProducts.map((product, idx) => {
            const isWishlisted = wishlistedIds.includes(product.id);
            const activeColor = selectedColors[product.id] || (product.colors ? product.colors[0] : null);
            const isJustAdded = addedItemEffect === product.id;

            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                onClick={() => onQuickView(product)}
                className="group relative flex flex-col justify-between cursor-pointer select-none bg-transparent"
              >
                {/* PHOTO CONTAINER COM EFEITO DE ELEVAÇÃO E SOMBRA SUAVE */}
                <div className="relative aspect-[3/4] bg-[#EAE5DC] overflow-hidden border border-[#0B0B0B]/10 transition-all duration-500 group-hover:border-[#B8964F]/50 group-hover:shadow-xl">
                  {/* Product Image */}
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Soft studio floor shadow overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />

                  {/* BADGES SUPERIORES */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
                    {product.badge && (
                      <span className={`px-2.5 py-1 text-[9.5px] font-sans-luxury tracking-[0.2em] uppercase font-bold shadow-md ${
                        product.badge.includes('50%') || product.badge.includes('10%')
                          ? 'bg-[#8B2635] text-white'
                          : 'bg-[#0B0B0B] text-[#F3EFE7]'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                    {product.tag && (
                      <span className="px-2 py-0.5 text-[9px] font-sans-luxury tracking-wider uppercase bg-[#F3EFE7]/90 text-[#0B0B0B] border border-[#0B0B0B]/15 backdrop-blur-sm">
                        {product.tag}
                      </span>
                    )}
                  </div>

                  {/* BOTAO DE WISHLIST NO CANTO SUPERIOR DIREITO */}
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-[#F3EFE7] transition-all duration-300 z-10 shadow-sm cursor-pointer"
                    aria-label="Salvar na lista de desejos"
                  >
                    <Heart
                      className={`w-4 h-4 transition-transform active:scale-125 ${
                        isWishlisted ? 'fill-[#8B2635] text-[#8B2635]' : 'text-[#0B0B0B]'
                      }`}
                    />
                  </button>

                  {/* HOVER ACTION BAR (Desliza suavemente no hover) */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <button
                      onClick={(e) => handleAdd(product, e)}
                      className="flex-1 py-2.5 bg-[#F3EFE7] text-[#0B0B0B] hover:bg-[#B8964F] hover:text-[#0B0B0B] text-[10px] font-sans-luxury tracking-[0.22em] uppercase font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Adicionado!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Adicionar à Sacola</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="p-2.5 bg-[#0B0B0B]/80 text-[#F3EFE7] hover:bg-white hover:text-[#0B0B0B] transition-colors border border-white/20"
                      title="Ver detalhes da peça"
                      aria-label="Espiar"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* INFORMAÇÕES DA PEÇA (TÍTULO, PREÇO, PARCELAMENTO & CORES) */}
                <div className="pt-4 flex flex-col justify-between flex-1">
                  <div>
                    {/* Linha de Categoria e Origem */}
                    <p className="text-[10px] font-sans-luxury tracking-[0.25em] uppercase text-[#6E6558]">
                      {product.catLabel}
                    </p>

                    {/* Nome do Produto com transição de cor no hover */}
                    <h3 className="font-serif-luxury text-base sm:text-lg text-[#0B0B0B] group-hover:text-[#B8964F] transition-colors leading-snug mt-1">
                      {product.name}
                    </h3>

                    {/* Preços e Parcelamento (Estilo Loja de Luxo com Prime) */}
                    <div className="mt-2">
                      <div className="flex items-baseline flex-wrap gap-2">
                        <span className="font-sans-luxury text-base font-bold text-[#0B0B0B] tabular-nums">
                          {formatBRL(product.price)}
                        </span>
                        {product.tag && (
                          <span className="text-xs text-[#6E6558] font-sans-luxury">
                            ou <strong className="font-semibold text-[#8A6D3B]">{product.tag}</strong>
                          </span>
                        )}
                        {product.originalPrice && (
                          <span className="font-sans-luxury text-xs text-[#6E6558] line-through tabular-nums">
                            {formatBRL(product.originalPrice)}
                          </span>
                        )}
                      </div>

                      {/* Parcelamento */}
                      {product.installments && (
                        <p className="text-[11px] font-sans-luxury text-[#6E6558] mt-0.5 font-light">
                          ou <span className="font-medium text-[#0B0B0B]">{product.installments}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* SELETOR INTERATIVO DE CORES (COLOR SWATCHES) */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="mt-3.5 pt-3 border-t border-[#0B0B0B]/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {product.colors.map((c) => {
                          const isColorActive = activeColor?.hex === c.hex;
                          return (
                            <button
                              key={c.name}
                              onClick={(e) => handleSelectColor(product.id, c, e)}
                              className={`w-3.5 h-3.5 rounded-full border transition-all duration-200 cursor-pointer ${
                                isColorActive
                                  ? 'ring-2 ring-[#0B0B0B] ring-offset-1 scale-110'
                                  : 'border-black/20 hover:scale-110'
                              }`}
                              style={{ backgroundColor: c.hex }}
                              title={c.name}
                              aria-label={`Cor ${c.name}`}
                            />
                          );
                        })}
                      </div>

                      {/* Nome da cor ativa em miniatura */}
                      <span className="text-[9.5px] font-sans-luxury tracking-wider text-[#6E6558] truncate max-w-[120px]">
                        {activeColor?.name || product.colors[0].name}
                      </span>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* NENHUM PRODUTO ENCONTRADO */}
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <h4 className="font-serif-luxury text-2xl text-[#0B0B0B]">
              Nenhuma peça encontrada para esta busca.
            </h4>
            <p className="text-xs text-[#6E6558] font-sans-luxury mt-2">
              Tente redefinir os filtros ou o termo pesquisado.
            </p>
            <button
              onClick={() => {
                setSelectedCat('all');
                if (setSearchQuery) setSearchQuery('');
              }}
              className="mt-6 px-6 py-2.5 bg-[#0B0B0B] text-[#F3EFE7] text-xs font-sans-luxury tracking-widest uppercase hover:bg-[#B8964F] hover:text-[#0B0B0B] transition-colors"
            >
              Ver Todas as Peças
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
