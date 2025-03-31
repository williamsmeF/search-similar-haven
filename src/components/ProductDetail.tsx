
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from "react-router-dom";

interface ProductDetailProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  price: string;
  useCase?: string;
}

const ProductDetail = ({
  id,
  icon,
  title,
  description,
  features,
  benefits,
  price,
  useCase
}: ProductDetailProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id={id} className="py-12 scroll-mt-24">
      <SectionHeader
        title={title}
        subtitle={description}
        align="left"
        className="mb-8"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 transition-all duration-300 hover:shadow-lg animate-fade-in">
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
            <p className="text-muted-foreground mb-6">{description}</p>
            
            <h4 className="font-medium mb-3">Key Features:</h4>
            <ul className="space-y-2 mb-6 grid grid-cols-1 md:grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-4 w-4 text-coveo-blue mr-2 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            {useCase && (
              <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-6 bg-gray-50 rounded-lg p-4">
                <CollapsibleTrigger className="flex items-center text-coveo-blue hover:text-coveo-blue/80 font-medium text-sm w-full justify-between">
                  <span>View Real-World Use Case</span>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 text-sm pt-3">
                  {useCase}
                </CollapsibleContent>
              </Collapsible>
            )}
          </CardContent>
          
          <CardFooter>
            <Button asChild className="bg-coveo-blue hover:bg-coveo-blue/90">
              <Link to="/book-demo">
                Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Key Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link to="/pricing">
                View Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default ProductDetail;
