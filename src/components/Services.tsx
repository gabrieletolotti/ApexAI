
import { Brain, Cog, Database, MessageSquare, BarChart3, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import React from 'react';

// Responsive utility: restituisce true se mobile
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < breakpoint);
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

const Services = () => {
  const { ref: titleRef, isIntersecting: isTitleVisible } = useIntersectionObserver({ threshold: 0.25 });
  const { ref: subtitleRef, isIntersecting: isSubtitleVisible } = useIntersectionObserver({ threshold: 0.22 });
  const isMobile = useIsMobile();

  const services = [
    {
      icon: Brain,
      title: "Intelligenza Artificiale Personalizzata",
      description: "Sviluppiamo modelli AI su misura per le esigenze specifiche della tua azienda, ottimizzando processi e decisioni strategiche.",
      color: "text-blue-600"
    },
    {
      icon: Cog,
      title: "Automazione Processi Aziendali",
      description: "Trasformiamo i tuoi processi manuali in sistemi automatizzati intelligenti che lavorano 24/7 senza errori.",
      color: "text-purple-600"
    },
    {
      icon: Database,
      title: "Analisi Dati Avanzata",
      description: "Estraiamo insights preziosi dai tuoi dati utilizzando algoritmi di machine learning e analisi predittiva.",
      color: "text-green-600"
    },
    {
      icon: MessageSquare,
      title: "Chatbot e Assistenti Virtuali",
      description: "Implementiamo chatbot intelligenti per migliorare il customer service e automatizzare le interazioni con i clienti.",
      color: "text-orange-600"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence AI",
      description: "Dashboard intelligenti e report automatici che ti aiutano a prendere decisioni basate su dati in tempo reale.",
      color: "text-indigo-600"
    },
    {
      icon: Shield,
      title: "Sicurezza e Compliance",
      description: "Soluzioni AI per la cybersecurity e il rispetto delle normative, proteggendo la tua azienda dalle minacce.",
      color: "text-red-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background via-white/60 to-blue-100/30 dark:from-background dark:via-slate-900/70 dark:to-blue-500/10 relative">
      {/* Glassy backdrop shapes for modern look */}
      <div className="absolute left-8 top-32 w-96 h-60 rounded-full bg-blue-200/25 blur-2xl opacity-30 dark:bg-blue-800/10 z-0 hidden md:block" />
      <div className="absolute right-6 bottom-0 w-64 h-40 bg-purple-200/20 rounded-full blur-2xl opacity-40 dark:bg-purple-900/20 z-0 hidden md:block" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className={`
              text-4xl font-bold mb-4 font-sans
              animate-on-scroll fade-in-up 
              ${isTitleVisible ? 'visible' : ''}
            `}
          >
            I Nostri{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 bg-clip-text text-transparent">Servizi</span>
          </h2>

          <p
            ref={subtitleRef}
            className={`
              text-xl text-muted-foreground max-w-3xl mx-auto
              animate-on-scroll fade-in-up stagger-2
              ${isSubtitleVisible ? 'visible' : ''}
            `}
          >
            Offriamo soluzioni complete di automazione AI per trasformare il modo in cui la tua azienda opera, 
            aumentando l'efficienza e riducendo i costi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { ref: cardRef, isIntersecting: isCardVisible } = useIntersectionObserver({ threshold: 0.13 });
            const animationClass = "slide-in-up";
            return (
              <div
                ref={cardRef}
                key={index}
                className={`
                  animate-on-scroll ${animationClass} stagger-${Math.min(6, index + 1)}
                  ${isCardVisible ? "visible" : ""}
                  h-full
                `}
                style={{
                  transitionDelay: isCardVisible ? `${0.08 * index + 0.12}s` : '0s'
                }}
              >
                <Card
                  className={`
                    h-full flex flex-col
                    ring-1 ring-white/70 dark:ring-slate-500/50 hover:shadow-2xl transition-all duration-500 hover:scale-105
                    border-0 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl hover:bg-white/80 hover:dark:bg-slate-900/80 group
                  `}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100/80 to-purple-100/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 dark:from-blue-900/20 dark:to-purple-900/10 shadow-md shadow-blue-100/10">
                      <service.icon className={`${service.color} group-hover:scale-110 transition-transform duration-300`} size={28} />
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
