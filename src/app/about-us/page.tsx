import Services from "../components/services";
import SubHeading from "../components/sub-heading";
import AboutusDetails from "./components/details";

export default function AboutUs() {
  return (
    <div>
      <div className="mx-6">
        <SubHeading subheader="About Us" />
      <p className="py-2 leading-6 text-sm lg:text-base">
        <strong>Welcome to WikiPage Pro</strong> - your trusted partner for
        delivering premium services.
      </p>

        <AboutusDetails/>
      </div>

        <div className="my-6">
            <Services/>
        </div>
        
        <div className="mb-6">
            <p className="pt-6 pb-2 font-semibold text-lg border-t border-gray-300 mt-2">Get in Touch</p>
            <p className="text-xs py-0.5 leading-6 md:text-sm lg:text-base">Ready to get started, contact us <a href="/" className="text-blue-800 underline">here.</a></p>
            <p className="text-xs py-0.5 leading-6 md:text-sm lg:text-base">Let WikiPage Pro help you <strong>build credibility, improve your visibility, and stand out in the digital world.</strong></p>
        </div>
    </div>
  );
}
