
import { Users, MapPin, Award, Clock } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
/**
 * About Component - Chi siamo con value proposition chiara
 * Focus su credibilità, risultati e supporto locale
 */
const About = () => {
  const {
    ref: contentRef,
    isIntersecting: isContentVisible
  } = useIntersectionObserver({
    threshold: 0.2
  });
  const {
    ref: featuresRef,
    isIntersecting: areFeaturesVisible
  } = useIntersectionObserver({
    threshold: 0.2
  });
  return <section id="about" className="py-20 relative dv-surface-soft">
      {/* Glass blobs for extra flair */}
  <div className="absolute right-16 top-32 w-96 h-60 rounded-full bg-purple-200/10 blur-2xl opacity-25 dark:bg-purple-800/10 z-0 hidden md:block" />
  <div className="absolute left-10 bottom-8 w-80 h-28 bg-blue-200/15 rounded-full blur-2xl opacity-20 dark:bg-blue-800/15 z-0 hidden md:block" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className={`text-4xl font-bold mb-6 animate-on-scroll fade-in-left ${isContentVisible ? 'visible' : ''} font-sans`}>
                Chi Siamo <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-purple-600 bg-clip-text text-transparent">ApexAI</span>
              </h2>
              <p className={`text-lg text-muted-foreground leading-relaxed mb-6 animate-on-scroll fade-in-left stagger-2 ${isContentVisible ? 'visible' : ''}`}>
                ApexAI è l'agenzia italiana di riferimento per l'automazione intelligente e l'AI applicata al business. 
                Fondata da data scientists ed esperti di automazione, aiutiamo aziende italiane ed europee a 
                trasformare processi complessi in sistemi automatizzati che generano risultati misurabili.
              </p>
              <p className={`text-lg text-muted-foreground leading-relaxed animate-on-scroll fade-in-left stagger-3 ${isContentVisible ? 'visible' : ''}`}>
                Crediamo che ogni azienda, indipendentemente dalle dimensioni, debba poter accedere a tecnologie 
                AI avanzate. Per questo creiamo soluzioni personalizzate e scalabili che si adattano alle tue 
                esigenze specifiche, garantendo ROI tangibile e supporto continuo.
              </p>
            </div>
          </div>

          <div ref={featuresRef} className="space-y-6">
            <div className={`dv-panel p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-on-scroll fade-in-right ${areFeaturesVisible ? 'visible' : ''}`}>
              <h3 className="text-2xl font-bold mb-6 text-center">Perché Scegliere ApexAI</h3>
              
              <div className="space-y-6">
                <div className={`flex items-start space-x-4 animate-on-scroll fade-in-right stagger-2 ${areFeaturesVisible ? 'visible' : ''} hover:transform hover:translate-x-2 transition-transform duration-300`}>
                  <div className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200 transition-colors duration-300">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">100% Made in Italy</h4>
                    <p className="text-sm text-muted-foreground">Team locale con conoscenza approfondita del mercato italiano ed europeo. Supporto in lingua italiana.</p>
                  </div>
                </div>

                <div className={`flex items-start space-x-4 animate-on-scroll fade-in-right stagger-3 ${areFeaturesVisible ? 'visible' : ''} hover:transform hover:translate-x-2 transition-transform duration-300`}>
                  <div className="bg-purple-100 p-2 rounded-lg hover:bg-purple-200 transition-colors duration-300">
                    <Users className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Esperti Certificati</h4>
                    <p className="text-sm text-muted-foreground">Data scientists e ingegneri AI con certificazioni internazionali e comprovata esperienza.</p>
                  </div>
                </div>

                <div className={`flex items-start space-x-4 animate-on-scroll fade-in-right stagger-4 ${areFeaturesVisible ? 'visible' : ''} hover:transform hover:translate-x-2 transition-transform duration-300`}>
                  <div className="bg-green-100 p-2 rounded-lg hover:bg-green-200 transition-colors duration-300">
                    <Award className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">ROI Garantito</h4>
                    <p className="text-sm text-muted-foreground">Soluzioni progettate per generare risultati misurabili e ritorno sull'investimento tangibile.</p>
                  </div>
                </div>

                <div className={`flex items-start space-x-4 animate-on-scroll fade-in-right stagger-5 ${areFeaturesVisible ? 'visible' : ''} hover:transform hover:translate-x-2 transition-transform duration-300`}>
                  <div className="bg-orange-100 p-2 rounded-lg hover:bg-orange-200 transition-colors duration-300">
                    <Clock className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Supporto H24</h4>
                    <p className="text-sm text-muted-foreground">Assistenza tecnica continua e manutenzione proattiva per garantire performance ottimali.</p>
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
