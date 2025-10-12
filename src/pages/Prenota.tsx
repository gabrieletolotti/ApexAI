import { useState, ChangeEvent, FormEvent } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Mail, Phone, MapPin, Clock, Shield, CheckCircle2 } from 'lucide-react';
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Errore",
        description: "Compila tutti i campi obbligatori",
        variant: "destructive"
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast({
        title: "Errore",
        description: "Inserisci un indirizzo email valido",
        variant: "destructive"
      });
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent('Richiesta Consulenza AI - ApexAI');
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefono: ${formData.phone || 'Non fornito'}\n` +
      `Azienda: ${formData.company || 'Non fornita'}\n` +
      `Fatturato annuo: ${formData.revenue || 'Non specificato'}\n\n` +
      `Messaggio:\n${formData.message}`
    );

    window.location.href = `mailto:info@apexai.it?subject=${subject}&body=${body}`;

    toast({
      title: "Messaggio inviato!",
      description: "Ti risponderemo entro 24 ore",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      revenue: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 mt-4">
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          ← Torna indietro
        </button>
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
                    />
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
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Numero di telefono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+39 333 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Azienda
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome azienda"
                    />
                  </div>

                  <div>
                    <label htmlFor="revenue" className="block text-sm font-medium mb-2">
                      Fatturato annuo (opzionale)
                    </label>
                    <Select value={formData.revenue} onValueChange={handleSelectChange}>
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
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    size="lg"
                  >
                    Invia Messaggio
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