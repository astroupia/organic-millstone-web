import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import VmContent from "@/components/VerticalMillContent";
import HmContent from "@/components/HorizontalMillContent";
import { FlipWords } from "@/components/ui/flip-words";

const productData = [
  {
    category: "Organic Millstone",
    title: "Vertical Millstone",
    src: "/assets/images/vertical-mill.jpg",
    content: <VmContent />,
  },
  {
    category: "Organic Millstone",
    title: "Horizontal Millstone",
    src: "/assets/images/horizontal-mill.jpeg",
    content: <HmContent />,
  },
];

const newProductData = [
  {
    category: "Shaft",
    title: "Strong Shaft for your millstone",
    src: "/assets/images/shaft.jpg",
    content: <HmContent />,
  },
  {
    category: "Dinamo",
    title: "Strong and Reliable motor",
    src: "/assets/images/dinamo.png",
    content: <HmContent />,
  },
];

const carouselData = [
  {
    category: "Organic Millstone",
    title: "Vertical Millstone",
    src: "/assets/images/vertical-mill.jpg",
    content: <HmContent />,
  },
  {
    category: "Organic Millstone",
    title: "Horizontal Millstone",
    src: "/assets/images/horizontal-mill.jpeg",
    content: <VmContent />,
  },
  {
    category: "Shaft",
    title: "Strong Shaft for your millstone",
    src: "/assets/images/shaft.jpg",
    content: <HmContent />,
  },
  {
    category: "Dinamo",
    title: "Strong and Reliable motor",
    src: "/assets/images/dinamo.png",
    content: <HmContent />,
  },
];
const ProductsPage = () => {
  const cards = carouselData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen">
      <div className="h-20"></div>{" "}
      {/* This div acts as a spacer for the fixed nav */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Our <FlipWords words={["Products", "Millstones", "Solutions"]} />
        </h1>

        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
          We specialize in producing premium millstones using only organic and
          strong materials. Our products ensure superior grinding while
          protecting your flour from harmful chemicals and contaminants.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <Carousel items={cards} />
        </section>

        <section className="mb-16 py-5">
          <h2 className="text-3xl font-bold mb-8">Product Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productData.map((product, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6"
              >
                <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  {product.category}
                </p>
                <img
                  src={product.src}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className="text-sm">{product.content}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {newProductData.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                {product.category}
              </p>
              <img
                src={product.src}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              {/* <div className="text-sm">{product.content}</div> */}
            </div>
          ))}
        </section>

        <section className="text-center m-2 py-5">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;
