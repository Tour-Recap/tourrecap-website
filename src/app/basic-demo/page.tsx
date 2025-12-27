'use client';

import Link from 'next/link';
import Script from 'next/script';

const CALENDLY_URL = process.env.NEXT_PUBLIC_BASIC_DEMO_CALENDLY_URL;

export default function BasicDemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Start a Basic Package Demo
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            For independent guides and small operators. In 15 minutes you&apos;ll see exactly what
            your guests receive each tour day.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#calendly-embed"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
            >
              Book a 15-minute demo
            </a>
            <Link
              href="/samples"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              See Sample Recaps
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-foreground">
            What You&apos;ll See in the Demo
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-foreground">Guest Daily Recap</h3>
              <p className="mt-2 text-gray-600">
                A personalized ~90-second video each guest receives after every tour day.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-foreground">Tour Day Recap</h3>
              <p className="mt-2 text-gray-600">
                A 3–5 minute group video capturing the full tour day experience.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-foreground">Capture Workflow</h3>
              <p className="mt-2 text-gray-600">
                The simple process guides actually use to capture moments on tour.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-foreground">Consistent Branding</h3>
              <p className="mt-2 text-gray-600">
                How your logo, colors, and style stay consistent across every recap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-foreground">Who It&apos;s For</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground">Independent Guides</h3>
              <p className="mt-2 text-gray-600">
                Personal tours where you want to give guests a memorable keepsake.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground">Small Operators</h3>
              <p className="mt-2 text-gray-600">
                Boutique departures where quality and personal touch matter most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Routing to Enterprise */}
      <section className="bg-gray-50 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm text-gray-500">
            If you run multiple concurrent departures or need standardized rollout:{' '}
            <Link href="/enterprise" className="text-primary underline hover:text-primary/80">
              Request an Enterprise Pilot.
            </Link>
          </p>
        </div>
      </section>

      {/* Calendly Embed */}
      <section id="calendly-embed" className="scroll-mt-20 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
            Book Your Demo
          </h2>
          {CALENDLY_URL ? (
            <>
              <div
                className="calendly-inline-widget w-full"
                data-url={CALENDLY_URL}
                style={{ minHeight: '700px' }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
              />
            </>
          ) : (
            <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
              <p className="text-lg text-gray-600">
                Demo booking isn&apos;t configured yet.{' '}
                <a
                  href="mailto:hello@tourrecap.com"
                  className="text-primary underline hover:text-primary/80"
                >
                  Email hello@tourrecap.com
                </a>{' '}
                to schedule.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
