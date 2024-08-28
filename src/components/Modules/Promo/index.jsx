import LIST_CONTENT_GRID from "../../../constants/listContentGrid";
import EachUtils from "../../../utils/EachUtils";
import GridLayout from "../../Layouts/GridLayout";
import BrandDesc from "../Elements/BrandDesc";
import BrandSubtitle from "../Elements/BrandSubtitle";
import BrandTitle from "../Elements/BrandTitle";
import BtnBuy from "../Elements/BtnBuy";
import BtnMore from "../Elements/BtnMore";

const Promo = () => {
  return (
    <GridLayout>
      <EachUtils
        of={LIST_CONTENT_GRID}
        render={(item, index) => (
          <div key={index} className="relative h-[580px]">
            <picture>
              <source media="(min-width: 640px)" srcSet={item.img_url} />
              <img
                src={item.img_url_sm}
                alt="image"
                className="absolute object-cover overflow-hidden h-full"
              />
            </picture>
            <div className="absolute w-full flex flex-col justify-center items-center text-center pt-14 px-2">
              {item.id === 5 || item.id === 6 ? (
                <BrandTitle item={item} tc="text-white" />
              ) : (
                <BrandTitle item={item} />
              )}
              {item.series && <BrandSubtitle item={item} tc="text-[#FD7321]" />}
              {item.id === 5 || item.id === 6 ? (
                <BrandDesc item={item} tsz="text-xl" tc="text-white" />
              ) : (
                <BrandDesc item={item} tsz="text-xl" />
              )}
              <div className="flex gap-4 mt-3">
                {item.id === 1 ? (
                  <>
                    <BtnMore bg="bg-black" brc="border-black" />
                    <BtnBuy
                      brc="border-black"
                      hbg="hover:bg-black"
                      tc="text-black"
                    />
                  </>
                ) : item.id === 6 ? (
                  <>
                    <BtnMore
                      bg="bg-white"
                      brc="border-white"
                      tc="text-black"
                      result="Telusuri"
                    />
                    <BtnBuy dsp="hidden" />
                  </>
                ) : (
                  <>
                    <BtnMore />
                    <BtnBuy />
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      />
    </GridLayout>
  );
};

export default Promo;
