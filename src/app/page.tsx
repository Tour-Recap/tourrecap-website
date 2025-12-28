import Link from 'next/link';

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
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
              Start Basic Demo
            </Link>
          </div>

          {/* Device Mock */}
          <div className="mt-12 flex justify-center">
            <div className="rounded-2xl border-4 border-gray-800 bg-gray-900 p-2 shadow-xl">
              <div className="flex flex-col gap-4 rounded-xl bg-gray-100 p-6 sm:flex-row">
                <div className="w-full rounded-lg border-2 border-primary bg-white p-4 text-center sm:w-44">
                  <div className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    90s
                  </div>
                  <p className="mt-1 font-semibold text-foreground">Guest Daily Recap</p>
                </div>
                <div className="w-full rounded-lg border-2 border-primary bg-white p-4 text-center sm:w-44">
                  <div className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    3-5 min
                  </div>
                  <p className="mt-1 font-semibold text-foreground">Tour Day Recap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section id="deliverables" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-foreground">What You Get</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-foreground">Guest Daily Recap</h3>
              <p className="mt-1 text-sm text-gray-500">~90 seconds</p>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">-</span>
                  Personal highlights from their day
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">-</span>
                  Pride moments guests want to share
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">-</span>
                  Shareable link delivered nightly
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-foreground">Tour Day Recap</h3>
              <p className="mt-1 text-sm text-gray-500">~3-5 minutes</p>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">-</span>
                  Group + guides featured together
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">-</span>
                  Operator-branded marketing cut
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">-</span>
                  Ready for social channels
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-foreground">How It Works</h2>
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
          <h2 className="text-center text-2xl font-bold text-foreground">Why Marketing Buys</h2>
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
          <h2 className="text-center text-2xl font-bold text-foreground">No Surprises</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-foreground">Predictable packaging</h3>
              <p className="mt-2 text-sm text-gray-600">Same deliverables every tour day</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-foreground">Enterprise pilot</h3>
              <p className="mt-2 text-sm text-gray-600">
                Test on a real departure before committing
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-foreground">Data retention</h3>
              <p className="mt-2 text-sm text-gray-600">
                Footage processed and deleted within 30 days
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-foreground">Opt-out handling</h3>
              <p className="mt-2 text-sm text-gray-600">
                Guests can opt out; blurred/omitted as needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border-2 border-primary bg-white p-8 text-center">
              <h3 className="text-xl font-bold text-foreground">Tour operator team?</h3>
              <p className="mt-2 text-gray-600">
                Standardize recaps across your departures with enterprise controls.
              </p>
              <div className="mt-6">
                <Link
                  href="/enterprise"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
                >
                  Request an Enterprise Pilot
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-300 bg-white p-8 text-center">
              <h3 className="text-xl font-bold text-foreground">
                Independent guide / small operator?
              </h3>
              <p className="mt-2 text-gray-600">
                Get started with a simple demo to see TourRecap in action.
              </p>
              <div className="mt-6">
                <Link
                  href="/basic-demo"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Start Basic Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
