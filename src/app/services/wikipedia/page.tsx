import SubHeading from "@/app/components/sub-heading";
import ServiceDescription from "../../components/service-description";
import WikipediaContent from "./components/wikipedia-content";
import GetInTouch from "@/app/components/get-in-touch";
import Head from "next/head";

export const metadata = {
  title: "Wiki Services",
  description: "At Wikipage Pro, we provide a full range of professional Wiki services tailored to your needs.",
};


export default function Wikipedia() {
  return (
    <>
      <Head>
        <title>Wiki Services | Wiki Page Pro</title>
        <meta
          name="Wiki Services"
          content="We provide a full range of professional Wiki services tailored to your needs"
        />
        <link rel="canonical" href="https://wikipagepro.com" />
      </Head>

      <main>
        <section>
          <SubHeading subheader="Wiki Services" />
          <ServiceDescription
            description="At WikiPage Pro, we provide a full range of professional Wiki
            services tailored to your personal or business needs. Each service is
            delivered with strict compliance to Wiki’s guidelines for quality,
            neutrality, and notability."
          />
        </section>
        <WikipediaContent />
        <GetInTouch />
      </main>
    </>
  );
}
