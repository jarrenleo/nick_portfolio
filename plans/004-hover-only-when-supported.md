# 004 - Stop sticky hover effects on touch devices

- **Status**: DONE
- **Commit**: 4162917 (plus uncommitted redesign working tree)
- **Severity**: LOW
- **Category**: Accessibility (touch)
- **Estimated scope**: 1 file, 1 config key

## Problem

Article card zooms use `group-hover:scale-[1.03]`. On touch devices, tapping a card fires a synthetic hover that sticks: navigate to the article, come back, and the image is still zoomed until the user taps elsewhere.

```jsx
// app/_components/articles/Articles.js:37 - current (same at :66 and :88)
className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
```

## Target

Tailwind v3 ships a flag that compiles every `hover:`/`group-hover:` variant to `@media (hover: hover) and (pointer: fine)`, disabling all hover styling on touch in one move. All hover effects on this site are enhancements (color shifts, zooms), so blanket gating is safe.

```js
// tailwind.config.js - target (top level, alongside darkMode)
module.exports = {
  darkMode: ["class"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  // ...rest unchanged
};
```

## Repo conventions to follow

- `tailwind.config.js` at the repo root is the only Tailwind config; module.exports object style.

## Steps

1. In `tailwind.config.js`, add the `future: { hoverOnlyWhenSupported: true }` key at the top level of the exported object.

## Boundaries

- Do NOT modify any component class strings - the config flag covers everything.
- Do NOT add new dependencies.

## Verification

- **Mechanical**: `npm run build` completes. In the built CSS (`.next/static/css/*.css`), `grep -o "@media (hover: hover)" | head -1` finds at least one occurrence.
- **Feel check**: `npm run dev`, open DevTools device emulation (touch): tapping an article card should not leave the image zoomed. With a mouse (no emulation), hover zoom still works.
- **Done when**: hover zoom works with a mouse and never sticks under touch emulation.
