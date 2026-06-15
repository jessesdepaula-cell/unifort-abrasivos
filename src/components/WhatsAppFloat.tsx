import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5562999650412?text=Ol%C3%A1%20UNIFORT!%20Quero%20uma%20cota%C3%A7%C3%A3o%20de%20discos%20diamantados."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
      <span className="relative flex items-center gap-2.5 pl-3 pr-4 py-3 rounded-full bg-emerald-500 text-white shadow-[0_15px_35px_-10px_rgba(16,185,129,0.6)] hover:bg-emerald-600 transition-all hover:scale-105 cursor-pointer">
        <MessageCircle size={20} />
        <span className="font-semibold text-sm hidden sm:inline-block">Fale conosco</span>
      </span>
    </a>
  );
}
