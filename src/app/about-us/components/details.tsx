import { Nebulas } from "iconsax-reactjs";

export default function AboutusDetails() {
  return (
    <>
      <p className="py-2 leading-6  text-sm lg:text-base">
        At WikiPage Pro, we craft authoritative digital presences that stand the
        test of time. Our expert team—led by Mr. Modestus Anochie—delivers
        comprehensive solutions including:
      </p>

      <ul className=" py-2 text-sm leading-6 lg:text-base">
        <li className="flex items-start gap-2 my-1">
          <Nebulas
            size="16"
            variant="Outline"
            className="fill-current text-blue-900 my-1"
          />
          <p>
            <span className="text-blue-800 font-semibold">
              Wikipedia Excellence:
            </span>{" "}
            Creating, optimizing, and maintaining Wikipedia pages for
            individuals, brands, and organizations.
          </p>
        </li>
        <li className="flex items-start gap-2 my-1">
          <Nebulas
            size="16"
            variant="Outline"
            className="fill-current text-blue-900 my-1"
          />
          <p>
            <span className="text-blue-800 font-semibold">
              Web Development:
            </span>{" "}
            Building fast, SEO-optimized websites that convert visitors into
            customers.
          </p>
        </li>
        <li className="flex items-start gap-2 my-1">
          <Nebulas
            size="16"
            variant="Outline"
            className="fill-current text-blue-900 my-1"
          />
          <p>
            <span className="text-blue-800 font-semibold">
              Digital Transformation:
            </span>{" "}
            Revamping outdated sites with modern UX/UI designs that boost
            engagement.
          </p>
        </li>
        <li className="flex items-start gap-2 my-1">
          <Nebulas
            size="16"
            variant="Outline"
            className="fill-current text-blue-900 my-1"
          />
          <p>
            <span className="text-blue-800 font-semibold">
              Online Authority:
            </span>{" "}
            Enhancing visibility through Google Business optimization and
            strategic content.
          </p>
        </li>
      </ul>

      <p className="my-1 leading-6 text-sm lg:text-base">
        Backed by strict adherence to platform guidelines and a commitment to
        measurable results, we turn digital challenges into enduring success
        stories.
      </p>

      <p className="my-1 leading-6 text-sm lg:text-base">
        Whether you're a business owner, a start up, NGO, public figure, or a
        thougtful leader, we offer custom services which are tailored to your
        specific needs.
      </p>
    </>
  );
}
