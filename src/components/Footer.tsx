
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 animate-slide-in-left overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4 animate-scale-bounce stagger-1">
            <div className="text-2xl font-bold animate-gradient-text cursor-pointer animate-float">
              ApexAI
            </div>
            <p className="text-slate-300 leading-relaxed animate-fade-in stagger-2">
              La tua partner italiana per l'automazione AI e l'innovazione tecnologica. 
              Trasformiamo le aziende con soluzioni intelligenti.
            </p>
          </div>

          <div className="animate-slide-in-right stagger-2">
            <h3 className="font-semibold mb-4 animate-gradient-text">Servizi</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white interactive animate-fade-in stagger-1">AI Personalizzata</a></li>
              <li><a href="#" className="hover:text-white interactive animate-fade-in stagger-2">Automazione Processi</a></li>
              <li><a href="#" className="hover:text-white interactive animate-fade-in stagger-3">Analisi Dati</a></li>
              <li><a href="#" className="hover:text-white interactive animate-fade-in stagger-4">Chatbot</a></li>
            </ul>
          </div>

          <div className="animate-slide-in-right stagger-3">
            <h3 className="font-semibold mb-4 animate-gradient-text">Azienda</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#about" className="hover:text-white interactive animate-fade-in stagger-1">Chi Siamo</a></li>
              <li><a href="#" className="hover:text-white interactive animate-fade-in stagger-2">Carriere</a></li>
              <li><a href="#" className="hover:text-white interactive animate-fade-in stagger-3">Blog</a></li>
              <li><a href="#" className="hover:text-white interactive animate-fade-in stagger-4">Privacy</a></li>
            </ul>
          </div>

          <div className="animate-slide-in-right stagger-4">
            <h3 className="font-semibold mb-4 animate-gradient-text">Contatti</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-2 interactive group animate-fade-in stagger-1">
                <Mail size={16} className="animate-float group-hover:animate-glow" />
                <span className="group-hover:text-white transition-colors">info@apexai.it</span>
              </div>
              <div className="flex items-center space-x-2 interactive group animate-fade-in stagger-2">
                <Phone size={16} className="animate-float group-hover:animate-glow" style={{animationDelay: '1s'}} />
                <span className="group-hover:text-white transition-colors">+39 02 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 interactive group animate-fade-in stagger-3">
                <MapPin size={16} className="animate-float group-hover:animate-glow" style={{animationDelay: '2s'}} />
                <span className="group-hover:text-white transition-colors">Milano, Italia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400 animate-fade-in stagger-5">
          <p className="animate-shimmer">&copy; 2024 ApexAI. Tutti i diritti riservati. Made with ❤️ in Italy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
