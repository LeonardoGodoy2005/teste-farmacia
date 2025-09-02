import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Vitamina D3 2000 UI",
    brand: "VitaMax",
    price: 29.90,
    originalPrice: 35.90,
    rating: 4.8,
    reviews: 234,
    discount: 15,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop&crop=center",
    badge: "Mais Vendido"
  },
  {
    id: 2,
    name: "Protetor Solar FPS 60",
    brand: "SunCare",
    price: 42.90,
    originalPrice: 49.90,
    rating: 4.9,
    reviews: 189,
    discount: 14,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&fit=crop&crop=center",
    badge: "Oferta"
  },
  {
    id: 3,
    name: "Omega 3 1000mg",
    brand: "HealthPlus",
    price: 67.90,
    originalPrice: 79.90,
    rating: 4.7,
    reviews: 156,
    discount: 15,
    image: "https://images.unsplash.com/photo-1559059922-4f14146ba8b6?w=300&h=300&fit=crop&crop=center",
    badge: "Premium"
  },
  {
    id: 4,
    name: "Shampoo Anticaspa",
    brand: "HairCare",
    price: 24.90,
    originalPrice: 29.90,
    rating: 4.6,
    reviews: 267,
    discount: 17,
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=300&h=300&fit=crop&crop=center",
    badge: "Popular"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Produtos em Destaque</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Os produtos mais procurados pelos nossos clientes com os melhores preços
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-white border-0">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white shadow-sm"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  {product.discount > 0 && (
                    <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
                      -{product.discount}%
                    </Badge>
                  )}
                  <Badge 
                    variant="secondary" 
                    className="absolute bottom-2 left-2 bg-primary text-primary-foreground"
                  >
                    {product.badge}
                  </Badge>
                </div>

                <div className="space-y-2">
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

                  <Button className="w-full bg-primary hover:bg-primary-hover transition-colors">
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
  );
};

export default FeaturedProducts;