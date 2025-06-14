
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
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 animate-[fade-in_0.8s_ease-out_0.2s_both]">
            Inizia il Tuo <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Progetto AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-[fade-in_0.8s_ease-out_0.4s_both]">
            Hai un'idea o un processo che vorresti automatizzare? Contattaci per una consulenza gratuita 
            e scopri come l'AI può trasformare la tua azienda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-[fade-in_0.8s_ease-out_0.6s_both]">
            <CardHeader>
              <CardTitle className="text-2xl">Parlaci del Tuo Progetto</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="animate-[fade-in_0.6s_ease-out_0.8s_both]">
                    <Input
                      name="name"
                      placeholder="Nome e Cognome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/50 hover:bg-white/70 focus:bg-white transition-colors duration-300"
                    />
                  </div>
                  <div className="animate-[fade-in_0.6s_ease-out_1s_both]">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/50 hover:bg-white/70 focus:bg-white transition-colors duration-300"
                    />
                  </div>
                </div>
                <div className="animate-[fade-in_0.6s_ease-out_1.2s_both]">
                  <Input
                    name="company"
                    placeholder="Azienda"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/50 hover:bg-white/70 focus:bg-white transition-colors duration-300"
                  />
                </div>
                <div className="animate-[fade-in_0.6s_ease-out_1.4s_both]">
                  <Textarea
                    name="message"
                    placeholder="Descrivi il tuo progetto o le tue esigenze di automazione..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="bg-white/50 hover:bg-white/70 focus:bg-white transition-colors duration-300"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 animate-[fade-in_0.6s_ease-out_1.6s_both]"
                >
                  Invia Messaggio
                  <Send className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-500 animate-[fade-in_0.8s_ease-out_0.8s_both]">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6 hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors duration-300">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">info@apexai.it</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6 hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-purple-100 p-3 rounded-lg hover:bg-purple-200 transition-colors duration-300">
                    <Phone className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telefono</h3>
                    <p className="text-muted-foreground">+39 02 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-colors duration-300">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Sede</h3>
                    <p className="text-muted-foreground">Milano, Italia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:shadow-xl hover:scale-105 transition-all duration-500 animate-[fade-in_0.8s_ease-out_1s_both]">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Consulenza Gratuita</h3>
                <p className="mb-6 opacity-90">
                  Prenota una chiamata di 30 minuti per discutere come l'AI può migliorare i tuoi processi aziendali.
                </p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
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
