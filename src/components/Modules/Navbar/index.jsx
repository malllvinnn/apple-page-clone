import EachUtils from "../../../utils/EachUtils";
import Hamburger from "./Hamburger";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { IoLogoApple } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { LIST_NAVBAR } from "../../../constants/listNavbar";
import { useAtom } from "jotai";
import { hamburgerAtom } from "../../../jotai/atom";
import { GrFormNext } from "react-icons/gr";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(null);
  const { y } = useWindowScroll();
  const [isHamburger] = useAtom(hamburgerAtom);
  const [isHover, setIsHover] = useState(null);

  useEffect(() => {
    if (y == 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [y]);

  // const hoverNavbar = () => {
  //   setIsHover(!isHover);
  // };

  return (
    <header className={`fixed z-50 w-full`}>
      <nav className={`relative z-10 text-[#dadada] px-4 md:px-60 md:py-3`}>
        <ul className="flex gap-5 font-helvetica-light text-sm h-auto md:h-6 justify-between items-center relative z-20">
          {isHamburger ? <div></div> : <IoLogoApple size={20} />}
          <EachUtils
            of={LIST_NAVBAR}
            render={(item, index) => (
              <li key={index} className="md:block hidden">
                <a href="#">{item.title}</a>
              </li>
            )}
          />
          <div className="flex justify-center items-center gap-4">
            {isHamburger ? null : <GoSearch size={20} />}
            <Hamburger />
          </div>
        </ul>
      </nav>
      <motion.div
        initial={{ y: -775 }}
        animate={{
          y: isHamburger ? 0 : -775,
        }}
        transition={{ duration: 0.5 }}
        className={`${
          isScroll ? "bg-[#1d1d1f]/80" : "bg-[#1d1d1f]/70"
        } absolute top-0 left-0 w-full flex flex-col pt-12 gap-2 pr-4 pl-12 pb-96 text-[#dadada] font-bold text-3xl backdrop-blur-lg transition-colors`}
      >
        <EachUtils
          of={LIST_NAVBAR}
          render={(item, index) => (
            <a
              key={index}
              href="#"
              onMouseEnter={() => setIsHover(index)}
              onMouseLeave={() => setIsHover(null)}
              className="flex justify-between items-center hover:brightness-150"
            >
              {item.title}
              <GrFormNext
                className={`${
                  isHover === index ? "visible" : "invisible"
                } transition-all`}
              />
            </a>
          )}
        />
      </motion.div>
    </header>
  );
};

export default Navbar;
