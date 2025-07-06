import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories, blogPosts } from "@/data/blogData";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-cloud">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Explore Categories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover articles organized by technology and topic. From frontend frameworks 
              to backend systems, find the content that matches your interests.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const categoryPosts = blogPosts.filter(post => post.category === category.name);
              
              return (
                <div
                  key={category.id}
                  className={`animate-scale-in animate-stagger-${Math.min(index + 1, 4)}`}
                >
                  <Card className="card-floating h-full cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        {/* Icon */}
                        <div className="text-4xl mb-4">{category.icon}</div>
                        
                        {/* Category Info */}
                        <div>
                          <h3 className={`text-xl font-bold mb-2 ${category.color} group-hover:text-primary transition-smooth`}>
                            {category.name}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {category.description}
                          </p>
                        </div>

                        {/* Post Count */}
                        <div className="flex items-center justify-center space-x-2">
                          <Badge 
                            variant="outline" 
                            className="bg-accent/50 text-foreground"
                          >
                            {category.postCount} articles
                          </Badge>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Most Popular Topics
            </h2>
            <p className="text-lg text-muted-foreground">
              The categories our developers love most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.slice(0, 3).map((category) => {
              const categoryPosts = blogPosts.filter(post => post.category === category.name);
              
              return (
                <Card key={category.id} className="glass">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4">{category.icon}</div>
                      <h3 className={`text-2xl font-bold mb-2 ${category.color}`}>
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                    </div>

                    {/* Recent Posts Preview */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-foreground">Recent Articles</h4>
                      {categoryPosts.slice(0, 3).map((post) => (
                        <div
                          key={post.id}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-background/50 transition-smooth cursor-pointer"
                        >
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="font-medium text-sm text-foreground line-clamp-2">
                              {post.title}
                            </h5>
                            <p className="text-xs text-muted-foreground mt-1">
                              {post.author.name} • {post.readTime} min
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-border text-center">
                      <Badge className="bg-primary/10 text-primary">
                        {categoryPosts.length} total articles
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;