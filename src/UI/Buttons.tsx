import clsx from "clsx";
import React from "react";
import ArrowUpRightGreen from "../assets/ArrowUpRightGreen.svg";
import ArrowUpRightWhite from "../assets/ArrowUpRightWhite.svg";

export interface CommonButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const ExploreButton = ({ className, ...props }: CommonButtonProps) => (
  <button
    className={clsx(
      "rounded-[33px] bg-[#F2542D] text-white active:bg-[#CA3E1B]",
      className
    )}
    {...props}
  />
);

export const ReserveButton2 = ({
  className,
  children,
  ...props
}: CommonButtonProps) => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={clsx(
        "group flex gap-1 items-center justify-center h-[44px] rounded-[333px] bg-[#FFFFFF] border-[1.5px] border-[#562C2C4D] text-[18px] max-sm:text-[14px] leading-[20px] max-sm:leading-4 font-medium text-[#562C2C] hover:bg-[#F2542D] hover:text-white",
        "px-[27px] max-sm:px-[12px] py-[4px] max-sm:py-[8px]",
        className
      )}
      {...props}
    >
      {children}
      <img src={isHover ? ArrowUpRightWhite : ArrowUpRightGreen} />
    </button>
  );
};

export const ActivityButton = ({
  className,
  children,
  ...props
}: CommonButtonProps) => (
  <button
    className={clsx(
      "flex gap-2 px-4 py-2 items-center justify-center rounded-[40px] bg-[#FAFAFA] text-[#562C2C] border-[1.5px] border-[#F2542D80]",
      className
    )}
    {...props}
  >
    {children}
  </button>
);
