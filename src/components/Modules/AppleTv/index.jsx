import EachUtils from "../../../utils/EachUtils";
import BtnMore from "../Elements/BtnMore";

import { useState } from "react";
import { LIST_CONTENT_CARAOUSEL } from "../../../constants/listContentCarousel";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const AppleTv = () => {
  const [isSlide, setIsSlide] = useState(0);

  const handlePrev = () => {
    setIsSlide((prev) =>
      prev === 0 ? LIST_CONTENT_CARAOUSEL.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIsSlide((next) =>
      next === LIST_CONTENT_CARAOUSEL.length - 1 ? 0 : next + 1
    );
  };

  // Menghitung slide berikutnya
  const nextSlide =
    isSlide === LIST_CONTENT_CARAOUSEL.length - 1 ? 0 : isSlide + 1;

  const prevSlide =
    isSlide === 0 ? LIST_CONTENT_CARAOUSEL.length - 1 : isSlide - 1;

  return (
    <section>
      <div className="carousel w-full transition-all flex justify-center relative overflow-hidden">
        <EachUtils
          of={LIST_CONTENT_CARAOUSEL}
          render={(item, index) => (
            <>
              {isSlide === index && (
                <>
                  <div className="absolute -right-1/2 z-10">
                    {/* Gambar index berikutnya sebagai background */}
                    <img
                      src={LIST_CONTENT_CARAOUSEL[nextSlide].img_url}
                      alt={LIST_CONTENT_CARAOUSEL[nextSlide].title}
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                  <div className="absolute -left-1/4 z-10">
                    {/* Gambar index berikutnya sebagai background */}
                    <img
                      src={LIST_CONTENT_CARAOUSEL[prevSlide].img_url}
                      alt={LIST_CONTENT_CARAOUSEL[prevSlide].title}
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                </>
              )}
              <div
                key={index}
                className={`carousel-item relative -right-1/2 -translate-x-1/2 w-[80%] z-20 ${
                  isSlide === index ? "block" : "hidden"
                }`}
              >
                <img
                  src={item.img_url}
                  alt={item.title}
                  className="w-full translate-x-[12%] border-x-8 border-white"
                />
                <div className="absolute left-[62.5%] -translate-x-1/2 top-1/2 -translate-y-1/2 flex transform justify-between w-[125%] h-full">
                  <button
                    onClick={handlePrev}
                    className="w-[10%] opacity-50 flex justify-center items-center text-white"
                  >
                    <GrFormPrevious size={100} />
                  </button>
                  <div className="flex w-full items-end py-16 px-24">
                    <div className="flex justify-center items-center gap-6">
                      <BtnMore
                        result="Streaming Sekarang"
                        bg="bg-white"
                        brc="border-white"
                        tc="text-black"
                        tsz="text-lg"
                        py="py-2"
                      />
                      <div className="flex gap-2 text-white justify-center items-center">
                        <h3 className="font-bold text-xl">{item.genre}</h3>
                        <span className="font-bold text-xl">·</span>
                        <p className="font-normal text-xl">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleNext}
                    className="w-[10%] opacity-50 flex justify-center items-center text-white"
                  >
                    <GrFormNext size={100} />
                  </button>
                </div>
              </div>
            </>
          )}
        />
      </div>
      {/* Navigasi poin */}
      <div className="flex w-full justify-center gap-4 py-4">
        <EachUtils
          of={LIST_CONTENT_CARAOUSEL}
          render={(item, index) => (
            <button
              key={index}
              onClick={() => setIsSlide(index)}
              className={`w-2 h-2 rounded-full ${
                isSlide === index ? "bg-[#333333]" : "bg-[#949494]"
              }`}
            ></button>
          )}
        />
      </div>
    </section>
  );
};

export default AppleTv;
