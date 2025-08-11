import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <Badge variant="outline" className="animate-pulse-soft">
            <Sparkles className="w-4 h-4 mr-2" />
            Powered by Vite + React + TypeScript
          </Badge>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-gradient">
                Build Something
              </span>
              <br />
              <span className="text-foreground/90">Amazing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Simply chat with Yomake.ai to create your web app or website. 
              Describe your idea and watch it come to life instantly.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8 h-12 group">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-12">
              <Code2 className="w-4 h-4 mr-2" />
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
