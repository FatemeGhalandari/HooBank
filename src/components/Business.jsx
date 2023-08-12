import React from "react";
import Button from "./Button";
const Business = () => {
  return (
    <section className="flex flex-col md:flex-row sm:py-16 py-6">
      <div className="flex flex-1 flex-col justify-center items-start">
        <h2 className="font-poppins font-semibold text-white text-[40px] xs:text-[50px] w-full">
          You do the business, <br className="sm:block hidden" />
          we’ll handle the money.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[15px] xs:text-[20px] max-w-[470px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
    </section>
  );
};

export default Business;
