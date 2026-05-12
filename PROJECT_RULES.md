# MALL ELECTRO – PROJECT SYSTEM GUIDELINES v1.0
## Priority: HIGH
## Applies to: ALL AI tools (Codex, Google Studio, GPT agents), ALL developers, ALL pages

---

# 1. DESIGN SYSTEM (GLOBAL + NON-NEGOTIABLE)

## 1.1 Color Tokens
- --brand-blue: #4A90E2  
- --brand-dark: #1C2A39  
- --brand-orange: #FF6D2E  
- --gray-100: #F5F7FA  
- --gray-200: #E7EDF5  
- --gray-900: #111  
- --white: #fff  

Use ONLY these colors.  
DO NOT generate new hues, tints or alternate shades.

---

## 1.2 Typography
### Headings:
- Poppins or Inter  
- 600–700 weight  

### Body:
- Open Sans / Inter  
- 300–400 weight  

No serif fonts.  
No decorative fonts.

---

## 1.3 Spacing
- Section padding: **120px top/bottom**  
- Grid container: **max-width 1280px**, padding-left/right 24–48px  
- Gaps: 32px, 48px, 64px (only these)

---

## 1.4 Components (Atomic Rules)
### Cards:
- white background  
- rounded-xl  
- soft shadow  
- hover: lift + stronger shadow  

### Buttons:
Variants allowed:
- primary (orange)
- outline (brand-blue)
- dark (brand-dark)
- ghost (transparent white)
No new button variants.

### Badges:
Only variants defined in `/ui/Badge.tsx`.  
DO NOT create new ones.

---

## 1.5 Background Patterns
Allowed:
- blueprint grid (40px)
- radial noise dots (opacity < 0.06)
- diagonal engineering lines (very subtle)
- animated pattern from `AnimatedPattern.tsx`  

No photographic backgrounds unless explicitly set.

---

# 2. LAYOUT RULES

## 2.1 Section Rhythm
Every page must follow this order:
1. Hero
2. Badge / Section marker
3. Section title + subtitle
4. Main content block(s)
5. CTA / banner
6. Footer

## 2.2 Column structure
- 1-col full-width text sections
- 2-col text + image
- 3-col cards
- 4-step process lines

No masonry.  
No random grid sizes.

---

# 3. COMPONENT USAGE RULES

All pages MUST use the existing components:
- Button  
- Badge  
- Card  
- FadeIn  
- GridContainer  
- PageHero  
- IndustryCard  
- ServiceTile  
- Process  
- ContactForm  
- LogoStrip  
- Testimonials  

DO NOT rebuild or duplicate these components.  
DO NOT create new variants unless absolutely necessary.

---

# 4. ANIMATION LOGIC

Allowed:
- FadeIn (Intersection Observer)
- Hover lift on cards
- Soft glow wipe on primary CTAs
- Animated blueprint lines

Forbidden:
- bounce
- exaggerated scale jumps
- flashy neon glow
- rotating elements

Motion MUST be subtle industrial engineering style.

---

# 5. SEO/AEO CONTENT RULES

## 5.1 Structure
Always include:
- H1  
- H2 with keyword variant  
- 2–4 short paragraphs (<120 words each)  
- bullets with industry terms  
- CTA sentence  

## 5.2 Keyword Strategy
Use ONLY B2B industrial intent:
- електрически табла  
- индустриална електроинсталация  
- автоматизация  
- зърнопреработка  
- ХВП  
- логистични бази  

NEVER keyword-stuff.  
NEVER use marketing fluff like “cutting-edge”.

---

# 6. PAGE BUILDER RULES (for Google Studio, Codex, AI Agents)

## 6.1 No Reinvention
When generating new pages:
- Reuse components from `/components/`  
- Reuse utilities from `/ui/`  
- Reuse layout from `/layout/`  
- Use EXACT styling as Home Page  

## 6.2 How to extend pages
When asked to “add section X”:
- Insert a new `<section>`  
- Apply classes:  
  `py-24 lg:py-32`  
  `relative overflow-hidden`  
- Add blueprint pattern (optional)
- Insert components inside as children

## 6.3 Forbidden
- Inline CSS that duplicates design system  
- Creating new color tokens  
- Creating new patterns  
- Adding Tailwind config without authorization  

---

# 7. FILE STRUCTURE RULES

Pages:
- `/pages/Home.tsx`
- `/pages/Services.tsx`
- `/pages/About.tsx`
- `/pages/Industries.tsx`
- `/pages/Contact.tsx`

Components remain modular.  
Copy/paste is forbidden.

---

# 8. INSTRUCTIONS TO ALL AI TOOLS

When generating code:
- Follow this document **as absolute truth**  
- Follow the Home Page style system  
- Do not alter existing components  
- Do not invent new patterns  
- Use Tailwind classes consistently  
- Produce clean TSX  
- Never output broken JSX  
- Never modify Navbar, Footer or Layout without explicit command

When generating content:
- Keep tone: warm, professional, B2B  
- Keep length moderate  
- Always include a CTA  

---

# 9. CONFIRMATION PROTOCOL

Whenever you, the AI, read this file:
**Respond ONLY with:**  
“Mall Electro Style System Loaded — Ready.”

No summaries.  
No explanations.  
No changes.

---

# END OF DOCUMENT