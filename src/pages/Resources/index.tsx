
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourceHeader from "./components/ResourceHeader";
import ResourceGrid from "./components/ResourceGrid";
import FeaturedResources from "./components/FeaturedResources";
import { resources } from "./data";
import { ResourceCategory, ResourceType } from "./types";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | "All">("All");
  const [selectedType, setSelectedType] = useState<ResourceType | "All">("All");

  const categories: (ResourceCategory | "All")[] = useMemo(() => {
    return ["All", ...new Set(resources.map(r => r.category))] as (ResourceCategory | "All")[];
  }, []);

  const types: (ResourceType | "All")[] = useMemo(() => {
    return ["All", ...new Set(resources.map(r => r.type))] as (ResourceType | "All")[];
  }, []);

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = searchQuery === "" || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
      const matchesType = selectedType === "All" || resource.type === selectedType;
      
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedType]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-coveo-lightGray">
        <div className="container mx-auto px-4 py-16">
          <ResourceHeader 
            onSearch={setSearchQuery}
            onFilterCategory={setSelectedCategory}
            onFilterType={setSelectedType}
            selectedCategory={selectedCategory}
            selectedType={selectedType}
            categories={categories}
            types={types}
          />

          <FeaturedResources resources={filteredResources.length > 0 ? filteredResources : resources} />
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">All Resources</h2>
            {filteredResources.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No resources found matching your filters.</p>
                <button 
                  className="mt-4 text-coveo-blue hover:underline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedType("All");
                  }}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <ResourceGrid resources={resources} filteredResources={filteredResources} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
