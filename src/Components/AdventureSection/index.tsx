import { HorizontalDivider } from "../../UI";
import HuntingImg1 from "../../assets/hunting-card-1.png";
import HuntingImg2 from "../../assets/hunting-card-2.png";
import HuntingImg3 from "../../assets/hunting-card-3.png";
import { HuntingCard } from "./HuntingCard";

const AdventureSection = () => (
  <div className="flex flex-col gap-[40px] max-sm:gap-[20px] w-[1240px] max-sm:w-full mx-auto max-sm:px-4">
    <div className="flex flex-col gap-4 max-sm:gap-1 justify-center items-center">
      <div className="relative flex w-full justify-center items-center">
        <HorizontalDivider className="absolute max-sm:hidden" />
        <span className="text-[52px] max-sm:text-[24px] leading-[60px] max-sm:leading-[36px] font-semibold text-[#F2542D] px-10 z-1 bg-white">
          Titre Bloc 1
        </span>
      </div>
      <div className="text-[24px] max-sm:text-[14px] leading-[30px] max-sm:leading-[21px] text-[#562C2C] max-sm:text-[#562C2CCC] tracking-[0.25px] max-sm:tracking-normal">
        Sous-titre Bloc 1
      </div>
    </div>

    <div className="flex max-sm:flex-col gap-4 max-sm:gap-6 justify-between items-center">
      <HuntingCard
        imgSrc={HuntingImg3}
        cls={{
          containerClassName: "sm:mt-[45px]",
        }}
        content="Chaque sentier vous conduit à des panoramas époustouflants, chaque instant devient une aventure, chaque rencontre vous promet un so uvenir marquant. Avec MITIK, le tourisme d’aventure allie nature brute et confort raffiné à toutes les saisons. Randonnée, canoë, observation de la faune, rencontres culturelles, exploration en montagne, chaque escapade est une immersion inoubliable dans les grands espaces canadiens. "
        btnText="Forfait 1"
      />
      <HuntingCard
        imgSrc={HuntingImg2}
        content="Chez BASIC, la pêche est une alliance entre passion et respect. Imaginez des lacs paisibles et des rivières exclusives, des guides experts et des pratiques durables, le tout au cœur de territoires immenses. Chaque prise devient un moment de fierté mais surtout inoubliable. MITIK vous propose une panoplie d’expériences de pêche tant sur lacs sauvages que les rivières mythiques dans le Nord du Québec tout comme les Hautes-Laurentides. Ce que nos sit es vous proposent ? Pêche à la truite mouchetée et grise, au doré jaune et au brochet, au grand corégone, au saumon de l’Atlantique et ouananiche, ainsi que l’omble chevalier."
        btnText="Forfait 2"
      />
      <HuntingCard
        imgSrc={HuntingImg1}
        cls={{
          containerClassName: "sm:mt-[45px]",
        }}
        content="BASIC vous guide à travers des territoires authentiques, où la chasse est une quête de respect et de sens. Accompagné par des experts passionnés, découvrez plusieurs types d’expériences de chasse où l’essentiel réside dans la connexion avec la nature, une saine gestion des territoires et de leurs habitats. Ours noir, orignal, cerf de Virginie (chevreuil), petits gibiers sont au menu et ce, tant au sein de séjours de chasse traditionnel que lors d’expériences uniques en symbiose avec l’environnement et les traditions millénaires. "
        btnText="Forfait 3"
      />
    </div>
  </div>
);

export default AdventureSection;
