import { Product } from '../types/store';

export const SHOWCASE_PRODUCTS: Product[] = [
  // =========================================================================
  // 01. JAQUETAS & CASACOS (Peças Únicas e Sem Repetição)
  // =========================================================================
  {
    id: 'jaqueta-voga',
    name: 'Jaqueta Voga',
    cat: 'outerwear',
    catLabel: 'Jaquetas & Casacos',
    price: 999,
    installments: '5x R$ 199,93',
    tag: 'R$ 649,15 Prime',
    badge: 'Novo',
    img: '/assets/img/vitrine_jacket.jpg',
    desc: 'Jaqueta casual confeccionada em sarja nobre cáqui claro com fechamento frontal por zíper, colarinho camiseiro clássico e acabamento com punhos reforçados.',
    details: [
      'Sarja de algodão de toque aveludado e caimento leve',
      'Fecho frontal por zíper metálico de alta durabilidade',
      'Colarinho dobrável tipo camisa com pesponto limpo',
      'Bolsos laterais embutidos funcionais',
      'Modelagem regular confortável'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Cáqui Claro', hex: '#D2B58C' },
      { name: 'Preto', hex: '#1C1C1C' },
      { name: 'Azul Marinho', hex: '#1B2A4A' }
    ],
    origin: 'Brasil & Itália',
    material: 'Sarja 100% Algodão'
  },
  {
    id: 'sueter-tricot-veraneio',
    name: 'Sueter Tricot Veraneio',
    cat: 'outerwear',
    catLabel: 'Malharia & Tricot',
    price: 699,
    installments: '3x R$ 119,93',
    tag: 'R$ 684,15 Prime',
    badge: 'Destaque',
    img: '/assets/img/item_sueter_tricot.jpg',
    desc: 'Suéter de tricot fino com textura em relevo padronizado horizontal, decote careca canelado e punhos ajustados. Ideal para dias amenos e sobreposições elegantes com camisas.',
    details: [
      'Trama trabalhada com micropontos texturizados',
      'Gola redonda anatômica com acabamento canelado',
      'Fio penteado macio que não pinica na pele',
      'Caimento ajustado na medida certa',
      'Perfeito para combinar com calças de alfaiataria'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Bege Areia', hex: '#D7C4A5' },
      { name: 'Off-White', hex: '#F5F5F0' },
      { name: 'Terracota', hex: '#A75D43' }
    ],
    origin: 'Brasil & Itália',
    material: '100% Algodão Tricotado'
  },
  {
    id: 'jaqueta-regular-tech',
    name: 'Jaqueta Regular Tech',
    cat: 'outerwear',
    catLabel: 'Jaquetas & Casacos',
    price: 1469,
    installments: '5x R$ 264,63',
    tag: 'R$ 1.274,15 Prime',
    badge: 'Tech',
    img: '/assets/img/item_jaqueta_puffer.jpg',
    desc: 'Jaqueta com tecido técnico e isolamento térmico na elegante cor preta, gomos chevron com capuz ajustável e fechamento frontal por zíper vedado.',
    details: [
      'Membrana técnica corta-vento com tratamento hidrorepelente',
      'Capuz anatômico com cordões ajustáveis de alta precisão',
      'Preenchimento térmico leve com excelente retenção de calor',
      'Fechamento por zíper frontal emborrachado',
      'Design funcional para uso urbano e viagens'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    colors: [
      { name: 'Preto Total', hex: '#111111' },
      { name: 'Cinza Chumbo', hex: '#3C4048' }
    ],
    origin: 'Brasil & Itália',
    material: 'Tecido Técnico 3-Camadas'
  },
  {
    id: 'jaqueta-bomber-toronto',
    name: 'Jaqueta Bomber Toronto',
    cat: 'outerwear',
    catLabel: 'Jaquetas & Casacos',
    price: 699.50,
    originalPrice: 1500,
    discountPercentage: 50,
    installments: '3x R$ 187,73',
    tag: '50% OFF',
    badge: '-50%',
    img: '/assets/img/item_bomber_toronto.jpg',
    desc: 'Jaqueta bomber minimalista em tecido acetinado preto com gola ereta canelada, forro contrastante, fechamento frontal por zíper metálico e punhos de toque sedoso.',
    details: [
      'Tecido tecnológico acetinado encorpado com acabamento fosco',
      'Gola tipo padre com ribana canelada macia',
      'Cós e punhos com elástico encapado de retenção',
      'Bolsos embutidos com forro especial',
      'Design refinado para ocasiões casuais e noturnas'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Preto Clássico', hex: '#111111' },
      { name: 'Marrom Tabaco', hex: '#5A3825' }
    ],
    origin: 'Brasil & Itália',
    material: 'Algodão Acetinado & Poliamida'
  },
  {
    id: 'sueter-moletom-basico-new',
    name: 'Sueter Moletom Basico New',
    cat: 'outerwear',
    catLabel: 'Malharia & Moletom',
    price: 418,
    originalPrice: 499,
    discountPercentage: 16,
    installments: '3x R$ 188,40',
    tag: 'Essencial',
    badge: 'Oferta',
    img: '/assets/img/curated_wardrobe_flatlay.jpg',
    desc: 'Blusa moletom básica gola careca com toque aveludado peletizado, bordado minimalista tom sobre tom no peito e acabamento em ribana canelada.',
    details: [
      'Moletom de algodão sustentável com interior macio',
      'Acabamento peletizado peach-touch na superfície',
      'Gola, punhos e barra com ribana canelada reforçada',
      'Modelagem regular com caimento alinhado',
      'Não desbota nem deforma com as lavagens'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    colors: [
      { name: 'Preto Total', hex: '#141414' },
      { name: 'Terracota', hex: '#8B4513' },
      { name: 'Off-White', hex: '#EBEBEB' }
    ],
    origin: 'Brasil & Itália',
    material: '100% Algodão Peletizado'
  },

  // =========================================================================
  // 02. CALÇADOS & TÊNIS (Peças Únicas e Sem Repetição)
  // =========================================================================
  {
    id: 'tenis-rsv-croma-001',
    name: 'Tenis Rsv Croma 001',
    cat: 'footwear',
    catLabel: 'Calçados & Tênis',
    price: 699,
    installments: '5x R$ 118,83',
    tag: 'R$ 594,15 Prime',
    badge: 'Lançamento',
    img: '/assets/img/vitrine_sneakers.jpg',
    desc: 'Tênis monocromático esculpido em nobuck premium tom cinza gelo, linhas fluidas sem pespontos frontais e solado caixa de borracha natural vulcanizada.',
    details: [
      'Cabedal em nobuck de alta maciez aveludado',
      'Construção anatômica sem costuras aparentes na biqueira',
      'Palmilha ortopédica em PU forrada em couro legítimo',
      'Solado monocromático em borracha natural vulcanizada',
      'Acompanha cadarços achatados encerados'
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Cinza Gelo Nobuck', hex: '#C2C4BE' },
      { name: 'Areia', hex: '#C0B398' },
      { name: 'Chumbo', hex: '#484848' }
    ],
    origin: 'Brasil & Itália',
    material: 'Couro Nobuck & Borracha Vulcanizada'
  },
  {
    id: 'tenis-rsv-rover-v-preto',
    name: 'Tenis Rsv Rover V (Preto Couro)',
    cat: 'footwear',
    catLabel: 'Calçados & Tênis',
    price: 699,
    installments: '5x R$ 118,83',
    tag: 'R$ 594,15 Prime',
    badge: 'Mais Vendido',
    img: '/assets/img/item_tenis_preto.jpg',
    desc: 'Tênis clássico de perfil baixo em couro legítimo preto fosco com solado caixa off-white costurado a 360°, interior acolchoado e passadores reforçados.',
    details: [
      'Couro legítimo integral com toque encerado macio',
      'Solado caixa de 3,2 cm costurado perimetralmente (360°)',
      'Forro interno antitranspirante acolchoado',
      'Cadarço chato encerado em algodão puro',
      'Solado de tração com ranhuras antiaderentes'
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Preto com Sola Creme', hex: '#1C1C1C' },
      { name: 'All-Black', hex: '#0B0B0B' }
    ],
    origin: 'Brasil & Itália',
    material: '100% Couro Legítimo & Borracha'
  },
  {
    id: 'tenis-rsv-rover-v-branco',
    name: 'Tenis Rsv Rover V (Branco Off-White)',
    cat: 'footwear',
    catLabel: 'Calçados & Tênis',
    price: 699,
    installments: '5x R$ 118,83',
    tag: 'R$ 594,15 Prime',
    badge: 'Essencial',
    img: '/assets/img/item_tenis_branco.jpg',
    desc: 'Tênis urbano casual em couro napa branco marfim com sola creme tom sobre tom, palmilha de memória de alta densidade e acabamento refinado.',
    details: [
      'Couro napa natural resistente a vincos',
      'Acabamento encerado que facilita a limpeza',
      'Palmilha macia forrada em couro com amortecimento de impacto',
      'Cadarço de algodão tonal com passadores perfurados limpos',
      'Versatilidade máxima para combinar com calças e bermudas'
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Off-White Marfim', hex: '#F0ECE1' },
      { name: 'Branco Puro', hex: '#FFFFFF' }
    ],
    origin: 'Brasil & Itália',
    material: 'Couro Napa Legítimo'
  },
  {
    id: 'tenis-rsv-kyrus',
    name: 'Tenis Rsv Kyrus',
    cat: 'footwear',
    catLabel: 'Calçados & Tênis',
    price: 799,
    installments: '5x R$ 135,83',
    tag: 'R$ 679,15 Prime',
    badge: 'Premium',
    img: '/assets/img/item_tenis_whisky.jpg',
    desc: 'Tênis casual com a textura granada natural do couro floater caramelo, costura aparente em ponto luva na biqueira e puxador traseiro reforçado.',
    details: [
      'Couro floater legítimo com textura granada rústica',
      'Vira com pesponto aparente costurado à mão',
      'Puxador traseiro em couro para facilidade de calce',
      'Solado robusto off-white de borracha de alta tração',
      'Palmilha de memória com suporte no arco plantar'
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Caramelo Floater', hex: '#BD7A3E' },
      { name: 'Café', hex: '#3B2416' }
    ],
    origin: 'Brasil & Itália',
    material: 'Couro Bovino Floater'
  },

  // =========================================================================
  // 03. LINHO & RESORT (Peças Únicas e Sem Repetição)
  // =========================================================================
  {
    id: 'short-praia-liso-altinna',
    name: 'Short Praia Liso Altinna',
    cat: 'resort',
    catLabel: 'Linho & Resort',
    price: 399,
    installments: '3x R$ 115,05',
    tag: 'R$ 339,15 Prime',
    badge: 'Secagem Rápida',
    img: '/assets/img/vitrine_linen.jpg',
    desc: 'Short de banho em tecido tecnológico com toque peletizado macio, secagem ultrarrápida, forro em microtela confortável e cós elástico.',
    details: [
      'Tecido de secagem ultrarrápida (15 minutos)',
      'Toque peletizado tipo pele de pêssego',
      'Cós elástico com cordão ajustável e ponteiras metálicas',
      'Forro em microtela elástica que não aperta',
      'Bolso traseiro com dreno de água'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Bege Areia', hex: '#D7C4A5' },
      { name: 'Preto Noite', hex: '#111111' },
      { name: 'Verde Sálvia', hex: '#6B7A6A' }
    ],
    origin: 'Brasil & Itália',
    material: 'Microfibra Peletizada de Alta Densidade'
  },
  {
    id: 'bermuda-malha-waffle-marrom',
    name: 'Bermuda Malha Waffle',
    cat: 'resort',
    catLabel: 'Linho & Resort',
    price: 299,
    installments: '2x R$ 127,08',
    tag: 'R$ 254,15 Prime',
    badge: 'Waffle Favo',
    img: '/assets/img/item_bermuda_waffle.jpg',
    desc: 'Bermuda confeccionada em malha texturizada em favo de mel waffle encorpada, cós com cordão reforçado e caimento moderno acima do joelho.',
    details: [
      'Algodão puro com tecitura waffle encorpada e respirável',
      'Cós em ribana elástica com cordão pespontado',
      'Bolsos faca laterais com costura reforçada',
      'Caimento moderno na altura ideal acima do joelho',
      'Toque macio que não amarrota'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Terracota Rust', hex: '#A34833' },
      { name: 'Marrom Café', hex: '#482D1C' },
      { name: 'Preto', hex: '#1A1A1A' }
    ],
    origin: 'Brasil & Itália',
    material: 'Malha Waffle 100% Algodão'
  },
  {
    id: 'short-praia-hamptons-lente-floral',
    name: 'Short Praia Hamptons Lente Floral',
    cat: 'resort',
    catLabel: 'Linho & Resort',
    price: 599,
    installments: '5x R$ 101,83',
    tag: 'R$ 509,15 Prime',
    badge: 'Estampado',
    img: '/assets/img/item_resort_floral.jpg',
    desc: 'Estampa botânica refinada inspirada na vegetação da Riviera sobre base areia toscana com secagem rápida e forro macio anatômico.',
    details: [
      'Estamparia digital permanente de altíssima definição',
      'Base fosca com toque sedoso resistente a cloro e sal',
      'Forro interno em microfibra macia antialérgica',
      'Ponteiras do cordão banhadas a ouro fosco',
      'Design exclusivo de ateliê'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Floral Areia', hex: '#D2BE9B' }
    ],
    origin: 'Brasil & Itália',
    material: 'Tecido Técnico Estampado Digital'
  },

  // =========================================================================
  // 04. POLOS & TRICOT (Peças Únicas e Sem Repetição)
  // =========================================================================
  {
    id: 'polo-maquinetado-lina-vermelha',
    name: 'Polo Maquinetado Lina',
    cat: 'polo',
    catLabel: 'Camisas Polo & Tricot',
    price: 459,
    installments: '4x R$ 97,54',
    tag: 'R$ 390,15 Prime',
    badge: 'Micro-Estrutura',
    img: '/assets/img/vitrine_polo.jpg',
    desc: 'Camisa polo com textura maquinetada em relevo geométrico fino que confere corpo e profundidade à peça, colarinho estruturado e botões tonais.',
    details: [
      'Malha maquinetada exclusiva com micro-desenhos em relevo',
      'Gola e peitilho reforçados com entretela leve',
      'Toque macio com respirabilidade avançada contra calor',
      'Tingimento reativo em tom telha resistente a desbotamento',
      'Caimento moderno com ombro no lugar'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    colors: [
      { name: 'Vermelho Telha', hex: '#9E382B' },
      { name: 'Preto Noite', hex: '#1B1B1B' },
      { name: 'Areia', hex: '#D8C7B0' }
    ],
    origin: 'Brasil & Itália',
    material: 'Malha Maquinetada 100% Algodão'
  },
  {
    id: 'polo-tricot-navy',
    name: 'Polo Tricot Navy',
    cat: 'polo',
    catLabel: 'Camisas Polo & Tricot',
    price: 599,
    installments: '5x R$ 101,83',
    tag: 'R$ 509,15 Prime',
    badge: 'Johnny Collar',
    img: '/assets/img/item_polo_listrada.jpg',
    desc: 'Gola polo aberta estilo Johnny sem botões, padronagem listrada refinada sobre base marfim e malha com respirabilidade natural.',
    details: [
      'Colarinho tipo Johnny em decote V suave sem botões',
      'Fio leve de algodão orgânico com toque de frescor',
      'Listras finas tecidas no próprio tear jacquard',
      'Caimento reto com pequenas fendas laterais na barra',
      'Acabamento suave ao toque de pele'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Marfim com Listras Areia', hex: '#EDE6D8' },
      { name: 'Azul Marinho com Branco', hex: '#1C2938' }
    ],
    origin: 'Brasil & Itália',
    material: '100% Algodão Penteado Fio 50'
  },
  {
    id: 'polo-regular-soft-touch-branca',
    name: 'Polo Regular Soft Touch (Branca)',
    cat: 'polo',
    catLabel: 'Camisas Polo & Tricot',
    price: 499,
    installments: '4x R$ 106,04',
    tag: 'R$ 424,15 Prime',
    badge: 'Algodão Pima',
    img: '/assets/img/item_polo_branca.jpg',
    desc: 'Confeccionada com o puro algodão Pima peruano de fibra extralonga, toque aveludado único, brilho sedoso e resistência superior a lavagens.',
    details: [
      '100% Algodão Pima peruano colhido manualmente',
      'Toque aveludado Soft Touch hipoalergênico',
      'Gola que permanece alinhada ao longo de todo o dia',
      'Aberturas laterais reforçadas com fita espinha de peixe',
      'Botões de madrepérola legítima com gravação da marca'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    colors: [
      { name: 'Branco Puro', hex: '#FFFFFF' },
      { name: 'Preto Noite', hex: '#111111' },
      { name: 'Azul Petróleo', hex: '#214D63' }
    ],
    origin: 'Brasil & Itália',
    material: '100% Algodão Pima Fio Nobre'
  }
];

export const VITRINE_CATEGORIES = [
  { id: 'all', label: 'Todas as Peças', count: 15 },
  { id: 'outerwear', label: 'Jaquetas & Casacos', count: 5 },
  { id: 'footwear', label: 'Calçados & Tênis', count: 4 },
  { id: 'resort', label: 'Linho & Resort', count: 3 },
  { id: 'polo', label: 'Polos & Tricot', count: 3 }
] as const;

export const PRODUCTS = SHOWCASE_PRODUCTS;
export const CATEGORIES = VITRINE_CATEGORIES;
