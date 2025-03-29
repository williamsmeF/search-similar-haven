
import { useState } from "react";
import PageContainer from "@/components/ui/page-container";
import CTA from "@/components/CTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronDown } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  benefits: string[];
  expanded: boolean;
  onClick: () => void;
}

const SolutionCard = ({ title, description, benefits, expanded, onClick }: SolutionCardProps) => (
  <Card 
    className={`cursor-pointer transition-all duration-300 ${expanded ? 'shadow-lg border-coveo-blue' : 'shadow hover:shadow-md'}`}
    onClick={onClick}
  >
    <CardHeader className="pb-2">
      <div className="flex justify-between items-center">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <div className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
          <ChevronDown className="h-5 w-5 text-coveo-blue" />
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      {expanded && (
        <div className="mt-4 pt-4 border-t">
          <h4 className="font-medium mb-3">Key Benefits:</h4>
          <ul className="space-y-2 mb-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="h-4 w-4 text-coveo-blue shrink-0 mr-2 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <Button className="mt-2 bg-coveo-blue hover:bg-coveo-blue/90">
            Learn More
          </Button>
        </div>
      )}
    </CardContent>
  </Card>
);

const Solutions = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const solutions = [
    {
      title: "Retail & E-commerce",
      description: "Enhance customer experience and drive sales with AI-powered search and personalization.",
      benefits: [
        "Personalized product recommendations",
        "AI-powered merchandising",
        "Unified search across product catalog",
        "Seamless omnichannel experiences"
      ]
    },
    {
      title: "Financial Services",
      description: "Improve customer service and compliance with intelligent search solutions.",
      benefits: [
        "Secure knowledge management",
        "Personalized client portals",
        "Regulatory compliance support",
        "Employee knowledge access"
      ]
    },
    {
      title: "Technology",
      description: "Empower your team with access to the right information at the right time.",
      benefits: [
        "Self-service support portals",
        "Community knowledge sharing",
        "Technical documentation search",
        "Developer resources"
      ]
    },
    {
      title: "Healthcare",
      description: "Improve patient outcomes and streamline operations with AI-driven insights.",
      benefits: [
        "Patient portal optimization",
        "Clinical knowledge management",
        "Provider directory search",
        "Healthcare compliance"
      ]
    },
    {
      title: "Manufacturing",
      description: "Optimize processes and reduce downtime with predictive search and analytics.",
      benefits: [
        "Technical documentation access",
        "Parts catalog search",
        "Maintenance knowledge base",
        "Supply chain optimization"
      ]
    },
    {
      title: "Government",
      description: "Enhance citizen engagement and improve access to public services.",
      benefits: [
        "Citizen self-service portals",
        "Internal knowledge management",
        "Compliance and regulation support",
        "Cross-department collaboration"
      ]
    }
  ];

  const handleCardClick = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <PageContainer fullWidth>
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-white">Our Solutions</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Industry-specific solutions powered by AI to transform your business
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <SolutionCard
                  key={index}
                  title={solution.title}
                  description={solution.description}
                  benefits={solution.benefits}
                  expanded={index === expandedIndex}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold mb-4">Don't see your industry?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our flexible platform can be customized for virtually any industry. Contact us to discuss your specific requirements.
              </p>
              <Button size="lg" className="bg-coveo-blue hover:bg-coveo-blue/90">
                Request a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </PageContainer>
  );
};

export default Solutions;
