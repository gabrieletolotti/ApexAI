
import { Brain, Cog, Database, MessageSquare, BarChart3, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Intelligenza Artificiale Personalizzata",
      description: "Sviluppiamo modelli AI su misura per le esigenze specifiche della tua azienda, ottimizzando processi e decisioni strategiche.",
      color: "text-blue-600",
      bgColor: "from-blue-100 to-blue-200"
    },
    {
      icon: Cog,
      title: "Automazione Processi Aziendali",
      description: "Trasformiamo i tuoi processi manuali in sistemi automatizzati intelligenti che lavorano 24/7 senza errori.",
      color: "text-purple-600",
      bgColor: "from-purple-100 to-purple-200"
    },
    {
      icon: Database,
      title: "Analisi Dati Avanzata",
      description: "Estraiamo insights preziosi dai tuoi dati utilizzando algoritmi di machine learning e analisi predittiva.",
      color: "text-green-600",
      bgColor: "from-green-100 to-green-200"
    },
    {
      icon: MessageSquare,
      title: "Chatbot e Assistenti Virtuali",
      description: "Implementiamo chatbot intelligenti per migliorare il customer service e automatizzare le interazioni con i clienti.",
      color: "text-orange-600",
      bgColor: "from-orange-100 to-orange-200"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence AI",
      description: "Dashboard intelligenti e report automatici che ti aiutano a prendere decisioni basate su dati in tempo reale.",
      color: "text-indigo-600",
      bgColor: "from-indigo-100 to-indigo-200"
    },
    {
      icon: Shield,
      title: "Sicurezza e Compliance",
      description: "Soluzioni AI per la cybersecurity e il rispetto delle normative, proteggendo la tua azienda dalle minacce.",
      color: "text-red-600",
      bgColor: "from-red-100 to-red-200"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-left">
          <h2 className="text-4xl font-bold mb-4 animate-gradient-text">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-2">
            Offriamo soluzioni complete di automazione AI per trasformare il modo in cui la tua azienda opera, 
            aumentando l'efficienza e riducendo i costi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`card-hover border-0 bg-white/50 backdrop-blur-sm animate-bounce-in group relative overflow-hidden stagger-${index + 1}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-shimmer" />
              <CardHeader className="relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.bgColor} flex items-center justify-center mb-4 animate-float group-hover:animate-rotate-y transition-all duration-300`}>
                  <service.icon className={`${service.color} group-hover:scale-125 transition-transform duration-300`} size={24} />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300 animate-fade-in">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed animate-slide-in-right stagger-2">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
