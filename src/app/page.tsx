import { Metadata } from 'next';

import { CtaStrip } from '@/components/ui/CtaStrip';
import { DeviceMock } from '@/components/ui/DeviceMock';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { HeroCta } from '@/components/ui/HeroCta';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Daily Recaps Your Guests Share',
  description:
    'TourRecap delivers Guest Daily Recaps and Tour Day Recaps — generated nightly, branded, ready to share.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Daily recaps your guests share — marketing you don&apos;t have to beg for
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-600">
            TourRecap delivers a Guest Daily Recap for every guest and a Tour Day Recap for the
            group — generated nightly, consistently branded, ready to share.
          </p>
          <HeroCta />

          {/* Device Mock */}
          <DeviceMock className="mt-12">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="w-full rounded-lg border-2 border-primary bg-white p-4 text-center sm:w-44">
                <div className="text-xs font-medium uppercase tracking-wide text-gray-500">90s</div>
                <p className="mt-1 font-semibold text-foreground">Guest Daily Recap</p>
              </div>
              <div className="w-full rounded-lg border-2 border-primary bg-white p-4 text-center sm:w-44">
                <div className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  3-5 min
                </div>
                <p className="mt-1 font-semibold text-foreground">Tour Day Recap</p>
              </div>
            </div>
          </DeviceMock>
        </div>
      </section>

      {/* Deliverables Section */}
      <section id="deliverables" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading title="What You Get" className="text-center" />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <FeatureCard
              title="Guest Daily Recap"
              subtitle="~90 seconds"
              bullets={[
                'Personal highlights from their day',
                'Pride moments guests want to share',
                'Shareable link delivered nightly',
              ]}
            />
            <FeatureCard
              title="Tour Day Recap"
              subtitle="~3-5 minutes"
              bullets={[
                'Group + guides featured together',
                'Operator-branded marketing cut',
                'Ready for social channels',
              ]}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading title="How It Works" className="text-center" />
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                1
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Capture</h3>
              <p className="mt-2 text-sm text-gray-600">
                Guide records short clips throughout the day
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                2
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Upload</h3>
              <p className="mt-2 text-sm text-gray-600">GuideApp syncs footage overnight</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                3
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Produce</h3>
              <p className="mt-2 text-sm text-gray-600">TourRecap pipeline assembles recaps</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                4
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Deliver</h3>
              <p className="mt-2 text-sm text-gray-600">Links at dinner + operator dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Marketing Buys Section */}
      <section id="marketing" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading title="Why Marketing Buys" className="text-center" />
          <div className="mx-auto mt-10 max-w-2xl">
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-3 text-primary">*</span>
                <span>
                  <strong className="text-foreground">Consistent output at scale</strong> — no more
                  random guide content
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">*</span>
                <span>
                  <strong className="text-foreground">Share-driven referrals</strong> — guests do
                  the marketing
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">*</span>
                <span>
                  <strong className="text-foreground">Operator-branded templates</strong> — your
                  look, every time
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">*</span>
                <span>
                  <strong className="text-foreground">Low operational burden</strong> — guides just
                  capture
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading title="No Surprises" className="text-center" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title="Predictable packaging"
              description="Same deliverables every tour day"
              className="p-5"
            />
            <FeatureCard
              title="Enterprise pilot"
              description="Test on a real departure before committing"
              className="p-5"
            />
            <FeatureCard
              title="Data retention"
              description="Footage processed and deleted within 30 days"
              className="p-5"
            />
            <FeatureCard
              title="Opt-out handling"
              description="Guests can opt out; blurred/omitted as needed"
              className="p-5"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-50 py-20">
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
