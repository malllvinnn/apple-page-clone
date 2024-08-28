import { useState } from "react";
import {
  COPYRIGHT,
  LANGGANAN,
  LIST_FOOTER,
  RITAIL,
} from "../../../constants/listFooter";
import EachUtils from "../../../utils/EachUtils";
import { motion } from "framer-motion";
import { GrDown, GrUp } from "react-icons/gr";

const Footer = () => {
  const [isOpenIndex, setIsOpenIndex] = useState(null);

  return (
    <footer>
      <div className="bg-[#F5F5F7] px-4 sm:px-6 lg:px-60 py-5 my-10 sm:my-0 transition-all">
        <h3 className="text-xs text-[#626263]">{LANGGANAN}</h3>
        <hr className="bg-[#626263] h-[2px] opacity-50 my-5" />
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
          <EachUtils
            of={LIST_FOOTER}
            render={(item, index) => (
              <div key={index}>
                <h3 className="text-[#2F2F2F] font-semibold">{item.title}</h3>
                {item.list.map((data, index) => (
                  <div key={index} className="flex">
                    <a
                      href={data.link}
                      className="text-[#626263] cursor-pointer hover:brightness-150 my-1"
                    >
                      {data.titleList}
                    </a>
                  </div>
                ))}
              </div>
            )}
          />
        </div>
        <ul className="flex sm:hidden flex-col gap-2">
          <EachUtils
            of={LIST_FOOTER}
            render={(item, index) => (
              <li key={index}>
                <div className="">
                  <button
                    onClick={() =>
                      setIsOpenIndex(isOpenIndex == index ? null : index)
                    }
                    className="w-full flex justify-between items-center border-b-2 border-[#dadada] py-1 text-black text-sm"
                  >
                    <span>{item.title}</span>
                    <motion.div
                      animate={{ rotateX: isOpenIndex == index ? 150 : 0 }}
                    >
                      <GrDown />
                    </motion.div>
                  </button>
                </div>
                <motion.div
                  initial={{ translateY: -10 }}
                  animate={{ translateY: isOpenIndex == index ? 0 : -10 }}
                  className="flex-col pt-4 px-4 text-[#626263] text-sm"
                  style={{
                    display: isOpenIndex == index ? "flex" : "none",
                  }}
                >
                  {item.list.map((item, index) => (
                    <a key={index} href={"#"} className="mb-2">
                      {item.titleList}
                    </a>
                  ))}
                </motion.div>
              </li>
            )}
          />
        </ul>
        <div className="flex gap-1 text-xs mt-4 sm:mt-0">
          <a href="#" className="text-blue-500 underline hover:brightness-150">
            {RITAIL[1]}
          </a>
          <span className="text-[#626263]">{RITAIL[2]}</span>
        </div>
        <hr className="bg-[#626263] h-[2px] opacity-50 my-5" />

        <EachUtils
          of={COPYRIGHT}
          render={(item, index) => (
            <div
              key={index}
              className="flex justify-between sm:items-center text-[#626263] text-xs flex-col-reverse sm:flex-row"
            >
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
                <h3>
                  &copy;{item.year} {item.copy_right}
                </h3>
                <div className="flex gap-2">
                  <a href="#" className="hover:brightness-150">
                    Kebijakan Privasi
                  </a>
                  |
                  <a href="#" className="hover:brightness-150">
                    Ketentuan Pengguna
                  </a>
                  |<a href="#">Legal</a>|
                  <a href="#" className="hover:brightness-150">
                    Peta Situs
                  </a>
                </div>
              </div>
              <a href="#" className="hover:brightness-150 mb-4 sm:mb-0">
                Indonesia
              </a>
            </div>
          )}
        />
      </div>
    </footer>
  );
};

export default Footer;
