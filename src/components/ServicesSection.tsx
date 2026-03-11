import {
  PhoneOff,
  Zap,
  RefreshCcw,
  BarChart3,
  CalendarCheck,
  Bot,
  UserCheck,
  ShoppingCart,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Zap, title: "Lead Capture Automation", desc: "Automatically capture and route leads from any source into your CRM." },
  { icon: PhoneOff, title: "Missed Call Recovery", desc: "Instantly follow up with missed callers via SMS to recover lost opportunities." },
  { icon: RefreshCcw, title: "Automated Lead Follow-Up", desc: "Multi-step sequences that nurture leads without manual effort." },
  { icon: BarChart3, title: "CRM Pipeline Automation", desc: "Automate deal stages, tasks, and notifications inside your CRM." },
  { icon: CalendarCheck, title: "Appointment Booking", desc: "Self-service booking flows with reminders and confirmations." },
  { icon: Bot, title: "AI Chat Assistants", desc: "AI-powered chatbots that qualify leads and answer FAQs 24/7." },
  { icon: UserCheck, title: "Client Onboarding", desc: "Automated onboarding workflows with forms, docs, and task tracking." },
  { icon: ShoppingCart, title: "eCommerce Recovery", desc: "Recover abandoned carts and re-engage lapsed customers automatically." },
];

const ServicesSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container" ref={sectionRef}>
        <div className="text-center mb-14 scroll-reveal">
          <p className="text-sm font-mono font-semibold uppercase tracking-widest text-primary mb-2">What I Build</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Automation Services
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            End-to-end automation systems designed to save time, capture more leads, and recover lost revenue.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} group glass-card p-6 hover:neon-border hover:-translate-y-1 transition-all duration-300 cursor-pointer active:scale-95`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
