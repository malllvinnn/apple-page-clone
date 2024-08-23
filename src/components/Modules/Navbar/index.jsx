import EachUtils from "../../../utils/EachUtils";

import { IoLogoApple } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { LIST_NAVBAR } from "../../../constants/listNavbar";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-[#1D1D1F] text-white px-60 py-3">
        <ul className="flex gap-5 font-helvetica text-sm h-7 justify-between items-center">
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
