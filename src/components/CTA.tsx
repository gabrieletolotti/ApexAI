/* eslint-disable react-refresh/only-export-components */
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

/**
 * CTA Section - Call to action per convertire i visitatori in lead
 * Posizionata tra About e Contact per massimizzare le conversioni
 */
const CTA = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const header = document.querySelector('header');
      const headerHeight = header?.getBoundingClientRect().height || 80;
      const sectionTop = contactSection.offsetTop;
      window.scrollTo({ 
        top: sectionTop - headerHeight, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section 
      id="cta" 
      ref={ref}
      className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center space-y-8 animate-on-scroll fade-in-up ${isIntersecting ? 'visible' : ''}`}
        >
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Pronto a Trasformare la Tua Azienda con l'AI?
          </h2>
          
          {/* Supporting text */}
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Scopri come l'automazione intelligente può far crescere il tuo business. 
            Inizia oggi con una consulenza gratuita e personalizzata.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              onClick={() => {
                window.location.href = '/prenota';
              }}
              className="bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl group text-lg px-8 py-6"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Prenota Consulenza Gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className={`flex flex-wrap justify-center gap-8 pt-8 text-blue-100 animate-on-scroll fade-in-up stagger-2 ${isIntersecting ? 'visible' : ''}`}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Risposta in 24 ore</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Consulenza senza impegno</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Soluzioni su misura</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;