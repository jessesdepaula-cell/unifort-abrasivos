import { Target, ShieldCheck, Cog, TrendingUp } from 'lucide-react';

const ITEMS = [
  {
    title: 'PRECISÃO',
    sub: 'Em cada corte',
    icon: Target,
    color: 'orange',
    desc: 'Tolerância milimétrica. Acabamento que dispensa retrabalho.',
  },
  {
    title: 'QUALIDADE',
    sub: 'Que gera confiança',
    icon: ShieldCheck,
    color: 'navy',
    desc: 'Liga LSM testada em produção contínua e ensaios laboratoriais.',
  },
  {
    title: 'DESEMPENHO',
    sub: 'Que faz a diferença',
    icon: Cog,
    color: 'gold',
    desc: 'Mais peças cortadas por disco. Menos paradas na obra.',
  },
  {
    title: 'RESULTADOS',
    sub: 'Que constroem o futuro',
    icon: TrendingUp,
    color: 'red',
    desc: 'ROI comprovado por marmorarias e construtoras parceiras.',
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
            POR QUE UNIFORT
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-navy-900 tracking-wide">
            FORÇA, FOCO E ENGENHARIA
            <span className="block text-orange">EM CADA SEGMENTO.</span>
          </h2>
          <p className="mt-4 text-navy-700/80 text-lg leading-relaxed">
            Comece o dia com foco, trabalhe com precisão e entregue resultados.
            Os quatro pilares que sustentam cada disco que sai da nossa linha.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map(({ title, sub, icon: Icon, color, desc }, idx) => {
            const c = COLOR_MAP[color];
            return (
              <div
                key={title}
                className={`group relative rounded-2xl bg-white border border-navy-100 p-6 transition-all duration-300 cursor-pointer ring-1 ring-transparent hover:-translate-y-1 hover:shadow-[0_25px_50px_-20px_rgba(15,34,56,0.35)] ${c.ring}`}
              >
                <div className="num-mono text-xs text-navy-300 absolute top-4 right-5">
                  0{idx + 1}/04
                </div>
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${c.bg} ${c.text} mb-5`}
                >
                  <Icon size={26} strokeWidth={2.2} />
                </div>
                <div className="h-display text-2xl text-navy-900">{title}</div>
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
