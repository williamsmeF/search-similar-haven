
import { Resource } from "./types";

export const resources: Resource[] = [
  {
    id: "1",
    title: "Getting Started with Coveo",
    type: "Guide",
    category: "Getting Started",
    description: "Learn the basics of using Coveo for your business needs.",
    icon: "book",
    link: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Coveo Platform Overview",
    type: "Whitepaper",
    category: "Getting Started",
    description: "A comprehensive overview of the Coveo platform and its capabilities.",
    icon: "file-text",
    link: "#",
  },
  {
    id: "3",
    title: "Implementing Coveo Search",
    type: "Video Tutorial",
    category: "Implementation",
    description: "Step-by-step guide to implementing Coveo search on your website.",
    icon: "video",
    link: "#",
  },
  {
    id: "4",
    title: "Coveo for Commerce",
    type: "Case Study",
    category: "Case Studies",
    description: "How leading retailers are using Coveo to drive conversion and AOV.",
    icon: "file-text",
    link: "#",
  },
  {
    id: "5",
    title: "Personalization Strategies",
    type: "Webinar",
    category: "Best Practices",
    description: "Learn how to create personalized experiences with Coveo.",
    icon: "video",
    link: "#",
  },
  {
    id: "6",
    title: "Technical Documentation",
    type: "Documentation",
    category: "Technical",
    description: "Technical guides and API documentation for developers.",
    icon: "book",
    link: "#",
    downloadable: true,
  },
  {
    id: "7",
    title: "Enterprise Search Best Practices",
    type: "E-Book",
    category: "Best Practices",
    description: "In-depth guide to optimizing your enterprise search implementation.",
    icon: "book",
    link: "#",
    downloadable: true,
  },
  {
    id: "8",
    title: "Advanced Query Pipelines",
    type: "Documentation",
    category: "Technical",
    description: "How to create and optimize query pipelines for better search results.",
    icon: "book",
    link: "#",
  },
  {
    id: "9",
    title: "Retail Success Story: Major Fashion Brand",
    type: "Case Study",
    category: "Case Studies",
    description: "How a major fashion retailer increased conversions by 35% with Coveo.",
    icon: "file-text",
    link: "#",
  },
  {
    id: "10",
    title: "Coveo JavaScript Framework",
    type: "Guide",
    category: "Technical",
    description: "A comprehensive guide to the Coveo JavaScript Framework.",
    icon: "book",
    link: "#",
    downloadable: true,
  },
  {
    id: "11",
    title: "Measuring Search ROI",
    type: "Whitepaper",
    category: "Best Practices",
    description: "How to measure and optimize the ROI of your search implementation.",
    icon: "file-text",
    link: "#",
    featured: true,
  },
  {
    id: "12",
    title: "Machine Learning in Action",
    type: "Webinar",
    category: "Implementation",
    description: "See how Coveo's machine learning capabilities drive results.",
    icon: "video",
    link: "#",
  },
];

// Extract unique categories and types from resources for filtering
export const resourceCategories = Array.from(
  new Set(resources.map((resource) => resource.category))
) as Array<Resource["category"]>;

export const resourceTypes = Array.from(
  new Set(resources.map((resource) => resource.type))
) as Array<Resource["type"]>;

// Export resources as resourcesData to match the import in index.tsx
export const resourcesData = resources;
