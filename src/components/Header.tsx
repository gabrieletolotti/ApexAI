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
      let headerHeight = 80; // Valore di fallback
      
      if (header) {
        const headerRect = header.getBoundingClientRect();
        headerHeight = headerRect.height;
        
        // Su mobile, aggiungiamo un offset drastico per far combaciare sezione con header
        if (window.innerWidth < 768) {
          // Chiudi il menu mobile se aperto
          if (isMenuOpen) {
            setIsMenuOpen(false);
            // Delay per permettere al menu di chiudersi
            setTimeout(() => {
              const sectionTop = section.offsetTop;
              // Su mobile aggiungiamo un offset drastico per posizionamento perfetto
              window.scrollTo({ 
                top: sectionTop - headerHeight - 200, 
                behavior: 'smooth' 
              });
            }, 150);
            return;
          } else {
            // Menu già chiuso, scrolliamo con offset mobile drastico
            const sectionTop = section.offsetTop;
            window.scrollTo({ 
              top: sectionTop - headerHeight - 200, 
              behavior: 'smooth' 
            });
            return;
          }
        }
      }
      
      // Desktop/tablet - comportamento normale
      const sectionTop = section.offsetTop;
      window.scrollTo({ 
        top: sectionTop - headerHeight, 
        behavior: 'smooth' 
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header ref={ref} className={`fixed top-0 w-full bg-background/80 backdrop-blur-xl z-50 border-b border-white/20 dark:border-slate-700/40 transition-all duration-500 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="hidden md:grid md:grid-cols-3 md:items-center">
          {/* Left Section - Logo */}
          <div className="flex justify-start">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img src="./lovable-uploads/aa430766-16dd-4783-bc9f-f9980ee34dea.png" alt="ApexAI Logo" className="h-10" />
            </button>
          </div>
          
          {/* Center Section - Navigation */}
          <nav className="flex items-center justify-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Servizi</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Chi Siamo</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Contatti</button>
          </nav>

          {/* Right Section - Theme Toggle */}
          <div className="flex justify-end">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src="./lovable-uploads/aa430766-16dd-4783-bc9f-f9980ee34dea.png" alt="ApexAI Logo" className="h-10" />
          </button>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="hover:scale-110 transition-transform duration-300"
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
