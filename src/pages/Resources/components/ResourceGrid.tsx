
import { Resource } from "../types";
import ResourceCard from "./ResourceCard";

interface ResourceGridProps {
  resources: Resource[];
  filteredResources: Resource[];
}

const ResourceGrid = ({ resources, filteredResources }: ResourceGridProps) => {
  const displayResources = filteredResources.length > 0 ? filteredResources : resources;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayResources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
};

export default ResourceGrid;
