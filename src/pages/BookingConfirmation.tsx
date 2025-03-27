
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BookingConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-coveo-lightGray py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-24 w-24 text-green-500" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Your Demo is Confirmed!</h1>
            
            <p className="text-xl mb-6">
              Thank you for booking a demo with us. We're excited to show you how Coveo can transform your business.
            </p>
            
            <div className="bg-coveo-gray p-6 rounded-lg mb-8">
              <h2 className="text-lg font-semibold mb-4 flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                Demo Details
              </h2>
              
              <div className="space-y-2 mb-4">
                <p><strong>Date:</strong> [Demo date will appear here]</p>
                <p><strong>Time:</strong> [Time slot will appear here]</p>
                <p><strong>Format:</strong> Virtual meeting (Zoom)</p>
              </div>
              
              <p className="text-sm text-muted-foreground">
                A calendar invitation with meeting details has been sent to your email.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center">
              <Button
                onClick={() => navigate("/dashboard")}
                variant="outline"
                className="flex items-center"
              >
                Go to Dashboard
              </Button>
              
              <Button
                onClick={() => navigate("/resources")}
                className="bg-coveo-blue hover:bg-coveo-blue/90 flex items-center"
              >
                Explore Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingConfirmation;
