import "../../App.css";
import { DATA_PRODUCTS } from "../../constants/dummyProducts.JS";
import EachUtils from "../../utils/EachUtils";

const Landing = () => {
  return (
    <div>
      <h1 className="iniland">Ini Landing</h1>
      <ul>
        <EachUtils
          of={DATA_PRODUCTS}
          render={(item, index) => (
            <li key={index}>
              <h3 className="text-red-500">{item.product_name}</h3>
              {item.tag.map((t, index) => (
                <p key={index}>{t.title}</p>
              ))}
            </li>
          )}
        />
      </ul>
    </div>
  );
};

export default Landing;
