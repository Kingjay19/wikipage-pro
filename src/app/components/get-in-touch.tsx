import Link from "next/link";
import { ArrowRight3 } from "iconsax-reactjs";

export default function GetInTouch() {
    return (
        <div className="mb-6 mx-2 text-lg">
            <p className="pt-6 pb-2 font-semibold text-lg border-t border-gray-300 mt-2">Get in Touch</p>
            <p className="flex gap-1 font-bold py-0.5 leading-6 text-base">Ready to get started?
                <Link
                    href="/contact"
                    className="flex items-center gap-1 text-blue-800 border-b border-white hover:border-blue-900 hover:text-blue-900"
                >
                    Send us a Message
                    <ArrowRight3
                        size={12}
                        color="ff0000"
                        variant="Broken"
                        className="fill-current md:size-4"
                    />
                </Link>
            </p>
            <p className="py-0.5 leading-6 text-base">Let WikiPage Pro help you <strong>build credibility, improve your visibility, and stand out in the digital world.</strong></p>
        </div>
    )
}