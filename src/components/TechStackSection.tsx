import {
  Workflow,
  Rocket,
  Zap,
  Cog,
  Phone,
  MessageCircle,
  Send,
  Table2,
  Sheet,
  Mail,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const techItems = [
  { name: "n8n", icon: Workflow },
  { name: "GoHighLevel", icon: Rocket },
  { name: "Zapier", icon: Zap },
  { name: "Make", icon: Cog },
  { name: "Twilio", icon: Phone },
  { name: "WhatsApp", icon: MessageCircle },
  { name: "Telegram", icon: Send },
  { name: "Airtable", icon: Table2 },
  { name: "Google Sheets", icon: Sheet },
  { name: "SendGrid / Mailgun", icon: Mail },
];

const TechStackSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="tech-stack" className="py-20 md:py-28 bg-muted/30">
      <div className="container" ref={sectionRef}>
        <div className="text-center mb-14 scroll-reveal">
          <p className="text-sm font-mono font-semibold uppercase tracking-widest text-primary mb-2">Tools & Platforms</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            The platforms and tools I use to build reliable automation systems.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {techItems.map((item, i) => (
            <div
              key={item.name}
              className={`scroll-reveal scroll-reveal-delay-${(i % 7) + 1} flex flex-col items-center justify-center gap-3 glass-card px-4 py-6 text-center hover:neon-border hover:-translate-y-1 transition-all duration-300 cursor-default group`}
            >
              <item.icon className="h-6 w-6 text-primary group-hover:text-primary group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)] transition-all" />
              <span className="font-heading text-sm font-semibold text-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
