import Image from "next/image";
import golden_lakes_bg_2 from "../images/golden_lakes_bg_2.png";

export default function Call_To_Action() {
  return (
    <section className="relative bg-[#0C4B48]">
      <div className="absolute bottom-0 w-screen lg:w-[672px] xl:left-[5vw] h-[297px]">
        <Image
          className="absolute object-cover"
          src={golden_lakes_bg_2}
          fill
          alt="lineup-img"
        />
      </div>
      <div className="container px-[25.5px] lg:px-0 lg:mx-auto max-w-[364px] lg:max-w-[482px] xl:max-w-[541px] pt-[40px] pb-[43px] lg:pt-[60px] lg:pb-[60px] xl:pt-[58px] xl:pb-[58px]">
        <div className="mb-[30px] text-center">
          <div className="text-[24px] text-[#EBAF15] lg:text-[32px] xl:text-[36px] leading-[28.8px] lg:leading-[44.8px] xl:leading-[54.4px] font-display font-medium mb-[16px]">
            Encounter Golden <br className="lg:hidden" /> Memories
          </div>
          <div className="text-white text-[16px] leading-[22px] font-satoshi font-normal">
            Are you ready to explore the mesmerizing, luxuriant and natural
            landscapes, sights and sounds of the giant of Africa?
          </div>
        </div>
        <div className="cursor-pointer mx-auto font-satoshi font-semibold bg-[#EBAF15] text-[15px] text-[#292525] text-center leading-[15px] lg:w-fit rounded-[40px] lg:px-[111px] py-[14.5px] hover:border-[4px] hover:border-[#292525] ">
          Yes, I am ready
        </div>
      </div>
    </section>
  );
}
