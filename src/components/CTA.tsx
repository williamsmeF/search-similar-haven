
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const navigate = useNavigate();

  const handleBookDemo = () => {
    navigate('/book-demo');
  };
  
  return (
    <section className="bg-coveo-purple py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Transform Your Digital Experience Today
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Join the thousands of companies using Coveo to deliver 
          exceptional search experiences and drive meaningful business results.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={handleBookDemo}
            size="lg" 
            className="bg-white text-coveo-purple hover:bg-white/90 font-medium px-6"
          >
            Book a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/10 font-medium px-6"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
