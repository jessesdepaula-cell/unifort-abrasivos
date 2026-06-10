import { Suspense, lazy } from 'react';
import { ArrowRight, MessageCircle, Shield, Zap, Award } from 'lucide-react';

const DiamondDisc3D = lazy(() => import('./DiamondDisc3D'));

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden brand-gradient-radial">
      {/* Decorative grid + diagonal stripes */}
      <div className="absolute inset-0 grid-deco opacity-60 pointer-events-none" />
      <div className="absolute inset-0 diamond-stripe opacity-50 pointer-events-none" />

      {/* Animated sparks (CSS) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute bottom-0 w-[3px] h-[3px] rounded-full bg-gold"
            style={{
              left: `${(i * 8 + 5) % 100}%`,
              boxShadow: '0 0 12px 2px rgba(251,191,36,0.7)',
              animation: `sparkRise ${3 + (i % 4)}s linear ${i * 0.4}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="chip bg-orange/15 text-orange-light border border-orange/30">
                <Zap size={12} /> Linha 2026
              </span>
              <span className="chip bg-white/10 text-white/90 border border-white/20">
                <Shield size={12} /> Garantia profissional
              </span>
            </div>

            <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-[5.2rem] leading-[0.95] tracking-wide text-white text-shadow-deep">
              PRECISÃO E
              <br />
              QUALIDADE EM
              <br />
              <span className="metal-text">CADA CORTE</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
              Discos diamantados profissionais para transformar seu trabalho em
              <span className="text-orange-light font-semibold"> produtividade</span> e
              <span className="text-gold font-semibold"> resultados</span>. Tecnologia
              de corte para porcelanato, mármore, granito e quartzito.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#produtos" className="btn-primary group">
                Ver Produtos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle size={18} />
                Falar com Consultor
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <Stat value="+15" label="Anos de mercado" />
              <Stat value="98%" label="Satisfação" highlight />
              <Stat value="24h" label="Envio rápido" />
            </div>
          </div>

          {/* Right: 3D Disc */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
              {/* Floating UI overlays around the 3D */}
              <FloatingTag
                className="top-4 left-2 sm:left-6 animate-float"
                icon={<Award size={14} />}
                label="DIAMANTE PROFISSIONAL"
              />
              <FloatingTag
                className="bottom-12 right-2 sm:right-4 animate-float"
                icon={<Zap size={14} />}
                label="13.300 RPM"
                accent="orange"
              />

              {/* Glow ring behind the disc */}
              <div className="absolute inset-10 rounded-full bg-orange/20 blur-3xl pointer-events-none" />

              <Suspense
                fallback={
                  <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm">
                    Carregando 3D...
                  </div>
                }
              >
                <DiamondDisc3D />
              </Suspense>

              {/* Specs ticker glass card */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[92%] max-w-md">
                <div className="glass-dark rounded-2xl px-4 py-3 flex items-center justify-between gap-2 text-white">
                  <Spec label="Ø" value="115mm" />
                  <span className="w-px h-8 bg-white/15" />
                  <Spec label="LIGA" value="LSM" />
                  <span className="w-px h-8 bg-white/15" />
                  <Spec label="CORTE" value="ULTRA" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge fade into next section */}
      <div className="absolute -bottom-px inset-x-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}

function Stat({ value, label, highlight }: { value: string; label: string; highlight?: boolean }) {
  return (
    <div className="border-l-2 border-white/20 pl-3">
      <div className={`num-mono font-bold text-2xl ${highlight ? 'text-orange-light' : 'text-white'}`}>
        {value}
      </div>
      <div className="text-[11px] uppercase tracking-widest text-white/60 font-semibold">{label}</div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">{label}</div>
      <div className="num-mono text-sm font-bold text-white">{value}</div>
    </div>
  );
}

function FloatingTag({
  className = '',
  icon,
  label,
  accent = 'gold',
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
  accent?: 'gold' | 'orange';
}) {
  return (
    <div
      className={`absolute z-10 glass-dark rounded-xl px-3 py-2 flex items-center gap-2 text-white text-xs font-semibold tracking-wide ${className}`}
    >
      <span className={accent === 'orange' ? 'text-orange-light' : 'text-gold'}>{icon}</span>
      {label}
    </div>
  );
}
