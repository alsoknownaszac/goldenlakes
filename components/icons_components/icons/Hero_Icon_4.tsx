import Image from "next/image";
import heroIV from "../../../assets/icons/hero_icon_4.svg";

export default function Hero_Icon_4() {
  return (
    <>
      <Image
        className="cursor-pointer hidden lg:hidden xl:block"
        width={50}
        height={34}
        src={heroIV}
        alt=""
      />
      <Image
        className="cursor-pointer hidden lg:block xl:hidden"
        width={40}
        height={28}
        src={heroIV}
        alt=""
      />
      <Image
        className="cursor-pointer lg:hidden xl:hidden"
        width={24}
        height={16}
        src={heroIV}
        alt=""
      />
    </>
  );
}
