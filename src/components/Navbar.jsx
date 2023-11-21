import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[120px] py-2">
      <div>
        <img
          src="https://microbuddy.tech/wp-content/uploads/2023/08/microbuddy-logo.png"
          alt=""
          className="w-[150px] h-[60px]"
        />
      </div>

      <div className="flex items-center gap-20">
        <ul className="flex items-center gap-10">
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

        <div className="flex justify-center items-center gap-5">
          <div className="button-wrap-2 example">
            <a
              href="https://signin-signup-form-mb.netlify.app/"
              className="circle"
            ></a>
            <div className="outer-circle oc1"></div>
          </div>

          <div className="button-wrap-2 example">
            <a
              href="https://login-green-version.netlify.app/"
              className="circle"
            ></a>
            <div className="outer-circle oc2"></div>
          </div>

          <div className="button-wrap-2 example">
            <a
              href="https://login-purple-version.netlify.app/"
              className="circle"
            ></a>
            <div className="outer-circle oc3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
