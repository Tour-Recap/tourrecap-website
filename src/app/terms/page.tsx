import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'TourRecap terms of service.',
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
      <p className="mt-4 text-sm text-gray-500">Last updated: December 2024</p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-foreground">Service Description</h2>
        <p className="mt-3 text-gray-600">
          TourRecap provides video recap services for tour operators. Our service is currently in
          pilot/beta and features may change as we develop the product.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-foreground">As-Is Service</h2>
        <p className="mt-3 text-gray-600">
          TourRecap is provided &quot;as is&quot; and &quot;as available&quot; without warranties of
          any kind, either express or implied. We do not guarantee that the service will be
          uninterrupted, error-free, or meet your specific requirements.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
        <p className="mt-3 text-gray-600">
          To the fullest extent permitted by law, TourRecap and its affiliates shall not be liable
          for any indirect, incidental, special, consequential, or punitive damages, or any loss of
          profits or revenues, whether incurred directly or indirectly, or any loss of data, use,
          goodwill, or other intangible losses resulting from your use of the service.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-foreground">Modifications</h2>
        <p className="mt-3 text-gray-600">
          We reserve the right to modify these terms at any time. We will notify users of any
          material changes by updating the &quot;Last updated&quot; date. Your continued use of
          TourRecap after changes constitutes acceptance of the modified terms.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-foreground">Contact</h2>
        <p className="mt-3 text-gray-600">
          If you have questions about these terms, please contact us at{' '}
          <a href="mailto:hello@tourrecap.com" className="text-primary hover:underline">
            hello@tourrecap.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
