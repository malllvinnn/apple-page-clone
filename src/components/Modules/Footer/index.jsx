import {
  COPYRIGHT,
  LANGGANAN,
  LIST_FOOTER,
  RITAIL,
} from "../../../constants/listFooter";
import EachUtils from "../../../utils/EachUtils";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#F5F5F7] px-60 py-5 transition-all">
        <h3 className="text-xs text-[#626263]">{LANGGANAN}</h3>
        <hr className="bg-[#626263] h-[2px] opacity-50 my-5" />
        <div className="grid grid-cols-4 gap-2 text-xs">
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
        <div className="flex gap-1 text-xs">
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
              className="flex justify-between items-center text-[#626263] text-xs"
            >
              <h3>
                &copy;{item.year} {item.copy_right}
              </h3>
              <div className="flex gap-2 hover:brightness-150">
                <a href="#">Kebijakan Privasi</a>|
                <a href="#">Ketentuan Pengguna</a>|<a href="#">Legal</a>|
                <a href="#">Peta Situs</a>
              </div>
              <a href="#" className="hover:brightness-150">
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
