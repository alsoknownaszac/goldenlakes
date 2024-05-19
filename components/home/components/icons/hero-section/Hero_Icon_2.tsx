import heroII from "@/assets/icons/hero_icon_2.svg";
import Image from "next/image";

export default function Hero_Icon_2() {
  return (
    <>
      <Image
        className="cursor-pointer hidden lg:hidden xl:block"
        width={170}
        height={150}
        src={heroII}
        alt=""
      />
      <Image
        className="cursor-pointer hidden lg:block xl:hidden"
        width={90}
        height={77}
        src={heroII}
        alt=""
      />
      <Image
        className="cursor-pointer lg:hidden xl:hidden"
        width={75}
        height={64}
        src={heroII}
        alt=""
      />
    </>
  );
}
