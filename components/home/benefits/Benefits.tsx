import Image from "next/image";
import golden_lakes_bg from "@/assets/images/golden_lakes_bg.png";
import "@/app/services.css";

export default function Benefits() {
  return (
    <section className="relative">
      <div className="container px-[27px] lg:px-[38px] xl:px-[89px] pt-[51px] pb-[51px] lg:pt-[51px] lg:pb-[116px] xl:pt-[71px] xl:pb-[71px]">
        <div className="grid grid-cols-5 gap-y-[39px] lg:gap-y-[51px] pb-[75px] lg:pb-[120px]">
          <div className="col-span-5 xl:col-span-3">
            <div className="mb-[35px] lg:mb-[44px]">
              <div className="text-[24px] lg:text-[32px] xl:text-[36px] leading-[28.8px] lg:leading-[38.4px] xl:leading-[43.2px] font-display font-medium mb-[15px] lg:mb-[21px]">
                Benefits of choosing{" "}
                <span className="text-[#EBAF15]">choosing</span> us
              </div>
              <div className="max-w-[297px] text-[16px] lg:text-[18px] leading-[22px] lg:leading-[25px] font-satoshi font-normal">
                Delivering luxurious and high-quality experiences is our
                fundamental principle, and we prioritize it in every aspect of
                our operations.
              </div>
            </div>
            <div className="max-w-[315px] lg:max-w-[400px]">
              <ul className="service_list child:pb-[87px] last:child:pb-0">
                <li>
                  <div className="text-[#EBAF15] text-[18px] leading-[25.2px] font-satoshi font-bold mb-[8px]">
                    Best deals
                  </div>
                </li>
                <li>
                  <div className="text-[#EBAF15] text-[18px] leading-[25.2px] font-satoshi font-bold mb-[8px]">
                    Price transparency
                  </div>
                </li>
                <li>
                  <div className="text-[#EBAF15] text-[18px] leading-[25.2px] font-satoshi font-bold mb-[8px]">
                    Travel with confidence
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-5 h-fit xl:col-span-2 ml-auto relative ">
            <div className="w-[185.02px] lg:w-[320px] h-[215.31px] lg:h-[380px] relative right-0 bg-blue-700 rounded-[40px]"></div>
            <div className="w-[200.44px] lg:w-[350px] h-[223.57px] lg:h-[390px] absolute -left-[105px] lg:-left-[255px] -bottom-[75px] lg:-bottom-[120px] bg-red-700 rounded-[40px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
