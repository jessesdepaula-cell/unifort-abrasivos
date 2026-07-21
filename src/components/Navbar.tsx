import { useEffect, useState } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '../store/cart';

const LINKS = [
  { id: 'inicio', label: 'Início' },
  { id: 'produtos', label: 'Produtos' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'aplicacoes', label: 'Aplicações' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const count = useCart((s) => s.count());
  const openCart = useCart((s) => s.open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-3 left-3 right-3 z-50 transition-all duration-300 rounded-2xl ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border border-navy-100 shadow-[0_10px_40px_-15px_rgba(15,34,56,0.25)]'
          : 'bg-navy-950/30 backdrop-blur-md border border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#inicio" className="flex items-center cursor-pointer">
            <Logo variant={scrolled ? 'dark' : 'light'} />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  scrolled
                    ? 'text-navy-700 hover:text-orange hover:bg-navy-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Buscar"
              className={`hidden sm:inline-flex w-10 h-10 items-center justify-center rounded-lg transition-colors cursor-pointer ${
                scrolled ? 'text-navy-700 hover:bg-navy-50' : 'text-white hover:bg-white/10'
              }`}
            >
              <Search size={18} />
            </button>
            <button
              onClick={openCart}
              aria-label="Carrinho"
              className={`relative inline-flex w-10 h-10 items-center justify-center rounded-lg transition-colors cursor-pointer ${
                scrolled ? 'text-navy-700 hover:bg-navy-50' : 'text-white hover:bg-white/10'
              }`}
            >
              <ShoppingCart size={18} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 rounded-full bg-orange text-white text-[11px] font-bold flex items-center justify-center px-1 ring-2 ring-white">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className={`lg:hidden inline-flex w-10 h-10 items-center justify-center rounded-lg transition-colors cursor-pointer ${
                scrolled ? 'text-navy-700 hover:bg-navy-50' : 'text-white hover:bg-white/10'
              }`}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 pt-1 flex flex-col gap-1 border-t border-navy-100/40 mt-1">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-semibold cursor-pointer ${
                  scrolled
                    ? 'text-navy-700 hover:bg-navy-50'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
