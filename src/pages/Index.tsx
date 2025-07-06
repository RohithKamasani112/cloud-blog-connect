import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogData";

const Index = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Featured Posts Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Featured Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular and insightful articles from expert developers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <div
                key={post.id}
                className={`animate-scale-in animate-stagger-${Math.min(index + 1, 4)}`}
              >
                <BlogCard post={post} featured={index === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the newest articles and tutorials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularPosts.map((post, index) => (
              <div
                key={post.id}
                className={`animate-fade-in-up animate-stagger-${Math.min(index + 1, 4)}`}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
