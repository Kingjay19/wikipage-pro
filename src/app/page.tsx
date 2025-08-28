import Head from "next/head";
import Achievement from "./components/achievement";
import FAQs from "./components/faq";
import HeroSection from "./components/hero-section"
import Services from "./components/services";
import Testimonials from "./components/testimonials";

export const metadata = {
  title: "Wiki Page Pro | Digital Services Company",
  description: "At Wiki Page Pro, We don't just create, we solve your brand's biggest challenges.",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Wiki Page Pro | Digital Services Company</title>
        <meta
          name="description"
          content="Your go to location for Wiki and Digital services."
        />
        <link rel="canonical" href="https://wikipagepro.com" />
      </Head>

      <main className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16">
        <section className="grid grid-rows-1 items-center h-96">
          <HeroSection />
        </section>
        <Achievement />
        <Services />
        <Testimonials />
        <FAQs />
      </main>
    </>
  );
}
