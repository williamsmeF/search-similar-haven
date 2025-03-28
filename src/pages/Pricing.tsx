
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, XIcon, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const [annualBilling, setAnnualBilling] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "For small teams just getting started with AI search.",
      price: annualBilling ? 999 : 119,
      billing: annualBilling ? "/year" : "/month",
      savings: "Save 15%",
      features: [
        { name: "Up to 5 users", included: true },
        { name: "1 million documents indexed", included: true },
        { name: "Basic search analytics", included: true },
        { name: "Standard support", included: true },
        { name: "Personalization", included: false },
        { name: "Advanced relevance tuning", included: false },
        { name: "Custom connectors", included: false },
        { name: "Priority support", included: false }
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      description: "For growing organizations requiring advanced features.",
      price: annualBilling ? 2999 : 349,
      billing: annualBilling ? "/year" : "/month",
      savings: "Save 25%",
      features: [
        { name: "Up to 25 users", included: true },
        { name: "5 million documents indexed", included: true },
        { name: "Advanced search analytics", included: true },
        { name: "Priority support", included: true },
        { name: "Personalization", included: true },
        { name: "Advanced relevance tuning", included: true },
        { name: "Custom connectors", included: false },
        { name: "Dedicated success manager", included: false }
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex search needs.",
      price: "Custom",
      billing: "",
      features: [
        { name: "Unlimited users", included: true },
        { name: "Unlimited documents indexed", included: true },
        { name: "Enterprise analytics suite", included: true },
        { name: "24/7 premium support", included: true },
        { name: "Advanced personalization", included: true },
        { name: "AI-driven relevance tuning", included: true },
        { name: "Custom connectors", included: true },
        { name: "Dedicated success manager", included: true }
      ],
      cta: "Contact Sales",
      popular: false
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
                Transparent Pricing for Every Size
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include a 14-day free trial with no credit card required.
              </p>
              
              <div className="flex items-center justify-center mb-10">
                <span className={`mr-3 ${annualBilling ? 'text-muted-foreground' : 'font-medium'}`}>Monthly</span>
                <Switch
                  checked={annualBilling}
                  onCheckedChange={setAnnualBilling}
                  id="billing-toggle"
                />
                <span className={`ml-3 ${annualBilling ? 'font-medium' : 'text-muted-foreground'}`}>
                  Annual <Badge variant="outline" className="ml-1.5 font-normal">Save up to 25%</Badge>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-10 pb-20 -mt-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative h-full flex flex-col ${plan.popular ? 'border-coveo-blue shadow-lg' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                      <Badge className="bg-coveo-blue">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4 mb-2">
                      {typeof plan.price === 'number' ? (
                        <>
                          <span className="text-4xl font-bold">${plan.price}</span>
                          <span className="text-muted-foreground ml-1">{plan.billing}</span>
                          {plan.savings && (
                            <Badge variant="outline" className="ml-2 text-green-600 bg-green-50 border-green-100">
                              {plan.savings}
                            </Badge>
                          )}
                        </>
                      ) : (
                        <span className="text-4xl font-bold">{plan.price}</span>
                      )}
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          {feature.included ? (
                            <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          ) : (
                            <XIcon className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={!feature.included ? 'text-muted-foreground' : ''}>
                            {feature.name}
                          </span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-5 w-5 ml-1">
                                  <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-60">More information about {feature.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-coveo-blue hover:bg-coveo-blue/90' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "How does the 14-day free trial work?",
                  a: "Your trial gives you full access to all features of your selected plan for 14 days. No credit card is required to start, and you can cancel anytime before the trial ends without being charged."
                },
                {
                  q: "Can I change plans later?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be immediately available. If you downgrade, the change will take effect at the end of your current billing cycle."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. For Enterprise plans, we also offer invoicing options."
                },
                {
                  q: "Is there a setup fee?",
                  a: "No, there are no setup fees for any of our plans. You only pay the advertised price."
                },
                {
                  q: "Do you offer discounts for nonprofits or educational institutions?",
                  a: "Yes, we offer special pricing for qualified nonprofit organizations and educational institutions. Please contact our sales team for more information."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Still have questions about our pricing?</p>
              <Button size="lg">Contact Our Sales Team</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
