
import { useState } from "react";
import PageContainer from "@/components/ui/page-container";
import CTA from "@/components/CTA";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Users, ShoppingCart, Database, ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  cta?: string;
  useCase?: string;
}

const ProductCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  price, 
  cta = "Learn More",
  useCase 
}: ProductCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="transition-all duration-300 hover:shadow-lg animate-fade-in">
      <CardHeader className="pb-2">
        <div className="bg-coveo-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <div className="flex justify-between items-start">
          <CardTitle className="text-2xl font-semibold mb-2">{title}</CardTitle>
          <div className="bg-coveo-purple/10 px-3 py-1 rounded-full text-coveo-purple font-medium">
            {price}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-coveo-blue mr-2 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {useCase && (
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-4">
            <CollapsibleTrigger className="flex items-center text-coveo-blue hover:text-coveo-blue/80 font-medium text-sm w-full justify-between">
              <span>View Real-World Use Case</span>
              {isOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 bg-gray-50 p-3 rounded-md text-sm">
              {useCase}
            </CollapsibleContent>
          </Collapsible>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          {cta} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

interface ComparisonTableProps {
  products: {
    name: string;
    features: Record<string, boolean | string>;
  }[];
}

const ComparisonTable = ({ products }: ComparisonTableProps) => {
  const allFeatures = new Set<string>();
  products.forEach(product => {
    Object.keys(product.features).forEach(feature => {
      allFeatures.add(feature);
    });
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-3 border text-left">Feature</th>
            {products.map((product, index) => (
              <th key={index} className="p-3 border text-center">{product.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from(allFeatures).map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="p-3 border font-medium">{feature}</td>
              {products.map((product, productIndex) => (
                <td key={productIndex} className="p-3 border text-center">
                  {typeof product.features[feature] === "boolean" ? (
                    product.features[feature] ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <span className="text-gray-300">—</span>
                    )
                  ) : (
                    <span>{product.features[feature]}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProductShowcase = () => {
  const navigate = useNavigate();
  
  const handlePricingClick = () => {
    navigate('/pricing');
  };

  const searchProduct = {
    icon: <Search className="h-6 w-6 text-coveo-blue" />,
    title: "Search",
    description: "Deliver relevant and personalized search experiences across all digital touchpoints.",
    features: [
      "Intelligent ranking algorithms",
      "Natural language processing",
      "Content recommendations",
      "Analytics and insights"
    ],
    price: "From $99/mo",
    useCase: "A leading e-commerce company implemented Coveo Search and saw a 25% increase in conversion rates and 15% higher average order value due to more relevant search results."
  };

  const serviceProduct = {
    icon: <Users className="h-6 w-6 text-coveo-blue" />,
    title: "Service",
    description: "Empower agents and customers with AI-powered knowledge and self-service tools.",
    features: [
      "Case deflection",
      "Agent assistance", 
      "Knowledge management",
      "Self-service portals"
    ],
    price: "From $199/mo",
    useCase: "A global telecommunications provider reduced support costs by 30% after implementing Coveo's self-service solutions, while improving customer satisfaction scores by 40%."
  };

  const commerceProduct = {
    icon: <ShoppingCart className="h-6 w-6 text-coveo-blue" />,
    title: "Commerce",
    description: "Drive conversion and increase average order value with personalized product discovery.",
    features: [
      "Product recommendations",
      "Personalized shopping",
      "Catalog search",
      "Conversion optimization"
    ],
    price: "From $299/mo",
    useCase: "A fashion retailer implemented Coveo Commerce and experienced a 35% increase in average basket size through AI-powered product recommendations tailored to each shopper."
  };

  const platformProduct = {
    icon: <Database className="h-6 w-6 text-coveo-blue" />,
    title: "Platform",
    description: "A unified AI platform for search, personalization, and recommendations.",
    features: [
      "AI/ML capabilities",
      "Unified customer profiles",
      "Enterprise integrations",
      "Security and compliance"
    ],
    price: "Custom pricing",
    useCase: "A Fortune 500 company consolidated multiple search and recommendation systems onto Coveo's platform, saving $2M annually in operational costs while improving user experiences across all digital properties."
  };

  const products = [searchProduct, serviceProduct, commerceProduct, platformProduct];

  const comparisonData = [
    {
      name: "Search",
      features: {
        "AI Ranking": true,
        "Natural Language Processing": true,
        "Multi-language Support": true,
        "Content Recommendations": true,
        "Analytics Dashboard": true,
        "Mobile Support": true,
        "Enterprise Support": "8/5",
        "Custom Development": false
      }
    },
    {
      name: "Service",
      features: {
        "AI Ranking": true,
        "Natural Language Processing": true,
        "Multi-language Support": true,
        "Content Recommendations": true,
        "Analytics Dashboard": true,
        "Mobile Support": true,
        "Enterprise Support": "24/7",
        "Custom Development": false
      }
    },
    {
      name: "Commerce",
      features: {
        "AI Ranking": true,
        "Natural Language Processing": true,
        "Multi-language Support": true,
        "Content Recommendations": true,
        "Analytics Dashboard": true,
        "Mobile Support": true,
        "Enterprise Support": "24/7",
        "Custom Development": true
      }
    },
    {
      name: "Platform",
      features: {
        "AI Ranking": true,
        "Natural Language Processing": true,
        "Multi-language Support": true,
        "Content Recommendations": true,
        "Analytics Dashboard": true,
        "Mobile Support": true,
        "Enterprise Support": "24/7",
        "Custom Development": true
      }
    }
  ];

  return (
    <Tabs defaultValue="products" className="w-full">
      <TabsList className="w-full max-w-md mx-auto mb-8 grid grid-cols-3 h-auto bg-white/20 backdrop-blur-sm">
        <TabsTrigger value="products" className="py-3">Products</TabsTrigger>
        <TabsTrigger value="compare" className="py-3">Compare</TabsTrigger>
        <TabsTrigger value="showcase" className="py-3">Showcase</TabsTrigger>
      </TabsList>
      
      <TabsContent value="products" className="space-y-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              features={product.features}
              price={product.price}
              useCase={product.useCase}
            />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="compare" className="animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle>Product Comparison</CardTitle>
            <CardDescription>
              Compare features across our product offerings to find the right solution for your needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ComparisonTable products={comparisonData} />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handlePricingClick} className="bg-coveo-blue hover:bg-coveo-blue/90">
              View Pricing
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="showcase" className="animate-fade-in py-6">
        <Card>
          <CardHeader>
            <CardTitle>Product Showcase</CardTitle>
            <CardDescription>
              Explore our products through interactive demos and case studies.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full">
              <CarouselContent>
                {products.map((product, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="bg-coveo-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                            {product.icon}
                          </div>
                          <CardTitle>{product.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">{product.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" className="w-full">Learn More</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

const Products = () => {
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
            <ProductShowcase />
            
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
