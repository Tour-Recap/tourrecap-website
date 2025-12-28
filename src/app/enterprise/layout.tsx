import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Pilot',
  description: 'Request an enterprise pilot to standardize nightly recaps across your departures.',
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
