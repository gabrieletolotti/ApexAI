
import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Hero = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const viewportHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;
      
      // Calcola la posizione per centrare la sezione
      const sectionTop = section.offsetTop;
      const centerOffset = (viewportHeight - sectionHeight) / 2;
      const scrollPosition = sectionTop - headerHeight - centerOffset;
      
      window.scrollTo({ 
        top: Math.max(0, scrollPosition), 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative z-0 pt-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 dark:from-background dark:via-slate-900/60 dark:to-blue-500/5">
      {/* Dynamic animated background elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Animated floating elements */}
        <div className="hero-bg-element-1 absolute w-[25vw] h-[20vh] rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-800/40" style={{left: '10%', top: '20%'}} />
        <div className="hero-bg-element-2 absolute w-[30vw] h-[25vh] rounded-full bg-purple-200/25 blur-3xl dark:bg-purple-800/35" style={{right: '15%', bottom: '30%'}} />
        <div className="hero-bg-element-3 absolute w-[20vw] h-[15vh] rounded-full bg-blue-100/35 blur-2xl dark:bg-blue-900/45" style={{left: '30%', top: '60%'}} />
        <div className="hero-bg-element-4 absolute w-[35vw] h-[30vh] rounded-full bg-purple-100/20 blur-3xl dark:bg-purple-900/30" style={{right: '20%', top: '10%'}} />
        <div className="hero-bg-element-5 absolute w-[15vw] h-[12vh] rounded-full bg-blue-300/40 blur-2xl dark:bg-blue-700/50" style={{left: '60%', bottom: '40%'}} />
        
        {/* Additional smaller floating elements */}
        <div className="hero-bg-element-1 absolute w-[10vw] h-[8vh] rounded-full bg-indigo-200/30 blur-xl dark:bg-indigo-800/40" style={{left: '5%', bottom: '20%', animationDelay: '-8s'}} />
        <div className="hero-bg-element-3 absolute w-[12vw] h-[10vh] rounded-full bg-cyan-200/25 blur-xl dark:bg-cyan-800/35" style={{right: '10%', top: '40%', animationDelay: '-12s'}} />
        <div className="hero-bg-element-5 absolute w-[8vw] h-[6vh] rounded-full bg-pink-200/35 blur-lg dark:bg-pink-800/45" style={{left: '70%', top: '25%', animationDelay: '-18s'}} />
      </div>

      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className={`text-5xl lg:text-6xl font-bold leading-tight animate-on-scroll fade-in-up ${isIntersecting ? 'visible' : ''} font-sans`}>
                <span className="animate-gradient bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_3px_10px_rgba(84,108,255,0.25)] dark:from-blue-600 dark:via-purple-700 dark:to-blue-600">
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
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-700 via-blue-500 to-purple-700 hover:from-blue-800 hover:to-purple-800 shadow-xl shadow-blue-200/30 dark:shadow-none text-base font-semibold rounded-xl backdrop-blur-sm"
              >
                Inizia Ora
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="hover:bg-blue-50 dark:hover:bg-slate-800/70 text-base font-semibold rounded-xl border-2 border-blue-600/20 dark:border-blue-300/20 backdrop-blur-sm"
              >
                Scopri di Più
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className={`text-center animate-on-scroll scale-in stagger-4 ${isIntersecting ? 'visible' : ''} hover:scale-110 duration-300 cursor-pointer`}>
                <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 hover:bg-blue-200 duration-300 shadow-lg shadow-blue-100/30 dark:shadow-blue-600/10">
                  <Bot className="text-blue-600 dark:text-blue-300" size={24} />
                </div>
                <p className="text-sm font-medium">AI Avanzata</p>
              </div>
              <div className={`text-center animate-on-scroll scale-in stagger-5 ${isIntersecting ? 'visible' : ''} hover:scale-110 duration-300 cursor-pointer`}>
                <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 hover:bg-purple-200 duration-300 shadow-lg shadow-purple-100/30 dark:shadow-purple-700/10">
                  <Zap className="text-purple-600 dark:text-purple-300" size={24} />
                </div>
                <p className="text-sm font-medium">Automazione</p>
              </div>
              <div className={`text-center animate-on-scroll scale-in stagger-6 ${isIntersecting ? 'visible' : ''} hover:scale-110 duration-300 cursor-pointer`}>
                <div className="bg-green-100 dark:bg-green-900/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 hover:bg-green-200 duration-300 shadow-lg shadow-green-100/30 dark:shadow-green-700/10">
                  <TrendingUp className="text-green-600 dark:text-green-300" size={24} />
                </div>
                <p className="text-sm font-medium">Crescita</p>
              </div>
            </div>
          </div>

          <div className={`relative animate-on-scroll fade-in-right ${isIntersecting ? 'visible' : ''}`}>
            <div className="bg-gradient-to-br from-white/80 to-slate-100/70 dark:from-slate-800/90 dark:to-slate-900/80 rounded-3xl p-16 backdrop-blur-2xl border-2 border-slate-200/60 dark:border-slate-600/50 hover:scale-105 duration-500 shadow-2xl shadow-slate-400/20 dark:shadow-slate-900/40">
              <div className="bg-white/60 dark:bg-slate-800/60 rounded-2xl p-12 backdrop-blur-lg border border-slate-200/40 dark:border-slate-700/40">
                <div className="space-y-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                    <span className="text-xl font-medium">Sistema AI Attivo</span>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white/70 dark:bg-slate-700/50 rounded-lg p-6 hover:bg-white/90 dark:hover:bg-slate-700/70 duration-300 border border-slate-200/30 dark:border-slate-600/30">
                      <div className="flex justify-between items-center">
                        <span className="text-lg">Efficienza Processi</span>
                        <span className="text-xl font-bold text-green-400">+89%</span>
                      </div>
                    </div>
                    <div className="bg-white/70 dark:bg-slate-700/50 rounded-lg p-6 hover:bg-white/90 dark:hover:bg-slate-700/70 duration-300 border border-slate-200/30 dark:border-slate-600/30" style={{ animationDelay: '0.2s' }}>
                      <div className="flex justify-between items-center">
                        <span className="text-lg">Riduzione Costi</span>
                        <span className="text-xl font-bold text-blue-400">-67%</span>
                      </div>
                    </div>
                    <div className="bg-white/70 dark:bg-slate-700/50 rounded-lg p-6 hover:bg-white/90 dark:hover:bg-slate-700/70 duration-300 border border-slate-200/30 dark:border-slate-600/30" style={{ animationDelay: '0.4s' }}>
                      <div className="flex justify-between items-center">
                        <span className="text-lg">Automazione Completa</span>
                        <span className="text-xl font-bold text-purple-400">24/7</span>
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
