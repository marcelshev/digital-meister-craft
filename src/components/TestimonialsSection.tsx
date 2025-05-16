
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "A Digital Meister dobrou o faturamento do meu negócio em 6 meses.",
    author: "Cliente Satisfeito",
    company: "Empresa ABC"
  },
  {
    id: 2,
    quote: "As estratégias implementadas pela Digital Meister revolucionaram nossa presença online.",
    author: "Empreendedor Digital",
    company: "Startup XYZ"
  },
  {
    id: 3,
    quote: "Conseguimos automatizar processos que antes tomavam dias da nossa equipe.",
    author: "Gestor de Operações",
    company: "Empresa 123"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-agency-purple font-medium">RESULTADOS REAIS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Veja o que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600">
            Mais de 100 negócios acelerados. E o próximo pode ser o seu.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/1">
                  <Card className="border-0 shadow-none">
                    <CardContent className="p-6 text-center">
                      <div className="mb-6 text-5xl text-center">💬</div>
                      <blockquote className="text-xl md:text-2xl font-medium mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-gradient-to-r from-agency-purple to-agency-blue text-white">
            COMEÇAR AGORA <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
