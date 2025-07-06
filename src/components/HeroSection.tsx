import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-cloud.jpg";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cloud computing background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="floating absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"></div>
        <div className="floating-delayed absolute top-40 right-32 w-12 h-12 bg-white/15 rounded-lg backdrop-blur-sm"></div>
        <div className="floating absolute bottom-32 left-1/4 w-20 h-20 bg-white/8 rounded-2xl backdrop-blur-sm"></div>
        <div className="floating-delayed absolute top-1/3 right-1/4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Dev<span className="text-primary-light">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your gateway to the latest in development, where cloud meets code and innovation takes flight.
          </p>
        </div>

        {/* Search Bar */}
        <div className="animate-scale-in animate-stagger-1">
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles, tutorials, and insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-lg bg-white border-white/20 focus:border-primary"
                />
              </div>
              <Button className="btn-cloud h-12 px-8">
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 animate-fade-in-up animate-stagger-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/70 text-sm">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">8</div>
              <div className="text-white/70 text-sm">Expert Authors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">20+</div>
              <div className="text-white/70 text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-white/70 text-sm">Readers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;