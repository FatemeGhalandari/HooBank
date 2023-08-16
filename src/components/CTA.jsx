import React from "react";
import Button from "./Button";
const CTA = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:px-16 px-6 sm:py-12 py-4 sm:my-16 my-6 bg-black-gradient-2 rounded-[20px] box-shadow">
      <div className="flex flex-col flex-1 ">
        <h2 className="font-poppins font-semibold text-[40px] sm:text-[48px] text-white">
          Let’s try our service now!
        </h2>
        <p className="font-poppins font-normal text-[20px]  text-dimWhite max-w-[470px] mt-5">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex justify-center items-center ml-0 mt-10 sm:ml-10 sm:mt-0">
        <Button />
      </div>
    </section>
  );
};

export default CTA;
