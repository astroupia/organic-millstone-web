import React from "react";

const DnContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Strong and Reliable Motor
          </span>{" "}
          The Strong and Reliable Motor is designed for efficient and durable
          performance. With its robust build and advanced technology, this motor
          is perfect for powering your milling operations. Its high torque
          output ensures smooth and consistent grinding, making it an ideal
          choice for both home and industrial use.
        </p>
        <img
          src="/assets/images/dinamo.png"
          alt="dinamo"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto mt-5 rounded-lg object-contain"
        />
      </div>
    </>
  );
};

export default DnContent;
