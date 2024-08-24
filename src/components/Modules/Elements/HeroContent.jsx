import BtnMore from "./BtnMore";
import BtnBuy from "./BtnBuy";

import { IoLogoApple } from "react-icons/io";

const HeroContent = ({ index, item, pt = "pt-8" }) => {
  return (
    <div key={index} className="h-[580px] bg-yellow-300 relative">
      <img
        src={item.img_link}
        alt="iPhone"
        className="absolute object-cover h-full overflow-hidden"
      />
      <div
        className={`${pt} absolute text-white flex flex-col justify-center items-center w-full pb-8`}
      >
        <h1 className="font-black text-4xl">
          <span className="flex justify-center items-end">
            {item.logo_brand ? <IoLogoApple size={50} /> : null}
            {item.title}
          </span>
        </h1>
        {item.series && (
          <h3 className="text-lg font-semibold">{item.series}</h3>
        )}
        <p className="whitespace-pre-wrap text-2xl mt-1">{item.desc}</p>
        <div className="flex gap-4 mt-3">
          <BtnMore py="py-2" tsz="text-md" />
          <BtnBuy py="py-2" tsz="text-md" />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
