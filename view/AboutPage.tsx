import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/apple-cards-carousel";
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
];

const teamMembers = [
  {
    name: "Abebe Demeke",
    role: "CEO",
    image: "/assets/images/abebe.jpg",
  },
  {
    name: "Abebech Semere",
    role: "CBO",
    image: "/assets/images/abebech.jpg",
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
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen">
      <div className="h-20"></div>{" "}
      {/* This div acts as a spacer for the fixed nav */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          About <FlipWords words={["Us", "Our Mission", "Our Team"]} />
        </h1>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
          We are redefining the standards of food production with a strong
          commitment to sustainability and health. With a rich history spanning
          over 50 years, we have recently rebranded to focus on delivering
          organic and bio-sustainable mill parts and millstones. Our journey has
          been driven by a singular mission: to replace traditional, hazardous
          methods of food and flour production with safer, eco-friendly
          alternatives.
        </p>
        <Timeline data={timelineData} />
        <section className="py-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="py-6 flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                card={{
                  src: member.image,
                  title: member.name,
                  category: member.role,
                  content: <p>Team member bio goes here.</p>,
                }}
                index={index}
              />
            ))}
          </div>
        </section>
        <section className="text-center py-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
