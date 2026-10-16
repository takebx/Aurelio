import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ClosetPiece } from '../data/closetItems';
import { Sparkles } from 'lucide-react';

interface MannequinViewerProps {
  outerwear?: ClosetPiece | null;
  top?: ClosetPiece | null;
  bottom?: ClosetPiece | null;
  shoes?: ClosetPiece | null;
  accessory?: ClosetPiece | null;
  finishing?: ClosetPiece | null;
  onSelectSlot: (category: string) => void;
  activeSlot: string;
}

export const MannequinViewer: React.FC<MannequinViewerProps> = ({
  outerwear,
  top,
  bottom,
  shoes,
  accessory,
  finishing,
  onSelectSlot,
  activeSlot
}) => {
  return (
    <div className="relative w-full aspect-[3/4] max-h-[720px] bg-[#E5DECFA0] border border-[#0B0B0B]/15 shadow-xl overflow-hidden flex items-center justify-center select-none group">
      {/* Real Atelier Arch Studio Photograph */}
      <img
        src="/assets/img/mannequin_single_atelier.jpg"
        alt="Manequim único de alta-costura no ateliê Aurelio Roma"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Recessed Warm Light Glow */}
      <div className="absolute inset-0 bg-radial-[at_50%_40%] from-[#B8964F]/10 via-transparent to-black/20 pointer-events-none" />

      {/* Scalable Vector Dressing Layers (Coordinate Box 0 0 600 800) */}
      <svg
        viewBox="0 0 600 800"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradients for fabrics */}
          <linearGradient id="gCashmere" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#EAE3D2" />
            <stop offset="50%" stop-color="#DDD3BF" />
            <stop offset="100%" stop-color="#C5BAA4" />
          </linearGradient>

          <linearGradient id="gWoolCoat" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#CBC4B7" />
            <stop offset="40%" stop-color="#B5AD9F" />
            <stop offset="100%" stop-color="#9A9283" />
          </linearGradient>

          <linearGradient id="gSuedeJacket" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#C49A6C" />
            <stop offset="50%" stop-color="#9E7345" />
            <stop offset="100%" stop-color="#7B542E" />
          </linearGradient>

          <linearGradient id="gSilkDress" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#242120" />
            <stop offset="60%" stop-color="#141312" />
            <stop offset="100%" stop-color="#090808" />
          </linearGradient>

          <linearGradient id="gPantsWhite" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#F2EDE2" />
            <stop offset="50%" stop-color="#E2D9C7" />
            <stop offset="100%" stop-color="#CBC0AC" />
          </linearGradient>

          <linearGradient id="gPantsBlack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#22201F" />
            <stop offset="100%" stop-color="#111010" />
          </linearGradient>

          <linearGradient id="gLeatherShoe" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3B2618" />
            <stop offset="60%" stop-color="#24140B" />
            <stop offset="100%" stop-color="#120804" />
          </linearGradient>

          <linearGradient id="gGoldAccent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#F5E4B3" />
            <stop offset="50%" stop-color="#B8964F" />
            <stop offset="100%" stop-color="#846626" />
          </linearGradient>

          {/* Cable knit pattern */}
          <pattern id="cableKnitPat" width="20" height="24" patternUnits="userSpaceOnUse">
            <rect width="20" height="24" fill="url(#gCashmere)" />
            <path d="M5 0 C10 6 10 18 5 24 M15 0 C10 6 10 18 15 24" fill="none" stroke="#BAAF9A" stroke-width="1.8" />
            <path d="M10 0 L10 24" fill="none" stroke="#CBC0AB" stroke-width="1.2" stroke-dasharray="3 3" />
          </pattern>

          {/* Woven Intreccio Leather Pattern */}
          <pattern id="mannequinIntreccio" width="12" height="12" patternUnits="userSpaceOnUse">
            <rect width="12" height="12" fill="#1C1815" />
            <rect x="0" y="0" width="5.5" height="5.5" fill="#292420" />
            <rect x="6" y="6" width="5.5" height="5.5" fill="#292420" />
          </pattern>
        </defs>

        {/* ======================================================== */}
        {/* LAYER 1: BASE TOP (Sweater / Polo / Shirt)               */}
        {/* ======================================================== */}
        {top && (
          <g id="layer-top" className="transition-all duration-500">
            {top.id === 'maglione-cashmere' ? (
              /* Cashmere Cable Knit Sweater */
              <g>
                {/* Torso garment */}
                <path
                  d="M260 215 C280 205 320 205 340 215 L355 240 C358 275 354 350 348 375 C320 380 280 380 252 375 C246 350 242 275 245 240 Z"
                  fill="url(#cableKnitPat)"
                  stroke="#A89D88"
                  stroke-width="1.5"
                />
                {/* Cable knit collar */}
                <path
                  d="M275 210 C290 206 310 206 325 210 C322 222 278 222 275 210 Z"
                  fill="#D8CEB9"
                  stroke="#9E927C"
                  stroke-width="1"
                />
                {/* Ribbed hem */}
                <path
                  d="M252 368 C275 374 325 374 348 368 L348 376 C325 382 275 382 252 376 Z"
                  fill="#CDC2AB"
                  stroke="#9E927C"
                  stroke-width="1"
                />
              </g>
            ) : (
              /* Silk / Cotton Polo Shirt */
              <g>
                <path
                  d="M260 215 C280 208 320 208 340 215 L354 240 C356 280 354 345 346 375 C320 380 280 380 254 375 C246 345 244 280 246 240 Z"
                  fill="#F4EEE4"
                  stroke="#D3C7B2"
                  stroke-width="1.5"
                />
                {/* Polo open collar */}
                <polygon points="280,212 300,245 290,215" fill="#EAE2D2" stroke="#B8AC98" stroke-width="1" />
                <polygon points="320,212 300,245 310,215" fill="#EAE2D2" stroke="#B8AC98" stroke-width="1" />
                <line x1="300" y1="245" x2="300" y2="280" stroke="#B8AC98" stroke-width="1" />
                <circle cx="300" cy="255" r="1.8" fill="#B8964F" />
                <circle cx="300" cy="270" r="1.8" fill="#B8964F" />
              </g>
            )}
          </g>
        )}

        {/* ======================================================== */}
        {/* LAYER 2: BOTTOM (Tailored Trousers)                      */}
        {/* ======================================================== */}
        {bottom && (
          <g id="layer-bottom" className="transition-all duration-500">
            {bottom.id === 'pantaloni-bianchi' ? (
              /* Ivory Tailored Trousers */
              <g>
                {/* Waistband */}
                <path d="M256 368 L344 368 L346 384 L254 384 Z" fill="url(#gPantsWhite)" stroke="#BFAF9B" stroke-width="1" />
                {/* Left Leg */}
                <path
                  d="M256 384 L298 384 L296 480 L290 670 L260 670 L252 480 Z"
                  fill="url(#gPantsWhite)"
                  stroke="#BFAF9B"
                  stroke-width="1.2"
                />
                {/* Right Leg */}
                <path
                  d="M302 384 L344 384 L348 480 L340 670 L310 670 L304 480 Z"
                  fill="url(#gPantsWhite)"
                  stroke="#BFAF9B"
                  stroke-width="1.2"
                />
                {/* Sharp center creases */}
                <line x1="275" y1="400" x2="275" y2="670" stroke="#9A8B77" stroke-width="0.8" />
                <line x1="325" y1="400" x2="325" y2="670" stroke="#9A8B77" stroke-width="0.8" />
                {/* Cuffs */}
                <rect x="260" y="662" width="30" height="8" fill="#D3C8B4" stroke="#A99B85" stroke-width="1" />
                <rect x="310" y="662" width="30" height="8" fill="#D3C8B4" stroke="#A99B85" stroke-width="1" />
              </g>
            ) : (
              /* Black Tailored Trousers */
              <g>
                <path d="M256 368 L344 368 L346 384 L254 384 Z" fill="url(#gPantsBlack)" stroke="#383432" stroke-width="1" />
                <path
                  d="M256 384 L298 384 L296 480 L290 670 L260 670 L252 480 Z"
                  fill="url(#gPantsBlack)"
                  stroke="#383432"
                  stroke-width="1.2"
                />
                <path
                  d="M302 384 L344 384 L348 480 L340 670 L310 670 L304 480 Z"
                  fill="url(#gPantsBlack)"
                  stroke="#383432"
                  stroke-width="1.2"
                />
                <line x1="275" y1="400" x2="275" y2="670" stroke="#484442" stroke-width="0.8" />
                <line x1="325" y1="400" x2="325" y2="670" stroke="#484442" stroke-width="0.8" />
                <rect x="260" y="662" width="30" height="8" fill="#181716" stroke="#383432" stroke-width="1" />
                <rect x="310" y="662" width="30" height="8" fill="#181716" stroke="#383432" stroke-width="1" />
              </g>
            )}
          </g>
        )}

        {/* ======================================================== */}
        {/* LAYER 3: OUTERWEAR (Coat / Suede Jacket / Dress)         */}
        {/* ======================================================== */}
        {outerwear && (
          <g id="layer-outerwear" className="transition-all duration-500">
            {outerwear.id === 'cappotto-nebbia' ? (
              /* Cappotto Nebbia - Long Italian Overcoat */
              <g>
                {/* Coat Lapels & Shoulders */}
                <path
                  d="M260 212 L225 240 C218 310 220 460 230 550 L275 550 L275 360 L300 240 L325 360 L325 550 L370 550 C380 460 382 310 375 240 L340 212 Z"
                  fill="url(#gWoolCoat)"
                  stroke="#7A7264"
                  stroke-width="1.8"
                />
                {/* Broad Notched Lapel Wings */}
                <polygon points="260,212 288,270 262,285 240,240" fill="#9C9486" stroke="#70695B" stroke-width="1.2" />
                <polygon points="340,212 312,270 338,285 360,240" fill="#9C9486" stroke="#70695B" stroke-width="1.2" />
                {/* Belt & Buckle */}
                <rect x="238" y="340" width="124" height="22" fill="#8E8678" stroke="#665F52" stroke-width="1" />
                <rect x="288" y="336" width="24" height="30" rx="3" fill="url(#gGoldAccent)" stroke="#8F7132" stroke-width="1" />
                <rect x="294" y="342" width="12" height="18" rx="1" fill="#8E8678" />
                {/* Horn buttons */}
                <circle cx="282" cy="280" r="4.5" fill="#3D372F" />
                <circle cx="318" cy="280" r="4.5" fill="#3D372F" />
                <circle cx="282" cy="310" r="4.5" fill="#3D372F" />
                <circle cx="318" cy="310" r="4.5" fill="#3D372F" />
              </g>
            ) : outerwear.id === 'giacca-camoscio' ? (
              /* Giacca Camoscio - Suede Tailored Jacket */
              <g>
                <path
                  d="M260 214 L228 242 C222 300 224 410 234 440 L366 440 C376 410 378 300 372 242 L340 214 Z"
                  fill="url(#gSuedeJacket)"
                  stroke="#5C3E1F"
                  stroke-width="1.8"
                />
                {/* Suede collar & lapels */}
                <polygon points="260,214 286,275 258,285 242,242" fill="#875E34" stroke="#5C3E1F" stroke-width="1.2" />
                <polygon points="340,214 314,275 342,285 358,242" fill="#875E34" stroke="#5C3E1F" stroke-width="1.2" />
                {/* Flap pockets */}
                <rect x="245" y="375" width="35" height="18" rx="2" fill="#75502A" stroke="#52371A" stroke-width="1" />
                <rect x="320" y="375" width="35" height="18" rx="2" fill="#75502A" stroke="#52371A" stroke-width="1" />
                {/* Center front zip/buttons */}
                <line x1="300" y1="275" x2="300" y2="440" stroke="#52371A" stroke-width="2" />
                <circle cx="300" cy="310" r="3.5" fill="url(#gGoldAccent)" />
                <circle cx="300" cy="350" r="3.5" fill="url(#gGoldAccent)" />
                <circle cx="300" cy="390" r="3.5" fill="url(#gGoldAccent)" />
              </g>
            ) : (
              /* Abito Seta Notte - Black Silk Evening Gown */
              <g>
                {/* Delicate spaghetti straps */}
                <line x1="268" y1="180" x2="265" y2="230" stroke="#121110" stroke-width="3" stroke-linecap="round" />
                <line x1="332" y1="180" x2="335" y2="230" stroke="#121110" stroke-width="3" stroke-linecap="round" />
                {/* Bodice & Bias skirt */}
                <path
                  d="M260 230 C280 220 320 220 340 230 L350 330 C345 420 375 580 375 660 C335 670 265 670 225 660 C225 580 255 420 250 330 Z"
                  fill="url(#gSilkDress)"
                  stroke="#1E1C1B"
                  stroke-width="1.5"
                />
                <circle cx="300" cy="235" r="3.5" fill="url(#gGoldAccent)" />
                {/* Silk sheen drapery lines */}
                <path d="M265 240 C280 380 285 520 270 660" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2" />
                <path d="M335 240 C320 380 315 520 330 660" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2" />
              </g>
            )}
          </g>
        )}

        {/* ======================================================== */}
        {/* LAYER 4: FOOTWEAR (At bottom base on marble floor)       */}
        {/* ======================================================== */}
        {shoes && (
          <g id="layer-shoes" className="transition-all duration-500">
            {shoes.id === 'mocassino-roma' ? (
              /* Mocassino Roma Loafers */
              <g>
                {/* Soft floor shadow */}
                <ellipse cx="275" cy="695" rx="22" ry="7" fill="rgba(11,11,11,0.22)" filter="blur(4px)" />
                <ellipse cx="325" cy="695" rx="22" ry="7" fill="rgba(11,11,11,0.22)" filter="blur(4px)" />
                {/* Left Shoe */}
                <path d="M255 680 C254 665 285 665 295 680 L295 690 L255 690 Z" fill="url(#gLeatherShoe)" />
                <rect x="254" y="688" width="42" height="5" rx="1.5" fill="#0B0704" />
                <line x1="256" y1="688" x2="294" y2="688" stroke="#8F7861" stroke-width="0.8" stroke-dasharray="2 1" />
                {/* Right Shoe */}
                <path d="M305 680 C304 665 335 665 345 680 L345 690 L305 690 Z" fill="url(#gLeatherShoe)" />
                <rect x="304" y="688" width="42" height="5" rx="1.5" fill="#0B0704" />
                <line x1="306" y1="688" x2="344" y2="688" stroke="#8F7861" stroke-width="0.8" stroke-dasharray="2 1" />
              </g>
            ) : shoes.id === 'sneaker-pelle' ? (
              /* Sneaker Sartoriale Avorio */
              <g>
                <ellipse cx="275" cy="695" rx="24" ry="7" fill="rgba(11,11,11,0.2)" filter="blur(4px)" />
                <ellipse cx="325" cy="695" rx="24" ry="7" fill="rgba(11,11,11,0.2)" filter="blur(4px)" />
                {/* Left Sneaker */}
                <path d="M252 682 C252 668 288 668 298 682 L298 692 L252 692 Z" fill="#F4EEE3" stroke="#D3C7B2" stroke-width="1" />
                <rect x="250" y="688" width="50" height="6" rx="2" fill="#E8DEC9" />
                <circle cx="260" cy="682" r="2" fill="url(#gGoldAccent)" />
                {/* Right Sneaker */}
                <path d="M302 682 C302 668 338 668 348 682 L348 692 L302 692 Z" fill="#F4EEE3" stroke="#D3C7B2" stroke-width="1" />
                <rect x="300" y="688" width="50" height="6" rx="2" fill="#E8DEC9" />
                <circle cx="340" cy="682" r="2" fill="url(#gGoldAccent)" />
              </g>
            ) : (
              /* Décolleté Velluto Pump */
              <g>
                <ellipse cx="275" cy="695" rx="20" ry="6" fill="rgba(11,11,11,0.2)" filter="blur(4px)" />
                <ellipse cx="325" cy="695" rx="20" ry="6" fill="rgba(11,11,11,0.2)" filter="blur(4px)" />
                {/* Left Pump */}
                <path d="M256 680 C255 670 280 670 292 680 L292 688 L256 688 Z" fill="#5E1A23" />
                <rect x="256" y="686" width="3" height="10" fill="#1C0508" />
                <circle cx="288" cy="678" r="2.5" fill="url(#gGoldAccent)" />
                {/* Right Pump */}
                <path d="M308 680 C307 670 332 670 344 680 L344 688 L308 688 Z" fill="#5E1A23" />
                <rect x="341" y="686" width="3" height="10" fill="#1C0508" />
                <circle cx="312" cy="678" r="2.5" fill="url(#gGoldAccent)" />
              </g>
            )}
          </g>
        )}

        {/* ======================================================== */}
        {/* LAYER 5: ACCESSORIES (Bag beside pedestal)               */}
        {/* ======================================================== */}
        {accessory && (
          <g id="layer-accessory" className="transition-all duration-500">
            {accessory.id === 'borsa-intreccio' ? (
              /* Borsa Intreccio on Side Pedestal */
              <g transform="translate(370, 560)">
                <ellipse cx="40" cy="85" rx="36" ry="10" fill="rgba(11,11,11,0.25)" filter="blur(5px)" />
                {/* Handle */}
                <path d="M24 30 C24 8 56 8 56 30" fill="none" stroke="#161311" stroke-width="5" stroke-linecap="round" />
                {/* Bag Body */}
                <rect x="12" y="24" width="56" height="58" rx="8" fill="url(#mannequinIntreccio)" stroke="#110E0C" stroke-width="1.2" />
                <rect x="34" y="48" width="12" height="9" rx="1.5" fill="url(#gGoldAccent)" />
                <circle cx="40" cy="52.5" r="1.5" fill="#110E0C" />
              </g>
            ) : accessory.id === 'shopper-avorio' ? (
              /* Shopper Avorio Tote */
              <g transform="translate(370, 550)">
                <ellipse cx="40" cy="95" rx="38" ry="10" fill="rgba(11,11,11,0.22)" filter="blur(5px)" />
                <path d="M28 25 C28 5 52 5 52 25" fill="none" stroke="#C4B8A2" stroke-width="4" stroke-linecap="round" />
                <polygon points="15,22 65,22 68,90 12,90" fill="#EDE6D8" stroke="#BFAF99" stroke-width="1.2" />
                <circle cx="40" cy="56" r="10" fill="none" stroke="#C4B8A2" stroke-width="1" />
                <text x="40" y="59" text-anchor="middle" font-size="6" font-family="'Bodoni Moda', serif" fill="#887860">AR</text>
              </g>
            ) : (
              /* Cronografo Roma Watch Displayed on Plinth */
              <g transform="translate(390, 590)">
                <ellipse cx="25" cy="55" rx="20" ry="7" fill="rgba(11,11,11,0.25)" filter="blur(4px)" />
                <rect x="18" y="25" width="14" height="28" rx="7" fill="#2D2B2A" stroke="url(#gGoldAccent)" stroke-width="1.5" />
                <circle cx="25" cy="39" r="10" fill="#0C0B0B" stroke="url(#gGoldAccent)" stroke-width="1.2" />
                <line x1="25" y1="39" x2="25" y2="33" stroke="url(#gGoldAccent)" stroke-width="1" />
                <line x1="25" y1="39" x2="30" y2="39" stroke="url(#gGoldAccent)" stroke-width="0.8" />
              </g>
            )}
          </g>
        )}

        {/* ======================================================== */}
        {/* LAYER 6: FINISHING TOUCH (Sunglasses on lapel or Scarf)  */}
        {/* ======================================================== */}
        {finishing && (
          <g id="layer-finishing" className="transition-all duration-500">
            {finishing.id === 'occhiale-vespri' ? (
              /* Sunglasses tucked into chest pocket / collar */
              <g transform="translate(305, 260) scale(0.65)">
                <ellipse cx="14" cy="12" rx="14" ry="11" fill="#1C1E22" stroke="url(#gGoldAccent)" stroke-width="2" />
                <ellipse cx="44" cy="12" rx="14" ry="11" fill="#1C1E22" stroke="url(#gGoldAccent)" stroke-width="2" />
                <line x1="28" y1="12" x2="30" y2="12" stroke="url(#gGoldAccent)" stroke-width="2" />
              </g>
            ) : finishing.id === 'foulard-aurora' ? (
              /* Silk Twill Scarf draped at neck */
              <g transform="translate(270, 195)">
                <ellipse cx="30" cy="20" rx="32" ry="16" fill="#EADFC9" stroke="#C4B495" stroke-width="1.5" />
                <path d="M22 28 L15 65 L32 55 L38 30 Z" fill="#D8CAA8" stroke="#B8A580" stroke-width="1" />
                <circle cx="30" cy="24" r="3" fill="url(#gGoldAccent)" />
              </g>
            ) : finishing.id === 'cintura-cuoio' ? (
              /* Florentine Leather Belt at waist */
              <g transform="translate(254, 366)">
                <rect x="0" y="0" width="92" height="12" fill="#3B2618" stroke="#22140A" stroke-width="0.8" />
                <rect x="36" y="-2" width="20" height="16" rx="2" fill="url(#gGoldAccent)" stroke="#8F7132" stroke-width="0.8" />
                <line x1="0" y1="6" x2="92" y2="6" stroke="#8E7860" stroke-width="0.5" stroke-dasharray="2 1" />
              </g>
            ) : (
              /* Profumo Assoluto Bottle at Base */
              <g transform="translate(190, 640)">
                <ellipse cx="20" cy="45" rx="18" ry="6" fill="rgba(11,11,11,0.2)" filter="blur(3px)" />
                <rect x="15" y="10" width="10" height="8" rx="1" fill="url(#gGoldAccent)" />
                <rect x="10" y="18" width="20" height="26" rx="4" fill="#683F15" stroke="url(#gGoldAccent)" stroke-width="1" />
                <rect x="13" y="24" width="14" height="14" rx="1" fill="#F4EEE3" />
                <text x="20" y="32" text-anchor="middle" font-size="3" font-family="'Bodoni Moda', serif" fill="#0B0B0B">AR</text>
              </g>
            )}
          </g>
        )}
      </svg>

      {/* MINIMALIST HUD BADGE (Clean, modern, no dots) */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] font-sans-luxury tracking-[0.24em] uppercase text-[#0B0B0B] bg-[#F3EFE7]/90 px-4 py-2.5 backdrop-blur-md border border-[#0B0B0B]/10">
        <span className="flex items-center gap-2 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#B8964F]" />
          <span>Manequim Ateliê Roma · Visualização em Tempo Real</span>
        </span>
        <span className="text-[#6E6558] hidden sm:inline">
          Toque nas peças ao lado para vestir
        </span>
      </div>
    </div>
  );
};
