import Image from "next/image";
import heroIII from "../../../assets/icons/hero_icon_3.svg";

export default function Hero_Icon_3() {
  return (
    <>
      <Image
        className="cursor-pointer hidden lg:hidden xl:block"
        width={4}
        height={57}
        src={heroIII}
        alt=""
      />
      <Image
        className="cursor-pointer hidden lg:block xl:hidden"
        width={2.51}
        height={35.25}
        src={heroIII}
        alt=""
      />
      <Image
        className="cursor-pointer lg:hidden xl:hidden"
        width={2}
        height={27}
        src={heroIII}
        alt=""
      />
    </>
  );
}
