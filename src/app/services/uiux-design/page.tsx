"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GetInTouch from '@/app/components/get-in-touch';
import { Nebulas } from 'iconsax-reactjs';
import SubHeading from '@/app/components/sub-heading';
import Head from 'next/head';

const UIDesignPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 0,
            title: "User Research",
            content: (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-purple-600 mb-4">User-Centered Research</h3>
                            <p className="text-gray-700 mb-6">
                                We uncover actionable insights about your users through comprehensive research methods,
                                ensuring designs solve real problems.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">✓</span>
                                    <span>User interviews and surveys</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">✓</span>
                                    <span>Persona development</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">✓</span>
                                    <span>Journey mapping</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-500 mr-2">✓</span>
                                    <span>Competitive analysis</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                            <h4 className="font-bold text-lg mb-3">Research Deliverables</h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">User Personas</span>
                                    <span className="text-purple-600 font-bold">3-5 Detailed Profiles</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Journey Maps</span>
                                    <span className="text-purple-600 font-bold">Key Touchpoints</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Pain Points</span>
                                    <span className="text-purple-600 font-bold">Prioritized List</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 mt-6">
                        <h4 className="font-bold text-lg mb-4">Our Research Process</h4>
                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                {
                                    title: "Discovery",
                                    desc: "Stakeholder alignment",
                                    icon: "🔍"
                                },
                                {
                                    title: "Planning",
                                    desc: "Methodology design",
                                    icon: "📋"
                                },
                                {
                                    title: "Execution",
                                    desc: "Data collection",
                                    icon: "📊"
                                },
                                {
                                    title: "Synthesis",
                                    desc: "Insight generation",
                                    icon: "🧠"
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
            title: "Interface Design",
            content: (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-pink-600 mb-4">Pixel-Perfect UI Design</h3>
                            <p className="text-gray-700 mb-6">
                                We create visually stunning interfaces that balance aesthetics with functionality,
                                following the latest design trends and best practices.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-pink-100 p-2 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Component Libraries</h4>
                                        <p className="text-sm text-gray-600">Reusable design systems for consistency</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-pink-100 p-2 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Visual Hierarchy</h4>
                                        <p className="text-sm text-gray-600">Strategic layout for optimal user flow</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
                            <h4 className="font-bold text-lg mb-3">UI Design Elements</h4>
                            <div className="grid gap-3 md:grid-cols-2">
                                {[
                                    "Color systems",
                                    "Typography",
                                    "Iconography",
                                    "Illustrations",
                                    "Animations",
                                    "Microinteractions",
                                    "Data visualization",
                                    "Accessibility"
                                ].map((element, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm lg:text-base">
                                        <Nebulas
                                            size="12"
                                            variant="Outline"
                                            className="fill-current text-blue-900 my-1"
                                        />
                                        <span>{element}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h4 className="font-bold text-lg mb-3">Design Tools We Use</h4>
                        <div className="grid md:grid-cols-4 gap-6 text-center">
                            <div className="p-4">
                                <div className="bg-pink-100 text-pink-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl">F</div>
                                <p className="font-medium">Figma</p>
                            </div>
                            <div className="p-4">
                                <div className="bg-pink-100 text-pink-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl">A</div>
                                <p className="font-medium">Adobe XD</p>
                            </div>
                            <div className="p-4">
                                <div className="bg-pink-100 text-pink-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl">S</div>
                                <p className="font-medium">Sketch</p>
                            </div>
                            <div className="p-4">
                                <div className="bg-pink-100 text-pink-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl">P</div>
                                <p className="font-medium">ProtoPie</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "Prototyping",
            content: (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-teal-600 mb-4">Interactive Prototyping</h3>
                            <p className="text-gray-700 mb-6">
                                We bring designs to life with high-fidelity prototypes that simulate the final product,
                                allowing for user testing and stakeholder feedback before development begins.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-teal-100 p-2 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">User Testing</h4>
                                        <p className="text-sm text-gray-600">Validate flows before development</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-teal-100 p-2 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Microinteractions</h4>
                                        <p className="text-sm text-gray-600">Realistic animations and transitions</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                            <h4 className="font-bold text-lg mb-3">Prototyping Benefits</h4>
                            <div className="grid lg:grid-cols-2 gap-4">
                                {[
                                    { name: "Cost Saving", benefit: "Find issues early" },
                                    { name: "User Feedback", benefit: "Gather insights" },
                                    { name: "Stakeholder Buy-in", benefit: "Visual demonstration" },
                                    { name: "Developer Handoff", benefit: "Clear specifications" },
                                    { name: "Usability Testing", benefit: "Validate concepts" },
                                    { name: "Iteration Speed", benefit: "Quick refinements" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center">
                                        <div className="bg-white p-2 rounded-lg mr-3 shadow-xs">
                                            <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-800 text-xs font-bold">
                                                {item.name[0]}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-medium">{item.name}</p>
                                            <p className="text-xs text-gray-500">{item.benefit}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h4 className="font-bold text-lg mb-3">Prototyping Fidelity Levels</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                "Low-fi (Wireframes)",
                                "Mid-fi (Basic interactions)",
                                "High-fi (Pixel-perfect)"
                            ].map((level, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Nebulas
                                        size="16"
                                        variant="Outline"
                                        className="fill-current text-blue-900 my-1"
                                    />
                                    <span>{level}</span>
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
                <title>UI/UX Design Services | Wiki Page Pro</title>
                <meta
                    name="UI/UX Design"
                    content="At Wikipage Pro, we create intuitive, beautiful digital experiences that users love and businesses benefit from."
                />
                <link rel="canonical" href="https://wikipagepro.com" />
            </Head>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <SubHeading subheader='UI/UX Design Services' />
                    <p className="text-base text-gray-600 max-w-3xl mx-auto">
                        We create intuitive, beautiful digital experiences that users love and businesses benefit from.
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

export default UIDesignPage;