import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "light"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        /* ── shadcn/ui semantic tokens (CSS variable–driven) ── */
        border:      "hsl(var(--border))",
        input:       "hsl(var(--input))",
        ring:        "hsl(var(--ring))",
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /* ── Neon aliases — repurposed to Precision Fire palette ── */
        neon: {
          purple: "hsl(var(--neon-purple))",  /* → Obsidian Navy  #0F1D35 */
          cyan:   "hsl(var(--neon-cyan))",    /* → Steel Blue     #1A3A5C */
          green:  "hsl(var(--neon-green))",   /* → Signal Orange  #E8620A */
        },

        /* ── Brand tokens — Precision Fire hex values ──
             Use these for explicit brand color references:
             bg-brand-navy, text-brand-orange, border-brand-blue, etc.
             These are direct hex values, not theme-aware.
             Prefer semantic tokens above for theme-switching components. */
        brand: {
          navy:   "#0F1D35",  /* Tier 01 — Primary    — Obsidian Navy  */
          blue:   "#1A3A5C",  /* Tier 02 — Secondary  — Steel Blue     */
          orange: "#E8620A",  /* Tier 03 — Accent/CTA — Signal Orange  */
          fog:    "#F5F6F8",  /* Tier 04 — Background — Fog White      */
          carbon: "#111827",  /* Tier 05 — Text       — Carbon         */
          slate:  "#334155",  /* Tier 06 — Neutral    — Slate 700      */
        },

        sidebar: {
          DEFAULT:              "hsl(var(--sidebar-background))",
          foreground:           "hsl(var(--sidebar-foreground))",
          primary:              "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent:               "hsl(var(--sidebar-accent))",
          "accent-foreground":  "hsl(var(--sidebar-accent-foreground))",
          border:               "hsl(var(--sidebar-border))",
          ring:                 "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "glow-pulse": {
          /* Now pulses Signal Orange — Tier 03 accent emphasis */
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" },
          "50%":       { boxShadow: "0 0 40px hsl(var(--primary) / 0.6)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(30px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down":  "accordion-down 0.2s ease-out",
        "accordion-up":    "accordion-up 0.2s ease-out",
        "fade-in-up":      "fade-in-up 0.6s ease-out forwards",
        "fade-in":         "fade-in 0.4s ease-out forwards",
        "glow-pulse":      "glow-pulse 2s ease-in-out infinite",
        "slide-in-left":   "slide-in-left 0.5s ease-out forwards",
        "slide-in-right":  "slide-in-right 0.5s ease-out forwards",
        "float":           "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
