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
gcloud config set project tourrecap-web-dev
```

### Deploy

Using the deploy script:

```bash
chmod +x ops/deploy_web_dev.sh
./ops/deploy_web_dev.sh
```

Or manually:

```bash
gcloud run deploy tourrecap-website --source . --region us-east1 --allow-unauthenticated --min-instances=0 --max-instances=3 --cpu=1 --memory=512Mi --concurrency=80 --timeout=60s --cpu-throttling
```

To set environment variables at deploy time, add:

```bash
--set-env-vars "NEXT_PUBLIC_FORMSPREE_ID=xxx,NEXT_PUBLIC_BASIC_DEMO_CALENDLY_URL=xxx"
```

**Note:** Environment variables are optional. If not set, the site will run with placeholder content.

### Smoke Test

```bash
curl -I $(gcloud run services describe tourrecap-website --region us-east1 --format='value(status.url)')
```

### View Logs

```bash
gcloud run services logs read tourrecap-website --region us-east1
```

### Delete Service (stop all costs)

```bash
gcloud run services delete tourrecap-website --region us-east1
```

## Custom Domain Setup

Map www.tourrecap.com to Cloud Run and redirect apex to www.

### Step 1: Add Domain Mapping in Cloud Run

```bash
gcloud run domain-mappings create --service tourrecap-website --domain www.tourrecap.com --region us-east1
```

Get the required DNS records:

```bash
gcloud run domain-mappings describe --domain www.tourrecap.com --region us-east1
```

### Step 2: Configure DNS in GoDaddy

**For www subdomain (CNAME):**

| Type  | Name | Value                | TTL    |
| ----- | ---- | -------------------- | ------ |
| CNAME | www  | ghs.googlehosted.com | 1 hour |

**For apex domain (tourrecap.com):**

GoDaddy doesn't support CNAME at apex. Use domain forwarding:

1. Go to GoDaddy Domain Settings → Forwarding
2. Forward `tourrecap.com` to `https://www.tourrecap.com`
3. Select: Permanent (301), Forward only

### Step 3: Verify

Wait 5-30 minutes for DNS propagation, then:

```bash
# Check CNAME record
dig www.tourrecap.com CNAME +short
# Expected: ghs.googlehosted.com.

nslookup www.tourrecap.com
# Expected: canonical name = ghs.googlehosted.com

nslookup tourrecap.com
# Expected: A record pointing to GoDaddy forwarding IP

# Check HTTPS serves site
curl -I https://www.tourrecap.com
# Expected: HTTP/2 200

# Check HTTP→HTTPS redirect
curl -I http://www.tourrecap.com
# Expected: HTTP/1.1 301, Location: https://www.tourrecap.com/

# Check apex redirects to www (HTTP)
curl -I http://tourrecap.com
# Expected: 301, Location: https://www.tourrecap.com/

# Check apex redirects to www (HTTPS)
curl -I https://tourrecap.com
# Expected: 301, Location: https://www.tourrecap.com/
```

Or use the helper script:

```bash
./ops/domain_check.sh
./ops/domain_check.sh tourrecap.com  # check apex
```

### Troubleshooting

| Issue                 | Fix                                                          |
| --------------------- | ------------------------------------------------------------ |
| Domain mapping fails  | Verify domain ownership in Google Search Console, then retry |
| Certificate pending   | Wait up to 24h; ensure CNAME is correct                      |
| DNS not resolving     | Check TTL; try `dig @8.8.8.8 www.tourrecap.com`              |
| Wrong project         | Run `gcloud config set project tourrecap-web-dev`            |
| 404 after mapping     | Verify service is deployed and running                       |

### Cost Note

This uses Cloud Run's built-in domain mapping (free). No load balancer required.
