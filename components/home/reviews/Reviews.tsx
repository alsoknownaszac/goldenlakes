import Image from "next/image";
import explore_Destinations from "@/assets/images/explore_destinations.png";
import hero_Image from "@/assets/images/hero_Image.png";
import ReviewsStar from "../components/reviewIcon/ReviewsStar";

export default function Reviews() {
  return (
    <section className="relative">
      <div className="container px-[23px] lg:px-[42px] xl:px-[64px] pt-[43px] pb-[50px] lg:pt-[82px] lg:pb-[105px] xl:pt-[82px] xl:pb-[82px]">
        <div className="mb-[48px] lg:mb-[74px] xl:mb-[60px]">
          <div className="text-center text-[24px] lg:text-[32px] xl:text-[36px] leading-[28.8px] lg:leading-[38.4px] xl:leading-[43.2px] font-display font-medium">
            Don&apos;t take our words for it, read{" "}
            <br className="hidden lg:block" /> what our{" "}
            <span className="text-[#EBAF15]">guest</span> has said.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[32px]">
          <div className="col-span-3 xl:col-span-1">
            <div className="bg-[#F8F8F8] border border-[#666666] p-[32px] mx-auto max-w-[420px] lg:max-w-[700px] rounded-[40px]">
              <div className="mb-[24px]">
                <ReviewsStar />
              </div>
              <div className="">
                <p className="line-clamp-6 text-[#292525] text-[16px] lg:text-[18px] leading-[27px] font-satoshi font-normal mb-[25px]">
                  The experience was great it was lovely to see how different
                  cultures live together and also see life from a whole new
                  perspective… My host Golden Lakes Getaways really gave me a
                  five star experience… I thoroughly enjoyed my time in Nigeria.
                </p>
              </div>

              <div className="flex gap-[8px] items-center">
                <div className="w-[56px] h-[56px] rounded-full bg-red-700"></div>
                <div className="text-[#292525] text-[16px] leading-[24px] font-display font-medium">
                  Miranda, BC, Canada
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 xl:col-span-1">
            <div className="bg-[#F8F8F8] border border-[#666666] p-[32px] mx-auto max-w-[420px] lg:max-w-[700px] xl:max-w-[414px] rounded-[40px]">
              <div className="mb-[24px]">
                <ReviewsStar />
              </div>
              <div className="">
                <p className="line-clamp-6 text-[#292525] text-[16px] lg:text-[18px] leading-[27px] font-satoshi font-normal mb-[25px]">
                  I choose Nigeria because it came highly recommended from a
                  friend because of the great time and experience she had with
                  golden Lakes friendly service wonderful opportunity to see
                  some fantastic sites. I was very impressed with Golden Lakes.
                  It was an experience that was life changing for a wonderful
                  opportunity to see beauty beyond my expectation. I definitely
                  would choose Gold Lakes because of their knowledge and
                  friendly service 5 start accommodations and convenient way to
                  have an all exclusive experience.
                </p>
              </div>

              <div className="flex gap-[8px] items-center">
                <div className="w-[56px] h-[56px] rounded-full bg-red-700"></div>
                <div className="text-[#292525] text-[16px] leading-[24px] font-display font-medium">
                  Steffani Ann Mejia - California USA
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 xl:col-span-1">
            <div className="bg-[#F8F8F8] border border-[#666666] p-[32px] mx-auto max-w-[420px] lg:max-w-[700px] xl:max-w-[414px] rounded-[40px]">
              <div className="mb-[24px]">
                <ReviewsStar />
              </div>
              <div className="">
                <p className="line-clamp-6 text-[#292525] text-[16px] lg:text-[18px] leading-[27px] font-satoshi font-normal mb-[25px]">
                  My experience was beautiful more than I expected. We went on
                  different tours, lots of beautiful scenery we even went to an
                  African food festival. Golden Lakes took care of me like I was
                  part of their family from when I arrived, to when I departed.
                  They took care of logistics, breakfast and dinner, outings and
                  the accommodations were beautiful and comfortable. I would
                  love to visit Nigeria again as well as some other countries in
                  Africa. I will book with Golden Lakes every time they were
                  professional and made the trip and experience a memorable one.
                </p>
              </div>

              <div className="flex gap-[8px] items-center">
                <div className="w-[56px] h-[56px] rounded-full bg-red-700"></div>
                <div className="text-[#292525] text-[16px] leading-[24px] font-display font-medium">
                  Morgan Bullock
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
