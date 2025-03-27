
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink, Search, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface DemoBooking {
  bookingId: string;
  name: string;
  email: string;
  company: string;
  demoType: string;
  date: string;
  timeSlot: string;
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const getDemoTypeName = (type: string) => {
  const types = {
    product: "General Product Overview",
    search: "Search Capabilities",
    commerce: "Commerce Solutions",
    service: "Service & Support Features"
  };
  return types[type as keyof typeof types] || type;
};

// Sample bookings data for demo purposes
const sampleBookings: DemoBooking[] = [
  {
    bookingId: "DEMO-1234",
    name: "John Doe",
    email: "john.doe@example.com",
    company: "Acme Inc",
    demoType: "product",
    date: "2023-10-15",
    timeSlot: "10:00-11:00"
  },
  {
    bookingId: "DEMO-5678",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    company: "Tech Solutions",
    demoType: "search",
    date: "2023-10-20",
    timeSlot: "14:00-15:00"
  }
];

const MyBookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<DemoBooking[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would be an API call to fetch bookings
    // For demo purposes, we're using sample data and checking session storage
    const storedBooking = sessionStorage.getItem("demoBooking");
    
    setTimeout(() => {
      let allBookings = [...sampleBookings];
      
      if (storedBooking) {
        const parsedBooking = JSON.parse(storedBooking);
        // Avoid duplicates by checking if booking already exists
        if (!allBookings.some(b => b.bookingId === parsedBooking.bookingId)) {
          allBookings = [parsedBooking, ...allBookings];
        }
      }
      
      setBookings(allBookings);
      setLoading(false);
    }, 1000); // Simulate loading delay
  }, []);

  const filteredBookings = bookings.filter(booking => 
    booking.bookingId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    booking.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    getDemoTypeName(booking.demoType).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Bookings</h1>
          <p className="text-muted-foreground">
            View and manage your scheduled demos
          </p>
        </div>

        <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search bookings..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            onClick={() => navigate("/book-demo")}
            className="bg-coveo-blue hover:bg-coveo-blue/90"
          >
            Book a New Demo
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-16 h-16 border-4 border-t-coveo-blue border-coveo-gray rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {filteredBookings.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredBookings.map((booking) => (
                  <div key={booking.bookingId} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{getDemoTypeName(booking.demoType)}</h3>
                        <p className="text-muted-foreground">{booking.company}</p>
                      </div>
                      <span className="bg-coveo-blue/10 text-coveo-blue text-xs font-medium px-2.5 py-1 rounded">
                        {booking.bookingId}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{formatDate(booking.date)}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{booking.timeSlot.replace('-', ' - ')} (Your local time)</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash className="mr-1 h-4 w-4" />
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        className="bg-coveo-blue hover:bg-coveo-blue/90"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Join Meeting
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <Calendar className="mx-auto h-12 w-12 text-coveo-gray mb-4" />
                <h2 className="text-xl font-semibold mb-2">No bookings found</h2>
                <p className="text-muted-foreground mb-6">
                  {searchQuery ? 
                    "No bookings match your search criteria." : 
                    "You haven't scheduled any demos yet."}
                </p>
                <Button 
                  onClick={() => navigate("/book-demo")}
                  className="bg-coveo-blue hover:bg-coveo-blue/90"
                >
                  Book Your First Demo
                </Button>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyBookings;
