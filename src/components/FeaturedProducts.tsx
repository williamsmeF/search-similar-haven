
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Coveo Search",
    description: "AI-powered search that delivers relevant results across all digital channels.",
    imageUrl: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$999/mo",
    features: ["Content unification", "Machine learning", "Analytics dashboard"],
    url: "/products#search"
  },
  {
    id: 2,
    name: "Coveo Commerce",
    description: "Personalized product recommendations that increase conversions and average order value.",
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$1,299/mo",
    features: ["Product recommendations", "Behavioral analytics", "A/B testing"],
    url: "/products#commerce"
  },
  {
    id: 3,
    name: "Coveo Service",
    description: "Help customers and agents instantly find the answers they need.",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$899/mo",
    features: ["Case deflection", "Agent assist", "Knowledge management"],
    url: "/products#service"
  }
];

const FeaturedProducts = () => {
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

  return (
    <section 
      ref={ref}
      id="featured-products" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 h-80 w-80 -z-10 bg-coveo-blue/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block mb-4 px-4 py-1.5 bg-coveo-gray text-coveo-purple text-sm font-medium rounded-full">
            Featured Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Most Popular Products</h2>
          <p className="text-lg text-muted-foreground">
            Discover the solutions that are helping leading companies transform their digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={product.id} className={`border-0 shadow-lg overflow-hidden bg-white transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${index * 100 + 200}ms` }}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <span className="text-coveo-blue font-medium">{product.price}</span>
                </div>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-coveo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2 pb-6">
                <Button asChild className="w-full bg-coveo-blue hover:bg-coveo-blue/90">
                  <Link to={product.url}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className={`flex justify-center mt-12 transition-all duration-700 delay-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <Button asChild variant="outline" size="lg">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
