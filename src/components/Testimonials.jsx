import React from "react";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";
const Testimonials = () => (
  <section className="flex flex-col justify-between items-center py-6 sm:py-16 relative">
    <div className="absolute h-[50%] w-[50%] rounded-full -right-[50%] z-[0] blue__gradient" />
    <div className="flex flex-col md:flex-row justify-center items-start relative z-[1] mb-6 sm:mb-16 w-full">
      <h2 className="font-poppins font-semibold text-white text-[40px] sm:text-[50px] w-full ">
        What people are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full mt-6 md:mt-0">
        <p className="font-poppins font-normal text-dimWhite text-[20px] max-w-[470px] text-left">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap  feedback-container justify-center sm:justify-start w-full relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);
export default Testimonials;
