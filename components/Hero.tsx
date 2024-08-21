import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
    const words = ["better", "Greater", "Excellent", "modern"];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        src="/assets/Videos/Hero Vid.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex flex-col justify-center items-start h-full text-left text-white bg-black bg-opacity-75 px-4">
        <div className="md:ml-5 ml-2 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-none md:leading-normal">
          Organic Grinding<br/> for a<FlipWords words={words} className="text-green-500"/>Future
        </h1>
        <p className="text-base md:text-lg mb-6">
          With over 50 years of expertise, we've rebranded to lead the way in
          providing organic, bio-sustainable millstones. Our mission is to
          replace hazardous food production methods with our state-of-the-art,
          organic products.
        </p>
        <Button size="lg" asChild className="w-full sm:w-fit bg-white text-green-700 hover:bg-green-700 hover:text-white">
            <Link href="#ProductSection">Explore</Link>
          </Button>
      </div>
      </div>
    </div>
  );
};

export default Hero;
