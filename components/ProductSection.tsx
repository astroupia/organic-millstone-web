import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import VmContent from "@/components/VerticanMillContent";
import HmContent from "./HorizontalMillContent";

const data = [
  {
    category: "Organic Millstone",
    title: "Vertical Millstone. ",
    src: "/assets/images/vertical-mill.jpg",
    content: <VmContent />,
  },
  {
    category: "Organic Millstone",
    title: "Horizontal Millstone.",
    src: "/assets/images/horizontal-mill.jpeg",
    content: <HmContent />,
  },
  {
    category: "Shaft",
    title: "Strong Shaft for your millstone ",
    src: "/assets/images/shaft.jpg",
    content: <HmContent />,
  },

  {
    category: "Dinamo",
    title: "Strong and Reliable Motor",
    src: "/assets/images/dinamo.png",
    content: <HmContent />,
  },
];

const ProductPage = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="ProductSection" className="py-5 md:py-10">
      <div className="p-5 flex flex-col md:p-8 2xl:gap-0">
        <div className="flex flex-col justify-center md:ml-3 ml-1 gap-4 flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-none md:leading-normal">
            Our Products
          </h1>

          <p className="p-regular-14 md:p-regular-24">
            We specialize in producing premium millstones using only organic and
            strong materials. Our most popular product, the OM Millstone, is
            renowned for its durability, long-lasting performance, and
            eco-friendly composition. Available in various sizes—400MM, 500MM,
            600MM, and 800MM—our millstones ensure superior grinding while
            protecting your flour from harmful chemicals and contaminants.
          </p>
          <Button size="lg" asChild className="w-full sm:w-fit bg-green-700">
            <Link href="#contact">Explore</Link>
          </Button>
        </div>
        <div className="flex-1 mt-[5]">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
