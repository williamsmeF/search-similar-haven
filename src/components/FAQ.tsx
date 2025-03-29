
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How does Coveo's AI-powered search work?",
    answer: "Coveo's AI-powered search uses machine learning algorithms to understand user intent, analyze content, and deliver personalized results based on behavior patterns and contextual signals. It continuously improves through usage data to provide increasingly relevant search experiences."
  },
  {
    question: "Can Coveo integrate with my existing systems?",
    answer: "Yes, Coveo offers flexible integration options with popular platforms like Salesforce, ServiceNow, Sitecore, Adobe Experience Manager, and many others. We also provide robust APIs for custom integrations with your proprietary systems."
  },
  {
    question: "How quickly can I implement Coveo solutions?",
    answer: "Implementation timelines vary based on project complexity, but many clients see initial results in weeks rather than months. Our professional services team and implementation partners can help accelerate your deployment with best practices and expert guidance."
  },
  {
    question: "What kind of ROI can I expect from Coveo?",
    answer: "Customers typically see significant improvements in key metrics: increased conversion rates (25-40%), reduced support costs (20-30%), improved self-service success (30-50%), and enhanced employee productivity (15-25%). Our customer success team can help you measure and maximize your specific ROI."
  },
  {
    question: "Is Coveo secure and compliant with regulations?",
    answer: "Absolutely. Coveo maintains rigorous security standards including SOC 2 Type II certification, GDPR compliance, and industry-specific compliance frameworks. Our platform includes robust security features like end-to-end encryption, role-based access controls, and comprehensive audit trails."
  }
];

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [animate, setAnimate] = useState(false);

  useState(() => {
    if (inView) {
      setTimeout(() => {
        setAnimate(true);
      }, 100);
    }
  }, [inView]);

  return (
    <section 
      ref={ref}
      id="faq" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 h-64 w-64 -z-10 bg-coveo-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 h-64 w-64 -z-10 bg-coveo-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block mb-4 px-4 py-1.5 bg-coveo-gray text-coveo-blue text-sm font-medium rounded-full">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Get answers to the most common questions about our platform and services.
          </p>
        </div>

        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted">
                <AccordionTrigger className="text-lg font-medium py-5">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
