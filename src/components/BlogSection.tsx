
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "How AI is Transforming Enterprise Search",
    excerpt: "Discover how artificial intelligence is revolutionizing how businesses and employees find information.",
    category: "AI Technology",
    date: "May 15, 2023",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    url: "/resources#blog1"
  },
  {
    id: 2,
    title: "The Future of E-commerce Personalization",
    excerpt: "Learn how leading retailers are using AI-powered recommendations to increase conversion rates.",
    category: "Commerce",
    date: "April 27, 2023",
    imageUrl: "https://images.unsplash.com/photo-1661347333292-b85d6c1af3c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    url: "/resources#blog2"
  },
  {
    id: 3,
    title: "Measuring the ROI of Intelligent Search",
    excerpt: "A comprehensive guide to calculating the business impact of improved search experiences.",
    category: "Business Insights",
    date: "March 10, 2023",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    url: "/resources#blog3"
  }
];

const BlogSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setAnimate(true);
      }, 100);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="blog"
      className="py-20 relative overflow-hidden bg-coveo-gray/50"
    >
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 h-80 w-80 -z-10 bg-coveo-purple/5 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block mb-4 px-4 py-1.5 bg-white text-coveo-purple text-sm font-medium rounded-full">
            Latest Updates
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">From Our Blog</h2>
          <p className="text-lg text-muted-foreground">
            Insights, best practices, and innovative ideas from our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} 
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <Link to={post.url} className="block">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <Link to={post.url} className="block">
                  <h3 className="text-xl font-bold mb-3 hover:text-coveo-blue transition-colors">{post.title}</h3>
                </Link>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link to={post.url} className="inline-flex items-center text-coveo-blue hover:text-coveo-blue/80 font-medium">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className={`flex justify-center mt-12 transition-all duration-700 delay-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <Button asChild variant="outline" size="lg">
            <Link to="/resources">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
