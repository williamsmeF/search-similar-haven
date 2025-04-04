
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

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

  const handleSignOut = async () => {
    await signOut();
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
                <Link to="/products" className="block p-3 rounded-md hover:bg-muted transition-colors">All Products</Link>
                <Link to="/products#search" className="block p-3 rounded-md hover:bg-muted transition-colors">Search</Link>
                <Link to="/products#service" className="block p-3 rounded-md hover:bg-muted transition-colors">Service</Link>
                <Link to="/products#commerce" className="block p-3 rounded-md hover:bg-muted transition-colors">Commerce</Link>
                <Link to="/products#platform" className="block p-3 rounded-md hover:bg-muted transition-colors">Platform</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-coveo-blue transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 rounded-lg p-2 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/solutions" className="block p-3 rounded-md hover:bg-muted transition-colors">By Industry</Link>
                <Link to="/solutions#retail" className="block p-3 rounded-md hover:bg-muted transition-colors">Retail</Link>
                <Link to="/solutions#financial" className="block p-3 rounded-md hover:bg-muted transition-colors">Financial Services</Link>
                <Link to="/solutions#technology" className="block p-3 rounded-md hover:bg-muted transition-colors">Technology</Link>
                <Link to="/solutions#healthcare" className="block p-3 rounded-md hover:bg-muted transition-colors">Healthcare</Link>
              </div>
            </div>
            <Link to="/resources" className="text-foreground hover:text-coveo-blue transition-colors">Resources</Link>
            <Link to="/pricing" className="text-foreground hover:text-coveo-blue transition-colors">Pricing</Link>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-coveo-blue transition-colors">
                Company <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 rounded-lg p-2 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/company" className="block p-3 rounded-md hover:bg-muted transition-colors">About Us</Link>
                <Link to="/company#leadership" className="block p-3 rounded-md hover:bg-muted transition-colors">Leadership</Link>
                <Link to="/company#careers" className="block p-3 rounded-md hover:bg-muted transition-colors">Careers</Link>
                <Link to="/company#locations" className="block p-3 rounded-md hover:bg-muted transition-colors">Locations</Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Button
                  variant="link"
                  className="text-foreground hover:text-coveo-blue"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </Button>
                <div className="relative group">
                  <button className="flex items-center text-foreground hover:text-coveo-blue transition-colors">
                    <User className="h-5 w-5 mr-1" />
                    <span>Account</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 rounded-lg p-2 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <Link to="/profile" className="block p-3 rounded-md hover:bg-muted transition-colors">Profile</Link>
                    <Link to="/my-bookings" className="block p-3 rounded-md hover:bg-muted transition-colors">My Bookings</Link>
                    <Link to="/settings" className="block p-3 rounded-md hover:bg-muted transition-colors">Settings</Link>
                    <button 
                      className="block w-full text-left p-3 rounded-md hover:bg-muted transition-colors text-red-500"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Button variant="link" className="text-foreground hover:text-coveo-blue" onClick={() => navigate("/login")}>Login</Button>
                <Button className="btn-hover bg-coveo-blue hover:bg-coveo-blue/90" onClick={() => navigate("/signup")}>Get Started</Button>
              </>
            )}
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
          <Link to="/products" className="block py-3 border-b">Products</Link>
          <Link to="/solutions" className="block py-3 border-b">Solutions</Link>
          <Link to="/resources" className="block py-3 border-b">Resources</Link>
          <Link to="/pricing" className="block py-3 border-b">Pricing</Link>
          <Link to="/company" className="block py-3 border-b">Company</Link>
          
          {user ? (
            <>
              <Link to="/dashboard" className="block py-3 border-b">Dashboard</Link>
              <Link to="/profile" className="block py-3 border-b">Profile</Link>
              <Link to="/my-bookings" className="block py-3 border-b">My Bookings</Link>
              <button 
                className="w-full text-left py-3 border-b text-red-500"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <div className="flex flex-col space-y-3 py-4">
              <Button variant="outline" onClick={() => navigate("/login")}>Login</Button>
              <Button className="bg-coveo-blue hover:bg-coveo-blue/90" onClick={() => navigate("/signup")}>Get Started</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
