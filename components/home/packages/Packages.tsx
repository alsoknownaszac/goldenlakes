import Image from "next/image";
import explore_Destinations from "../../../assets/images/explore_destinations.png";
import hero_Image from "../../../assets/images/hero_Image.png";

export default function Packages() {
  return (
    <section className="relative ">
      <div className="container px-[23px] lg:px-[108px] xl:px-[89px] pt-[55px] pb-[73px] lg:pt-[84px] lg:pb-[84px] xl:pt-[70px] xl:pb-[59px]">
        <div className="mb-[37px] lg:mb-[77px] xl:mb-[75px]">
          <div className="text-center text-[24px] lg:text-[32px] xl:text-[36px] leading-[28.8px] lg:leading-[38.4px] xl:leading-[43.2px] font-display font-medium">
            Our <span className="text-[#EBAF15]">premium</span> packages
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[61px] xl:gap-[20px] xl:pt-[75px]">
          <div className="col-span-3 xl:col-span-1">
            <div className="relative h-[148px] lg:h-[208px] xl:h-[208px] mx-auto max-w-[420px] lg:max-w-[580px] xl:max-w-[414px] ">
              <Image
                className="w-full h-full absolute rounded-t-[40px]"
                src={hero_Image}
                style={{ objectFit: "cover" }}
                fill
                alt="lineup-img"
              />
            </div>
            <div className="bg-[#F8F8F8] border border-[#E3E3E3] px-[10px] lg:px-[26px] xl:px-[10px] pt-[16px] pb-[20px] lg:pb-[2px] flex mx-auto max-w-[420px] lg:max-w-[580px] xl:max-w-[414px] rounded-b-[40px]">
              <div className="bg-white w-full px-[28px] pt-[20px] pb-[30px] rounded-[20px]">
                <div className="text-[20px] lg:text-[24px] leading-[24px] lg:leading-[28.8px] font-display font-medium mb-[14px]">
                  The Obudu mountain resort trip.
                </div>
                <div className="max-w-[315px] lg:max-w-[400px] mb-[18px] lg:mb-[31px] xl:mb-[18px]">
                  <ul className="list-disc list-outside pl-[25px] mb-[22px] child:pb-[15px] last:child:pb-0">
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Airport pickup
                      </div>
                    </li>
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Transportation
                      </div>
                    </li>
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Breakfast & Dinner
                      </div>
                    </li>
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Accommodation
                      </div>
                    </li>
                    <li>
                      <div className="line-clamp-2 text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Tours(Holy Mountain, Canopy <br /> walk, Igaga waterfall
                        etc.)
                      </div>
                    </li>
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Games & fun
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="cursor-pointer font-satoshi font-semibold bg-[#F8F8F8] border border-[#666666] text-[15px] text-[#292525] text-center leading-[15px] rounded-[40px] py-[14.5px] hover:border-[4px] hover:border-[#292525] ">
                  Request Info
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 xl:col-span-1 relative xl:-top-[75px]">
            <div className="relative h-[148px] lg:h-[208px] xl:h-[208px] mx-auto max-w-[420px] lg:max-w-[580px] xl:max-w-[414px] ">
              <Image
                className="w-full h-full absolute rounded-t-[40px]"
                src={explore_Destinations}
                style={{ objectFit: "cover" }}
                fill
                alt="lineup-img"
              />
            </div>
            <div className="bg-[#F8F8F8] border border-[#E3E3E3] px-[10px] lg:px-[26px] xl:px-[10px] pt-[16px] pb-[20px] lg:pb-[2px] flex mx-auto max-w-[420px] lg:max-w-[580px] xl:max-w-[414px] rounded-b-[40px]">
              <div className="bg-white w-full px-[28px] pt-[20px] pb-[30px] rounded-[20px]">
                <div className="text-[20px] lg:text-[24px] leading-[24px] lg:leading-[28.8px] font-display font-medium mb-[14px]">
                  Lagos city tour
                </div>
                <div className="max-w-[315px] lg:max-w-[400px] mb-[18px] lg:mb-[31px] xl:mb-[18px]">
                  <ul className="list-disc list-outside pl-[25px] mb-[22px] child:pb-[15px] last:child:pb-0">
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Airport pickup
                      </div>
                    </li>
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Transportation
                      </div>
                    </li>
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Breakfast & Dinner
                      </div>
                    </li>
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Accommodation
                      </div>
                    </li>
                    <li>
                      <div className="line-clamp-2 text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Tours(nike art gallery, lufasi <br /> park, olumo rock,
                        badagry etc)
                      </div>
                    </li>
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Games & fun
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="cursor-pointer font-satoshi font-semibold bg-[#EBAF15] text-[15px] text-[#292525] text-center leading-[15px] rounded-[40px] py-[14.5px] hover:border-[4px] hover:border-[#292525] ">
                  Request Info
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 xl:col-span-1">
            <div className="relative h-[148px] lg:h-[208px] xl:h-[208px] mx-auto max-w-[420px] lg:max-w-[580px] xl:max-w-[414px] ">
              <Image
                className="w-full h-full absolute rounded-t-[40px]"
                src={hero_Image}
                style={{ objectFit: "cover" }}
                fill
                alt="lineup-img"
              />
            </div>
            <div className="bg-[#F8F8F8] border border-[#E3E3E3] px-[10px] lg:px-[26px] xl:px-[10px] pt-[16px] pb-[20px] lg:pb-[2px] flex mx-auto max-w-[420px] lg:max-w-[580px] xl:max-w-[414px] rounded-b-[40px]">
              <div className="bg-white w-full px-[28px] pt-[20px] pb-[30px] rounded-[20px]">
                <div className="text-[20px] lg:text-[24px] leading-[24px] lg:leading-[28.8px] font-display font-medium mb-[14px]">
                  Abuja city tour
                </div>
                <div className="max-w-[315px] lg:max-w-[400px] mb-[18px] lg:mb-[31px] xl:mb-[18px]">
                  <ul className="list-disc list-outside pl-[25px] mb-[22px] child:pb-[15px] last:child:pb-0">
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Airport pickup
                      </div>
                    </li>
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Transportation
                      </div>
                    </li>
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Breakfast & Dinner
                      </div>
                    </li>
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Accommodation
                      </div>
                    </li>
                    <li>
                      <div className="line-clamp-2 text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Tours(Gurara waterfalls, <br /> Zuma rocks, Abuja
                        central area stc.)
                      </div>
                    </li>
                    <li>
                      <div className="text-[#292525] text-[18px] leading-[25.2px] font-satoshi font-normal">
                        Games & fun
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="cursor-pointer font-satoshi font-semibold bg-[#F8F8F8] border border-[#666666] text-[15px] text-[#292525] text-center leading-[15px] rounded-[40px] py-[14.5px] hover:border-[4px] hover:border-[#292525] ">
                  Request Info
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
