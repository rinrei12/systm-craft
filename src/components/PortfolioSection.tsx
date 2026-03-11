import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/portfolioData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PortfolioSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-muted/30">
      <div className="container" ref={sectionRef}>
        <div className="text-center mb-14 scroll-reveal">
          <p className="text-sm font-mono font-semibold uppercase tracking-widest text-primary mb-2">Portfolio</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Automation Systems I've Built
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Real-world automation systems delivering measurable business impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Link
              to={`/portfolio/${p.slug}`}
              key={p.slug}
              className={`scroll-reveal scroll-reveal-delay-${(i % 6) + 1} group glass-card flex flex-col overflow-hidden hover:neon-border hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="h-44 overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 pb-3">
                <Badge className="mb-2 text-xs bg-primary/20 text-primary border-primary/30">{p.industry}</Badge>
                <h3 className="text-lg font-semibold leading-snug text-foreground">{p.title}</h3>
              </div>
              <div className="px-6 pb-6 flex flex-col flex-1 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Problem</p>
                  <p className="text-sm text-foreground/80">{p.problem}</p>
                </div>
                <div className="mt-auto pt-3 border-t border-border/40">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Impact</p>
                  <ul className="space-y-1.5">
                    {p.impact.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80 text-left">
                        <CheckCircle className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                        <span className="text-left">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
