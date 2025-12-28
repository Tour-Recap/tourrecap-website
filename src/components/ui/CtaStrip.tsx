import Link from 'next/link';

interface CtaBoxProps {
  heading: string;
  description: string;
  buttonText: string;
  href: string;
}

interface CtaStripProps {
  primary: CtaBoxProps;
  secondary: CtaBoxProps;
}

export function CtaStrip({ primary, secondary }: CtaStripProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border-2 border-primary bg-white p-8 text-center">
        <h3 className="text-xl font-bold text-foreground">{primary.heading}</h3>
        <p className="mt-2 text-gray-600">{primary.description}</p>
        <div className="mt-6">
          <Link
            href={primary.href}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
          >
            {primary.buttonText}
          </Link>
        </div>
      </div>
      <div className="rounded-lg border border-gray-300 bg-white p-8 text-center">
        <h3 className="text-xl font-bold text-foreground">{secondary.heading}</h3>
        <p className="mt-2 text-gray-600">{secondary.description}</p>
        <div className="mt-6">
          <Link
            href={secondary.href}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            {secondary.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
