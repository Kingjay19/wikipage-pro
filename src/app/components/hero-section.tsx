"use client";
import Link from "next/link";
import Heading from "./heading";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <div className="md:mx-10 lg:mx-48">
            <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.25 }}
        >

            <div className="flex items-center justify-center gap-2">
                <div className="p-1.5 bg-green-600 rounded-full"></div>
                <p className="text-sm lg:text-base">Available for New Projects</p>
            </div>
            <Heading header="A dedicated team just for you" />
            <p className="text-center text-sm lg:text-base">We don't just create, we solve your brand's <br></br>biggest challenges </p>
            <div className="my-3 flex items-center justify-center font-semibold text-sm md:my-5 lg:text-base">
                <Link href="/contact" className="w-fit bg-blue-600 rounded-full py-3 px-6 text-white hover:bg-blue-700">Contact Us</Link>
            </div>
        </motion.div>
        </div>
    )
}