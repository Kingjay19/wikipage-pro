import GetInTouch from "../components/get-in-touch";
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
        
        <GetInTouch />
    </div>
  );
}
