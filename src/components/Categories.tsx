import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import prescriptionIcon from "@/assets/prescription-icon.jpg";
import beautyIcon from "@/assets/beauty-icon.jpg";
import babyCareIcon from "@/assets/baby-care-icon.jpg";

const categories = [
  {
    id: 1,
    name: "Medicamentos",
    description: "Prescrições e medicamentos sem receita",
    icon: prescriptionIcon,
    color: "bg-primary/10 hover:bg-primary/20"
  },
  {
    id: 2,
    name: "Beleza & Cosméticos",
    description: "Produtos para cuidados pessoais",
    icon: beautyIcon,
    color: "bg-secondary/10 hover:bg-secondary/20"
  },
  {
    id: 3,
    name: "Bebê & Infantil",
    description: "Cuidados especiais para bebês",
    icon: babyCareIcon,
    color: "bg-primary/10 hover:bg-primary/20"
  },
  {
    id: 4,
    name: "Suplementos",
    description: "Vitaminas e suplementos alimentares",
    icon: prescriptionIcon,
    color: "bg-secondary/10 hover:bg-secondary/20"
  },
  {
    id: 5,
    name: "Higiene",
    description: "Produtos de higiene pessoal",
    icon: beautyIcon,
    color: "bg-primary/10 hover:bg-primary/20"
  },
  {
    id: 6,
    name: "Dermocosméticos",
    description: "Produtos especializados para pele",
    icon: babyCareIcon,
    color: "bg-secondary/10 hover:bg-secondary/20"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Explore Nossas Categorias</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encontre tudo o que você precisa para sua saúde e bem-estar em nossas categorias especializadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className={`group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:scale-105 ${category.color} border-0`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:shadow-turquoise transition-all duration-300">
                  <img 
                    src={category.icon} 
                    alt={category.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Ver Produtos
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;