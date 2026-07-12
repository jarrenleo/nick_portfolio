# 003 - Consolidate the brand easing curve into a shared token

- **Status**: DONE
- **Commit**: 4162917 (plus uncommitted redesign working tree)
- **Severity**: MEDIUM
- **Category**: Cohesion & tokens
- **Estimated scope**: 3 files (globals.css, tailwind.config.js, Articles.js)

## Problem

Three easing curves coexist with no shared token:

1. Entrance animations hand-type the brand curve inside a keyframe shorthand:

```css
/* app/globals.css:127 (inside the prefers-reduced-motion: no-preference block) - current */
.fade-up {
  animation: fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}
```

2. Article image zooms use Tailwind's stock `ease-out` = `cubic-bezier(0, 0, 0.2, 1)`, a weak curve that doesn't match the entrance personality:

```jsx
// app/_components/articles/Articles.js:37 - current (same at :66 and :88)
className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
```

3. Color transitions use Tailwind's default `cubic-bezier(0.4, 0, 0.2, 1)` - this one is fine for color hovers and stays.

## Target

One CSS variable as the single source of truth, exposed to Tailwind as `ease-out-expo`, used by all transform-based motion:

```css
/* app/globals.css - add to the :root block */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
```

```css
/* app/globals.css - .fade-up references the token */
.fade-up {
  animation: fade-up 0.7s var(--ease-out-expo) both;
}
```

```js
// tailwind.config.js - add inside theme.extend
transitionTimingFunction: {
  "out-expo": "var(--ease-out-expo)",
},
```

```jsx
// Articles.js image zoom - all three occurrences
className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]"
```

Note: `duration-500` on the image zoom is intentional (editorial imagery, decorative) and stays.

## Repo conventions to follow

- Design tokens live as CSS variables in the `:root` block of `app/globals.css` (see `--background`, `--accent` there) and are surfaced to Tailwind via `theme.extend` in `tailwind.config.js` (see the `colors` mapping). Mirror that pattern exactly.

## Steps

1. `app/globals.css`: add `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);` at the end of the `:root` block (light and dark share it; do not duplicate into `.dark`).
2. `app/globals.css`: in the `.fade-up` rule, replace `cubic-bezier(0.16, 1, 0.3, 1)` with `var(--ease-out-expo)`.
3. `tailwind.config.js`: inside `theme.extend`, add the `transitionTimingFunction` block shown above.
4. `app/_components/articles/Articles.js`: replace `ease-out` with `ease-out-expo` in the three image `className` strings (featured image, grid images, closing image).

## Boundaries

- Do NOT change any `transition-colors` call sites - Tailwind's default curve is correct for color hovers.
- Do NOT change durations.
- Do NOT add new dependencies.
- If a cited line doesn't match, STOP and report.

## Verification

- **Mechanical**: `npm run build` completes; `grep -rn "cubic-bezier(0.16" app/` returns exactly one hit (the `:root` token).
- **Feel check**: `npm run dev`, hover an article card in slow motion (DevTools > Animations panel at 10%): the zoom now starts fast and settles gently instead of gliding uniformly; entrance animations look unchanged.
- **Done when**: grep check passes and the hover zoom visibly shares the entrance curve's decisive start.
