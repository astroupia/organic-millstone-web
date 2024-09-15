import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { Timeline } from "@/components/ui/timeline";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const timelineData = [
  {
    title: "Our Mission",
    content: (
      <p className="text-neutral-700 dark:text-neutral-300">
        We are dedicated to providing our customers with products that not only
        meet but exceed industry standards. By harnessing the power of organic
        materials, we aim to create durable, high-quality millstones that
        contribute to a healthier, more sustainable world. Our mission is to
        make food production safer and more efficient, ensuring that every grain
        processed with our millstones is free from harmful chemicals.
      </p>
    ),
  },
  {
    title: "Our Vision",
    content: (
      <p className="text-neutral-700 dark:text-neutral-300">
        Our vision is to lead the food production industry in Africa by setting
        new benchmarks in quality, innovation, and sustainability. We aspire to
        be recognized as the go-to provider of mill parts and millstones, known
        for our unwavering commitment to excellence and our pioneering approach
        to product development.
      </p>
    ),
  },
  {
    title: "Our Goal",
    content: (
      <p className="text-neutral-700 dark:text-neutral-300">
        Our goal is to continuously improve and innovate, driven by customer
        feedback and rigorous quality control. We aim to expand our reach, not
        just within Ethiopia but across Africa, impacting the food production
        industry at a continental level. By offering products that are both
        durable and safe, we strive to enhance the lives of our customers and
        contribute to a healthier, more sustainable future.
      </p>
    ),
  },
  {
    title: "Our Commitment",
    content: (
      <p className="text-neutral-700 dark:text-neutral-300">
        We are committed to environmental stewardship and social responsibility.
        By prioritizing sustainable practices in our manufacturing processes and
        fostering strong relationships with local communities, we aim to create
        a positive impact beyond our products. Our dedication to research and
        development ensures we stay at the forefront of eco-friendly milling
        technology, continually pushing the boundaries of what's possible in
        sustainable food production.
      </p>
    ),
  },
  {
    title: "Our Values",
    content: (
      <p className="text-neutral-700 dark:text-neutral-300">
        At the core of our business are values that guide every decision we
        make: integrity in our dealings, excellence in our products, innovation
        in our approach, and respect for our environment and communities. We
        believe in transparency, continuous improvement, and fostering a culture
        of collaboration both within our team and with our partners and
        customers. These values are not just words, but principles we live by
        every day.
      </p>
    ),
  },
];

const teamMembers = [
  {
    name: "Bewket Liyew",
    role: "CEO",
    image: "/assets/images/CEO.jpg",
  },
  {
    name: "Biruk Andualem",
    role: "CBO",
    image: "/assets/images/abebe.jpg",
  },
  {
    name: "Aebra Beshama",
    role: "CTO",
    image: "/assets/images/abebe.jpg",
  },
  {
    name: "Sharew Abebe",
    role: "CFO",
    image: "/assets/images/abebe.jpg",
  },
];

const AboutPage = () => {
  const teamMemberCards = teamMembers.map((member, index) => (
    <Card
      key={member.name}
      card={{
        src: member.image,
        title: member.name,
        category: member.role,
        content: (
          <div className="flex flex-col p-4 items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-2"
            />
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ),
      }}
      index={index}
    />
  ));

  return (
    <section id="AboutSection" className="py-5 md:py-10">
      <div className="p-5 flex flex-col md:p-8 2xl:gap-0">
        <div className="flex flex-col justify-center md:p-10 md:ml-3 ml-1 gap-4 flex-1">
          {/* <div className="h-10"></div> Spacer for header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-1 leading-none md:leading-normal">
            About <FlipWords words={["Us", "Our Mission", "Our Team"]} />
          </h1>
          <p className="p-regular-14 md:p-regular-24 ">
            We are redefining the standards of food production with a strong
            commitment to sustainability and health. With a rich history
            spanning over 50 years, we have recently rebranded to focus on
            delivering organic and bio-sustainable mill parts and millstones.
          </p>
          <Button size="lg" asChild className="w-full sm:w-fit bg-green-700">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <div id="commitments" className="flex-1 mt-8">
          <Timeline data={timelineData} />
        </div>

        <div className="flex-1 mt-8">
          <h2 id="teams" className="text-2xl md:text-3xl font-bold mb-6">
            Our Team
          </h2>
          <Carousel items={teamMemberCards} />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
