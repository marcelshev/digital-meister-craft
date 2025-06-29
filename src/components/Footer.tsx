
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/ccdcca91-2e4a-4e9d-bbc5-388cd92c502c.png" 
                alt="Digital Meister"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              A Digital Meister combina tecnologia, estratégia e execução para simplificar a captação de clientes, 
              fortalecer marcas e estruturar negócios digitais de alto impacto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-white transition-colors">Serviços</Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-white transition-colors">Sobre nós</Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-400 hover:text-white transition-colors">Contato</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-agency-purple">📧</span>
                <span className="text-gray-400">contato@digitalmeister.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-agency-purple">📱</span>
                <span className="text-gray-400">+55 11 97742-8558</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-agency-purple">📍</span>
                <span className="text-gray-400">São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Digital Meister. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
