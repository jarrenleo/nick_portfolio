# 002 - Gate smooth scrolling behind prefers-reduced-motion

- **Status**: DONE
- **Commit**: 4162917 (plus uncommitted redesign working tree)
- **Severity**: MEDIUM
- **Category**: Accessibility
- **Estimated scope**: 1 file, ~5 lines

## Problem

`html { scroll-behavior: smooth }` is unconditional. The nav "Contact" link targets `#footer`, producing a full-viewport animated scroll - a vestibular trigger - even for users with `prefers-reduced-motion: reduce`.

```css
/* app/globals.css:105-112 - current */
@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## Target

```css
/* target */
@layer base {
  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

Under reduced motion, anchor navigation jumps instantly, which is the correct gentler equivalent (the destination still changes; only the movement is dropped).

## Repo conventions to follow

- `app/globals.css` already gates its entrance animations behind `@media (prefers-reduced-motion: no-preference)` (the `.fade-up` block near the end of the file). Follow that same gating pattern.

## Steps

1. In `app/globals.css`, wrap the `html { scroll-behavior: smooth; }` rule inside `@media (prefers-reduced-motion: no-preference) { ... }`, keeping it inside `@layer base`.

## Boundaries

- Do NOT touch any other rule in globals.css.
- Do NOT add new dependencies.
- If the rule isn't at the cited location, STOP and report.

## Verification

- **Mechanical**: `npm run build` completes with "Compiled successfully".
- **Feel check**: `npm run dev`, open DevTools > Rendering > "Emulate CSS media feature prefers-reduced-motion":
  - With `reduce`: clicking nav "Contact" jumps instantly to the footer.
  - With `no-preference`: clicking nav "Contact" scrolls smoothly.
- **Done when**: both behaviors above are observed.
