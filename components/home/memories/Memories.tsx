import Image from "next/image";
import { Carousel } from "@/components/custom/Carousel";
import memories_img_1 from "@/assets/images/memories_img_1.png";
import hero_Image from "@/assets/images/hero_image.png";
import explore_destinations from "@/assets/images/explore_destinations.png";
import { FaArrowRight } from "react-icons/fa";

const imgs = {
  slides: [
    {
      src: explore_destinations,
      alt: "Image 1 for carousel",
    },
    {
      src: hero_Image,
      alt: "Image 2 for carousel",
    },
    {
      src: memories_img_1,
      alt: "Image 3 for carousel",
    },
    {
      src: hero_Image,
      alt: "Image 2 for carousel",
    },
  ],
};

export default function Memories() {
  return (
    <section className="relative">
      <div className="container px-[13px] lg:px-[46px] xl:px-[89px] pt-[42px] pb-[58px] lg:pt-[42px] lg:pb-[97px] xl:pt-[77px] xl:pb-[108px]">
        <div className="mb-[27px] lg:mb-[38px] xl:mb-[44px] text-center">
          <div className="text-[24px] lg:text-[32px] xl:text-[36px] leading-[28.8px] lg:leading-[38.4px] xl:leading-[43.2px] font-display font-medium mb-[8px] lg:mb-[21px]">
            <span className="text-[#EBAF15]">Memories</span> with our guest
          </div>
          <div className="text-[16px] leading-[22px] font-satoshi font-normal">
            We strive to create unforgettable memories for <br /> our guests.
          </div>
        </div>
        <Carousel data={imgs.slides} />
      </div>
    </section>
  );
}
