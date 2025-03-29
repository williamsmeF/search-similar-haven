import PageContainer from "@/components/ui/page-container";
import CTA from "@/components/CTA";

const Solutions = () => {
  return (
    <PageContainer fullWidth>
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-white">Our Solutions</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Industry-specific solutions powered by AI to transform your business
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Retail Solution */}
              <div className="p-6 rounded-lg shadow-md bg-coveo-gray">
                <h3 className="text-xl font-semibold mb-2">Retail</h3>
                <p className="text-muted-foreground mb-4">
                  Enhance customer experience and drive sales with AI-powered search and personalization.
                </p>
                <a href="#" className="text-coveo-blue hover:underline">Learn More</a>
              </div>

              {/* Financial Services Solution */}
              <div className="p-6 rounded-lg shadow-md bg-coveo-gray">
                <h3 className="text-xl font-semibold mb-2">Financial Services</h3>
                <p className="text-muted-foreground mb-4">
                  Improve customer service and compliance with intelligent search solutions.
                </p>
                <a href="#" className="text-coveo-blue hover:underline">Learn More</a>
              </div>

              {/* Technology Solution */}
              <div className="p-6 rounded-lg shadow-md bg-coveo-gray">
                <h3 className="text-xl font-semibold mb-2">Technology</h3>
                <p className="text-muted-foreground mb-4">
                  Empower your team with access to the right information at the right time.
                </p>
                <a href="#" className="text-coveo-blue hover:underline">Learn More</a>
              </div>

              {/* Healthcare Solution */}
              <div className="p-6 rounded-lg shadow-md bg-coveo-gray">
                <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
                <p className="text-muted-foreground mb-4">
                  Improve patient outcomes and streamline operations with AI-driven insights.
                </p>
                <a href="#" className="text-coveo-blue hover:underline">Learn More</a>
              </div>

              {/* Manufacturing Solution */}
              <div className="p-6 rounded-lg shadow-md bg-coveo-gray">
                <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
                <p className="text-muted-foreground mb-4">
                  Optimize processes and reduce downtime with predictive search and analytics.
                </p>
                <a href="#" className="text-coveo-blue hover:underline">Learn More</a>
              </div>

              {/* Government Solution */}
              <div className="p-6 rounded-lg shadow-md bg-coveo-gray">
                <h3 className="text-xl font-semibold mb-2">Government</h3>
                <p className="text-muted-foreground mb-4">
                  Enhance citizen engagement and improve access to public services.
                </p>
                <a href="#" className="text-coveo-blue hover:underline">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </PageContainer>
  );
};

export default Solutions;
