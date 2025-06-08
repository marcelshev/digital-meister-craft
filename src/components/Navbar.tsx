import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 shadow-sm px-[14px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/12759c2b-a3ce-466e-af39-fa8a1ddc7c34.png" alt="Digital Meister Logo" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-agency-purple transition-colors">
              Início
            </Link>
            <Link to="/#services" className="text-sm font-medium hover:text-agency-purple transition-colors">
              Serviços
            </Link>
            
            
            <Button size="sm" className="bg-gradient-to-r from-agency-purple to-agency-blue text-white">
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
        {isMenuOpen && <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium hover:text-agency-purple transition-colors">
                Início
              </Link>
              <Link to="/#services" className="text-sm font-medium hover:text-agency-purple transition-colors">
                Serviços
              </Link>
              <Link to="/#about" className="text-sm font-medium hover:text-agency-purple transition-colors">
                Sobre
              </Link>
              <Link to="/#contact" className="text-sm font-medium hover:text-agency-purple transition-colors">
                Contato
              </Link>
              <Button size="sm" className="bg-gradient-to-r from-agency-purple to-agency-blue text-white w-full">
                Diagnóstico Gratuito
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;