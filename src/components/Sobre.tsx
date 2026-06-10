import { CheckCircle2, Factory, Award, Headphones } from 'lucide-react';
import DiscIcon from './DiscIcon';

const PILLARS = [
  { icon: Factory, title: 'Produção controlada', desc: 'Processos auditados de ponta a ponta.' },
  { icon: Award, title: 'Certificações de qualidade', desc: 'ISO 9001 e ensaios laboratoriais.' },
  { icon: Headphones, title: 'Atendimento técnico', desc: 'Equipe especializada por aplicação.' },
];

const BULLETS = [
  '+15 anos no mercado de abrasivos profissionais',
  'Atendimento para profissionais autônomos e indústria',
  'Distribuição em todo o território nacional',
  'Suporte técnico de seleção do disco ideal',
];

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-20 lg:py-28 bg-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-700 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 grid-deco opacity-30" />
                <div className="absolute -inset-10 bg-orange/20 blur-3xl" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin-slower">
                  <DiscIcon accent="gold" rim="segmentado" size={320} />
                </div>
              </div>
              {/* Floating cards */}
              <div className="absolute -top-5 -left-5 glass rounded-2xl p-4 max-w-[180px] animate-float">
                <div className="num-mono text-3xl font-bold text-navy-900">+15</div>
                <div className="text-xs text-navy-600 font-semibold">Anos transformando produção</div>
              </div>
              <div className="absolute -bottom-5 -right-5 glass rounded-2xl p-4 max-w-[180px] animate-float [animation-delay:1s]">
                <div className="num-mono text-3xl font-bold text-orange">98%</div>
                <div className="text-xs text-navy-600 font-semibold">Aprovação dos profissionais</div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <span className="chip bg-navy-50 text-navy-700 border border-navy-100">
              SOBRE A UNIFORT
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-navy-900 tracking-wide leading-tight">
              ENGENHARIA DE CORTE
              <span className="block text-orange">QUE NÃO SE IMPROVISA.</span>
            </h2>
            <p className="mt-5 text-navy-700/85 text-lg leading-relaxed">
              A Unifort Abrasivos nasceu para preencher a lacuna entre os discos
              importados de alto custo e os produtos genéricos do mercado. Hoje
              entregamos uma linha completa de discos diamantados que casa
              durabilidade industrial com a precisão exigida no acabamento.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-navy-700">
                  <CheckCircle2 size={18} className="text-orange shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {PILLARS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl border border-navy-100 p-4 hover:border-orange/40 transition-colors"
                >
                  <Icon size={22} className="text-orange mb-3" />
                  <div className="font-semibold text-navy-900 text-sm">{title}</div>
                  <div className="text-xs text-navy-600 mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
