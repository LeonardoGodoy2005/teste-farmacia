import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              PharmaMart
            </h3>
            <p className="text-gray-300 mb-6">
              Sua farmácia digital de confiança, oferecendo produtos de qualidade 
              com entrega rápida e segura para todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/medicamentos" className="text-gray-300 hover:text-primary transition-colors">Medicamentos</Link></li>
              <li><Link to="/beleza" className="text-gray-300 hover:text-primary transition-colors">Beleza & Cosméticos</Link></li>
              <li><Link to="/bebe" className="text-gray-300 hover:text-primary transition-colors">Bebê & Infantil</Link></li>
              <li><Link to="/suplementos" className="text-gray-300 hover:text-primary transition-colors">Suplementos</Link></li>
              <li><Link to="/ofertas" className="text-gray-300 hover:text-primary transition-colors">Ofertas</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Atendimento</h4>
            <ul className="space-y-2">
              <li><Link to="/central-ajuda" className="text-gray-300 hover:text-primary transition-colors">Central de Ajuda</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Trocas e Devoluções</a></li>
              <li><Link to="/sobre-nos" className="text-gray-300 hover:text-primary transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">(11) 4000-1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">contato@pharmamart.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
            </div>

            <div>
              <h5 className="text-sm font-semibold mb-2 text-white">Newsletter</h5>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Seu e-mail" 
                  className="bg-dark-light border-gray-600 text-white placeholder:text-gray-400"
                />
                <Button className="bg-primary hover:bg-primary-hover">
                  OK
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 PharmaMart. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;