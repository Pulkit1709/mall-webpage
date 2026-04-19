# Design Rationale & Technical Write-up

## SECTION 1 — DESIGN RATIONALE

The decision to use a cinematic dark luxury aesthetic over a standard light or neutral approach was driven by the target audience: decision-makers at luxury brands, corporate sponsors, and high-net-worth investors. The aesthetic draws directly from the visual language of brands like Louis Vuitton, Rolex, and Apple—brands that understand that "dark mode" with high-contrast gold accents instantly signals exclusivity, premium quality, and authority. In a sales context where visual credibility must be established within the first ten seconds, this palette acts as a psychological shorthand for prestige. 

The editorial typography system anchors this aesthetic. Cormorant Garamond was chosen for its dramatic contrast between hairline and bold strokes. When set at display sizes (6xl+), it functions less like standard web text and more like an architectural monument. It creates an immediate sense of gravity and heritage—the typographic equivalent of a luxury boutique's marble facade. Complementing this with DM Sans for the body copy ensures modern readability while maintaining a highly curated, tailored feel.

## SECTION 2 — HOW I USED AI

The project was developed using a multi-stage prompt chain approach to ensure the AI output remained highly structured, architectural, and strictly typed. I structured the prompts sequentially:

1. **Architecture Prompt:** Established the Vite/React 19 foundation, directory structure, strict TypeScript requirements, and the specific dual-animation stack (Framer Motion + GSAP/Lenis).
2. **Animation System Prompt:** Defined the shared motion variants, the custom cursor physics using Framer Motion springs, and the exact easing curves (cubic-bezier) to be used across all components.
3. **Data Layer Prompt:** Separated all content into a `content.ts` file to act as a single source of truth, avoiding hardcoded text in components.
4. **Deployment Prompt:** Generated the GitHub Actions workflow, Vercel configuration, and this comprehensive documentation.

Claude was utilized not merely as a code generator but as a design system collaborator. The most successful outputs came from prompts that strictly constrained the AI—such as demanding the use of CSS variables for tokens while leveraging Tailwind v4 solely for utility application, or mandating that no placeholder images be used in favor of CSS/SVG geometry.

## SECTION 3 — WHAT I WOULD IMPROVE

With additional development time, I would focus on the following technical enhancements:

1. **ScrollSmoother Integration:** I would replace Lenis with GSAP's native `ScrollSmoother`. While Lenis is excellent, bringing everything under the GSAP umbrella reduces dependency weight and provides native, scrub-based parallax hooks that would elevate the interaction on the `Luxury.tsx` panels.
2. **Procedural Canvas Graphics:** The current SVG architectural diagram in the Retail section is static. I would replace this with a procedurally generated Three.js or vanilla Canvas illustration that subtlely distorts or redraws itself based on mouse velocity and scroll position.
3. **Lazy Loading via Suspense:** I would implement `React.lazy()` for the sub-modules (`Leasing`, `Sponsorship`, `EventsModule`) so they only fetch their JavaScript payloads when the user intentionally navigates to those specific routes, significantly reducing the initial bundle size. 
4. **Asset Optimization Pipeline:** Introduce a custom Vite plugin step for optimizing any potential future media assets, particularly for auto-playing background videos that could replace the Three.js hero.
