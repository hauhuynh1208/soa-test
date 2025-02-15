import clsx from "clsx";

export interface CommonDividerProps {
  className?: string;
}

export const HorizontalDivider = ({
  className,
  ...props
}: CommonDividerProps) => (
  <div className={clsx("w-full h-[2px] bg-[#BBBBBB]", className)} {...props} />
);
