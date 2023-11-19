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
    </nav>
  );
};

export default Navbar;
