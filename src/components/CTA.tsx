
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-r from-coveo-darkBlue to-coveo-blue text-white"
      id="cta"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${inView ? 'opacity-100 animate-scale-up' : 'opacity-0'}`}>
          <span className="inline-block mb-4 px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full backdrop-blur-sm">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Experiences?</h2>
          <p className="text-lg text-white/80 mb-8">
            Join thousands of leading organizations using Coveo to deliver relevant experiences that drive business results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="btn-hover bg-white text-coveo-blue hover:bg-white/90">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="btn-hover border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-white/60">
            No credit card required. Get up and running in minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
