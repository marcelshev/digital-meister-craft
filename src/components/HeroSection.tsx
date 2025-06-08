
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
      
      <div className="container mx-auto px-8 lg:px-12 xl:px-16 relative z-10">
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
              <Button size="lg" onClick={() => redirectToWhatsApp("Olá! Gostaria de solicitar um diagnóstico gratuito.")} className="btn-gradient group">
                Diagnóstico Gratuito 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" onClick={() => redirectToWhatsApp("Olá! Gostaria de conhecer mais sobre os serviços oferecidos.")} className="border-agency-purple/50 text-foreground hover:border-agency-purple hover:bg-agency-purple/10 hover:scale-105 transition-all">
                Nossos Serviços
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in flex justify-center">
            <div className="relative w-full max-w-md">
              <img 
                src="/lovable-uploads/11d164df-cb1c-4e16-a7cb-e84552fc9a73.png" 
                alt="Marketing Digital - Ferramentas e estratégias"
                className="w-full h-auto"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-agency-purple/20 to-agency-lightPurple/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
