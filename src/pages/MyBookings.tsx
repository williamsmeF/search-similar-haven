
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink, Search, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import PageContainer from "@/components/ui/page-container";
import { bookingService, Booking } from "@/services/bookingService";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

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

const MyBookings = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Fetch bookings data
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => bookingService.getUserBookings(),
  });
  
  // Delete booking mutation
  const deleteMutation = useMutation({
    mutationFn: (bookingId: string) => bookingService.deleteBooking(bookingId),
    onSuccess: () => {
      toast.success("Booking cancelled successfully");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (error) => {
      toast.error(`Error cancelling booking: ${error.message}`);
    },
  });

  const handleCancelBooking = (bookingId: string) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      deleteMutation.mutate(bookingId);
    }
  };

  const filteredBookings = bookings.filter((booking: Booking) => 
    booking.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    booking.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    booking.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    booking.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageContainer>
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

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="w-16 h-16 border-4 border-t-coveo-blue border-coveo-gray rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {filteredBookings.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredBookings.map((booking: Booking) => (
                <div key={booking.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{booking.name}</h3>
                      <p className="text-muted-foreground">{booking.company || 'N/A'}</p>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {booking.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{formatDate(booking.booking_date)}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{new Date(booking.booking_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} (Your local time)</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                      onClick={() => handleCancelBooking(booking.id)}
                      disabled={deleteMutation.isPending}
                    >
                      <Trash className="mr-1 h-4 w-4" />
                      Cancel
                    </Button>
                    {booking.status !== 'canceled' && (
                      <Button
                        size="sm"
                        className="bg-coveo-blue hover:bg-coveo-blue/90"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Join Meeting
                      </Button>
                    )}
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
    </PageContainer>
  );
};

export default MyBookings;
