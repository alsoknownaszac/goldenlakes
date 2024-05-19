import Image from "next/image";
import golden_lakes_bg from "@/assets/images/golden_lakes_bg.png";
import "@/app/services.css";

export default function High_Expectations() {
  return (
    <section className="relative ">
      <div className="absolute top-[22%] lg:top-[20%] xl:top-[35%] w-screen lg:w-[672px] xl:-left-[10vw] h-[297px]">
        <Image
          className="absolute object-cover"
          src={golden_lakes_bg}
          fill
          alt="lineup-img"
        />
      </div>
      <div className="container px-[30px] lg:px-[38px] xl:px-[101px] pt-[27px] pb-[56px] lg:pt-[51px] lg:pb-[40px] xl:pt-[69px] xl:pb-[69px]">
        <div className="grid grid-cols-6 gap-y-[39px] lg:gap-y-[51px]">
          <div className="col-span-6 xl:col-span-3">
            <div className="mb-[33px] lg:mb-[27px] xl:mb-[37px]">
              <div className="text-[24px] lg:text-[32px] xl:text-[36px] leading-[28.8px] lg:leading-[38.4px] xl:leading-[43.2px] font-display font-medium mb-[8px] lg:mb-[21px]">
                Come with{" "}
                <span className="text-[#EBAF15]">
                  high <br className="lg:hidden" /> expectations
                </span>
              </div>
              <div className="max-w-[297px] text-[16px] lg:text-[18px] leading-[22px] lg:leading-[25px] font-satoshi font-normal">
                We`&apos;`ve set the bar high for ourselves. With Golden Lakes,
                you`&apos;`re assured we will exceed your wildest dreams
              </div>
            </div>
            <div className="text-[#292525] text-[20px] leading-[28px] font-display font-medium mb-[21px]">
              Our Services
            </div>
            <div className="flex gap-[20px] max-w-[315px] lg:max-w-[400px]">
              <ul className="service_list child:pb-[38px] last:child:pb-0">
                <li>
                  <div className="text-[#EBAF15] text-[18px] leading-[25.2px] font-satoshi font-bold mb-[8px]">
                    Visa on arrival
                  </div>
                  <div className="text-[#292525] text-[14px] leading-[19.6px] font-satoshi font-normal">
                    Relax knowing that your visa arrangements upon arrival in
                    Nigeria are completely managed by our attentive team.
                  </div>
                </li>
                <li>
                  <div className="text-[#EBAF15] text-[18px] leading-[25.2px] font-satoshi font-bold mb-[8px]">
                    Transportation
                  </div>
                  <div className="line-clamp-4 text-[#292525] text-[14px] leading-[19.6px] font-satoshi font-normal">
                    Your transportation needs in Nigeria are fully catered for
                    from the moment you arrive until your departure,
                    encompassing your entire journey, including sightseeing
                    tours.
                  </div>
                </li>
                <li>
                  <div className="text-[#EBAF15] text-[18px] leading-[25.2px] font-satoshi font-bold mb-[8px]">
                    Accommodation booking
                  </div>
                  <div className="text-[#292525] text-[14px] leading-[19.6px] font-satoshi font-normal">
                    Premium accommodation is provided for guest, with 24/7 power
                    supply, internet, luxurious homes and also a chef
                  </div>
                </li>
                <li>
                  <div className="text-[#EBAF15] text-[18px] leading-[25.2px] font-satoshi font-bold mb-[8px]">
                    Premium tour packages
                  </div>
                  <div className="text-[#292525] text-[14px] leading-[19.6px] font-satoshi font-normal">
                    We provide tour packages that takes you to the most
                    beautiful parts of Nigeria, at an affordable rate.
                  </div>
                </li>
                <li>
                  <div className="text-[#EBAF15] text-[18px] leading-[25.2px] font-satoshi font-bold mb-[8px]">
                    Travel planning
                  </div>
                  <div className="text-[#292525] text-[14px] leading-[19.6px] font-satoshi font-normal">
                    We prepare all travel plans and involve you with the plans
                    to help create a great experience in Nigeria.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[330px] xl:h-fit xl:mt-[30px] col-span-5 xl:col-span-3 ml-auto relative lg:w-[500px] grid grid-cols-12 grid-rows-12 gap-y-[11px] lg:gap-y-[17px] gap-x-[13px] lg:gap-x-[20px]">
            <div className="w-full h-[91.91px] lg:h-[148px] relative left-[10px] col-span-4 row-span-3 col-start-6 bg-red-700 rounded-[8px]"></div>
            <div className="w-full h-[91.91px] lg:h-[148px] relative col-span-4 row-span-3 row-start-4 col-start-5 bg-red-700 rounded-[8px]"></div>
            <div className="w-full h-[91.91px] lg:h-[148px] relative top-[22px] lg:top-[30px] col-span-4 row-span-3 row-start-4 col-start-9 bg-red-700 rounded-[8px]"></div>
            <div className="w-full h-[91.91px] lg:h-[148px] relative -left-[12px] lg:-left-[20px] col-span-4 row-span-3 row-start-7 bg-red-700 rounded-[8px]"></div>
            <div className="w-full h-[91.91px] lg:h-[148px] relative top-[6px] lg:top-[9px] col-span-4 row-span-3 row-start-7 bg-red-700 rounded-[8px]"></div>
            <div className="w-full h-[91.91px] lg:h-[148px] relative top-[35px] lg:top-[50px] col-span-4 row-span-3 row-start-7 bg-red-700 rounded-[8px]"></div>
            <div className="w-full h-[91.91px] lg:h-[148px] relative top-[6px] lg:top-[9px] col-span-4 row-span-3 row-start-10 col-start-3 bg-red-700 rounded-[8px]"></div>
            <div className="w-full h-[91.91px] lg:h-[148px] relative top-[35px] lg:top-[50px] col-span-4 row-span-3 row-start-10 col-start-7 bg-red-700 rounded-[8px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
