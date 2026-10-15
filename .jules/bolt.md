## 2026-10-12 - Frontend Architecture & Design Translation
**Learning:** Translating Google Stitch tokens directly into a Tailwind configuration requires careful mapping of abstract tokens (e.g., `surface-container-highest`) to usable utility classes. For consistency, extending the `colors` theme in Tailwind directly with these keys is highly effective and eliminates mapping errors throughout components. Additionally, incorporating explicit custom brand names from the `designMd` like `electric` and `ice` makes the classes much more readable than repeating generic variables.

**Action:** When working with Design System data (like Stitch or Figma tokens), extract the defined colors/typography and map them explicitly into `tailwind.config.js` *before* starting component scaffolding to ensure global consistency from day 1. Also, pre-configuring specific utility classes like `.hide-scrollbar` and `.box-shadow-glow` in `index.css` is better than inline variants for highly reusable effects.

## 2023-10-27 - Zustand State Destructuring Anti-pattern
**Learning:** Destructuring the entire Zustand store (e.g., `const { items, openCart } = useCartStore();`) subscribes the component to the entire store state. When any un-used part of the store changes, all components destructuring the store will re-render unnecessarily, which causes O(N) re-renders across the application.
**Action:** Always use specific selector functions when using Zustand (e.g. `const items = useCartStore((state) => state.items);`) to ensure components only re-render when the specific state they rely on changes.
