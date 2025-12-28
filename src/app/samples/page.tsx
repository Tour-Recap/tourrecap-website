import { Metadata } from 'next';
import Link from 'next/link';

import { CtaStrip } from '@/components/ui/CtaStrip';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Sample Recaps',
  description: 'See sample Guest Daily Recaps and Tour Day Recaps from TourRecap.',
};

const SAMPLE_GUEST_URL = process.env.NEXT_PUBLIC_SAMPLE_GUEST_URL;
const SAMPLE_TOUR_URL = process.env.NEXT_PUBLIC_SAMPLE_TOUR_URL;
const SAMPLE_SEQUENCE_URL = process.env.NEXT_PUBLIC_SAMPLE_SEQUENCE_URL;

function isYouTubeOrVimeo(url: string): boolean {
  return (
    url.includes('youtube.com') ||
    url.includes('youtu.be') ||
    url.includes('vimeo.com') ||
    url.includes('player.vimeo.com')
  );
}

function isDirectVideo(url: string): boolean {
  return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
}

function getEmbedUrl(url: string): string {
  // Convert YouTube watch URLs to embed URLs
  if (url.includes('youtube.com/watch')) {
    const videoId = new URL(url).searchParams.get('v');
    return `https://www.youtube.com/embed/${videoId}`;
  }
  // Convert youtu.be short URLs to embed URLs
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  // Convert Vimeo URLs to embed URLs
  if (url.includes('vimeo.com') && !url.includes('player.vimeo.com')) {
    const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
    return `https://player.vimeo.com/video/${videoId}`;
  }
  return url;
}

interface SampleCardProps {
  title: string;
  description: string;
  detail: string;
  url: string | undefined;
  placeholderText: string;
}

function SampleCard({ title, description, detail, url, placeholderText }: SampleCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-video bg-gray-100">
        {url ? (
          isYouTubeOrVimeo(url) ? (
            <iframe
              src={getEmbedUrl(url)}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          ) : isDirectVideo(url) ? (
            <video controls className="h-full w-full object-cover">
              <source src={url} type={`video/${url.split('.').pop()}`} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <iframe
              src={url}
              className="h-full w-full"
              allowFullScreen
              title={title}
            />
          )
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
            <p className="text-lg font-medium text-gray-500">Sample coming soon</p>
            <p className="mt-2 text-sm text-gray-400">{placeholderText}</p>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <p className="mt-1 text-sm text-gray-500">{detail}</p>
      </div>
    </div>
  );
}

export default function SamplesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            See what TourRecap delivers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Two deliverables every tour day: a Guest Daily Recap for each guest and a Tour Day
            Recap for the group — designed to be shared nightly.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/enterprise"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
            >
              Request an Enterprise Pilot
            </Link>
            <Link
              href="/basic-demo"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Start Basic Package Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Sample Grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <SampleCard
              title="Guest Daily Recap (≈90s)"
              description="Personal highlights"
              detail="Delivered nightly as a shareable link"
              url={SAMPLE_GUEST_URL}
              placeholderText="Personal recap highlighting each guest's moments"
            />
            <SampleCard
              title="Tour Day Recap (≈3–5 min)"
              description="Group + guides"
              detail="Operator-branded social cut"
              url={SAMPLE_TOUR_URL}
              placeholderText="Full group recap ready for social sharing"
            />
            <SampleCard
              title="Multi-day Sequence (Day 1 → Day 8)"
              description="Shows consistency across a tour"
              detail="Teaser for daily cadence"
              url={SAMPLE_SEQUENCE_URL}
              placeholderText="See how recaps build across an entire tour"
            />
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading title="What to Look For" className="text-center" />
          <div className="mx-auto mt-10 max-w-2xl">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
                  ✓
                </span>
                <span className="text-gray-600">Consistent pacing and story arc</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
                  ✓
                </span>
                <span className="text-gray-600">Brand template consistency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
                  ✓
                </span>
                <span className="text-gray-600">Shareable &quot;pride moments&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
                  ✓
                </span>
                <span className="text-gray-600">Operator-ready recap for socials</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Segment Routing Strip */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <CtaStrip
            primary={{
              heading: 'Tour operator team?',
              description: 'Standardize recaps across your departures with enterprise controls.',
              buttonText: 'Request an Enterprise Pilot',
              href: '/enterprise',
            }}
            secondary={{
              heading: 'Independent guide / small operator?',
              description: 'Get started with a simple demo to see TourRecap in action.',
              buttonText: 'Start Basic Demo',
              href: '/basic-demo',
            }}
          />
        </div>
      </section>
    </>
  );
}
