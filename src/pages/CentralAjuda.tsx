import { useState } from "react";
import { Search, ChevronDown, ChevronUp, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const faqCategories = [
  {
    title: "Pedidos e Entregas",
    questions: [
      {
        question: "Como acompanhar meu pedido?",
        answer: "Você pode acompanhar seu pedido através da seção 'Meus Pedidos' no seu perfil ou pelo código de rastreamento enviado por e-mail após a confirmação do pagamento."
      },
      {
        question: "Qual o prazo de entrega?",
        answer: "O prazo de entrega varia conforme sua localização: Capitais: 1-2 dias úteis, Interior: 2-5 dias úteis, Regiões remotas: 5-10 dias úteis. Produtos sob prescrição médica podem ter prazos diferenciados."
      },
      {
        question: "Quanto custa o frete?",
        answer: "O frete é calculado automaticamente no checkout baseado no seu CEP e peso dos produtos. Oferecemos frete grátis para compras acima de R$ 150,00 em medicamentos."
      }
    ]
  },
  {
    title: "Medicamentos",
    questions: [
      {
        question: "Como comprar medicamentos com receita?",
        answer: "Para medicamentos que exigem receita, você deve fazer o upload da prescrição médica durante o processo de compra. Nossa equipe farmacêutica validará a receita antes do envio."
      },
      {
        question: "Posso comprar medicamentos controlados?",
        answer: "Sim, vendemos medicamentos controlados mediante apresentação de receita médica válida. O processo segue todas as normas da ANVISA e pode levar tempo adicional para validação."
      },
      {
        question: "Os medicamentos são originais?",
        answer: "Todos os nossos medicamentos são originais e adquiridos diretamente dos laboratórios ou distribuidores autorizados. Garantimos a procedência e qualidade de todos os produtos."
      }
    ]
  },
  {
    title: "Pagamento",
    questions: [
      {
        question: "Quais formas de pagamento aceita?",
        answer: "Aceitamos cartões de crédito (Visa, Mastercard, Elo), débito, PIX, boleto bancário e programas de cashback. Parcelamos em até 10x sem juros no cartão de crédito."
      },
      {
        question: "É seguro comprar no site?",
        answer: "Sim, nosso site utiliza certificação SSL e criptografia de dados. Não armazenamos informações de cartão e seguimos todos os protocolos de segurança do mercado."
      },
      {
        question: "Posso cancelar um pedido já pago?",
        answer: "Pedidos podem ser cancelados antes do envio. Após o envio, você pode recusar a entrega ou solicitar devolução seguindo nossa política de trocas e devoluções."
      }
    ]
  },
  {
    title: "Conta e Cadastro",
    questions: [
      {
        question: "Como criar uma conta?",
        answer: "Clique em 'Entrar' no menu superior e depois em 'Criar conta'. Preencha seus dados pessoais, endereço e crie uma senha segura. Você receberá um e-mail de confirmação."
      },
      {
        question: "Esqueci minha senha, o que fazer?",
        answer: "Na tela de login, clique em 'Esqueci minha senha' e informe seu e-mail. Você receberá instruções para criar uma nova senha em até 5 minutos."
      },
      {
        question: "Como alterar meus dados cadastrais?",
        answer: "Acesse 'Meu Perfil' após fazer login e edite as informações desejadas. Lembre-se de salvar as alterações. Mudanças no CPF requerem validação adicional."
      }
    ]
  }
];

const contactMethods = [
  {
    icon: Phone,
    title: "Telefone",
    description: "(11) 4000-1234",
    details: "Segunda a Sexta: 8h às 20h\nSábado: 8h às 16h",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "(11) 99999-9999",
    details: "Segunda a Sexta: 8h às 20h\nResposta em até 5 minutos",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "ajuda@pharmamart.com",
    details: "Resposta em até 2 horas\n24 horas por dia",
    color: "bg-purple-50 text-purple-600"
  }
];

const CentralAjuda = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (item: string) => {
    setOpenItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Central de Ajuda</h1>
            <p className="text-xl text-gray-200 mb-8">
              Encontre respostas para suas dúvidas ou entre em contato conosco
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Digite sua dúvida aqui..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-4 text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Fale Conosco</h2>
            <p className="text-muted-foreground text-lg">
              Escolha o canal de atendimento que preferir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0 bg-white">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${method.color}`}>
                    <method.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-primary font-medium mb-4">{method.description}</p>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{method.details}</p>
                  <Button className="mt-4 bg-primary hover:bg-primary-hover">
                    Entrar em Contato
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground text-lg">
              Respostas para as dúvidas mais comuns dos nossos clientes
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const itemKey = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openItems.includes(itemKey);
                    
                    return (
                      <Collapsible key={faqIndex}>
                        <Card className="bg-white border-0 shadow-sm">
                          <CollapsibleTrigger 
                            onClick={() => toggleItem(itemKey)}
                            className="w-full"
                          >
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                <h4 className="text-left font-semibold text-lg">{faq.question}</h4>
                                {isOpen ? (
                                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                                )}
                              </div>
                            </CardContent>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <CardContent className="px-6 pb-6 pt-0">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </CardContent>
                          </CollapsibleContent>
                        </Card>
                      </Collapsible>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {searchTerm && filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">
                Não encontramos resultados para "{searchTerm}"
              </p>
              <p className="text-muted-foreground">
                Tente pesquisar por outros termos ou entre em contato conosco
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Clock className="h-16 w-16 mx-auto mb-6 text-primary-glow" />
            <h2 className="text-3xl font-bold mb-4">Atendimento 24 Horas</h2>
            <p className="text-xl text-primary-glow mb-8">
              Para emergências ou dúvidas urgentes sobre medicamentos, 
              nossa equipe farmacêutica está disponível 24 horas por dia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="h-5 w-5 mr-2" />
                (11) 4000-1234
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp 24h
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CentralAjuda;