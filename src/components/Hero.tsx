import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Hero = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  // Aggiorniamo anche scrollToContact per usare offset header
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    const header = document.querySelector('header');
    if (contactSection) {
      let offset = 0;
      if (header instanceof HTMLElement) {
        offset = header.offsetHeight;
      }
      const sectionRect = contactSection.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const top = sectionRect.top + scrollTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    const header = document.querySelector('header');
    if (servicesSection) {
      let offset = 0;
      if (header instanceof HTMLElement) {
        offset = header.offsetHeight;
      }
      const servicesSectionRect = servicesSection.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const top = servicesSectionRect.top + scrollTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative z-0 pt-20 bg-gradient-to-br from-background via-white/80 to-blue-100/40 dark:from-background dark:via-slate-900/60 dark:to-blue-500/5">
      {/* Faint glass blob effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[60vw] h-[50vh] rounded-full bg-blue-200/30 blur-2xl opacity-60 dark:bg-blue-800/40" />
        <div className="absolute right-0 bottom-0 w-1/2 h-1/4 bg-purple-200/30 rounded-full blur-2xl opacity-40 dark:bg-purple-800/40" />
      </div>
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className={`text-5xl lg:text-6xl font-bold leading-tight animate-on-scroll fade-in-up ${isIntersecting ? 'visible' : ''} font-sans`}>
                <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_3px_10px_rgba(84,108,255,0.25)] dark:from-blue-400 dark:via-blue-300 dark:to-purple-400">
                  Automazione AI
                </span>
                <br />
                per il Futuro
              </h1>
              <p className={`text-xl text-muted-foreground max-w-2xl animate-on-scroll fade-in-up stagger-2 ${isIntersecting ? 'visible' : ''}`}>
                Trasformiamo la tua azienda con soluzioni di intelligenza artificiale avanzate. 
                ApexAI è la tua partner italiana per l'automazione intelligente e l'innovazione tecnologica.
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 animate-on-scroll fade-in-up stagger-3 ${isIntersecting ? 'visible' : ''}`}>
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-700 via-blue-500 to-purple-700 hover:from-blue-800 hover:to-purple-800 shadow-xl shadow-blue-200/30 dark:shadow-none text-base font-semibold rounded-xl backdrop-blur-sm"
              >
                Inizia Ora
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToServices}
                className="hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-slate-800/70 dark:hover:text-blue-300 text-base font-semibold rounded-xl border-2 border-blue-600/20 dark:border-blue-300/20 backdrop-blur-sm"
              >
                Scopri di Più
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className={`text-center animate-on-scroll scale-in stagger-4 ${isIntersecting ? 'visible' : ''} hover:scale-110 transition-transform duration-300 cursor-pointer`}>
                <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 hover:bg-blue-200 transition-colors duration-300 shadow-lg shadow-blue-100/30 dark:shadow-blue-600/10">
                  <Bot className="text-blue-600 dark:text-blue-300" size={24} />
                </div>
                <p className="text-sm font-medium">AI Avanzata</p>
              </div>
              <div className={`text-center animate-on-scroll scale-in stagger-5 ${isIntersecting ? 'visible' : ''} hover:scale-110 transition-transform duration-300 cursor-pointer`}>
                <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 hover:bg-purple-200 transition-colors duration-300 shadow-lg shadow-purple-100/30 dark:shadow-purple-700/10">
                  <Zap className="text-purple-600 dark:text-purple-300" size={24} />
                </div>
                <p className="text-sm font-medium">Automazione</p>
              </div>
              <div className={`text-center animate-on-scroll scale-in stagger-6 ${isIntersecting ? 'visible' : ''} hover:scale-110 transition-transform duration-300 cursor-pointer`}>
                <div className="bg-green-100 dark:bg-green-900/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 hover:bg-green-200 transition-colors duration-300 shadow-lg shadow-green-100/30 dark:shadow-green-700/10">
                  <TrendingUp className="text-green-600 dark:text-green-300" size={24} />
                </div>
                <p className="text-sm font-medium">Crescita</p>
              </div>
            </div>
          </div>

          <div className={`relative animate-on-scroll fade-in-right ${isIntersecting ? 'visible' : ''}`}>
            <div className="bg-gradient-to-br from-blue-200/40 to-purple-200/30 dark:from-blue-900/60 dark:to-purple-900/30 rounded-3xl p-8 backdrop-blur-2xl border border-white/50 border-opacity-30 dark:border-slate-700 hover:scale-105 transition-transform duration-500 shadow-2xl shadow-blue-300/25 dark:shadow-none">
              <div className="bg-white/40 dark:bg-white/10 rounded-2xl p-6 backdrop-blur-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Sistema AI Attivo</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/40 dark:bg-white/10 rounded-lg p-3 hover:bg-white/60 dark:hover:bg-white/20 transition-colors duration-300">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Efficienza Processi</span>
                        <span className="text-sm font-bold text-green-400">+89%</span>
                      </div>
                    </div>
                    <div className="bg-white/40 dark:bg-white/10 rounded-lg p-3 hover:bg-white/60 dark:hover:bg-white/20 transition-colors duration-300">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Riduzione Costi</span>
                        <span className="text-sm font-bold text-blue-400">-67%</span>
                      </div>
                    </div>
                    <div className="bg-white/40 dark:bg-white/10 rounded-lg p-3 hover:bg-white/60 dark:hover:bg-white/20 transition-colors duration-300">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Automazione Completa</span>
                        <span className="text-sm font-bold text-purple-400">24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
