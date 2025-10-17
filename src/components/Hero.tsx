import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react';
import LogoLoop from '@/components/LogoLoop';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import DarkVeil from '@/components/ui/DarkVeil';

/**
 * Hero Component - Sezione principale con titolo impattante e CTA
 * Include lazy loading per le immagini e ottimizzazioni SEO
 */
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

  const { ref: heroRef, isIntersecting: heroVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: featuresRef, isIntersecting: featuresVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <>
      {/* Prima sezione - Hero che occupa tutto lo schermo */}
      <section id="home" className="h-screen flex items-start md:items-center justify-center relative z-0 px-4 pt-32 md:pt-0 bg-black dark:bg-black">
        {/* DarkVeil WebGL background - dominante in dark mode */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <DarkVeil 
            hueShift={280}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={1.5}
            scanlineFrequency={0}
            warpAmount={0.15}
            resolutionScale={1}
          />
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          <div ref={heroRef} className="text-center space-y-6">
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-on-scroll fade-in-up ${heroVisible ? 'visible' : ''} font-sans`}>
              <span className="animate-gradient bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_3px_10px_rgba(84,108,255,0.25)] dark:from-blue-600 dark:via-purple-700 dark:to-blue-600" style={{backgroundSize: '200% auto', animation: 'gradient-shift 8s linear infinite'}}>
                Trasformiamo il tuo business
              </span>
            </h1>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl text-slate-700 dark:text-slate-300 font-medium animate-on-scroll fade-in-up stagger-2 ${heroVisible ? 'visible' : ''}`}>
              con automazioni AI intelligenti
            </h2>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll fade-in-up stagger-3 ${heroVisible ? 'visible' : ''} pt-8`}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('cta')}
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
            {/* LogoLoop under CTA */}
            <div className={`absolute bottom-[15vh] left-0 right-0 px-8 md:px-16 animate-on-scroll fade-in-up ${heroVisible ? 'visible' : ''}`}>
              <LogoLoop
                logos={[
                  { src: 'https://cdn.simpleicons.org/meta/ffffff', alt: 'Meta', href: 'https://meta.com' },
                  { src: 'https://cdn.simpleicons.org/github/ffffff', alt: 'GitHub', href: 'https://github.com' },
                  { src: 'https://cdn.simpleicons.org/zapier/ffffff', alt: 'Zapier', href: 'https://zapier.com' },
                  { src: 'https://cdn.simpleicons.org/google/ffffff', alt: 'Google', href: 'https://cloud.google.com' },
                  { src: 'https://cdn.simpleicons.org/ollama/ffffff', alt: 'Ollama', href: 'https://ollama.com' },
                  { src: 'https://cdn.simpleicons.org/n8n/ffffff', alt: 'n8n', href: 'https://n8n.io' },
                  { src: 'https://cdn.simpleicons.org/notion/ffffff', alt: 'Notion', href: 'https://notion.so' },
                  { src: 'https://cdn.simpleicons.org/mailchimp/ffffff', alt: 'Mailchimp', href: 'https://mailchimp.com' },
                  { src: 'https://cdn.simpleicons.org/typeform/ffffff', alt: 'Typeform', href: 'https://typeform.com' },
                  { src: 'https://cdn.simpleicons.org/make/ffffff', alt: 'Make', href: 'https://www.make.com' },
                  { src: 'https://cdn.simpleicons.org/clickup/ffffff', alt: 'ClickUp', href: 'https://clickup.com' },
                  { src: 'https://cdn.simpleicons.org/openai/ffffff', alt: 'OpenAI', href: 'https://openai.com' },
                  { src: 'https://cdn.simpleicons.org/docker/ffffff', alt: 'Docker', href: 'https://www.docker.com' },
                  { src: 'https://cdn.simpleicons.org/stripe/ffffff', alt: 'Stripe', href: 'https://stripe.com' },
                  { src: 'https://cdn.simpleicons.org/airtable/ffffff', alt: 'Airtable', href: 'https://airtable.com' },
                  { src: 'https://cdn.simpleicons.org/googlegemini/ffffff', alt: 'Google Gemini', href: 'https://cloud.google.com/gemini' }
                ]}
                speed={50}
                direction="left"
                logoHeight={60}
                gap={60}
                pauseOnHover
                scaleOnHover
                fadeOut
                ariaLabel="Partner logos"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seconda sezione - Features che appare dal basso */}
      <section className="min-h-screen flex items-center px-4 py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-background dark:to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div ref={featuresRef} className={`space-y-12 transform transition-all duration-1000 ${featuresVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h3 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 dark:text-slate-200 mb-16">
              Perché le nostre automazioni funzionano:
            </h3>

            {/* Sistema AI predittivo */}
            <div className="bg-gradient-to-br from-white/80 to-slate-100/70 dark:from-slate-800/90 dark:to-slate-900/80 rounded-2xl p-6 lg:p-8 backdrop-blur-2xl border-2 border-slate-200/60 dark:border-slate-600/50 shadow-xl shadow-slate-400/20 dark:shadow-slate-900/40 max-w-4xl mx-auto transform transition-all duration-700 delay-200">
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
            <div className="bg-gradient-to-br from-white/80 to-slate-100/70 dark:from-slate-800/90 dark:to-slate-900/80 rounded-2xl p-6 lg:p-8 backdrop-blur-2xl border-2 border-slate-200/60 dark:border-slate-600/50 shadow-xl shadow-slate-400/20 dark:shadow-slate-900/40 max-w-4xl mx-auto transform transition-all duration-700 delay-400">
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
      </section>
    </>
  );
};

export default Hero;
