import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleAnchorClick = (anchor: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const redirectToWhatsApp = (message: string = "") => {
    const phone = "5511977428558";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send/?phone=${phone}&text=${encodedMessage}`, "_blank");
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <div className="bg-background/70 backdrop-blur-xl border border-border rounded-full shadow-lg px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/12759c2b-a3ce-466e-af39-fa8a1ddc7c34.png" alt="Digital Meister Logo" className="h-9" />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {[
              { id: 'hero', label: 'Início' },
              { id: 'services', label: 'Serviços' },
              { id: 'about', label: 'Sobre' },
              { id: 'contact', label: 'Contato' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleAnchorClick(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}

            <Button
              size="sm"
              className="btn-gradient rounded-full"
              onClick={() => redirectToWhatsApp("Olá! Gostaria de solicitar um diagnóstico gratuito.")}
            >
              Diagnóstico Gratuito
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-secondary/60 transition-colors">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {[
                { id: 'hero', label: 'Início' },
                { id: 'services', label: 'Serviços' },
                { id: 'about', label: 'Sobre' },
                { id: 'contact', label: 'Contato' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleAnchorClick(item.id)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button
                size="sm"
                className="btn-gradient rounded-full w-full"
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
