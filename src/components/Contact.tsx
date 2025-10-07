
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { sanitizeInput, isValidEmail, rateLimiter } from '@/lib/security';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    annualRevenue: '',
    message: ''
  });
  const { toast } = useToast();
  const { ref: titleRef, isIntersecting: isTitleVisible } = useIntersectionObserver({ threshold: 0.3 });
  const { ref: contentRef, isIntersecting: isContentVisible } = useIntersectionObserver({ threshold: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!rateLimiter.canSubmit('contact-form')) {
      toast({
        title: "Troppi tentativi",
        description: "Riprova tra qualche minuto.",
        variant: "destructive"
      });
      return;
    }
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campi obbligatori mancanti",
        description: "Per favore, compila tutti i campi obbligatori.",
        variant: "destructive"
      });
      return;
    }
    
    // Validate email format
    if (!isValidEmail(formData.email)) {
      toast({
        title: "Email non valida",
        description: "Per favore, inserisci un indirizzo email valido.",
        variant: "destructive"
      });
      return;
    }
    
    const { name, email, company, annualRevenue, message } = formData;

    const subject = `Richiesta consulenza da ${name} - ${company || 'N/A'}`;
    const body = `Ciao,
    
Vorrei richiedere una consulenza gratuita.

Dettagli:
Nome: ${name}
Email: ${email}
Azienda: ${company || 'N/A'}
Fatturato Annuale: ${annualRevenue || 'Non specificato'}

Messaggio:
${message}

Grazie,
${name}`;

    const mailtoLink = `mailto:info@apexai.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    toast({
      title: "Apriamo il tuo client di posta!",
      description: "Completa l'invio dell'email per contattarci. Ti risponderemo presto."
    });

    setFormData({ name: '', email: '', company: '', annualRevenue: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setFormData({ ...formData, [name]: sanitizedValue });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 dark:from-background dark:via-slate-900/70 dark:to-blue-900/20 relative">
      <div className="absolute left-0 top-60 w-96 h-36 bg-blue-200/15 rounded-full blur-2xl opacity-30 dark:bg-blue-700/10 z-0 hidden md:block" />
      <div className="absolute right-0 bottom-0 w-64 h-32 bg-purple-200/10 rounded-full blur-2xl opacity-20 dark:bg-purple-700/10 z-0 hidden md:block" />
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 animate-on-scroll fade-in-up ${isTitleVisible ? 'visible' : ''} font-sans`}>
            Inizia il Tuo <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Progetto AI</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll fade-in-up stagger-2 ${isTitleVisible ? 'visible' : ''}`}>
            Hai un'idea o un processo che vorresti automatizzare? Contattaci per una consulenza gratuita 
            e scopri come l'AI può trasformare la tua azienda.
          </p>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className={`border-0 ring-1 ring-white/80 dark:ring-slate-700 shadow-xl bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl hover:shadow-2xl hover:scale-105 duration-500 animate-on-scroll fade-in-left ${isContentVisible ? 'visible' : ''}`}>
            <CardHeader>
              <CardTitle className="text-2xl">Richiedi una Consulenza Gratuita</CardTitle>
              <p className="text-muted-foreground pt-2">
                Compila il modulo per prenotare una chiamata di 30 minuti e scoprire come l'AI può trasformare la tua azienda.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      name="name" 
                      placeholder="Nome e Cognome" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 duration-300 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 duration-300 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div>
                  <Input 
                    name="company" 
                    placeholder="Azienda (opzionale)" 
                    value={formData.company} 
                    onChange={handleChange} 
                    className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 duration-300 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Select value={formData.annualRevenue} onValueChange={(value) => handleSelectChange('annualRevenue', value)}>
                    <SelectTrigger className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 duration-300 text-slate-900 dark:text-slate-100 [&[data-placeholder]]:text-slate-500 dark:[&[data-placeholder]]:text-slate-400">
                      <SelectValue placeholder="Fatturato Annuale (opzionale)" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                      <SelectItem value="less-than-100k">Meno di €100.000</SelectItem>
                      <SelectItem value="100k-500k">€100.000 - €500.000</SelectItem>
                      <SelectItem value="500k-1m">€500.000 - €1.000.000</SelectItem>
                      <SelectItem value="1m-5m">€1.000.000 - €5.000.000</SelectItem>
                      <SelectItem value="5m-10m">€5.000.000 - €10.000.000</SelectItem>
                      <SelectItem value="over-10m">Oltre €10.000.000</SelectItem>
                      <SelectItem value="prefer-not-to-say">Preferisco non specificare</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea 
                    name="message" 
                    placeholder="Descrivi il tuo progetto o le tue esigenze di automazione..." 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={6} 
                    required 
                    className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 duration-300 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 duration-300 text-white font-semibold">
                  Invia Messaggio
                  <Send className="ml-2 text-white" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 flex flex-col justify-center">
            <Card className={`border-0 ring-1 ring-white/70 dark:ring-slate-700 shadow-lg bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl hover:shadow-xl hover:scale-105 duration-500 animate-on-scroll fade-in-right ${isContentVisible ? 'visible' : ''}`}>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6 duration-300">
                  <div className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 duration-300">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">info@apexai.it</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6 duration-300">
                  <div className="bg-purple-100 p-3 rounded-lg hover:bg-purple-200 duration-300">
                    <Phone className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telefono</h3>
                    <p className="text-muted-foreground">+39 339 507 6268</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 duration-300">
                  <div className="bg-green-100 p-3 rounded-lg hover:bg-green-200 duration-300">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Sede</h3>
                    <p className="text-muted-foreground">Bergamo, Italia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
