import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { authors } from "@/data/blogData";
import { Calendar, FileText } from "lucide-react";

const Authors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-cloud">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Meet Our Authors
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn from industry experts who share their knowledge, experience, and insights 
              to help you grow as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* Authors Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {authors.map((author, index) => (
              <div
                key={author.id}
                className={`animate-scale-in animate-stagger-${Math.min(index + 1, 4)}`}
              >
                <Card className="card-floating h-full">
                  <CardContent className="p-6 text-center">
                    {/* Avatar */}
                    <div className="mb-6">
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover cloud-shadow"
                      />
                    </div>

                    {/* Author Info */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{author.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {author.bio}
                        </p>
                      </div>

                      {/* Specialties */}
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-foreground">Specialties</h4>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {author.specialties.map((specialty) => (
                            <Badge
                              key={specialty}
                              variant="outline"
                              className="text-xs bg-primary/10 text-primary border-primary/20"
                            >
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="pt-4 border-t border-border">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center space-x-1 text-muted-foreground">
                            <FileText className="w-3 h-3" />
                            <span>{author.postCount} articles</span>
                          </div>
                          <div className="flex items-center space-x-1 text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>Since {new Date(author.joinDate).getFullYear()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Author Community
              </h2>
              <p className="text-lg text-muted-foreground">
                Our diverse team of experts brings together decades of experience
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-muted-foreground">Expert Authors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">65+</div>
                <div className="text-muted-foreground">Articles Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Technologies Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                <div className="text-muted-foreground">Developers Helped</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Authors;