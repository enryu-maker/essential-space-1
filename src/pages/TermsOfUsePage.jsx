import React, { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const TermsOfUsePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto font-[Akshar] text-gray-800">
        <h1 className="text-4xl md:text-5xl font-[AksharSemiBold] mb-8">Terms of Use</h1>
        <p className="text-gray-500 font-[AksharRegular] mb-12">
          Last updated:  9/12/2025
        </p>

        <div className="space-y-10">

          {/* 1. Agreement */}
          <section>
            <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">1. Agreement to Terms</h2>
            <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600">
              By downloading, accessing, or using the Essential Space application (“the App”), you agree to be
              bound by these Terms of Use. Please read them carefully before using the App. If you do not
              agree with any part of these terms, you may not use the App.
            </p>
          </section>

          {/* 2. Subscriptions */}
          <section>
            <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">2. Subscriptions & Payments</h2>
            <ul className="list-disc pl-6 space-y-2 font-[AksharRegular] text-gray-600 text-lg">
              <li>Essential Space offers a Premium subscription that provides access to additional features.</li>
              <li>Payment is charged to your Apple ID account at the time of purchase.</li>
              <li>The subscription automatically renews unless canceled at least 24 hours before the end of the billing period.</li>
              <li>Your Apple ID account will be charged for renewal within 24 hours prior to the end of the current period.</li>
              <li>You can manage and cancel your subscription through your App Store account settings.</li>
              <li>We do not store or access your payment information.</li>
              <li>The current subscription price is <strong>$0.199 USD</strong> and may change following Apple guidelines.</li>
            </ul>
          </section>

          {/* 3. User Data */}
          <section>
            <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">3. User Data & Security</h2>
            <ul className="list-disc font-[AksharRegular] pl-6 space-y-2 text-lg text-gray-600">
              <li>All notes, tasks, media, and recordings are encrypted and only you can access or decrypt them.</li>
              <li>Data is stored securely on our servers only to enable syncing across devices.</li>
              <li>We cannot view, decrypt, or access your content in any form.</li>
              <li>No user data is ever sold or shared with third parties.</li>
            </ul>
          </section>

          {/* 4. IP Rights */}
          <section>
            <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">4. Intellectual Property</h2>
            <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600 mb-4">
              All content, code, trademarks, and assets of Essential Space remain our exclusive property. You may not:
            </p>
            <ul className="list-disc font-[AksharRegular] pl-6 space-y-2 text-lg text-gray-600">
              <li>Copy, modify, or redistribute the App.</li>
              <li>Decompile or attempt to extract source code.</li>
              <li>Use any branding or trademarks without written permission.</li>
            </ul>
          </section>

          {/* 5. Acceptable Use */}
          <section>
            <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">5. Acceptable Use</h2>
            <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600 mb-4">
              You agree not to use the App for:
            </p>
            <ul className="list-disc font-[AksharRegular] pl-6 space-y-2 text-lg text-gray-600">
              <li>Illegal activities</li>
              <li>Uploading harmful or inappropriate content</li>
              <li>Attempting to compromise the integrity or security of the App</li>
            </ul>
            <p className="mt-4 text-lg font-[AksharRegular] text-gray-600">
              Violation of these terms may result in account restrictions or termination.
            </p>
          </section>

          {/* 6. Termination */}
          <section>
            <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">6. Termination</h2>
            <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600">
              We may suspend or terminate your access if you violate these terms or if required by law. Locally stored encrypted
              data will remain on your device unless manually removed.
            </p>
          </section>

          {/* 7. Updates */}
          <section>
            <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">7. Changes to This Agreement</h2>
            <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600">
              We may modify these Terms at any time. Continued use of the App after updates means you accept the revised Terms.
            </p>
          </section>

          {/* 8. Liability */}
          <section>
            <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">8. Limitation of Liability</h2>
            <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600">
              To the fullest extent allowed by law, Essential Space is not responsible for data loss, misuse, or indirect damages.
              Because your data is encrypted and only accessible by you, lost data may not be recoverable.
            </p>
          </section>

          {/* 9. Contact */}
          <section>
            <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">9. Contact Us</h2>
            <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600">
              If you have any questions about these terms, contact us at:
              <br />
              <a
                href="mailto:support@essentialspace.in"
                className="text-black font-medium text-lg animated-underline hover:text-gray-700 transition"
              >
                📧 support@essentialspace.in
              </a>
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfUsePage;
