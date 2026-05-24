import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "IMPULSO COMERCIAL",
    subtitle: "MAIS CLIENTES, MAIS VENDAS",
    description: "Vendas previsíveis, automação inteligente e anúncios estratégicos para aumentar seu faturamento.",
    items: [
      { icon: "💼", title: "Treinamento Comercial e Prospecção", description: "Métodos e automação para transformar contatos em clientes fiéis." },
      { icon: "📊", title: "Gestão de Anúncios Online", description: "Campanhas otimizadas no Google, Facebook, Instagram e TikTok." },
      { icon: "🚀", title: "Páginas de Conversão", description: "Sites e formulários estruturados para transformar visitantes em compradores." },
      { icon: "💰", title: "Gestão de Relacionamento e Automação", description: "Comunicação eficiente para acelerar vendas sem esforço manual." }
    ]
  },
  {
    id: 2,
    title: "POSICIONAMENTO DIGITAL E MONETIZAÇÃO",
    subtitle: "",
    description: "Fortaleça sua marca e crie novas fontes de receita digital.",
    items: [
      { icon: "🎨", title: "Identidade Visual e Posicionamento", description: "Do logo ao tom de voz, sua marca forte e reconhecível." },
      { icon: "🌐", title: "Sites e Experiência Digital", description: "Páginas rápidas, intuitivas e otimizadas para conversão." },
      { icon: "📢", title: "Conteúdo e Redes Sociais", description: "Estratégia, gestão e criação para engajar e expandir sua audiência." },
      { icon: "🎥", title: "Criação e Lançamento de Produtos Digitais", description: "Estruturamos cursos, mentorias e conteúdos escaláveis para monetização." }
    ]
  },
  {
    id: 3,
    title: "AUTOMAÇÃO E EFICIÊNCIA OPERACIONAL",
    subtitle: "",
    description: "Tecnologia e inteligência artificial para eliminar retrabalho, agilizar processos e melhorar a experiência do cliente.",
    items: [
      { icon: "⚙️", title: "Automação de Pedidos e Solicitações", description: "Do cadastro ao faturamento, sem erros ou atrasos." },
      { icon: "📂", title: "Atendimento Interno e Organização de Dados", description: "Suporte automatizado para otimizar tempo e reduzir custos." },
      { icon: "📊", title: "Monitoramento e Alertas Estratégicos", description: "Estoque atualizado, prazos cumpridos e processos sob controle." }
    ]
  }
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  return (
    <Card className="rounded-3xl border border-border bg-card shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
      <div className="h-2 bg-gradient-to-r from-[#7650FE] to-[#005BF0]" />
      <CardHeader className="pb-2">
        <h3 className="text-lg font-bold text-primary">{service.title}</h3>
        {service.subtitle && <p className="text-sm text-muted-foreground">{service.subtitle}</p>}
      </CardHeader>
      <CardContent className="flex-1">
        <p className="mb-6 text-muted-foreground">{service.description}</p>
        <div className="space-y-4">
          {service.items.map((item, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-lg">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-card/40" id="services">
      <div className="container mx-auto px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium">NOSSOS SERVIÇOS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Soluções completas para seu negócio crescer
          </h2>
          <p className="text-lg text-muted-foreground">
            Desenvolvemos estratégias personalizadas que se adaptam aos objetivos do seu negócio,
            combinando tecnologia e metodologias comprovadas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
