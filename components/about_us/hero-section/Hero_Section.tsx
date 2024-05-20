"use client";
import React from "react";
import Hero_Logo from "../../icons_components/icons/Hero_Logo";
import CldImages from "@/components/cloudinary/CldImages";

export default function Hero_Section() {
  return (
    <section
      id="hero"
      className="hero text-white relative h-[609px] w-full xl:h-[833px] px-[21px] lg:px-[34px] xl:px-[88px] pt-[24px] lg:pt-[40px] xl:pt-[37px] pb-[35px] xl:pb-[42px]"
    >
      <CldImages
        className="w-full h-full absolute"
        src="/goldenlakes/memories6_pdzmkx"
        style={{ objectFit: "cover" }}
        priority={true}
        fill
        alt="lineup-img"
      />
      <div className="sm:container lg_0:container xl:container relative h-full w-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="w-[20%]">
            <Hero_Logo />
          </div>
          <div className="lg:w-[55%] xl:w-[37%] hidden lg:block">
            <div className="font-satoshi font-normal lg:text-[13px] xl:text-[15px] text-center lg:leading-[13px] xl:leading-[15px] w-full rounded-[40px] px-[24px] py-[17px] bg-black/[.26] backdrop-blur-md grid grid-cols-4 gap-8">
              <div className="cursor-pointer">Home</div>
              <div className="cursor-pointer">About Us</div>
              <div className="cursor-pointer">Packages</div>
              <div className="cursor-pointer">Shop</div>
            </div>
          </div>
          <div className="w-[20%]">
            <div className="hidden lg:block cursor-pointer ml-auto font-satoshi font-semibold bg-[#EBAF15] lg:text-[13px] xl:text-[15px] text-[#292525] text-center lg:leading-[13px] xl:leading-[15px] w-fit rounded-[40px] px-[24px] py-[14px] hover:border-[4px] hover:border-[#292525] ">
              Request Info
            </div>
            <div className="block lg:hidden cursor-pointer ml-auto">
              <svg
                width="45"
                height="40"
                viewBox="0 0 45 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_228_3521)">
                  <rect
                    x="2"
                    width="40"
                    height="40"
                    rx="10"
                    fill="black"
                    fill-opacity="0.26"
                  />
                  <path
                    d="M27.7527 16.1182C29.1113 16.1182 30.2127 15.0169 30.2127 13.6582C30.2127 12.2996 29.1113 11.1982 27.7527 11.1982C26.3941 11.1982 25.2927 12.2996 25.2927 13.6582C25.2927 15.0169 26.3941 16.1182 27.7527 16.1182Z"
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
                    d="M27.7527 28.4183C29.1113 28.4183 30.2127 27.3169 30.2127 25.9583C30.2127 24.5997 29.1113 23.4983 27.7527 23.4983C26.3941 23.4983 25.2927 24.5997 25.2927 25.9583C25.2927 27.3169 26.3941 28.4183 27.7527 28.4183Z"
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
                    id="filter0_b_228_3521"
                    x="-42.5532"
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
                      result="effect1_backgroundBlur_228_3521"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_228_3521"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex my-auto lg:max-w-[604px] xl:max-w-[768px] mx-auto">
          <span className="text-center text-[40px] lg:text-[48px] xl:text-[64px] leading-[40px] lg:leading-[57.6px] xl:leading-[76.8px] font-display font-bold">
            Experience <span className="text-[#EBAF15]">the perfect</span>{" "}
            getaway with us.
          </span>
        </div>
      </div>
    </section>
  );
}
