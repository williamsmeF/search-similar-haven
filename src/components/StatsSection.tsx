
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    value: "93%",
    label: "Customer Satisfaction",
    description: "Average customer satisfaction rating across our solutions"
  },
  {
    value: "40%",
    label: "Increase in Conversions",
    description: "Average improvement in conversion rates for e-commerce clients"
  },
  {
    value: "50M+",
    label: "Searches Per Day",
    description: "Searches processed daily across our customer base"
  },
  {
    value: "30%",
    label: "Support Cost Reduction",
    description: "Average decrease in support costs for service clients"
  }
];

const StatsSection = () => {
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
      id="stats" 
      className="py-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block mb-4 px-4 py-1.5 bg-coveo-gray text-coveo-blue text-sm font-medium rounded-full">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Delivering Measurable Results</h2>
          <p className="text-lg text-muted-foreground">
            See how our AI-powered solutions make a difference for businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`glass-card p-6 rounded-xl text-center transition-all duration-500 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="text-4xl font-bold text-coveo-blue mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
