import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Get in Touch</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let's Talk Automation
          </h2>
          <p className="mt-4 text-muted-foreground">
            Interested in improving lead response speed or automating repetitive operations?
            Let's explore how automation systems can simplify your workflow.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell me about your automation needs..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>
          <Button type="submit" size="lg" className="w-full gap-2">
            <Send className="h-4 w-4" />
            Send Message
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Or email me directly at{" "}
          <a href="mailto:hello@automationpro.com" className="text-primary hover:underline">
            hello@automationpro.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
