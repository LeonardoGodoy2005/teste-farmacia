import { useState } from "react";
import { Search, Filter, Grid, List, Star, ShoppingCart } from "lucide-react";
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
    name: "Dipirona Sódica 500mg",
    brand: "Medley",
    price: 12.90,
    originalPrice: 15.90,
    rating: 4.8,
    reviews: 324,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
    prescription: false,
    category: "Analgésicos"
  },
  {
    id: 2,
    name: "Paracetamol 750mg",
    brand: "EMS",
    price: 8.90,
    originalPrice: 11.90,
    rating: 4.7,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1559059922-4f14146ba8b6?w=300&h=300&fit=crop",
    prescription: false,
    category: "Analgésicos"
  },
  {
    id: 3,
    name: "Omeprazol 20mg",
    brand: "Eurofarma",
    price: 18.90,
    originalPrice: 22.90,
    rating: 4.9,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=300&fit=crop",
    prescription: true,
    category: "Digestivo"
  },
  {
    id: 4,
    name: "Losartana 50mg",
    brand: "Sandoz",
    price: 25.90,
    originalPrice: 29.90,
    rating: 4.6,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=300&h=300&fit=crop",
    prescription: true,
    category: "Cardiovascular"
  },
  {
    id: 5,
    name: "Ibuprofeno 600mg",
    brand: "Sanofi",
    price: 15.90,
    originalPrice: 19.90,
    rating: 4.5,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop",
    prescription: false,
    category: "Anti-inflamatórios"
  },
  {
    id: 6,
    name: "Amoxicilina 500mg",
    brand: "Eurofarma",
    price: 32.90,
    originalPrice: 38.90,
    rating: 4.8,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=300&h=300&fit=crop",
    prescription: true,
    category: "Antibióticos"
  }
];

const categories = ["Todos", "Analgésicos", "Anti-inflamatórios", "Digestivo", "Cardiovascular", "Antibióticos"];

const Medicamentos = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Medicamentos</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Encontre os medicamentos que você precisa com os melhores preços e entrega rápida
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar medicamentos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
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
                    {product.prescription && (
                      <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
                        Receita
                      </Badge>
                    )}
                    <Badge 
                      variant="secondary" 
                      className="absolute top-2 right-2 bg-primary text-primary-foreground"
                    >
                      {product.category}
                    </Badge>
                  </div>

                  <div className={`space-y-2 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <p className="text-sm text-muted-foreground">{product.brand}</p>
                    <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
                    
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

export default Medicamentos;