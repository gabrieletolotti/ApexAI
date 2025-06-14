
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 animate-[fade-in_0.8s_ease-out]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4 animate-[fade-in_0.6s_ease-out_0.2s_both]">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
              ApexAI
            </div>
            <p className="text-slate-300 leading-relaxed">
              La tua partner italiana per l'automazione AI e l'innovazione tecnologica. 
              Trasformiamo le aziende con soluzioni intelligenti.
            </p>
          </div>

          <div className="animate-[fade-in_0.6s_ease-out_0.4s_both]">
            <h3 className="font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">AI Personalizzata</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Automazione Processi</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Analisi Dati</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Chatbot</a></li>
            </ul>
          </div>

          <div className="animate-[fade-in_0.6s_ease-out_0.6s_both]">
            <h3 className="font-semibold mb-4">Azienda</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#about" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Chi Siamo</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Carriere</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Blog</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Privacy</a></li>
            </ul>
          </div>

          <div className="animate-[fade-in_0.6s_ease-out_0.8s_both]">
            <h3 className="font-semibold mb-4">Contatti</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-2 hover:text-white hover:translate-x-1 transition-all duration-300">
                <Mail size={16} />
                <span>info@apexai.it</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-white hover:translate-x-1 transition-all duration-300">
                <Phone size={16} />
                <span>+39 02 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-white hover:translate-x-1 transition-all duration-300">
                <MapPin size={16} />
                <span>Milano, Italia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400 animate-[fade-in_0.6s_ease-out_1s_both]">
          <p>&copy; 2024 ApexAI. Tutti i diritti riservati. Made with ❤️ in Italy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
