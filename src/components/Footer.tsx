
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6">
              <a href="/" className="text-xl font-bold text-coveo-blue">
                Coveo
              </a>
            </div>
            <p className="text-muted-foreground mb-4">
              The leading AI-powered relevance platform, helping businesses deliver personalized digital experiences at scale.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Search</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Commerce</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Platform</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Retail</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Financial Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Technology</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Healthcare</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Partners</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Coveo. All rights reserved.
          </div>
          
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-coveo-blue transition-colors">Cookies</a>
            <span className="text-muted-foreground flex items-center">
              Made with <Heart className="h-3 w-3 mx-1 text-coveo-blue" /> by Lovable
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
