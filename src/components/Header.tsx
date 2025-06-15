
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ThemeToggle } from '@/components/theme-toggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 1, triggerOnce: false });

  // Rimuovi l'hash dall'URL al caricamento della pagina per evitare scroll automatico
  useEffect(() => {
    if (window.location.hash) {
      // Rimuovi l'hash dall'URL senza ricaricare la pagina
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
      // Scrolla in cima alla pagina
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const header = document.querySelector('header');
      let headerHeight = 0;
      
      if (header) {
        // Su mobile consideriamo anche il menu aperto
        headerHeight = header.offsetHeight;
        if (isMenuOpen && window.innerWidth < 768) {
          // Aggiungiamo spazio extra per il menu mobile
          headerHeight += 200; // Spazio approssimativo per il menu mobile
        }
      }
      
      const sectionTop = section.offsetTop;
      const scrollPosition = sectionTop - headerHeight;
      
      window.scrollTo({ 
        top: Math.max(0, scrollPosition), 
        behavior: 'smooth' 
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header ref={ref} className={`fixed top-0 w-full bg-background/80 backdrop-blur-xl z-50 border-b border-white/20 dark:border-slate-700/40 transition-all duration-500 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src="/lovable-uploads/cc3741a6-d4c6-44d6-8d0c-42f96b12dcfd.png" alt="ApexAI Logo" className="h-10" />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Servizi</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Chi Siamo</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Contatti</button>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden hover:scale-110 transition-transform duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50 animate-on-scroll fade-in-up visible">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 text-left">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 text-left">Servizi</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 text-left">Chi Siamo</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 text-left">Contatti</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
