
import PageContainer from "@/components/ui/page-container";
import CTA from "@/components/CTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SolutionCardProps {
  title: string;
  description: string;
  benefits: string[];
  expanded: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

const SolutionCard = ({ title, description, benefits, expanded, onClick, icon }: SolutionCardProps) => (
  <Card 
    className={`cursor-pointer transition-all duration-300 ${expanded ? 'shadow-lg border-coveo-blue' : 'shadow hover:shadow-md'}`}
    onClick={onClick}
  >
    <CardHeader className="pb-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-coveo-blue/10">
              {icon}
            </div>
          )}
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </div>
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
          <div className="flex space-x-3 mt-3">
            <Button className="bg-coveo-blue hover:bg-coveo-blue/90">
              Learn More
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <span>Case Studies</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </CardContent>
  </Card>
);

interface CaseStudyProps {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
}

const CaseStudy = ({ company, industry, challenge, solution, results }: CaseStudyProps) => (
  <Card className="animate-fade-in">
    <CardHeader>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <CardTitle>{company}</CardTitle>
        <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm">
          {industry}
        </span>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-lg mb-2">Challenge</h4>
          <p className="text-muted-foreground">{challenge}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-lg mb-2">Solution</h4>
          <p className="text-muted-foreground">{solution}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-lg mb-2">Results</h4>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="h-4 w-4 text-coveo-blue shrink-0 mr-2 mt-0.5" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Solutions = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState("solutions");

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

  const caseStudies = [
    {
      company: "GlobalRetail Inc.",
      industry: "Retail",
      challenge: "Struggling with low conversion rates and high cart abandonment due to poor product discovery.",
      solution: "Implemented Coveo's AI-powered search and recommendation engine across all digital touchpoints.",
      results: [
        "35% increase in conversion rates",
        "28% higher average order value",
        "42% reduction in cart abandonment",
        "Improved customer satisfaction scores by 40%"
      ]
    },
    {
      company: "SecureBank Financial",
      industry: "Financial Services",
      challenge: "Customer service representatives spending too much time searching for information across disparate systems.",
      solution: "Deployed Coveo's unified search platform with AI-powered recommendations for support agents.",
      results: [
        "65% reduction in case resolution times",
        "30% increase in first-call resolution rates",
        "25% decrease in training time for new agents",
        "Improved compliance with financial regulations"
      ]
    },
    {
      company: "TechInnovate Solutions",
      industry: "Technology",
      challenge: "Knowledge base content was difficult to navigate, leading to low self-service rates.",
      solution: "Implemented Coveo's intelligent search with machine learning to personalize the support experience.",
      results: [
        "50% increase in self-service resolution rates",
        "40% reduction in support ticket volume",
        "Improved customer satisfaction with support by 45%",
        "Decreased cost per resolution by 35%"
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
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full max-w-md mx-auto mb-8 grid grid-cols-2 h-auto">
                <TabsTrigger value="solutions" className="py-3">Industry Solutions</TabsTrigger>
                <TabsTrigger value="cases" className="py-3">Case Studies</TabsTrigger>
              </TabsList>
              
              <TabsContent value="solutions" className="space-y-6 animate-fade-in">
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
              </TabsContent>
              
              <TabsContent value="cases" className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {caseStudies.map((study, index) => (
                    <CaseStudy 
                      key={index}
                      company={study.company}
                      industry={study.industry}
                      challenge={study.challenge}
                      solution={study.solution}
                      results={study.results}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
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
