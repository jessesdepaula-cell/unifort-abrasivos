import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Rogério Almeida',
    role: 'Marmoraria Atlas — São Paulo/SP',
    initials: 'RA',
    rating: 5,
    text: 'O disco de 350mm aguentou três obras grandes sem perder eficiência. Custo por peça cortada despencou.',
    color: 'from-orange to-orange-dark',
  },
  {
    name: 'Camila Vasconcelos',
    role: 'Construtora CV — Salvador/BA',
    initials: 'CV',
    rating: 5,
    text: 'Trocamos toda a frota de discos para Unifort. Atendimento técnico ajudou a escolher o LSM certo para nossa serra.',
    color: 'from-gold to-gold-dark',
  },
  {
    name: 'Eduardo Souza',
    role: 'Instalador autônomo — Curitiba/PR',
    initials: 'ES',
    rating: 5,
    text: 'O Turbo Fino corta porcelanato sem lascar, e meu acabamento melhorou muito. Cliente notou a diferença na hora.',
    color: 'from-navy-600 to-navy-900',
  },
];

export default function Depoimentos() {
  return (
    <section className="relative py-20 lg:py-28 bg-navy-50/40">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="chip bg-orange/10 text-orange-dark border border-orange/20">
            QUEM USA, RECOMENDA
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-navy-900 tracking-wide">
            RESULTADOS QUE FALAM
            <span className="block text-orange">NO CANTEIRO DE OBRA.</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="relative rounded-2xl bg-white p-7 border border-navy-100 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_25px_50px_-25px_rgba(15,34,56,0.4)]"
            >
              <Quote size={36} className="text-navy-100 absolute top-5 right-5" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-navy-800 leading-relaxed text-[15px]">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-navy-100">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{r.name}</div>
                  <div className="text-xs text-navy-600">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
