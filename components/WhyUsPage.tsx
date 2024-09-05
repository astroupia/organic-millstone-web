import React from "react";
import { Timeline } from "./ui/timeline";

const WhyUsPage = () => {
  return (
    <div className="overflow-hidden">
      <Timeline
        data={[
          {
            title: "1. Organic and Safe",
            content: (
              <p>
                Our products are free from harmful chemicals, promoting
                healthier food production practices for your peace of mind.
              </p>
            ),
          },
          {
            title: "2. Custom Solutions",
            content: (
              <p>
                We offer customizable millstones tailored to your unique needs,
                ensuring precision and complete satisfaction.
              </p>
            ),
          },
          {
            title: "3. Quality You Can Trust",
            content: (
              <p>
                With state-of-the-art manufacturing and strict quality control,
                our millstones are built to last and perform consistently.
              </p>
            ),
          },
          {
            title: "4. Nationwide Reach",
            content: (
              <p>
                From Addis Ababa to Hawassa, Gondar to Bahir Dar, we are proud
                to serve customers across Ethiopia with our quality products.
              </p>
            ),
          },
          {
            title: "5. Customer-Focused",
            content: (
              <p>
                We listen to your feedback and provide full warranties,
                guaranteeing your satisfaction with every purchase.
              </p>
            ),
          },
        ]}
      />
    </div>
  );
};

export default WhyUsPage;
