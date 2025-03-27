
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Implementing Coveo transformed how our customers find information. The AI-powered search has increased customer satisfaction by 35% and reduced support calls significantly.",
    author: "Sarah Johnson",
    title: "VP of Digital Experience, Global Retail",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&dpr=2&q=80"
  },
  {
    quote: "The personalization capabilities are game-changing. We've seen a 40% increase in conversion rate and a 25% increase in average order value since deploying Coveo.",
    author: "Michael Chen",
    title: "Chief Digital Officer, E-commerce Leader",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&dpr=2&q=80"
  },
  {
    quote: "Our employees can now find critical information in seconds instead of minutes. Coveo has significantly improved productivity and knowledge sharing across our organization.",
    author: "Patricia Rodriguez",
    title: "Chief Knowledge Officer, Financial Services",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&dpr=2&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={ref} 
      className="py-20 relative overflow-hidden"
      id="testimonials"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 h-64 w-64 -z-10 bg-coveo-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 h-64 w-64 -z-10 bg-coveo-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block mb-4 px-4 py-1.5 bg-coveo-gray text-coveo-blue text-sm font-medium rounded-full">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            See how organizations around the world are transforming their digital experiences with Coveo.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto relative transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <div className="glass-card rounded-2xl p-8 md:p-10 relative">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-coveo-blue/10" />
            
            <div className="pt-8 pb-4">
              <p className="text-xl md:text-2xl font-medium text-balance">
                "{testimonials[currentIndex].quote}"
              </p>
            </div>
            
            <div className="flex items-center mt-6">
              <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].author}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-border hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-coveo-blue' : 'bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-border hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
