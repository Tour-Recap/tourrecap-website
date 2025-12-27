'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/#deliverables', label: 'Product' },
  { href: '/samples', label: 'Samples' },
  { href: '/enterprise', label: 'Enterprise' },
  { href: '/guides', label: 'For Guides' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Left: wordmark */}
        <Link href="/" className="text-xl font-bold text-primary">
          TourRecap
        </Link>

        {/* Center: desktop nav links */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-600 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: hamburger (mobile) + CTAs (always visible) */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 md:hidden"
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Secondary CTA - always visible */}
          <Link
            href="/basic-demo"
            className="hidden rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:inline-block"
          >
            Start Basic Demo
          </Link>

          {/* Primary CTA - always visible */}
          <Link
            href="/enterprise"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            Request Pilot
          </Link>
        </div>
      </div>

      {/* Mobile menu panel - nav links only */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-gray-200 bg-white px-4 py-4 md:hidden"
        >
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-base text-gray-600 transition-colors hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile secondary CTA */}
          <div className="mt-4 border-t border-gray-200 pt-4 sm:hidden">
            <Link
              href="/basic-demo"
              className="block rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              Start Basic Demo
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
