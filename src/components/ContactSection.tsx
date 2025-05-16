
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // In a real application, you would send this data to your server
    toast({
      title: "Formulário enviado!",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="text-agency-purple font-medium">CONTATO</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Solicite um diagnóstico gratuito
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Veja como podemos transformar seu negócio. Preencha o formulário
                e um de nossos especialistas entrará em contato.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-agency-purple/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-agency-purple">📱</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Fale Conosco</h3>
                    <p className="text-gray-600">contato@digitalmeister.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-agency-purple/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-agency-purple">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Endereço</h3>
                    <p className="text-gray-600">São Paulo, SP - Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-agency-purple/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-agency-purple">⏱️</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta, 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6">Preencha o formulário</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Seu Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite seu melhor e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nome da sua empresa"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-input rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Como podemos te ajudar?"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-agency-purple to-agency-blue text-white">
                  SOLICITAR DIAGNÓSTICO <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
