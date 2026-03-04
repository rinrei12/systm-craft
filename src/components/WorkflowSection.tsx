import { PhoneOff, Webhook, Workflow, UserPlus, MessageSquare, Database, CalendarCheck } from "lucide-react";

const steps = [
  { icon: PhoneOff, label: "Missed Call", sub: "Customer calls, no answer" },
  { icon: Webhook, label: "Twilio Webhook", sub: "Event triggers instantly" },
  { icon: Workflow, label: "n8n Workflow", sub: "Automation engine runs" },
  { icon: UserPlus, label: "Lead Capture", sub: "Contact saved to CRM" },
  { icon: MessageSquare, label: "SMS Response", sub: "Instant text sent" },
  { icon: Database, label: "CRM Update", sub: "Pipeline & tags updated" },
  { icon: CalendarCheck, label: "Booking Link", sub: "Self-schedule sent" },
];

const WorkflowSection = () => (
  <section id="workflow" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">How It Works</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Workflow Architecture Example
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          A real missed-call recovery workflow — from trigger to booked appointment in seconds.
        </p>
      </div>

      {/* Desktop horizontal flow */}
      <div className="hidden lg:flex items-start justify-between gap-2">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-start">
            <div className="flex flex-col items-center text-center w-32">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-3">
                <s.icon className="h-6 w-6" />
              </div>
              <p className="font-heading text-sm font-semibold text-foreground">{s.label}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-snug">{s.sub}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center pt-5">
                <div className="w-8 h-px bg-primary/30" />
                <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-transparent border-l-primary/40" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile vertical flow */}
      <div className="lg:hidden flex flex-col items-center gap-1">
        {steps.map((s, i) => (
          <div key={s.label} className="flex flex-col items-center">
            <div className="flex items-center gap-4 w-full max-w-xs">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="h-6 w-px bg-primary/20 my-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkflowSection;
