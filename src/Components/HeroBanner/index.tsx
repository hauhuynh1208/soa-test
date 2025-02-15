import { ExploreButton, HeaderNavText } from "../../UI";
import { MountainsSVG, FishingSVG, CrosshairSVG, MenuSVG } from "../../assets";
import ArrowUpRight from "../../assets/ArrowUpRightWhite.svg";
import HeroImg1 from "../../assets/hero-img-1.png";

const Herobanner = () => (
  <div className="flex flex-col justify-between w-screen h-[100vh] relative pb-[80px]">
    <div className="absolute top-0 left-0 w-full h-full">
      <img src={HeroImg1} className="w-full h-full object-cover" />
    </div>
    {/* Header */}
    <div className="flex h-[72px] justify-center items-center border-b border-[#EEEEEE33] bg-[#562C2CB2] backdrop-blur-[7.5px]">
      <div className="w-[1024px] max-sm:w-full max-sm:px-4 flex justify-between items-center">
        <div className="w-[108.75px] max-sm:w-[73px] text-[15px] max-sm:text-[10.5px] leading-[22.5px] max-sm:leading-[15.75px] text-white font-bold">
          LOGO SAMPLE
        </div>
        <div className="flex flex-1 gap-6 ml-[90px] max-sm:hidden">
          <HeaderNavText>Titre 1</HeaderNavText>
          <HeaderNavText>Titre 2</HeaderNavText>
          <HeaderNavText>Titre 3</HeaderNavText>
          <HeaderNavText>Titre 4</HeaderNavText>
        </div>
        <div className="flex items-center gap-4 max-sm:hidden">
          <MountainsSVG />
          <FishingSVG />
          <CrosshairSVG />
          <ExploreButton className="ml-1 px-4 py-[10px]">
            <img src={ArrowUpRight} className="ml-2" />
          </ExploreButton>
        </div>
        <div className="flex items-center gap-4 sm:hidden">
          <MenuSVG />
        </div>
      </div>
    </div>
    <div className="flex w-[1240px] max-sm:w-full mx-auto px-[80px] max-sm:px-4 py-[20px] max-sm:py-6 z-1">
      <div className="flex max-sm:flex-col max-sm:gap-2 flex-1 justify-center items-center">
        <MountainsSVG />
        <span className="sm:hidden text-[14px] leading-4 font-semibold tracking-[.8px] text-white">
          Activité 1
        </span>
      </div>
      <div className="flex max-sm:flex-col max-sm:gap-2 flex-1 justify-center items-center">
        <FishingSVG />
        <span className="sm:hidden text-[14px] leading-4 font-semibold tracking-[.8px] text-white">
          Activité 2
        </span>
      </div>
      <div className="flex max-sm:flex-col max-sm:gap-2 flex-1 justify-center items-center">
        <CrosshairSVG />
        <span className="sm:hidden text-[14px] leading-4 font-semibold tracking-[.8px] text-white">
          Activité 3
        </span>
      </div>
    </div>
  </div>
);

export default Herobanner;
