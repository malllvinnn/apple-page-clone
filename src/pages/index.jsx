import "../App.css";
import Navbar from "../components/Modules/Navbar";
import MainLayouts from "../components/Layouts/DefaultLayout";
import Heroes from "../components/Modules/Heroes";
import Promo from "../components/Modules/Promo";
import AppleTv from "../components/Modules/AppleTv";
import Footer from "../components/Modules/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <MainLayouts>
        <Heroes />
        <Promo />
        <AppleTv />
      </MainLayouts>
      <Footer />
    </>
  );
};

export default Landing;
