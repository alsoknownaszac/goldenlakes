import Image from "next/image";
import explore_Destinations from "../images/explore_destinations.png";
import { FaArrowRight } from "react-icons/fa6";
import CldImages from "@/components/cloudinary/CldImages";
import { useState } from "react";

const slides = [
  {
    src: "memories1_z5wlas",
    alt: "Nike Art Gallery - Lagos",
    places: "Nike Art Gallery - Lagos",
    description:
      "Nike art gallery an extensive collection of traditional and contemporary Nigerian art, including Adire, batik, beadwork, and sculptures, the gallery offers visitors a rich cultural experience.",
  },
  {
    src: "memories13_b4oc0p",
    alt: "Jabi Lake - Abuja",
    places: "Jabi Lake - Abuja",
    description:
      "Jabi Lake in Abuja, Nigeria, is a serene oasis offering a range of recreational activities and natural beauty. With its picturesque surroundings and tranquil waters, it provides a perfect escape for relaxation and leisurely walks.",
  },
  {
    src: "memories17_g9mbnf",
    alt: "Coconut Beach - Lagos",
    places: "Coconut Beach - Lagos",
    description:
      "Coconut beach is a good place to enjoy the sunrise and sunset, take a peaceful walk around and create excitement. It is a great place for lovers on a romantic getaway, schools on excursions or field trips, and individual or group tourism.",
  },
  {
    src: "memories16_ipsea5",
    alt: "Jabi Boat Club - Abuja",
    places: "Jabi Boat Club - Abuja",
    description:
      "Jabi Boat Club (JBC), is a family entertainment center designed to offer water based recreational facilities for the people of Abuja and its environs as well as tourists, reaching out to all ages and inclinations.",
  },
  {
    src: "memories2_aznnd1",
    alt: "Olumo rock - Abeokuta",
    places: "Olumo rock - Abeokuta",
    description:
      "Olumo Rock is a mountain in south-western Nigeria. It is located in the city of Abeokuta, Ogun State, and was normally used as a natural fortress during inter-tribal warfare in the 19th century",
  },
  {
    src: "memories19_uwvayb",
    alt: "Lufasi park -  Lagos",
    places: "Lufasi park -  Lagos",
    description:
      "Lufasi (Lekki Urban Forestry and Animal Shelter Initiative) is a pocket of natural paradise",
  },
  {
    src: "memories18_cxczn5",
    alt: "Lekki conversation centre -  Lagos",
    places: "Lekki conversation centre -  Lagos",
    description:
      "Visitors and tourist to the nature park will get to view wildlife ranging from monkeys, to the beautiful peacocks, crocodiles, snakes and other wild animals.",
  },
  {
    src: "memories18_cxczn5",
    alt: "Ushafa Pottery -  Kwarra",
    places: "Ushafa Pottery -  Kwarra",
    description:
      "The Dada pottery community, a congregation of more than 100 women is located at the Okelele quarters in Ilorin East local government, Kwara State. They are the largest concentration of potters in the city",
  },
];

export default function Explore_Destinations() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };
  return (
    <section className="relative">
      {slides.map((item: any, idx: number) => {
        return (
          <div
            key={idx}
            className={`${
              slide !== idx && "hidden"
            } sm:container lg_0:container xl:container px-[16px] lg:px-[38px] xl:px-[88px] py-[34px] lg:pt-[53px] lg:pb-[114px] xl:pt-[106px] xl:pb-[119px]`}
          >
            <div className="text-[24px] lg:text-[32px] xl:text-[36px] leading-[28.8px] lg:leading-[38.4px] xl:leading-[43.2px] font-clash font-medium mb-[30px] lg:mb-[36px]">
              Explore famous <br />
              destination!
            </div>
            <div className="relative h-[410px] lg:h-[295px] xl:h-[559px] max-w-[343px] sm_0:max-w-full lg:max-w-[668px] lg_0:max-w-full xl:max-w-[1269px] ">
              <CldImages
                className="w-full h-full absolute rounded-t-[11px]"
                src={`/goldenlakes/${item.src}`}
                alt={item.alt}
                style={{ objectFit: "cover" }}
                fill
              />

              <div className="absolute w-full bottom-0 p-[15px] lg:px-[26px] lg:py-[17px] xl:px-[49px] xl:py-[28px] backdrop-blur-[2px]">
                <div className="text-white max-w-[303px] lg:max-w-[350px] xl:max-w-[660px] text-[14px] lg:text-[10px] xl:text-[18px] leading-[16.8px] lg:leading-[12px] xl:leading-[22px] font-satoshi font-normal ">
                  {item.description}
                </div>
              </div>
            </div>
            <div className=" flex max-w-[343px] sm_0:max-w-full lg:max-w-[668px] lg_0:max-w-full xl:max-w-[1269px]">
              <div className="bg-[#F8F8F8] w-full px-[14px] lg:px-[26px] xl:px-[49px] py-[15px] lg:py-[10px] xl:py-[20px] text-[16px] lg:text-[14px] xl:text-[26px] leading-[16px] lg:leading-[14px] xl:leading-[26px] font-clash font-medium rounded-bl-[11px]">
                {item.places}
              </div>
              <div
                onClick={nextSlide}
                className="cursor-pointer bg-[#EBAF15] w-[50px] lg:w-[35px] xl:w-[65px] py-[15px] lg:py-[10px] xl:py-[20px] flex items-center justify-center rounded-br-[11px]"
              >
                <FaArrowRight className="text-[12.68px] xl:text-[24px]" />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
