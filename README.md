# Next.js Ant Design Boilerplate

A Next.js 16 boilerplate with Ant Design 6, React 19, and TypeScript, featuring dark/light theme switching and a ready-to-use app layout.

## Tech Stack

- **Next.js 16** – React framework with App Router
- **React 19** – With React Compiler
- **Ant Design 6** – UI component library
- **@ant-design/charts** – Charts and visualizations
- **TypeScript** – Type safety

## Features

- Ant Design integrated with `@ant-design/nextjs-registry` (no flash of unstyled content)
- Dark/Light theme switching (persisted in `localStorage`)
- App layout with header and navigation
- Geist font family
- ESLint configured for Next.js

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with AntdRegistry & ThemeProvider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── configuration/      # Configuration page
│   ├── viewdetails/        # View Details page
│   └── system/             # System page
└── components/
    └── core/
        ├── ThemeProvider.tsx   # Layout, nav, Ant Design theme config
        └── ThemeSwitcher.tsx   # Dark/Light toggle
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

### Lint

```bash
npm run lint
```

## License

MIT
