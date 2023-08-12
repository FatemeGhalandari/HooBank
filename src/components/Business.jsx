import React from "react";
import Button from "./Button";
import { features } from "../constants";
const FeatureCard = ({ index, icon, title, content }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-dimBlue">
      <img src={icon} alt="icons" className="object-contain h-[50%] w-[50%]" />
    </div>
    <div className="flex flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[15px] mb-1">
        {content}
      </p>
    </div>
  </div>
);
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
      <div className="flex-1 flex flex-col justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
