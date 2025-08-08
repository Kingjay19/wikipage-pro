"use client";
import { Add, ArrowRight3 } from "iconsax-reactjs";
import SubHeading from "./sub-heading";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FAQs = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="my-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.25 }}
      >
        <SubHeading subheader="Frequently Asked Questions" />
        <p className="py-2 text-xs text-center leading-6 md:text-sm lg:text-base">
          We Get It—Curiosity Leads to Success! Got questions? <br></br>That's a
          great sign. Here are some
        </p>
        <div className="my-6 mx-6 md:mx-24 lg:mx-40">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.0 }}
          >
            {questions.map((faqQuestion, index) => (
              <div
                key={index}
                className="my-3 rounded-2xl bg-blue-50 p-4 shadow-md transition-all duration-400 hover:scale-103 hover:shadow-lg md:mx-12"
              >
                <div
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between gap-2"
                >
                  <p className="font-semibold py-2 text-sm md:text-md">
                    {faqQuestion.question}
                  </p>
                  <Add
                    size={20}
                    variant="Outline"
                    className={`fill-current transition-transform duration-300 cursor-pointer ${
                      openFaqIndex === index ? "rotate-45" : ""
                    }`}
                  />
                </div>
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 1.0 }}
                  >
                    <p className="my-2 py-4 text-gray-500 text-xs leading-6 border-t border-gray-300 transition-transform duration-300 md:text-sm">
                      {faqQuestion.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-3 my-6 mx-4 font-semibold text-xs md:test-sm md:mx-12 ">
              <p className="">Cant find what you need? </p>
              <Link
                href="/"
                className="flex items-center gap-2 text-blue-800 border-b border-white hover:border-blue-900 hover:text-blue-900"
              >
                Send us a Message
                <ArrowRight3
                  size={12}
                  color="ff0000"
                  variant="Broken"
                  className="fill-current md:size-4"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQs;

const questions = [
  {
    question: "Is there a limit to how many requests I can make?",
    answer:
      "No, there’s no limit to the number of requests you can submit. However, we work on one request at a time, ensuring each project receives our full attention and quality. Once a service is completed and approved, we move on to the next one in your queue. This allows us to maintain the highest standards while keeping the workflow efficient.",
  },
  {
    question: "How fast can my project be done?",
    answer:
      "For most requests, you can expect your project to be done within 48 hours. The turnaround time may vary depending on the complexity of the project. Larger or more detailed projects may take a bit longer, but we always prioritize clear communication and timely updates to keep you informed of progress.",
  },
  {
    question: "What if I'm not satisfied with what is done?",
    answer:
      "Your satisfaction is our priority. If you’re not happy with what was done, you can request revisions, and we’ll make the necessary adjustments based on your feedback. We work collaboratively with you, refining your project until it aligns with your vision and meets your expectations. Our process includes multiple rounds of revisions to ensure you’re completely satisfied with the final outcome.",
  },
  {
    question: "How fast can my project be done?",
    answer:
      "For most requests, you can expect your project to be done within 48 hours. The turnaround time may vary depending on the complexity of the project. Larger or more detailed projects may take a bit longer, but we always prioritize clear communication and timely updates to keep you informed of progress.",
  },
  {
    question: "How fast can my project be done?",
    answer:
      "For most requests, you can expect your project to be done within 48 hours. The turnaround time may vary depending on the complexity of the project. Larger or more detailed projects may take a bit longer, but we always prioritize clear communication and timely updates to keep you informed of progress.",
  },
];
