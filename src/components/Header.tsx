
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ThemeToggle } from '@/components/theme-toggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 1, triggerOnce: false });

  return (
    <header ref={ref} className={`fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50 transition-all duration-500 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            ApexAI
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Home</a>
            <a href="#services" className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Servizi</a>
            <a href="#about" className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Chi Siamo</a>
            <a href="#contact" className="text-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Contatti</a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden hover:scale-110 transition-transform duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50 animate-on-scroll fade-in-up visible">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300">Home</a>
              <a href="#services" className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300">Servizi</a>
              <a href="#about" className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300">Chi Siamo</a>
              <a href="#contact" className="text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300">Contatti</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
