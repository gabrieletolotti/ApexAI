import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Hero = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const header = document.querySelector('header');
      let headerHeight = 0;
      
      if (header) {
        headerHeight = header.offsetHeight;
        // Su mobile aggiungiamo un piccolo offset extra per compensare eventuali problemi di viewport
        if (window.innerWidth < 768) {
          headerHeight += 10;
        }
      }
      
      const sectionTop = section.offsetTop;
      const scrollPosition = sectionTop - headerHeight;
      
      window.scrollTo({ 
        top: Math.max(0, scrollPosition), 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative z-0 pt-20 px-4 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 dark:from-background dark:via-slate-900/60 dark:to-blue-500/5">
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

      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className={`text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight animate-on-scroll fade-in-up ${isIntersecting ? 'visible' : ''} font-sans`}>
                <span className="animate-gradient bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_3px_10px_rgba(84,108,255,0.25)] dark:from-blue-600 dark:via-purple-700 dark:to-blue-600">
                  Automazione AI
                </span>
                <br />
                per il Futuro
              </h1>
              <p className={`text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-on-scroll fade-in-up stagger-2 ${isIntersecting ? 'visible' : ''}`}>
                Trasformiamo la tua azienda con soluzioni di intelligenza artificiale avanzate. 
                ApexAI è la tua partner italiana per l'automazione intelligente e l'innovazione tecnologica.
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-on-scroll fade-in-up stagger-3 ${isIntersecting ? 'visible' : ''}`}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-700 via-blue-500 to-purple-700 hover:from-blue-800 hover:to-purple-800 shadow-xl shadow-blue-200/30 dark:shadow-none text-base font-semibold rounded-xl backdrop-blur-sm w-full sm:w-auto"
              >
                Inizia Ora
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="hover:bg-blue-50 dark:hover:bg-slate-800/70 text-base font-semibold rounded-xl border-2 border-blue-600/20 dark:border-blue-300/20 backdrop-blur-sm w-full sm:w-auto"
              >
                Scopri di Più
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8 max-w-md mx-auto lg:max-w-none">
              <div className={`text-center animate-on-scroll scale-in stagger-4 ${isIntersecting ? 'visible' : ''} hover:scale-110 duration-300 cursor-pointer`}>
                <div className="bg-blue-100 dark:bg-blue-900/30 w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 hover:bg-blue-200 duration-300 shadow-lg shadow-blue-100/30 dark:shadow-blue-600/10">
                  <Bot className="text-blue-600 dark:text-blue-300" size={20} />
                </div>
                <p className="text-xs lg:text-sm font-medium">AI Avanzata</p>
              </div>
              <div className={`text-center animate-on-scroll scale-in stagger-5 ${isIntersecting ? 'visible' : ''} hover:scale-110 duration-300 cursor-pointer`}>
                <div className="bg-purple-100 dark:bg-purple-900/30 w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 hover:bg-purple-200 duration-300 shadow-lg shadow-purple-100/30 dark:shadow-purple-700/10">
                  <Zap className="text-purple-600 dark:text-purple-300" size={20} />
                </div>
                <p className="text-xs lg:text-sm font-medium">Automazione</p>
              </div>
              <div className={`text-center animate-on-scroll scale-in stagger-6 ${isIntersecting ? 'visible' : ''} hover:scale-110 duration-300 cursor-pointer`}>
                <div className="bg-green-100 dark:bg-green-900/20 w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 hover:bg-green-200 duration-300 shadow-lg shadow-green-100/30 dark:shadow-green-700/10">
                  <TrendingUp className="text-green-600 dark:text-green-300" size={20} />
                </div>
                <p className="text-xs lg:text-sm font-medium">Crescita</p>
              </div>
            </div>
          </div>

          <div className={`relative animate-on-scroll fade-in-right ${isIntersecting ? 'visible' : ''} mt-8 lg:mt-0`}>
            <div className="bg-gradient-to-br from-white/80 to-slate-100/70 dark:from-slate-800/90 dark:to-slate-900/80 rounded-3xl p-6 lg:p-16 backdrop-blur-2xl border-2 border-slate-200/60 dark:border-slate-600/50 hover:scale-105 duration-500 shadow-2xl shadow-slate-400/20 dark:shadow-slate-900/40">
              <div className="bg-white/60 dark:bg-slate-800/60 rounded-2xl p-4 lg:p-12 backdrop-blur-lg border border-slate-200/40 dark:border-slate-700/40">
                <div className="space-y-4 lg:space-y-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 lg:w-6 lg:h-6 bg-green-400 rounded-full"></div>
                    <span className="text-sm lg:text-xl font-medium">Sistema AI Attivo</span>
                  </div>
                  <div className="space-y-3 lg:space-y-6">
                    <div className="bg-white/70 dark:bg-slate-700/50 rounded-lg p-3 lg:p-6 hover:bg-white/90 dark:hover:bg-slate-700/70 duration-300 border border-slate-200/30 dark:border-slate-600/30">
                      <div className="flex justify-between items-center">
                        <span className="text-sm lg:text-lg">Efficienza Processi</span>
                        <span className="text-base lg:text-xl font-bold text-green-400">+89%</span>
                      </div>
                    </div>
                    <div className="bg-white/70 dark:bg-slate-700/50 rounded-lg p-3 lg:p-6 hover:bg-white/90 dark:hover:bg-slate-700/70 duration-300 border border-slate-200/30 dark:border-slate-600/30" style={{ animationDelay: '0.2s' }}>
                      <div className="flex justify-between items-center">
                        <span className="text-sm lg:text-lg">Riduzione Costi</span>
                        <span className="text-base lg:text-xl font-bold text-blue-400">-67%</span>
                      </div>
                    </div>
                    <div className="bg-white/70 dark:bg-slate-700/50 rounded-lg p-3 lg:p-6 hover:bg-white/90 dark:hover:bg-slate-700/70 duration-300 border border-slate-200/30 dark:border-slate-600/30" style={{ animationDelay: '0.4s' }}>
                      <div className="flex justify-between items-center">
                        <span className="text-sm lg:text-lg">Automazione Completa</span>
                        <span className="text-base lg:text-xl font-bold text-purple-400">24/7</span>
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
