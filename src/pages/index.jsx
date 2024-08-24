import "../App.css";
import MainLayouts from "../components/Layouts/DefaultLayout";
import Heroes from "../components/Modules/Heroes";
import Navbar from "../components/Modules/Navbar";
import Promo from "../components/Modules/Promo";

const Landing = () => {
  return (
    <>
      <Navbar />
      <MainLayouts>
        <Heroes />
        <Promo />
      </MainLayouts>
    </>
  );
};

export default Landing;
