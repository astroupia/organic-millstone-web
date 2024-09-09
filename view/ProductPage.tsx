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
    title: "Strong and Reliable Motor",
    src: "/assets/images/dinamo.png",
    content: <HmContent />,
  },
];

const ProductsPage = () => {
  const cards = carouselData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-20"></div> {/* Spacer for header */}
      <main className="flex-grow px-4 py-6 md:px-8 md:py-12">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          Our <FlipWords words={["Products", "Millstones", "Solutions"]} />
        </h1>

        <p className="text-sm md:text-base text-center mb-8 max-w-2xl mx-auto">
          We specialize in producing premium millstones using only organic and
          strong materials. Our products ensure superior grinding while
          protecting your flour from harmful chemicals and contaminants.
        </p>

        <section className="mt-4">
          <h2 className="text-xl md:text-3xl font-bold">Featured Products</h2>
          <Carousel items={cards} />
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Product Details
          </h2>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
            {productData.map((product, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-4"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                  {product.category}
                </p>
                <img
                  src={product.src}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
                <div className="text-sm py-4 md:text-base">
                  {product.content}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 py-6">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Additional Products
          </h2>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
            {newProductData.map((product, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-4"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                  {product.category}
                </p>
                <img
                  src={product.src}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-6">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Ready to Order?
          </h2>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default ProductsPage;
