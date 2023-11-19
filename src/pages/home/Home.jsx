import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full hidden md:block lg:block">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
