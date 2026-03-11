import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Phone, Linkedin, ExternalLink } from "lucide-react";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/10" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="text-center md:text-left">
            <p className="text-sm font-mono font-medium uppercase tracking-widest text-primary mb-4 neon-text">
              Automation Systems Designer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-6">
              Jeremy Runes
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              I design automation systems that connect your tools, reduce manual work, and help businesses respond faster to leads.
            </p>

            {/* Contact links */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <a
                href="mailto:jmail@jeremyrunes.com"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
              >
                <Mail className="h-4 w-4 text-primary" />
                jmail@jeremyrunes.com
              </a>
              <a
                href="tel:+639178480701"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
              >
                <Phone className="h-4 w-4 text-accent" />
                +63 917 848 0701
              </a>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-10">
              <a
                href="https://www.upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all"
              >
                <ExternalLink className="h-4 w-4 text-accent" />
                Upwork
              </a>
              <a
                href="https://www.onlinejobs.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all"
              >
                <ExternalLink className="h-4 w-4 text-accent" />
                OnlineJobsPH
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-secondary/40 transition-all"
              >
                <Linkedin className="h-4 w-4 text-secondary" />
                LinkedIn
              </a>
            </div>

            <Button size="lg" onClick={scrollToPortfolio} className="gap-2 neon-glow">
              View Automation Systems
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Right - Profile placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-60 blur-lg animate-glow-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/40 neon-glow">
                <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-extrabold text-primary/30">JR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
