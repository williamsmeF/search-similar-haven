
import { Button } from "@/components/ui/button";
import { Resource, resourceTypeIcons } from "../types";
import { FileText, Video, Book, Download, ExternalLink } from "lucide-react";

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const getIcon = () => {
    switch (resource.icon) {
      case "book":
        return <Book className="h-6 w-6 text-coveo-blue" />;
      case "video":
        return <Video className="h-6 w-6 text-coveo-blue" />;
      case "file-text":
        return <FileText className="h-6 w-6 text-coveo-blue" />;
      default:
        return <FileText className="h-6 w-6 text-coveo-blue" />;
    }
  };

  const getActionIcon = () => {
    if (resource.type.includes("Video") || resource.type.includes("Webinar")) {
      return <Video className="mr-2 h-4 w-4" />;
    }
    if (resource.downloadable) {
      return <Download className="mr-2 h-4 w-4" />;
    }
    return <ExternalLink className="mr-2 h-4 w-4" />;
  };

  const getActionText = () => {
    if (resource.type.includes("Video") || resource.type.includes("Webinar")) {
      return "Watch Now";
    }
    if (resource.downloadable) {
      return "Download";
    }
    return "Read More";
  };
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${resource.featured ? 'border-l-4 border-coveo-blue' : ''}`}>
      <div className="flex items-center mb-4">
        <div className="bg-coveo-gray p-3 rounded-full mr-4">
          {getIcon()}
        </div>
        <div>
          <span className="text-sm font-medium text-coveo-blue">{resource.type}</span>
          <h3 className="text-lg font-semibold">{resource.title}</h3>
        </div>
      </div>
      <p className="text-muted-foreground mb-4">{resource.description}</p>
      <Button
        variant="outline"
        className="w-full flex items-center justify-center"
      >
        {getActionIcon()}
        {getActionText()}
      </Button>
    </div>
  );
};

export default ResourceCard;
