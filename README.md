# druti-portfolio-4

Redesigned portfolio with two themes built on one palette (Ice Silver, Deep Aubergine, Marigold).

- **Light mode is the default.** The switch in the navbar toggles dark mode; the choice is saved in `localStorage` and applied before first paint (no flash).
- Theme colors live in `src/index.css` as CSS variables under `:root[data-theme='light']` and `:root[data-theme='dark']`. Components only use the variables.
- `--accent` (marigold) is used for fills; `--accent-text` is the accessible variant for text.
- Motion uses `motion/react` plus CSS, and respects `prefers-reduced-motion`.
- `public/druti-profile.png` and the resume PDF are unchanged.

```bash
npm install
npm run dev      # start locally
npm run build    # production build
```

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
