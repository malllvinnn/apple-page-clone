import EachUtils from "../../../utils/EachUtils";

import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { IoLogoApple } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { LIST_NAVBAR } from "../../../constants/listNavbar";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(null);
  const { y } = useWindowScroll();

  useEffect(() => {
    if (y == 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [y]);

  return (
    <header className="fixed z-50 w-full">
      <nav
        className={`${
          isScroll ? "bg-opacity-80" : "bg-opacity-70"
        } bg-[#1D1D1F] text-white px-60 py-3 backdrop-blur-lg`}
      >
        <ul className="flex gap-5 font-helvetica-light text-sm h-6 justify-between items-center">
          <IoLogoApple size={20} />
          <EachUtils
            of={LIST_NAVBAR}
            render={(item, index) => (
              <li key={index}>
                <a href="/">{item.title}</a>
              </li>
            )}
          />
          <GoSearch size={20} />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
