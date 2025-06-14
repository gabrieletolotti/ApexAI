
import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-background to-blue-50/20 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-[fade-in_0.8s_ease-out_0.2s_both]">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Automazione AI
                </span>
                <br />
                per il Futuro
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl animate-[fade-in_0.8s_ease-out_0.4s_both]">
                Trasformiamo la tua azienda con soluzioni di intelligenza artificiale avanzate. 
                ApexAI è la tua partner italiana per l'automazione intelligente e l'innovazione tecnologica.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-[fade-in_0.8s_ease-out_0.6s_both]">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                Inizia Ora
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transform hover:scale-105 transition-all duration-300">
                Scopri di Più
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center animate-[fade-in_0.8s_ease-out_0.8s_both] hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 hover:bg-blue-200 transition-colors duration-300">
                  <Bot className="text-blue-600" size={24} />
                </div>
                <p className="text-sm font-medium">AI Avanzata</p>
              </div>
              <div className="text-center animate-[fade-in_0.8s_ease-out_1s_both] hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="bg-purple-100 dark:bg-purple-900/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 hover:bg-purple-200 transition-colors duration-300">
                  <Zap className="text-purple-600" size={24} />
                </div>
                <p className="text-sm font-medium">Automazione</p>
              </div>
              <div className="text-center animate-[fade-in_0.8s_ease-out_1.2s_both] hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="bg-green-100 dark:bg-green-900/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 hover:bg-green-200 transition-colors duration-300">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <p className="text-sm font-medium">Crescita</p>
              </div>
            </div>
          </div>

          <div className="relative animate-[fade-in_0.8s_ease-out_0.4s_both]">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-500">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 animate-[fade-in_0.6s_ease-out_1s_both]">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Sistema AI Attivo</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-lg p-3 animate-[fade-in_0.6s_ease-out_1.2s_both] hover:bg-white/30 transition-colors duration-300">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Efficienza Processi</span>
                        <span className="text-sm font-bold text-green-400">+89%</span>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 animate-[fade-in_0.6s_ease-out_1.4s_both] hover:bg-white/30 transition-colors duration-300">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Riduzione Costi</span>
                        <span className="text-sm font-bold text-blue-400">-67%</span>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 animate-[fade-in_0.6s_ease-out_1.6s_both] hover:bg-white/30 transition-colors duration-300">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Automazione Completa</span>
                        <span className="text-sm font-bold text-purple-400">24/7</span>
                      </div>
                    </div>
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

export default Hero;
