
import PageContainer from "@/components/ui/page-container";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturedProducts from "@/components/FeaturedProducts";
import Solutions from "@/components/Solutions";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/CTA";
import ScrollToTop from "@/components/ScrollToTop";
import { Suspense, lazy, useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Add a loading fallback component
const LoadingSection = () => (
  <div className="py-12 w-full flex justify-center items-center">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-slate-200 h-10 w-10"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading content
    const timer = setTimeout(() => {
      setIsLoaded(true);
      toast({
        title: "Welcome to Coveo",
        description: "Discover how our AI-powered solutions can transform your business.",
        duration: 5000,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <PageContainer fullWidth>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Solutions />
      <Suspense fallback={<LoadingSection />}>
        {isLoaded && <StatsSection />}
      </Suspense>
      <Testimonials />
      <Suspense fallback={<LoadingSection />}>
        {isLoaded && <FAQ />}
      </Suspense>
      <BlogSection />
      <Newsletter />
      <CTA />
      <ScrollToTop />
    </PageContainer>
  );
};

export default Index;
