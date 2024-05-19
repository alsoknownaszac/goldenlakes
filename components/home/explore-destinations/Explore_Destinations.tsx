import Image from "next/image";
import explore_Destinations from "@/assets/images/explore_destinations.png";
import { FaArrowRight } from "react-icons/fa6";

export default function Explore_Destinations() {
  return (
    <section className="container">
      <div className="px-[16px] lg:px-[38px] xl:px-[88px] py-[34px] lg:pt-[53px] lg:pb-[114px] xl:pt-[106px] xl:pb-[119px]">
        <div className="text-[24px] lg:text-[32px] xl:text-[36px] leading-[28.8px] lg:leading-[38.4px] xl:leading-[43.2px] font-clash font-medium mb-[30px] lg:mb-[36px]">
          Explore famous <br />
          destination!
        </div>
        <div className="relative h-[410px] lg:h-[295px] xl:h-[559px] max-w-[343px] sm_0:max-w-full lg:max-w-[668px] lg_0:max-w-full xl:max-w-[1269px] ">
          <Image
            className="w-full h-full absolute rounded-t-[11px]"
            src={explore_Destinations}
            style={{ objectFit: "cover" }}
            fill
            alt="lineup-img"
          />
          <div className="absolute w-full bottom-0 p-[15px] lg:px-[26px] lg:py-[17px] xl:px-[49px] xl:py-[28px] backdrop-blur-[2px]">
            <div className="text-white max-w-[303px] lg:max-w-[350px] xl:max-w-[660px] text-[14px] lg:text-[10px] xl:text-[18px] leading-[16.8px] lg:leading-[12px] xl:leading-[22px] font-satoshi font-normal ">
              Nike art gallery an extensive collection of traditional and
              contemporary Nigerian art, including Adire, batik, beadwork, and
              sculptures, the gallery offers visitors a rich cultural
              experience.
            </div>
          </div>
        </div>
        <div className="flex max-w-[343px] sm_0:max-w-full lg:max-w-[668px] lg_0:max-w-full xl:max-w-[1269px]">
          <div className="bg-[#F8F8F8] w-full px-[14px] py-[15px] lg:py-[10px] xl:py-[20px] text-[16px] lg:text-[14px] xl:text-[26px] leading-[16px] lg:leading-[14px] xl:leading-[26px] font-clash font-medium rounded-bl-[11px]">
            Nike Art Gallery - Lagos
          </div>
          <div className="bg-[#EBAF15] w-[50px] lg:w-[35px] xl:w-[65px] py-[15px] lg:py-[10px] xl:py-[20px] flex items-center justify-center rounded-br-[11px]">
            <FaArrowRight className="text-[12.68px] xl:text-[24px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
