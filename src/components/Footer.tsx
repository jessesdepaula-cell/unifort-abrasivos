import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Instagram = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const Facebook = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Youtube = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" />
  </svg>
);
const Linkedin = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const QUICK = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#aplicacoes', label: 'Aplicações' },
  { href: '#sobre', label: 'Sobre' },
];

const CATEGORIES = [
  { href: '#produtos', label: 'Discos para Porcelanato' },
  { href: '#produtos', label: 'Discos para Mármore' },
  { href: '#produtos', label: 'Discos para Granito' },
  { href: '#produtos', label: 'Discos para Quartzito' },
  { href: '#produtos', label: 'Linha Profissional 350mm' },
];

export default function Footer() {
  return (
    <footer id="contato" className="relative bg-navy-950 text-white overflow-hidden">
      <div className="absolute inset-0 grid-deco opacity-25 pointer-events-none" />
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-orange/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container-x relative pt-16 pb-8">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="light" size={42} />
            <p className="mt-5 text-white/65 text-sm leading-relaxed max-w-sm">
              Discos diamantados profissionais. Tecnologia brasileira para quem
              entrega resultado em obra, marmoraria e indústria.
            </p>

            <div className="mt-6 space-y-2.5">
              <a href="tel:+5562999650412" className="flex items-center gap-3 text-white/80 hover:text-orange transition-colors cursor-pointer text-sm">
                <Phone size={15} className="text-orange" />
                (62) 9 9965-0412
              </a>
              <a href="mailto:contato@unifortabrasivos.com.br" className="flex items-center gap-3 text-white/80 hover:text-orange transition-colors cursor-pointer text-sm">
                <Mail size={15} className="text-orange" />
                contato@unifortabrasivos.com.br
              </a>
              <div className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin size={15} className="text-orange mt-0.5 shrink-0" />
                Av. Industrial, 1000 — São Paulo/SP
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-orange flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer border border-white/10 hover:border-orange"
                >
                  <Icon width={17} height={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {QUICK.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/65 hover:text-orange transition-colors text-sm cursor-pointer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
              Categorias
            </h4>
            <ul className="space-y-2.5">
              {CATEGORIES.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/65 hover:text-orange transition-colors text-sm cursor-pointer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
              Pagamento
            </h4>
            <div className="grid grid-cols-4 gap-2">
              {['VISA', 'MASTER', 'ELO', 'PIX', 'AMEX', 'HIPER', 'BOLETO', 'DINER'].map((p) => (
                <div
                  key={p}
                  className="aspect-[5/3] rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[9px] font-bold text-white/70 tracking-wider"
                >
                  {p}
                </div>
              ))}
            </div>
            <div className="mt-5 chip bg-orange/15 text-orange-light border border-orange/30 !text-[10px]">
              ENTREGA EM TODO O BRASIL
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} UNIFORT ABRASIVOS LTDA · CNPJ 00.000.000/0001-00
          </div>
          <div className="text-xs text-white/40 flex items-center gap-4">
            <a href="#" className="hover:text-orange cursor-pointer">Política de Privacidade</a>
            <a href="#" className="hover:text-orange cursor-pointer">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
