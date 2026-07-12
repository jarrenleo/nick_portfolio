# Animation Improvement Plans

Written by `improve-animations` against commit `4162917` plus the uncommitted portfolio redesign working tree.

| # | Plan | Severity | Status |
|---|------|----------|--------|
| 003 | [Consolidate the brand easing curve into a shared token](003-easing-token.md) | MEDIUM | DONE |
| 001 | [Fix dead press feedback on inline links](001-press-feedback.md) | HIGH | DONE |
| 002 | [Gate smooth scrolling behind prefers-reduced-motion](002-reduced-motion-smooth-scroll.md) | MEDIUM | DONE |
| 004 | [Stop sticky hover effects on touch devices](004-hover-only-when-supported.md) | LOW | DONE |
| 005 | [Scroll-reveal for below-fold sections](005-scroll-reveal.md) | LOW | DONE |

## Execution order

1. **003** first - it creates the `--ease-out-expo` CSS variable and the `ease-out-expo` Tailwind timing-function token that 001 and 005 reference.
2. **001** (depends on 003's token).
3. **002** and **004** - independent, any order.
4. **005** last (depends on 003's CSS variable; touches the most files).

## Dependencies

- 001 → 003 (uses `ease-out-expo` Tailwind token)
- 005 → 003 (uses `var(--ease-out-expo)`)
- 002, 004: none
