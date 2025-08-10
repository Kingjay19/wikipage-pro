"use client";
import { Bank, CalendarTick, Cup } from "iconsax-reactjs";
import SubHeading from "./sub-heading";
import { motion } from "framer-motion";

export default function Achievement() {
  return (
    <div
      id="achievements"
      className="bg-blue-50 rounded-4xl  py-8 px-6 md:py-12 lg:py-16"
    >
      <div className="text-center my-6">
        <SubHeading subheader="Achievements" />
        <p className="py-2 text-center leading-6 text-sm lg:text-base">
          Curious about what we have accomplished? <br></br>Let our track
          records speak for itself
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.25 }}
        >
          <div className="rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-400 hover:scale-104 hover:shadow-lg">
            <Cup
              size="72"
              variant="Outline"
              className="fill-current mx-auto py-2"
            />
            <h1 className="font-semibold py-2 text-xl">100+ Brands served</h1>
            <p className="py-1 text-gray-500 text-sm lg:text-base">
              Helping businesses accross various industries achieve their goals
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.25 }}
        >
          <div className="rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-400 hover:scale-104 hover:shadow-lg">
            <CalendarTick
              size="72"
              variant="Outline"
              className="fill-current mx-auto py-2"
            />
            <h1 className="font-semibold py-2 text-xl">
              9 Years of Experience
            </h1>
            <p className="py-1 text-gray-500 text-sm lg:text-base">
              Bringing seasoned expertise to every project
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.25 }}
        >
          <div className="rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-400 hover:scale-104 hover:shadow-lg">
            <Bank
              size="72"
              variant="Outline"
              className="fill-current mx-auto py-2"
            />
            <h1 className="font-semibold py-2 text-xl">
              $100,000+ Saved for Brands
            </h1>
            <p className="py-1 text-gray-500 text-sm lg:text-base">
              so they can reinvest where it matters the most
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
