import clsx from "clsx";
import EmptyPinImg from "../assets/EmptyPin.svg";
import React from "react";
import { Mountains16SVG, Fishing16SVG, Crosshair16SVG } from "../assets";

export interface PinCommonProps {
  className?: string;
  Content?: React.ReactNode;
}

export const Pin = ({ className, Content }: PinCommonProps) => (
  <div className={clsx("w-[32px] h-[42px]", className)}>
    <img src={EmptyPinImg} className="w-full h-full" />
    {Content}
  </div>
);

export const MountainPin = ({ className }: PinCommonProps) => (
  <div className={clsx("w-[32px] h-[42px]", className)}>
    <img src={EmptyPinImg} className="w-full h-full" />
    <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white p-1">
      <Mountains16SVG color="#562C2C" />
    </div>
  </div>
);

export const FishingPin = ({ className }: PinCommonProps) => (
  <div className={clsx("w-[32px] h-[42px]", className)}>
    <img src={EmptyPinImg} className="w-full h-full" />
    <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white p-1">
      <Fishing16SVG color="#562C2C" />
    </div>
  </div>
);

export const CrosshairPin = ({ className }: PinCommonProps) => (
  <div className={clsx("w-[32px] h-[42px]", className)}>
    <img src={EmptyPinImg} className="w-full h-full" />
    <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white p-1">
      <Crosshair16SVG color="#562C2C" />
    </div>
  </div>
);
