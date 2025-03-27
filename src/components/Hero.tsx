
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set animation visibility after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-0 -z-10 bg-gradient-radial from-blue-50 to-transparent opacity-70"></div>
      <div className="absolute top-1/2 right-0 h-96 w-96 -z-10 bg-coveo-blue/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 -z-10 bg-coveo-purple/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className={`inline-block mb-4 px-4 py-1.5 bg-coveo-gray text-coveo-blue text-sm font-medium rounded-full opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
            Revolutionizing Digital Experiences
          </span>
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-200' : ''}`}>
            Transform How People
            <span className="text-coveo-blue relative inline-block mx-2">
              Discover
              <svg className="absolute bottom-0 left-0 w-full h-[6px] -mb-1 text-coveo-blue/30" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,5 C25,2 75,2 100,5 L100,8 L0,8 Z" fill="currentColor" />
              </svg>
            </span>
            Information
          </h1>
          
          <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-300' : ''}`}>
            Harness the power of AI to deliver relevant content, product recommendations, and support to every customer and employee, in every digital experience.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-400' : ''}`}>
            <Button size="lg" className="btn-hover bg-coveo-blue hover:bg-coveo-blue/90 w-full sm:w-auto">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="btn-hover w-full sm:w-auto">
              Book a Demo
            </Button>
          </div>
          
          <div className={`mt-10 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-500' : ''}`}>
            <p className="text-sm text-muted-foreground mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {/* Logo placeholders */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 w-24 bg-muted-foreground/10 rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
