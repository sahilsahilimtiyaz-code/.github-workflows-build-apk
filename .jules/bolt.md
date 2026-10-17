## 2026-10-12 - Frontend Architecture & Design Translation
**Learning:** Translating Google Stitch tokens directly into a Tailwind configuration requires careful mapping of abstract tokens (e.g., `surface-container-highest`) to usable utility classes. For consistency, extending the `colors` theme in Tailwind directly with these keys is highly effective and eliminates mapping errors throughout components. Additionally, incorporating explicit custom brand names from the `designMd` like `electric` and `ice` makes the classes much more readable than repeating generic variables.

**Action:** When working with Design System data (like Stitch or Figma tokens), extract the defined colors/typography and map them explicitly into `tailwind.config.js` *before* starting component scaffolding to ensure global consistency from day 1. Also, pre-configuring specific utility classes like `.hide-scrollbar` and `.box-shadow-glow` in `index.css` is better than inline variants for highly reusable effects.

## 2026-10-17 - Prevent O(N) Re-renders with Zustand Selectors
**Learning:** Destructuring the entire Zustand store (e.g., `const { addItem } = useCartStore();`) causes the component to subscribe to all state changes in the store. This means that if any unrelated property in the store changes (like `isOpen` or `items`), the component will re-render unnecessarily, creating an O(N) re-render bottleneck across the app when global state changes.

**Action:** Always use specific selector functions (e.g., `useCartStore((state) => state.addItem)`) to subscribe components only to the specific slices of state they need. This explicitly controls component updates and ensures stable performance at scale.
