import { useState, ChangeEvent, FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Mail, Phone, MapPin, Clock, Shield, CheckCircle2, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { sanitizeInput, isValidEmail } from '@/lib/security';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

/**
 * Prenota Page - Pagina per richiedere una consulenza AI gratuita
 */
const Prenota = () => {
  const [state, handleFormspreeSubmit] = useForm("xanpdqlz");
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: contentRef, isIntersecting: contentVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: sanitizeInput(value)
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      revenue: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      toast({
        title: "Errore di convalida",
        description: "L'indirizzo email inserito non è valido.",
        variant: "destructive",
      });
      return;
    }
    handleFormspreeSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className="min-h-screen relative">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center p-12 border-0 ring-1 ring-white/80 dark:ring-slate-700 shadow-xl bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <Send className="text-green-600 dark:text-green-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold">Grazie per averci contattato!</h3>
                <p className="text-muted-foreground">
                  Abbiamo ricevuto la tua richiesta di consulenza e ti risponderemo entro 24 ore.
                </p>
                <Button 
                  onClick={() => navigate('/')}
                  className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Torna alla Home
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <button
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 text-blue-600 hover:text-blue-800 transition-colors duration-300 z-50"
      >
        ← Torna indietro
      </button>
      <Header />
      
      <div className="container mx-auto px-4 mt-4">
        {/* <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          ← Torna indietro
        </button> */}
      </div>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div 
            ref={titleRef} 
            className={`text-center mb-16 animate-on-scroll fade-in-up ${titleVisible ? 'visible' : ''}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Richiedi la tua Consulenza AI Gratuita
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Scopri come possiamo automatizzare i processi della tua azienda con soluzioni AI personalizzate.
            </p>
          </div>

          {/* Two Column Layout */}
          <div 
            ref={contentRef}
            className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {/* Left Column - Form */}
            <Card className={`animate-on-scroll fade-in-left ${contentVisible ? 'visible' : ''}`}>
              <CardHeader>
                <CardTitle>Invia la tua richiesta</CardTitle>
                <CardDescription>
                  Compila il modulo e ti contatteremo entro 24 ore
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome e Cognome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Mario Rossi"
                      required
                      disabled={state.submitting}
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="mario.rossi@azienda.it"
                      required
                      disabled={state.submitting}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Numero di telefono *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+39 333 123 4567"
                      required
                      disabled={state.submitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Azienda *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome azienda"
                      required
                      disabled={state.submitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="revenue" className="block text-sm font-medium mb-2">
                      Fatturato annuo (opzionale)
                    </label>
                    <input type="hidden" name="revenue" value={formData.revenue} />
                    <Select value={formData.revenue} onValueChange={handleSelectChange} disabled={state.submitting}>
                      <SelectTrigger id="revenue">
                        <SelectValue placeholder="Seleziona un range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-100k">0 - 100.000€</SelectItem>
                        <SelectItem value="100k-500k">100.000€ - 500.000€</SelectItem>
                        <SelectItem value="500k-1m">500.000€ - 1M€</SelectItem>
                        <SelectItem value="1m-5m">1M€ - 5M€</SelectItem>
                        <SelectItem value="5m+">Oltre 5M€</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Descrizione progetto *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descrivi brevemente le tue esigenze e gli obiettivi che vuoi raggiungere con l'automazione AI..."
                      rows={5}
                      required
                      disabled={state.submitting}
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    size="lg"
                    disabled={state.submitting}
                  >
                    {state.submitting ? 'Invio in corso...' : 'Invia Messaggio'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Right Column - Contact Info & Trust Badges */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className={`animate-on-scroll fade-in-right ${contentVisible ? 'visible' : ''}`}>
                <CardHeader>
                  <CardTitle>Informazioni di contatto</CardTitle>
                  <CardDescription>
                    Puoi contattarci anche direttamente
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a 
                    href="mailto:info@apexai.it"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="bg-blue-600/10 p-2 rounded-lg">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">info@apexai.it</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+393395078268"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="bg-green-600/10 p-2 rounded-lg">
                      <Phone className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Telefono</p>
                      <p className="text-sm text-muted-foreground">+39 339 507 8268</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-lg">
                    <div className="bg-purple-600/10 p-2 rounded-lg">
                      <MapPin className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Sede</p>
                      <p className="text-sm text-muted-foreground">Bergamo, Italia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <Card className={`animate-on-scroll fade-in-right stagger-2 ${contentVisible ? 'visible' : ''}`}>
                <CardHeader>
                  <CardTitle>Perché scegliere ApexAI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600/10 p-2 rounded-lg mt-1">
                      <Clock className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Risposta entro 24h</p>
                      <p className="text-sm text-muted-foreground">
                        Ti ricontatteremo rapidamente per discutere le tue esigenze
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-600/10 p-2 rounded-lg mt-1">
                      <Shield className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Consulenza senza impegno</p>
                      <p className="text-sm text-muted-foreground">
                        Analisi gratuita delle tue necessità, nessun vincolo
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600/10 p-2 rounded-lg mt-1">
                      <CheckCircle2 className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">+50 automazioni testate internamente</p>
                      <p className="text-sm text-muted-foreground">
                        Soluzioni comprovate e ottimizzate per il business
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Prenota;