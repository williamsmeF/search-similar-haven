
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, FileText, Settings, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">Welcome to your dashboard</h1>
          <p className="text-muted-foreground">
            Manage your account, bookings, and preferences from here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Calendar className="h-8 w-8 text-coveo-blue mr-3" />
              <h2 className="text-xl font-semibold">Your Bookings</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              View and manage your upcoming demo bookings and meetings.
            </p>
            <Button
              onClick={() => navigate("/my-bookings")}
              className="w-full bg-coveo-blue hover:bg-coveo-blue/90"
            >
              View Bookings
            </Button>
          </div>

          <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Search className="h-8 w-8 text-coveo-purple mr-3" />
              <h2 className="text-xl font-semibold">Request a Demo</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Book a personalized demo to see how Coveo can help your business.
            </p>
            <Button
              onClick={() => navigate("/book-demo")}
              className="w-full bg-coveo-purple hover:bg-coveo-purple/90 text-white"
            >
              Book a Demo
            </Button>
          </div>

          <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-coveo-darkBlue mr-3" />
              <h2 className="text-xl font-semibold">Resources</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Access documentation, guides, and educational materials.
            </p>
            <Button
              onClick={() => navigate("/resources")}
              variant="outline"
              className="w-full border-coveo-darkBlue text-coveo-darkBlue hover:bg-coveo-darkBlue hover:text-white"
            >
              Browse Resources
            </Button>
          </div>

          <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-coveo-blue mr-3" />
              <h2 className="text-xl font-semibold">Team Management</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Manage your team members and their access permissions.
            </p>
            <Button
              onClick={() => navigate("/team")}
              variant="outline"
              className="w-full"
            >
              Manage Team
            </Button>
          </div>

          <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Settings className="h-8 w-8 text-gray-600 mr-3" />
              <h2 className="text-xl font-semibold">Account Settings</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Update your profile, notification preferences, and security settings.
            </p>
            <Button
              onClick={() => navigate("/settings")}
              variant="outline"
              className="w-full"
            >
              Settings
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
