import { useState } from 'react';
import {
  Disc,
  Hammer,
  Sparkles,
  Droplets,
  Wrench,
  Ruler,
  Shield,
  Package,
  Building2,
  Gem,
  Grid,
  Building,
  Compass,
  Users,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

const PORTFOLIO_DATA = [
  {
    id: 'discos',
    title: 'Discos Diamantados',
    icon: Disc,
    items: [
      { name: 'Discos diamantados para porcelanato', desc: 'Corte de alta precisão e acabamento fino sem lascar.' },
      { name: 'Discos diamantados para mármore', desc: 'Desempenho ideal em pedras naturais delicadas.' },
      { name: 'Discos diamantados para granito', desc: 'Alta durabilidade e rendimento em pedras duras.' },
      { name: 'Discos diamantados para quartzito', desc: 'Liga diamantada especial para quartzitos de extrema dureza.' },
      { name: 'Discos de corte fino', desc: 'Menor espessura para menor desperdício e maior velocidade.' },
      { name: 'Discos de alta performance', desc: 'Linha industrial para marmoraria de alta produtividade.' }
    ]
  },
  {
    id: 'brocas',
    title: 'Brocas Diamantadas',
    icon: Hammer,
    items: [
      { name: 'Brocas diamantadas para porcelanato', desc: 'Furação limpa e rápida em peças cerâmicas.' },
      { name: 'Brocas diamantadas para mármore', desc: 'Furos precisos e sem trincas em mármore.' },
      { name: 'Brocas diamantadas para granito', desc: 'Alta durabilidade e rendimento para furos em granito.' },
      { name: 'Brocas diamantadas para quartzito', desc: 'Máxima performance em materiais super duros.' },
      { name: 'Brocas para instalações e acabamentos', desc: 'Ideais para torneiras, ralos e acessórios de banheiro/cozinha.' }
    ]
  },
  {
    id: 'polimento',
    title: 'Polimento e Acabamento',
    icon: Sparkles,
    items: [
      { name: 'Lixas diamantadas para polimento', desc: 'Brilho d’água ou seco com sequência de grãos profissional.' },
      { name: 'Lixas especiais para acabamento', desc: 'Remoção de riscos e marcas com perfeição.' },
      { name: 'Lixas para porcelanato', desc: 'Especiais para o acabamento do bisote e meia esquadria.' },
      { name: 'Lixas para mármore e granito', desc: 'Polimento ideal com brilho espelhado.' },
      { name: 'Lixas para quartzito', desc: 'Desenvolvidas para resistir ao calor e dureza do quartzito.' },
      { name: 'Carnaúba para acabamento e brilho', desc: 'Cera profissional para realçar a beleza natural da pedra.' },
      { name: 'Produtos para realce e proteção de superfícies', desc: 'Ativadores de colagem, ativadores de cor e finalizadores premium.' }
    ]
  },
  {
    id: 'impermeabilizacao',
    title: 'Impermeabilização',
    icon: Droplets,
    items: [
      { name: 'Impermeabilizantes para mármore', desc: 'Proteção invisível contra água e óleos.' },
      { name: 'Impermeabilizantes para granito', desc: 'Barreira durável que previne manchas e umidade.' },
      { name: 'Impermeabilizantes para quartzito', desc: 'Fórmula de alta penetração para pedras compactas.' },
      { name: 'Impermeabilizantes para pedras naturais', desc: 'Preservação da cor e textura natural das rochas.' },
      { name: 'Produtos de proteção contra manchas e umidade', desc: 'Proteção ativa contra infiltração e eflorescência.' }
    ]
  },
  {
    id: 'colagem',
    title: 'Colagem e Reparo',
    icon: Wrench,
    items: [
      { name: 'Resinas para pedras naturais', desc: 'Preenchimento de poros e trincas com alta aderência.' },
      { name: 'Resinas para porcelanato', desc: 'Colagem rápida e invisível para cortes especiais.' },
      { name: 'Massa plástica', desc: 'Consistência perfeita para cubas esculpidas e colagem.' },
      { name: 'Massa em gel', desc: 'Transparência cristalina e alta resistência mecânica.' },
      { name: 'Produtos para recuperação e acabamento', desc: 'Correção de imperfeições com resultado profissional.' },
      { name: 'Materiais para colagem e reparos', desc: 'Adesivos estruturais e selantes industriais.' }
    ]
  },
  {
    id: 'medicao',
    title: 'Ferramentas de Medição',
    icon: Ruler,
    items: [
      { name: 'Trenas profissionais', desc: 'Alta durabilidade, rigidez e precisão milimétrica.' },
      { name: 'Acessórios para medição e marcação', desc: 'Lápis, esquadros e marcadores profissionais para marmoraria.' }
    ]
  },
  {
    id: 'epi',
    title: 'Equipamentos de Proteção Individual (EPIs)',
    icon: Shield,
    items: [
      { name: 'Luvas de proteção', desc: 'Resistência ao corte, aderência e conforto no manuseio de pedras.' },
      { name: 'Óculos de segurança', desc: 'Proteção ocular contra poeira e detritos de corte.' },
      { name: 'Máscaras de proteção', desc: 'Proteção respiratória essencial contra a sílica e poeira fina.' },
      { name: 'Aventais de proteção', desc: 'Impermeáveis e resistentes para trabalhos refrigerados a água.' }
    ]
  },
  {
    id: 'acessorios',
    title: 'Acessórios para Marmoraria',
    icon: Package,
    items: [
      { name: 'Materiais auxiliares para corte', desc: 'Guia de corte, espaçadores e discos de desbaste.' },
      { name: 'Materiais auxiliares para furação', desc: 'Dispositivos de refrigeração e gabaritos de guia.' },
      { name: 'Materiais auxiliares para polimento', desc: 'Suportes de lixa (pratos) flexíveis e rígidos.' },
      { name: 'Materiais auxiliares para instalação e acabamento', desc: 'Grampos de fixação, ventosas e niveladores.' }
    ]
  }
];

const SEGMENTOS = [
  {
    name: 'Marmorarias',
    icon: Building2,
    desc: 'Fornecimento completo de insumos de corte, colagem e acabamento.',
  },
  {
    name: 'Empresas de pedras ornamentais',
    icon: Gem,
    desc: 'Ferramentas industriais para processamento e beneficiamento de rochas.',
  },
  {
    name: 'Instaladores de porcelanato',
    icon: Grid,
    desc: 'Discos e lixas especiais para cortes em meia esquadria perfeitos.',
  },
  {
    name: 'Construtoras',
    icon: Building,
    desc: 'Atendimento corporativo e fornecimento em grande escala para obras.',
  },
  {
    name: 'Arquitetos e designers',
    icon: Compass,
    desc: 'Especificação técnica de impermeabilizantes e acabamento premium.',
  },
  {
    name: 'Profissionais da construção civil',
    icon: Users,
    desc: 'Ferramentas de alta performance que facilitam o dia a dia da obra.',
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(PORTFOLIO_DATA[0].id);

  const activeCategory = PORTFOLIO_DATA.find((c) => c.id === activeTab) || PORTFOLIO_DATA[0];

  const getWhatsAppLink = (productName: string, categoryName: string) => {
    const text = encodeURIComponent(
      `Olá UNIFORT! Gostaria de solicitar um orçamento para o item "${productName}" da linha de "${categoryName}".`
    );
    return `https://wa.me/556299650412?text=${text}`;
  };

  const getGeneralQuoteLink = () => {
    const text = encodeURIComponent(
      `Olá UNIFORT! Gostaria de falar com um consultor para tirar dúvidas e solicitar cotações de materiais.`
    );
    return `https://wa.me/556299650412?text=${text}`;
  };

  return (
    <section id="portfolio" className="relative py-20 lg:py-28 bg-navy-950 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-deco opacity-25 pointer-events-none" />
      <div className="absolute inset-0 brand-gradient-radial opacity-80 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-x relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="chip bg-orange/15 text-orange-light border border-orange/30">
              NOSSO CATÁLOGO
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-wide">
              PORTFÓLIO DE <span className="metal-text">MATERIAIS</span>
            </h2>
            <p className="mt-4 text-white/75 text-lg leading-relaxed">
              Dispomos de uma linha completa de ferramentas, abrasivos e químicos de alto desempenho para
              sua obra ou marmoraria.
            </p>
          </div>

          <a
            href={getGeneralQuoteLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0 self-start lg:self-end group"
          >
            <MessageCircle size={18} />
            Solicitar Orçamento Geral
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-4 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {PORTFOLIO_DATA.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all shrink-0 cursor-pointer border ${
                  isActive
                    ? 'bg-orange text-white border-orange shadow-[0_8px_25px_-10px_rgba(249,115,22,0.6)]'
                    : 'bg-white/[0.03] text-white/70 border-white/5 hover:border-white/20 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                <Icon size={16} className={isActive ? 'animate-pulse' : 'opacity-80'} />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Selected Category Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.items.map((item, idx) => {
            const CategoryIcon = activeCategory.icon;
            return (
              <article
                key={idx}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/25 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 text-orange-light group-hover:scale-110 transition-transform duration-300">
                    <CategoryIcon size={22} />
                  </div>
                  <h3 className="font-display text-xl tracking-wide text-white mb-2 group-hover:text-orange-light transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <a
                  href={getWhatsAppLink(item.name, activeCategory.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-white text-white/90 text-sm font-semibold transition-all group-hover:border-emerald-500"
                >
                  <MessageCircle size={16} className="text-emerald-400 group-hover:text-white transition-colors" />
                  Solicitar Cotação
                </a>
              </article>
            );
          })}
        </div>

        {/* Divider */}
        <div className="my-20 border-t border-white/10" />

        {/* Segmentos Atendidos Sub-section */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="chip bg-gold/15 text-gold border border-gold/30">
              ONDE ATUAMOS
            </span>
            <h3 className="mt-4 font-display text-3xl sm:text-4xl tracking-wide">
              SEGMENTOS <span className="text-gold">ATENDIDOS</span>
            </h3>
            <p className="mt-3 text-white/75 text-sm sm:text-base">
              Desenvolvemos soluções personalizadas e fornecemos suporte técnico especializado para diversos setores
              do mercado.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEGMENTOS.map((seg, idx) => {
              const SegIcon = seg.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/15"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <SegIcon size={22} />
                    </div>
                    <div>
                      <h4 className="font-display text-lg tracking-wide text-white mb-1">
                        {seg.name}
                      </h4>
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                        {seg.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
