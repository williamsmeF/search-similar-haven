import PageContainer from "@/components/ui/page-container";
import CTA from "@/components/CTA";

const Products = () => {
  return (
    <PageContainer fullWidth>
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-white">Our Products</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover Coveo's powerful AI-driven search and personalization solutions
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <section id="search" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Search</h2>
              <p className="text-gray-700">
                Deliver relevant and personalized search experiences across all digital touchpoints.
              </p>
            </section>

            <section id="service" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Service</h2>
              <p className="text-gray-700">
                Empower agents and customers with AI-powered knowledge and self-service tools.
              </p>
            </section>

            <section id="commerce" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Commerce</h2>
              <p className="text-gray-700">
                Drive conversion and increase average order value with personalized product discovery.
              </p>
            </section>

            <section id="platform" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Platform</h2>
              <p className="text-gray-700">
                A unified AI platform for search, personalization, and recommendations.
              </p>
            </section>
          </div>
        </div>
      </div>
      <CTA />
    </PageContainer>
  );
};

export default Products;
