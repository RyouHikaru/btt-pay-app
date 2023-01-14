import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import { FaHome, FaHandHoldingUsd } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import Separator from "../general/Separator";
import {
  IoIosSend,
  IoMdInformationCircle,
  IoIosHelpCircle,
} from "react-icons/io";

const MobileMenuItem = ({ text }) => {
  const logout = useStoreActions((action) => action.logout);

  const icon = {
    home: <FaHome />,
    accounts: <MdAccountBalanceWallet />,
    services: <FaHandHoldingUsd />,
    login: <BiLogIn />,
    logout: <BiLogOut />,
    about: <IoMdInformationCircle />,
    contact: <IoIosSend />,
    help: <IoIosHelpCircle />,
  };

  return (
    <li className="hover:opacity-75">
      {text !== "logout" ? (
        <Link to={text !== "login" ? `/${text}` : "/"}>
          <div className="flex gap-2 py-5 px-7">
            <span className="text-2xl">{icon[text]}</span>
            <span>{text.toUpperCase()}</span>
          </div>
        </Link>
      ) : (
        <button type="button" onClick={logout}>
          <div className="flex gap-2 py-5 px-7 w-[100vw]">
            <span className="text-2xl">{icon[text]}</span>
            <span>{text.toUpperCase()}</span>
          </div>
        </button>
      )}
      <Separator />
    </li>
  );
};

export default MobileMenuItem;
