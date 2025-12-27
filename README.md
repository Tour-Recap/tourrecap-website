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
NEXT_PUBLIC_BASIC_DEMO_CALENDLY_URL=https://calendly.com/tourrecap/basic-demo
NEXT_PUBLIC_SAMPLE_GUEST_URL=https://www.youtube.com/embed/xxxxx
NEXT_PUBLIC_SAMPLE_TOUR_URL=https://www.youtube.com/embed/xxxxx
NEXT_PUBLIC_SAMPLE_SEQUENCE_URL=https://www.youtube.com/embed/xxxxx
```

| Variable                              | Description                                      |
| ------------------------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_FORMSPREE_ID`            | Formspree form ID for enterprise pilot requests  |
| `NEXT_PUBLIC_BASIC_DEMO_CALENDLY_URL` | Calendly scheduling URL for basic demo bookings  |
| `NEXT_PUBLIC_SAMPLE_GUEST_URL`        | Video URL for Guest Daily Recap sample           |
| `NEXT_PUBLIC_SAMPLE_TOUR_URL`         | Video URL for Tour Day Recap sample              |
| `NEXT_PUBLIC_SAMPLE_SEQUENCE_URL`     | Video URL for multi-day sequence sample (optional) |

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

## Deployment (Google Cloud Run)

### Prerequisites

- [Google Cloud CLI](https://cloud.google.com/sdk/docs/install) installed and authenticated
- A GCP project with billing enabled

Setup:

```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

### Deploy

```bash
gcloud run deploy tourrecap-website --source . --region us-central1 --min-instances 0 --max-instances 3 --cpu 1 --memory 512Mi --concurrency 80 --timeout 60s --cpu-throttling --allow-unauthenticated
```

To set environment variables at deploy time:

```bash
gcloud run deploy tourrecap-website --source . --region us-central1 --min-instances 0 --max-instances 3 --cpu 1 --memory 512Mi --concurrency 80 --timeout 60s --cpu-throttling --allow-unauthenticated --set-env-vars "NEXT_PUBLIC_FORMSPREE_ID=xxx,NEXT_PUBLIC_BASIC_DEMO_CALENDLY_URL=xxx"
```

**Note:** Environment variables are optional. If not set, the site will run with placeholder content where those features are used.

### Smoke Test

```bash
curl -I $(gcloud run services describe tourrecap-website --region us-central1 --format='value(status.url)')
```

### View Logs

```bash
gcloud run services logs read tourrecap-website --region us-central1
```

### Delete Service (stop all costs)

```bash
gcloud run services delete tourrecap-website --region us-central1
```
