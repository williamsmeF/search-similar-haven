
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon, Building2, LockIcon, ShoppingCart, Users, BarChart3 } from "lucide-react";

const Solutions = () => {
  const industries = [
    {
      title: "Retail",
      description: "Deliver personalized shopping experiences and boost conversion rates with AI-powered search and recommendations.",
      icon: ShoppingCart,
      useCases: ["Product Discovery", "Personalization", "Customer Support"]
    },
    {
      title: "Financial Services",
      description: "Improve customer service and employee productivity with intelligent search across all your content repositories.",
      icon: BarChart3, 
      useCases: ["Risk Management", "Compliance", "Customer Service"]
    },
    {
      title: "Technology",
      description: "Unify your knowledge base and provide self-service support to reduce tickets and improve resolution times.",
      icon: LockIcon,
      useCases: ["Knowledge Management", "Support Portal", "Developer Portal"]
    },
    {
      title: "Healthcare",
      description: "Connect patients and providers to relevant information when they need it most.",
      icon: Users,
      useCases: ["Patient Portal", "Provider Resources", "Medical Research"]
    },
    {
      title: "Manufacturing",
      description: "Streamline operations and support your workforce with easy access to critical information.",
      icon: Building2,
      useCases: ["Quality Control", "Equipment Maintenance", "Process Documentation"]
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
                Industry-Specific Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
                Coveo's AI-powered platform adapts to the unique challenges of your industry, 
                driving meaningful outcomes that matter to your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-coveo-blue hover:bg-coveo-blue/90">
                  Get a Demo
                </Button>
                <Button size="lg" variant="outline">
                  Explore Use Cases
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industries section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Solutions by Industry</h2>
              <p className="text-muted-foreground">
                Discover how Coveo addresses the unique challenges faced by different industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="h-full transition-shadow hover:shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <industry.icon className="h-6 w-6 text-coveo-blue" />
                    </div>
                    <CardTitle>{industry.title}</CardTitle>
                    <CardDescription className="mt-2">{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-sm font-semibold mb-2">Common Use Cases:</h4>
                    <ul className="space-y-2">
                      {industry.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="mt-4 text-coveo-blue hover:text-coveo-blue/90 p-0">
                      Learn more →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-coveo-blue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
              <p className="text-xl mb-10 opacity-90">
                Let our experts show you how Coveo can drive outcomes for your industry.
              </p>
              <Button size="lg" className="bg-white text-coveo-blue hover:bg-white/90">
                Request a Custom Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
