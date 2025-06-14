
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Messaggio Inviato!",
      description: "Ti contatteremo presto per discutere del tuo progetto AI.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-left">
          <h2 className="text-4xl font-bold mb-4 animate-gradient-text">
            Inizia il Tuo Progetto AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-2">
            Hai un'idea o un processo che vorresti automatizzare? Contattaci per una consulenza gratuita 
            e scopri come l'AI può trasformare la tua azienda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm card-hover animate-slide-in-left animate-shimmer">
            <CardHeader>
              <CardTitle className="text-2xl animate-gradient-text">Parlaci del Tuo Progetto</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="animate-scale-bounce stagger-1">
                    <Input
                      name="name"
                      placeholder="Nome e Cognome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/50 hover:bg-white/70 focus:bg-white transition-all duration-300 interactive"
                    />
                  </div>
                  <div className="animate-scale-bounce stagger-2">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/50 hover:bg-white/70 focus:bg-white transition-all duration-300 interactive"
                    />
                  </div>
                </div>
                <div className="animate-scale-bounce stagger-3">
                  <Input
                    name="company"
                    placeholder="Azienda"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/50 hover:bg-white/70 focus:bg-white transition-all duration-300 interactive"
                  />
                </div>
                <div className="animate-scale-bounce stagger-4">
                  <Textarea
                    name="message"
                    placeholder="Descrivi il tuo progetto o le tue esigenze di automazione..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="bg-white/50 hover:bg-white/70 focus:bg-white transition-all duration-300 interactive"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-primary bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 card-hover animate-bounce-in stagger-5 animate-shimmer"
                >
                  Invia Messaggio
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 animate-slide-in-right">
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm card-hover animate-scale-bounce stagger-1 animate-shimmer">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6 interactive group animate-slide-in-left stagger-1">
                  <div className="bg-blue-100 p-3 rounded-lg animate-float group-hover:animate-glow transition-all duration-300">
                    <Mail className="text-blue-600 group-hover:scale-125 transition-transform" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">Email</h3>
                    <p className="text-muted-foreground">info@apexai.it</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6 interactive group animate-slide-in-left stagger-2">
                  <div className="bg-purple-100 p-3 rounded-lg animate-float group-hover:animate-glow transition-all duration-300" style={{animationDelay: '1s'}}>
                    <Phone className="text-purple-600 group-hover:scale-125 transition-transform" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-purple-600 transition-colors">Telefono</h3>
                    <p className="text-muted-foreground">+39 02 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 interactive group animate-slide-in-left stagger-3">
                  <div className="bg-green-100 p-3 rounded-lg animate-float group-hover:animate-glow transition-all duration-300" style={{animationDelay: '2s'}}>
                    <MapPin className="text-green-600 group-hover:scale-125 transition-transform" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-green-600 transition-colors">Sede</h3>
                    <p className="text-muted-foreground">Milano, Italia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white card-hover animate-scale-bounce stagger-2 animate-gradient group">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 group-hover:animate-bounce-in">Consulenza Gratuita</h3>
                <p className="mb-6 opacity-90 animate-fade-in stagger-2">
                  Prenota una chiamata di 30 minuti per discutere come l'AI può migliorare i tuoi processi aziendali.
                </p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 card-hover animate-shimmer btn-primary">
                  Prenota Ora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
