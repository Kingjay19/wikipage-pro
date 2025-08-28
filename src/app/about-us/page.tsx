import Head from "next/head";
import GetInTouch from "../components/get-in-touch";
import Services from "../components/services";
import SubHeading from "../components/sub-heading";
import AboutusDetails from "./components/details";


export const metadata = {
  title: "About Us ",
  description: "WikiPage Pro, your trusted partner for delivering quality services.",
};

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Wiki Page Pro</title>
        <meta
          name="About Us"
          content="Want to know more about us and what we do?"
        />
        <link rel="canonical" href="https://wikipagepro.com" />
      </Head>

      <main>
        <section className="mx-6">
          <SubHeading subheader="About Us" />
          <p className="py-2 leading-6 text-sm lg:text-base">
            <strong>Welcome to WikiPage Pro</strong> - your trusted partner for
            delivering premium services.
          </p>

          <AboutusDetails />
        </section>

        <div className="my-6">
          <Services />
        </div>

        <GetInTouch />
      </main>
    </>
  );
}
