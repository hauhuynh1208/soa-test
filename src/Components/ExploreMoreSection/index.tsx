import ExImg1 from "../../assets/explore-1.png";
import ExImg2 from "../../assets/explore-2.png";
import ExImg3 from "../../assets/explore-3.png";
import ExImg4 from "../../assets/explore-4.png";
import { ExploreCard } from "./ExploreCard";

const ExploreMoreSection = () => (
  <div className="flex flex-col gap-[35px] max-sm:gap-4 w-[1240px] max-sm:w-full mx-auto max-sm:px-4">
    <div className="flex justify-between max-sm:justify-center items-end">
      <span className="text-[48px] max-sm:text-[24px] leading-[60px] max-sm:leading-[36px] font-semibold text-[#F2542D]">
        Titre Bloc 1
      </span>
      <div className="flex gap-1 items-center max-sm:hidden">
        <span className="text-[20px] leading-[30px] text-[#666666]">
          En savoir plus
        </span>
        <i className="icon-arrow-right text-[#666666]" />
      </div>
    </div>

    <div className="flex pl-[105px] max-sm:pl-0 pb-[60px] max-sm:pb-0 gap-[56px] w-[100vw] overflow-x-scroll">
      <ExploreCard imgSrc={ExImg1} />
      <ExploreCard imgSrc={ExImg2} />
      <ExploreCard imgSrc={ExImg3} />
      <ExploreCard imgSrc={ExImg4} />
    </div>
    <div className="sm:hidden mt-2 pb-8 w-full flex justify-center items-center">
      <div className="w-[343px] px-[12px] py-2 flex justify-center items-center gap-2 bg-[#F2542D] rounded-[100px]">
        <span className="text-[16px] leading-6 font-medium text-white">
          En savoir plus
        </span>
        <i className="icon-arrow-right before:text-white text-[24px]" />
      </div>
    </div>
  </div>
);

export default ExploreMoreSection;
