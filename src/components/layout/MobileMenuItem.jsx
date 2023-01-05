import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import { FaHome, FaHandHoldingUsd } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import {
  IoIosSend,
  IoMdInformationCircle,
  IoIosHelpCircle,
} from "react-icons/io";

const MobileMenuItem = ({ text }) => {
  const logout = useStoreActions((action) => action.logout);

  const getIcon = () => {
    switch (text) {
      case "accounts":
        return <MdAccountBalanceWallet />;
      case "services":
        return <FaHandHoldingUsd />;
      case "login":
        return <BiLogIn />;
      case "logout":
        return <BiLogOut />;
      case "about":
        return <IoMdInformationCircle />;
      case "contact":
        return <IoIosSend />;
      case "help":
        return <IoIosHelpCircle />;
      default:
        return <FaHome />;
    }
  };

  return (
    <li className="hover:opacity-75">
      {text !== "logout" ? (
        <Link to={text !== "login" ? `/${text}` : "/"}>
          <div className="flex gap-2 py-5 px-7">
            <span className="text-2xl">{getIcon()}</span>
            <span>{text.toUpperCase()}</span>
          </div>
        </Link>
      ) : (
        <button type="button" onClick={logout}>
          <div className="flex gap-2 py-5 px-7">
            <span className="text-2xl">{getIcon()}</span>
            <span>{text.toUpperCase()}</span>
          </div>
        </button>
      )}
      <hr />
    </li>
  );
};

export default MobileMenuItem;
