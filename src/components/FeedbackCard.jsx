import { quotes } from "../assets";
const FeedbackCard = ({ content, name, title, img }) => (
  <div
    className="flex flex-col justify-center items-center rounded-[20px] feedback-card px-10 py-12
  mr-0 sm:mr-5 md:mr-10 my-5 max-w-[370px]"
  >
    <img
      src={quotes}
      alt="quotes"
      className="h-[27px] w-[42px] object-contain"
    />
    <p className="font-poppins font-normal text-white my-10 leading-[32px] text-[18px]">
      {content}
    </p>
    <div className="flex flex-row ">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32px] ">
          {name}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
