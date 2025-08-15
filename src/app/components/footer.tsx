"use client";
import { Nebulas } from "iconsax-reactjs";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="mt-12 bg-blue-800 text-white px-6 py-18 text-sm md:px-24">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.25 }}
      >
        <div className="grid gap-6 grid-cols-4 md:gap-4">
          <div className="col-span-4 leading-7 md:col-span-2">
            <p className="font-bold text-lg md:text-xl">WikiPage Pro</p>
            <p className="text-sm">
              Crafting Digital Excellence Tailored Just For You
            </p>
            <div className="my-5 mr-6">
              <p className="font-semibold text-sm py-1">
                Stay Ahead with WikipagePro
              </p>
              <p className="text-sm leading-6">
                Get the latest insights, exclusive offers and business growth
                tips delivered straight to your inbox
              </p>

              {/****************** Subscription Form ******************/}
              <form className="text-sm my-4">
                <input
                  type="email"
                  placeholder="enter your email address"
                  className="border w-2/4 boorder-white p-4 rounded-l-md outline-0"
                  required
                />
                <button
                  type="submit"
                  className="bg-white font-semibold border border-white text-blue-900 p-4 rounded-r-md cursor-pointer hover:bg-gray-200"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

          {/****************** Pages ******************/}
          <div className="col-span-2 md:col-span-1">
            <div className="grid">
              <p className="text-sm font-semibold md:text-base">Pages</p>
              <Link href="/#services" className="py-1 hover:underline">
                Our Works
              </Link>
              <Link href="/about-us" className="py-1 hover:underline">
                About Us
              </Link>
              <Link href="/#faqs" className="py-1 hover:underline">
                FAQs
              </Link>
              <Link href="/#achievements" className="py-1 hover:underline">
                Why Choose Us
              </Link>
            </div>
          </div>

          {/****************** Services ******************/}
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-semibold md:text-base">Our Services</p>
            <Link
              href="/services/wikipedia"
              className="py-1 flex items-center gap-2 hover:underline"
            >
              <Nebulas size="12" variant="Outline" className="fill-current" />
              Wikipedia Services
            </Link>
            <Link
              href="/services/website-development"
              className="py-1 flex items-center gap-2 hover:underline"
            >
              <Nebulas size="12" variant="Outline" className="fill-current" />
              Website Development
            </Link>
            <Link
              href="/services/web-revamp"
              className="py-1 flex items-center gap-2 hover:underline"
            >
              <Nebulas size="12" variant="Outline" className="fill-current" />
              Website Revamp
            </Link>
            <Link
              href="/services/wordpress"
              className="py-1 flex items-center gap-2 hover:underline"
            >
              <Nebulas size="12" variant="Outline" className="fill-current" />
              Wordpress Service
            </Link>
            <Link
              href="/services/uiux-design"
              className="py-1 flex items-center gap-2 hover:underline"
            >
              <Nebulas size="12" variant="Outline" className="fill-current" />
              UI/UX Design
            </Link>
            <Link
              href="/services/google-business"
              className="py-1 flex items-center gap-2 hover:underline"
            >
              <Nebulas size="12" variant="Outline" className="fill-current" />
              Google Business Listing
            </Link>
          </div>
        </div>
      </motion.div>
      <p className="text-center mt-6 md:mt-10">
        © 2025 WikiPage Pro All rights reserved
      </p>
    </div>
  );
}
