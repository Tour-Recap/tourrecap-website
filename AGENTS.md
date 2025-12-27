# Repository Guidelines

## Project Structure & Module Organization
- `src/app` hosts the Next.js App Router pages (e.g., `src/app/page.tsx`, `src/app/enterprise/page.tsx`). Route names map to folders.
- `src/components` contains shared UI (layout pieces like `Header.tsx`, `Footer.tsx`).
- `src/app/globals.css` is the global stylesheet and Tailwind entry point.
- `public` holds static assets (SVGs, icons).

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start the local dev server at `http://localhost:3000`.
- `npm run build`: create a production build.
- `npm run start`: run the production server from the build output.
- `npm run lint`: run ESLint.
- `npm run format` / `npm run format:check`: format or verify formatting with Prettier.

## Coding Style & Naming Conventions
- TypeScript + React with `.tsx` components; keep components in PascalCase (e.g., `Header.tsx`).
- Use App Router file conventions (`page.tsx`, `layout.tsx`) inside route folders.
- Tailwind CSS is used for styling; keep utility classes co-located in JSX.
- Formatting is enforced with Prettier; linting uses ESLint + Next.js rules.

## Testing Guidelines
- No test runner is configured in `package.json` yet.
- If adding tests, document the framework and add a `npm run test` script.
- Prefer colocating tests near components (e.g., `src/components/Foo.test.tsx`).

## Commit & Pull Request Guidelines
- Commit history uses short, descriptive messages; some entries prefix with `PR#:`. Keep messages concise and outcome-focused.
- PRs should include a clear description of UI changes and link related issues if available.
- Include screenshots or screen recordings for visual updates.

## Configuration Tips
- Local environment variables live in `.env.local` (e.g., `NEXT_PUBLIC_FORMSPREE_ID=xxxxxx`).
- Node.js 20+ and npm are required.
