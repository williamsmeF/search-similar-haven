import { useState } from "react";
import PageContainer from "@/components/ui/page-container";
import ResourceHeader from "./components/ResourceHeader";
import ResourceGrid from "./components/ResourceGrid";
import FeaturedResources from "./components/FeaturedResources";
import { resourcesData, resourceCategories, resourceTypes } from "./data";
import { Resource, ResourceCategory, ResourceType } from "./types";
import CTA from "@/components/CTA";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | "All">("All");
  const [selectedType, setSelectedType] = useState<ResourceType | "All">("All");
  
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
  
  return (
    <PageContainer fullWidth>
      <div className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ResourceHeader 
            onSearch={handleSearch}
            onFilterCategory={handleFilterCategory}
            onFilterType={handleFilterType}
            selectedCategory={selectedCategory}
            selectedType={selectedType}
            categories={["All", ...resourceCategories]}
            types={["All", ...resourceTypes]}
          />
          
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <FeaturedResources resources={resourcesData} />
            <ResourceGrid 
              resources={resourcesData} 
              filteredResources={filteredResources} 
            />
          </div>
        </div>
      </div>
      
      <CTA />
    </PageContainer>
  );
};

export default Resources;
