'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const FORMSPREE_URL = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : null;

const roleOptions = [
  'CMO',
  'Marketing Director',
  'Marketing Manager',
  'Operations',
  'Owner',
  'Other',
];

const companySizeOptions = [
  '<50 tours/year',
  '50-200 tours/year',
  '200-500 tours/year',
  '500-1000 tours/year',
  '1000+ tours/year',
];

const tourTypeOptions = ['Cycling', 'Hiking', 'Multi-sport', 'Safari', 'Cultural', 'Other'];

export default function EnterprisePage() {
  const [formState, setFormState] = useState<FormState>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_URL) return;

    setFormState('loading');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Request an Enterprise Pilot
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-600">
            Standardize nightly Guest Daily Recaps + Tour Day Recaps across your departures —
            packaged for scale, predictable delivery, and brand control.
          </p>
          <Link
            href="/samples"
            className="mt-4 inline-block text-primary underline hover:text-primary/80"
          >
            See Sample Recaps
          </Link>
        </div>
      </section>

      {/* What You Get in the Pilot */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-foreground">What You Get in the Pilot</h2>
          <ul className="mt-6 space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              Review your itineraries + brand look
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              Confirm deliverables (per guest + per tour day)
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              Run on a real departure and collect feedback
            </li>
          </ul>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-foreground">Guest Daily Recap</h3>
              <p className="mt-1 text-sm text-gray-500">≈90 seconds per guest</p>
              <p className="mt-4 text-gray-600">
                Personalized highlights delivered nightly as a shareable link.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-foreground">Tour Day Recap</h3>
              <p className="mt-1 text-sm text-gray-500">≈3–5 minutes per tour day</p>
              <p className="mt-4 text-gray-600">
                Group + guides featured, ready for social channels.
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-gray-600">
            Every tour day: one recap per guest + one recap for the tour.
          </p>
        </div>
      </section>

      {/* Why Enterprise Teams Choose This */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-foreground">Why Enterprise Teams Choose This</h2>
          <ul className="mt-6 space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              Consistent packaging (no surprises)
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              Brand templates + controls
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              Minimal guide burden
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              Brand-safe options (consent/opt-out/blur)
            </li>
          </ul>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white py-16">
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
              Operator controls
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-foreground">Request your Enterprise Pilot</h2>
          <p className="mt-2 text-gray-600">
            We&apos;ll respond within 1–2 business days.
          </p>

          {!FORMSPREE_URL ? (
            <div className="mt-8 rounded-lg border border-yellow-300 bg-yellow-50 p-6">
              <p className="text-yellow-800">
                Form configuration missing. Set <code>NEXT_PUBLIC_FORMSPREE_ID</code> in .env.local
              </p>
            </div>
          ) : formState === 'success' ? (
            <div className="mt-8 rounded-lg border border-green-300 bg-green-50 p-6">
              <p className="text-lg font-medium text-green-800">
                Thanks — we&apos;ll reach out to schedule your Enterprise Pilot call.
              </p>
            </div>
          ) : (
            <form
              action={FORMSPREE_URL}
              method="POST"
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >
              {formState === 'error' && (
                <div className="rounded-lg border border-red-300 bg-red-50 p-4">
                  <p className="text-red-800">
                    Something went wrong. Please try again or email us directly.
                  </p>
                </div>
              )}

              {/* Required Fields */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Work email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground">
                    Company (tour operator) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-foreground">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select your role</option>
                    {roleOptions.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-foreground">
                    Company size <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select company size</option>
                    {companySizeOptions.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="tourType" className="block text-sm font-medium text-foreground">
                    Primary tour type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="tourType"
                    name="tourType"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select tour type</option>
                    {tourTypeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional Fields */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-foreground">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    placeholder="https://"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="regions" className="block text-sm font-medium text-foreground">
                    Regions
                  </label>
                  <input
                    type="text"
                    id="regions"
                    name="regions"
                    placeholder="e.g., Europe, South America"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="workflow" className="block text-sm font-medium text-foreground">
                  Current content workflow
                </label>
                <textarea
                  id="workflow"
                  name="workflow"
                  rows={2}
                  placeholder="How do you currently handle tour content/recaps?"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your goals and any questions"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                disabled={formState === 'loading'}
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
              >
                {formState === 'loading' ? 'Submitting...' : 'Request Enterprise Pilot'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footnote */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm text-gray-500">
            Independent guide or small operator?{' '}
            <Link href="/basic-demo" className="text-primary hover:underline">
              Start with the Basic Package Demo.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
