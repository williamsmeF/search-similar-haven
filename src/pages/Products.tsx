
import PageContainer from "@/components/ui/page-container";
import CTA from "@/components/CTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Users, ShoppingCart, Database } from "lucide-react";

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ProductCard = ({ icon, title, description, features }: ProductCardProps) => (
  <Card className="transition-all duration-300 hover:shadow-lg">
    <CardHeader className="pb-2">
      <div className="bg-coveo-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <CardTitle className="text-2xl font-semibold mb-2">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-coveo-blue mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="outline">Learn More</Button>
    </CardContent>
  </Card>
);

const Products = () => {
  const products = [
    {
      icon: <Search className="h-6 w-6 text-coveo-blue" />,
      title: "Search",
      description: "Deliver relevant and personalized search experiences across all digital touchpoints.",
      features: [
        "Intelligent ranking algorithms",
        "Natural language processing",
        "Content recommendations",
        "Analytics and insights"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-coveo-blue" />,
      title: "Service",
      description: "Empower agents and customers with AI-powered knowledge and self-service tools.",
      features: [
        "Case deflection",
        "Agent assistance", 
        "Knowledge management",
        "Self-service portals"
      ]
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-coveo-blue" />,
      title: "Commerce",
      description: "Drive conversion and increase average order value with personalized product discovery.",
      features: [
        "Product recommendations",
        "Personalized shopping",
        "Catalog search",
        "Conversion optimization"
      ]
    },
    {
      icon: <Database className="h-6 w-6 text-coveo-blue" />,
      title: "Platform",
      description: "A unified AI platform for search, personalization, and recommendations.",
      features: [
        "AI/ML capabilities",
        "Unified customer profiles",
        "Enterprise integrations",
        "Security and compliance"
      ]
    }
  ];

  return (
    <PageContainer fullWidth>
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-white">Our Products</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover Coveo's powerful AI-driven search and personalization solutions
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  features={product.features}
                />
              ))}
            </div>
            
            <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-3">Ready to transform your digital experience?</h3>
                  <p className="text-muted-foreground">
                    Our team of experts is ready to help you implement the perfect Coveo solution for your business needs.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <Button size="lg" className="bg-coveo-blue hover:bg-coveo-blue/90">
                    Schedule a Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </PageContainer>
  );
};

export default Products;
