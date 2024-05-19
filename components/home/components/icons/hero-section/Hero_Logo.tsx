import Image from "next/image";
import hero_Logo from "@/assets/icons/hero_logo.svg";

export default function Hero_Logo() {
  return (
    <>
      <Image
        className="cursor-pointer hidden lg:hidden xl:block"
        width={146}
        height={62}
        src={hero_Logo}
        alt=""
      />
      <Image
        className="cursor-pointer hidden lg:block xl:hidden"
        width={102}
        height={44}
        src={hero_Logo}
        alt=""
      />
      <Image
        className="cursor-pointer lg:hidden xl:hidden"
        width={82}
        height={36}
        src={hero_Logo}
        alt=""
      />
    </>
  );
}
