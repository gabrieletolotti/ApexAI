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
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo e descrizione */}
          <div className={`space-y-4 animate-on-scroll fade-in-up ${isIntersecting ? 'visible' : ''}`}>
            <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
              <img 
                src="./lovable-uploads/aa430766-16dd-4783-bc9f-f9980ee34dea.png" 
                alt="ApexAI - Automazione AI per Business" 
                className="h-10"
                loading="lazy"
              />
            </div>
            <p className="text-slate-300 leading-relaxed">
              Automazioni intelligenti per business in evoluzione. Trasformiamo le aziende con soluzioni AI su misura.
            </p>
          </div>

          {/* Contatti */}
          <div className={`animate-on-scroll fade-in-up stagger-2 ${isIntersecting ? 'visible' : ''}`}>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <div className="space-y-3 text-slate-300">
              <a 
                href="mailto:info@apexai.it" 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail size={18} />
                <span>assistenza@apexai.it</span>
              </a>
              <p className="text-sm">Bergamo, Italia</p>
            </div>
          </div>

          {/* Social e Link */}
          <div className={`animate-on-scroll fade-in-up stagger-3 ${isIntersecting ? 'visible' : ''}`}>
            <h3 className="text-lg font-semibold mb-4">Seguici</h3>
            <div className="flex gap-4 mb-6">
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
            
            {/* Link legali aggiornati */}
            <div className="space-y-2 text-sm text-slate-400">
              <Link 
                to="/privacy-policy" 
                className="block hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/cookie-policy" 
                className="block hover:text-blue-400 transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`border-t border-slate-700/50 pt-8 text-center text-slate-400 text-sm animate-on-scroll fade-in-up stagger-5 ${isIntersecting ? 'visible' : ''}`}>
          <p>© 2025 ApexAI. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
