import { useMemo, useState } from 'react';
import { ShoppingCart, Search, Filter } from 'lucide-react';
import { PRODUCTS, CATEGORIES, type Product } from '../data/products';
import { useCart, brl } from '../store/cart';
import DiscIcon from './DiscIcon';

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
    <article className="group relative rounded-2xl bg-white border border-navy-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(15,34,56,0.4)]">
      {/* Visual */}
      <div className="relative aspect-square bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 overflow-hidden">
        <div className="absolute inset-0 grid-deco opacity-40" />
        <div className="absolute inset-0 diamond-stripe opacity-30" />
        {/* Glow */}
        <div
          className="absolute -inset-20 blur-3xl opacity-50"
          style={{
            background:
              product.accent === 'orange'
                ? 'radial-gradient(circle, #f97316 0%, transparent 65%)'
                : product.accent === 'gold'
                ? 'radial-gradient(circle, #fbbf24 0%, transparent 65%)'
                : product.accent === 'red'
                ? 'radial-gradient(circle, #dc2626 0%, transparent 65%)'
                : 'radial-gradient(circle, #2563eb 0%, transparent 65%)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain bg-white/5 p-3 transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="transition-transform duration-700 group-hover:scale-110 group-hover:rotate-180">
              <DiscIcon accent={product.accent} rim={product.rim} size={220} />
            </div>
          )}
        </div>

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
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

        {/* Diameter tag (oculto para itens sem diâmetro, ex: químicos) */}
        {product.diameterMm > 0 && (
          <div className="absolute top-3 right-3 chip bg-white/95 text-navy-900 border border-white">
            Ø {product.diameterMm}mm
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-xl text-navy-900 tracking-wide leading-tight">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm text-navy-700/75 line-clamp-2">{product.short}</p>

        {/* Specs */}
        <div className="mt-4 grid grid-cols-2 gap-2 pb-4 border-b border-navy-100">
          {product.specs.slice(0, 4).map((s) => (
            <div key={s.label} className="text-[11px]">
              <div className="text-navy-400 uppercase tracking-wider font-semibold">
                {s.label}
              </div>
              <div className="num-mono font-bold text-navy-900">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="mt-4 flex items-end justify-between gap-3">
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
      </div>
    </article>
  );
}
