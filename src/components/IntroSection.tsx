
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const IntroSection = () => {
  const redirectToWhatsApp = (message: string = "") => {
    const phone = "5511977428558";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send/?phone=${phone}&text=${encodedMessage}`, "_blank");
  };
  
  return (
    <section className="py-20 bg-card/50" id="intro">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Digital Meister combina tecnologia, estratégia e execução
          </h2>
          <p className="text-lg text-gray-300">
            Simplificamos a captação de clientes, fortalecemos marcas e estruturamos negócios digitais de alto impacto.
            Com soluções personalizadas e automação inteligente, cada ação gera resultado imediato e duradouro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border border-agency-green/20 bg-background/50 shadow-lg hover:shadow-agency-green/20 hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-agency-green to-agency-neonGreen text-white">
                  🚀
                </span>
                <h3>O que podemos fazer pelo seu negócio?</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-agency-green font-bold text-lg">✅</span>
                  <span>Atrair mais clientes sem desperdiçar dinheiro com anúncios ineficazes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-agency-green font-bold text-lg">✅</span>
                  <span>Transformar visitas em vendas, eliminando barreiras na jornada do cliente.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-agency-green font-bold text-lg">✅</span>
                  <span>Automatizar processos repetitivos, para que você foque no que realmente importa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-agency-green font-bold text-lg">✅</span>
                  <span>Criar autoridade para sua marca, tornando seu negócio mais confiável e desejado.</span>
                </li>
              </ul>
              <Button 
                size="lg" 
                onClick={() => redirectToWhatsApp("Olá! Quero atrair mais clientes para meu negócio.")} 
                className="w-full btn-gradient group"
              >
                QUERO MAIS CLIENTES 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border border-agency-green/20 bg-background/50 shadow-lg hover:shadow-agency-green/20 hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-agency-green to-agency-neonGreen text-white">
                  📩
                </span>
                <h3>Fale conosco</h3>
              </div>
              <p className="mb-6 text-gray-300">
                Fale com um especialista e veja qual solução se encaixa melhor para você.
                Solicite um diagnóstico gratuito e descubra o caminho mais curto para crescer!
              </p>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  onClick={() => redirectToWhatsApp("Olá! Gostaria de solicitar uma consultoria.")} 
                  className="w-full btn-gradient group"
                >
                  SOLICITAR CONSULTORIA 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => redirectToWhatsApp("Olá! Gostaria de conhecer os casos de sucesso da Digital Meister.")} 
                  className="w-full border-agency-green/50 hover:border-agency-green hover:bg-agency-green/10"
                >
                  Ver nossos casos de sucesso
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
