import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Clock } from "lucide-react";
import heroImage from "@/assets/pharmacy-hero.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Farmácia moderna" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Sua Farmácia
            <span className="block text-primary-glow">Digital</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Medicamentos, produtos de beleza e cuidados pessoais 
            com entrega rápida e segura na sua casa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white shadow-turquoise transition-all duration-300 transform hover:scale-105">
              Explorar Produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 transition-all duration-300">
              Ver Ofertas
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-primary/20 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary-glow" />
              </div>
              <div>
                <h3 className="font-semibold">100% Seguro</h3>
                <p className="text-sm text-gray-300">Produtos certificados</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-primary/20 p-3 rounded-full">
                <Truck className="h-6 w-6 text-primary-glow" />
              </div>
              <div>
                <h3 className="font-semibold">Entrega Rápida</h3>
                <p className="text-sm text-gray-300">Em até 24h</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-primary/20 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary-glow" />
              </div>
              <div>
                <h3 className="font-semibold">24/7 Disponível</h3>
                <p className="text-sm text-gray-300">Sempre aberto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;