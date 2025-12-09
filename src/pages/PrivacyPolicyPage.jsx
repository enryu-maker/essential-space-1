import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const PrivacyPolicyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto font-[Akshar] text-gray-800">
                <h1 className="text-4xl md:text-5xl font-[AksharSemiBold] mb-8">Privacy Policy</h1>
                <p className="text-gray-500 font-[AksharRegular] mb-12">Last updated:  9/12/2025</p>

                <div className="space-y-10">

                    {/* 1. Introduction */}
                    <section>
                        <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">1. Introduction</h2>
                        <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600">
                            Essential Space (“we”, “our”, or “us”) is committed to protecting your privacy.
                            This Privacy Policy explains how your personal information is collected, stored, used,
                            and protected when you use Essential Space.
                        </p>
                    </section>

                    {/* 2. Data Privacy & Storage */}
                    <section>
                        <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">2. Data Privacy & Storage</h2>
                        <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600 mb-4">
                            Essential Space is designed with <strong className="text-gray-900">privacy</strong> at its core. We believe your thoughts belong to you.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 font-[AksharRegular] text-gray-600 text-lg">
                            <li>Your notes, tasks, images, and voice recordings are stored securely on our servers, but all data is encrypted end-to-end, meaning only you have access to your content.</li>
                            <li>We cannot view, read, or decrypt your data at any time.</li>
                            <li>There is no traditional cloud syncing. However, if you log in with the same Essential Space account on multiple devices (including macOS), your encrypted data will sync securely across devices.</li>
                            <li>Encryption keys are tied to your account credentials and never shared with us.</li>
                        </ul>
                    </section>

                    {/* 3. Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">3. Information We Collect</h2>
                        <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600 mb-4">
                            We are committed to collecting the absolute minimum data necessary to run the app effectively.
                        </p>

                        <h3 className="font-[AksharSemiBold] text-xl mb-2 text-gray-800">We DO Collect:</h3>
                        <ul className="list-disc font-[AksharRegular] pl-6 space-y-2 text-lg text-gray-600">
                            <li>Anonymous usage information to help improve app performance and stability.</li>
                            <li>Encrypted note metadata required for syncing (never readable content).</li>
                        </ul>

                        <h3 className="font-[AksharSemiBold] text-xl mt-6 mb-2 text-gray-800">We DO NOT Collect:</h3>
                        <ul className="list-disc font-[AksharRegular] pl-6 space-y-2 text-lg text-gray-600">
                            <li>The readable content of your notes, tasks, media, or voice recordings.</li>
                            <li>Personal identifiers such as your name, email, or contact info (other than what is required for login).</li>
                            <li>Precise location information.</li>
                            <li>Any data for advertising or sale to external parties.</li>
                        </ul>

                        <h3 className="font-[AksharSemiBold] text-xl mt-6 mb-2 text-gray-800">We NEVER:</h3>
                        <ul className="list-disc font-[AksharRegular] pl-6 space-y-2 text-lg text-gray-600">
                            <li>Sell or share user data with third-party companies.</li>
                            <li>Use your personal data for marketing outside Essential Space.</li>
                        </ul>
                    </section>

                    {/* 4. Subscription Information */}
                    <section>
                        <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">4. Subscription Information</h2>
                        <ul className="list-disc font-[AksharRegular] pl-6 space-y-2 text-lg text-gray-600">
                            <li>All subscriptions are processed securely by the Apple App Store.</li>
                            <li>We do not store, process, or have access to your payment information.</li>
                            <li>The current subscription price is $0.199 USD and may change as needed in the future.
                                Any changes will follow App Store guidelines and be communicated appropriately.</li>
                        </ul>
                    </section>

                    {/* 5. Your Rights & Control */}
                    <section>
                        <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">5. Your Rights & Control</h2>
                        <ul className="list-disc font-[AksharRegular] pl-6 space-y-2 text-lg text-gray-600">
                            <li>You can export or delete your notes at any time.</li>
                            <li>Deleting your account permanently removes all encrypted data from our servers.</li>
                            <li>Because of end-to-end encryption, once deleted, data cannot be recovered.</li>
                        </ul>
                    </section>

                    {/* 6. Contact */}
                    <section>
                        <h2 className="text-2xl font-[AksharSemiBold] mb-4 text-gray-900">6. Contact Us</h2>
                        <p className="leading-relaxed font-[AksharRegular] text-lg text-gray-600">
                            If you have any questions or concerns about this Privacy Policy, you can reach us at: <br />
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
    )
}

export default PrivacyPolicyPage;
