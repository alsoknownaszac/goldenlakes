import Image from "next/image";
import golden_lakes_bg from "../../../assets/images/golden_lakes_bg.png";

export default function Visit_Nigeria() {
  return (
    <section className="relative ">
      <div className="absolute bottom-0 w-screen lg:w-[672px] xl:-left-[10vw] h-[297px]">
        <Image
          className="absolute object-cover"
          src={golden_lakes_bg}
          fill
          alt="lineup-img"
        />
      </div>
      <div className="container px-[19px] lg:px-[38px] xl:px-[89px] pt-[30px] pb-[53px] lg:pt-[98px] lg:pb-[95px] xl:pt-[88px] xl:pb-[160px]">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center max-w-[380px] mx-auto lg:mx-[unset] lg:max-w-[unset] mb-[35px] lg:mb-[56px] xl:mb-[64px]">
          <div className="text-[24px] lg:text-[32px] xl:text-[36px] leading-[28.8px] lg:leading-[38.4px] xl:leading-[43.2px] font-display font-medium mb-[24px] lg:mb-[unset]">
            Why <span className="text-[#EBAF15]">visit Nigeria</span>
          </div>
          <div className="cursor-pointer font-satoshi font-semibold bg-[#EBAF15] text-[15px] text-[#292525] text-center leading-[15px] lg:w-fit rounded-[40px] lg:px-[111px] py-[14.5px] hover:border-[4px] hover:border-[#292525] ">
            Request Info
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[22px]">
          <div className="bg-[#CCEEFA] border border-[#E3E3E3] lg:min-h-[210] rounded-[20px] col-span-3 xl:col-span-1 px-[22px] lg:px-[49px] xl:px-[28px] pt-[37px] pb-[50px] lg:py-[47px]">
            <div className="text-[24px] leading-[28.8px] font-display font-medium mb-[16px] xl:mb-[40px]">
              Experience our rich cultural heritage
            </div>
            <div className="text-[18px] leading-[25.2px] font-satoshi font-normal lg:line-clamp-2 xl:line-clamp-[unset]">
              Experience the diverse tapestry of cultures, languages, and
              traditions, with over 250 ethnic groups,
            </div>
          </div>
          <div className="bg-[#FEEEC7] border border-[#E3E3E3] lg:min-h-[210] rounded-[20px] col-span-3 xl:col-span-1 px-[22px] lg:px-[49px] xl:px-[28px] pt-[37px] pb-[50px] lg:py-[47px]">
            <div className="text-[24px] leading-[28.8px] font-display font-medium mb-[16px] xl:mb-[40px]">
              Explore natural wonders
            </div>
            <div className="text-[18px] leading-[25.2px] font-satoshi font-normal lg:line-clamp-2 xl:line-clamp-[unset]">
              Nigeria is home to a wealth of natural wonders. Nature lovers can
              explore lush rainforests, cascading waterfalls, mountains and
              exotic wildlife
            </div>
          </div>
          <div className="bg-[#F7FBCB] border border-[#E3E3E3] lg:min-h-[210] rounded-[20px] col-span-3 xl:col-span-1 px-[22px] lg:px-[49px] xl:px-[28px] pt-[37px] pb-[50px] lg:py-[47px]">
            <div className="text-[24px] leading-[28.8px] font-display font-medium mb-[16px] xl:mb-[40px]">
              Taste our diverse culinary dishs
            </div>
            <div className="text-[18px] leading-[25.2px] font-satoshi font-normal lg:line-clamp-2 xl:line-clamp-[unset]">
              Nigeria&apos;s cuisine is incredibly diverse, reflecting the
              country&apos;s numerous ethnic groups and cultural influences
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
