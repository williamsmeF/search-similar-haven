
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setAnimate(true);
      }, 100);
    }
  }, [inView]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <section 
      ref={ref}
      id="newsletter" 
      className="py-20 bg-coveo-blue relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 h-64 w-64 -z-10 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 -z-10 bg-white/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block mb-4 px-4 py-1.5 bg-white/20 text-white text-sm font-medium rounded-full">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Get the latest insights, tips, and updates on AI-powered experiences delivered directly to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-4 max-w-md mx-auto transition-all duration-700 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white/10 text-white border-white/20 placeholder:text-white/60 focus:border-white"
            />
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-white text-coveo-blue hover:bg-white/90"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-sm text-white/60 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
