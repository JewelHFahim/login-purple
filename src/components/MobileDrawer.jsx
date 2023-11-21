import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import "./MobileDrawer.css"

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer}>
        <GiHamburgerMenu className="text-[28px]" />
      </button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size="300px"
        className=""
      >
        <div className=" mx-5 my-8">
          <div>
            <a href="">
              <img
                src="https://microbuddy.tech/wp-content/uploads/2023/08/microbuddy-logo.png"
                alt="logo"
                className="w-[150px]"
              />
            </a>
          </div>

          <div className="mt-20">

            <ul className="flex flex-col gap-5 text-[17px] font-medium">
              <li>
                <a href="/">SignIn</a>
              </li>
              <li>
                <a href="/signup">SignUp</a>
              </li>
              <li>
                <a href="/forget-pass">ForgetPass</a>
              </li>
              <li>
                <a href="/reset-pass">ResetPass</a>
              </li>
              <li>
                <a href="/verify-mail">Verify</a>
              </li>
              <li>
                <a href="/place-code">PlaceCode</a>
              </li>
            </ul>

            <div className="flex justify-center items-center gap-5 mt-16 ">

              <div className="button-wrap-2 example border">
                <a
                  href="https://signin-signup-form-mb.netlify.app/"
                  className="circle"
                ></a>
                <div className="outer-circle oc1"></div>
              </div>

              <div className="button-wrap-2 example border">
                <a
                  href="https://login-green-version.netlify.app/"
                  className="circle"
                ></a>
                <div className="outer-circle oc2"></div>
              </div>

              <div className="button-wrap-2 example border">
                <a
                  href="https://login-purple-version.netlify.app/"
                  className="circle"
                ></a>
                <div className="outer-circle oc3"></div>
              </div>

            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
