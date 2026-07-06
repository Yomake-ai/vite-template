import { memo, useEffect, useState } from "react";

const prompts = [
  "Build a booking page for my padel club with a weekly schedule",
  "A portfolio for my ceramics studio with a photo gallery",
  "A dashboard that tracks my café's daily sales and top items",
];

/* Isolated so the typing loop never re-renders the page layout */
const TypedPrompt = memo(() => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(prompts[0]);
      return;
    }

    let timer: number;
    let index = 0;
    let chars = 0;
    let deleting = false;

    const tick = () => {
      const current = prompts[index];
      if (!deleting) {
        chars += 1;
        setText(current.slice(0, chars));
        if (chars === current.length) {
          deleting = true;
          timer = window.setTimeout(tick, 2800);
        } else {
          timer = window.setTimeout(tick, 26 + Math.random() * 45);
        }
      } else {
        chars = Math.max(0, chars - 3);
        setText(current.slice(0, chars));
        if (chars === 0) {
          deleting = false;
          index = (index + 1) % prompts.length;
          timer = window.setTimeout(tick, 500);
        } else {
          timer = window.setTimeout(tick, 16);
        }
      }
    };

    timer = window.setTimeout(tick, 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <code className="font-mono text-sm text-foreground/80">
      {text}
      <span className="animate-caret ml-0.5 inline-block h-4 w-[2px] translate-y-[2px] bg-foreground/60" />
    </code>
  );
});
TypedPrompt.displayName = "TypedPrompt";

const Index = () => {
  return (
    <div className="relative min-h-[100dvh] flex flex-col overflow-x-clip bg-background">
      {/* Dot-grid canvas texture, fading toward the chat side */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_70%_65%_at_72%_45%,black,transparent)]"
      />

      <header className="relative flex items-center justify-between px-6 md:px-10 py-6">
        <a
          href="/"
          className="flex items-center gap-2.5 transition-transform active:scale-[0.98]"
        >
          <img
            src="/logo_yomake_1200.png"
            alt="Youmake"
            className="h-7 w-7 rounded-md"
          />
          <span className="text-sm font-medium tracking-tight">Youmake</span>
        </a>
        <a
          href="https://youmake.ai"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          youmake.ai
        </a>
      </header>

      <main className="relative flex flex-1 items-center">
        {/* Artboard corner marks */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 md:inset-x-10 inset-y-2 hidden lg:block"
        >
          <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-foreground/20" />
          <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-foreground/20" />
          <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-foreground/20" />
          <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-foreground/20" />
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-8 lg:gap-12">
          <div className="max-w-3xl lg:ml-[6vw]">
            <div
              className="animate-fade-up flex items-center gap-2"
              style={{ "--index": 0 } as React.CSSProperties}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-breathe absolute inline-flex h-full w-full rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Ready to build
              </span>
            </div>

            <h1
              className="animate-fade-up mt-6 text-4xl md:text-5xl xl:text-6xl font-medium tracking-tighter leading-none"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              A blank page,
              <br />
              <span className="text-muted-foreground">
                waiting for your first prompt.
              </span>
            </h1>

            <p
              className="animate-fade-up mt-6 text-base text-muted-foreground leading-relaxed max-w-[52ch]"
              style={{ "--index": 2 } as React.CSSProperties}
            >
              This is the starting template. Describe what you want in the
              chat&nbsp;&mdash; Youmake writes the code, and this page becomes
              your app.
            </p>

            <div
              className="animate-fade-up mt-10"
              style={{ "--index": 3 } as React.CSSProperties}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Try asking
              </p>
              <div className="mt-3 flex min-h-[3rem] w-full max-w-xl items-center rounded-lg border border-border bg-muted/40 px-4 py-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors hover:border-foreground/20">
                <TypedPrompt />
              </div>
            </div>
          </div>

          {/* Points at the chat panel, which sits to the right of this preview */}
          <div
            className="animate-fade-up mt-14 flex flex-col items-end gap-3 md:mt-0 md:pb-16"
            style={{ "--index": 4 } as React.CSSProperties}
          >
            <div className="animate-nudge text-muted-foreground">
              <svg
                width="168"
                height="63"
                viewBox="0 0 150 56"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 44 C 42 20, 92 14, 138 26"
                  pathLength={1}
                  className="animate-draw"
                  style={{ animationDelay: "0.6s" }}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M138 26 L 124 19 M138 26 L 127 36"
                  pathLength={1}
                  className="animate-draw"
                  style={{ animationDelay: "1.3s" }}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-right font-mono text-xs uppercase tracking-widest leading-relaxed text-muted-foreground">
              Write your prompt
              <br />
              in the chat
            </p>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Index;
