
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50 animate-slide-in-left">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold animate-gradient-text hover:scale-110 transition-all duration-300 cursor-pointer animate-float"
          >
            ApexAI
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary interactive relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full animate-fade-in stagger-1">Home</a>
            <a href="#services" className="text-foreground hover:text-primary interactive relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full animate-fade-in stagger-2">Servizi</a>
            <a href="#about" className="text-foreground hover:text-primary interactive relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full animate-fade-in stagger-3">Chi Siamo</a>
            <a href="#contact" className="text-foreground hover:text-primary interactive relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full animate-fade-in stagger-4">Contatti</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden interactive animate-scale-bounce"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="animate-rotate-y" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50 animate-slide-in-left">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-foreground hover:text-primary interactive animate-fade-in stagger-1">Home</a>
              <a href="#services" className="text-foreground hover:text-primary interactive animate-fade-in stagger-2">Servizi</a>
              <a href="#about" className="text-foreground hover:text-primary interactive animate-fade-in stagger-3">Chi Siamo</a>
              <a href="#contact" className="text-foreground hover:text-primary interactive animate-fade-in stagger-4">Contatti</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
