"use client";

import { CldImage as CldImageDefault, CldImageProps } from "next-cloudinary";

const normalizeSrc = (src: any) => (src[0] === "/" ? src.slice(1) : src);

export function cloudinaryLoader({ src, width, quality }: any) {
  const params = [
    "f_auto",
    "c_limit",
    "w_" + width,
    "q_" + (quality || "auto"),
  ];
  return `https://res.cloudinary.com/${
    process.env.CLOUDINARY_CLOUD_NAME
  }/image/upload/${params.join(",")}/${normalizeSrc(src)}`;
}

const CldImages = (props: CldImageProps) => {
  return <CldImageDefault loader={cloudinaryLoader} {...props} />;
};

export default CldImages;
