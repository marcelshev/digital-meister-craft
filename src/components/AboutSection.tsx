
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-agency-purple font-medium">SOBRE NÓS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Quem somos e como trabalhamos
          </h2>
          <p className="text-lg text-gray-600">
            A Digital Meister nasceu para simplificar o crescimento digital dos negócios.
            Combinamos tecnologia, estratégia e execução para entregar resultados reais e mensuráveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-agency-purple to-agency-blue flex items-center justify-center text-white text-2xl mx-auto mb-6">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-4">Foco em Resultados</h3>
              <p className="text-gray-600">
                Cada estratégia é desenvolvida com métricas claras e objetivos mensuráveis 
                para garantir o retorno do seu investimento.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-agency-purple to-agency-blue flex items-center justify-center text-white text-2xl mx-auto mb-6">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-4">Agilidade e Eficiência</h3>
              <p className="text-gray-600">
                Utilizamos metodologias ágeis e ferramentas de automação para 
                entregar resultados rápidos sem comprometer a qualidade.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-agency-purple to-agency-blue flex items-center justify-center text-white text-2xl mx-auto mb-6">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-4">Parceria Verdadeira</h3>
              <p className="text-gray-600">
                Não somos apenas fornecedores, somos parceiros no seu crescimento. 
                Trabalhamos lado a lado para alcançar seus objetivos.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-card/50 rounded-lg p-8 border border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
            <p className="text-lg text-gray-600 mb-6">
              Democratizar o marketing digital de alta performance, tornando estratégias 
              avançadas acessíveis para empresas de todos os tamanhos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-agency-purple">100+</div>
                <div className="text-sm text-gray-600">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-agency-purple">95%</div>
                <div className="text-sm text-gray-600">Taxa de Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-agency-purple">2x</div>
                <div className="text-sm text-gray-600">Crescimento Médio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
