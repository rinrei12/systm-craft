const techItems = [
  "n8n",
  "GoHighLevel",
  "Zapier",
  "Make",
  "Twilio",
  "WhatsApp",
  "Telegram",
  "Airtable",
  "Google Sheets",
  "SendGrid / Mailgun",
];

const TechStackSection = () => (
  <section id="tech-stack" className="py-20 md:py-28 bg-muted/50">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Tools & Platforms</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Tech Stack
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          The platforms and tools I use to build reliable automation systems.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
        {techItems.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center rounded-xl border border-border/60 bg-card px-4 py-5 text-center font-heading text-sm font-semibold text-foreground hover:border-primary/40 hover:shadow-md transition-all duration-200"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
