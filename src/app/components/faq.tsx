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
        <p className="py-2 text-center leading-6 text-sm lg:text-base">
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
                    <p className="my-2 py-4 text-gray-500 leading-6 border-t border-gray-300 transition-transform duration-300 text-sm">
                      {faqQuestion.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-1 my-6 mx-4 font-semibold text-[14px] md:mx-12 md:gap-3 ">
              <p className="">Cant find what you need? </p>
              <Link
                href="/contact"
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
      "Project timelines typically vary, as the exact turnaround depends on the complexity of the task. More detailed or extensive projects may require additional time, but I always ensure clear communication and regular updates so you’re informed at every stage.",
  },
  {
    question: "What if I'm not satisfied with what is done?",
    answer:
      "Your satisfaction is our priority. If you’re not happy with what was done, you can request revisions, and we’ll make the necessary adjustments based on your feedback. We work collaboratively with you, refining your project until it aligns with your vision and meets your expectations. Our process includes multiple rounds of revisions to ensure you’re completely satisfied with the final outcome.",
  },
  {
    question: "Can I trust that my page won’t be taken down after publishing?",
    answer:
      "While no one can guarantee permanent placement on Wiki, we maximize approval chances by adhering to Wiki’s rules, avoiding promotional language, and using reliable references. We also provide support if edits or revisions are required later.",
  },
  {
    question: "Will my personal or business information remain confidential?",
    answer:
      "Yes. All information shared with us is treated with strict confidentiality and used solely for project purposes. Your privacy and trust are a top priority.",
  },
  {
    question: "How clear will the process be for me as a client?",
    answer:
      "We provide a step-by-step overview at the start, with clear timelines, deliverables, and communication updates at every stage so you’re never left in the dark.",
  },
  {
    question: "How do you ensure the information you use is accurate?",
    answer:
      "We only use publicly available, independent, and reputable sources. Every fact included is carefully cross-checked to maintain accuracy and transparency.",
  },
];
