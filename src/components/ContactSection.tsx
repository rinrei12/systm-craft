import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Mail, CalendarCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container max-w-3xl" ref={sectionRef}>
        <div className="text-center mb-12 scroll-reveal">
          <p className="text-sm font-mono font-semibold uppercase tracking-widest text-primary mb-2">Book a Call</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let's Talk Automation
          </h2>
          <p className="mt-4 text-muted-foreground">
            Interested in improving lead response speed or automating repetitive operations?
            Pick a date below and let's explore how automation systems can simplify your workflow.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 scroll-reveal scroll-reveal-delay-2">
          <div className="glass-card neon-border p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(d) => d < new Date() || d.getDay() === 0 || d.getDay() === 6}
              className="pointer-events-auto"
            />
          </div>

          {date && (
            <div className="text-center space-y-4 animate-fade-in-up">
              <p className="text-foreground font-medium">
                <CalendarCheck className="inline h-5 w-5 mr-2 text-accent" />
                Selected: {date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
              </p>
              <Button size="lg" className="gap-2 neon-glow" asChild>
                <a
                  href={`mailto:jmail@jeremyrunes.com?subject=Booking Request – ${date.toLocaleDateString()}&body=Hi, I'd like to book a consultation on ${date.toLocaleDateString()}.`}
                >
                  <Mail className="h-4 w-4" />
                  Confirm & Send Request
                </a>
              </Button>
            </div>
          )}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground scroll-reveal scroll-reveal-delay-3">
          Or email me directly at{" "}
          <a href="mailto:jmail@jeremyrunes.com" className="text-primary hover:underline">
            jmail@jeremyrunes.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
