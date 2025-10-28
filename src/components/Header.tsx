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
    <header
      ref={ref}
      className={`fixed left-1/2 -translate-x-1/2 mt-6 w-[95vw] max-w-4xl bg-white/10 backdrop-blur-xl z-50 border border-white/20 shadow-lg flex items-center transition-all duration-300 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'} ${isMenuOpen ? 'menu-opening' : 'menu-closed'}`}
      style={{ top: undefined }}
    >
      <div className="w-full flex items-center px-6 py-3">
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
          <nav className="flex items-center justify-center space-x-8 whitespace-nowrap w-full">
            {isHomePage ? (
              <>
                {/* All nav buttons: pill-shaped, glassy, perfectly aligned */}
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
        <div className="flex md:hidden items-center justify-between w-full">
          <button 
            onClick={goHome}
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src="./lovable-uploads/aa430766-16dd-4783-bc9f-f9980ee34dea.png" alt="ApexAI Logo" className="h-10" />
          </button>
          
          <button 
            className="hover:scale-110 transition-transform duration-300 relative z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Full Screen Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50 flex items-center justify-center">
          <nav className="flex flex-col items-center gap-12 px-8">
            {isHomePage ? (
              <>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-white text-3xl font-semibold hover:text-blue-400 transition-colors duration-300 animate-in fade-in-0 slide-in-from-bottom-4"
                  style={{ animationDelay: '100ms', animationFillMode: 'backwards' }}
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-white text-3xl font-semibold hover:text-blue-400 transition-colors duration-300 animate-in fade-in-0 slide-in-from-bottom-4"
                  style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
                >
                  Servizi
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-white text-3xl font-semibold hover:text-blue-400 transition-colors duration-300 animate-in fade-in-0 slide-in-from-bottom-4"
                  style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}
                >
                  Chi Siamo
                </button>
                <button 
                  onClick={() => scrollToSection('cta')} 
                  className="text-white text-3xl font-semibold hover:text-blue-400 transition-colors duration-300 animate-in fade-in-0 slide-in-from-bottom-4"
                  style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
                >
                  Contatti
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-white text-3xl font-semibold hover:text-blue-400 transition-colors duration-300 animate-in fade-in-0 slide-in-from-bottom-4"
                  style={{ animationDelay: '100ms', animationFillMode: 'backwards' }}
                >
                  Home
                </Link>
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-white text-3xl font-semibold hover:text-blue-400 transition-colors duration-300 animate-in fade-in-0 slide-in-from-bottom-4"
                  style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
                >
                  Servizi
                </Link>
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-white text-3xl font-semibold hover:text-blue-400 transition-colors duration-300 animate-in fade-in-0 slide-in-from-bottom-4"
                  style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}
                >
                  Chi Siamo
                </Link>
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-white text-3xl font-semibold hover:text-blue-400 transition-colors duration-300 animate-in fade-in-0 slide-in-from-bottom-4"
                  style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
                >
                  Contatti
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
