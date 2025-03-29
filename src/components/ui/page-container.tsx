
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
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
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
