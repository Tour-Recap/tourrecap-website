import Link from 'next/link';

const footerSections = [
  {
    title: 'Product',
    links: [
      { href: '/#deliverables', label: 'Deliverables' },
      { href: '/samples', label: 'Samples' },
      { href: '/#trust', label: 'Trust' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { href: '/enterprise', label: 'Enterprise' },
      { href: '/guides', label: 'For Guides' },
      { href: '/basic-demo', label: 'Basic Demo' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: 'mailto:hello@tourrecap.com', label: 'Contact', external: true },
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* 3-column link grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TourRecap Technologies LLC
        </div>
      </div>
    </footer>
  );
}
