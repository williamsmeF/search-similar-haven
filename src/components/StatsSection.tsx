
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeader from './ui/section-header';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const stats = [
  {
    value: "93%",
    label: "Customer Satisfaction",
    description: "Average customer satisfaction rating across our solutions",
    color: "bg-blue-500",
    numericValue: 93
  },
  {
    value: "40%",
    label: "Increase in Conversions",
    description: "Average improvement in conversion rates for e-commerce clients",
    color: "bg-green-500",
    numericValue: 40
  },
  {
    value: "50M+",
    label: "Searches Per Day",
    description: "Searches processed daily across our customer base",
    color: "bg-purple-500",
    numericValue: 50
  },
  {
    value: "30%",
    label: "Support Cost Reduction",
    description: "Average decrease in support costs for service clients",
    color: "bg-orange-500",
    numericValue: 30
  }
];

const chartData = [
  { name: "Satisfaction", value: 93, fill: "#3b82f6" },
  { name: "Conversions", value: 40, fill: "#22c55e" },
  { name: "Support Cost", value: 30, fill: "#f97316" },
];

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState('cards'); // 'cards' or 'chart'

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setAnimate(true);
      }, 100);
    }
  }, [inView]);

  const [countValues, setCountValues] = useState(stats.map(() => 0));

  useEffect(() => {
    if (animate) {
      stats.forEach((stat, index) => {
        const targetValue = parseInt(stat.value) || 0;
        const duration = 2000; // 2 seconds animation
        const startTime = Date.now();

        const updateCounter = () => {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          setCountValues(prev => {
            const newValues = [...prev];
            newValues[index] = Math.floor(progress * targetValue);
            return newValues;
          });
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };
        
        requestAnimationFrame(updateCounter);
      });
    }
  }, [animate]);

  return (
    <section 
      ref={ref}
      id="stats" 
      className="py-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          badge="Our Impact"
          title="Delivering Measurable Results"
          subtitle="See how our AI-powered solutions make a difference for businesses worldwide."
          className={`transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className={`mb-8 flex justify-center transition-all duration-500 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-5 py-2 text-sm font-medium border rounded-l-lg ${
                activeTab === 'cards' 
                  ? 'bg-coveo-blue text-white' 
                  : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('cards')}
            >
              Cards
            </button>
            <button
              type="button"
              className={`px-5 py-2 text-sm font-medium border rounded-r-lg ${
                activeTab === 'chart' 
                  ? 'bg-coveo-blue text-white' 
                  : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('chart')}
            >
              Chart
            </button>
          </div>
        </div>

        {activeTab === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`glass-card p-6 rounded-xl text-center transition-all duration-500 ${
                  animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`${stat.color} h-2 w-16 rounded-full`}></div>
                </div>
                <div className="text-4xl font-bold text-coveo-blue mb-2">
                  {stat.value.includes('+') 
                    ? `${countValues[index]}+` 
                    : stat.value.includes('M') 
                      ? `${countValues[index]}M+` 
                      : `${countValues[index]}%`}
                </div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'chart' && (
          <div className={`glass-card p-6 rounded-xl transition-all duration-500 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-center mt-4 text-sm text-muted-foreground">
              Performance metrics across key areas
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StatsSection;
