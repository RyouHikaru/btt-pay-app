import { useStoreState, useStoreActions } from "easy-peasy";
import { Link } from "react-router-dom";
import { FaHome, FaHandHoldingUsd, FaInfoCircle } from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

const MobileHeader = () => {
  const isClicked = useStoreState((state) => state.isMobileMenuClicked);
  const setIsClicked = useStoreActions((action) => action.setIsMobileMenuClicked);
  const userSession = useStoreState((state) => state.userSession);

  const getNavStyle = () => {
    let baseStyle = 'hidden flex flex-col flex-grow justify-between bg-stone-100 origin-right animate-show-menu sm:hidden';
    return isClicked ? baseStyle.replace('hidden', 'block') : baseStyle;
  }

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <nav className={getNavStyle()}>
      {userSession
      ? 
      <ul onClick={handleClick} className="p-7 w-full flex flex-col gap-6 text-lg text-stone-800">
        <li className="hover:opacity-75">
          <Link to='/home'>
            <div className="flex gap-2">
              <span className="text-2xl"><FaHome /></span>
              <span>HOME</span>
            </div>
          </Link>
        </li>
        <hr />
        <li className="hover:opacity-75">
          <Link to='/accounts'>
            <div className="flex gap-2">
              <span className="text-2xl"><MdAccountBalanceWallet /></span>
              <span>ACCOUNTS</span>
            </div>
          </Link>
        </li>
        <hr />
        <li className="hover:opacity-75">
          <Link to='/services'>
            <div className="flex gap-2">
              <span className="text-2xl"><FaHandHoldingUsd /></span>
              <span>SERVICES</span>
            </div>
          </Link>
        </li>
        <hr />
        <li className="hover:opacity-75">
          <Link to='/logout'>
            <div className="flex gap-2">
              <span className="text-2xl"><BiLogOut /></span>
              <span>LOGOUT</span>
            </div>
          </Link>
        </li>
        <hr />
      </ul>
      : null}

      <ul onClick={handleClick} className="p-7 w-full flex flex-col gap-6 text-lg text-stone-800">
        <li className="hover:opacity-75">
          <Link to='/about'>
            <div className="flex gap-2">
              <span className="text-2xl"><FaInfoCircle /></span>
              <span>ABOUT</span>
            </div>
          </Link>
        </li>
        <hr />
        <li className="hover:opacity-75">
          <Link to='/contact'>
            <div className="flex gap-2">
              <span className="text-2xl"><IoIosSend /></span>
              <span>CONTACT</span>
            </div>
          </Link>
        </li>
        {!userSession
        ? 
        <>
          <hr />
          <li className="hover:opacity-75">
          <Link to='/'>
            <div className="flex gap-2">
              <span className="text-2xl"><BiLogIn /></span>
              <span>LOGIN</span>
            </div>
          </Link>
        </li>
        </>
        : null}
      </ul>
    </nav>
  )
}

export default MobileHeader;