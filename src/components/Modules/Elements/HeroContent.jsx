import BtnMore from "./BtnMore";
import BtnBuy from "./BtnBuy";
import BrandTitle from "./BrandTitle";
import BrandSubtitle from "./BrandSubtitle";
import BrandDesc from "./BrandDesc";

const HeroContent = ({ index, item, pt = "pt-8" }) => {
  return (
    <div key={index} className="h-[550px] sm:h-[580px] relative">
      <picture>
        <source media="(min-width: 640px)" srcSet={item.img_link} />
        <img
          src={item.img_link_sm}
          alt="iPhone"
          className="absolute object-cover h-full overflow-hidden"
        />
      </picture>
      <div
        className={`${pt} absolute text-white flex flex-col justify-center items-center w-full pb-8 px-2`}
      >
        <BrandTitle item={item} tc="text-white" />
        {item.series && <BrandSubtitle item={item} />}
        <BrandDesc item={item} tc="text-white" />
        <div className="flex gap-4 mt-3">
          <BtnMore py="py-2" tsz="text-md" />
          {item.id === 1 ? (
            <BtnBuy py="py-2" tsz="text-md" result="Beli iPhone" />
          ) : (
            <BtnBuy py="py-2" tsz="text-md" />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
