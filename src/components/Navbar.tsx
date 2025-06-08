
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAnchorClick = (anchor: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const redirectToWhatsApp = (message: string = "") => {
    const phone = "5511977428558";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send/?phone=${phone}&text=${encodedMessage}`, "_blank");
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 shadow-sm px-[14px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/12759c2b-a3ce-466e-af39-fa8a1ddc7c34.png" alt="Digital Meister Logo" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleAnchorClick('hero')}
              className="text-sm font-medium hover:text-agency-purple transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => handleAnchorClick('services')}
              className="text-sm font-medium hover:text-agency-purple transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => handleAnchorClick('about')}
              className="text-sm font-medium hover:text-agency-purple transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => handleAnchorClick('contact')}
              className="text-sm font-medium hover:text-agency-purple transition-colors"
            >
              Contato
            </button>
            
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-agency-purple to-agency-blue text-white"
              onClick={() => redirectToWhatsApp("Olá! Gostaria de solicitar um diagnóstico gratuito.")}
            >
              Diagnóstico Gratuito
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleAnchorClick('hero')}
                className="text-sm font-medium hover:text-agency-purple transition-colors text-left"
              >
                Início
              </button>
              <button 
                onClick={() => handleAnchorClick('services')}
                className="text-sm font-medium hover:text-agency-purple transition-colors text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => handleAnchorClick('about')}
                className="text-sm font-medium hover:text-agency-purple transition-colors text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => handleAnchorClick('contact')}
                className="text-sm font-medium hover:text-agency-purple transition-colors text-left"
              >
                Contato
              </button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-agency-purple to-agency-blue text-white w-full"
                onClick={() => redirectToWhatsApp("Olá! Gostaria de solicitar um diagnóstico gratuito.")}
              >
                Diagnóstico Gratuito
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
