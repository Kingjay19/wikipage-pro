"use client";
import Image from "next/image";
import SubHeading from "./sub-heading";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id="services" className="py-18 px-6">
      <div className="text-center my-6">
        <SubHeading subheader="Our Services" />
        <p className="py-2 leading-6 text-sm md:mx-32 lg:text-base lg:mx-56">
          Tailored solutions to elevate your brand, streamline operations, and drive measurable growth—backed by 9+ years of expertise.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.link}
            className="rounded-2xl bg-blue-50 p-4 text-center shadow-md transition-all duration-400 hover:scale-103 hover:shadow-lg"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.25 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={250}
                className="rounded-xl object-cover mb-4"
              />
              <h1 className="font-semibold py-2 text-xl">{service.title}</h1>
              <p className="py-1 text-gray-500 text-sm">
                {service.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;

const services = [
  {
    link: "/services/wikipedia",
    image: "/images/wikipedia.png",
    title: "Wikipedia Services",
    description:
      "Expertly crafted, compliant Wikipedia pages to establish your brand’s credibility and visibility with neutral, well-sourced content",
  },
  {
    link: "/",
    image: "/images/website-services.png",
    title: "Website Development",
    description:
      "Custom, responsive websites built for speed, SEO, and conversions—tailored to your business goals.",
  },
  {
    link: "/",
    image: "/images/website-revamp.png",
    title: "Website Revamp",
    description:
      "Modernize outdated sites with improved UX, fresh designs, and performance upgrades to boost engagement.",
  },
  {
    link: "/services/wordpress",
    image: "/images/wordpress.png",
    title: "Wordpress Service",
    description:
      "Secure, scalable WordPress solutions—from blogs to e-commerce—with easy content management.",
  },
  {
    link: "/",
    image: "/images/uiux-sample.png",
    title: "UI/UX Design",
    description:
      "Intuitive interfaces and seamless user journeys that increase retention and customer satisfaction.",
  },
  {
    link: "/services/google-business",
    image: "/images/business-listing.png",
    title: "Google Business Listing Expert",
    description:
      "Optimize your GMB profile to dominate local search results and attract more customers.",
  },
];
