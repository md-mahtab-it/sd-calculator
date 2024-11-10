import React from 'react';
import { Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Standard Deviation Calculator</title>
        <meta name="description" content="Privacy Policy for Standard Deviation Calculator. Learn how we protect your data and maintain your privacy while using our statistical analysis tool." />
        <link rel="canonical" href="https://standarddeviationcalculator.me/privacy" />
      </Helmet>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                Standard Deviation Calculator ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <div className="text-gray-600 space-y-4">
                <p>We collect information that you provide directly to us when using our calculator:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Numerical data entered for calculations</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Google Analytics</h2>
              <p className="text-gray-600">
                We use Google Analytics to understand how visitors use our site. This service collects data such as:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-2">
                <li>Pages visited and time spent</li>
                <li>Device and browser information</li>
                <li>Geographic location (country/region)</li>
                <li>Referral sources</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Google AdSense</h2>
              <p className="text-gray-600">
                We display advertisements through Google AdSense. This service uses cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-2">
                <li>Show personalized ads</li>
                <li>Measure ad performance</li>
                <li>Prevent ad fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Children's Privacy</h2>
              <p className="text-gray-600">
                Our service is not directed to children under 13. We do not knowingly collect personal information from children. If you are a parent/guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this Privacy Policy, please contact us at:{' '}
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