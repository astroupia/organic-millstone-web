import Image from "next/image";
import React from "react";

const VmContent = () => {
  return (
    <>
      {/* First unique div */}
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            400MM Organic Vertical Millstone
          </span>{" "}
          The 400MM Organic Vertical Millstone is ideal for small-scale milling
          needs. With a compact 400mm diameter, this millstone is perfect for
          home use or small shops looking to produce fresh, high-quality flour.
          Its precise design ensures efficient grinding, preserving the
          nutritional value and natural taste of the grains.
        </p>
        <Image
          src="/assets/images/v1.png"
          alt="Vertical millstone"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto mt-5 object-contain"
        />
      </div>

      {/* Second unique div */}
      <div className="bg-[#F5F5F7] dark:bg-neutral-700 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            500MM Organic Vertical Millstone
          </span>{" "}
          The 500MM Organic Vertical Millstone is perfect for mid-sized milling
          operations. With enhanced capacity, this millstone allows for
          efficient and quick grinding while maintaining the natural nutrients
          of the grains.
        </p>
        <Image
          src="/assets/images/v2.png"
          alt="Vertical millstone"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto mt-5 object-contain"
        />
      </div>

      {/* Third unique div */}
      <div className="bg-[#F5F5F7] dark:bg-neutral-600 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            600MM Organic Vertical Millstone
          </span>{" "}
          The 600MM Organic Vertical Millstone is designed for larger milling
          needs. With a robust build and larger diameter, it ensures efficient
          grinding for high-quality, nutritious flour.
        </p>
        <Image
          src="/assets/images/v3.png"
          alt="Vertical millstone"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto mt-5 object-contain"
        />
      </div>

      {/* Fourth unique div */}
      <div className="bg-[#F5F5F7] dark:bg-neutral-500 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            800MM Organic Vertical Millstone
          </span>{" "}
          The 800MM Organic Vertical Millstone is a premium option for those
          looking for the utmost quality and capacity. Its advanced design
          ensures the highest efficiency and preservation of grain nutrients.
        </p>
        <Image
          src="/assets/images/v4.png"
          alt="Vertical millstone"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto mt-5 object-contain"
        />
      </div>
    </>
  );
};

export default VmContent;
