'use client';

import { TrackedLink } from '@/components/analytics/TrackedLink';

export function HeroCta() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      <TrackedLink
        href="/enterprise"
        trackEvent="cta_enterprise_pilot"
        trackProps={{ location: 'hero' }}
        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
      >
        Request an Enterprise Pilot
      </TrackedLink>
      <TrackedLink
        href="/basic-demo"
        trackEvent="cta_basic_demo"
        trackProps={{ location: 'hero' }}
        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
      >
        Start Basic Demo
      </TrackedLink>
    </div>
  );
}
