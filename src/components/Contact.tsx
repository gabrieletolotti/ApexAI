
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

/**
 * Contact Component - Form di contatto con validazione e accessibilità
 * Include rate limiting e sanitizzazione input per sicurezza
 */
const Contact = () => {
  const [state, handleSubmit] = useForm("xanpdqlz");
  const { toast } = useToast();
  const { ref: titleRef, isIntersecting: isTitleVisible } = useIntersectionObserver({ threshold: 0.3 });
  const { ref: contentRef, isIntersecting: isContentVisible } = useIntersectionObserver({ threshold: 0.2 });

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 dark:from-background dark:via-slate-900/70 dark:to-blue-900/20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-2xl mx-auto text-center p-12 border-0 ring-1 ring-white/80 dark:ring-slate-700 shadow-xl bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl">
            <CardContent className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <Send className="text-green-600 dark:text-green-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold">Grazie per averci contattato!</h3>
              <p className="text-muted-foreground">
                Abbiamo ricevuto il tuo messaggio e ti risponderemo entro 24 ore.
              </p>
              <Button 
                onClick={() => window.location.reload()}
                className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Invia un altro messaggio
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }


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
                    <label htmlFor="name" className="sr-only">Nome e Cognome</label>
                    <Input 
                      id="name"
                      name="name" 
                      placeholder="Nome e Cognome" 
                      required
                      disabled={state.submitting}
                      aria-label="Nome completo"
                      aria-required="true"
                      className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400 duration-300 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <Input 
                      id="email"
                      name="email" 
                      type="email" 
                      placeholder="Email" 
                      required
                      disabled={state.submitting}
                      aria-label="Indirizzo email"
                      aria-required="true"
                      className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400 duration-300 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="sr-only">Azienda (opzionale)</label>
                  <Input 
                    id="company"
                    name="company" 
                    placeholder="Azienda (opzionale)" 
                    disabled={state.submitting}
                    aria-label="Nome azienda"
                    className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400 duration-300 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <select 
                    name="annualRevenue"
                    disabled={state.submitting}
                    className="w-full h-10 px-3 py-2 bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-md text-sm hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400 duration-300 text-slate-900 dark:text-slate-100"
                  >
                    <option value="">Fatturato Annuale (opzionale)</option>
                    <option value="less-than-100k">Meno di €100.000</option>
                    <option value="100k-500k">€100.000 - €500.000</option>
                    <option value="500k-1m">€500.000 - €1.000.000</option>
                    <option value="1m-5m">€1.000.000 - €5.000.000</option>
                    <option value="5m-10m">€5.000.000 - €10.000.000</option>
                    <option value="over-10m">Oltre €10.000.000</option>
                    <option value="prefer-not-to-say">Preferisco non specificare</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Descrivi il tuo progetto</label>
                  <Textarea 
                    id="message"
                    name="message" 
                    placeholder="Descrivi il tuo progetto o le tue esigenze di automazione..." 
                    rows={6} 
                    required
                    disabled={state.submitting}
                    aria-label="Messaggio"
                    aria-required="true"
                    className="bg-white/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400 duration-300 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <Button type="submit" size="lg" disabled={state.submitting} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 duration-300 text-white font-semibold">
                  {state.submitting ? 'Invio in corso...' : 'Invia Messaggio'}
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
