
import { useState } from "react";
import PageContainer from "@/components/ui/page-container";
import ResourceHeader from "./components/ResourceHeader";
import ResourceGrid from "./components/ResourceGrid";
import FeaturedResources from "./components/FeaturedResources";
import { resourcesData, resourceCategories, resourceTypes } from "./data";
import { Resource, ResourceCategory, ResourceType } from "./types";
import CTA from "@/components/CTA";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | "All">("All");
  const [selectedType, setSelectedType] = useState<ResourceType | "All">("All");
  const [activeTab, setActiveTab] = useState("resources");
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleFilterCategory = (category: ResourceCategory | "All") => {
    setSelectedCategory(category);
  };
  
  const handleFilterType = (type: ResourceType | "All") => {
    setSelectedType(type);
  };
  
  const filterResources = () => {
    return resourcesData.filter((resource) => {
      const matchesSearch = searchQuery === "" || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
      const matchesType = selectedType === "All" || resource.type === selectedType;
      
      return matchesSearch && matchesCategory && matchesType;
    });
  };
  
  const filteredResources = filterResources();

  // Group resources by category for the categories tab
  const resourcesByCategory: Record<ResourceCategory, Resource[]> = {
    "Product": [],
    "Industry": [],
    "Technical": [],
    "Customer Story": []
  };

  resourcesData.forEach(resource => {
    resourcesByCategory[resource.category].push(resource);
  });
  
  return (
    <PageContainer fullWidth>
      <div className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-white">Resources</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover insights and guidance to get the most out of Coveo
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full max-w-md mx-auto mb-8 grid grid-cols-2 h-auto">
                <TabsTrigger value="resources" className="py-3">All Resources</TabsTrigger>
                <TabsTrigger value="categories" className="py-3">By Category</TabsTrigger>
              </TabsList>
              
              <TabsContent value="resources" className="animate-fade-in">
                <ResourceHeader 
                  onSearch={handleSearch}
                  onFilterCategory={handleFilterCategory}
                  onFilterType={handleFilterType}
                  selectedCategory={selectedCategory}
                  selectedType={selectedType}
                  categories={["All", ...resourceCategories]}
                  types={["All", ...resourceTypes]}
                />
                
                <FeaturedResources resources={resourcesData} />
                
                <ResourceGrid 
                  resources={resourcesData} 
                  filteredResources={filteredResources} 
                />
              </TabsContent>
              
              <TabsContent value="categories" className="animate-fade-in">
                {resourceCategories.map((category) => (
                  <div key={category} className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">{category}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {resourcesByCategory[category].slice(0, 3).map((resource, idx) => (
                        <Card key={idx} className="h-full flex flex-col">
                          <CardContent className="pt-6 flex-grow flex flex-col">
                            <div className="mb-3">
                              <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                                {resource.type}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                            <p className="text-muted-foreground mb-4 flex-grow">{resource.description}</p>
                            <Button variant="link" className="p-0 justify-start text-coveo-blue gap-2">
                              Read More <ArrowRight className="h-4 w-4" />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    {resourcesByCategory[category].length > 3 && (
                      <div className="mt-6 text-center">
                        <Button variant="outline" onClick={() => {
                          setActiveTab("resources");
                          setSelectedCategory(category);
                        }}>
                          View All {category} Resources
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </TabsContent>
            </Tabs>
            
            <div className="mt-16 p-6 border rounded-lg bg-gray-50">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-semibold mb-2">Stay Updated</h3>
                  <p className="text-muted-foreground">
                    Subscribe to our newsletter to receive the latest resources, updates, and expert insights.
                  </p>
                </div>
                <div className="lg:w-1/3 flex justify-center lg:justify-end">
                  <Button size="lg" className="bg-coveo-blue hover:bg-coveo-blue/90">
                    Subscribe to Updates
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTA />
    </PageContainer>
  );
};

export default Resources;
