import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/enterprise', label: 'Enterprise' },
  { href: '/basic-demo', label: 'Basic Demo' },
  { href: '/samples', label: 'Samples' },
  { href: '/guides', label: 'Guides' },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-primary">
          TourRecap
        </Link>
        <div className="flex items-center gap-6">
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
          <Link
            href="/enterprise"
            className="hidden md:inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            Request an Enterprise Pilot
          </Link>
        </div>
      </div>
    </header>
  );
}
