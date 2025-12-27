import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Make every tour day market itself.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-600">
            TourRecap delivers two branded videos every tour day: a 90-second Guest Daily Recap
            for each guest and a Tour Day Recap for the group — ready to share the same night.
            Built for large operators with consistent packages and predictable billing.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/enterprise"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
            >
              Request an Enterprise Pilot
            </Link>
            <Link
              href="/samples"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              See Sample Recaps
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Enterprise-ready: consistent deliverables · brand templates · operator controls ·
            brand-safe options
          </p>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Social proof you don&apos;t have to chase
              </h3>
              <p className="mt-2 text-gray-600">
                Every guest gets a personalized recap to share with friends and family — turning
                your tours into organic referrals.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-foreground">Brand consistency at scale</h3>
              <p className="mt-2 text-gray-600">
                Locked templates and styling ensure every recap looks professional and on-brand, no
                matter the guide or location.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-foreground">Demand generation built in</h3>
              <p className="mt-2 text-gray-600">
                Tour Day Recaps are ready-to-post social content — perfect for Instagram, Facebook,
                YouTube, and WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section id="deliverables" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-foreground">Guest Daily Recap</h3>
              <p className="mt-1 text-sm text-gray-500">≈90 seconds</p>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Personalized highlights from the day
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Delivered nightly as a shareable link
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Built for friends + family sharing
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Operator-branded look
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-foreground">Tour Day Recap</h3>
              <p className="mt-1 text-sm text-gray-500">≈3–5 minutes</p>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Group + guides featured
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Operator-ready social cut
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Consistent template + pacing
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  Designed for IG/FB/YouTube/WhatsApp
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-gray-600">
            Every tour day: one recap per guest + one recap for the tour.
          </p>
        </div>
      </section>

      {/* Enterprise Packaging Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl rounded-lg border-2 border-primary bg-white p-8">
            <h2 className="text-2xl font-bold text-foreground">
              Enterprise Subscription built for operators who scale
            </h2>
            <p className="mt-2 text-gray-600">
              Predictable delivery and predictable cost — so Marketing can commit with confidence.
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                Standard nightly deliverables (guest + tour)
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                Brand templates and locked styling
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                Operator controls and distribution
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                Onboarding and rollout support
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                Consent / opt-out / blur options
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/enterprise"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
              >
                Request an Enterprise Pilot
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Small operator or independent guide?{' '}
              <Link href="/basic-demo" className="text-primary hover:underline">
                Start with the Basic Package Demo.
              </Link>
            </p>
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
              <p className="mt-2 text-sm text-gray-600">Guides capture footage throughout the day</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                2
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Assemble</h3>
              <p className="mt-2 text-sm text-gray-600">
                We assemble personalized and group recaps
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                3
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Brand</h3>
              <p className="mt-2 text-sm text-gray-600">Your templates and styling applied</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                4
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Deliver & Share</h3>
              <p className="mt-2 text-sm text-gray-600">Ready to share the same night</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip Section */}
      <section id="trust" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground">Brand-safe by design</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-primary">✓</span>
              Consent + opt-out supported
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-primary">✓</span>
              Face blur options
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-primary">✓</span>
              Operator control of templates + distribution
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Make every tour day a marketing asset.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/enterprise"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
            >
              Request an Enterprise Pilot
            </Link>
            <Link
              href="/samples"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              See Sample Recaps
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
