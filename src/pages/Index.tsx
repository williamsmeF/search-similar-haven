
import PageContainer from "@/components/ui/page-container";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <PageContainer fullWidth>
      <Hero />
      <Features />
      <Solutions />
      <Testimonials />
      <CTA />
      <ScrollToTop />
    </PageContainer>
  );
};

export default Index;
