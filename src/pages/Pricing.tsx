
import { useState } from "react";
import PageContainer from "@/components/ui/page-container";
import CTA from "@/components/CTA";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  popular = false, 
  buttonText = "Get Started",
  annualPrice,
  featureTooltips = {}
}: { 
  title: string; 
  price: string;
  annualPrice?: string;
  description: string; 
  features: string[];
  popular?: boolean;
  buttonText?: string;
  featureTooltips?: Record<string, string>;
}) => {
  return (
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
          {annualPrice && (
            <div className="text-sm text-muted-foreground mt-1">
              {annualPrice}/year (save 20%)
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-coveo-blue shrink-0 mr-2 mt-0.5" />
              <span className="flex items-center">
                {feature}
                {featureTooltips[feature] && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="ml-1 h-4 w-4 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>{featureTooltips[feature]}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${popular ? 'bg-coveo-blue hover:bg-coveo-blue/90' : ''}`}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can easily upgrade your plan at any time. Your new features will be available immediately, and we'll prorate the cost difference."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing for qualified non-profit organizations. Please contact our sales team for more information."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, as well as wire transfers for annual plans. For enterprise plans, we can also accommodate purchase orders."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial on our Professional plan so you can experience the full power of Coveo before making a commitment."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. For monthly plans, billing stops at the end of the current billing cycle."
    },
    {
      question: "Do you offer implementation services?",
      answer: "Yes, we offer professional implementation services to help you get the most out of your Coveo investment. These services are included in our Enterprise plan."
    }
  ];

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">{faq.question}</h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  
  const pricingPlans = [
    {
      title: "Starter",
      price: billingCycle === "monthly" ? "$99" : "$79",
      annualPrice: billingCycle === "annual" ? "$948" : undefined,
      description: "Perfect for small businesses just getting started",
      features: [
        "Basic search functionality",
        "Up to 10,000 documents",
        "5 user accounts",
        "Email support",
        "Standard analytics"
      ],
      featureTooltips: {
        "Standard analytics": "Includes basic search metrics and user behavior tracking"
      }
    },
    {
      title: "Professional",
      price: billingCycle === "monthly" ? "$299" : "$239",
      annualPrice: billingCycle === "annual" ? "$2,868" : undefined,
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
      featureTooltips: {
        "AI recommendations": "Machine learning-powered content recommendations based on user behavior",
        "Custom integrations": "Connect with your existing tech stack using our API"
      },
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
      featureTooltips: {
        "Advanced AI and ML features": "Includes all our machine learning capabilities, custom models, and advanced personalization",
        "Service level agreement": "Guaranteed uptime and support response times"
      },
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
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-full inline-flex">
                <button 
                  onClick={() => setBillingCycle("monthly")} 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === "monthly" ? "bg-white shadow-sm" : "text-muted-foreground"}`}
                >
                  Monthly Billing
                </button>
                <button 
                  onClick={() => setBillingCycle("annual")} 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === "annual" ? "bg-white shadow-sm" : "text-muted-foreground"}`}
                >
                  Annual Billing <span className="text-green-600 font-medium">Save 20%</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingTier 
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  annualPrice={plan.annualPrice}
                  description={plan.description}
                  features={plan.features}
                  popular={plan.popular}
                  buttonText={plan.buttonText}
                  featureTooltips={plan.featureTooltips}
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
            
            <FAQ />
          </div>
        </div>
      </div>
      <CTA />
    </PageContainer>
  );
};

export default Pricing;
