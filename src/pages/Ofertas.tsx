import { useState } from "react";
import { Search, Filter, Grid, List, Star, ShoppingCart, Heart, Clock, Percent } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const products = [
  {
    id: 1,
    name: "Kit Vitamina D3 + C",
    brand: "VitaMax",
    price: 89.90,
    originalPrice: 129.90,
    rating: 4.9,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
    category: "Suplementos",
    discount: 31,
    endDate: "2024-12-31",
    offerType: "Combo"
  },
  {
    id: 2,
    name: "Protetor Solar FPS 60",
    brand: "La Roche-Posay",
    price: 69.90,
    originalPrice: 99.90,
    rating: 4.8,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&fit=crop",
    category: "Beleza",
    discount: 30,
    endDate: "2024-12-25",
    offerType: "Flash Sale"
  },
  {
    id: 3,
    name: "Dipirona 500mg - 3 Caixas",
    brand: "Medley",
    price: 29.90,
    originalPrice: 47.70,
    rating: 4.7,
    reviews: 298,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=300&fit=crop",
    category: "Medicamentos",
    discount: 37,
    endDate: "2024-12-28",
    offerType: "Leve 3 Pague 2"
  },
  {
    id: 4,
    name: "Shampoo + Condicionador",
    brand: "Head & Shoulders",
    price: 39.90,
    originalPrice: 59.80,
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=300&h=300&fit=crop",
    category: "Higiene",
    discount: 33,
    endDate: "2024-12-30",
    offerType: "Combo"
  },
  {
    id: 5,
    name: "Fraldas Pampers G - 2 Pacotes",
    brand: "Pampers",
    price: 149.90,
    originalPrice: 199.80,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=300&h=300&fit=crop",
    category: "Bebê",
    discount: 25,
    endDate: "2024-12-26",
    offerType: "Desconto Progressivo"
  },
  {
    id: 6,
    name: "Omega 3 1000mg",
    brand: "HealthPlus",
    price: 45.90,
    originalPrice: 79.90,
    rating: 4.5,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1559059922-4f14146ba8b6?w=300&h=300&fit=crop",
    category: "Suplementos",
    discount: 43,
    endDate: "2024-12-29",
    offerType: "Liquidação"
  }
];

const categories = ["Todos", "Medicamentos", "Beleza", "Suplementos", "Higiene", "Bebê"];
const offerTypes = ["Todos", "Flash Sale", "Combo", "Leve 3 Pague 2", "Desconto Progressivo", "Liquidação"];

const Ofertas = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedOfferType, setSelectedOfferType] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesOfferType = selectedOfferType === "Todos" || product.offerType === selectedOfferType;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesOfferType && matchesSearch;
  });

  const formatTimeLeft = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return `${days} dias restantes`;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ofertas Especiais</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Aproveite descontos imperdíveis em produtos selecionados por tempo limitado
            </p>
          </div>
        </div>
      </section>

      {/* Highlight Banner */}
      <section className="bg-primary/10 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Percent className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Descontos de até 43%</h2>
              <Percent className="h-6 w-6 text-primary" />
            </div>
            <p className="text-muted-foreground">
              Ofertas válidas por tempo limitado. Não perca!
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar ofertas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedOfferType} onValueChange={setSelectedOfferType}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Tipo de oferta" />
                </SelectTrigger>
                <SelectContent>
                  {offerTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Mostrando {filteredProducts.length} ofertas
            </p>
          </div>

          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-6`}>
            {filteredProducts.map((product) => (
              <Card key={product.id} className={`group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-white border-0 ${viewMode === 'list' ? 'flex-row' : ''}`}>
                <CardContent className={`p-4 ${viewMode === 'list' ? 'flex items-center space-x-4' : ''}`}>
                  <div className={`relative mb-4 ${viewMode === 'list' ? 'mb-0 w-32 h-32 flex-shrink-0' : ''}`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className={`w-full object-cover rounded-lg ${viewMode === 'list' ? 'h-32' : 'h-48'}`}
                    />
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white shadow-sm"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
                      -{product.discount}%
                    </Badge>
                    <Badge 
                      variant="secondary" 
                      className="absolute bottom-2 left-2 bg-primary text-primary-foreground"
                    >
                      {product.offerType}
                    </Badge>
                  </div>

                  <div className={`space-y-2 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <p className="text-sm text-muted-foreground">{product.brand}</p>
                    <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
                    
                    <div className="flex items-center space-x-2 text-xs text-orange-600">
                      <Clock className="h-3 w-3" />
                      <span>{formatTimeLeft(product.endDate)}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium ml-1">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-primary">
                        R$ {product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        R$ {product.originalPrice.toFixed(2)}
                      </span>
                    </div>

                    <Button className={`bg-primary hover:bg-primary-hover transition-colors ${viewMode === 'list' ? 'w-auto' : 'w-full'}`}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Aproveitar Oferta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ofertas;