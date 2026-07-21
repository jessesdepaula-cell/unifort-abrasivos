export type ProductCategory =
  | 'discos-diamantados'
  | 'brocas'
  | 'polimento'
  | 'impermeabilizacao'
  | 'colagem'
  | 'medicao'
  | 'epi'
  | 'acessorios';

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  short: string;
  specs: { label: string; value: string }[];
  price: number;
  oldPrice?: number;
  badge?: 'PRO' | 'LSM' | 'EXTRA FINO' | 'NOVO' | 'TOP' | 'SILENCIOSO';
  accent: 'orange' | 'gold' | 'red' | 'navy';
  diameterMm: number;
  rim: 'turbo' | 'segmentado' | 'continuo' | 'turbo-fino';
};

export const PRODUCTS: Product[] = [
  // ============= DISCOS DIAMANTADOS =============
  {
    id: 'uft-porc-110-argacon',
    name: 'Disco Argacon Pro Porcelanato 110mm',
    category: 'discos-diamantados',
    short: 'Corte extra fino de alta velocidade, acabamento perfeito em porcelanatos.',
    specs: [
      { label: 'Diâmetro', value: '110 mm' },
      { label: 'Rim', value: 'Turbo Extra Fino' },
      { label: 'Espessura', value: '1.3 mm' },
      { label: 'RPM Máx.', value: '13.900' },
    ],
    price: 89.9,
    oldPrice: 119.9,
    badge: 'EXTRA FINO',
    accent: 'orange',
    diameterMm: 110,
    rim: 'turbo-fino',
  },
  {
    id: 'uft-white-porc-110',
    name: 'Disco White Porcelanato Uniforte 110mm',
    category: 'discos-diamantados',
    short: 'Corte de altíssima precisão para porcelanatos brancos e claros, sem lascar.',
    specs: [
      { label: 'Diâmetro', value: '110 mm' },
      { label: 'Furo', value: '20 mm' },
      { label: 'Rim', value: 'Turbo Fino' },
      { label: 'RPM Máx.', value: '15.000' },
    ],
    price: 79.9,
    badge: 'PRO',
    accent: 'navy',
    diameterMm: 110,
    rim: 'turbo-fino',
  },
  {
    id: 'uft-dourado-110',
    name: 'Disco Dourado Unifort Turbo 110mm',
    category: 'discos-diamantados',
    short: 'Liga premium dourada para máximo rendimento. Corte rápido em pedras e cerâmicas.',
    specs: [
      { label: 'Diâmetro', value: '110 mm' },
      { label: 'Furo', value: '20 mm' },
      { label: 'Altura segm.', value: '10 mm' },
      { label: 'RPM Máx.', value: '15.000' },
    ],
    price: 99.9,
    badge: 'TOP',
    accent: 'gold',
    diameterMm: 110,
    rim: 'turbo',
  },
  {
    id: 'uft-mg-115',
    name: 'Disco Diamantado Unifort Premium 115mm',
    category: 'discos-diamantados',
    short: 'Segmentos diamantados especiais para corte limpo em mármore e granito.',
    specs: [
      { label: 'Diâmetro', value: '115 mm' },
      { label: 'Rim', value: 'Segmentado' },
      { label: 'Altura segm.', value: '7 mm' },
      { label: 'RPM Máx.', value: '13.300' },
    ],
    price: 74.9,
    badge: 'PRO',
    accent: 'navy',
    diameterMm: 115,
    rim: 'segmentado',
  },
  {
    id: 'uft-quartz-115',
    name: 'Disco Quartzito Premium 115mm',
    category: 'discos-diamantados',
    short: 'Liga reforçada para alta dureza. Velocidade + durabilidade em quartzitos.',
    specs: [
      { label: 'Diâmetro', value: '115 mm' },
      { label: 'Rim', value: 'Turbo Reforçado' },
      { label: 'Altura segm.', value: '10 mm' },
      { label: 'RPM Máx.', value: '13.300' },
    ],
    price: 129.9,
    oldPrice: 159.9,
    badge: 'TOP',
    accent: 'red',
    diameterMm: 115,
    rim: 'turbo',
  },
  {
    id: 'uft-gran-180',
    name: 'Disco Granito Industrial 180mm',
    category: 'discos-diamantados',
    short: 'Liga de alta densidade. Performance em produção contínua para granito.',
    specs: [
      { label: 'Diâmetro', value: '180 mm' },
      { label: 'Rim', value: 'Segmentado' },
      { label: 'Altura segm.', value: '10 mm' },
      { label: 'RPM Máx.', value: '8.500' },
    ],
    price: 219.9,
    badge: 'PRO',
    accent: 'navy',
    diameterMm: 180,
    rim: 'segmentado',
  },
  {
    id: 'uft-porc-180',
    name: 'Disco Porcelanato Pro 180mm',
    category: 'discos-diamantados',
    short: 'Corte limpo em peças grandes de porcelanato. Reduz tempo de obra.',
    specs: [
      { label: 'Diâmetro', value: '180 mm' },
      { label: 'Rim', value: 'Turbo Fino' },
      { label: 'Espessura', value: '1.6 mm' },
      { label: 'RPM Máx.', value: '8.500' },
    ],
    price: 169.9,
    badge: 'NOVO',
    accent: 'orange',
    diameterMm: 180,
    rim: 'turbo-fino',
  },
  {
    id: 'uft-pro-350',
    name: 'Disco Profissional LSM 350mm',
    category: 'discos-diamantados',
    short: 'Para serra de bancada. Corte contínuo com altíssima precisão e rendimento.',
    specs: [
      { label: 'Diâmetro', value: '350 mm' },
      { label: 'Rim', value: 'Contínuo LSM' },
      { label: 'Furo', value: '25.4 mm' },
      { label: 'RPM Máx.', value: '4.400' },
    ],
    price: 489.9,
    badge: 'LSM',
    accent: 'navy',
    diameterMm: 350,
    rim: 'continuo',
  },
  {
    id: 'uft-monster-370',
    name: 'Serra Monster Black Uniforte 370mm',
    category: 'discos-diamantados',
    short: 'Disco silencioso de alta performance para corte profissional em mármore e granito.',
    specs: [
      { label: 'Diâmetro', value: '370 mm' },
      { label: 'Espessura', value: '3.2 mm' },
      { label: 'Altura segm.', value: '20 mm' },
      { label: 'Furo', value: '50 mm' },
    ],
    price: 549.9,
    badge: 'SILENCIOSO',
    accent: 'navy',
    diameterMm: 370,
    rim: 'segmentado',
  },

  // ============= IMPERMEABILIZAÇÃO =============
  {
    id: 'uft-h2off-900',
    name: 'Impermeabilizante Oleofugante H2OFF 900ml',
    category: 'impermeabilizacao',
    short: 'Proteção invisível contra água, óleo e manchas para mármores, granitos e pedras em geral.',
    specs: [
      { label: 'Conteúdo', value: '900 ml' },
      { label: 'Marca', value: 'Argacon' },
      { label: 'Aplicação', value: 'Pedras naturais' },
      { label: 'Tipo', value: 'Oleofugante' },
    ],
    price: 159.9,
    badge: 'NOVO',
    accent: 'orange',
    diameterMm: 0,
    rim: 'continuo',
  },
];

export const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'discos-diamantados', label: 'Discos Diamantados' },
  { id: 'brocas', label: 'Brocas Diamantadas' },
  { id: 'polimento', label: 'Polimento e Acabamento' },
  { id: 'impermeabilizacao', label: 'Impermeabilização' },
  { id: 'colagem', label: 'Colagem e Reparo' },
  { id: 'medicao', label: 'Ferramentas de Medição' },
  { id: 'epi', label: 'EPIs' },
  { id: 'acessorios', label: 'Acessórios' },
] as const;
