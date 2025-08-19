"use client";
import { motion } from 'framer-motion';
import { Send } from 'iconsax-reactjs';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Let's Talk About Your Project
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-gray-600 max-w-3xl mx-auto md:text-lg"
          >
            Reach out to us via Telegram for quick responses or email for detailed inquiries.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Options</h2>
              <div className='grid gap-4'>
                {/* Telegram Card */}
                <div
                  onClick={() => window.open('https://t.me/wikipagepro', '_blank')}
                  className="flex items-center p-4 mb-4 rounded-lg bg-blue-50 border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors duration-200"
                >
                  <div className="bg-blue-100 rounded-full mr-4">
                    <Image src="/icons/telegram-icon.png" alt='image-icon' width={36} height={36} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Telegram</h3>
                    <p className="text-sm text-gray-600">For quick questions and chat</p>
                    <p className="text-sm text-blue-600 mt-1">@wikipagepro</p>
                  </div>
                </div>

                {/* Email Card */}
                <div
                  onClick={() => window.location.href = 'mailto:contact@wikipagepro.com'}
                  className="flex items-center p-4 mb-4 rounded-lg bg-red-50 border border-red-100 cursor-pointer hover:bg-red-100 transition-colors duration-200"
                >
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <Image src="/icons/email-icon.png" alt='image-icon' width={24} height={24} className='size-6' />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-sm text-gray-600">For detailed inquiries</p>
                    <p className="text-sm text-gray-600 mt-1">contact@wikipagepro.com</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6" action="https://formsubmit.co/contact@wikipagepro.com" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="web-dev">Website Development</option>
                  <option value="web-revamp">Website Revamping</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="wikipedia">Wikipedia Services</option>
                  <option value="wikipedia">Wordpress Services</option>
                  <option value="wikipedia">Google Business Listing</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full text-sm px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" variant="Bold" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;