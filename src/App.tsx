import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import Produtos from './components/Produtos';
import Aplicacoes from './components/Aplicacoes';
import Sobre from './components/Sobre';
import Depoimentos from './components/Depoimentos';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Diferenciais />
        <Produtos />
        <Aplicacoes />
        <Sobre />
        <Depoimentos />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppFloat />
    </div>
  );
}
