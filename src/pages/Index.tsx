import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

console.log('Index.tsx loaded');

/**
 * Index Page - Pagina principale con tutte le sezioni
 * Ordine: Hero → Servizi → Chi Siamo → CTA → Contatti → Footer
 */
const Index = () => {
  console.log('Index component rendering...');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Mostra/nascondi pulsante "Torna su" in base allo scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CTA />
      <Footer />
      
      {/* Pulsante "Torna su" - visibile dopo 400px di scroll */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 rounded-full w-12 h-12 p-0 shadow-2xl hover:scale-110 transition-all duration-300 bg-blue-600 hover:bg-blue-700"
          aria-label="Torna su"
        >
          <ArrowUp size={24} />
        </Button>
      )}

      {/* Modificato il componente Contatti per includere il contenuto della sezione "Pronto a trasformare la tua azienda con l'IA?" */}
      <div className="text-center py-20 bg-blue-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Pronto a Trasformare la Tua Azienda con l'IA?</h2>
        <p className="text-lg mb-8">Scopri come l'automazione intelligente può far crescere il tuo business. Inizia oggi con una consulenza gratuita e personalizzata.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">Prenota Consulenza Gratuita</button>
          <button className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">Scopri Come Automatizzare</button>
        </div>
        <div className="flex justify-center gap-8 mt-8 text-sm">
          <span>✔ Risposta in 24 ore</span>
          <span>✔ Consulenza senza impegno</span>
          <span>✔ Soluzioni su misura</span>
        </div>
      </div>
    </div>
  );
};

console.log('Index component defined');

export default Index;
