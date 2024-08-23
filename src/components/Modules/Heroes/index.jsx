import EachUtils from "../../../utils/EachUtils";
import { LIST_CONTENT_1, LIST_CONTENT_2 } from "../../../constants/listContent";

const Heroes = () => {
  return (
    <>
      <EachUtils
        of={LIST_CONTENT_1}
        render={(item, index) => (
          <section key={index}>
            <img
              src="/assets/hero_iphone.jpg"
              alt="iPhone"
              className="absolute object-cover h-[80vh]"
            />
            <div className="absolute text-white flex flex-col justify-center items-center bg-red-400 w-full">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <div>
                <button>Selengkapnya</button>
                <button>Beli iPhone</button>
              </div>
            </div>
          </section>
        )}
      />
    </>
  );
};

export default Heroes;
