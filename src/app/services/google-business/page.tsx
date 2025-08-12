import GetInTouch from "@/app/components/get-in-touch";
import ServiceDescription from "@/app/components/service-description";
import SubHeading from "@/app/components/sub-heading";
import { Nebulas } from "iconsax-reactjs";

export default function GoogleBusines() {
  return (
    <div className="mx-3">
      <SubHeading subheader="Google Business Listing Expert" />
      <ServiceDescription
        description="At WikiPagePro, we create Local Search Engine Optimization
      and Google Business Listing in order to ensure customers find your business and ensure your local 
      rankings are improved massively."
      />
      <div className="my-10 mx-4">
        <div className="grid grid-cols-1 space-y-5 md:grid-cols-3 gap-3">
          <div>
            <p className="leading-6 text-sm font-semibold lg:text-base lg:leading-7">
              Our services covers:
            </p>
            <ul className="text-sm leading-6 lg:text-base">
              <li className="flex items-start gap-2 my-1">
                <Nebulas
                  size="16"
                  variant="Outline"
                  className="fill-current text-blue-900 my-1"
                />
                <p>Google My Business Setup</p>
              </li>
              <li className="flex items-start gap-2 my-1">
                <Nebulas
                  size="16"
                  variant="Outline"
                  className="fill-current text-blue-900 my-1"
                />
                <p>Local SEO Optimization</p>
              </li>
              <li className="flex items-start gap-2 my-1">
                <Nebulas
                  size="16"
                  variant="Outline"
                  className="fill-current text-blue-900 my-1"
                />
                <p>Review Management</p>
              </li>
              <li className="flex items-start gap-2 my-1">
                <Nebulas
                  size="16"
                  variant="Outline"
                  className="fill-current text-blue-900 my-1"
                />
                <p>Local Citations</p>
              </li>
              <p>And lots more based on what your need entails</p>
            </ul>
          </div>
          <img src="/images/business-listing.png" alt="Business Listing img" className="col-span-2" />
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
