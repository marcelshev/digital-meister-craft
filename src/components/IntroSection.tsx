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
    <section className="py-20 bg-background" id="intro">
      <div className="container mx-auto px-6 lg:px-8 xl:px-12">
        {/* Reflowed hero content: subtitle + CTAs + illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-medium w-fit">
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
              DIGITAL MEISTER
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Crescer não precisa ser <span className="text-play-gradient">complicado</span>.
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Com as ferramentas certas, o processo se torna mais rápido, previsível e escalável.
              A Digital Meister combina tecnologia, estratégia e execução para simplificar a captação
              de clientes e fortalecer sua marca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => redirectToWhatsApp("Olá! Gostaria de solicitar um diagnóstico gratuito.")}
                className="btn-gradient rounded-full group"
              >
                Diagnóstico Gratuito
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => redirectToWhatsApp("Olá! Gostaria de conhecer mais sobre os serviços oferecidos.")}
                className="rounded-full border-primary/40 text-foreground hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all"
              >
                Nossos Serviços
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden">
              <img
                src="/lovable-uploads/11d164df-cb1c-4e16-a7cb-e84552fc9a73.png"
                alt="Marketing Digital - Ferramentas e estratégias"
                className="w-full h-auto"
              />
              <div className="absolute -inset-6 bg-gradient-to-r from-[#7650FE]/30 to-[#005BF0]/30 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>

        {/* Action cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="rounded-3xl border border-primary/20 bg-card shadow-lg hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#7650FE] to-[#005BF0] text-white">
                  🚀
                </span>
                <h3>O que podemos fazer pelo seu negócio?</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Atrair mais clientes sem desperdiçar dinheiro com anúncios ineficazes.",
                  "Transformar visitas em vendas, eliminando barreiras na jornada do cliente.",
                  "Automatizar processos repetitivos, para que você foque no que realmente importa.",
                  "Criar autoridade para sua marca, tornando seu negócio mais confiável e desejado.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary font-bold text-lg">✅</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                onClick={() => redirectToWhatsApp("Olá! Quero atrair mais clientes para meu negócio.")}
                className="w-full btn-gradient rounded-full group"
              >
                QUERO MAIS CLIENTES
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-primary/20 bg-card shadow-lg hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#7650FE] to-[#005BF0] text-white">
                  📩
                </span>
                <h3>Fale conosco</h3>
              </div>
              <p className="mb-6 text-muted-foreground">
                Fale com um especialista e veja qual solução se encaixa melhor para você.
                Solicite um diagnóstico gratuito e descubra o caminho mais curto para crescer!
              </p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  onClick={() => redirectToWhatsApp("Olá! Gostaria de solicitar uma consultoria.")}
                  className="w-full btn-gradient rounded-full group"
                >
                  SOLICITAR CONSULTORIA
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => redirectToWhatsApp("Olá! Gostaria de conhecer os casos de sucesso da Digital Meister.")}
                  className="w-full rounded-full border-primary/40 hover:border-primary hover:bg-primary/10"
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
