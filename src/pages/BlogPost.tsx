import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogData";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, BookmarkPlus, Share } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="btn-cloud">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8 animate-fade-in-up">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary-dark transition-smooth"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Link>
          </div>

          {/* Article Header */}
          <div className="animate-scale-in">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Author Info & Meta */}
            <Card className="glass mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{post.author.name}</h3>
                      <p className="text-muted-foreground">{post.author.bio}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.views} views</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden cloud-shadow animate-scale-in">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="flex-1">
              <div className="prose prose-lg max-w-none animate-fade-in-up">
                <div className="space-y-6 text-foreground leading-relaxed">
                  <p className="text-lg">
                    {post.content} This is where the full article content would be displayed. 
                    The article would contain detailed information about {post.title.toLowerCase()}, 
                    including code examples, best practices, and practical implementations.
                  </p>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-4">Key Concepts</h2>
                  <p>
                    Understanding the fundamental concepts is crucial for mastering this topic. 
                    Let's explore the core principles and their practical applications.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Details</h2>
                  <p>
                    Here we would dive into the specific implementation details, 
                    providing step-by-step guidance and real-world examples.
                  </p>

                  <div className="bg-muted rounded-xl p-6 my-8">
                    <h3 className="font-semibold mb-2">💡 Pro Tip</h3>
                    <p className="text-muted-foreground">
                      This section would contain valuable insights and professional tips 
                      from experienced developers in the field.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                  <p>
                    In conclusion, this comprehensive guide provides you with the essential 
                    knowledge and practical skills needed to excel in this area of development.
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-accent/50 hover:bg-accent transition-smooth cursor-pointer"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 space-y-8">
              {/* Actions */}
              <Card className="glass">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Actions</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <BookmarkPlus className="w-4 h-4 mr-2" />
                      Bookmark
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Share className="w-4 h-4 mr-2" />
                      Share Article
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Author Specialties */}
              <Card className="glass">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Author Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.author.specialties.map((specialty) => (
                      <Badge
                        key={specialty}
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card className="glass">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Article Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Views</span>
                      <span className="font-medium">{post.views.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Likes</span>
                      <span className="font-medium">{post.likes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reading Time</span>
                      <span className="font-medium">{post.readTime} min</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;