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

/**
 * Services Component - Showcase dei servizi con focus sui risultati
 * Testi ottimizzati per conversione e orientati ai benefici misurabili
 */
const Services = () => {
  const { ref: titleRef, isIntersecting: isTitleVisible } = useIntersectionObserver({ threshold: 0.25 });
  const { ref: subtitleRef, isIntersecting: isSubtitleVisible } = useIntersectionObserver({ threshold: 0.22 });
  const isMobile = useIsMobile();

  // Definizione servizi con testi orientati ai risultati
  const services = [
    {
      icon: Brain,
      title: "Intelligenza Artificiale Personalizzata",
      description: "Riduci i costi operativi fino al 40% con modelli AI su misura che automatizzano decisioni complesse e ottimizzano i tuoi processi aziendali.",
      color: "text-blue-600"
    },
    {
      icon: Cog,
      title: "Automazione Processi Aziendali",
      description: "Elimina gli errori manuali e risparmia fino a 20 ore settimanali automatizzando task ripetitivi con sistemi intelligenti che lavorano 24/7.",
      color: "text-purple-600"
    },
    {
      icon: Database,
      title: "Analisi Dati Avanzata",
      description: "Prendi decisioni strategiche basate su previsioni accurate grazie a machine learning e analisi predittiva dei tuoi dati.",
      color: "text-green-600"
    },
    {
      icon: MessageSquare,
      title: "Chatbot e Assistenti Virtuali",
      description: "Aumenta la soddisfazione clienti del 35% con assistenti AI che rispondono istantaneamente h24, riducendo i tempi di attesa.",
      color: "text-orange-600"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence AI",
      description: "Monitora le performance aziendali in tempo reale con dashboard intelligenti che identificano opportunità e criticità automaticamente.",
      color: "text-indigo-600"
    },
    {
      icon: Shield,
      title: "Sicurezza e Compliance",
      description: "Proteggi la tua azienda con sistemi AI che rilevano minacce in tempo reale e garantiscono conformità normativa automatica.",
      color: "text-red-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50/50 via-slate-100/50 to-blue-50/50 dark:from-background/50 dark:via-slate-900/40 dark:to-blue-500/50 relative">
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
            Soluzioni complete di automazione AI che aumentano l'efficienza fino al 40%, 
            riducono i costi operativi e accelerano la crescita del tuo business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

// Child component to respect Rules of Hooks for per-card animations
function ServiceCard({
  service,
  index,
}: {
  service: {
    icon: any;
    title: string;
    description: string;
    color: string;
  };
  index: number;
}) {
  const { ref: cardRef, isIntersecting: isCardVisible } = useIntersectionObserver({ threshold: 0.13 });
  const animationClass = 'slide-in-up';
  const Icon = service.icon;
  return (
    <div
      ref={cardRef}
      className={`
        animate-on-scroll ${animationClass} stagger-${Math.min(6, index + 1)}
        ${isCardVisible ? 'visible' : ''}
        h-full
      `}
      style={{ transitionDelay: isCardVisible ? `${0.08 * index + 0.12}s` : '0s' }}
    >
      <Card
        className={`
          h-full flex flex-col
          hover:shadow-2xl transition-all duration-500 hover:scale-105
          border border-white/30 dark:border-slate-700/30 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl
          group shadow-lg shadow-black/5
        `}
      >
        <CardHeader>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100/80 to-purple-100/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 dark:from-blue-900/20 dark:to-purple-900/10 shadow-md shadow-blue-100/10">
            <Icon className={`${service.color} group-hover:scale-110 transition-transform duration-300`} size={28} />
          </div>
          <CardTitle className="text-xl font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
