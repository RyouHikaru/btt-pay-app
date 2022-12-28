import { Link, useLocation } from "react-router-dom";
import { FaHome, FaHandHoldingUsd } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const SidebarMenuItem = ({ text }) => {
  const path = useLocation().pathname;

  const getStyle = () => {
    let baseStyle = "border-l-4 border-stone-800 border-solid hover:border-stone-700 hover:bg-stone-700";

    return path.includes(text)
      ?  baseStyle.replace('border-stone-800', 'border-stone-100')
                  .replace('hover:bg-stone-700', 'bg-stone-700')
                  .replace('hover:border-stone-700', '')
      : baseStyle;
  }

  const getIcon = () => {
    switch (text) {
      case 'accounts':
        return <MdAccountBalanceWallet />;
      case 'services':
        return <FaHandHoldingUsd />;
      case 'logout':
        return <BiLogOut />;
      default:
        return <FaHome />;
    }
  }

  return (
    <li className={getStyle()}>
        <Link to={`/${text}`}>
          <div className="flex gap-2 py-5 px-10">
            <span className="text-2xl">{getIcon()}</span>
            <span>{text.toUpperCase()}</span>
          </div>
        </Link>
      </li>
  )
}

export default SidebarMenuItem;