import { useState } from "react";
import { Search, Filter, Grid, List, Star, ShoppingCart, Heart } from "lucide-react";
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
    name: "Whey Protein Concentrado",
    brand: "Optimum Nutrition",
    price: 189.90,
    originalPrice: 229.90,
    rating: 4.9,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300&h=300&fit=crop",
    category: "Proteínas",
    benefit: "Ganho de massa muscular"
  },
  {
    id: 2,
    name: "Vitamina D3 2000 UI",
    brand: "VitaMax",
    price: 29.90,
    originalPrice: 35.90,
    rating: 4.8,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
    category: "Vitaminas",
    benefit: "Fortalecimento ósseo"
  },
  {
    id: 3,
    name: "Ômega 3 1000mg",
    brand: "HealthPlus",
    price: 67.90,
    originalPrice: 79.90,
    rating: 4.7,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1559059922-4f14146ba8b6?w=300&h=300&fit=crop",
    category: "Ácidos Graxos",
    benefit: "Saúde cardiovascular"
  },
  {
    id: 4,
    name: "Multivitamínico Completo",
    brand: "Centrum",
    price: 85.90,
    originalPrice: 99.90,
    rating: 4.6,
    reviews: 298,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=300&fit=crop",
    category: "Multivitamínicos",
    benefit: "Bem-estar geral"
  },
  {
    id: 5,
    name: "Creatina Monohidratada",
    brand: "Universal",
    price: 79.90,
    originalPrice: 95.90,
    rating: 4.8,
    reviews: 789,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
    category: "Performance",
    benefit: "Aumento de força"
  },
  {
    id: 6,
    name: "Colágeno Hidrolisado",
    brand: "Sanavita",
    price: 45.90,
    originalPrice: 55.90,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1556228578-dd4539dd2271?w=300&h=300&fit=crop",
    category: "Beleza",
    benefit: "Saúde da pele"
  }
];

const categories = ["Todos", "Proteínas", "Vitaminas", "Ácidos Graxos", "Multivitamínicos", "Performance", "Beleza"];
const benefits = ["Todos os benefícios", "Ganho de massa muscular", "Fortalecimento ósseo", "Saúde cardiovascular", "Bem-estar geral", "Aumento de força", "Saúde da pele"];

const Suplementos = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedBenefit, setSelectedBenefit] = useState("Todos os benefícios");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesBenefit = selectedBenefit === "Todos os benefícios" || product.benefit === selectedBenefit;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesBenefit && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Suplementos</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Suplementos vitamínicos e nutricionais para potencializar sua saúde e bem-estar
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-primary/10 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Suplementos Certificados</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Todos os nossos suplementos são aprovados pela ANVISA e fabricados seguindo os mais altos padrões de qualidade e segurança.
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
                  placeholder="Buscar suplementos..."
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

              <Select value={selectedBenefit} onValueChange={setSelectedBenefit}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Benefício" />
                </SelectTrigger>
                <SelectContent>
                  {benefits.map(benefit => (
                    <SelectItem key={benefit} value={benefit}>
                      {benefit}
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
              Mostrando {filteredProducts.length} produtos
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
                    <Badge 
                      variant="secondary" 
                      className="absolute top-2 left-2 bg-primary text-primary-foreground"
                    >
                      {product.category}
                    </Badge>
                  </div>

                  <div className={`space-y-2 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <p className="text-sm text-muted-foreground">{product.brand}</p>
                    <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
                    <p className="text-xs text-primary font-medium">{product.benefit}</p>
                    
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
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          R$ {product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <Button className={`bg-primary hover:bg-primary-hover transition-colors ${viewMode === 'list' ? 'w-auto' : 'w-full'}`}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Adicionar
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

export default Suplementos;