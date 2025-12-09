import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { Footer } from '../components/Footer';
import { Zap, Brain, Shield } from 'lucide-react';

const Home = () => {
    return (
        <>
            {/* ---- 🔥 SEO & Meta ---- */}
            <Helmet>
                {/* Title */}
                <title>Essential Space – Notes, Voice Memos & Tasks | iOS Productivity App</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Essential Space is an iOS productivity app that helps you capture ideas, voice notes, tasks, images, and links in one simple and organized place. Built for students, creatives, and professionals."
                />

                {/* Keywords */}
                <meta
                    name="keywords"
                    content="notes app, productivity app, ios notes, student productivity, ai summarizer, second brain app, to-do list, voice memo app"
                />

                {/* Viewport & mobile readiness */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.essentialspace.in/" />

                {/* Apple App Store Smart Banner */}
                <meta name="apple-itunes-app" content="app-id=YOUR_APP_ID_HERE" />

                {/* Open Graph for preview cards */}
                <meta property="og:title" content="Essential Space — A Clearer Way to Think" />
                <meta
                    property="og:description"
                    content="A clean, distraction-free space for students and thinkers. Capture notes, voice summaries, images, links, and tasks — synced across your Apple devices."
                />
                <meta property="og:image" content="https://www.essentialspace.in/logo.jpg" />
                <meta property="og:url" content="https://www.essentialspace.in/" />
                <meta property="og:type" content="website" />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Essential Space — Your Mind, Organized" />
                <meta name="twitter:description" content="A clean and calming way to store thoughts, tasks, recordings, and images — built for iPhone & Mac." />
                <meta name="twitter:image" content="https://www.essentialspace.in/logo.jpg" />

                {/* Theme Color */}
                <meta name="theme-color" content="#f3f4f6" />

                <script type="application/ld+json">
                    {`
                    {
                    "@context": "https://schema.org",
                    "@type": "MobileApplication",
                    "name": "Essential Space",
                    "operatingSystem": "iOS",
                    "applicationCategory": "Productivity",
                    "description": "Essential Space is a minimal productivity workspace where you can store notes, tasks, voice memos, images, and links — synced across your Apple devices.",
                    "offers": {
                        "@type": "Offer",
                        "price": "YOUR_PRICE",
                        "priceCurrency": "USD"
                    },
                    "url": "https://www.essentialspace.in/",
                    "image": "https://www.essentialspace.in/logo.jpg"
                    }
                    `}
                </script>

            </Helmet>

            <main className="min-h-screen bg-[#FAFAFA] text-gray-900 selection:bg-gray-200 font-['Akshar']">
                <Navbar />

                <Hero />

                {/* Value Statement - EXPANDED */}
                <section className="py-24 px-6 bg-white border-b border-gray-100">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="text-3xl md:text-4xl font-[AksharMedium] text-gray-900 mb-6">One app.</h3>
                            <p className="text-xl md:text-2xl text-gray-500 font-[AksharLight] max-w-2xl mx-auto">
                                Designed for students today, meaningful for everyone tomorrow.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
                            <div className="flex flex-col items-center text-center gap-4 group">
                                <div className="w-16 h-16 bg-gray-50 rounded-[1.5rem] flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-7 h-7 text-gray-900" strokeWidth={1.5} />
                                </div>
                                <h4 className="font-[AksharSemiBold] text-xl">Instant Capture</h4>
                                <p className="text-gray-500 text-base font-[AksharRegular] leading-relaxed max-w-xs">
                                    Open and write. No folders to navigate, no loading screens to wait for. Capture at the speed of thought.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center gap-4 group">
                                <div className="w-16 h-16 bg-gray-50 rounded-[1.5rem] flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                    <Brain className="w-7 h-7 text-gray-900" strokeWidth={1.5} />
                                </div>
                                <h4 className="font-[AksharSemiBold] text-xl">Second Brain</h4>
                                <p className="text-gray-500 text-base font-[AksharRegular] leading-relaxed max-w-xs">
                                    Offload your mental loop. Store ideas, tasks, and media in one searchable, calm place.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center gap-4 group">
                                <div className="w-16 h-16 bg-gray-50 rounded-[1.5rem] flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="w-7 h-7 text-gray-900" strokeWidth={1.5} />
                                </div>
                                <h4 className="font-[AksharSemiBold] text-xl">Private by Default</h4>
                                <p className="text-gray-500 text-base font-[AksharRegular] leading-relaxed max-w-xs">
                                    Your thoughts are yours. Keeps your data secure & encrypted.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Features />

                {/* NEW SECTION: Bridge Content */}
                <section className="py-24 bg-[#FAFAFA]">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="bg-black rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                            {/* Abstract decorative elements */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black"></div>
                            <div className="absolute -top-32 -left-32 w-80 h-80 bg-gray-800 rounded-full blur-[100px] opacity-40"></div>
                            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gray-800 rounded-full blur-[100px] opacity-40"></div>

                            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                                <h2 className="text-3xl md:text-5xl font-[AksharSemiBold] text-white mb-8 tracking-tight leading-tight">
                                    "The only productivity tool that actually creates time."
                                </h2>
                                <div className="h-1 w-20 bg-white/20 rounded-full mb-8"></div>
                                <p className="text-gray-400 text-lg md:text-xl font-[AksharLight]">
                                    Join thousands of clear thinkers who have swapped chaos for Essential Space.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-6xl font-[SweetApricot] text-gray-900 mb-8 transform -rotate-2">
                            Why it matters
                        </h2>
                        <p className="text-xl md:text-2xl font-[AksharRegular] text-gray-600 leading-relaxed mb-16 max-w-2xl mx-auto">
                            Essential Space helps you create mental clarity. <br className="hidden md:block" />
                            Because everything you need is finally in one place.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
                            {[
                                "Reduce digital overwhelm",
                                "Capture ideas before they disappear",
                                "Focus more on thinking, less on organizing",
                                "Built to feel invisible"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-gray-200 transition-colors">
                                    <div className="w-2 h-2 bg-black rounded-full shrink-0"></div>
                                    <span className="text-gray-800 font-[AksharMedium] text-lg">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Pricing />

                <Footer />
            </main>

        </>
    );
}

export default Home