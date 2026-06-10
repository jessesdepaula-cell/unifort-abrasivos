export type Product = {
  id: string;
  name: string;
  category: 'porcelanato' | 'marmore' | 'granito' | 'quartzito' | 'profissional';
  short: string;
  specs: { label: string; value: string }[];
  price: number;
  oldPrice?: number;
  badge?: 'PRO' | 'LSM' | 'EXTRA FINO' | 'NOVO' | 'TOP';
  accent: 'orange' | 'gold' | 'red' | 'navy';
  diameterMm: number;
  rim: 'turbo' | 'segmentado' | 'continuo' | 'turbo-fino';
};

export const PRODUCTS: Product[] = [
  {
    id: 'uft-porc-115',
    name: 'Disco Porcelanato Turbo 115mm',
    category: 'porcelanato',
    short: 'Corte extra fino, sem lascar, acabamento espelhado.',
    specs: [
      { label: 'Diâmetro', value: '115 mm' },
      { label: 'Rim', value: 'Turbo Fino' },
      { label: 'Espessura', value: '1.2 mm' },
      { label: 'RPM Máx.', value: '13.300' },
    ],
    price: 89.9,
    oldPrice: 119.9,
    badge: 'EXTRA FINO',
    accent: 'orange',
    diameterMm: 115,
    rim: 'turbo-fino',
  },
  {
    id: 'uft-mg-115',
    name: 'Disco Mármore & Granito 115mm',
    category: 'marmore',
    short: 'Segmentos diamantados para corte limpo em pedras naturais.',
    specs: [
      { label: 'Diâmetro', value: '115 mm' },
      { label: 'Rim', value: 'Segmentado' },
      { label: 'Altura segm.', value: '7 mm' },
      { label: 'RPM Máx.', value: '13.300' },
    ],
    price: 74.9,
    badge: 'PRO',
    accent: 'gold',
    diameterMm: 115,
    rim: 'segmentado',
  },
  {
    id: 'uft-quartz-115',
    name: 'Disco Quartzito Premium 115mm',
    category: 'quartzito',
    short: 'Liga reforçada para alta dureza. Velocidade + durabilidade.',
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
    id: 'uft-pro-350',
    name: 'Disco Profissional LSM 350mm',
    category: 'profissional',
    short: 'Para serra de bancada. Corte contínuo com altíssima precisão.',
    specs: [
      { label: 'Diâmetro', value: '350 mm' },
      { label: 'Rim', value: 'Contínuo Liso' },
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
    id: 'uft-gran-180',
    name: 'Disco Granito Industrial 180mm',
    category: 'granito',
    short: 'Liga de alta densidade. Performance em produção contínua.',
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
    category: 'porcelanato',
    short: 'Corte limpo em peças grandes. Reduz tempo de obra.',
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
];

export const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'porcelanato', label: 'Porcelanato' },
  { id: 'marmore', label: 'Mármore' },
  { id: 'granito', label: 'Granito' },
  { id: 'quartzito', label: 'Quartzito' },
  { id: 'profissional', label: 'Profissional' },
] as const;
