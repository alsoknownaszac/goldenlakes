import CldImages from "@/components/cloudinary/CldImages";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const team_list = [
  {
    name: "Daniel Unuovorhaye",
    imageUrl: "team1_lzgl6e",
    info: "Tour Director (Abuja)",
  },
  {
    name: "Goodnews Ledego",
    imageUrl: "team2_fnk5aw",
    info: "Tour Director (Lagos)",
  },
  {
    name: "Promise Yoroh",
    imageUrl: "team3_gg2bi4",
    info: "Travel Planner",
  },
  {
    name: "Abigail Aghaibie",
    imageUrl: "team4_lj24qr",
    info: "Accommodation Planner",
  },
];

export default function Team() {
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
      <div className="sm:container lg_0:container xl:container px-[40px] lg:px-[61px] xl:px-[89px] pt-[48px] pb-[33px] lg:pt-[58px] lg:pb-[61px]">
        <div className="max-w-[320px] lg:max-w-[680px] mx-auto text-center text-[24px] lg:text-[36px] leading-[31.2px] lg:leading-[46.8px] font-display font-bold mb-[35px] lg:mb-[69px]">
          Meet the team that is dedicated to creating the{" "}
          <span className="text-[#EBAF15]">best experience</span> for you.
        </div>
        <div className="grid grid-cols-4 gap-[32px] xl:gap-[26px] max-w-[320px] lg:max-w-[680px] xl:max-w-[unset] mx-auto">
          {team_list.map((items: any, _idx: any) => {
            return (
              <div
                key={items.imageUrl}
                className="col-span-4 lg:col-span-2 xl:col-span-1"
              >
                <div className="relative h-[296px] max-w-[296px] mb-[24px]">
                  <CldImages
                    className="w-full h-full rounded-[40px]"
                    src={`/goldenlakes/${items.imageUrl}`}
                    style={{ objectFit: "cover" }}
                    alt="lineup-img"
                    fill
                  />
                </div>
                <div className="text-[20px] leading-[30px] font-display font-medium ">
                  {items.name}
                </div>
                <div className="text-[18px] leading-[27px] font-satoshi font-normal mb-[24px]">
                  {items.info}
                </div>
                <div className="flex items-center gap-[15px]">
                  <FaTwitter className="w-[18px] h-[15.3px] fill-[#292525]" />
                  <FaFacebookF className="w-[18px] h-[15.3px] fill-[#292525]" />
                  <FaInstagram className="w-[18px] h-[15.3px] fill-[#292525]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
