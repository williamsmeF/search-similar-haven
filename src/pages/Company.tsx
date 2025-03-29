import PageContainer from "@/components/ui/page-container";
import CTA from "@/components/CTA";

const Company = () => {
  return (
    <PageContainer fullWidth>
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-white">About Coveo</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Learn about our mission, vision, and the team behind Coveo
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg mb-4">
                At Coveo, our mission is to transform digital experiences with AI-powered search and recommendations. We believe that every interaction should be personalized, relevant, and effortless.
              </p>
              <p className="text-lg">
                We're dedicated to helping businesses connect their customers, partners, and employees with the information and insights they need, when they need it, to achieve better outcomes.
              </p>
            </section>
            
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Story</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg mb-4">
                    Founded in 2005, Coveo began with a vision to solve the growing problem of information overload in enterprises. Our founders recognized that as data proliferated, finding relevant information was becoming increasingly difficult.
                  </p>
                  <p className="text-lg">
                    What started as an enterprise search solution has evolved into a comprehensive AI-powered relevance platform that helps companies deliver personalized digital experiences at scale.
                  </p>
                </div>
                <div>
                  <p className="text-lg mb-4">
                    Today, Coveo serves hundreds of the world's most innovative companies across commerce, service, and workplace use cases. Our platform processes billions of interactions daily, continuously learning and improving to deliver better outcomes.
                  </p>
                  <p className="text-lg">
                    As a publicly traded company (TSX: CVO), we remain committed to innovation, customer success, and our vision of making business personal.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Leadership Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg">Louis Têtu</h3>
                  <p className="text-coveo-blue">Chairman and CEO</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg">Laurent Simoneau</h3>
                  <p className="text-coveo-blue">President and CTO</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg">Jean Lavigueur</h3>
                  <p className="text-coveo-blue">CFO</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg">Marie-Andrée Giroux</h3>
                  <p className="text-coveo-blue">CLO</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg">Michael Ni</h3>
                  <p className="text-coveo-blue">CMO</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg">Guy Gauvin</h3>
                  <p className="text-coveo-blue">COO</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-6 text-center">Our Locations</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 border rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Quebec City (HQ)</h3>
                  <p>3175 Chemin des Quatre-Bourgeois</p>
                  <p>Suite 200</p>
                  <p>Quebec City, QC G1W 2K7</p>
                  <p>Canada</p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Montreal</h3>
                  <p>1100 René-Lévesque Blvd W</p>
                  <p>Suite 2500</p>
                  <p>Montreal, QC H3B 5C9</p>
                  <p>Canada</p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="font-bold text-lg mb-2">San Francisco</h3>
                  <p>535 Mission Street</p>
                  <p>Suite 1900</p>
                  <p>San Francisco, CA 94105</p>
                  <p>United States</p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="font-bold text-lg mb-2">London</h3>
                  <p>30 St Mary Axe</p>
                  <p>London EC3A 8BF</p>
                  <p>United Kingdom</p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Amsterdam</h3>
                  <p>Singel 250</p>
                  <p>1016 AB Amsterdam</p>
                  <p>Netherlands</p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Tokyo</h3>
                  <p>Marunouchi Kitaguchi Building</p>
                  <p>1-6-5 Marunouchi, Chiyoda-ku</p>
                  <p>Tokyo 100-0005</p>
                  <p>Japan</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <CTA />
    </PageContainer>
  );
};

export default Company;
