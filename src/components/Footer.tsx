import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom'; // Importa Link da React Router

/**
 * Footer Component - Include contatti, social e link legali
 */
const Footer = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <footer ref={ref} className="bg-slate-900/70 backdrop-blur-xl text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main footer content - 3 colonne */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Colonna 1: Logo + Descrizione */}
          <div className={`space-y-4 animate-on-scroll fade-in-up ${isIntersecting ? 'visible' : ''}`}>
            <Link to="/" className="block cursor-pointer hover:scale-105 transition-transform duration-300">
              <img 
                src="./lovable-uploads/aa430766-16dd-4783-bc9f-f9980ee34dea.png" 
                alt="ApexAI - Automazione AI per Business" 
                className="h-10"
                loading="lazy"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Automazioni intelligenti per business in evoluzione. Trasformiamo le aziende con soluzioni AI su misura.
            </p>
            
            {/* Social icons */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://linkedin.com/company/apexai-Italia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                aria-label="Seguici su LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com/apexai.it" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-lg hover:bg-pink-600 transition-colors duration-300"
                aria-label="Seguici su Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/apexai.it" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                aria-label="Seguici su Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Colonna 2: Link Rapidi */}
          <div className={`animate-on-scroll fade-in-up stagger-2 ${isIntersecting ? 'visible' : ''}`}>
            <h3 className="text-lg font-semibold mb-4">Link Rapidi</h3>
            <div className="space-y-3 text-slate-400">
              <Link 
                to="/" 
                className="block hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Home
              </Link>
              <a 
                href="/#services" 
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('services');
                  if (section) {
                    const header = document.querySelector('header');
                    const headerHeight = header?.getBoundingClientRect().height || 80;
                    window.scrollTo({ top: section.offsetTop - headerHeight, behavior: 'smooth' });
                  }
                }}
                className="block hover:text-blue-400 transition-colors duration-300 text-sm cursor-pointer"
              >
                Servizi
              </a>
              <a 
                href="/#about" 
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('about');
                  if (section) {
                    const header = document.querySelector('header');
                    const headerHeight = header?.getBoundingClientRect().height || 80;
                    window.scrollTo({ top: section.offsetTop - headerHeight, behavior: 'smooth' });
                  }
                }}
                className="block hover:text-blue-400 transition-colors duration-300 text-sm cursor-pointer"
              >
                Chi Siamo
              </a>
              <Link 
                to="/prenota" 
                className="block hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Contatti
              </Link>
            </div>
          </div>

          {/* Colonna 3: Contatti + Link Legali */}
          <div className={`animate-on-scroll fade-in-up stagger-3 ${isIntersecting ? 'visible' : ''}`}>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <div className="space-y-3 text-slate-400 mb-6">
              <a 
                href="mailto:assistenza@apexai.it" 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                <Mail size={16} />
                <span>assistenza@apexai.it</span>
              </a>
              <p className="text-sm">Bergamo, Italia</p>
            </div>
            
            {/* Link legali */}
            <h3 className="text-lg font-semibold mb-4 mt-8">Informazioni Legali</h3>
            <div className="space-y-3 text-slate-400">
              <Link 
                to="/privacy-policy" 
                className="block hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/cookie-policy" 
                className="block hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`border-t border-slate-700/50 pt-8 text-center text-[#A1A1AA] text-sm animate-on-scroll fade-in-up stagger-5 ${isIntersecting ? 'visible' : ''}`}>
          <p>© 2025 ApexAI. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
