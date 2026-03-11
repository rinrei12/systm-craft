import imgMissedCall from "@/assets/portfolio-missed-call.png";
import imgDeadDb from "@/assets/portfolio-dead-database.png";
import imgNoShow from "@/assets/portfolio-no-show.png";
import imgCart from "@/assets/portfolio-abandoned-cart.png";
import imgOnboarding from "@/assets/portfolio-onboarding.png";
import imgFbChat from "@/assets/portfolio-fb-chat.png";
import imgFollowUp from "@/assets/portfolio-follow-up.png";

export interface PortfolioProject {
  slug: string;
  title: string;
  industry: string;
  image: string;
  problem: string;
  solution: string;
  impact: string[];
  techUsed: string[];
  fullDescription: string;
}

export const projects: PortfolioProject[] = [
  {
    slug: "missed-call-recovery",
    title: "Missed Call Recovery System",
    industry: "Home Services",
    image: imgMissedCall,
    problem: "Businesses were losing leads from unanswered calls during peak hours.",
    solution: "Twilio webhook triggers an n8n workflow that sends an instant SMS, logs the lead in GoHighLevel, and offers a booking link.",
    impact: ["85% lead recovery rate", "Average 30-second response time", "Eliminated manual call-back lists"],
    techUsed: ["Twilio", "n8n", "GoHighLevel", "SMS"],
    fullDescription: "When a call goes unanswered, the Twilio webhook fires immediately, triggering an n8n automation that captures the caller's number, sends a personalized SMS within seconds, creates a new contact in GoHighLevel with full call metadata, and delivers a self-service booking link. The system runs 24/7 with zero human intervention, ensuring no lead ever falls through the cracks again.",
  },
  {
    slug: "dead-database-revival",
    title: "Dead Database Revival System",
    industry: "Real Estate",
    image: imgDeadDb,
    problem: "Thousands of cold leads sitting in the CRM with no follow-up strategy.",
    solution: "Automated re-engagement campaign via SMS and email sequences, scoring responses and routing warm leads to agents.",
    impact: ["12% re-engagement rate from cold leads", "Revived $180K in pipeline value", "Zero manual outreach required"],
    techUsed: ["GoHighLevel", "n8n", "SendGrid", "SMS"],
    fullDescription: "This system segments cold leads by last interaction date, industry, and previous engagement level. It then deploys a multi-touch re-engagement sequence combining SMS, email, and voicemail drops. An AI scoring model evaluates responses in real-time, routing warm leads directly to agents while continuing to nurture lukewarm contacts automatically.",
  },
  {
    slug: "no-show-recovery",
    title: "No-Show Recovery Automation",
    industry: "Healthcare / Clinics",
    image: imgNoShow,
    problem: "High no-show rates costing revenue and wasting appointment slots.",
    solution: "Automated reminders, confirmation requests, and instant re-booking flows for missed appointments.",
    impact: ["40% reduction in no-shows", "Automated rescheduling saved 10+ hours/week", "Improved patient satisfaction scores"],
    techUsed: ["GoHighLevel", "Twilio", "n8n", "Google Calendar"],
    fullDescription: "The system sends a series of smart reminders—48 hours, 24 hours, and 2 hours before each appointment. If a patient doesn't confirm, staff is alerted and the slot is flagged for potential reuse. After a no-show, an automated re-booking flow triggers immediately, offering the patient alternative times and reducing revenue loss.",
  },
  {
    slug: "abandoned-cart-recovery",
    title: "Abandoned Cart Recovery System",
    industry: "eCommerce",
    image: imgCart,
    problem: "70%+ cart abandonment rate with no recovery process in place.",
    solution: "Multi-channel recovery via email, SMS, and WhatsApp with personalized discount offers and urgency triggers.",
    impact: ["18% cart recovery rate", "$45K recovered revenue in 90 days", "Fully automated, zero manual intervention"],
    techUsed: ["Shopify", "n8n", "WhatsApp", "SendGrid"],
    fullDescription: "When a cart is abandoned, the system waits a strategic interval before deploying a personalized recovery sequence. The first touch is a friendly reminder, followed by a limited-time discount offer, and finally an urgency-driven last-chance message. Each channel (email, SMS, WhatsApp) is optimized for different customer segments based on their browsing behavior and purchase history.",
  },
  {
    slug: "ai-client-onboarding",
    title: "AI Client Onboarding Automation",
    industry: "Professional Services",
    image: imgOnboarding,
    problem: "Manual onboarding taking 2-3 hours per client with frequent missed steps.",
    solution: "AI-powered intake forms, automated document collection, task creation, and welcome sequences.",
    impact: ["Onboarding time reduced to 15 minutes", "100% task completion rate", "Consistent client experience every time"],
    techUsed: ["n8n", "Airtable", "Google Docs", "GoHighLevel"],
    fullDescription: "The AI onboarding system begins with an intelligent intake form that adapts questions based on client type and service tier. Once submitted, it automatically generates all necessary documents, creates project tasks in the management system, sends a branded welcome kit, and schedules the kickoff call—all without any manual intervention.",
  },
  {
    slug: "ai-facebook-chat-agent",
    title: "AI Facebook Chat Agent",
    industry: "Local Business",
    image: imgFbChat,
    problem: "Missing Facebook messages and losing leads to slow response times.",
    solution: "AI chatbot qualifies leads, answers FAQs, and books appointments directly from Facebook Messenger.",
    impact: ["24/7 lead qualification", "3x increase in booked consultations", "Instant response to every inquiry"],
    techUsed: ["Facebook API", "n8n", "OpenAI", "GoHighLevel"],
    fullDescription: "An AI-powered chatbot integrated with Facebook Messenger handles all incoming inquiries in real-time. It uses natural language processing to understand customer intent, answers frequently asked questions from a knowledge base, qualifies leads through a conversational flow, and books appointments directly into the business calendar—all while maintaining a natural, human-like conversation tone.",
  },
  {
    slug: "automated-lead-follow-up",
    title: "Automated Lead Follow-Up System",
    industry: "B2B Services",
    image: imgFollowUp,
    problem: "Sales team overwhelmed with manual follow-ups, leads falling through the cracks.",
    solution: "Multi-step follow-up sequences triggered by lead source, with smart delays and escalation rules.",
    impact: ["60% increase in lead-to-meeting conversion", "Sales team saved 15+ hours/week", "No lead left behind"],
    techUsed: ["GoHighLevel", "n8n", "Twilio", "SendGrid"],
    fullDescription: "This system creates intelligent follow-up sequences customized by lead source, industry, and engagement signals. It uses smart delay algorithms to optimize send times, automatically escalates unresponsive high-value leads to senior team members, and provides real-time analytics on sequence performance to continuously improve conversion rates.",
  },
];
