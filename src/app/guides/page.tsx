import Link from 'next/link';

export default function GuidesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Nightly recaps that make your tours look premium.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            TourRecap delivers two branded videos every tour day: a Guest Daily Recap for each
            guest and a Tour Day Recap for the group — ready to share nightly.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/basic-demo"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
            >
              Start Basic Package Demo
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

      {/* Why Guides Love It */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-foreground">Why Guides Love It</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-foreground">Look bigger without more work</h3>
              <p className="mt-2 text-gray-600">
                Professional branded videos make your operation look polished and established.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-foreground">Guests share pride moments</h3>
              <p className="mt-2 text-gray-600">
                Personal recaps guests actually want to share with friends and family.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-foreground">Consistent output you can promise</h3>
              <p className="mt-2 text-gray-600">
                Every guest gets the same high-quality experience, every single time.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-foreground">Less late-night editing scramble</h3>
              <p className="mt-2 text-gray-600">
                Automated assembly means you can rest after a long tour day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-foreground">How It Works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Capture</h3>
              <p className="mt-2 text-sm text-gray-600">
                Record moments throughout the tour day using our simple workflow.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Assemble</h3>
              <p className="mt-2 text-sm text-gray-600">
                We automatically combine your clips into polished recap videos.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Brand</h3>
              <p className="mt-2 text-sm text-gray-600">
                Your logo, colors, and style are applied consistently to every video.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                4
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Deliver & Share</h3>
              <p className="mt-2 text-sm text-gray-600">
                Guests receive their personal recap, ready to share with the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Link */}
      <section className="bg-gray-50 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm text-gray-500">
            Tour operator team?{' '}
            <Link href="/enterprise" className="text-primary underline hover:text-primary/80">
              Request an Enterprise Pilot.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
