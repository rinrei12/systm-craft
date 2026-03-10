import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

import imgMissedCall from "@/assets/portfolio-missed-call.png";
import imgDeadDb from "@/assets/portfolio-dead-database.png";
import imgNoShow from "@/assets/portfolio-no-show.png";
import imgCart from "@/assets/portfolio-abandoned-cart.png";
import imgOnboarding from "@/assets/portfolio-onboarding.png";
import imgFbChat from "@/assets/portfolio-fb-chat.png";
import imgFollowUp from "@/assets/portfolio-follow-up.png";

const projects = [
  {
    title: "Missed Call Recovery System",
    industry: "Home Services",
    image: imgMissedCall,
    problem: "Businesses were losing leads from unanswered calls during peak hours.",
    solution: "Twilio webhook triggers an n8n workflow that sends an instant SMS, logs the lead in GoHighLevel, and offers a booking link.",
    impact: ["85% lead recovery rate", "Average 30-second response time", "Eliminated manual call-back lists"],
  },
  {
    title: "Dead Database Revival System",
    industry: "Real Estate",
    image: imgDeadDb,
    problem: "Thousands of cold leads sitting in the CRM with no follow-up strategy.",
    solution: "Automated re-engagement campaign via SMS and email sequences, scoring responses and routing warm leads to agents.",
    impact: ["12% re-engagement rate from cold leads", "Revived $180K in pipeline value", "Zero manual outreach required"],
  },
  {
    title: "No-Show Recovery Automation",
    industry: "Healthcare / Clinics",
    image: imgNoShow,
    problem: "High no-show rates costing revenue and wasting appointment slots.",
    solution: "Automated reminders, confirmation requests, and instant re-booking flows for missed appointments.",
    impact: ["40% reduction in no-shows", "Automated rescheduling saved 10+ hours/week", "Improved patient satisfaction scores"],
  },
  {
    title: "Abandoned Cart Recovery System",
    industry: "eCommerce",
    image: imgCart,
    problem: "70%+ cart abandonment rate with no recovery process in place.",
    solution: "Multi-channel recovery via email, SMS, and WhatsApp with personalized discount offers and urgency triggers.",
    impact: ["18% cart recovery rate", "$45K recovered revenue in 90 days", "Fully automated, zero manual intervention"],
  },
  {
    title: "AI Client Onboarding Automation",
    industry: "Professional Services",
    image: imgOnboarding,
    problem: "Manual onboarding taking 2-3 hours per client with frequent missed steps.",
    solution: "AI-powered intake forms, automated document collection, task creation, and welcome sequences.",
    impact: ["Onboarding time reduced to 15 minutes", "100% task completion rate", "Consistent client experience every time"],
  },
  {
    title: "AI Facebook Chat Agent",
    industry: "Local Business",
    image: imgFbChat,
    problem: "Missing Facebook messages and losing leads to slow response times.",
    solution: "AI chatbot qualifies leads, answers FAQs, and books appointments directly from Facebook Messenger.",
    impact: ["24/7 lead qualification", "3x increase in booked consultations", "Instant response to every inquiry"],
  },
  {
    title: "Automated Lead Follow-Up System",
    industry: "B2B Services",
    image: imgFollowUp,
    problem: "Sales team overwhelmed with manual follow-ups, leads falling through the cracks.",
    solution: "Multi-step follow-up sequences triggered by lead source, with smart delays and escalation rules.",
    impact: ["60% increase in lead-to-meeting conversion", "Sales team saved 15+ hours/week", "No lead left behind"],
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-20 md:py-28 bg-muted/50">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Portfolio</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Automation Systems I've Built
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          Real-world automation systems delivering measurable business impact.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card
            key={p.title}
            className="border-border/60 bg-card hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            <div className="h-44 overflow-hidden bg-muted">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <CardHeader className="pb-3">
              <Badge variant="secondary" className="w-fit mb-2 text-xs">{p.industry}</Badge>
              <CardTitle className="text-lg leading-snug">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Problem</p>
                <p className="text-sm text-foreground/80">{p.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Solution</p>
                <p className="text-sm text-foreground/80">{p.solution}</p>
              </div>
              <div className="mt-auto pt-3 border-t border-border/60">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Impact</p>
                <ul className="space-y-1.5">
                  {p.impact.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
