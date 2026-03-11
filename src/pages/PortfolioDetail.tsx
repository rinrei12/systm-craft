import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/">← Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
        <div className="container relative z-10 py-12 md:py-20">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground gap-2" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                {project.industry}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden neon-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Problem */}
          <div className="glass-card p-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-destructive mb-3">The Problem</h3>
            <p className="text-foreground/80 leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="glass-card p-8 neon-border">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">The Solution</h3>
            <p className="text-foreground/80 leading-relaxed">{project.solution}</p>
          </div>

          {/* Impact */}
          <div className="glass-card p-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">The Impact</h3>
            <ul className="space-y-3">
              {project.impact.map((item) => (
                <li key={item} className="flex items-start gap-2 text-foreground/80">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Used */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4 text-center">
            Technologies Used
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {project.techUsed.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-4 py-2 text-sm border-border/60 text-foreground bg-muted/50"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Want a similar system for your business?</p>
          <Button size="lg" className="neon-glow" asChild>
            <a href="mailto:jmail@jeremyrunes.com">Get in Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
