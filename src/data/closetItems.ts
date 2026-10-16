export interface ClosetPiece {
  id: string;
  category: 'outerwear' | 'top' | 'bottom' | 'shoes' | 'accessory' | 'finishing';
  name: string;
  categoryLabel: string;
  price: number;
  material: string;
  origin: string;
  img: string;
  tag?: string;
  hotspot?: { x: number; y: number };
}

export interface CuratedLook {
  id: string;
  number: string;
  name: string;
  description: string;
  image: string;
  pieceIds: string[];
}

export const CLOSET_PIECES: Record<string, ClosetPiece> = {
  // Outerwear
  'cappotto-nebbia': {
    id: 'cappotto-nebbia',
    category: 'outerwear',
    categoryLabel: 'Sobretudo',
    name: 'Cappotto Nebbia',
    price: 2150,
    material: 'Lã Fiamminga 780g',
    origin: 'Roma',
    img: '/assets/img/cappotto-nebbia.svg',
    tag: 'Ícone da Casa'
  },
  'giacca-camoscio': {
    id: 'giacca-camoscio',
    category: 'outerwear',
    categoryLabel: 'Jaqueta',
    name: 'Giacca Camoscio Avorio',
    price: 1890,
    material: 'Camurça Plena Macia',
    origin: 'Florença',
    img: '/assets/img/hero-01.svg',
    tag: 'Edizione Limitata'
  },
  'abito-seta': {
    id: 'abito-seta',
    category: 'outerwear',
    categoryLabel: 'Vestido',
    name: 'Abito Seta Notte',
    price: 1680,
    material: 'Seda Pura Cortada no Viés',
    origin: 'Como',
    img: '/assets/img/abito-seta-notte.svg',
    tag: 'Alta Sartoria'
  },

  // Tops
  'maglione-cashmere': {
    id: 'maglione-cashmere',
    category: 'top',
    categoryLabel: 'Tricô',
    name: 'Maglione Cashmere a Trecce',
    price: 980,
    material: '100% Cashmere Cariaggi',
    origin: 'Úmbria',
    img: '/assets/img/hero-02.svg',
    tag: 'Pura Maciez'
  },
  'polo-seta-avorio': {
    id: 'polo-seta-avorio',
    category: 'top',
    categoryLabel: 'Camisa Polo',
    name: 'Polo Seta e Cotone Avorio',
    price: 490,
    material: 'Seda e Algodão Egípcio',
    origin: 'Milão',
    img: '/assets/img/shopper-avorio.svg'
  },

  // Bottoms
  'pantaloni-bianchi': {
    id: 'pantaloni-bianchi',
    category: 'bottom',
    categoryLabel: 'Calça',
    name: 'Pantaloni Sartoriali Avorio',
    price: 680,
    material: 'Lã Fria e Algodão Pima',
    origin: 'Roma',
    img: '/assets/img/hero-03.svg'
  },
  'pantaloni-neri': {
    id: 'pantaloni-neri',
    category: 'bottom',
    categoryLabel: 'Calça',
    name: 'Pantaloni Neri a Doppia Pince',
    price: 720,
    material: 'Lã Merino Australiana',
    origin: 'Biella',
    img: '/assets/img/abito-seta-notte.svg'
  },

  // Shoes
  'mocassino-roma': {
    id: 'mocassino-roma',
    category: 'shoes',
    categoryLabel: 'Calçado',
    name: 'Mocassino Roma Blake',
    price: 790,
    material: 'Couro Envelhecido a Óleo',
    origin: 'Marche',
    img: '/assets/img/mocassino-roma.svg'
  },
  'sneaker-pelle': {
    id: 'sneaker-pelle',
    category: 'shoes',
    categoryLabel: 'Calçado',
    name: 'Sneaker Sartoriale Avorio',
    price: 640,
    material: 'Couro de Bezerro Almofadado',
    origin: 'Vêneto',
    img: '/assets/img/shopper-avorio.svg'
  },
  'decollate-veluto': {
    id: 'decollate-veluto',
    category: 'shoes',
    categoryLabel: 'Calçado',
    name: 'Décolleté Velluto Bordô',
    price: 890,
    material: 'Veludo de Seda e Salto Agulha',
    origin: 'Marche',
    img: '/assets/img/decollate-veluto.svg'
  },

  // Primary Accessory
  'borsa-intreccio': {
    id: 'borsa-intreccio',
    category: 'accessory',
    categoryLabel: 'Bolsa',
    name: 'Borsa Intreccio Nera',
    price: 2890,
    material: 'Couro de Bezerro Trançado Manual',
    origin: 'Florença',
    img: '/assets/img/borsa-intreccio.svg'
  },
  'shopper-avorio': {
    id: 'shopper-avorio',
    category: 'accessory',
    categoryLabel: 'Bolsa',
    name: 'Shopper Cuoio Avorio',
    price: 1690,
    material: 'Couro Pleno de Flor Gravado',
    origin: 'Florença',
    img: '/assets/img/shopper-avorio.svg'
  },
  'orologio-cronografo': {
    id: 'orologio-cronografo',
    category: 'accessory',
    categoryLabel: 'Relógio',
    name: 'Cronografo Roma Oro & Acciaio',
    price: 1450,
    material: 'Aço Cirúrgico e Luneta em Ouro',
    origin: 'Genebra & Roma',
    img: '/assets/img/cintura-cuoio.svg'
  },

  // Finishing Touch
  'occhiale-vespri': {
    id: 'occhiale-vespri',
    category: 'finishing',
    categoryLabel: 'Óculos',
    name: 'Occhiale Vespri Oro Paládio',
    price: 420,
    material: 'Metal Banhado a Paládio Dourado',
    origin: 'Vêneto',
    img: '/assets/img/occhiale-vespri.svg'
  },
  'cintura-cuoio': {
    id: 'cintura-cuoio',
    category: 'finishing',
    categoryLabel: 'Cinto',
    name: 'Cintura Cuoio e Oro Maciço',
    price: 380,
    material: 'Couro Florentino 3,5mm',
    origin: 'Florença',
    img: '/assets/img/cintura-cuoio.svg'
  },
  'foulard-aurora': {
    id: 'foulard-aurora',
    category: 'finishing',
    categoryLabel: 'Foulard',
    name: 'Foulard Aurora em Twill de Seda',
    price: 310,
    material: 'Seda Pura Borda Rolotté',
    origin: 'Como',
    img: '/assets/img/foulard-aurora.svg'
  },
  'profumo-assoluto': {
    id: 'profumo-assoluto',
    category: 'finishing',
    categoryLabel: 'Fragrância',
    name: 'Profumo Assoluto Eau de Parfum',
    price: 195,
    material: 'Âmbar Seco, Figueira & Couro',
    origin: 'Roma & Grasse',
    img: '/assets/img/profumo-assoluto.svg'
  }
};

