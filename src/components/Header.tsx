import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ThemeToggle } from '@/components/theme-toggle';
import { gsap } from 'gsap';

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
  
  // GSAP refs
  const headerRef = useRef<HTMLElement | null>(null);
  const navLinksRef = useRef<(HTMLButtonElement | HTMLAnchorElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

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
  
  // Calculate header height dynamically
  const calculateHeight = () => {
    if (!headerRef.current) return 60;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (isMobile && isMenuOpen) {
      // Base height + nav content
      return 150; // Pill height + space for horizontal nav
    }
    return 60; // Closed pill height
  };
  
  // Create GSAP timeline
  const createTimeline = () => {
    if (!headerRef.current) return null;
    
    gsap.set(headerRef.current, { height: 60, borderRadius: '9999px' });
    gsap.set(navLinksRef.current, { y: 20, opacity: 0 });
    
    const tl = gsap.timeline({ paused: true });
    
    // Animate border radius first (faster)
    tl.to(headerRef.current, {
      borderRadius: '1.5rem',
      duration: 0.25,
      ease: 'power2.out'
    });
    
    // Animate height
    tl.to(headerRef.current, {
      height: calculateHeight,
      duration: 0.4,
      ease: 'power3.out'
    }, '-=0.1');
    
    // Animate nav links with stagger
    tl.to(navLinksRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'power3.out',
      stagger: 0.08
    }, '-=0.2');
    
    return tl;
  };
  
  // Setup GSAP timeline
  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    
    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpen]);
  
  // Toggle menu with GSAP
  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      tl.play(0);
    } else {
      tl.eventCallback('onReverseComplete', () => setIsMenuOpen(false));
      tl.reverse();
    }
  };

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
    // Close menu with GSAP animation
    if (isMenuOpen && tlRef.current) {
      tlRef.current.eventCallback('onReverseComplete', () => setIsMenuOpen(false));
      tlRef.current.reverse();
    }
  };
  
  // Helper to set nav link refs
  const setNavLinkRef = (index: number) => (el: HTMLButtonElement | HTMLAnchorElement | null) => {
    if (el) navLinksRef.current[index] = el;
  };

  return (
    <header
      ref={(el) => {
        headerRef.current = el;
        // Handle the intersection observer ref
        if (ref && 'current' in ref) {
          (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        }
      }}
      className={`fixed left-1/2 -translate-x-1/2 mt-6 w-[95vw] max-w-4xl bg-white/10 backdrop-blur-xl z-50 border border-white/20 shadow-lg flex items-center ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'} overflow-hidden`}
      style={{ top: undefined, height: 60, borderRadius: '9999px' }}
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
        <div className="flex md:hidden flex-col items-center w-full">
          <div className="flex items-center justify-between w-full">
            <button 
              onClick={goHome}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img src="./lovable-uploads/aa430766-16dd-4783-bc9f-f9980ee34dea.png" alt="ApexAI Logo" className="h-10" />
            </button>
            
            <button 
              className="hover:scale-110 transition-transform duration-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation - Horizontal menu below logo */}
          {isMenuOpen && (
            <nav className="flex items-center justify-center gap-3 mt-4 pb-2 w-full overflow-hidden">
              {isHomePage ? (
                <>
                  <button 
                    ref={setNavLinkRef(0)}
                    onClick={() => scrollToSection('home')} 
                    className="text-foreground hover:text-primary hover:scale-110 transition-all text-xs font-medium whitespace-nowrap"
                  >
                    Home
                  </button>
                  <button 
                    ref={setNavLinkRef(1)}
                    onClick={() => scrollToSection('services')} 
                    className="text-foreground hover:text-primary hover:scale-110 transition-all text-xs font-medium whitespace-nowrap"
                  >
                    Servizi
                  </button>
                  <button 
                    ref={setNavLinkRef(2)}
                    onClick={() => scrollToSection('about')} 
                    className="text-foreground hover:text-primary hover:scale-110 transition-all text-xs font-medium whitespace-nowrap"
                  >
                    Chi Siamo
                  </button>
                  <button 
                    ref={setNavLinkRef(3)}
                    onClick={() => scrollToSection('cta')} 
                    className="text-foreground hover:text-primary hover:scale-110 transition-all text-xs font-medium whitespace-nowrap"
                  >
                    Contatti
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    ref={setNavLinkRef(0)}
                    to="/" 
                    onClick={() => setIsMenuOpen(false)} 
                    className="text-foreground hover:text-primary hover:scale-110 transition-all text-xs font-medium whitespace-nowrap"
                  >
                    Home
                  </Link>
                  <Link 
                    ref={setNavLinkRef(1)}
                    to="/" 
                    onClick={() => setIsMenuOpen(false)} 
                    className="text-foreground hover:text-primary hover:scale-110 transition-all text-xs font-medium whitespace-nowrap"
                  >
                    Servizi
                  </Link>
                  <Link 
                    ref={setNavLinkRef(2)}
                    to="/" 
                    onClick={() => setIsMenuOpen(false)} 
                    className="text-foreground hover:text-primary hover:scale-110 transition-all text-xs font-medium whitespace-nowrap"
                  >
                    Chi Siamo
                  </Link>
                  <Link 
                    ref={setNavLinkRef(3)}
                    to="/" 
                    onClick={() => setIsMenuOpen(false)} 
                    className="text-foreground hover:text-primary hover:scale-110 transition-all text-xs font-medium whitespace-nowrap"
                  >
                    Contatti
                  </Link>
                </>
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
