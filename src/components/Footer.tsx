import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importa Link da React Router

/**
 * Footer Component - Include contatti, social e link legali
 */
const Footer = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  
  // Add goHome function
  const location = useLocation();
  const navigate = useNavigate();
  const goHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goHomeAndScroll = (sectionId: string) => {
    navigate('/#' + sectionId);
  };

  return (
    <footer ref={ref} className="bg-slate-100/95 dark:bg-slate-900/70 backdrop-blur-xl text-slate-900 dark:text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main footer content - colonne centrate e spostate a destra */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-start mb-12 mx-auto max-w-[90%]">
          {/* Colonna 1: Logo e descrizione */}
          <div className={`space-y-4 animate-on-scroll fade-in-up ${isIntersecting ? 'visible' : ''}`}>
            <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
              <img 
                src="./lovable-uploads/aa430766-16dd-4783-bc9f-f9980ee34dea.png" 
                alt="ApexAI - Automazione AI per Business" 
                className="h-10"
                loading="lazy"
              />
            </div>
            <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Automazioni intelligenti</h3>
              <div className="sub-line">per business in evoluzione</div>
            </div>
          </div>

          {/* Colonna 2: Link rapidi */}
          <div className={`space-y-2 animate-on-scroll fade-in-up stagger-2 ${isIntersecting ? 'visible' : ''}`}>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Link Rapidi</h3>
            <div className="space-y-2 text-slate-600 dark:text-slate-400">
              <button 
                onClick={goHome} 
                className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => goHomeAndScroll('services')}
                className="block text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Servizi
              </button>
              <button 
                onClick={() => goHomeAndScroll('about')}
                className="block text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Chi Siamo
              </button>
              <button 
                onClick={() => goHomeAndScroll('cta')}
                className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Contatti
              </button>
            </div>
          </div>

          {/* Colonna 3: Informazioni */}
          <div className={`space-y-2 animate-on-scroll fade-in-up stagger-4 ${isIntersecting ? 'visible' : ''}`}>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Informazioni</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>Email: assistenza@apexai.it</li>
              <li>Telefono: +39 339 507 6268</li>
              <li>Sede: Bergamo, Italia</li>
            </ul>
          </div>

          {/* Colonna 4: Social e Link legali */}
          <div className={`space-y-2 animate-on-scroll fade-in-up stagger-3 ${isIntersecting ? 'visible' : ''}`}>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Seguici</h3>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://linkedin.com/company/apexai-Italia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-200 dark:bg-slate-800 p-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-300"
                aria-label="Seguici su LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com/apexai.it" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-200 dark:bg-slate-800 p-2 rounded-lg hover:bg-pink-600 dark:hover:bg-pink-600 transition-colors duration-300"
                aria-label="Seguici su Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/apexai.it" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-200 dark:bg-slate-800 p-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-300"
                aria-label="Seguici su Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            
            {/* Link legali */}
            <div className="space-y-2 text-sm">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Informazioni legali</h4>
              <Link 
                to="/privacy-policy" 
                className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/cookie-policy" 
                className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`border-t border-slate-300/50 dark:border-slate-700/50 pt-8 text-center text-slate-600 dark:text-slate-400 text-sm animate-on-scroll fade-in-up stagger-5 ${isIntersecting ? 'visible' : ''}`}>
          <p>© 2025 ApexAI. Tutti i diritti riservati.</p>
        </div>
      </div> 
    </footer>
  );
};

export default Footer;