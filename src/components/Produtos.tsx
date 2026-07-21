import { useMemo, useState } from 'react';
import { ShoppingCart, Search, Filter } from 'lucide-react';
import { PRODUCTS, CATEGORIES, type Product } from '../data/products';
import { useCart, brl } from '../store/cart';

const BADGE_CLASS: Record<string, string> = {
  PRO: 'badge-pro',
  LSM: 'badge-pro',
  'EXTRA FINO': 'badge-new',
  NOVO: 'badge-new',
  TOP: 'badge-hot',
  SILENCIOSO: 'badge-pro',
};

export default function Produtos() {
  const [cat, setCat] = useState<string>('todos');
  const [q, setQ] = useState('');
  const add = useCart((s) => s.add);

  const filtered = useMemo(() => {
    return PRODUCTS.filter(
      (p) =>
        (cat === 'todos' || p.category === cat) &&
        (q.trim() === '' || p.name.toLowerCase().includes(q.toLowerCase()))
    );
  }, [cat, q]);

  return (
    <section id="produtos" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-navy-50/50 to-white">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="chip bg-orange/10 text-orange-dark border border-orange/20">
              CATÁLOGO
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-navy-900 tracking-wide">
              PRODUTOS EM <span className="text-orange">DESTAQUE</span>
            </h2>
            <p className="mt-3 text-navy-700/80 text-lg">
              Para cada material, o disco certo. Filtre por aplicação e encontre a
              ferramenta ideal para sua obra.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:min-w-[380px]">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar disco..."
                aria-label="Buscar produto"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-navy-100 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all"
              />
            </div>
          </div>
        </div>

        {/* Category filter chips */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 -mx-2 px-2">
          <Filter size={16} className="text-navy-400 shrink-0" />
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer border ${
                cat === c.id
                  ? 'bg-navy-900 text-white border-navy-900 shadow-[0_8px_20px_-8px_rgba(10,22,38,0.5)]'
                  : 'bg-white text-navy-700 border-navy-100 hover:border-orange/50 hover:text-orange'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={() => add(p)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-navy-500">
            Nenhum produto encontrado para esses filtros.
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: () => void }) {
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <article className="group relative rounded-2xl bg-white border border-navy-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(15,34,56,0.15)] flex flex-col justify-between p-6">
      <div>
        {/* Header badges & tags */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1.5 flex-wrap">
            {product.badge && (
              <span className={BADGE_CLASS[product.badge] ?? 'badge-pro'}>
                {product.badge}
              </span>
            )}
            {discount > 0 && (
              <span className="chip bg-sparkred text-white border border-sparkred">
                -{discount}%
              </span>
            )}
          </div>
          {product.diameterMm > 0 && (
            <span className="chip bg-navy-50 text-navy-800 border border-navy-100 font-bold">
              Ø {product.diameterMm}mm
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="font-display text-xl text-navy-900 tracking-wide leading-tight group-hover:text-orange transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-navy-700/75 leading-relaxed">{product.short}</p>

        {/* Specs */}
        <div className="mt-5 grid grid-cols-2 gap-2.5 py-4 border-y border-navy-100 bg-navy-50/50 -mx-6 px-6">
          {product.specs.slice(0, 4).map((s) => (
            <div key={s.label} className="text-[11px]">
              <div className="text-navy-400 uppercase tracking-wider font-semibold">
                {s.label}
              </div>
              <div className="num-mono font-bold text-navy-900">{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Price + CTA */}
      <div className="mt-5 flex items-end justify-between gap-3 pt-2">
        <div>
          {product.oldPrice && (
            <div className="text-xs text-navy-400 line-through num-mono">
              {brl(product.oldPrice)}
            </div>
          )}
          <div className="num-mono text-2xl font-bold text-navy-900">
            {brl(product.price)}
          </div>
          <div className="text-[11px] text-navy-500">
            ou 3x de {brl(product.price / 3)} sem juros
          </div>
        </div>
        <button
          onClick={onAdd}
          aria-label={`Comprar ${product.name}`}
          className="btn-primary !px-4 !py-2.5 text-sm"
        >
          <ShoppingCart size={16} />
          Comprar
        </button>
      </div>
    </article>
  );
}
