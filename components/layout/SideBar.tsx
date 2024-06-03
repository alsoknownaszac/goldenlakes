import Link from "next/link";
import "../../app/sidebar.css";
import { AiOutlineClose as Close } from "react-icons/ai";
import { PageUrl } from "../constants/pageUrl";
import { useContext } from "react";
import { AppContext } from "../hooks/AppContext.hook";
import { useRouter } from "next/router";
import usePageSize from "../hooks/usePageSize";

export default function SideBar() {
  const navigate = useRouter();

  const url = navigate.asPath;

  const screenWidth = usePageSize();

  const { display, setDisplay }: any = useContext(AppContext);

  return (
    <div
      className={`menuWrapper z-[100] fixed inset-0 ${
        !display.modal || screenWidth > 743 ? "hidden" : "block"
      }  `}
      id="hamBurgerMenu"
    >
      <div
        className="fixed inset-0 bg-[rgba(0,0,0,0.60)] backdrop-blur-[2px]"
        onClick={(e) => {
          e.stopPropagation();
          setDisplay({ ...display, modal: false });
        }}
      />
      <div className="z-[101] animate__animated animate__slideInDown menuBody min-h-[332px] overflow-hidden bg-[rgba(0,0,0,0.70)] backdrop-blur-xl relative text-white rounded-[20px]">
        <div className="px-[26px] py-[17px] flex justify-between items-center mb-[18px]">
          <button className="font-satoshi font-bold text-[18px] leading-[18px]">
            Menu
          </button>
          <button
            id="navMenuClose"
            onClick={() => {
              setDisplay({ ...display, modal: false });
            }}
          >
            <Close size="24px" className="text-white" />
          </button>
        </div>
        <ul className={`px-[22px] pt-[3px] pb-[27.53px]`}>
          {PageUrl.map(
            (title: { link: string; name: string }, index: number) => {
              const lastIndex = PageUrl && PageUrl.length - 1;
              return (
                <li
                  className={`font-satoshi font-normal text-[16px] leading-[16px] px-[8px] py-[6.81px] mb-[21px] ${
                    index !== lastIndex &&
                    `border-b border-[rgba(7,_7,_7,_0.39)]`
                  } ${title.link === url && "bg-[#e9626215] font-medium"} `}
                  key={index}
                >
                  <Link
                    href={
                      title.name === "Packages" ? url + title.link : title.link
                    }
                    passHref={true}
                  >
                    <span
                      onClick={() => setDisplay({ ...display, modal: false })}
                      className="focus:bg-[#e9626215] block"
                    >
                      {title.name}
                    </span>
                  </Link>
                </li>
              );
            }
          )}
          <li>
            <div className="w-full cursor-pointer font-satoshi font-semibold bg-[#EBAF15] text-[15px] text-[#292525] text-center leading-[15px] rounded-[40px] px-[24px] py-[14.5px] hover:border-[4px] hover:border-[#292525] ">
              Request Info
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
