
import PageContainer from "@/components/ui/page-container";
import CTA from "@/components/CTA";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  popular = false, 
  buttonText = "Get Started" 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[];
  popular?: boolean;
  buttonText?: string;
}) => (
  <Card className={`flex flex-col h-full transition-all duration-200 ${popular ? 'shadow-xl scale-105 border-coveo-blue' : 'shadow-md hover:shadow-lg'}`}>
    <CardHeader>
      <div className="flex justify-between items-start">
        <div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="mt-2">{description}</CardDescription>
        </div>
        {popular && (
          <span className="bg-coveo-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>
      <div className="mt-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-muted-foreground ml-1">/month</span>}
      </div>
    </CardHeader>
    <CardContent className="flex-grow flex flex-col">
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-coveo-blue shrink-0 mr-2 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full mt-4 ${popular ? 'bg-coveo-blue hover:bg-coveo-blue/90' : ''}`}>
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$99",
      description: "Perfect for small businesses just getting started",
      features: [
        "Basic search functionality",
        "Up to 10,000 documents",
        "5 user accounts",
        "Email support",
        "Standard analytics"
      ]
    },
    {
      title: "Professional",
      price: "$299",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Advanced search capabilities",
        "Up to 100,000 documents",
        "25 user accounts",
        "Priority support",
        "Advanced analytics",
        "AI recommendations",
        "Custom integrations"
      ],
      popular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited search capabilities",
        "Unlimited documents",
        "Unlimited user accounts",
        "24/7 dedicated support",
        "Enterprise-grade analytics",
        "Advanced AI and ML features",
        "Custom development",
        "Dedicated account manager",
        "Service level agreement"
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <PageContainer fullWidth>
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-white">Pricing Plans</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingTier 
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  popular={plan.popular}
                  buttonText={plan.buttonText}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold mb-4">Need a custom solution?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We offer tailored pricing for unique business requirements. Our team will work with you to create a custom plan that meets your specific needs.
              </p>
              <Button variant="outline" size="lg">
                Contact Our Sales Team
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </PageContainer>
  );
};

export default Pricing;
