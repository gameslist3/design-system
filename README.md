# Design System Scaffold

A professional design system repository scaffolded using Vite, React, TypeScript, Storybook, and Tailwind CSS. This project serves as a foundation for building a robust UI library with tokens and components.

## Getting Started

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Run Storybook
```bash
npm run storybook
```

## Folder Structure

```
src/
├── tokens/             # Design tokens (colors, typography, spacing, etc.)
├── components/         # UI components with their stories and styles
├── hooks/              # Custom React hooks
├── utils/              # Utility functions (e.g., cn utility)
└── index.ts            # Master export file
```

## How to Fill in Tokens

Navigate to the `src/tokens/` folder. Each file (e.g., `colors.ts`, `typography.ts`) contains placeholder objects with `TODO` comments. Replace these placeholders with actual values from your Figma design files.

Example in `colors.ts`:
```ts
export const colors = {
  primary: {
    500: '#3B82F6', // Replace with Figma value
  }
}
```

## How to Add a New Component

1. Create a new folder in `src/components/` (e.g., `src/components/MyComponent`).
2. Create the component file: `MyComponent.tsx`.
3. Create the stories file: `MyComponent.stories.tsx`.
4. Create an `index.ts` file in the component folder to export it.
5. Export the new component from `src/index.ts`.
6. Use `cva` for variant management and `cn` for class merging.

## Scripts

| Script | Description |
| --- | --- |
| `dev` | Runs the Vite development server |
| `build` | Builds the project for production |
| `storybook` | Runs the Storybook development server |
| `build-storybook` | Builds a static Storybook site |

## Technology Stack

- **Vite**: Next Generation Frontend Tooling
- **React**: UI Library
- **TypeScript**: Static Typing
- **Storybook**: Component Documentation & Testing
- **Tailwind CSS v3**: Utility-first CSS framework
- **class-variance-authority (cva)**: Variant management
- **lucide-react**: Icon library
- **tailwind-merge**: Utility to merge Tailwind classes
