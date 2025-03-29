
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

const Index = () => {
  return (
    <PageContainer fullWidth>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Solutions />
      <StatsSection />
      <Testimonials />
      <FAQ />
      <BlogSection />
      <Newsletter />
      <CTA />
      <ScrollToTop />
    </PageContainer>
  );
};

export default Index;
