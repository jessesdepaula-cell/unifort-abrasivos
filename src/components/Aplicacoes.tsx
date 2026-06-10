import { Layers, Mountain, Gem, Hexagon } from 'lucide-react';

const APPS = [
  {
    name: 'Porcelanato',
    desc: 'Corte limpo, sem lascamento, acabamento profissional em peças de alta dureza.',
    icon: Hexagon,
    accent: 'from-orange/80 to-orange-dark',
    chips: ['Turbo Fino', 'Sem Lasca', 'Acabamento Espelhado'],
  },
  {
    name: 'Mármore',
    desc: 'Segmentos diamantados para corte preciso em pedras naturais delicadas.',
    icon: Layers,
    accent: 'from-gold/80 to-gold-dark',
    chips: ['Segmentado', 'Baixa Vibração', 'Resfriamento Ativo'],
  },
  {
    name: 'Granito',
    desc: 'Liga de alta densidade para serras industriais e produção contínua.',
    icon: Mountain,
    accent: 'from-navy-600/90 to-navy-900',
    chips: ['Liga Industrial', 'Alta Durabilidade', '350mm LSM'],
  },
  {
    name: 'Quartzito',
    desc: 'Material extremamente duro pede liga reforçada e geometria exata.',
    icon: Gem,
    accent: 'from-sparkred/80 to-red-900',
    chips: ['Liga Reforçada', 'Alta Performance', 'Turbo'],
  },
] as const;

export default function Aplicacoes() {
  return (
    <section id="aplicacoes" className="relative py-20 lg:py-28 bg-navy-950 text-white overflow-hidden">
      <div className="absolute inset-0 grid-deco opacity-30 pointer-events-none" />
      <div className="absolute inset-0 brand-gradient-radial opacity-80 pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="chip bg-orange/15 text-orange-light border border-orange/30">
            APLICAÇÕES
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-wide">
            PARA CADA MATERIAL,
            <span className="block metal-text">O DISCO CERTO.</span>
          </h2>
          <p className="mt-4 text-white/75 text-lg leading-relaxed">
            Cada material exige uma combinação específica de liga, geometria e
            granulação. Nossa engenharia escolhe o ponto exato entre velocidade
            e durabilidade.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {APPS.map(({ name, desc, icon: Icon, accent, chips }) => (
            <div
              key={name}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-6">
                <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center mb-5 group-hover:bg-white/20 transition">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <div className="h-display text-2xl tracking-wide">{name}</div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {chips.map((c) => (
                    <span
                      key={c}
                      className="chip bg-white/10 text-white/90 border border-white/15 text-[10px] !px-2 !py-0.5"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
