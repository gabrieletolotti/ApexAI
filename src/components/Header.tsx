import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ThemeToggle } from '@/components/theme-toggle';

/**
 * Header Component - Navbar sticky con evidenziazione sezione attiva
 * Monitora lo scroll per evidenziare la sezione corrente
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 1, triggerOnce: false });
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navigate = useNavigate();

  // Add goHome function
  const goHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'cta', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      let headerHeight = 80; // Default header height

      if (header) {
        const headerRect = header.getBoundingClientRect();
        headerHeight = headerRect.height;
      }

      const sectionTop = section.offsetTop;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: 'smooth',
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
            {/* Updated Logo behavior */}
            {/* Updated Logo button click behavior */}
            <button 
              onClick={goHome}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img src="./lovable-uploads/aa430766-16dd-4783-bc9f-f9980ee34dea.png" alt="ApexAI Logo" className="h-10" />
            </button>
          </div>
          
          {/* Center Section - Navigation con sezione attiva evidenziata */}
          <nav className="flex items-center justify-center space-x-8">
            {isHomePage ? (
              <>
                {/* Updated Home button behavior */}
                <button 
                  onClick={goHome}
                  className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className={`text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${activeSection === 'services' ? 'text-primary font-semibold after:w-full' : 'after:w-0'}`}
                >
                  Servizi
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className={`text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${activeSection === 'about' ? 'text-primary font-semibold after:w-full' : 'after:w-0'}`}
                >
                  Chi Siamo
                </button>
                <button 
                  onClick={() => scrollToSection('cta')} 
                  className={`text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${activeSection === 'cta' ? 'text-primary font-semibold after:w-full' : 'after:w-0'}`}
                >
                  Contatti
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={goHome}
                  className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300"
                >
                  Home
                </button>
                <Link to="/" className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300">
                  Servizi
                </Link>
                <Link to="/" className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300">
                  Chi Siamo
                </Link>
                <Link to="/#cta" className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300">
                  Contatti 
                </Link>
              </>
            )}
          </nav>

          {/* Right Section - Theme Toggle */}
          <div className="flex justify-end">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between">
          <button 
            onClick={goHome}
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
              {isHomePage ? (
                <>
                  <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 text-left">Home</button>
                  <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 text-left">Servizi</button>
                  <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 text-left">Chi Siamo</button>
                  <button onClick={() => scrollToSection('cta')} className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 text-left">Contatti</button>
                </>
              ) : (
                <>
                  <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 text-left">Home</Link>
                  <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 text-left">Servizi</Link>
                  <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 text-left">Chi Siamo</Link>
                  <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 text-left">Contatti</Link>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
