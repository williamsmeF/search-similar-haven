
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { ResourceCategory, ResourceType } from "../types";

interface ResourceHeaderProps {
  onSearch: (query: string) => void;
  onFilterCategory: (category: ResourceCategory | "All") => void;
  onFilterType: (type: ResourceType | "All") => void;
  selectedCategory: ResourceCategory | "All";
  selectedType: ResourceType | "All";
  categories: (ResourceCategory | "All")[];
  types: (ResourceType | "All")[];
}

const ResourceHeader = ({
  onSearch,
  onFilterCategory,
  onFilterType,
  selectedCategory,
  selectedType,
  categories,
  types,
}: ResourceHeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md">Resources</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
          Explore our collection of guides, tutorials, and case studies to help you get the most out of Coveo.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resources..."
            className="pl-10"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <div className="dropdown-container relative group">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 bg-white"
            >
              <Filter className="h-4 w-4" />
              Category: {selectedCategory}
            </Button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 hidden group-hover:block">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                    selectedCategory === category ? "bg-muted" : ""
                  }`}
                  onClick={() => onFilterCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="dropdown-container relative group">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 bg-white"
            >
              <Filter className="h-4 w-4" />
              Type: {selectedType}
            </Button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 hidden group-hover:block">
              {types.map((type) => (
                <button
                  key={type}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                    selectedType === type ? "bg-muted" : ""
                  }`}
                  onClick={() => onFilterType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceHeader;
