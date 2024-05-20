import React from "react";
import CldImages from "@/components/cloudinary/CldImages";

export default function Breath_Away() {
  return (
    <section className="relative">
      <div className="sm:container lg_0:container xl:container px-[16px] lg:px-[64px] xl:px-[88px] py-[35px] lg:pt-[36px] lg:pb-[71px] xl:pt-[129px] xl:pb-[85px] ">
        <div className="flex flex-col xl:flex-row gap-[22px] ">
          <div className=" mx-auto w-[338px] lg:w-[616px] xl:w-50">
            <div className="text-[24px] lg:text-[32px] xl:text-[48px] leading-[28.8px] lg:leading-[48px] xl:leading-[57.6px] font-display font-bold mb-[24px]">
              Let&apos;s take{" "}
              <span className="text-[#EBAF15]">your breath </span> away
            </div>
            <div className="text-[18px] leading-[27px] font-satoshi font-normal ">
              Welcome to Golden Lakes, where unforgettable experiences and
              unparalleled hospitality come together to create that perfect
              getaway for those seeking adventure, relaxation, and
              social-cultural enrichment.
              <br />
              <br />
              Over the years, we&apos;ve grown and evolved, expanding our reach
              to cover a wider range of destinations, each carefully curated to
              offer
              <br />
              <br />
              you the best of what the Nigeria has to offer. We invite you to
              embark on a journey with us – a journey that transcends the
              ordinary and takes you on a path of discovery, connection,
              inspiration, relaxation and rejuvenation.
              <br />
              <br />
              Whether you&apos;re an adventure seeker, a history buff, a foodie,
              or simply looking for a relaxing getaway, Golden Lakes has the
              perfect experience waiting for you.
              <br />
              <br />
              Come explore Nigeria with us and discover the beauty, diversity,
              and wonder that makes this undisputed giant of Africa so
              extraordinary.
            </div>
          </div>
          <div className="mx-auto relative h-[356px] lg:h-[640px] xl:h-[640px] w-[338px] lg:w-[616px]">
            <CldImages
              className="w-full h-full rounded-[40px]"
              src="/goldenlakes/memories10_rbajal"
              style={{ objectFit: "cover" }}
              alt="lineup-img"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
