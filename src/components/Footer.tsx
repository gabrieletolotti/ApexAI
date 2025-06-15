
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Footer = () => {
  const {
    ref,
    isIntersecting
  } = useIntersectionObserver({
    threshold: 0.2
  });
  
  return (
    <footer ref={ref} className="bg-slate-900/70 backdrop-blur-xl text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className={`space-y-4 text-center animate-on-scroll fade-in-up ${isIntersecting ? 'visible' : ''}`}>
            <div className="cursor-pointer hover:scale-105 transition-transform duration-300 flex justify-center">
              <img src="/lovable-uploads/aa430766-16dd-4783-bc9f-f9980ee34dea.png" alt="ApexAI Logo" className="h-10" />
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md">
              La tua partner italiana per l'automazione AI e l'innovazione tecnologica. 
              Trasformiamo le aziende con soluzioni intelligenti.
            </p>
          </div>
        </div>

        <div className={`border-t border-slate-700/50 mt-12 pt-8 text-center text-slate-400 animate-on-scroll fade-in-up stagger-5 ${isIntersecting ? 'visible' : ''}`}>
          <p>© 2024 ApexAI. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
