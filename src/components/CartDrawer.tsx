import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle, Package } from 'lucide-react';
import { useCart, brl } from '../store/cart';

export default function CartDrawer() {
  const { items, isOpen, close, remove, setQty, total, clear } = useCart();

  const checkoutWhats = () => {
    const lines = items
      .map(
        (i) =>
          `• ${i.product.name} (Ø${i.product.diameterMm}mm) — ${i.qty}x ${brl(
            i.product.price * i.qty
          )}`
      )
      .join('%0A');
    const msg = `Olá UNIFORT! Quero fechar este pedido:%0A%0A${lines}%0A%0ATotal: ${brl(
      total()
    )}`;
    window.open(`https://wa.me/5562999650412?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={close}
        className={`fixed inset-0 z-[60] bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:max-w-md bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <header className="flex items-center justify-between p-5 border-b border-navy-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center">
              <ShoppingBag size={18} />
            </div>
            <div>
              <div className="font-display text-xl text-navy-900 tracking-wide">SEU CARRINHO</div>
              <div className="text-xs text-navy-600 num-mono">
                {items.length} {items.length === 1 ? 'item' : 'itens'}
              </div>
            </div>
          </div>
          <button
            onClick={close}
            aria-label="Fechar carrinho"
            className="w-10 h-10 rounded-lg hover:bg-navy-50 flex items-center justify-center cursor-pointer text-navy-700"
          >
            <X size={20} />
          </button>
        </header>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-6 py-12">
              <div className="w-24 h-24 rounded-full bg-navy-50 flex items-center justify-center mb-5">
                <ShoppingBag size={36} className="text-navy-300" />
              </div>
              <h3 className="font-display text-2xl text-navy-900">CARRINHO VAZIO</h3>
              <p className="mt-2 text-sm text-navy-600">
                Adicione discos diamantados profissionais e veja seu pedido aqui.
              </p>
              <button onClick={close} className="btn-primary mt-6">
                Explorar produtos
              </button>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map(({ product, qty }) => (
                <li
                  key={product.id}
                  className="flex gap-3 p-3 rounded-xl border border-navy-100 hover:border-orange/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy-50 border border-navy-100 text-navy-700 shrink-0 flex items-center justify-center">
                    <Package size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-navy-900 text-sm leading-tight line-clamp-2">
                        {product.name}
                      </h4>
                      <button
                        onClick={() => remove(product.id)}
                        aria-label="Remover"
                        className="text-navy-400 hover:text-sparkred transition-colors cursor-pointer shrink-0"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="mt-1 num-mono text-orange-dark font-bold text-sm">
                      {brl(product.price)}
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-lg border border-navy-200 overflow-hidden">
                        <button
                          onClick={() => setQty(product.id, qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-navy-700 hover:bg-navy-50 cursor-pointer"
                          aria-label="Diminuir"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="num-mono px-3 text-sm font-bold text-navy-900">{qty}</span>
                        <button
                          onClick={() => setQty(product.id, qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-navy-700 hover:bg-navy-50 cursor-pointer"
                          aria-label="Aumentar"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="num-mono text-sm font-bold text-navy-900">
                        {brl(product.price * qty)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / checkout */}
        {items.length > 0 && (
          <footer className="border-t border-navy-100 p-5 space-y-4 bg-navy-50/30">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-navy-700">
                <span>Subtotal</span>
                <span className="num-mono font-semibold">{brl(total())}</span>
              </div>
              <div className="flex justify-between text-navy-700">
                <span>Frete</span>
                <span className="text-orange font-semibold text-xs uppercase tracking-wide">A calcular</span>
              </div>
              <div className="flex justify-between text-navy-900 pt-2 border-t border-navy-200 text-base">
                <span className="font-bold">Total</span>
                <span className="num-mono font-bold text-lg">{brl(total())}</span>
              </div>
            </div>
            <button onClick={checkoutWhats} className="btn-primary w-full !py-4">
              <MessageCircle size={18} /> Finalizar pelo WhatsApp
            </button>
            <button
              onClick={clear}
              className="w-full text-xs text-navy-500 hover:text-sparkred transition cursor-pointer"
            >
              Limpar carrinho
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
