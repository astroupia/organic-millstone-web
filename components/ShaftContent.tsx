import React from "react";
const ShaftContent = () => {
  return (
    <>
      {/* First unique div */}
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Strong Shaft for your millstone
          </span>{" "}
          Our high-quality shaft is engineered to provide optimal performance
          and longevity for your millstone. Crafted from durable materials, it
          ensures smooth rotation and efficient power transfer, minimizing
          vibration and wear. This robust shaft is designed to withstand the
          rigorous demands of continuous milling operations, making it an
          essential component for maintaining consistent flour quality and
          prolonging the life of your millstone. Available in various sizes to
          fit different millstone configurations, our shaft is the perfect
          choice for both small-scale and industrial milling setups.
        </p>
        <img
          src="/assets/images/shaft.jpg"
          alt="shaft"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto mt-5 object-contain rounded-3xl"
        />
      </div>
    </>
  );
};

export default ShaftContent;
