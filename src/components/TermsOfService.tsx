import React from 'react';
import { FileText } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Standard Deviation Calculator</title>
        <meta name="description" content="Terms of Service for Standard Deviation Calculator. Read our terms and conditions for using our statistical analysis tool." />
        <link rel="canonical" href="https://standarddeviationcalculator.me/terms" />
      </Helmet>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using Standard Deviation Calculator, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Service</h2>
              <div className="text-gray-600 space-y-4">
                <p>You agree to use our service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the service in any way that violates applicable laws</li>
                  <li>Attempt to interfere with the proper functioning of the service</li>
                  <li>Use automated means to access or interact with the service</li>
                  <li>Attempt to reverse engineer any portion of the service</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-600">
                The service, including its original content, features, and functionality, is owned by Standard Deviation Calculator and is protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Disclaimer of Warranties</h2>
              <p className="text-gray-600">
                The service is provided "as is" and "as available" without warranties of any kind. We do not guarantee the accuracy of calculations or the availability of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600">
                We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h2>
              <p className="text-gray-600">
                For any questions about these Terms of Service, please contact us at:{' '}
                <a href="mailto:contact@standarddeviationcalculator.me" className="text-blue-600 hover:underline">
                  contact@standarddeviationcalculator.me
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}