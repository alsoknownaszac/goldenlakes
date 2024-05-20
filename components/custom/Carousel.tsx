import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import CldImages from "../cloudinary/CldImages";
import "./Carousel.css";

export const Carousel = ({ data }: any) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  // const prevSlide = () => {
  //   setSlide(slide === 0 ? data.length - 1 : slide - 1);
  // };

  return (
    <div className="carousel mx-auto h-[406px] lg:h-[320px] xl:h-[634px] max-w-[420px] lg:max-w-[680px] xl:max-w-[1280px]">
      {data.map((item: any, idx: number) => {
        return (
          <CldImages
            fill
            key={idx}
            src={`/goldenlakes/${item.src}`}
            alt={item.alt}
            style={{ objectFit: "cover" }}
            className={`${
              slide === idx ? "slide" : "slide slide-hidden"
            } w-full h-full rounded-[20px]`}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right fill-black"
      />
      {/* <span className="indicators">
        {data.map((_: any, idx: any) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span> */}
    </div>
  );
};
