
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MessageSquare, ShoppingBag, Database, Zap } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: "search",
      title: "Coveo Search",
      icon: Search,
      description: "AI-powered search that delivers the most relevant results from all your content sources.",
      features: [
        "Unified index across all content repositories",
        "Machine learning relevance",
        "Natural language understanding",
        "Personalization based on user behavior",
        "Advanced analytics and insights"
      ]
    },
    {
      id: "service",
      title: "Coveo Service",
      icon: MessageSquare,
      description: "Empower your support teams and customers with intelligent self-service experiences.",
      features: [
        "Case deflection with intelligent suggestions",
        "Agent assist for faster resolution",
        "Knowledge gap identification",
        "Automated content recommendations",
        "Support community integration"
      ]
    },
    {
      id: "commerce",
      title: "Coveo Commerce",
      icon: ShoppingBag,
      description: "Create personalized shopping experiences that drive conversion and loyalty.",
      features: [
        "Personalized product recommendations",
        "Intelligent product discovery",
        "Shopper intent understanding",
        "Merchandising controls",
        "A/B testing capabilities"
      ]
    },
    {
      id: "platform",
      title: "Coveo Platform",
      icon: Database,
      description: "The foundation that powers all Coveo products with enterprise-grade security and scalability.",
      features: [
        "Unified content index across all sources",
        "Enterprise-grade security and compliance",
        "Scalable cloud infrastructure",
        "Extensive APIs and developer tools",
        "Advanced administration and governance"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white to-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-coveo-blue">
                Coveo Product Suite
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Our AI-powered platform delivers intelligent search, recommendations, and personalization 
                capabilities to transform your digital experiences.
              </p>
              <Button size="lg" className="bg-coveo-blue hover:bg-coveo-blue/90">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* Products section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Products</h2>
              <p className="text-muted-foreground">
                Each Coveo product is designed to solve specific business challenges while working seamlessly together.
              </p>
            </div>

            <Tabs defaultValue="search" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {products.map(product => (
                  <TabsTrigger key={product.id} value={product.id} className="flex items-center gap-2">
                    <product.icon className="h-4 w-4" />
                    <span>{product.title.split(" ")[1]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {products.map(product => (
                <TabsContent key={product.id} value={product.id}>
                  <Card>
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <product.icon className="h-6 w-6 text-coveo-blue" />
                        </div>
                        <CardTitle className="text-2xl">{product.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground">{product.description}</p>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-coveo-blue flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex flex-wrap gap-4">
                        <Button className="bg-coveo-blue hover:bg-coveo-blue/90">Learn More</Button>
                        <Button variant="outline">Request a Demo</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Integration section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Works With Your Existing Tools</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Coveo integrates seamlessly with your existing technology stack, enhancing your investments.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm h-20">
                    <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
