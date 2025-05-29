
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const redirectToWhatsApp = (message: string = "") => {
    const phone = "5511977428558";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send/?phone=${phone}&text=${encodedMessage}`, "_blank");
  };
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" id="hero">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50 z-0"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-agency-purple/10 to-agency-lightPurple/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-gradient-to-r from-agency-lightPurple/10 to-agency-purple/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agency-purple/20 text-agency-purple text-sm font-medium w-fit">
              <span className="inline-block w-2 h-2 rounded-full bg-agency-purple animate-pulse"></span>
              DIGITAL MEISTER
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              DÊ O <span className="text-transparent bg-clip-text bg-gradient-to-r from-agency-purple to-agency-lightPurple">PLAY</span> NO SEU NEGÓCIO
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Crescer não precisa ser complicado. Com as ferramentas certas, o processo se torna mais rápido, previsível e escalável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => redirectToWhatsApp("Olá! Gostaria de solicitar um diagnóstico gratuito.")}
                className="btn-gradient group"
              >
                Diagnóstico Gratuito 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => redirectToWhatsApp("Olá! Gostaria de conhecer mais sobre os serviços oferecidos.")}
                className="border-agency-purple/50 text-foreground hover:border-agency-purple hover:bg-agency-purple/10 hover:scale-105 transition-all"
              >
                Nossos Serviços
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in flex justify-center">
            <div className="relative w-full max-w-md aspect-square hover-scale hover-glow">
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Marketing Dashboard */}
                <rect x="50" y="80" width="300" height="240" rx="12" fill="url(#gradient1)" stroke="#6366f1" strokeWidth="2"/>
                
                {/* Charts */}
                <rect x="70" y="100" width="80" height="60" rx="4" fill="#f8fafc"/>
                <polyline points="75,140 85,130 95,135 105,125 115,120 125,115 135,110 145,105" 
                          fill="none" stroke="#6366f1" strokeWidth="2"/>
                
                <rect x="170" y="100" width="80" height="60" rx="4" fill="#f8fafc"/>
                <circle cx="210" cy="130" r="20" fill="none" stroke="#8b5cf6" strokeWidth="3"/>
                <path d="M 210 110 A 20 20 0 0 1 225 145" fill="#8b5cf6"/>
                
                <rect x="270" y="100" width="60" height="60" rx="4" fill="#f8fafc"/>
                <rect x="280" y="130" width="40" height="8" rx="2" fill="#6366f1"/>
                <rect x="280" y="145" width="25" height="8" rx="2" fill="#8b5cf6"/>
                
                {/* Social Media Icons */}
                <circle cx="90" cy="200" r="20" fill="#1877f2"/>
                <text x="90" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">f</text>
                
                <circle cx="140" cy="200" r="20" fill="#E4405F"/>
                <circle cx="140" cy="200" r="12" fill="none" stroke="white" strokeWidth="2"/>
                <circle cx="148" cy="192" r="2" fill="white"/>
                
                <circle cx="190" cy="200" r="20" fill="#0077b5"/>
                <text x="190" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">in</text>
                
                {/* Growth Arrow */}
                <path d="M 250 180 L 320 180 L 315 175 M 320 180 L 315 185" 
                      stroke="#10b981" strokeWidth="3" fill="none"/>
                <circle cx="335" cy="180" r="8" fill="#10b981"/>
                <text x="335" y="185" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">↗</text>
                
                {/* Floating Elements */}
                <circle cx="80" cy="50" r="15" fill="#fbbf24" opacity="0.8"/>
                <text x="80" y="55" textAnchor="middle" fill="white" fontSize="12">💡</text>
                
                <circle cx="320" cy="60" r="12" fill="#ef4444" opacity="0.8"/>
                <text x="320" y="65" textAnchor="middle" fill="white" fontSize="10">🎯</text>
                
                <circle cx="60" cy="350" r="18" fill="#8b5cf6" opacity="0.8"/>
                <text x="60" y="355" textAnchor="middle" fill="white" fontSize="12">📊</text>
                
                <circle cx="340" cy="320" r="16" fill="#06b6d4" opacity="0.8"/>
                <text x="340" y="325" textAnchor="middle" fill="white" fontSize="11">🚀</text>
                
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f8fafc" />
                    <stop offset="100%" stopColor="#e2e8f0" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute -inset-4 bg-gradient-to-r from-agency-purple/20 to-agency-lightPurple/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
