
import { useState } from "react";
import PageContainer from "@/components/ui/page-container";
import CTA from "@/components/CTA";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Mail, ExternalLink } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

const TeamMember = ({ name, role, image, bio }: TeamMemberProps) => (
  <div className="text-center">
    <div className={`w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden bg-gray-200 flex items-center justify-center`}>
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-3xl font-bold text-gray-400">
          {name.charAt(0)}
        </span>
      )}
    </div>
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="text-coveo-blue">{role}</p>
    {bio && <p className="mt-2 text-sm text-muted-foreground">{bio}</p>}
  </div>
);

interface LocationProps {
  city: string;
  address: string[];
  country: string;
  isPrimary?: boolean;
}

const Location = ({ city, address, country, isPrimary = false }: LocationProps) => (
  <Card className={`h-full ${isPrimary ? 'border-coveo-blue' : ''}`}>
    <CardContent className="pt-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-lg">{city}</h3>
        {isPrimary && (
          <span className="text-xs bg-coveo-blue text-white px-2 py-1 rounded-full">
            HQ
          </span>
        )}
      </div>
      <div className="flex items-start mb-3">
        <MapPin className="h-5 w-5 text-coveo-blue shrink-0 mr-2 mt-0.5" />
        <div>
          {address.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <p>{country}</p>
        </div>
      </div>
      <Button variant="link" className="flex items-center p-0 text-coveo-blue">
        View on map <ExternalLink className="ml-1 h-3 w-3" />
      </Button>
    </CardContent>
  </Card>
);

const Timeline = () => {
  const milestones = [
    {
      year: "2005",
      title: "Founded",
      description: "Coveo was founded with a vision to solve enterprise information overload."
    },
    {
      year: "2008",
      title: "First Enterprise Client",
      description: "Signed our first major enterprise client, validating our solution."
    },
    {
      year: "2012",
      title: "Cloud Transition",
      description: "Launched our cloud-based search solution, revolutionizing our offering."
    },
    {
      year: "2016",
      title: "AI Integration",
      description: "Integrated machine learning capabilities into our core platform."
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Expanded operations across North America, Europe, and Asia."
    },
    {
      year: "2021",
      title: "Public Offering",
      description: "Successfully completed our initial public offering (TSX: CVO)."
    },
    {
      year: "2023",
      title: "Next Generation Platform",
      description: "Launched our next generation AI-powered relevance platform."
    }
  ];

  return (
    <div className="relative mt-8 ml-4">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-coveo-blue/30"></div>
      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-coveo-blue"></div>
            <div className="text-sm text-coveo-blue font-semibold">{milestone.year}</div>
            <h3 className="font-bold mt-1">{milestone.title}</h3>
            <p className="text-muted-foreground">{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Company = () => {
  const [activeTab, setActiveTab] = useState("about");
  
  const leadershipTeam = [
    { name: "Louis Têtu", role: "Chairman and CEO" },
    { name: "Laurent Simoneau", role: "President and CTO" },
    { name: "Jean Lavigueur", role: "CFO" },
    { name: "Marie-Andrée Giroux", role: "CLO" },
    { name: "Michael Ni", role: "CMO" },
    { name: "Guy Gauvin", role: "COO" }
  ];
  
  const locations = [
    {
      city: "Quebec City",
      address: ["3175 Chemin des Quatre-Bourgeois", "Suite 200"],
      country: "Canada",
      isPrimary: true
    },
    {
      city: "Montreal",
      address: ["1100 René-Lévesque Blvd W", "Suite 2500"],
      country: "Canada"
    },
    {
      city: "San Francisco",
      address: ["535 Mission Street", "Suite 1900"],
      country: "United States"
    },
    {
      city: "London",
      address: ["30 St Mary Axe"],
      country: "United Kingdom"
    },
    {
      city: "Amsterdam",
      address: ["Singel 250"],
      country: "Netherlands"
    },
    {
      city: "Tokyo",
      address: ["Marunouchi Kitaguchi Building", "1-6-5 Marunouchi, Chiyoda-ku"],
      country: "Japan"
    }
  ];

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
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full max-w-md mx-auto mb-8 grid grid-cols-3 h-auto">
                <TabsTrigger value="about" className="py-3">About Us</TabsTrigger>
                <TabsTrigger value="leadership" className="py-3">Leadership</TabsTrigger>
                <TabsTrigger value="locations" className="py-3">Locations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="animate-fade-in">
                <section className="mb-16">
                  <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
                  <div className="bg-coveo-blue/5 p-6 rounded-lg border border-coveo-blue/10 mb-8">
                    <p className="text-lg italic text-center">
                      "To transform digital experiences with AI-powered search and recommendations, making every interaction personalized, relevant, and effortless."
                    </p>
                  </div>
                  <p className="text-lg mb-4">
                    At Coveo, our mission is to transform digital experiences with AI-powered search and recommendations. We believe that every interaction should be personalized, relevant, and effortless.
                  </p>
                  <p className="text-lg mb-8">
                    We're dedicated to helping businesses connect their customers, partners, and employees with the information and insights they need, when they need it, to achieve better outcomes.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 my-12">
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <div className="text-coveo-blue text-4xl font-bold mb-2">200+</div>
                      <p className="text-muted-foreground">Enterprise Customers</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <div className="text-coveo-blue text-4xl font-bold mb-2">10B+</div>
                      <p className="text-muted-foreground">Interactions Processed Daily</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <div className="text-coveo-blue text-4xl font-bold mb-2">8+</div>
                      <p className="text-muted-foreground">Global Offices</p>
                    </div>
                  </div>
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
                  
                  <Timeline />
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { title: "Innovation", description: "We constantly push the boundaries of what's possible with AI and search technology." },
                      { title: "Customer Success", description: "We're dedicated to ensuring our customers achieve their business objectives." },
                      { title: "Collaboration", description: "We believe in the power of diverse teams working together toward shared goals." },
                      { title: "Excellence", description: "We strive for excellence in everything we do, from code to customer service." }
                    ].map((value, index) => (
                      <div key={index} className="p-6 border rounded-lg bg-gray-50">
                        <h3 className="font-bold mb-2 text-lg">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </TabsContent>
              
              <TabsContent value="leadership" className="animate-fade-in">
                <section>
                  <h2 className="text-2xl font-bold mb-8 text-center">Leadership Team</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leadershipTeam.map((member, index) => (
                      <TeamMember 
                        key={index} 
                        name={member.name} 
                        role={member.role} 
                      />
                    ))}
                  </div>
                  
                  <div className="mt-16 p-6 border rounded-lg bg-gray-50">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-2/3">
                        <h3 className="font-bold text-xl mb-3">Join Our Team</h3>
                        <p className="text-muted-foreground">
                          We're always looking for talented individuals to join our growing team. Check out our open positions and become part of our journey.
                        </p>
                      </div>
                      <div className="md:w-1/3 flex justify-center md:justify-end">
                        <Button className="bg-coveo-blue hover:bg-coveo-blue/90">
                          View Careers
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>
              </TabsContent>
              
              <TabsContent value="locations" className="animate-fade-in">
                <section>
                  <h2 className="text-2xl font-bold mb-8 text-center">Our Locations</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((location, index) => (
                      <Location 
                        key={index}
                        city={location.city}
                        address={location.address}
                        country={location.country}
                        isPrimary={location.isPrimary}
                      />
                    ))}
                  </div>
                  
                  <div className="mt-16 text-center">
                    <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                    <div className="flex justify-center items-center mb-4">
                      <Mail className="h-5 w-5 text-coveo-blue mr-2" />
                      <a href="mailto:info@coveo.com" className="text-coveo-blue hover:underline">info@coveo.com</a>
                    </div>
                    <Button className="bg-coveo-blue hover:bg-coveo-blue/90">
                      Contact Us
                    </Button>
                  </div>
                </section>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <CTA />
    </PageContainer>
  );
};

export default Company;
