import { Award, Headphones, ShieldCheck, Handshake, ShoppingBag } from 'lucide-react';

const ITEMS = [
  {
    title: 'QUALIDADE SELECIONADA',
    sub: 'Alto padrão em cada item',
    icon: Award,
    color: 'orange',
    desc: 'Produtos rigorosamente selecionados com alto padrão de qualidade e durabilidade.',
  },
  {
    title: 'ATENDIMENTO',
    sub: 'Ágil e especializado',
    icon: Headphones,
    color: 'navy',
    desc: 'Equipe técnica preparada para indicar a solução certa, com agilidade no orçamento e na entrega.',
  },
  {
    title: 'SEGURANÇA & PRODUTIVIDADE',
    sub: 'Compromisso com o cliente',
    icon: ShieldCheck,
    color: 'gold',
    desc: 'Foco total na segurança do operador e na produtividade da sua obra ou marmoraria.',
  },
  {
    title: 'PARCERIAS SÓLIDAS',
    sub: 'Fornecedores confiáveis',
    icon: Handshake,
    color: 'red',
    desc: 'Relações sólidas com fornecedores de referência garantem continuidade e padrão no estoque.',
  },
  {
    title: 'VENDAS ONLINE',
    sub: 'Mais praticidade e rapidez',
    icon: ShoppingBag,
    color: 'orange',
    desc: 'Expansão para o digital: compre com mais facilidade, agilidade e rastreio em todo o Brasil.',
  },
] as const;

const COLOR_MAP: Record<string, { ring: string; text: string; bg: string }> = {
  orange: { ring: 'group-hover:ring-orange/40', text: 'text-orange', bg: 'bg-orange/10' },
  navy: { ring: 'group-hover:ring-navy-600/40', text: 'text-navy-600', bg: 'bg-navy-50' },
  gold: { ring: 'group-hover:ring-gold/50', text: 'text-gold-dark', bg: 'bg-gold/10' },
  red: { ring: 'group-hover:ring-sparkred/40', text: 'text-sparkred', bg: 'bg-sparkred/10' },
};

export default function Diferenciais() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="chip bg-navy-50 text-navy-600 border border-navy-100">
            POR QUE UNIFORTE
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-navy-900 tracking-wide">
            DIFERENCIAIS QUE GERAM
            <span className="block text-orange">RESULTADO REAL.</span>
          </h2>
          <p className="mt-4 text-navy-700/80 text-lg leading-relaxed">
            Cinco pilares que sustentam nossa relação com profissionais, marmorarias e
            indústrias — do estoque selecionado à entrega ágil na sua porta.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {ITEMS.map(({ title, sub, icon: Icon, color, desc }, idx) => {
            const c = COLOR_MAP[color];
            const total = ITEMS.length.toString().padStart(2, '0');
            return (
              <div
                key={title}
                className={`group relative rounded-2xl bg-white border border-navy-100 p-6 transition-all duration-300 cursor-pointer ring-1 ring-transparent hover:-translate-y-1 hover:shadow-[0_25px_50px_-20px_rgba(15,34,56,0.35)] ${c.ring}`}
              >
                <div className="num-mono text-xs text-navy-300 absolute top-4 right-5">
                  0{idx + 1}/{total}
                </div>
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${c.bg} ${c.text} mb-5`}
                >
                  <Icon size={26} strokeWidth={2.2} />
                </div>
                <div className="h-display text-xl text-navy-900 leading-tight">{title}</div>
                <div className={`text-sm font-semibold ${c.text} mt-0.5`}>{sub}</div>
                <p className="mt-4 text-navy-700/70 text-sm leading-relaxed">{desc}</p>
                <div
                  className={`mt-5 h-[3px] w-10 rounded-full ${c.bg} group-hover:w-full transition-all duration-500`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
