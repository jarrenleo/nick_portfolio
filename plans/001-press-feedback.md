# 001 - Fix dead press feedback on inline links

- **Status**: DONE
- **Commit**: 4162917 (plus uncommitted redesign working tree)
- **Severity**: HIGH
- **Category**: Physicality & origin
- **Estimated scope**: 2 files, ~6 class-string edits

## Problem

Navigation and hero social links declare `active:scale-[0.98]` / `active:scale-[0.96]`, but the effect never renders. Next.js `<Link>` outputs an `<a>` element, which is `display: inline` by default, and CSS transforms do not apply to non-replaced inline elements. Additionally, these elements only have `transition-colors`, which excludes `transform`, so even a working scale would snap with zero easing.

```jsx
// app/_components/navigation/Navigation.js:10-15 - current (same pattern at :17-22)
<Link
  href="https://hrtbkhxwperxcpdnwgzz.supabase.co/storage/v1/object/public/resume//Resume_NicholasOng.pdf"
  target="_blank"
  className="text-muted-foreground transition-colors duration-200 hover:text-foreground active:scale-[0.98]"
>
```

```jsx
// app/_components/hero/Hero.js:27-33 - current (same pattern at :34-41 and :42-48)
<Link
  href="mailto:nicongggg@gmail.com"
  target="_blank"
  className="active:scale-[0.96]"
>
  <Mail className="h-5 w-5 text-muted-foreground transition-colors duration-200 hover:text-foreground" />
</Link>
```

## Target

Press feedback per the audit standard: subtle scale on `:active`, transitioned at 150ms with the site's ease-out curve. Requires `inline-block` / `inline-flex` so transforms apply.

```jsx
// Navigation links - target
className="inline-block text-muted-foreground transition-[color,transform] duration-150 ease-out-expo hover:text-foreground active:scale-[0.98]"

// Hero icon links - target (the mailto link; mirror for the other two)
className="inline-flex active:scale-[0.96] transition-transform duration-150 ease-out-expo"
```

The MySkillsFuture link at `Hero.js:42-48` keeps its existing `h-5` class and gains `inline-flex transition-transform duration-150 ease-out-expo` alongside its `active:scale-[0.96]`.

## Repo conventions to follow

- Depends on plan 003 having added the `ease-out-expo` timing-function token to `tailwind.config.js`. If that token does not exist yet, execute plan 003 first; do not inline a raw cubic-bezier here.
- Class strings are ordered by prettier-plugin-tailwindcss; run Prettier's ordering (or just save with the repo's prettier config) rather than hand-sorting.

## Steps

1. `app/_components/navigation/Navigation.js`: on both `<Link>` elements (Resume at ~line 10, Contact at ~line 17), replace `transition-colors duration-200` with `inline-block transition-[color,transform] duration-150 ease-out-expo`. Keep `hover:text-foreground` and `active:scale-[0.98]` as-is.
2. `app/_components/hero/Hero.js`: on all three social `<Link>` elements, add `inline-flex transition-transform duration-150 ease-out-expo` to the existing className (which keeps `active:scale-[0.96]`, and `h-5` on the MySkillsFuture link). Leave the `transition-colors` on the child SVG icons untouched.

## Boundaries

- Do NOT touch Footer.js links (they have no active-scale and don't need one).
- Do NOT change markup structure, hrefs, or icon components - class strings only.
- Do NOT add new dependencies.
- If a step doesn't match the code you find, STOP and report instead of improvising.

## Verification

- **Mechanical**: `npm run build` completes with "Compiled successfully".
- **Feel check**: run `npm run dev`, then:
  - Click-and-hold "Resume" in the nav: the label visibly shrinks to 98% while held and eases back on release (no snap).
  - Click-and-hold each hero icon: shrinks to 96%, eases back.
  - In DevTools > Elements, confirm the computed `display` of these `<a>` elements is `inline-block` / `inline-flex`.
- **Done when**: all five links visibly compress on mousedown and ease back on release.
