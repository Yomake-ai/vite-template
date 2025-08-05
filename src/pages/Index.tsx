import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Bot, Code, Zap, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <Bot className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Yomake.ai</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="hidden sm:inline-flex">
                <Sparkles className="h-3 w-3 mr-1" />
                AI Coder Agent
              </Badge>
              <Button variant="outline" size="sm">
                Start Coding
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              <Bot className="h-3 w-3 mr-2" />
              AI-Powered Development
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-6">
              Your AI Coder Agent
              <span className="block text-primary">for Makers</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10 leading-relaxed">
              Transform your ideas into working applications instantly. Yomake.ai is the intelligent coding companion that helps makers, entrepreneurs, and developers build faster with AI-powered code generation and smart debugging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="group">
                <Rocket className="mr-2 h-4 w-4" />
                Start Building Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                <Code className="mr-2 h-4 w-4" />
                See AI in Action
              </Button>
            </div>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Badge variant="secondary" className="px-3 py-1">
                <Zap className="h-3 w-3 mr-1" />
                Instant Code Generation
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Bot className="h-3 w-3 mr-1" />
                Smart Debugging
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Code className="h-3 w-3 mr-1" />
                Rapid Prototyping
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Sparkles className="h-3 w-3 mr-1" />
                AI-Powered Assistance
              </Badge>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-primary to-primary/80 rounded-md flex items-center justify-center">
                <Bot className="h-3 w-3 text-primary-foreground" />
              </div>
              <span className="font-semibold">Yomake.ai</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>AI-Powered Coding for Makers</span>
              <Badge variant="outline" className="text-xs">
                <Sparkles className="h-2 w-2 mr-1" />
                AI Beta
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
