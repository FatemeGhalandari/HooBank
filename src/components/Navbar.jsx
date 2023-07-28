import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full justify-between items-center flex navbar py-6">
      <img src={logo} className="h-[32px] w-[124px]" />
      <ul className="list-none hidden justify-between items-center sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins text-white text-[16px] font-normal cursor-pointer ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient top-20 right-0 min-w-[140px] mx-4 my-2 p-6 absolute sidebar rounded-xl`}
        >
          <ul className="list-none justify-between items-center ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins text-white text-[16px] font-normal cursor-pointer ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
