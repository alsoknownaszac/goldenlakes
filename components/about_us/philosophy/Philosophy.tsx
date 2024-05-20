import CldImages from "@/components/cloudinary/CldImages";
import React from "react";

export default function Philosophy() {
  return (
    <section className="relative ">
      <div className="absolute bottom-0 xl:bottom-[100px] w-screen lg:w-[672px] xl:-left-[10vw] h-[297px]">
        <CldImages
          className="absolute object-cover"
          src="/goldenlakes/golden_lakes_bg_w895dn"
          fill
          alt="lineup-img"
        />
      </div>
      <div className="sm:container lg_0:container xl:container px-[19px] lg:px-[38px] xl:px-[89px] pt-[30px] pb-[53px] lg:pt-[98px] lg:pb-[95px] xl:pt-[88px] xl:pb-[160px]">
        <div className="grid grid-cols-2 gap-[22px]">
          <div className="bg-[#CCEEFA] border border-[#E3E3E3] lg:min-h-[210] rounded-[40px] col-span-3 xl:col-span-1 px-[22px] lg:px-[49px] xl:px-[28px] pt-[37px] pb-[50px] lg:py-[47px]">
            <div className="text-[24px] leading-[28.8px] font-display font-medium mb-[16px] xl:mb-[40px]">
              Our philosophy
            </div>
            <div className="text-[16px] leading-[24px] font-satoshi font-normal">
              At the heart of our company lies a commitment to excellence,
              authenticity, and sustainability.
              <br />
              <br />
              We believe that travel should be more than just ticking off
              landmarks; it should be a way to connect with the world, its
              people, and the environment.
              <br />
              <br />
              Hence, we work tirelessly to create experiences that are not only
              enjoyable but also responsible and respectful of the communities
              and environments we visit.
            </div>
          </div>
          <div className="bg-[#F7FBCB] border border-[#E3E3E3] lg:min-h-[210] rounded-[40px] col-span-3 xl:col-span-1 px-[22px] lg:px-[49px] xl:px-[28px] pt-[37px] pb-[50px] lg:py-[47px]">
            <div className="text-[24px] leading-[28.8px] font-display font-medium mb-[16px] xl:mb-[40px]">
              Our team
            </div>
            <div className="text-[16px] leading-[24px] font-satoshi font-normal">
              Our dedicated team of travel experts, local guides, and
              hospitality professionals is at the core of what we do.
              <br />
              <br />
              With a wealth of knowledge and a passion for sharing the wonders
              of the world, our team members are your trusted companions on your
              journey.
              <br />
              <br />
              From planning your itinerary to ensuring your every need is met
              during your travels, our team is committed to making your
              experience seamless and unforgettable.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
