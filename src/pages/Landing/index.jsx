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
              <h3>{item.product_name}</h3>
            </li>
          )}
        />
      </ul>
    </div>
  );
};

export default Landing;
