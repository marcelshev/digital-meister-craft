## Goal
Convert the entire site to dark mode and rebuild the hero as a full-viewport first fold containing only the headline "DÊ O PLAY NO SEU NEGÓCIO", with "PLAY" animated in an RGB-style gradient between #7650FE and #005BF0. Relocate displaced hero content (image, subtitle, CTAs) into the sections below, reflow downstream sections so the page has no empty gaps, and apply generous rounded corners to every visual element — no sharp squares anywhere.

## New page structure

```
HeroSection      → full-screen headline only (no image, no CTAs)
IntroSection     → absorbs the hero subtitle + CTAs + hero illustration as a two-column intro
ServicesSection  → unchanged content, dark styling, rounded cards
AboutSection     → unchanged content, dark styling, rounded media
ContactSection   → unchanged content, dark styling, rounded inputs/cards
Footer           → dark styling, rounded social icons and logo container
```

## Changes

### 1. Global dark mode (`index.html`, `src/index.css`, all section components)
- Force `class="dark"` on `<html>` so existing `--background`, `--foreground`, `--card`, `--muted` tokens flip site-wide.
- Retune `.dark` palette so `--primary`, `--ring`, `--accent` align with the new accent (HSL of `#7650FE` ≈ `252 99% 65%`, `#005BF0` ≈ `217 100% 47%`).
- Sweep hardcoded light classes across `Navbar`, `IntroSection`, `ServicesSection`, `AboutSection`, `ContactSection`, `Footer`: replace `bg-white`, `text-gray-600`, light section backgrounds, and light borders with semantic tokens (`bg-background`, `bg-card`, `text-muted-foreground`, `border-border`).
- `Navbar` background changes from `bg-white/90` to a dark translucent token equivalent.

### 2. Hero redesign (`src/components/HeroSection.tsx`)
- Section becomes `min-h-screen flex items-center justify-center` — only the H1 in the first fold.
- Remove: badge pill, subtitle paragraph, both CTA buttons, illustration column, two-column grid.
- H1 centered, large display (`text-6xl md:text-8xl lg:text-9xl`), tight tracking.
- Wrap "PLAY" in a span with the animated gradient utility.
- Keep soft floating background blobs retuned to the new accent hues (fully rounded by nature).

### 3. Animated "PLAY" gradient
- Add `play-gradient` keyframe in `tailwind.config.ts` and `.text-play-gradient` utility in `index.css`.
- `background: linear-gradient(90deg, #7650FE, #005BF0, #7650FE)`, `background-size: 200% 100%`, `background-clip: text`, `color: transparent`.
- Animate `background-position` `0% → 200%` on a ~3s linear infinite loop for the RGB sweep look. Add soft text glow using the same hues.

### 4. Restructure displaced hero content into `IntroSection`
- Two-column layout on `md+`: left column gets the brand badge ("DIGITAL MEISTER"), hero subtitle ("Crescer não precisa ser complicado…"), and both WhatsApp CTAs ("Diagnóstico Gratuito" + "Nossos Serviços"); right column gets the hero illustration with the existing glow treatment.
- Existing `IntroSection` copy merges in beneath as a supporting paragraph so nothing is lost.
- Single-column stack on mobile, image first.

### 5. Reflow downstream sections
- `ServicesSection`, `AboutSection`, `ContactSection`: keep content but tighten vertical rhythm (`py` values) so transitions from `IntroSection` feel clean. Alternate `bg-background` and `bg-card` for visual separation.
- Confirm anchor IDs (`hero`, `services`, `about`, `contact`) remain for navbar links.

### 6. Rounded-corners pass (site-wide)
- Bump base `--radius` so default `rounded-lg` reads more generous (≈ `1rem`).
- Apply rounded shapes to every visual surface:
  - Cards / service tiles / about media / contact panel → `rounded-2xl` or `rounded-3xl`.
  - Images (hero illustration in IntroSection, any media in About) → wrap in containers with `rounded-3xl overflow-hidden`.
  - Buttons → already rounded via shadcn; verify pill-ish feel (`rounded-full` for primary CTAs).
  - Inputs / textareas in `ContactSection` → `rounded-xl`.
  - Navbar container → `rounded-full` floating pill on `md+` or rounded bottom edge.
  - Footer social icon buttons → `rounded-full`.
  - Background decorative blobs → already circular.
- Audit for any remaining sharp `rounded-none`, `rounded-sm`, or default-square elements and round them.

### 7. Header & footer
- `Navbar` swaps to dark translucent background; existing logo stays.
- `Footer` already dark; verify token usage and accent alignment.

## Technical notes
- Dark mode enforced via `class="dark"` on `<html>` in `index.html`.
- New Tailwind keyframe + animation: `play-gradient` / `animate-play-gradient`.
- All color usage stays HSL via tokens; the two literal hex stops (`#7650FE`, `#005BF0`) live only inside `.text-play-gradient`.
- Radius scale managed via `--radius` token so the rounded language is consistent rather than ad-hoc per component.
- No backend, routing, or data changes — purely presentation.
