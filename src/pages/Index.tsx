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
      </main>
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
      </div>
    </div>
  );
};

console.log('Index component defined');

export default Index;
