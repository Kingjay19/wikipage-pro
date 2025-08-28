import GetInTouch from "@/app/components/get-in-touch";
import ServiceDescription from "@/app/components/service-description";
import SubHeading from "@/app/components/sub-heading";
import { Nebulas } from "iconsax-reactjs";
import Head from "next/head";

export const metadata = {
  title: "WordPress Services",
  description: "We create WordPress pages and solve WordPress related issues.",
};

export default function WordpressServices() {
  return (
    <>
      <Head>
        <title>WordPress Services | Wiki Page Pro</title>
        <meta
          name="WordPress Services"
          content="We create WordPress pages and solve WordPress related issues"
        />
        <link rel="canonical" href="https://wikipagepro.com" />
      </Head>

      <main className="mx-3">
        <SubHeading subheader="WordPress Services" />
        <ServiceDescription
          description="At WikiPagePro, we are able to solve any kind of WordPress related issues within a short period of time.
        We have been working on WordPress sites for over 6 years and with out expertise, we can ensure that you get the best service
        you need"
        />
        <section className="my-10 mx-4">
          <div className="grid grid-cols-1 space-y-5 items-center md:grid-cols-3 gap-3">
            <div>
              <p className="leading-6 text-sm font-semibold lg:text-base lg:leading-7">
                Our services includes:
              </p>
              <ul className="text-sm leading-6 lg:text-base">
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Creating WordPress Sites</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Plugin Fixes</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Broken Layout</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Website SSL Issue</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Internal Servier Error</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>White Screen of death</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Fix HTML/CSS/JS issues</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Broken WordPress Website</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Theme Customization Issue</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Database Connection Error</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Widgets and Sidebars Issue</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Unsuccessful Plugin Upgrade</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Domain & Web Hosting Setup</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Website Backup and Restoration</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Configuration of Theme or Plugins</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>CSS and Responsive Design Issues</p>
                </li>
                <li className="flex items-start gap-2 my-1">
                  <Nebulas
                    size="16"
                    variant="Outline"
                    className="fill-current text-blue-900 my-1"
                  />
                  <p>Website Updates, Speed and Security</p>
                </li>
              </ul>
            </div>
            <img src="/images/wordpress.png" alt="Business Listing img" className="col-span-2" />
          </div>
        </section>
        <GetInTouch />
      </main>
    </>
  );
}
