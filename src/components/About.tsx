
import { Users, MapPin, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-4xl font-bold mb-6 animate-gradient-text">
                Chi Siamo ApexAI
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-in stagger-2">
                ApexAI è un'agenzia italiana specializzata in automazione e intelligenza artificiale. 
                Fondata da un team di esperti con sede nel cuore dell'innovazione tecnologica italiana, 
                aiutiamo le aziende a trasformare i loro processi attraverso soluzioni AI all'avanguardia.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in stagger-3">
                La nostra missione è democratizzare l'accesso all'intelligenza artificiale, 
                rendendo queste tecnologie avanzate accessibili e utili per aziende di ogni dimensione. 
                Combiniamo l'eccellenza italiana nel design e nell'innovazione con le più moderne tecnologie AI.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl card-hover animate-scale-bounce stagger-4 group">
                <div className="text-3xl font-bold text-blue-600 mb-2 animate-glow group-hover:animate-bounce-in">50+</div>
                <div className="text-sm text-muted-foreground">Progetti Completati</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl card-hover animate-scale-bounce stagger-5 group">
                <div className="text-3xl font-bold text-purple-600 mb-2 animate-glow group-hover:animate-bounce-in">98%</div>
                <div className="text-sm text-muted-foreground">Soddisfazione Clienti</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg card-hover animate-shimmer">
              <h3 className="text-2xl font-bold mb-6 text-center animate-gradient-text">Perché Scegliere ApexAI</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 interactive animate-slide-in-left stagger-1 group">
                  <div className="bg-blue-100 p-2 rounded-lg animate-float group-hover:animate-glow transition-all duration-300">
                    <MapPin className="text-blue-600 group-hover:scale-125 transition-transform" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">Presenza Italiana</h4>
                    <p className="text-sm text-muted-foreground">Team locale con deep understanding del mercato italiano e europeo</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 interactive animate-slide-in-left stagger-2 group">
                  <div className="bg-purple-100 p-2 rounded-lg animate-float group-hover:animate-glow transition-all duration-300" style={{animationDelay: '1s'}}>
                    <Users className="text-purple-600 group-hover:scale-125 transition-transform" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-purple-600 transition-colors">Esperti Certificati</h4>
                    <p className="text-sm text-muted-foreground">Team di data scientists e ingegneri AI con certificazioni internazionali</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 interactive animate-slide-in-left stagger-3 group">
                  <div className="bg-green-100 p-2 rounded-lg animate-float group-hover:animate-glow transition-all duration-300" style={{animationDelay: '2s'}}>
                    <Award className="text-green-600 group-hover:scale-125 transition-transform" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-green-600 transition-colors">Soluzioni Personalizzate</h4>
                    <p className="text-sm text-muted-foreground">Ogni progetto è sviluppato su misura per le specifiche esigenze aziendali</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 interactive animate-slide-in-left stagger-4 group">
                  <div className="bg-orange-100 p-2 rounded-lg animate-float group-hover:animate-glow transition-all duration-300" style={{animationDelay: '3s'}}>
                    <Clock className="text-orange-600 group-hover:scale-125 transition-transform" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-orange-600 transition-colors">Supporto Continuo</h4>
                    <p className="text-sm text-muted-foreground">Assistenza 24/7 e aggiornamenti costanti delle soluzioni implementate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
