import React from "react";
const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`font-poppins font-medium text-[18px] bg-blue-gradient rounded-full py-4 px-6 ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
