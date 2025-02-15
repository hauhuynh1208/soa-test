import clsx from "clsx";

export interface CommonTypoProps {
  className?: string;
}

export const HeaderNavText = ({ className, ...props }: CommonTypoProps) => (
  <div
    className={clsx("text-[16px] leading-6 font-medium text-white", className)}
    {...props}
  />
);
