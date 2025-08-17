"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Additem, Book, Nebulas, Refresh2, Trash } from "iconsax-reactjs";

const WikipediaContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      icon: <Additem size="18" variant="Outline" className="fill-current" />,
      title: "Page Creation",
      content: (
        <div className="space-y-4">
          <h3 className="text-base font-bold text-blue-600 md:text-xl">
            Get a Professional Wikipedia Page That Stands Out!
          </h3>
          <p className="leading-6 text-sm lg:text-base lg:leading-7">
            In today’s digital world, a Wikipedia page is more than just a
            vanity piece—it’s a mark of credibility and trust. Whether you're an
            entrepreneur, public figure, or organization, having a well-written
            Wikipedia page can elevate your brand and boost your online
            reputation.
          </p>
          <p className="leading-6 text-sm lg:text-base lg:leading-7">
            But here’s the thing:{" "}
            <strong>
              Wikipedia strictly prohibits individuals from creating pages about
              themselves
            </strong>{" "}
            due to its <strong>Conflict of Interest (COI) </strong> policy.
          </p>

          <hr className="text-gray-300"></hr>

          <h3 className="text-base font-bold text-blue-600 md:text-xl">
            Why You Shouldn’t Create Your Own Wikipedia Page
          </h3>
          <p className="leading-6 text-sm lg:text-base lg:leading-7">
            Wikipedia prides itself on being a neutral, community-driven
            platform. That means:
          </p>
          <ul className="text-sm leading-6 lg:text-base">
            <li className="flex items-start gap-2 my-1">
              <Nebulas
                size="16"
                variant="Outline"
                className="fill-current text-blue-900 my-1"
              />
              <p>No self-promotion</p>
            </li>
            <li className="flex items-start gap-2 my-1">
              <Nebulas
                size="16"
                variant="Outline"
                className="fill-current text-blue-900 my-1"
              />
              <p>No biased narratives</p>
            </li>
            <li className="flex items-start gap-2 my-1">
              <Nebulas
                size="16"
                variant="Outline"
                className="fill-current text-blue-900 my-1"
              />
              <p>No original research</p>
            </li>
          </ul>

          <p className="leading-6 text-sm lg:text-base lg:leading-7">
            Pages must be based on{" "}
            <strong>independent, reliable sources, </strong>and the content must
            be written in a neutral tone. Unfortunately, most self-created pages
            violate these principles—leading to immediate scrutiny or deletion.
          </p>
          <p className="leading-6 text-sm lg:text-base lg:leading-7">
            By Wikipedia’s standards,{" "}
            <strong>you are too close to the subject </strong>
            to write objectively about yourself or your business.
          </p>

          <div className="bg-blue-50 space-y-4 p-4 rounded-lg border border-blue-100">
            <h3 className="text-base font-bold text-blue-600 md:text-xl">
              Why You Need a Professional Wikipedia Editor?
            </h3>
            <p className="leading-6 text-sm lg:text-base lg:leading-7">
              With a track record of creating and maintaining high-quality
              Wikipedia pages, we know how to:
            </p>
            <ul className="text-sm leading-6 lg:text-base">
              <li className="flex items-start gap-2 my-1">
                <Nebulas
                  size="16"
                  variant="Outline"
                  className="fill-current text-blue-900 my-1"
                />
                <p>
                  Evaluate your notability using accepted Wikipedia standards
                </p>
              </li>
              <li className="flex items-start gap-2 my-1">
                <Nebulas
                  size="16"
                  variant="Outline"
                  className="fill-current text-blue-900 my-1"
                />
                <p>
                  Source reliable, third-party citations that serves and best
                  suits you
                </p>
              </li>
              <li className="flex items-start gap-2 my-1">
                <Nebulas
                  size="16"
                  variant="Outline"
                  className="fill-current text-blue-900 my-1"
                />
                <p>
                  Craft content that aligns with Wikipedia’s tone and formatting
                  rules
                </p>
              </li>
              <li className="flex items-start gap-2 my-1">
                <Nebulas
                  size="16"
                  variant="Outline"
                  className="fill-current text-blue-900 my-1"
                />
                <p>
                  Ensure long-term survival of your page in the Wikipedia
                  ecosystem
                </p>
              </li>
            </ul>

            <p className="leading-6 text-sm lg:text-base lg:leading-7">
              Whether you're an author, entrepreneur, artist, scholar, or public
              figure, we bring the experience and knowledge to{" "}
              <strong> get your page published professionally.</strong>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      icon: <Refresh2 size="18" variant="Outline" className="fill-current" />,
      title: "Updates & Maintenance",
      content: (
        <div className="space-y-4">
          <h3 className="text-base font-bold text-blue-600 md:text-xl">
            Get Your Wikipedia Page Updated the Right Way!
          </h3>
          <p className="leading-6 text-sm lg:text-base lg:leading-7">
            Wikipedia is one of the most powerful platforms online for building
            credibility, visibility, and trust. Whether you're an individual, a
            business, or a public figure, having a well-maintained Wikipedia
            page instantly boosts your online reputation.
          </p>
          <p className="leading-6 text-sm lg:text-base lg:leading-7">
            But here’s the truth: updating your own Wikipedia page is not just
            frowned upon—it’s actually against Wikipedia’s rules.
          </p>

          <hr className="text-gray-300"></hr>

          <h3 className="text-base font-bold text-blue-600 md:text-xl">
            Conflict of Interest: Why You Shouldn’t Edit Your Own Page
          </h3>
          <p className="leading-6 text-sm lg:text-base lg:leading-7">
            Wikipedia has strict guidelines about self-editing. Editing a page
            about yourself, your brand, or your organization is considered a{" "}
            <strong>Conflict of Interest (COI).</strong>
          </p>
          <p className="leading-6 text-sm lg:text-base lg:leading-7">
            When Wikipedia detects COI edits, they may:
          </p>
          <ul className="text-sm leading-6 lg:text-base">
            <li className="flex items-start gap-2 my-1">
              <Nebulas
                size="16"
                variant="Outline"
                className="fill-current text-blue-900 my-1"
              />
              <p>Reverse your changes</p>
            </li>
            <li className="flex items-start gap-2 my-1">
              <Nebulas
                size="16"
                variant="Outline"
                className="fill-current text-blue-900 my-1"
              />
              <p>Flag the page</p>
            </li>
            <li className="flex items-start gap-2 my-1">
              <Nebulas
                size="16"
                variant="Outline"
                className="fill-current text-blue-900 my-1"
              />
              <p>Or even delete it entirely</p>
            </li>
          </ul>

          <p className="leading-6 text-sm lg:text-base lg:leading-7">
            That’s why the safest and smartest way to update a Wikipedia page is
            by hiring a <strong>professional Wikipedia editor </strong> who
            knows the rules, formats, and citation policies.
          </p>

          <div className="bg-blue-50 space-y-4 p-4 rounded-lg border border-blue-100">
            <h3 className="text-base font-bold text-blue-600 md:text-xl">
              Hire Us – Your Trusted Wikipedia Expert
            </h3>
            <p className="leading-6 text-sm lg:text-base lg:leading-7">
              If you want to{" "}
              <strong>get your Wikipedia page updated the right way</strong>,
              then we are your go-to expert.
            </p>
            <p className="leading-6 text-sm lg:text-base lg:leading-7">
              We specialize in:
            </p>
            <ul className="text-sm leading-6 lg:text-base">
              <li className="flex items-start gap-2 my-1">
                <Nebulas
                  size="16"
                  variant="Outline"
                  className="fill-current text-blue-900 my-1"
                />
                <p>Neutral and policy-compliant updates</p>
              </li>
              <li className="flex items-start gap-2 my-1">
                <Nebulas
                  size="16"
                  variant="Outline"
                  className="fill-current text-blue-900 my-1"
                />
                <p>Fact-checking and adding verified citations</p>
              </li>
              <li className="flex items-start gap-2 my-1">
                <Nebulas
                  size="16"
                  variant="Outline"
                  className="fill-current text-blue-900 my-1"
                />
                <p>Fixing outdated or inaccurate information</p>
              </li>
              <li className="flex items-start gap-2 my-1">
                <Nebulas
                  size="16"
                  variant="Outline"
                  className="fill-current text-blue-900 my-1"
                />
                <p>Structuring the article to meet Wikipedia standards</p>
              </li>
            </ul>

            <p className="leading-6 text-sm lg:text-base lg:leading-7">
              We have helped individuals, authors, entrepreneurs, and
              organizations maintain a clean and professional Wikipedia presence
              without violating Wikipedia’s editorial standards.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      icon: <Book size="18" variant="Outline" className="fill-current" />,
      title: "Notability Consultation",
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <p className="text-sm leading-7 md:text-base">
            Not sure if you or your brand qualifies for a Wikipedia article? We
            evaluate your credentials based on Wikipedia’s notability criteria
            and provide honest, actionable feedback.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      icon: <Trash size="18" variant="Outline" className="fill-current" />,
      title: "Deletion Recovery",
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <p className="text-sm leading-7 md:text-base">
            If your Wikipedia page was deleted, we can investigate the cause,
            assess its recoverability, and guide you through the proper
            restoration or recreation process—only when it complies with
            Wikipedia’s terms.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-wrap justify-center gap-2 my-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-200 text-sm ${
              activeTab === tab.id
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.icon}
            {tab.title}
          </button>
        ))}
      </div>

      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8"
          >
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WikipediaContent;
