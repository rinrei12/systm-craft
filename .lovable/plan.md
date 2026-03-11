

## Redesign: Dark Mode Cyberpunk/Neon Portfolio Theme

Based on the Pinterest reference, the design is a **dark-themed developer portfolio** with neon/glowing accents, deep dark backgrounds, vibrant purple/cyan/green accent colors, and bold typography. The layout features card-based sections with subtle glow effects and smooth animations.

---

### 1. Theme Overhaul (`src/index.css`, `tailwind.config.ts`)

**New color palette** inspired by the reference:
- Background: deep dark (`#0A0A0F` / `#12121A`)
- Card backgrounds: slightly lighter dark (`#1A1A2E`)
- Primary accent: neon purple (`#8B5CF6`)
- Secondary accent: cyan (`#06B6D4`)
- Success/green accent: keep `#10B981`
- Text: light gray/white
- Borders: subtle dark borders with glow on hover

**Add custom keyframes** for:
- `fade-in-up` (scroll reveal)
- `glow-pulse` (neon glow effect on hover)
- `slide-in-left` / `slide-in-right` (staggered entry)

**Add CSS utility classes** for glow borders, neon text shadows, and glass-morphism card effects.

Default theme will now be **dark-first** (the dark palette becomes the default `:root`, light mode becomes `.light`).

---

### 2. Scroll Reveal Animation Hook (`src/hooks/useScrollReveal.ts`)

Create a custom hook using `IntersectionObserver` that:
- Detects when elements enter the viewport
- Applies CSS animation classes (`animate-fade-in-up`, etc.)
- Supports staggered delays for lists of children
- Used across all sections for scroll-triggered reveals

---

### 3. Hero Section Redesign (`src/components/HeroSection.tsx`)

- **Layout**: Split layout -- left side has text content, right side has a placeholder profile image (rounded, with a neon glow border)
- **Name**: "Jeremy Runes" as the big headline
- **Title**: "Automation Systems Designer" as subtitle
- **Contact links row** below subtitle with icons:
  - Email: `jmail@jeremyrunes.com` (mailto link)
  - Upwork: link to `https://www.upwork.com` (placeholder)
  - OnlineJobsPH: link to `https://www.onlinejobs.ph` (placeholder)
  - LinkedIn: link to `https://www.linkedin.com` (placeholder)
  - Phone: `+63 917 848 0701` (tel: link)
- **CTA button** with glow effect
- **Background**: gradient with subtle animated particles or grid pattern using CSS

---

### 4. Navbar Redesign (`src/components/Navbar.tsx`)

- Dark glassmorphism background (`bg-background/60 backdrop-blur-xl`)
- Neon accent on active/hover nav links (underline glow)
- Keep all existing nav links
- Update ThemeToggle to toggle between dark and light

---

### 5. Services Section (`src/components/ServicesSection.tsx`)

- Cards with dark glass-morphism style, neon border glow on hover
- Icon circles with gradient backgrounds
- Click interaction: subtle scale + glow pulse on click
- Scroll reveal with staggered delays

---

### 6. Portfolio Section - Clickable Cards (`src/components/PortfolioSection.tsx`)

- Redesign cards with dark theme, neon accent borders
- **Make each card clickable** -- clicking navigates to `/portfolio/:slug`
- Add hover animation (lift + glow)
- Keep existing images

**New route & page** (`src/pages/PortfolioDetail.tsx`):
- Create individual portfolio detail pages
- Each page shows: hero image, industry, problem, solution, impact, tech used
- Back button to return to home
- Add route in `App.tsx`: `/portfolio/:slug`

**Portfolio data** moved to a shared file (`src/data/portfolioData.ts`) so both the section and detail pages can use it.

---

### 7. Workflow Section (`src/components/WorkflowSection.tsx`)

- Neon-styled flow nodes with glowing connectors
- Animated connector lines (CSS dash animation)
- Scroll reveal for each step

---

### 8. Tech Stack Section (`src/components/TechStackSection.tsx`)

- Add **Lucide icons** or relevant icon representations for each tool:
  - n8n: `Workflow`, GoHighLevel: `Rocket`, Zapier: `Zap`, Make: `Cog`, Twilio: `Phone`, WhatsApp: `MessageCircle`, Telegram: `Send`, Airtable: `Table2`, Google Sheets: `Sheet`, SendGrid/Mailgun: `Mail`
- Cards with dark glass style and hover glow
- Scroll reveal animation

---

### 9. Contact Section (`src/components/ContactSection.tsx`)

- Update all email references to `jmail@jeremyrunes.com`
- Dark themed calendar with neon accent for selected date
- Glow button for CTA

---

### 10. Footer (`src/components/Footer.tsx`)

- Dark footer with social links (Upwork, LinkedIn, OnlineJobsPH)
- Update email to `jmail@jeremyrunes.com`

---

### 11. Global Email Update

Replace all instances of `jeremyrunesautomations@jeremyrunes.com` with `jmail@jeremyrunes.com` across:
- `ContactSection.tsx`
- `index.html` (meta tags)

---

### Files to Create
- `src/hooks/useScrollReveal.ts`
- `src/data/portfolioData.ts`
- `src/pages/PortfolioDetail.tsx`

### Files to Modify
- `src/index.css` (new dark-first theme, glow utilities, animation classes)
- `tailwind.config.ts` (new keyframes, animations, colors)
- `src/App.tsx` (add portfolio detail route)
- `src/components/HeroSection.tsx` (full redesign)
- `src/components/Navbar.tsx` (dark glass style)
- `src/components/ServicesSection.tsx` (dark cards, animations)
- `src/components/PortfolioSection.tsx` (clickable cards, shared data)
- `src/components/WorkflowSection.tsx` (neon flow style)
- `src/components/TechStackSection.tsx` (icons, dark cards)
- `src/components/ContactSection.tsx` (dark theme, email update)
- `src/components/Footer.tsx` (social links, email update)
- `index.html` (email update)

