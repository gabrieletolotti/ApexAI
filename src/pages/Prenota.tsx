import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Shield, CheckCircle2 } from 'lucide-react';
import { sanitizeInput } from '@/lib/security';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Prenota Page - Pagina di contatto con form per consulenza gratuita
 */

const formSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri" }).max(100),
  email: z.string().email({ message: "Email non valida" }).max(255),
  company: z.string().max(100).optional(),
  revenue: z.string().max(50).optional(),
  message: z.string().min(10, { message: "Il messaggio deve contenere almeno 10 caratteri" }).max(1000),
});

type FormData = z.infer<typeof formSchema>;

const Prenota = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      revenue: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        company: data.company ? sanitizeInput(data.company) : '',
        revenue: data.revenue ? sanitizeInput(data.revenue) : '',
        message: sanitizeInput(data.message),
      };

      const whatsappMessage = encodeURIComponent(
        `Nuova richiesta di consulenza:\n\nNome: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\nAzienda: ${sanitizedData.company || 'Non specificata'}\nFatturato: ${sanitizedData.revenue || 'Non specificato'}\n\nMessaggio:\n${sanitizedData.message}`
      );
      
      const whatsappUrl = `https://wa.me/393395078268?text=${whatsappMessage}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Messaggio inviato con successo! ✓",
        description: "Ti risponderemo entro 24 ore. Controlla WhatsApp per continuare la conversazione.",
        duration: 5000,
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Errore nell'invio",
        description: "Si è verificato un errore. Riprova o contattaci direttamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-on-scroll fade-in-up visible">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Richiedi la tua Consulenza AI Gratuita
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scopri come possiamo automatizzare i processi della tua azienda con soluzioni AI personalizzate.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Form */}
            <div className="bg-card/50 backdrop-blur-xl rounded-2xl p-8 border border-border/50 shadow-2xl animate-on-scroll fade-in-up visible">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome e Cognome *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Mario Rossi" 
                            {...field}
                            className="bg-background/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="mario.rossi@azienda.it" 
                            {...field}
                            className="bg-background/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Azienda (opzionale)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Nome dell'azienda" 
                            {...field}
                            className="bg-background/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="revenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fatturato annuo (opzionale)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Es: €500K, €1M+" 
                            {...field}
                            className="bg-background/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrizione progetto *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Raccontaci quali processi vorresti automatizzare e quali obiettivi vuoi raggiungere..."
                            className="min-h-[150px] bg-background/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                  </Button>
                </form>
              </Form>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Risposta entro 24h</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Consulenza senza impegno</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>+50 automazioni testate</span>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-card/50 backdrop-blur-xl rounded-2xl p-8 border border-border/50 shadow-2xl animate-on-scroll fade-in-up stagger-2 visible">
                <h2 className="text-2xl font-bold mb-6">Informazioni di contatto</h2>
                <div className="space-y-6">
                  <a 
                    href="mailto:assistenza@apexai.it"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">assistenza@apexai.it</p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/393395078268"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Telefono / WhatsApp</p>
                      <p className="text-muted-foreground">+39 339 507 8268</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-lg">
                    <div className="p-3 bg-purple-500/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Sede</p>
                      <p className="text-muted-foreground">Bergamo, Italia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 animate-on-scroll fade-in-up stagger-3 visible">
                <h3 className="text-xl font-bold mb-4">Perché scegliere ApexAI?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <strong>Esperienza comprovata:</strong> Oltre 50 automazioni implementate con successo
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <strong>Risposta rapida:</strong> Ti ricontattiamo entro 24 ore lavorative
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <strong>Sicurezza garantita:</strong> I tuoi dati sono protetti e trattati con massima riservatezza
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Prenota;
