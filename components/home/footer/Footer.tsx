import Image from "next/image";
import hero_Logo_2 from "@/assets/icons/hero_logo_2.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="contacts">
      <div className="container px-[64px] py-[80px]">
        <div className="flex items-center justify-between mb-[40px] xl:mb-[80px]">
          <div className="w-[50%] xl:w-[30%]">
            <Image
              className="cursor-pointer"
              width={84}
              height={37}
              src={hero_Logo_2}
              alt=""
            />
          </div>
          <div className="lg:w-[40%] xl:w-[37%] hidden xl:block">
            <div className="font-satoshi font-normal lg:text-[13px] xl:text-[15px] text-center lg:leading-[13px] xl:leading-[15px] w-full rounded-[40px] px-[24px] py-[17px] grid grid-cols-4 gap-8">
              <div className="cursor-pointer">Home</div>
              <div className="cursor-pointer">About Us</div>
              <div className="cursor-pointer">Packages</div>
              <div className="cursor-pointer">Shop</div>
            </div>
          </div>
          <div className="w-[50%] xl:w-[30%]">
            <div className="flex items-center justify-end gap-[15px]">
              <FaFacebookF className="w-[20px] h-[18.89px] fill-[#292525]" />
              <FaInstagram className="w-[20px] h-[18.89px] fill-[#292525]" />
              <FaTwitter className="w-[20px] h-[18.89px] fill-[#292525]" />
              <FaLinkedinIn className="w-[20px] h-[18.89px] fill-[#292525]" />
            </div>
          </div>
        </div>
        <hr className="mb-[32px]" />
        <div className="text-center text-[#292525] text-[14px] leading-[21px] font-satoshi font-normal">
          {new Date().getFullYear()} Golden Lakes. All right reserved.
        </div>
      </div>
    </footer>
  );
}
