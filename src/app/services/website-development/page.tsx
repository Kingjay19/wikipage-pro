"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SubHeading from '@/app/components/sub-heading';
import GetInTouch from '@/app/components/get-in-touch';
import { Nebulas } from 'iconsax-reactjs';

const WebsiteDevelopment = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 0,
            title: "Custom Websites",
            content: (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-blue-700 mb-4">Tailored Web Solutions</h3>
                            <p className="text-gray-700 mb-6">
                                We design and develop completely custom websites tailored to your specific business needs.
                                No templates, no limitations - just a perfect digital representation of your brand.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">✓</span>
                                    <span>100% custom design reflecting your brand identity</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">✓</span>
                                    <span>Mobile-first responsive development</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">✓</span>
                                    <span>SEO-optimized architecture</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">✓</span>
                                    <span>CMS integration for easy content updates</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                            <h4 className="font-bold text-lg mb-3">Why Choose us for your Websites?</h4>
                            <div className="space-y-4">
                                <div>
                                    <h5 className="font-medium mb-1">Unique Brand Experience</h5>
                                    <p className="text-sm text-gray-600">Stand out from competitors with a website designed specifically for your business</p>
                                </div>
                                <div>
                                    <h5 className="font-medium mb-1">Future-Proof Architecture</h5>
                                    <p className="text-sm text-gray-600">Built to scale with your business growth and evolving needs</p>
                                </div>
                                <div>
                                    <h5 className="font-medium mb-1">Performance Optimized</h5>
                                    <p className="text-sm text-gray-600">Lightning-fast load times for better user experience and SEO</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 mt-6">
                        <h4 className="font-bold text-lg mb-4">Our Development Process</h4>
                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                {
                                    title: "Discovery",
                                    desc: "Requirement analysis & planning",
                                    icon: "🔍"
                                },
                                {
                                    title: "Design",
                                    desc: "Wireframes & mockups",
                                    icon: "🎨"
                                },
                                {
                                    title: "Development",
                                    desc: "Coding & testing",
                                    icon: "💻"
                                },
                                {
                                    title: "Launch",
                                    desc: "Deployment & training",
                                    icon: "🚀"
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
            title: "E-Commerce",
            content: (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-green-700 mb-4">E-Commerce Solutions</h3>
                            <p className="text-gray-700 mb-6">
                                We build online stores that convert visitors into customers with seamless shopping experiences
                                and secure payment processing.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Platform Expertise</h4>
                                        <p className="text-sm text-gray-600">Shopify, WooCommerce, Magento, and custom solutions</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Conversion Optimization</h4>
                                        <p className="text-sm text-gray-600">Increase sales with proven UX strategies</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                            <h4 className="font-bold text-lg mb-3">Key Features</h4>
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    "Product configurators",
                                    "Subscription models",
                                    "Multi-currency support",
                                    "Inventory management",
                                    "AR product previews",
                                    "1-click checkout",
                                    "Payment gateways",
                                    "Shipping integration"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Nebulas
                                            size="12"
                                            variant="Outline"
                                            className="fill-current text-blue-900 my-1"
                                        />
                                        <span className='text-sm lg:text-base'>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h4 className="font-bold text-lg mb-3">E-Commerce Metrics</h4>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="p-4">
                                <p className="text-3xl font-bold text-green-600">3-5×</p>
                                <p className="text-sm text-gray-600">Typical conversion rate improvement</p>
                            </div>
                            <div className="p-4">
                                <p className="text-3xl font-bold text-green-600">2s</p>
                                <p className="text-sm text-gray-600">Average page load time</p>
                            </div>
                            <div className="p-4">
                                <p className="text-3xl font-bold text-green-600">99.9%</p>
                                <p className="text-sm text-gray-600">Uptime guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "Web Applications",
            content: (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-purple-700 mb-4">Custom Web Applications</h3>
                            <p className="text-gray-700 mb-6">
                                We develop powerful, scalable web applications with complex functionality
                                tailored to your unique business processes.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-2 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Full-Stack Development</h4>
                                        <p className="text-sm text-gray-600">End-to-end solutions from UI to database</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-2 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Progressive Web Apps</h4>
                                        <p className="text-sm text-gray-600">App-like experiences with offline capability</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                            <h4 className="font-bold text-lg mb-3">Key Advantages</h4>
                            <div className="space-y-4">
                                {[
                                    "Real-time data processing",
                                    "Role-based access control",
                                    "Automated workflows",
                                    "Third-party integrations",
                                    "Advanced analytics",
                                    "Cloud deployment"
                                ].map((advantage, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Nebulas
                                            size="12"
                                            variant="Outline"
                                            className="fill-current text-purple-900 my-1"
                                        />
                                        <span className='text-sm lg:text-base'>{advantage}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h4 className="font-bold text-lg mb-3">Application Types We Build</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                "CRM Systems",
                                "Inventory Management",
                                "SaaS Platforms",
                                "Data Dashboards",
                                "Collaboration Tools",
                                "Custom APIs"
                            ].map((type, i) => (
                                <div key={i} className="flex items-start p-3 gap-3 bg-gray-50 rounded-lg text-sm lg:text-base">
                                    <Nebulas
                                        size="12"
                                        variant="Outline"
                                        className="fill-current text-blue-900 my-1"
                                    />
                                    <span>{type}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: "API & Integration",
            content: (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-orange-700 mb-4">API Development & Integration</h3>
                            <p className="text-gray-700 mb-6">
                                We create robust APIs and seamlessly integrate your systems with third-party services,
                                enabling data flow and functionality across platforms.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">✓</span>
                                    <span>Custom RESTful and GraphQL API development</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">✓</span>
                                    <span>Secure authentication and authorization</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">✓</span>
                                    <span>Third-party service integration (payment, CRM, etc.)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-orange-500 mr-2">✓</span>
                                    <span>Webhook implementation for real-time updates</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                            <h4 className="font-bold text-lg mb-3">Integration Capabilities</h4>
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    "Payment processors (Stripe, PayPal)",
                                    "CRM systems (Salesforce, HubSpot)",
                                    "Marketing platforms (Mailchimp, SendGrid)",
                                    "Social media APIs",
                                    "Cloud storage (AWS, Google Cloud)",
                                    "ERP systems",
                                    "Shipping carriers",
                                    "Analytics tools"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Nebulas
                                            size="12"
                                            variant="Outline"
                                            className="fill-current text-orange-900 my-1"
                                        />
                                        <span className='text-sm lg:text-base'>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h4 className="font-bold text-lg mb-3">API Features</h4>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="p-4">
                                <p className="text-3xl font-bold text-orange-600">100%</p>
                                <p className="text-sm text-gray-600">Documentation coverage</p>
                            </div>
                            <div className="p-4">
                                <p className="text-3xl font-bold text-orange-600">OAuth2.0</p>
                                <p className="text-sm text-gray-600">Secure authentication</p>
                            </div>
                            <div className="p-4">
                                <p className="text-3xl font-bold text-orange-600">99.99%</p>
                                <p className="text-sm text-gray-600">API uptime SLA</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: "Mobile App Development",
            content: (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Cross-Platform Mobile Solutions</h3>
                            <p className="text-gray-700 mb-6">
                                We build high-performance mobile applications that deliver seamless experiences
                                across iOS and Android platforms with a single codebase.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Native Performance</h4>
                                        <p className="text-sm text-gray-600">Near-native performance with optimized components</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Offline Functionality</h4>
                                        <p className="text-sm text-gray-600">Work without internet connection with data sync</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                            <h4 className="font-bold text-lg mb-3">Mobile App Features</h4>
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    "Push notifications",
                                    "Biometric authentication",
                                    "Camera integration",
                                    "Location services",
                                    "In-app purchases",
                                    "Social media login",
                                    "Dark mode support",
                                    "Accessibility features"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Nebulas
                                            size="12"
                                            variant="Outline"
                                            className="fill-current text-indigo-900 my-1"
                                        />
                                        <span className='text-sm lg:text-base'>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h4 className="font-bold text-lg mb-3">Development Approach</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                "Cross-platform development",
                                "App store optimization",
                                "Beta testing programs",
                                "Continuous deployment",
                                "Performance monitoring",
                                "User analytics"
                            ].map((type, i) => (
                                <div key={i} className="flex items-start p-3 gap-3 bg-gray-50 rounded-lg text-sm lg:text-base">
                                    <Nebulas
                                        size="12"
                                        variant="Outline"
                                        className="fill-current text-blue-900 my-1"
                                    />
                                    <span>{type}</span>
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <SubHeading subheader='Website Development Services' />
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        We build high-performance websites that drive business growth, with an emphasis on speed, usability, and conversions.
                    </p>
                </div>

                {/* Service Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`m-1 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${activeTab === tab.id
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[500px]">
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
                </div>


                <div className="mt-16">
                    <GetInTouch />
                </div>
            </div>
        </>
    );
};

export default WebsiteDevelopment;