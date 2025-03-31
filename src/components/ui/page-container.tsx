
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const PageContainer = ({ children, fullWidth = false }: PageContainerProps) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Set mounted to true immediately when component mounts
    setMounted(true);
    
    // No need to set mounted to false on unmount as it can cause flickering
    // when transitioning between pages
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#D3E4FD]">
      <Navbar />
      <main 
        className={`flex-grow ${!fullWidth && 'container mx-auto px-4 py-24'} 
        transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageContainer;
