# TourRecap Website

Marketing website for TourRecap - nightly guest and tour recaps for tour operators.

## Prerequisites

- Node.js 20+
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file for local development:

```bash
NEXT_PUBLIC_FORMSPREE_ID=xxxxxx
```

Get your Formspree ID from [formspree.io](https://formspree.io).

## Scripts

| Command                | Description               |
| ---------------------- | ------------------------- |
| `npm run dev`          | Start development server  |
| `npm run build`        | Build for production      |
| `npm run start`        | Start production server   |
| `npm run lint`         | Run ESLint                |
| `npm run format`       | Format code with Prettier |
| `npm run format:check` | Check formatting          |

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) - Linting and formatting