export const CURATED_LOOKS: CuratedLook[] = [
  {
    id: 'look-43',
    number: 'LOOK 01',
    name: 'Il Gentiluomo Romano',
    description: 'Sobretudo de lã fiamminga névoa sobre tricô de cashmere e calça de alfaiataria marfim.',
    image: '/assets/img/closet_pedestal_display.jpg',
    pieceIds: [
      'cappotto-nebbia',
      'maglione-cashmere',
      'pantaloni-bianchi',
      'mocassino-roma',
      'orologio-cronografo',
      'occhiale-vespri'
    ]
  },
  {
    id: 'look-44',
    number: 'LOOK 02',
    name: 'Notturno a Capri',
    description: 'Seda pura escura, sapatos de veludo bordô e bolsa intreccio com ferragens douradas.',
    image: '/assets/img/lookbook-02.svg',
    pieceIds: [
      'abito-seta',
      'polo-seta-avorio',
      'pantaloni-neri',
      'decollate-veluto',
      'borsa-intreccio',
      'foulard-aurora'
    ]
  },
  {
    id: 'look-45',
    number: 'LOOK 03',
    name: 'Sartoria Contemporânea',
    description: 'Camurça toscana aveludada, alfaiataria com pregas e tênis de couro marfim artesanal.',
    image: '/assets/img/lookbook-01.svg',
    pieceIds: [
      'giacca-camoscio',
      'polo-seta-avorio',
      'pantaloni-neri',
      'sneaker-pelle',
      'shopper-avorio',
      'cintura-cuoio'
    ]
  },
  {
    id: 'look-46',
    number: 'LOOK 04',
    name: 'Ateliê Weekend',
    description: 'Tricô trançado em cashmere, calça em lã fria, mocassins e assinatura olfativa da Maison.',
    image: '/assets/img/lookbook-03.svg',
    pieceIds: [
      'cappotto-nebbia',
      'maglione-cashmere',
      'pantaloni-bianchi',
      'mocassino-roma',
      'borsa-intreccio',
      'profumo-assoluto'
    ]
  }
];
