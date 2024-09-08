import Image from "next/Image";
import React from "react";

const HmContent = () => {
  return (
    <>
      {/* First unique div */}
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            400MM Organic Horizontal Millstone
          </span>{" "}
          The 400MM Organic Horizontal Millstone is ideal for small-scale
          milling needs. With a compact 400mm diameter, this millstone is
          perfect for home use or small shops looking to produce fresh,
          high-quality flour. Its precise design ensures efficient grinding,
          preserving the nutritional value and natural taste of the grains.
        </p>
        <Image
          src="/assets/images/h1.png"
          alt="Vertical millstone"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto mt-5 object-contain"
        />
      </div>

      {/* Second unique div */}
      {/* <div className="bg-[#F5F5F7] dark:bg-neutral-700 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            500MM Organic Horizontal Millstone
          </span>{" "}
          The 500MM Organic Horizontal Millstone is perfect for mid-sized
          milling operations. With enhanced capacity, this millstone allows for
          efficient and quick grinding while maintaining the natural nutrients
          of the grains.
        </p>
        <Image
          src="/assets/images/h2.png"
          alt="Vertical millstone"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto mt-5 object-contain"
        />
      </div> */}
    </>
  );
};

export default HmContent;
