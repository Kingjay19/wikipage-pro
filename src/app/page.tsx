import Achievement from "./components/achievement";
import FAQs from "./components/faq";
import HeroSection from "./components/hero-section"
import Services from "./components/services";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16">
      <div className="grid grid-rows-1 items-center h-96">
        <HeroSection />
      </div>
        <Achievement />
        <Services />
        <Testimonials />
        <FAQs/>
    </div>
  );
}
