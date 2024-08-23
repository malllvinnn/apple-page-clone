import "../App.css";
import MainLayouts from "../components/Layouts/DefaultLayout";
import Heroes from "../components/Modules/Heroes";
import Navbar from "../components/Modules/Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <MainLayouts>
        <Heroes />
      </MainLayouts>
    </>
  );
};

export default Landing;
