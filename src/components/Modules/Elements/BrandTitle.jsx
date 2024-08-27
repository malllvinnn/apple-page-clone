import { IoLogoApple } from "react-icons/io";

const BrandTitle = ({ item, tc = "text-black" }) => {
  return (
    <h1 className={`${tc} font-bold text-5xl font-helvetica-bold`}>
      <span className="flex justify-center items-end">
        {item.logo_brand ? <IoLogoApple size={50} /> : null}
        {item.title}
      </span>
    </h1>
  );
};

export default BrandTitle;
