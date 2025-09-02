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
    name: "Fralda Descartável RN",
    brand: "Pampers",
    price: 89.90,
    originalPrice: 99.90,
    rating: 4.9,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=300&h=300&fit=crop",
    category: "Fraldas",
    ageGroup: "Recém-nascido"
  },
  {
    id: 2,
    name: "Pomada para Assadura",
    brand: "Hipoglós",
    price: 24.90,
    originalPrice: 29.90,
    rating: 4.8,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=300&h=300&fit=crop",
    category: "Cuidados",
    ageGroup: "0-12 meses"
  },
  {
    id: 3,
    name: "Shampoo Infantil",
    brand: "Johnson's Baby",
    price: 18.90,
    originalPrice: 22.90,
    rating: 4.7,
    reviews: 298,
    image: "https://images.unsplash.com/photo-1563040340-d6c3c0b5d1a2?w=300&h=300&fit=crop",
    category: "Higiene",
    ageGroup: "0-24 meses"
  },
  {
    id: 4,
    name: "Mamadeira Anticólica",
    brand: "MAM",
    price: 45.90,
    originalPrice: 52.90,
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1516627145497-ae4c8e3f5c86?w=300&h=300&fit=crop",
    category: "Alimentação",
    ageGroup: "0-6 meses"
  },
  {
    id: 5,
    name: "Protetor Solar Infantil",
    brand: "Episol",
    price: 67.90,
    originalPrice: 79.90,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&fit=crop",
    category: "Proteção",
    ageGroup: "6+ meses"
  },
  {
    id: 6,
    name: "Termômetro Digital",
    brand: "G-Tech",
    price: 35.90,
    originalPrice: 42.90,
    rating: 4.5,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
    category: "Saúde",
    ageGroup: "Todas as idades"
  }
];

const categories = ["Todos", "Fraldas", "Cuidados", "Higiene", "Alimentação", "Proteção", "Saúde"];
const ageGroups = ["Todas as idades", "Recém-nascido", "0-6 meses", "0-12 meses", "0-24 meses", "6+ meses"];

const Bebe = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("Todas as idades");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesAgeGroup = selectedAgeGroup === "Todas as idades" || product.ageGroup === selectedAgeGroup;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesAgeGroup && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bebê & Infantil</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Produtos seguros e confiáveis para o cuidado e bem-estar do seu bebê
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
                  placeholder="Buscar produtos para bebê..."
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

              <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Faixa etária" />
                </SelectTrigger>
                <SelectContent>
                  {ageGroups.map(age => (
                    <SelectItem key={age} value={age}>
                      {age}
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
                    <p className="text-xs text-primary">{product.ageGroup}</p>
                    
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

export default Bebe;