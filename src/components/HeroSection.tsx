import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-secondary py-24 md:py-32 lg:py-40">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />

      <div className="container relative z-10 text-center">
        <h1 className="mx-auto max-w-4xl text-3xl font-extrabold tracking-tight text-secondary-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Automation Systems Designer for Lead Capture, Workflow Automation, and Revenue Recovery
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-secondary-foreground/70">
          I design automation systems that connect your tools, reduce manual work, and help businesses respond faster to leads.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg" onClick={scrollToPortfolio} className="gap-2">
            View Automation Systems
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
