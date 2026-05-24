import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  { icon: "🎯", title: "Foco em Resultados", body: "Cada estratégia é desenvolvida com métricas claras e objetivos mensuráveis para garantir o retorno do seu investimento." },
  { icon: "⚡", title: "Agilidade e Eficiência", body: "Utilizamos metodologias ágeis e ferramentas de automação para entregar resultados rápidos sem comprometer a qualidade." },
  { icon: "🤝", title: "Parceria Verdadeira", body: "Não somos apenas fornecedores, somos parceiros no seu crescimento. Trabalhamos lado a lado para alcançar seus objetivos." },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium">SOBRE NÓS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Quem somos e como trabalhamos
          </h2>
          <p className="text-lg text-muted-foreground">
            A Digital Meister nasceu para simplificar o crescimento digital dos negócios.
            Combinamos tecnologia, estratégia e execução para entregar resultados reais e mensuráveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <Card key={p.title} className="rounded-3xl border border-border bg-card shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7650FE] to-[#005BF0] flex items-center justify-center text-white text-2xl mx-auto mb-6">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                <p className="text-muted-foreground">{p.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-3xl p-8 border border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Democratizar o marketing digital de alta performance, tornando estratégias
              avançadas acessíveis para empresas de todos os tamanhos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2x</div>
                <div className="text-sm text-muted-foreground">Crescimento Médio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
