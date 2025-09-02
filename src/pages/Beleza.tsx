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
    name: "Protetor Solar FPS 60",
    brand: "La Roche-Posay",
    price: 89.90,
    originalPrice: 99.90,
    rating: 4.9,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&fit=crop",
    category: "Proteção Solar",
    skinType: "Todos os tipos"
  },
  {
    id: 2,
    name: "Sérum Vitamina C",
    brand: "Vichy",
    price: 125.90,
    originalPrice: 149.90,
    rating: 4.8,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1620916297803-be4d72b0edc5?w=300&h=300&fit=crop",
    category: "Skincare",
    skinType: "Pele oleosa"
  },
  {
    id: 3,
    name: "Hidratante Facial",
    brand: "Eucerin",
    price: 67.90,
    originalPrice: 79.90,
    rating: 4.7,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop",
    category: "Hidratantes",
    skinType: "Pele seca"
  },
  {
    id: 4,
    name: "Shampoo Anticaspa",
    brand: "Head & Shoulders",
    price: 24.90,
    originalPrice: 29.90,
    rating: 4.5,
    reviews: 321,
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=300&h=300&fit=crop",
    category: "Cabelos",
    skinType: "Todos os tipos"
  },
  {
    id: 5,
    name: "Base Líquida Matte",
    brand: "Maybelline",
    price: 39.90,
    originalPrice: 45.90,
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop",
    category: "Maquiagem",
    skinType: "Pele oleosa"
  },
  {
    id: 6,
    name: "Creme Anti-idade",
    brand: "Avène",
    price: 158.90,
    originalPrice: 189.90,
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1556229174-f91773f7e8ce?w=300&h=300&fit=crop",
    category: "Anti-idade",
    skinType: "Pele madura"
  }
];

const categories = ["Todos", "Proteção Solar", "Skincare", "Hidratantes", "Cabelos", "Maquiagem", "Anti-idade"];
const skinTypes = ["Todos os tipos", "Pele oleosa", "Pele seca", "Pele mista", "Pele sensível", "Pele madura"];

const Beleza = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedSkinType, setSelectedSkinType] = useState("Todos os tipos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSkinType = selectedSkinType === "Todos os tipos" || product.skinType === selectedSkinType;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSkinType && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Beleza & Cosméticos</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Descubra produtos de beleza de marcas renomadas para realçar sua beleza natural
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
                  placeholder="Buscar produtos de beleza..."
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

              <Select value={selectedSkinType} onValueChange={setSelectedSkinType}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Tipo de pele" />
                </SelectTrigger>
                <SelectContent>
                  {skinTypes.map(type => (
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
                    <p className="text-xs text-primary">{product.skinType}</p>
                    
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

export default Beleza;