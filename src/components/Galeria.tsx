import { useState } from 'react';
import { ZoomIn, X, Download, MessageCircle } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    title: 'Guia Foco e Produtividade',
    desc: 'Comece o dia com foco e entregue resultados.',
    src: '/images/banner-bomdia.jpg',
    aspect: 'aspect-[9/16]',
  },
  {
    title: 'Guia: Você está usando o disco certo?',
    desc: 'Fatores de impacto no acabamento e durabilidade.',
    src: '/images/banner-disco-certo.jpg',
    aspect: 'aspect-[9/16]',
  },
  {
    title: 'Promoções e Soluções Unifort',
    desc: 'Condições especiais para marmorarias e construtoras.',
    src: '/images/banner-promocao.jpg',
    aspect: 'aspect-[9/16]',
  },
];

export default function Galeria() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const getWhatsAppShareLink = (title: string) => {
    const text = encodeURIComponent(
      `Olá! Estava navegando no site da Unifort Abrasivos e me interessei pela imagem de destaque "${title}". Gostaria de saber mais sobre esses produtos!`
    );
    return `https://wa.me/5562999650412?text=${text}`;
  };

  return (
    <section id="galeria" className="relative py-20 lg:py-28 bg-gradient-to-b from-navy-50/30 via-white to-navy-50/30 overflow-hidden">
      <div className="container-x">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="chip bg-orange/10 text-orange-dark border border-orange/20">
            CATÁLOGO VISUAL
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-navy-900 tracking-wide">
            GALERIA DE <span className="text-orange">PRODUTOS</span> & ENCARTES
          </h2>
          <p className="mt-3 text-navy-700/80 text-lg">
            Veja mais detalhes de nossa linha de produtos, encartes técnicos e guias de aplicação.
            Clique em qualquer imagem para ampliá-la.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-end">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item.src)}
              className="group relative rounded-2xl overflow-hidden border border-navy-100/80 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className={`${item.aspect} relative w-full overflow-hidden bg-navy-900 flex items-center justify-center`}>
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white mb-2 scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={18} />
                  </div>
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">Ampliar</span>
                </div>
              </div>

              {/* Title & Desc (shown below image) */}
              <div className="p-3.5 bg-white border-t border-navy-50">
                <h3 className="font-semibold text-navy-900 text-xs sm:text-sm line-clamp-1 group-hover:text-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-navy-500 line-clamp-1 mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
            aria-label="Fechar galeria"
          >
            <X size={24} />
          </button>

          {/* Modal content container */}
          <div
            className="relative max-w-full max-h-[85vh] sm:max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt="Ampliada"
              className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {/* Bottom Actions inside Lightbox */}
            {(() => {
              const item = GALLERY_ITEMS.find((i) => i.src === activeImage);
              return item ? (
                <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 w-full bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
                  <div className="text-center sm:text-left">
                    <h4 className="font-semibold text-sm sm:text-base">{item.title}</h4>
                    <p className="text-white/70 text-xs mt-0.5">{item.desc}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={item.src}
                      download
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition cursor-pointer"
                    >
                      <Download size={14} /> Baixar
                    </a>
                    <a
                      href={getWhatsAppShareLink(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-xs font-semibold text-white transition cursor-pointer"
                    >
                      <MessageCircle size={14} /> Consultar no WhatsApp
                    </a>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </div>
      )}
    </section>
  );
}
