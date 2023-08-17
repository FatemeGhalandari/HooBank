import { logo } from "../assets";
import { socialMedia, footerLinks } from "../constants";
const Footer = () => (
  <section className="flex flex-col justify-center items-center py-6 sm:py-16">
    <div className="flex flex-col md:flex-row  justify-center items-start w-full mb-8">
      <div className="flex flex-1 flex-col mr-10 justify-start">
        <img
          src={logo}
          alt="logo"
          className="w-[266px] h-[73px] object-contain"
        />
        <p className="font-poppins font-medium text-[18px] text-dimWhite mt-4 max-w-[310px]">
          A new way to make payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex flex-row flex-[1.5] justify-between flex-wrap mt-10 md:mt-0 w-full">
        {footerLinks.map((footerLink, key) => (
          <div key={key} className="flex flex-col min-w-[150px] my-4 ss:my-0">
            <h4
              key={key}
              className="font-poppins font-medium text-[18px] text-white mb-4 "
            >
              {footerLink.title}
            </h4>
            <ul>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] text-dimWhite hover:text-secondary cursor-pointer
                  ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"} `}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex flex-col md:flex-row justify-between items-center pt-6 border-t-[1px]  border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] text-white mb-4 ">
        2023 Hoobank . All Rights Reserved.
      </p>
      <div className="flex flex-row mt-6 md:mt-0 ">
        {socialMedia.map((social, index) => (
          <img
            src={social.icon}
            alt="social"
            key={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
