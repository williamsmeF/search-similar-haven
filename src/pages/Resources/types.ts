
import { LucideIcon } from "lucide-react";

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  category: ResourceCategory;
  description: string;
  icon: LucideIcon;
  link: string;
  downloadable?: boolean;
  featured?: boolean;
}

export type ResourceType = 
  | "Guide" 
  | "Whitepaper" 
  | "Video Tutorial" 
  | "Case Study" 
  | "Webinar" 
  | "Documentation" 
  | "E-Book";

export type ResourceCategory = 
  | "Getting Started" 
  | "Implementation" 
  | "Best Practices" 
  | "Technical" 
  | "Case Studies";

export const resourceTypeIcons = {
  "Guide": "book",
  "Whitepaper": "file-text",
  "Video Tutorial": "video",
  "Case Study": "file-text", 
  "Webinar": "video",
  "Documentation": "book",
  "E-Book": "book"
};
