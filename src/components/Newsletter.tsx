import { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setEmail('');
  };

  return (
    <section className="relative py-20 bg-white">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl brand-gradient-radial p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 grid-deco opacity-30 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange/30 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <span className="chip bg-white/10 text-gold border border-gold/30">
                <Mail size={12} /> Newsletter
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl tracking-wide leading-tight">
                RECEBA OFERTAS
                <span className="block metal-text">E NOVIDADES TÉCNICAS</span>
              </h2>
              <p className="mt-4 text-white/75 max-w-md">
                Lançamentos, descontos exclusivos para profissionais e conteúdo
                técnico sobre corte de pedras. Sem spam.
              </p>
            </div>

            <form onSubmit={submit} className="w-full">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="seu@email.com"
                    aria-label="E-mail para newsletter"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 backdrop-blur focus:outline-none focus:ring-2 focus:ring-orange focus:bg-white/15 transition"
                  />
                </div>
                <button type="submit" className="btn-primary !py-4 group">
                  {sent ? (
                    <>
                      <CheckCircle2 size={18} /> Recebido
                    </>
                  ) : (
                    <>
                      Quero receber
                      <Send size={16} className="group-hover:translate-x-1 transition" />
                    </>
                  )}
                </button>
              </div>
              <p className="mt-3 text-xs text-white/50">
                Ao se inscrever, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
