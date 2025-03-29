import PageContainer from "@/components/ui/page-container";
import CTA from "@/components/CTA";

const Pricing = () => {
  return (
    <PageContainer fullWidth>
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-white">Pricing Plans</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
            {/* Pricing content here */}
            <p>This is where the pricing content would go.</p>
          </div>
        </div>
      </div>
      <CTA />
    </PageContainer>
  );
};

export default Pricing;
