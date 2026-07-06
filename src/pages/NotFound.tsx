import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <main className="flex flex-1 items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl md:ml-[6vw]">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              404
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-medium tracking-tighter leading-none">
              This page
              <br />
              <span className="text-muted-foreground">
                doesn&rsquo;t exist yet.
              </span>
            </h1>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-[52ch]">
              No route matches{" "}
              <code className="font-mono text-sm text-foreground/80">
                {location.pathname}
              </code>
              . Ask Youmake to create it, or head back home.
            </p>
            <a
              href="/"
              className="mt-8 inline-block text-sm font-medium underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              Back to home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
