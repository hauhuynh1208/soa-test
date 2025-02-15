import {
  ActivityButton,
  HorizontalDivider,
  MountainPin,
  FishingPin,
  CrosshairPin,
} from "../../UI";
import { CrosshairSVG, FishingSVG, MountainsSVG } from "../../assets";
import bgImg from "../../assets/shutter-rock.png";
import map from "../../assets/map.png";
import emplacementLogo from "../../assets/emplacement-logo.png";

const MapSection = () => (
  <div className="bg-[#FFF6F4]">
    <div
      className="flex flex-col gap-6 max-sm:gap-[20px] w-[1240px] max-sm:w-full mx-auto py-[60px] max-sm:py-8 max-sm:px-4 "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-4 max-sm:gap-[20px] justify-center items-center">
        <div className="relative flex w-full justify-center items-center">
          <HorizontalDivider className="absolute max-sm:hidden" />
          <span className="text-[52px] max-sm:text-[24px] leading-[60px] max-sm:leading-[36px] font-semibold text-[#F2542D] px-10 z-1 sm:bg-[#FFF6F4]">
            Titre Bloc 2
          </span>
        </div>
        <div className="flex max-sm:flex-col justify-center items-center gap-[20px] max-sm:gap-2">
          <div className="flex justify-center items-center gap-[20px] max-sm:gap-2">
            <ActivityButton>
              <MountainsSVG color="#562C2C" />
              Activité 1
            </ActivityButton>
            <ActivityButton>
              <FishingSVG color="#562C2C" />
              Activité 2
            </ActivityButton>
          </div>
          <ActivityButton>
            <CrosshairSVG color="#562C2C" />
            Activité 2
          </ActivityButton>
        </div>
      </div>

      <div className="flex w-full h-[698px] gap-4 justify-between items-center relative">
        <div className="absolute top-4 left-4 z-[9] flex gap-1 rounded-[8px] px-[10px] py-1 items-center justify-center bg-[#FFFFFF99]">
          <img src={emplacementLogo} />
          <span
            className="text-[20px] leading-[20px] text-[#562C2C] font-medium"
            style={{ boxShadow: "0px 0px 8px 0px #0000001A" }}
          >
            Emplacement
          </span>
        </div>
        <MountainPin className="absolute z-[8] top-[261px] left-[409px] max-sm:left-[76px]" />
        <FishingPin className="absolute z-[8] top-[388px] max-sm:top-[261px] left-[385px] max-sm:left-[256px]" />
        <CrosshairPin className="absolute z-[8] top-[318px] max-sm:top-[388px] left-[620px] max-sm:left-[36px]" />
        <div className="w-full h-full absolute z-[1]">
          <img
            src={map}
            className="w-full h-full rounded-[20px] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
);

export default MapSection;
