import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Hero = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const header = document.querySelector('header');
      let headerHeight = 80; // Valore di fallback
      
      if (header) {
        const headerRect = header.getBoundingClientRect();
        headerHeight = headerRect.height;
        
        // Su mobile aggiungiamo un offset drastico per far combaciare sezione con header
        if (window.innerWidth < 768) {
          const sectionTop = section.offsetTop;
          window.scrollTo({ 
            top: sectionTop - headerHeight - 200, 
            behavior: 'smooth' 
          });
          return;
        }
      }
      
      // Desktop/tablet - comportamento normale
      const sectionTop = section.offsetTop;
      window.scrollTo({ 
        top: sectionTop - headerHeight, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative z-0 pt-48 sm:pt-20 px-4 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 dark:from-background dark:via-slate-900/60 dark:to-blue-500/5">
      {/* Dynamic animated background elements - Ottimizzato per mobile */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Elementi animati per desktop */}
        <div className="hero-bg-element-1 absolute w-[30vw] h-[20vh] md:w-[25vw] md:h-[20vh] rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-800/40" style={{left: '5%', top: '15%'}} />
        <div className="hero-bg-element-2 absolute w-[35vw] h-[25vh] md:w-[30vw] md:h-[25vh] rounded-full bg-purple-200/25 blur-3xl dark:bg-purple-800/35" style={{right: '10%', bottom: '25%'}} />
        <div className="hero-bg-element-3 absolute w-[25vw] h-[15vh] md:w-[20vw] md:h-[15vh] rounded-full bg-blue-100/35 blur-2xl dark:bg-blue-900/45" style={{left: '25%', top: '55%'}} />
        <div className="hero-bg-element-4 absolute w-[40vw] h-[30vh] md:w-[35vw] md:h-[30vh] rounded-full bg-purple-100/20 blur-3xl dark:bg-purple-900/30" style={{right: '15%', top: '5%'}} />
        <div className="hero-bg-element-5 absolute w-[20vw] h-[12vh] md:w-[15vw] md:h-[12vh] rounded-full bg-blue-300/40 blur-2xl dark:bg-blue-700/50" style={{left: '55%', bottom: '35%'}} />
        
        {/* Elementi più piccoli per mobile */}
        <div className="hero-bg-element-1 absolute w-[15vw] h-[8vh] md:w-[10vw] md:h-[8vh] rounded-full bg-indigo-200/30 blur-xl dark:bg-indigo-800/40" style={{left: '3%', bottom: '15%', animationDelay: '-8s'}} />
        <div className="hero-bg-element-3 absolute w-[18vw] h-[10vh] md:w-[12vw] md:h-[10vh] rounded-full bg-cyan-200/25 blur-xl dark:bg-cyan-800/35" style={{right: '5%', top: '35%', animationDelay: '-12s'}} />
        <div className="hero-bg-element-5 absolute w-[12vw] h-[7vh] md:w-[8vw] md:h-[6vh] rounded-full bg-pink-200/35 blur-lg dark:bg-pink-800/45" style={{left: '65%', top: '20%', animationDelay: '-18s'}} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div ref={ref} className="space-y-12 lg:space-y-16">
          {/* Titolo principale */}
          <div className="text-center space-y-6">
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-on-scroll fade-in-up ${isIntersecting ? 'visible' : ''} font-sans`}>
              <span className="animate-gradient bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_3px_10px_rgba(84,108,255,0.25)] dark:from-blue-600 dark:via-purple-700 dark:to-blue-600" style={{backgroundSize: '200% auto', animation: 'gradient-shift 8s linear infinite'}}>
                Trasformiamo il tuo business
              </span>
            </h1>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl text-slate-700 dark:text-slate-300 font-medium animate-on-scroll fade-in-up stagger-2 ${isIntersecting ? 'visible' : ''}`}>
              con automazioni AI intelligenti
            </h2>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll fade-in-up stagger-3 ${isIntersecting ? 'visible' : ''} pt-8`}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-700 via-blue-500 to-purple-700 hover:from-blue-800 hover:to-purple-800 shadow-xl shadow-blue-200/30 dark:shadow-none text-lg font-bold rounded-xl backdrop-blur-sm w-full sm:w-auto px-8 py-4"
              >
                Inizia Ora
                <ArrowRight className="ml-2" size={24} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="hover:bg-blue-50 dark:hover:bg-slate-800/70 text-lg font-semibold rounded-xl border-2 border-blue-600/20 dark:border-blue-300/20 backdrop-blur-sm w-full sm:w-auto px-8 py-4"
              >
                Servizi
              </Button>
            </div>
          </div>

          {/* Sezione Perché funzionano */}
          <div className={`animate-on-scroll fade-in-up stagger-4 ${isIntersecting ? 'visible' : ''} space-y-8`}>
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-slate-800 dark:text-slate-200">
              Perché le nostre automazioni funzionano:
            </h3>

            {/* Sistema AI predittivo */}
            <div className="bg-gradient-to-br from-white/80 to-slate-100/70 dark:from-slate-800/90 dark:to-slate-900/80 rounded-2xl p-6 lg:p-8 backdrop-blur-2xl border-2 border-slate-200/60 dark:border-slate-600/50 shadow-xl shadow-slate-400/20 dark:shadow-slate-900/40 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/60 dark:bg-slate-700/50 rounded-lg border border-slate-200/40 dark:border-slate-600/30">
                  <div className="text-lg font-bold text-green-500">+89%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Aumenta l'efficienza</div>
                </div>
                <div className="text-center p-4 bg-white/60 dark:bg-slate-700/50 rounded-lg border border-slate-200/40 dark:border-slate-600/30">
                  <div className="text-lg font-bold text-blue-500">-67%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Riduci i costi operativi</div>
                </div>
                <div className="text-center p-4 bg-white/60 dark:bg-slate-700/50 rounded-lg border border-slate-200/40 dark:border-slate-600/30">
                  <div className="text-lg font-bold text-purple-500">Real-time</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Adattamento continuo</div>
                </div>
              </div>
            </div>

            {/* 3 Pilastri strategici */}
            <div className="bg-gradient-to-br from-white/80 to-slate-100/70 dark:from-slate-800/90 dark:to-slate-900/80 rounded-2xl p-6 lg:p-8 backdrop-blur-2xl border-2 border-slate-200/60 dark:border-slate-600/50 shadow-xl shadow-slate-400/20 dark:shadow-slate-900/40 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                    <Bot className="text-blue-600 dark:text-blue-300" size={32} />
                  </div>
                  <h5 className="text-lg font-bold text-slate-800 dark:text-slate-200">AI Su Misura</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Soluzioni calibrate sui tuoi dati
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                    <Zap className="text-purple-600 dark:text-purple-300" size={32} />
                  </div>
                  <h5 className="text-lg font-bold text-slate-800 dark:text-slate-200">Automazione Continua</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Processi che migliorano nel tempo
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                    <TrendingUp className="text-green-600 dark:text-green-300" size={32} />
                  </div>
                  <h5 className="text-lg font-bold text-slate-800 dark:text-slate-200">Crescita Guidata</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Risultati misurabili in 30 giorni
                  </p>
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
