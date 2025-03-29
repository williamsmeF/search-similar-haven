
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Set animation visibility after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleBookDemo = () => {
    navigate('/book-demo');
  };

  const handleWatchVideo = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-0 -z-10 bg-gradient-radial from-blue-50 to-transparent opacity-70"></div>
      <div className="absolute top-1/2 right-0 h-96 w-96 -z-10 bg-coveo-blue/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 -z-10 bg-coveo-purple/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
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
              <Button 
                size="lg" 
                className="btn-hover bg-coveo-blue hover:bg-coveo-blue/90 w-full sm:w-auto"
                onClick={handleBookDemo}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-hover w-full sm:w-auto"
                onClick={handleWatchVideo}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className={`relative mt-12 mb-8 rounded-xl overflow-hidden shadow-2xl opacity-0 ${isVisible ? 'animate-fade-in animate-delay-500' : ''}`}>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3" 
              alt="Coveo Platform Dashboard" 
              className="w-full h-auto rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/90 hover:bg-white text-foreground"
                onClick={handleWatchVideo}
              >
                <Play className="mr-2 h-4 w-4" />
                See How It Works
              </Button>
            </div>
          </div>
          
          <div className={`mt-10 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-600' : ''}`}>
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

          <div className={`flex justify-center mt-16 animate-bounce opacity-0 ${isVisible ? 'animate-fade-in animate-delay-700' : ''}`}>
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full"
              onClick={scrollToFeatures}
            >
              <ChevronDown className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full h-[60vh] md:h-[70vh]">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full"
              onClick={handleCloseModal}
            >
              ✕
            </Button>
            <div className="w-full h-full">
              {/* Replace with actual video embed */}
              <div className="w-full h-full bg-black flex items-center justify-center text-white">
                <div className="text-center p-6">
                  <h3 className="text-2xl mb-4">Coveo Product Demo</h3>
                  <p className="text-white/70 mb-8">This is where the embedded video would appear.</p>
                  <Button onClick={handleCloseModal}>Close Preview</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
