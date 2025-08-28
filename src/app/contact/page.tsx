"use client";
import { motion } from 'framer-motion';
import { Send } from 'iconsax-reactjs';
import Image from 'next/image';
import Head from 'next/head';

const ContactPage = () => {
  return (
    <>
    <Head>
        <title>Contact Us | Wiki Page Pro</title>
        <meta
          name="Contact Us"
          content="Contact Us for your Wiki and Digital services."
        />
        <link rel="canonical" href="https://wikipagepro.com" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
            Reach out to us either via Telegram or Whatsapp for quick responses, or email for detailed inquiries.
          </motion.p>
        </div>

        <section className="grid gap-6 md:grid-cols-2">
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
                    <Image src="/icons/telegram-icon.png" alt='telegram-icon' width={36} height={36} />
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
                    <Image src="/icons/email-icon.png" alt='email-icon' width={24} height={24} className='size-6' />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-sm text-gray-600">For detailed inquiries</p>
                    <p className="text-sm text-gray-600 mt-1">contact@wikipagepro.com</p>
                  </div>
                </div>

                {/* Whatsapp Card */}
                <div
                  onClick={() => window.open('https://wa.me/+2349155723537', '_blank')}
                  className="flex items-center p-4 mb-4 rounded-lg bg-green-50 border border-green-100 cursor-pointer hover:bg-green-100 transition-colors duration-200"
                >
                  <div className="bg-green-100 rounded-full mr-4">
                    <Image src="/icons/whatsapp-icon.png" alt='whatsapp-icon' width={36} height={36} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Whatsapp</h3>
                    <p className="text-sm text-gray-600">For quick questions and chat</p>
                    <p className="text-sm text-green-600 mt-1">Wiki Page Pro</p>
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
            {/* <ContactForm /> */}
            <form className="space-y-6" action="https://formsubmit.co/bb5f26ecf536538a1b8cdb3dd9cfed77" method="POST" encType="multipart/form-data">
            <input type="hidden" name="_subject" value="Contact Us - WikipagePro" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_autoresponse" value="Thank you for your request! We'll get back to you as soon as possible." />

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
                  <option value="wiki">Wiki Services</option>
                  <option value="wordpress">Wordpress Services</option>
                  <option value="google-business">Google Business Listing</option>
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

              <div>
                <label htmlFor="doc-img-upload" className="block text-sm text-gray-700 mb-1"> Or You Can Upload a Sample of what you want</label>
                <input
                  type="file"
                  id="doc-img-upload"
                  name="file"
                  multiple
                  accept=".doc, .docx, .pdf, image/jpeg, image/jpg, image/png"
                  className="w-full px-4 py-3 rounded-lg text-xs border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
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
        </section>
      </main>
    </>
  );
};

export default ContactPage;