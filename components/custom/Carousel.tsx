import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import CldImages from "../cloudinary/CldImages";
// import "./Carousel.css";

export const Carousel = ({ data }: any) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  // const prevSlide = () => {
  //   setSlide(slide === 0 ? data.length - 1 : slide - 1);
  // };

  return (
    <div className="carousel . relative flex justify-center items-center . mx-auto h-[406px] lg:h-[320px] xl:h-[634px] max-w-[420px] lg:max-w-[680px] xl:max-w-[1280px]">
      {data.map((item: any, idx: number) => {
        return (
          <CldImages
            fill
            key={idx}
            src={`/goldenlakes/${item.src}`}
            alt={item.alt}
            style={{ objectFit: "cover" }}
            className={`${
              slide === idx
                ? "slide . shadow-[0px_0px_7px_#666]"
                : "slide . shadow-[0px_0px_7px_#666] . slide-hidden . hidden"
            } w-full h-full rounded-[20px]`}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow . absolute w-8 h-8 text-[white] bottom-[6%] hover:cursor-pointer arrow-right right-[6%] drop-shadow-[0px_0px_5px_#555] fill-black"
      />
      {/* <span className="indicators . flex absolute bottom-4">
        {data.map((_: any, idx: any) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator . bg-[white] h-2 w-2 shadow-[0px_0px_5px_#555] cursor-pointer mx-[0.2rem] my-0 rounded-[100%] border-[none]" : "indicator . bg-[white] h-2 w-2 shadow-[0px_0px_5px_#555] cursor-pointer mx-[0.2rem] my-0 rounded-[100%] border-[none] . indicator-inactive . bg-[grey]"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span> */}
    </div>
  );
};
