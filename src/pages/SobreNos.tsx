import { Shield, Truck, Users, Award, Heart, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const SobreNos = () => {
  const values = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Todos os produtos são rigorosamente verificados e certificados pela ANVISA."
    },
    {
      icon: Heart,
      title: "Cuidado",
      description: "Priorizamos o bem-estar e a saúde de nossos clientes em cada produto oferecido."
    },
    {
      icon: Truck,
      title: "Agilidade",
      description: "Entrega rápida e segura em todo o Brasil, com rastreamento em tempo real."
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Trabalhamos apenas com as melhores marcas e produtos do mercado farmacêutico."
    }
  ];

  const stats = [
    { number: "10+", label: "Anos de Experiência" },
    { number: "500k+", label: "Clientes Satisfeitos" },
    { number: "50k+", label: "Produtos Disponíveis" },
    { number: "24/7", label: "Atendimento" }
  ];

  const team = [
    {
      name: "Dr. Carlos Silva",
      role: "Farmacêutico Responsável",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop",
      description: "CRF-SP 12345 - Especialista em farmácia clínica com mais de 15 anos de experiência."
    },
    {
      name: "Dra. Ana Santos",
      role: "Diretora Técnica",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
      description: "CRF-SP 67890 - Mestre em Ciências Farmacêuticas, especializada em farmacologia."
    },
    {
      name: "Lucas Oliveira",
      role: "Gerente de Operações",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      description: "MBA em Gestão, responsável pela logística e distribuição de medicamentos."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre a PharmaMart</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Somos uma farmácia digital comprometida em democratizar o acesso à saúde, 
              oferecendo medicamentos e produtos de qualidade com praticidade e segurança 
              para todos os brasileiros.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Nossa Missão</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Facilitar o acesso a medicamentos e produtos de saúde através de uma plataforma 
                digital segura, confiável e eficiente, contribuindo para o bem-estar e qualidade 
                de vida de nossos clientes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acreditamos que a tecnologia pode transformar a experiência de cuidar da saúde, 
                tornando-a mais acessível, conveniente e humanizada.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Nossa Visão</h3>
              <p className="text-muted-foreground mb-6">
                Ser a principal farmácia digital do Brasil, reconhecida pela excelência 
                no atendimento, variedade de produtos e inovação tecnológica.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-primary">Nossos Valores</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Transparência em todas as nossas ações</li>
                <li>• Compromisso com a qualidade e segurança</li>
                <li>• Foco na experiência do cliente</li>
                <li>• Inovação constante</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Diferenciais</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O que nos torna únicos no mercado de farmácias digitais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">PharmaMart em Números</h2>
            <p className="text-xl text-primary-glow">
              Resultados que demonstram nossa dedicação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2 text-primary-glow">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profissionais qualificados e dedicados ao seu bem-estar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0 bg-white">
                <CardContent className="p-8">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Certificações e Licenças</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">ANVISA</h3>
                <p className="text-sm text-muted-foreground">
                  Licenciado pela Agência Nacional de Vigilância Sanitária
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">CRF-SP</h3>
                <p className="text-sm text-muted-foreground">
                  Registrado no Conselho Regional de Farmácia de São Paulo
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">ISO 9001</h3>
                <p className="text-sm text-muted-foreground">
                  Certificação de qualidade em gestão e processos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobreNos;