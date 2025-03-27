
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-coveo-blue">
              Coveo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-coveo-blue transition-colors">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 rounded-lg p-2 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="#" className="block p-3 rounded-md hover:bg-muted transition-colors">Search</Link>
                <Link to="#" className="block p-3 rounded-md hover:bg-muted transition-colors">Service</Link>
                <Link to="#" className="block p-3 rounded-md hover:bg-muted transition-colors">Commerce</Link>
                <Link to="#" className="block p-3 rounded-md hover:bg-muted transition-colors">Platform</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-coveo-blue transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 rounded-lg p-2 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="#" className="block p-3 rounded-md hover:bg-muted transition-colors">By Industry</Link>
                <Link to="#" className="block p-3 rounded-md hover:bg-muted transition-colors">By Role</Link>
                <Link to="#" className="block p-3 rounded-md hover:bg-muted transition-colors">By Use Case</Link>
              </div>
            </div>
            <Link to="/resources" className="text-foreground hover:text-coveo-blue transition-colors">Resources</Link>
            <Link to="#" className="text-foreground hover:text-coveo-blue transition-colors">Pricing</Link>
            <Link to="#" className="text-foreground hover:text-coveo-blue transition-colors">Company</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="link" className="text-foreground hover:text-coveo-blue" onClick={() => navigate("/login")}>Login</Button>
            <Button className="btn-hover bg-coveo-blue hover:bg-coveo-blue/90" onClick={() => navigate("/signup")}>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden flex items-center" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-white transition-all duration-300 shadow-md overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-2">
          <Link to="#" className="block py-3 border-b">Products</Link>
          <Link to="#" className="block py-3 border-b">Solutions</Link>
          <Link to="/resources" className="block py-3 border-b">Resources</Link>
          <Link to="#" className="block py-3 border-b">Pricing</Link>
          <Link to="#" className="block py-3 border-b">Company</Link>
          <div className="flex flex-col space-y-3 py-4">
            <Button variant="outline" onClick={() => navigate("/login")}>Login</Button>
            <Button className="bg-coveo-blue hover:bg-coveo-blue/90" onClick={() => navigate("/signup")}>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
