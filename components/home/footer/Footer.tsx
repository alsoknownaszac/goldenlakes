import Image from "next/image";
import hero_Logo_Footer from "../../../assets/icons/hero_logo_footer.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import Link from "next/link";
import { PageUrl } from "@/components/constants/pageUrl";
import { useRouter } from "next/router";

export default function Footer() {
  const navigate = useRouter();

  const url = navigate.asPath;

  return (
    <footer id="contacts">
      <div className="sm:container lg_0:container xl:container px-[64px] py-[80px]">
        <div className="flex items-center justify-between mb-[40px] xl:mb-[80px]">
          <div className="w-[50%] xl:w-[30%]">
            <Image
              className="cursor-pointer"
              width={84}
              height={37}
              src={hero_Logo_Footer}
              alt=""
            />
          </div>
          <div className="lg:w-[40%] xl:w-[37%] hidden xl:block">
            <div className="font-satoshi font-normal lg:text-[13px] xl:text-[15px] text-center lg:leading-[13px] xl:leading-[15px] w-full rounded-[40px] px-[24px] py-[17px] grid grid-cols-4 gap-8">
              {PageUrl.map(
                (title: { link: string; name: string }, index: number) => {
                  return (
                    <Link
                      key={index}
                      href={
                        title.name === "Packages" &&
                        url.split("/")[1] === "shop"
                          ? "/" + title.link
                          : title.name === "Packages"
                          ? url + title.link
                          : title.link
                      }
                      passHref={true}
                    >
                      <span className={`${title.link === url && "font-bold"}`}>
                        {title.name}
                      </span>
                    </Link>
                  );
                }
              )}
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
