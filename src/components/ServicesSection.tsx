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
import { Card, CardContent } from "@/components/ui/card";

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

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">What I Build</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Automation Services
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          End-to-end automation systems designed to save time, capture more leads, and recover lost revenue.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Card
            key={s.title}
            className="group border-border/60 bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <CardContent className="p-6 flex flex-col items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
