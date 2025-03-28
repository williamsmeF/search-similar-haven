
import { Resource } from "../types";
import ResourceCard from "./ResourceCard";

interface FeaturedResourcesProps {
  resources: Resource[];
}

const FeaturedResources = ({ resources }: FeaturedResourcesProps) => {
  const featuredResources = resources.filter(resource => resource.featured);
  
  if (featuredResources.length === 0) return null;
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {featuredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedResources;
