import { Users, MapPin, Award, Clock } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
const About = () => {
  const {
    ref: contentRef,
    isIntersecting: isContentVisible
  } = useIntersectionObserver({
    threshold: 0.2
  });
  const {
    ref: statsRef,
    isIntersecting: areStatsVisible
  } = useIntersectionObserver({
    threshold: 0.3
  });
  const {
    ref: featuresRef,
    isIntersecting: areFeaturesVisible
  } = useIntersectionObserver({
    threshold: 0.2
  });
  return <section id="about" className="py-20 bg-gradient-to-br from-background via-white/70 to-purple-100/30 dark:from-background dark:via-slate-900/70 dark:to-purple-700/10 relative">
      {/* Glass blobs for extra flair */}
      <div className="absolute right-16 top-32 w-96 h-60 rounded-full bg-purple-200/15 blur-2xl opacity-30 dark:bg-purple-800/10 z-0 hidden md:block" />
      <div className="absolute left-10 bottom-8 w-80 h-28 bg-blue-200/20 rounded-full blur-2xl opacity-25 dark:bg-blue-800/20 z-0 hidden md:block" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className={`text-4xl font-bold mb-6 animate-on-scroll fade-in-left ${isContentVisible ? 'visible' : ''} font-sans`}>
                Chi Siamo <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-purple-600 bg-clip-text text-transparent">ApexAI</span>
              </h2>
              <p className={`text-lg text-muted-foreground leading-relaxed mb-6 animate-on-scroll fade-in-left stagger-2 ${isContentVisible ? 'visible' : ''}`}>
                ApexAI è un'agenzia italiana specializzata in automazione e intelligenza artificiale. 
                Fondata da un team di esperti con sede nel cuore dell'innovazione tecnologica italiana, 
                aiutiamo le aziende a trasformare i loro processi attraverso soluzioni AI all'avanguardia.
              </p>
              <p className={`text-lg text-muted-foreground leading-relaxed animate-on-scroll fade-in-left stagger-3 ${isContentVisible ? 'visible' : ''}`}>
                La nostra missione è democratizzare l'accesso all'intelligenza artificiale, 
                rendendo queste tecnologie avanzate accessibili e utili per aziende di ogni dimensione. 
                Combiniamo l'eccellenza italiana nel design e nell'innovazione con le più moderne tecnologie AI.
              </p>
            </div>

            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              <div className="">
                <div className="text-3xl font-bold text-blue-600 mb-2 dark:text-blue-400">50+</div>
                <div className="text-sm text-muted-foreground">Progetti Completati</div>
              </div>
              <div className="">
                <div className="text-3xl font-bold text-purple-600 mb-2 dark:text-purple-400">98%</div>
                <div className="text-sm text-muted-foreground">Soddisfazione Clienti</div>
              </div>
            </div>
          </div>

          <div ref={featuresRef} className="space-y-6">
            <div className={`bg-gradient-to-br from-white/70 to-blue-50/70 dark:from-slate-800/60 dark:to-blue-900/60 p-8 rounded-3xl shadow-2xl hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-on-scroll fade-in-right ${areFeaturesVisible ? 'visible' : ''} border border-white/60 dark:border-slate-700`}>
              <h3 className="text-2xl font-bold mb-6 text-center">Perché Scegliere ApexAI</h3>
              
              <div className="space-y-6">
                <div className={`flex items-start space-x-4 animate-on-scroll fade-in-right stagger-2 ${areFeaturesVisible ? 'visible' : ''} hover:transform hover:translate-x-2 transition-transform duration-300`}>
                  <div className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200 transition-colors duration-300">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Presenza Italiana</h4>
                    <p className="text-sm text-muted-foreground">Team locale con deep understanding del mercato italiano e europeo</p>
                  </div>
                </div>

                <div className={`flex items-start space-x-4 animate-on-scroll fade-in-right stagger-3 ${areFeaturesVisible ? 'visible' : ''} hover:transform hover:translate-x-2 transition-transform duration-300`}>
                  <div className="bg-purple-100 p-2 rounded-lg hover:bg-purple-200 transition-colors duration-300">
                    <Users className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Esperti Certificati</h4>
                    <p className="text-sm text-muted-foreground">Team di data scientists e ingegneri AI con certificazioni internazionali</p>
                  </div>
                </div>

                <div className={`flex items-start space-x-4 animate-on-scroll fade-in-right stagger-4 ${areFeaturesVisible ? 'visible' : ''} hover:transform hover:translate-x-2 transition-transform duration-300`}>
                  <div className="bg-green-100 p-2 rounded-lg hover:bg-green-200 transition-colors duration-300">
                    <Award className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Soluzioni Personalizzate</h4>
                    <p className="text-sm text-muted-foreground">Ogni progetto è sviluppato su misura per le specifiche esigenze aziendali</p>
                  </div>
                </div>

                <div className={`flex items-start space-x-4 animate-on-scroll fade-in-right stagger-5 ${areFeaturesVisible ? 'visible' : ''} hover:transform hover:translate-x-2 transition-transform duration-300`}>
                  <div className="bg-orange-100 p-2 rounded-lg hover:bg-orange-200 transition-colors duration-300">
                    <Clock className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Supporto Continuo</h4>
                    <p className="text-sm text-muted-foreground">Assistenza 24/7 e aggiornamenti costanti delle soluzioni implementate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;