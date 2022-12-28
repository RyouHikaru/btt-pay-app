import { Link, useLocation } from "react-router-dom";
import { FaHome, FaHandHoldingUsd } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { MdAccountBalanceWallet } from "react-icons/md";

const Sidebar = () => {
  const path = useLocation().pathname;

  const getSidebarStyle = () => {
    const excludedPaths = ['/about', '/contact', '/help'];
    let baseStyle = "flex-grow hidden flex-col justify-between min-w-[20rem] max-w-[20rem] bg-stone-800 text-stone-100 border-t-2 border-stone-900 border-solid sm:flex";

    return excludedPaths.includes(path) ? baseStyle.replace('sm:flex', 'hidden') : baseStyle;
  }


  return (
    <aside className={getSidebarStyle()}>
      <ul className="grid gap-10 p-10">
        <li className="hover:opacity-75">
          <Link to='/home'>
            <div className="flex gap-2">
              <span className="text-2xl"><FaHome /></span>
              <span>HOME</span>
            </div>
          </Link>
        </li>
        <li className="hover:opacity-75">
          <Link to='/account'>
            <div className="flex gap-2">
              <span className="text-2xl"><MdAccountBalanceWallet /></span>
              <span>ACCOUNT</span>
            </div>
          </Link>
        </li>
        <li className="hover:opacity-75">
          <Link to='/services'>
            <div className="flex gap-2">
              <span className="text-2xl"><FaHandHoldingUsd /></span>
              <span>SERVICES</span>
            </div>
          </Link>
        </li>
      </ul>
      {/* hidden max-w-xs flex flex-grow justify-between sm:block bg-stone-800 text-stone-100 border-2 border-red-900 border-solid */}
      <ul className="p-10">  
        <li className="hover:opacity-75">
          <Link to='/logout'>
            <div className="flex gap-2">
              <span className="text-2xl"><BiLogOut /></span>
              <span>LOGOUT</span>
            </div>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;