## 2026-10-12 - Frontend Architecture & Design Translation
**Learning:** Translating Google Stitch tokens directly into a Tailwind configuration requires careful mapping of abstract tokens (e.g., `surface-container-highest`) to usable utility classes. For consistency, extending the `colors` theme in Tailwind directly with these keys is highly effective and eliminates mapping errors throughout components. Additionally, incorporating explicit custom brand names from the `designMd` like `electric` and `ice` makes the classes much more readable than repeating generic variables.

**Action:** When working with Design System data (like Stitch or Figma tokens), extract the defined colors/typography and map them explicitly into `tailwind.config.js` *before* starting component scaffolding to ensure global consistency from day 1. Also, pre-configuring specific utility classes like `.hide-scrollbar` and `.box-shadow-glow` in `index.css` is better than inline variants for highly reusable effects.

## 2024-10-16 - Zustand Re-renders
**Learning:** Destructuring the entire store object when using `useCartStore` causes components to re-render whenever *any* value in the store changes, resulting in an O(N) performance bottleneck for re-renders.
**Action:** Always use specific selector functions (e.g., `useCartStore((state) => state.items)`) instead of destructuring the entire store to prevent unnecessary re-renders.
