export const ExploreCard = ({ imgSrc }) => (
  <div className="flex flex-col gap-6">
    <div className="w-[340px] h-[340px]">
      <img src={imgSrc} className="w-full h-full object-cover rounded-[8px]" />
    </div>
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="text-[20px] leading-[30px] font-medium text-[#F2542D]">
          Case title
        </span>
        <span className="text-[28px] leading-[32px] font-medium text-[#222222]">
          Case sous-titre
        </span>
      </div>
      <div className="ml-2 border-l-[0.5px] border-[#BBBBBB]">
        <span className="pl-4 line-clamp-3 text-[18px] leading-6 text-[#562C2CCC]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
      </div>
    </div>
  </div>
);
