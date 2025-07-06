import { BlogPost } from "@/types/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const cardClass = featured 
    ? "card-blog col-span-full md:col-span-2 lg:col-span-3" 
    : "card-blog";

  return (
    <Link to={`/post/${post.id}`}>
      <Card className={cardClass}>
        <div className={`relative ${featured ? 'h-64 md:h-80' : 'h-48'} overflow-hidden`}>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Featured Badge */}
          {featured && (
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
          
          {/* Category Badge */}
          <Badge 
            variant="secondary" 
            className="absolute top-4 right-4 glass text-foreground"
          >
            {post.category}
          </Badge>
        </div>

        <CardContent className="p-6">
          <div className="space-y-3">
            {/* Title */}
            <h3 className={`font-bold text-foreground hover:text-primary transition-smooth ${
              featured ? 'text-xl md:text-2xl' : 'text-lg'
            }`}>
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className={`text-muted-foreground leading-relaxed ${
              featured ? 'text-base' : 'text-sm'
            }`}>
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs bg-accent/50 hover:bg-accent transition-smooth"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Author and Meta Info */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <User className="w-3 h-3" />
                  <span>{post.author.name}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime} min</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;