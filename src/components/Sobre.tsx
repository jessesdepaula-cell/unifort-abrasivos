import {
  CheckCircle2,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Handshake,
  Lightbulb,
  Users,
  Sparkles,
} from 'lucide-react';
import DiscIcon from './DiscIcon';

const VALORES = [
  {
    icon: Sparkles,
    title: 'Qualidade',
    desc: 'Excelência em todos os produtos oferecidos.',
  },
  {
    icon: Heart,
    title: 'Compromisso',
    desc: 'Foco total na satisfação do cliente.',
  },
  {
    icon: Handshake,
    title: 'Ética & Transparência',
    desc: 'Relações comerciais claras e honestas.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança',
    desc: 'Prioridade em cada operação e produto.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    desc: 'Melhoria contínua em processos e soluções.',
  },
  {
    icon: Users,
    title: 'Respeito',
    desc: 'A clientes, colaboradores e parceiros.',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-20 lg:py-28 bg-white">
      <div className="container-x">
        {/* TOP: Institucional + visual */}
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
              <div className="absolute -top-5 -left-5 glass rounded-2xl p-4 max-w-[200px] animate-float">
                <div className="num-mono text-3xl font-bold text-navy-900">+15</div>
                <div className="text-xs text-navy-600 font-semibold">
                  Anos transformando produção
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 glass rounded-2xl p-4 max-w-[200px] animate-float [animation-delay:1s]">
                <div className="num-mono text-3xl font-bold text-orange">98%</div>
                <div className="text-xs text-navy-600 font-semibold">
                  Aprovação dos profissionais
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <span className="chip bg-navy-50 text-navy-700 border border-navy-100">
              SOBRE A UNIFORTE
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-navy-900 tracking-wide leading-tight">
              SOLUÇÕES COMPLETAS
              <span className="block text-orange">PARA QUEM CONSTRÓI.</span>
            </h2>
            <p className="mt-5 text-navy-700/85 text-lg leading-relaxed">
              A <strong>Uniforte Abrasivos</strong> é especializada no fornecimento de
              abrasivos, ferramentas e equipamentos de proteção individual (EPIs),
              oferecendo soluções completas para profissionais da construção civil,
              marmorarias, serralherias, indústrias e diversos segmentos que exigem
              qualidade, segurança e alto desempenho.
            </p>
            <p className="mt-4 text-navy-700/85 text-base leading-relaxed">
              Nosso compromisso é fornecer produtos confiáveis, duráveis e com excelente
              custo-benefício, garantindo mais produtividade e eficiência. Trabalhamos
              com uma linha completa de discos de corte e desbaste, brocas diamantadas
              para furação, trenas e ferramentas de medição, além dos EPIs essenciais
              para a segurança no ambiente de trabalho.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                'Construção Civil',
                'Marmorarias',
                'Serralherias',
                'Indústrias',
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange/10 text-orange-dark text-xs font-semibold border border-orange/20"
                >
                  <CheckCircle2 size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE: Missão e Visão */}
        <div className="mt-20 grid md:grid-cols-2 gap-6">
          <div className="group relative rounded-3xl overflow-hidden border border-navy-100 bg-gradient-to-br from-white to-navy-50/40 p-8 hover:border-orange/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-20px_rgba(15,34,56,0.35)]">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-orange/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-orange/10 text-orange flex items-center justify-center mb-5">
                <Target size={26} strokeWidth={2.2} />
              </div>
              <div className="chip bg-orange/10 text-orange-dark border border-orange/20 text-[10px]">
                MISSÃO
              </div>
              <h3 className="mt-3 font-display text-2xl text-navy-900 tracking-wide leading-snug">
                Qualidade, segurança e produtividade em cada entrega.
              </h3>
              <p className="mt-4 text-navy-700/80 text-base leading-relaxed">
                Oferecer produtos de alta qualidade que proporcionem segurança, eficiência
                e produtividade aos nossos clientes, construindo relações duradouras
                baseadas na confiança e na excelência no atendimento.
              </p>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden border border-navy-100 bg-gradient-to-br from-white to-navy-50/40 p-8 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-20px_rgba(15,34,56,0.35)]">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-gold/15 blur-3xl rounded-full pointer-events-none" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gold/15 text-gold-dark flex items-center justify-center mb-5">
                <Eye size={26} strokeWidth={2.2} />
              </div>
              <div className="chip bg-gold/15 text-gold-dark border border-gold/30 text-[10px]">
                VISÃO
              </div>
              <h3 className="mt-3 font-display text-2xl text-navy-900 tracking-wide leading-snug">
                Referência nacional em abrasivos e ferramentas.
              </h3>
              <p className="mt-4 text-navy-700/80 text-base leading-relaxed">
                Ser reconhecida como uma das principais referências nacionais no segmento
                de abrasivos e ferramentas, expandindo continuamente nossa atuação e
                oferecendo soluções inovadoras para o mercado brasileiro.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM: Valores */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="chip bg-navy-50 text-navy-700 border border-navy-100">
              O QUE NOS MOVE
            </span>
            <h3 className="mt-4 font-display text-3xl sm:text-4xl text-navy-900 tracking-wide">
              NOSSOS <span className="text-orange">VALORES</span>
            </h3>
            <p className="mt-3 text-navy-700/75 text-base">
              Princípios que orientam cada decisão, cada produto e cada relacionamento.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALORES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-navy-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-[0_15px_40px_-20px_rgba(15,34,56,0.3)]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 text-orange flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg tracking-wide text-navy-900">
                      {title}
                    </h4>
                    <p className="mt-1 text-navy-700/75 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
