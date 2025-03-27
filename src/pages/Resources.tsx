
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Video, BookOpen, Download, ExternalLink } from "lucide-react";

const resources = [
  {
    title: "Getting Started with Coveo",
    type: "Guide",
    description: "Learn the basics of using Coveo for your business needs.",
    icon: BookOpen,
    link: "#",
  },
  {
    title: "Coveo Platform Overview",
    type: "Whitepaper",
    description: "A comprehensive overview of the Coveo platform and its capabilities.",
    icon: FileText,
    link: "#",
  },
  {
    title: "Implementing Coveo Search",
    type: "Video Tutorial",
    description: "Step-by-step guide to implementing Coveo search on your website.",
    icon: Video,
    link: "#",
  },
  {
    title: "Coveo for Commerce",
    type: "Case Study",
    description: "How leading retailers are using Coveo to drive conversion and AOV.",
    icon: FileText,
    link: "#",
  },
  {
    title: "Personalization Strategies",
    type: "Webinar",
    description: "Learn how to create personalized experiences with Coveo.",
    icon: Video,
    link: "#",
  },
  {
    title: "Technical Documentation",
    type: "Documentation",
    description: "Technical guides and API documentation for developers.",
    icon: BookOpen,
    link: "#",
  },
];

const ResourceCard = ({ resource }: { resource: typeof resources[0] }) => {
  const Icon = resource.icon;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="bg-coveo-gray p-3 rounded-full mr-4">
          <Icon className="h-6 w-6 text-coveo-blue" />
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
        {resource.type.includes("Video") ? (
          <Video className="mr-2 h-4 w-4" />
        ) : resource.type.includes("Download") ? (
          <Download className="mr-2 h-4 w-4" />
        ) : (
          <ExternalLink className="mr-2 h-4 w-4" />
        )}
        {resource.type.includes("Video")
          ? "Watch Now"
          : resource.type.includes("Download")
          ? "Download"
          : "Read More"}
      </Button>
    </div>
  );
};

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-coveo-lightGray">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Resources</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of guides, tutorials, and case studies to help you get the most out of Coveo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
