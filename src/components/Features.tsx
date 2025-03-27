
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Search, ShoppingCart, MessageSquare, Layers } from 'lucide-react';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className={`glass-card rounded-xl p-6 transition-all duration-500 opacity-0 transform translate-y-8 ${inView ? 'opacity-100 translate-y-0' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="rounded-full bg-coveo-gray p-3 w-12 h-12 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative overflow-hidden" id="features">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 h-80 w-80 -z-10 bg-coveo-purple/5 rounded-full blur-3xl transform translate-x-1/2"></div>
      <div className="absolute bottom-1/4 left-0 h-80 w-80 -z-10 bg-coveo-blue/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref} 
          className={`max-w-3xl mx-auto text-center mb-16 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-coveo-gray text-coveo-purple text-sm font-medium rounded-full">
            Our Platform
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">One Platform, Multiple Solutions</h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered platform connects your content and data to deliver the most relevant, personalized experiences for customers and employees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <FeatureCard 
            icon={<Search className="h-6 w-6 text-coveo-blue" />}
            title="Intelligent Search"
            description="Deliver relevant search results across all your digital channels, powered by AI."
            delay={100}
          />
          <FeatureCard 
            icon={<ShoppingCart className="h-6 w-6 text-coveo-blue" />}
            title="Commerce"
            description="Boost conversion with personalized product recommendations that shoppers actually want."
            delay={200}
          />
          <FeatureCard 
            icon={<MessageSquare className="h-6 w-6 text-coveo-blue" />}
            title="Service & Support"
            description="Empower customers and agents with instant access to the right knowledge."
            delay={300}
          />
          <FeatureCard 
            icon={<Layers className="h-6 w-6 text-coveo-blue" />}
            title="Platform"
            description="A unified, secure foundation for all your digital experiences."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
