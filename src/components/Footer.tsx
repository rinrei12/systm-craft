import { Linkedin, ExternalLink, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/40 bg-card/50 py-10">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-heading font-bold text-foreground">
            <span className="text-primary">Jeremy</span>Runes
          </p>
          <p className="text-sm text-muted-foreground mt-1">Automation Systems Designer</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:jmail@jeremyrunes.com"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://www.upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            aria-label="Upwork"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://www.onlinejobs.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            aria-label="OnlineJobsPH"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} JeremyRunes Automations
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
