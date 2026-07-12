# 005 - Scroll-reveal for below-fold sections

- **Status**: DONE
- **Commit**: 4162917 (plus uncommitted redesign working tree)
- **Severity**: LOW (additive - missed opportunity)
- **Category**: Missed opportunities
- **Estimated scope**: 4 files (new Reveal.js, globals.css, Articles.js, WorkExperience.js)

## Problem

The hero has staggered entrance choreography (`.fade-up` classes), but the two below-fold sections (article grid, work-experience list) simply pop in as the user scrolls. The established motion language stops at the fold.

## Target

A `Reveal` client component that fades content up 16px over 0.7s with the brand curve (`var(--ease-out-expo)`, added by plan 003) the first time it enters the viewport. Grid cells stagger 60ms by column. Rules:

- Reveal only once; disconnect the observer after firing.
- No effect under `prefers-reduced-motion: reduce` (checked in JS via `matchMedia`).
- Elements already in the viewport at mount are never hidden (no flash for deep links or short viewports).
- Decorative only: content stays interactive; only `opacity`/`transform` animate.
- Server components stay server components - `Reveal` wraps them as a client boundary with `children`.

New file `app/_components/Reveal.js`:

```jsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0, className }) {
  const ref = useRef(null);
  const [state, setState] = useState("initial");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState("revealed");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      data-reveal={state === "initial" ? undefined : state}
      style={
        delay && state !== "initial"
          ? { transitionDelay: `${delay}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
```

CSS to add at the end of `app/globals.css`, inside the existing `@media (prefers-reduced-motion: no-preference)` block (belt-and-braces alongside the JS gate):

```css
[data-reveal="hidden"] {
  opacity: 0;
  transform: translateY(16px);
}
[data-reveal="revealed"] {
  opacity: 1;
  transform: none;
  transition:
    opacity 0.7s var(--ease-out-expo),
    transform 0.7s var(--ease-out-expo);
}
```

## Repo conventions to follow

- Client components start with `"use client"` and live under `app/_components/` (exemplar: `app/_components/icons/MySkillsFuture.js`).
- Entrance values match the existing `.fade-up` keyframe in `app/globals.css`: 16px rise, 0.7s, brand curve.
- Plain JS (no TypeScript), function declarations, prettier formatting.

## Steps

1. Create `app/_components/Reveal.js` with the code above.
2. Add the CSS block above to `app/globals.css` inside the `@media (prefers-reduced-motion: no-preference)` block, after the `@keyframes fade-up` rule.
3. `app/_components/articles/Articles.js`:
   - `import Reveal from "../Reveal";`
   - Wrap the featured `<Link>` in `<Reveal>` (no delay). The `mb-14` class moves from the Link to the Reveal wrapper.
   - Wrap each grid `<Link>` in `<Reveal delay={(index % 2) * 60}>` (change the `.map` callback to `(article, index)`); `key` moves to the Reveal element.
   - Wrap the closing `<Link>` in `<Reveal>` (no delay). The `mt-14` class moves to the Reveal wrapper, and the Link keeps its grid classes.
4. `app/_components/work_experience/WorkExperience.js`: `import Reveal from "../Reveal";` and wrap the `<ul>` in a single `<Reveal>` (no per-row stagger).

## Boundaries

- Do NOT wrap the hero or nav (they already have load-time entrances).
- Do NOT add a motion library.
- Do NOT let the reveal affect layout: wrapper divs must not add margin/padding beyond the classes explicitly moved in the steps.
- If cited structures have drifted, STOP and report.

## Verification

- **Mechanical**: `npm run build` completes with "Compiled successfully".
- **Feel check**: `npm run dev`:
  - Reload at top, scroll down slowly: featured article, grid cells (right column trailing left by 60ms), and work list each fade up once; scrolling back up and down again does NOT re-trigger.
  - Reload while already scrolled to mid-page: no flash of hidden content.
  - DevTools > Rendering > `prefers-reduced-motion: reduce`: sections render statically with no fade.
  - Emulate a short viewport and confirm the work list still reveals (rootMargin -10% must not strand content off-screen as permanently hidden).
- **Done when**: all four checks pass.
