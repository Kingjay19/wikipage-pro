"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SubHeading from "./sub-heading";

const Testimonials = () => {
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [autoplayKey, setAutoplayKey] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const handleDragEnd = () => {
    setIsDragging(false);
    setAutoplayKey((prev) => prev + 1);
  };

  return (
    <div
      className="bg-blue-50 m-6 rounded-4xl py-8 px-6 md:py-12 lg:py-16"
      onClick={() => {
        if (!isDragging) {
          setAutoplayKey((prev) => prev + 1);
        }
      }}
    >
      <div className="text-center my-6">
        <SubHeading subheader="What our Clients say?" />
        <p className="py-2 text-center leading-6 text-sm lg:text-base">
          Our track record speaks for itself. <br />This is what our previous
          customers have said.
        </p>
      </div>

      {/* Carousel */}
      <motion.div
        ref={carousel}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <motion.div
          key={autoplayKey}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-4"
          animate={isDragging ? undefined : { x: [0, -width] }}
          transition={
            isDragging
              ? undefined
              : { ease: "linear", duration: 30, repeat: Infinity }
          }
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
        >
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 my-1 p-6 bg-white rounded-md shadow-lg md:pt-8"
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-gray-600 mb-6 leading-6 font-bold text-3xl">
                "
                <span className="font-medium italic text-sm">
                  {testimonial.text}"
                </span>
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="size-12"
                />
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-sm italic text-gray-500">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;


const testimonials = [
  {
    text: "Their team built our e-commerce site from scratch, and within 3 months, our sales increased by 150%. The site is fast, SEO-optimized, and incredibly user-friendly. Highly recommend!",
    name: "Sarah Kings",
    title: "Founder of Boutique Fashion Co",
    avatar: "./avatars/avatar-1.jpg",
  },
  {
    text: "Getting our company page approved on Wikipedia seemed impossible until we worked with them. They handled the strict notability guidelines flawlessly, and the page has significantly boosted our credibility.",
    name: "James Langley",
    title: " CEO of Tech Innovations Ltd.",
    avatar: "./avatars/avatar-2.jpg",
  },
  {
    text: "Our old site looked straight out of 2010. After the revamp, bounce rates dropped by 70%, and customer inquiries skyrocketed. The modern design and mobile responsiveness were game-changers!",
    name: "Priya Maryann",
    title: "Marketing Director at GreenLife Organics",
    avatar: "./avatars/avatar-3.jpg",
  },
  {
    text: "As a blogger, I needed a hassle-free WordPress site. They set up custom plugins, automated backups, and security features—all while keeping it easy for me to manage. Zero downtime in 2 years!.",
    name: "David Richard",
    title: "Travel Blogger at Wanderlust Diaries",
    avatar: "./avatars/avatar-4.jpg",
  },
  {
    text: "The new app interface they designed reduced user onboarding time from 10 minutes to 2. The intuitive flows and sleek visuals earned us a 4.9-star App Store rating!",
    name: "Elena Thompson",
    title: "Product Lead at Jeriv FinTech Solutions",
    avatar: "./avatars/avatar-5.jpg",
  },

  {
    text: "Our GMB profile was a mess, we had inconsistent hours, poor photos etc. They optimized it, and we now rank #1 for ‘HVAC services in Johannesburg’ with 30+ new calls weekly.",
    name: "Ann Angel",
    title: "Owner of ComfortZone Heating",
    avatar: "./avatars/avatar-6.jpg",
  },
];
