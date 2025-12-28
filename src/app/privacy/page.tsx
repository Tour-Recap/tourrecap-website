import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'TourRecap privacy policy - how we handle your data.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
      <p className="mt-4 text-sm text-gray-500">Last updated: December 2024</p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
        <p className="mt-3 text-gray-600">
          When you use TourRecap, we may collect the following information:
        </p>
        <ul className="mt-3 list-inside list-disc space-y-2 text-gray-600">
          <li>
            <strong>Contact form submissions:</strong> Name, email address, company name, and
            message content when you request a pilot or contact us.
          </li>
          <li>
            <strong>Server logs:</strong> Basic technical information such as IP addresses and
            browser type for security and operational purposes.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-foreground">How We Use Your Information</h2>
        <p className="mt-3 text-gray-600">We use collected information to:</p>
        <ul className="mt-3 list-inside list-disc space-y-2 text-gray-600">
          <li>Respond to your inquiries and pilot requests</li>
          <li>Provide and improve our services</li>
          <li>Maintain the security and operation of our platform</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-foreground">What We Do Not Do</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-gray-600">
          <li>We do not sell your personal information to third parties.</li>
          <li>We do not share your data with third parties for their marketing purposes.</li>
          <li>
            We do not use your data for purposes other than operating and improving TourRecap.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-foreground">Data Retention</h2>
        <p className="mt-3 text-gray-600">
          We retain your information as needed for business operations and to fulfill the purposes
          described in this policy. Server logs are retained for operational and security purposes.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-foreground">Contact</h2>
        <p className="mt-3 text-gray-600">
          If you have questions about this privacy policy or your data, please contact us at{' '}
          <a href="mailto:hello@tourrecap.com" className="text-primary hover:underline">
            hello@tourrecap.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
