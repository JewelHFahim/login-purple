import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import MobileDrawer from "../../components/MobileDrawer";

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full hidden md:block lg:block">
        <Navbar />
      </div>

      <div className="absolute top-5 left-5 w-full md:hidden lg:hidden">
        <MobileDrawer />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
