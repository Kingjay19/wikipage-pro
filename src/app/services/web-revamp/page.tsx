"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GetInTouch from '@/app/components/get-in-touch';
import SubHeading from '@/app/components/sub-heading';
import { Nebulas } from 'iconsax-reactjs';
import Head from 'next/head';

const WebsiteRevamp = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 0,
            title: "Modernization",
            content: (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-orange-600 mb-4">Website Modernization</h3>
                            <p className="text-gray-700 mb-6">
                                Transform your outdated website into a modern, high-performing digital asset with
                                contemporary design and cutting-edge technology.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">✓</span>
                                    <span>Responsive design for all devices</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">✓</span>
                                    <span>Visual redesign with current trends</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">✓</span>
                                    <span>Improved information architecture</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">✓</span>
                                    <span>Preservation of existing SEO value</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                            <h4 className="font-bold text-lg mb-3">Before & After</h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Load Time</span>
                                    <span className="text-orange-600 font-bold">4s → 0.8s</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Mobile Traffic</span>
                                    <span className="text-orange-600 font-bold">+220%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Bounce Rate</span>
                                    <span className="text-orange-600 font-bold">72% → 38%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 mt-6">
                        <h4 className="font-bold text-lg mb-4">Our Revamp Process</h4>
                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                {
                                    title: "Audit",
                                    desc: "Comprehensive website evaluation",
                                    icon: "📊"
                                },
                                {
                                    title: "Strategy",
                                    desc: "Improvement roadmap",
                                    icon: "🗺️"
                                },
                                {
                                    title: "Redesign",
                                    desc: "UI/UX modernization",
                                    icon: "🎨"
                                },
                                {
                                    title: "Migration",
                                    desc: "Seamless content transfer",
                                    icon: "🚚"
                                }
                            ].map((step, i) => (
                                <div key={i} className="bg-white p-4 rounded-lg shadow-xs text-center">
                                    <div className="text-2xl mb-2">{step.icon}</div>
                                    <h5 className="font-medium">{step.title}</h5>
                                    <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 1,
            title: "Performance",
            content: (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">Performance Optimization</h3>
                            <p className="text-gray-700 mb-6">
                                We identify and fix performance bottlenecks to dramatically improve your website's speed
                                and user experience.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Speed Optimization</h4>
                                        <p className="text-sm text-gray-600">90+ Google PageSpeed score guaranteed</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Technical SEO</h4>
                                        <p className="text-sm text-gray-600">Fix crawl errors and improve indexing</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                            <h4 className="font-bold text-lg mb-3">Optimization Areas</h4>
                            <div className="grid gap-3 md:grid-cols-2">
                                {[
                                    "Image compression",
                                    "Code minification",
                                    "Lazy loading",
                                    "Caching strategy",
                                    "CDN implementation",
                                    "Database optimization",
                                    "Critical CSS",
                                    "Render-blocking fixes"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start text-sm lg:text-base">
                                        <Nebulas
                                            size="12"
                                            variant="Outline"
                                            className="fill-current text-blue-900 my-1 mr-2"
                                        />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h4 className="font-bold text-lg mb-3">Performance Impact</h4>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="p-4">
                                <p className="text-3xl font-bold text-blue-600">3×</p>
                                <p className="text-sm text-gray-600">Faster page loads</p>
                            </div>
                            <div className="p-4">
                                <p className="text-3xl font-bold text-blue-600">40%</p>
                                <p className="text-sm text-gray-600">Lower bounce rate</p>
                            </div>
                            <div className="p-4">
                                <p className="text-3xl font-bold text-blue-600">2.5×</p>
                                <p className="text-sm text-gray-600">More conversions</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "Redesign",
            content: (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-purple-600 mb-4">Visual Redesign</h3>
                            <p className="text-gray-700 mb-6">
                                Give your website a fresh, modern look while maintaining brand identity and improving
                                user experience.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-2 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">UI/UX Overhaul</h4>
                                        <p className="text-sm text-gray-600">Modern interfaces with intuitive navigation</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-2 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Component Library</h4>
                                        <p className="text-sm text-gray-600">Reusable design system for consistency</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                            <h4 className="font-bold text-lg mb-3">Redesign Features</h4>
                            <div className="grid gap-4 lg:grid-cols-2">
                                {[
                                    { name: "Mobile-First", benefit: "Better mobile experience" },
                                    { name: "Microinteractions", benefit: "Enhanced engagement" },
                                    { name: "Dark Mode", benefit: "Reduced eye strain" },
                                    { name: "Accessibility", benefit: "WCAG compliance" },
                                    { name: "Typography", benefit: "Improved readability" },
                                    { name: "Color Scheme", benefit: "Brand alignment" }
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center">
                                        <div className="bg-white p-2 rounded-lg mr-3 shadow-xs">
                                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 text-xs font-bold">
                                                {feature.name[0]}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium lg:text-base">{feature.name}</p>
                                            <p className="text-xs text-gray-500">{feature.benefit}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h4 className="font-bold text-lg mb-3">Redesign Impact</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                "Increased time-on-site",
                                "Higher conversion rates",
                                "Improved brand perception",
                                "Better accessibility scores",
                                "Reduced support queries",
                                "Enhanced social sharing"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center p-3 gap-3 bg-gray-50 rounded-lg text-sm lg:text-base">
                                    <Nebulas
                                        size="12"
                                        variant="Outline"
                                        className="fill-current text-blue-900 my-1"
                                    />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <>
            <Head>
                <title>Website Revamp Services | Wiki Page Pro</title>
                <meta
                    name="Website Revamp"
                    content="At Wikipage Pro, we breathe new life into your outdated website with improved design, performance, and functionality."
                />
                <link rel="canonical" href="https://wikipagepro.com" />
            </Head>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <SubHeading subheader='Website Revamping Services' />
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Breathe new life into your outdated website with improved design, performance, and functionality.
                    </p>
                </section>

                {/* Service Tabs */}
                <section className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`m-1 px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 ${activeTab === tab.id
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </section>

                {/* Content Area */}
                <section className="min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8"
                        >
                            {tabs.find(tab => tab.id === activeTab)?.content}
                        </motion.div>
                    </AnimatePresence>
                </section>

                <section className="mt-16">
                    <GetInTouch />
                </section>
            </main>
        </>
    );
};

export default WebsiteRevamp;