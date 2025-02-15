import clsx from "clsx";
import { ReserveButton2 } from "../../UI";

export const HuntingCard = ({ imgSrc, cls = {}, content, btnText }) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-6 max-sm:gap-4",
        cls?.containerClassName
      )}
    >
      <div className="w-[397px] h-[397px] max-sm:w-full max-sm:h-[200px]">
        <img src={imgSrc} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-6 max-sm:gap-2">
        <div className="flex flex-col gap-4 max-sm:gap-2">
          <div className="flex flex-col gap-1 max-sm:gap-[2px]">
            <span className="text-[20px] max-sm:text-[12px] leading-[30px] max-sm:leading-[18px] text-[#F2542D] font-medium">
              Case Title
            </span>
            <span className="text-[28px] max-sm:text-[18px] leading-[32px] max-sm:leading-[24px] text[#562C2C] font-medium">
              Case sous-titre
            </span>
          </div>
          <span className="text-[18px] max-sm:text-[14px] leading-6 max-sm:leading-[21px] text-[#562C2CCC] tracking-[-.16px] line-clamp-2">
            {content}
          </span>
        </div>
        <ReserveButton2 className="w-[65%] max-sm:w-[30%]">
          {btnText}
        </ReserveButton2>
      </div>
    </div>
  );
};
