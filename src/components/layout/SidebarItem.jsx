import { Link, useLocation } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import { FaHome, FaHandHoldingUsd } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const SidebarMenuItem = ({ text }) => {
  const path = useLocation().pathname;
  const logout = useStoreActions((action) => action.logout);
  const isActive = path.includes(text);

  const getIcon = () => {
    switch (text) {
      case "accounts":
        return <MdAccountBalanceWallet />;
      case "services":
        return <FaHandHoldingUsd />;
      case "logout":
        return <BiLogOut />;
      default:
        return <FaHome />;
    }
  };

  return (
    <li className={`border-l-4 border-solid ${isActive ? "border-amber-400 bg-stone-700" : "border-stone-800 hover:bg-stone-700 hover:border-stone-700"}`}>
      {text !== "logout" ? (
        <Link to={`/${text}`}>
          <div className="flex gap-2 py-5 px-10">
            <span className="text-2xl">{getIcon()}</span>
            <span>{text.toUpperCase()}</span>
          </div>
        </Link>
      ) : (
        <button type="button" onClick={logout}>
          <div className="flex gap-2 py-5 px-10">
            <span className="text-2xl">{getIcon()}</span>
            <span>{text.toUpperCase()}</span>
          </div>
        </button>
      )}
    </li>
  );
};

export default SidebarMenuItem;
