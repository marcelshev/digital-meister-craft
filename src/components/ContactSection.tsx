import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const redirectToWhatsApp = (message: string = "") => {
    const phone = "5511977428558";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send/?phone=${phone}&text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-20 bg-card/40" id="contact">
      <div className="container mx-auto px-6 lg:px-8 xl:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="text-primary font-medium">CONTATO</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Solicite um diagnóstico gratuito
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Veja como podemos transformar seu negócio. Entre em contato pelo WhatsApp
                e um de nossos especialistas responderá rapidamente.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "📱", title: "Fale Conosco", body: "contato@digitalmeister.com.br" },
                  { icon: "📍", title: "Endereço", body: "São Paulo, SP - Brasil" },
                  { icon: "⏱️", title: "Horário de Atendimento", body: "Segunda a Sexta, 9h às 18h" },
                ].map((c) => (
                  <div key={c.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">{c.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold">{c.title}</h3>
                      <p className="text-muted-foreground">{c.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border shadow-xl">
              <h3 className="text-xl font-bold mb-6">Escolha uma opção abaixo</h3>

              <div className="space-y-4">
                <Button
                  onClick={() => redirectToWhatsApp("Olá! Gostaria de solicitar um diagnóstico gratuito.")}
                  className="w-full btn-gradient rounded-full group"
                >
                  SOLICITAR DIAGNÓSTICO GRATUITO
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => redirectToWhatsApp("Olá! Gostaria de conhecer mais sobre os serviços oferecidos.")}
                  className="w-full rounded-full bg-secondary hover:bg-secondary/80 border border-primary/30 text-foreground hover:border-primary hover:scale-105 transition-all"
                >
                  CONHECER SERVIÇOS
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => redirectToWhatsApp("Olá! Gostaria de falar sobre meu projeto.")}
                  className="w-full rounded-full bg-secondary hover:bg-secondary/80 border border-primary/30 text-foreground hover:border-primary hover:scale-105 transition-all"
                >
                  CONVERSAR SOBRE MEU PROJETO
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => redirectToWhatsApp()}
                  className="w-full rounded-full bg-secondary hover:bg-secondary/80 border border-primary/30 text-foreground hover:border-primary hover:scale-105 transition-all"
                >
                  FALAR COM UM ESPECIALISTA AGORA
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
