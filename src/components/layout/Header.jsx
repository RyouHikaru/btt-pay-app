import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/img/logo192.png";

const Header = () => {
  const path = useLocation().pathname;
  const userSession = useStoreState((state) => state.userSession);
  const isClicked = useStoreState((state) => state.isMobileMenuClicked);
  const setIsClicked = useStoreActions(
    (action) => action.setIsMobileMenuClicked
  );
  const [anchorLink, setAnchorLink] = useState("/");

  useEffect(() => {
    setAnchorLink(!userSession ? "/" : "home");
  }, [userSession]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className="flex justify-between items-center p-5 bg-gradient-to-b from-stone-800 to-stone-900 text-stone-100 md:px-10">
      <a href={anchorLink}>
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">Pay</h1>
        </div>
      </a>
      <button
        onClick={handleClick}
        type="button"
        className="text-2xl sm:hidden"
      >
        {isClicked ? "⨉" : "☰"}
      </button>
      <nav className="hidden sm:block">
        <ul className="flex gap-8 items-center">
          <li className="hover:opacity-75">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="hover:opacity-75">
            <Link to="/contact">CONTACT</Link>
          </li>
          {userSession ? (
            <li className="hover:opacity-75">
              <Link to="/help">HELP</Link>
            </li>
          ) : null}
          {path !== "/" && !userSession ? (
            <li className="hover:opacity-75">
              <Link to="/">LOGIN</Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
