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
    <div className="min-h-screen grid grid-rows-[auto_1fr]">
      <div className="h-20"></div> {/* Spacer for fixed nav */}
      <main className="px-4 py-6 md:px-8 md:py-12">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          About <FlipWords words={["Us", "Our Mission", "Our Team"]} />
        </h1>

        <p className="text-sm md:text-base text-center mb-8 max-w-2xl mx-auto">
          We are redefining the standards of food production with a strong
          commitment to sustainability and health. With a rich history spanning
          over 50 years, we have recently rebranded to focus on delivering
          organic and bio-sustainable mill parts and millstones.
        </p>

        <Timeline data={timelineData} />

        <section className="mt-12">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-6">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-2"
                />
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Ready to Learn More?
          </h2>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
