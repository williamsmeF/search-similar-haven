
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Award, Briefcase, Users, ArrowRight } from "lucide-react";

const Company = () => {
  const leadership = [
    {
      name: "Jane Smith",
      title: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop",
      bio: "Jane has over 20 years of experience in the tech industry, previously holding executive positions at leading tech companies."
    },
    {
      name: "Michael Johnson",
      title: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&h=250&auto=format&fit=crop",
      bio: "Michael is a pioneer in AI and machine learning, with multiple patents in search technology and personalization algorithms."
    },
    {
      name: "Sarah Williams",
      title: "Chief Product Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&h=250&auto=format&fit=crop",
      bio: "Sarah has led product teams at several Fortune 500 companies, focusing on user-centered design and innovation."
    },
    {
      name: "David Lee",
      title: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&h=250&auto=format&fit=crop",
      bio: "David brings extensive experience in financial management and strategic planning from his work at global technology firms."
    }
  ];

  const locations = [
    {
      city: "San Francisco",
      country: "United States",
      address: "123 Market Street, Suite 400",
      image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=500&auto=format&fit=crop"
    },
    {
      city: "New York",
      country: "United States",
      address: "456 Fifth Avenue, 20th Floor",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=500&auto=format&fit=crop"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "10 Oxford Street, 3rd Floor",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=500&auto=format&fit=crop"
    },
    {
      city: "Tokyo",
      country: "Japan",
      address: "1-1 Marunouchi, Chiyoda-ku",
      image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=500&auto=format&fit=crop"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI and search technology.",
      icon: Award
    },
    {
      title: "Customer Success",
      description: "We measure our success by the success of our customers.",
      icon: Users
    },
    {
      title: "Integrity",
      description: "We believe in transparency, honesty, and fairness in all our interactions.",
      icon: Briefcase
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white to-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-coveo-blue">
                About Coveo
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                We're on a mission to transform digital experiences with AI-powered search and personalization.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-coveo-blue hover:bg-coveo-blue/90">
                  Join Our Team
                </Button>
                <Button size="lg" variant="outline">
                  Learn Our Story
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Company tabs section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                <TabsTrigger value="story">Our Story</TabsTrigger>
                <TabsTrigger value="values">Our Values</TabsTrigger>
              </TabsList>
              
              <TabsContent value="mission" className="mt-8">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-muted-foreground mb-4">
                          At Coveo, our mission is to transform digital experiences by connecting people 
                          with the most relevant information and insights, exactly when they need it.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          We believe that every interaction is an opportunity to build deeper relationships 
                          with customers, employees, and partners through personalized, AI-powered experiences.
                        </p>
                        <p className="text-muted-foreground">
                          By making every digital touchpoint more relevant, we help organizations drive 
                          meaningful outcomes while creating more human connections in a digital world.
                        </p>
                      </div>
                      <div className="md:w-1/2 bg-gray-100 rounded-lg overflow-hidden h-[300px]">
                        <img 
                          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" 
                          alt="Team collaboration" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="story" className="mt-8">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/2 bg-gray-100 rounded-lg overflow-hidden h-[300px]">
                        <img 
                          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop" 
                          alt="Company history" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                        <p className="text-muted-foreground mb-4">
                          Founded in 2005, Coveo began with a vision to solve the enterprise search problem: 
                          making it easy to find information scattered across multiple systems.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          As technology evolved, so did we. We embraced machine learning and AI early, 
                          transforming from a search company into a comprehensive relevance platform.
                        </p>
                        <p className="text-muted-foreground">
                          Today, we're a global company serving thousands of organizations worldwide, 
                          but we maintain the innovative spirit and customer focus that defined our earliest days.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="values" className="mt-8">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">Our Core Values</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                      {values.map((value, index) => (
                        <div key={index} className="text-center">
                          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <value.icon className="h-8 w-8 text-coveo-blue" />
                          </div>
                          <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Leadership section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
              <p className="text-muted-foreground">
                Meet the team that's driving our vision forward and transforming digital experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {leadership.map((leader, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-xl">{leader.name}</h3>
                    <p className="text-coveo-blue mb-2">{leader.title}</p>
                    <p className="text-sm text-muted-foreground">{leader.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Locations section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
              <p className="text-muted-foreground">
                With offices around the world, we're building a global community of innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {locations.map((location, index) => (
                <Card key={index} className="overflow-hidden flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-2/5 aspect-video md:aspect-auto bg-gray-100 overflow-hidden">
                    <img src={location.image} alt={location.city} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-4 flex-grow flex flex-col justify-center">
                    <div className="flex items-start mb-2">
                      <MapPin className="h-5 w-5 text-coveo-blue mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-xl">{location.city}</h3>
                        <p className="text-muted-foreground">{location.country}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{location.address}</p>
                    <Button variant="ghost" className="text-coveo-blue hover:text-coveo-blue/90 p-0 justify-start group">
                      View Office 
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Career CTA section */}
        <section className="py-20 bg-coveo-blue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                We're always looking for talented people who are passionate about creating 
                exceptional digital experiences.
              </p>
              <Button size="lg" className="bg-white text-coveo-blue hover:bg-white/90">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Company;
