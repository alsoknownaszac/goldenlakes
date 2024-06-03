import React, { useContext } from "react";
import Hero_Logo from "../../icons_components/icons/Hero_Logo";
import Hero_Icon_1 from "../../icons_components/icons/Hero_Icon_1";
import Hero_Icon_2 from "../../icons_components/icons/Hero_Icon_2";
import Hero_Icon_4 from "../../icons_components/icons/Hero_Icon_4";
import Hero_Icon_3 from "../../icons_components/icons/Hero_Icon_3";
import Hero_Icon_5 from "../../icons_components/icons/Hero_Icon_5";
import Hero_Icon_6 from "../../icons_components/icons/Hero_Icon_6";
import CldImages from "@/components/cloudinary/CldImages";
import { AppContext } from "@/components/hooks/AppContext.hook";
import Link from "next/link";
import { PageUrl } from "@/components/constants/pageUrl";
import { useRouter } from "next/router";

export default function Hero_Section() {
  const navigate = useRouter();

  const url = navigate.asPath;

  const { display, setDisplay }: any = useContext(AppContext);

  return (
    <section
      id="hero"
      className="hero text-white relative h-[609px] w-full xl:h-[833px] px-[21px] lg:px-[34px] xl:px-[88px] pt-[24px] lg:pt-[40px] xl:pt-[37px] pb-[35px] xl:pb-[42px]"
    >
      <CldImages
        className="w-full h-full absolute"
        src="/goldenlakes/hero_image_mcvl6o"
        style={{ objectFit: "cover" }}
        priority={true}
        fill
        alt="lineup-img"
      />
      <div className="sm:container lg_0:container xl:container relative h-full w-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="w-[20%]">
            <Hero_Logo />
          </div>
          <div className="lg:w-[55%] xl:w-[37%] hidden lg:block">
            <div className="font-satoshi font-normal lg:text-[13px] xl:text-[15px] text-center lg:leading-[13px] xl:leading-[15px] w-full rounded-[40px] px-[24px] py-[17px] bg-black/[.26] backdrop-blur-md grid grid-cols-4 gap-8">
              {PageUrl.map(
                (title: { link: string; name: string }, index: number) => {
                  return (
                    <Link
                      key={index}
                      href={
                        title.name === "Packages"
                          ? url + title.link
                          : title.link
                      }
                      passHref={true}
                    >
                      <span className={`${title.link === url && "font-bold"}`}>
                        {title.name}
                      </span>
                    </Link>
                  );
                }
              )}
            </div>
          </div>
          <div className="w-[20%]">
            <div className="hidden lg:block cursor-pointer ml-auto font-satoshi font-semibold bg-[#EBAF15] lg:text-[13px] xl:text-[15px] text-[#292525] text-center lg:leading-[13px] xl:leading-[15px] w-fit rounded-[40px] px-[24px] py-[14px] hover:border-[4px] hover:border-[#292525] ">
              Request Info
            </div>
            <div
              onClick={() => {
                setDisplay({ ...display, modal: true });
              }}
              className="block lg:hidden cursor-pointer ml-auto"
            >
              <svg
                width="45"
                height="40"
                viewBox="0 0 45 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto"
              >
                <g filter="url(#filter0_b_226_2526)">
                  <rect
                    x="2"
                    width="40"
                    height="40"
                    rx="10"
                    fill="black"
                    fill-opacity="0.26"
                  />
                  <path
                    d="M27.7526 16.1182C29.1112 16.1182 30.2126 15.0169 30.2126 13.6582C30.2126 12.2996 29.1112 11.1982 27.7526 11.1982C26.394 11.1982 25.2926 12.2996 25.2926 13.6582C25.2926 15.0169 26.394 16.1182 27.7526 16.1182Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6727 16.1182C18.0313 16.1182 19.1326 15.0169 19.1326 13.6582C19.1326 12.2996 18.0313 11.1982 16.6727 11.1982C15.314 11.1982 14.2126 12.2996 14.2126 13.6582C14.2126 15.0169 15.314 16.1182 16.6727 16.1182Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.7526 28.4183C29.1112 28.4183 30.2126 27.3169 30.2126 25.9583C30.2126 24.5997 29.1112 23.4983 27.7526 23.4983C26.394 23.4983 25.2926 24.5997 25.2926 25.9583C25.2926 27.3169 26.394 28.4183 27.7526 28.4183Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6727 28.4183C18.0313 28.4183 19.1326 27.3169 19.1326 25.9583C19.1326 24.5997 18.0313 23.4983 16.6727 23.4983C15.314 23.4983 14.2126 24.5997 14.2126 25.9583C14.2126 27.3169 15.314 28.4183 16.6727 28.4183Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_226_2526"
                    x="-42.5533"
                    y="-42.5532"
                    width="129.532"
                    height="125.106"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="21.2766"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_226_2526"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_226_2526"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="font-display mx-auto">
            <div className="flex lg:mb-[4px] xl:mb-[28px] items-start lg:items-end">
              <span className="opacity-60 backdrop-blur-[2px] text-[64px] lg:text-[80px] xl:text-[148px] leading-[50px] lg:leading-[63px] xl:leading-[110.6px] font-bold">
                Explore
              </span>
              <div className="pt-[2px] xl:pb-[10px]">
                <Hero_Icon_1 />
              </div>
            </div>
            <div className="flex items-start mb-[22px] lg:mb-[unset] lg:ml-[46px] xl:ml-[90px]">
              <div className="lg:pt-[20px]">
                <Hero_Icon_2 />
              </div>
              <div className="pl-[8px] lg:pl-[19px] xl:pl-[32px]">
                <div className="opacity-60 backdrop-blur-[2px] lg:mb-[15px] xl:mb-[30px] text-[64px] lg:text-[80px] xl:text-[148px] leading-[50px] lg:leading-[63px] xl:leading-[110.6px] font-bold">
                  Nigeria
                </div>
                <div className="hidden lg:block font-satoshi font-normal text-[12px] xl:text-[14px] w-fit rounded-[100px] px-[15px] py-[4px] xl:py-[7px] bg-black/[.26] backdrop-blur-sm">
                  An unforgettable experience in the biggest part of Africa
                </div>
              </div>
            </div>
            <div className="lg:hidden font-satoshi font-normal text-[12px] w-full rounded-[100px] px-[15px] py-[7px] bg-black/[.26] backdrop-blur-sm">
              An unforgettable experience in the biggest part of Africa
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-10 lg:items-end xl:items-start justify-between gap-y-[50px] lg:gap-[unset]">
            <div className="col-span-4 order-2 lg:order-1 flex items-center gap-[10px] ">
              <Hero_Icon_3 />
              <Hero_Icon_4 />
              <div className="text-[12px] xl:text-[21px] leading-[13px] xl:leading-[22px] font-satoshi font-light">
                Agbokim waterfall, Ikom, <br className="hidden lg:block" />
                Nigeria, West Africa
              </div>
            </div>
            <div className="col-span-10 lg:col-span-2 order-1 lg:order-2 lg:mb-[35px] xl:mb-[unset] xl:mt-[35px]">
              <div className="font-satoshi font-light text-[14px] xl:text-[21px] leading-[15px] xl:leading-[22px] text-center">
                Scroll to explore
              </div>
              <div className="flex justify-center mt-[10px]">
                <div className="flex flex-col items-center">
                  <Hero_Icon_6 />
                  <Hero_Icon_5 />
                </div>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-4 order-3 flex justify-end items-center gap-[14px]">
              <Hero_Icon_3 />
              <div className="font-satoshi font-light">
                <span className="text-[24px] lg:text-[30px] xl:text-[45px] leading-[25px] lg:leading-[31px] xl:leading-[47px]">
                  80
                </span>
                <span className="text-[12px] xl:text-[21px] leading-[13px] xl:leading-[22px] ml-[2px]">
                  Tourist
                </span>
              </div>
              <Hero_Icon_3 />
              <div className="font-satoshi font-light">
                <span className="text-[24px] lg:text-[30px] xl:text-[45px] leading-[25px] lg:leading-[31px] xl:leading-[47px]">
                  20
                </span>
                <span className="text-[12px] xl:text-[21px] leading-[13px] xl:leading-[22px] ml-[2px]">
                  Locations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
