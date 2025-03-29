
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const PageContainer = ({ children, fullWidth = false }: PageContainerProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className={`flex-grow ${!fullWidth && 'container mx-auto px-4 py-24'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageContainer;
