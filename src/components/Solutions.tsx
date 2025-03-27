
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const TabButton = ({ active, label, onClick }) => (
  <button
    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
      active 
        ? 'bg-white text-coveo-blue shadow-sm' 
        : 'text-foreground hover:bg-white/50'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      title: "For Retail & E-commerce",
      description: "Create personalized shopping experiences across every touchpoint to increase conversion and build loyalty.",
      benefits: [
        "Personalized product recommendations",
        "AI-powered merchandising",
        "Unified search across product catalog",
        "Seamless omnichannel experiences"
      ]
    },
    {
      title: "For Financial Services",
      description: "Deliver personalized financial guidance and content to customers while improving operational efficiency.",
      benefits: [
        "Secure knowledge management",
        "Personalized client portals",
        "Regulatory compliance support",
        "Employee knowledge access"
      ]
    },
    {
      title: "For Technology",
      description: "Empower customers and employees with relevant technical content when and where they need it.",
      benefits: [
        "Self-service support portals",
        "Community knowledge sharing",
        "Technical documentation search",
        "Developer resources"
      ]
    },
    {
      title: "For Healthcare",
      description: "Connect patients, providers, and staff with the right information for better healthcare experiences.",
      benefits: [
        "Patient portal optimization",
        "Clinical knowledge management",
        "Provider directory search",
        "Healthcare compliance"
      ]
    }
  ];

  return (
    <section className="py-20 bg-coveo-gray" id="solutions">
      <div 
        className="container mx-auto px-4 md:px-6"
        ref={ref}
      >
        <div className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block mb-4 px-4 py-1.5 bg-white text-coveo-purple text-sm font-medium rounded-full">
            Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Your Industry</h2>
          <p className="text-lg text-muted-foreground">
            Discover how Coveo helps organizations in your industry deliver exceptional digital experiences.
          </p>
        </div>

        <div className="bg-coveo-lightGray rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm overflow-hidden">
          <div className="flex flex-wrap gap-2 mb-8 bg-coveo-gray p-1 rounded-lg inline-flex">
            {solutions.map((solution, index) => (
              <TabButton 
                key={index}
                active={activeTab === index}
                label={solution.title.replace("For ", "")}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className={`transition-all duration-500 ${inView ? 'opacity-100 animate-fade-right' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-4">{solutions[activeTab].title}</h3>
              <p className="text-muted-foreground mb-6">{solutions[activeTab].description}</p>
              
              <ul className="space-y-3 mb-8">
                {solutions[activeTab].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="rounded-full bg-coveo-blue/10 p-1 mr-3 mt-0.5">
                      <ChevronRight className="h-4 w-4 text-coveo-blue" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="btn-hover bg-coveo-blue hover:bg-coveo-blue/90">
                Learn More
              </Button>
            </div>
            
            <div className={`bg-white rounded-xl p-6 shadow-sm aspect-video flex items-center justify-center transition-all duration-500 ${inView ? 'opacity-100 animate-fade-left' : 'opacity-0'}`}>
              <div className="text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-coveo-gray rounded-full flex items-center justify-center">
                  <span className="text-coveo-blue font-bold">{activeTab + 1}</span>
                </div>
                <p className="text-muted-foreground">Solution preview for {solutions[activeTab].title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
