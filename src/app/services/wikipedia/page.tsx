import SubHeading from "@/app/components/sub-heading";
import ServiceDescription from "../../components/service-description";
import WikipediaContent from "./components/wikipedia-content";
import GetInTouch from "@/app/components/get-in-touch";

export default function Wikipedia() {
  return (
    <div>
      <div>
        <SubHeading subheader="Wikipedia Services" />
        <ServiceDescription
          description="At WikiPage Pro, we provide a full range of professional Wikipedia
            services tailored to your personal or business needs. Each service is
            delivered with strict compliance to Wikipedia’s guidelines for quality,
            neutrality, and notability."
        />
      </div>
      <WikipediaContent/>
      <GetInTouch/>
    </div>
  );
}
