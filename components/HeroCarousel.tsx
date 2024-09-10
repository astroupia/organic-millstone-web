"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/assets/images/om-hero.jpeg",
    alt: "Organic Millstone",
    title: "Organic Millstones",
    description:
      "Crafted for quality, our organic millstones ensure pure, nutritious flour production.",
  },
  {
    image: "/assets/images/horizontal-mill.jpeg",
    alt: "Horizontal Millstone",
    title: "Horizontal Millstone",
    description:
      "Our Horizontal Millstone delivers consistent, high-quality flour with its efficient grinding mechanism.",
  },
  {
    image: "/assets/images/vertical-mill.jpg",
    alt: "Vertical Millstone",
    title: "Vertical Millstone",
    description:
      "Our Vertical Millstone combines traditional design with modern efficiency for superior flour production.",
  },
  {
    image: "/assets/images/shaft.png",
    alt: "Shaft",
    title: "Shaft",
    description:
      "Our durable millstone shaft ensures smooth rotation and efficient power transfer for optimal milling performance.",
  },
  {
    image: "/assets/images/dinamo.png",
    alt: "Dinamo",
    title: "Dinamo",
    description:
      "Our powerful and reliable dinamo provides consistent energy for your millstone, ensuring smooth and efficient operation.",
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end justify-start">
            <div className="text-left text-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 mb-10 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-4">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
