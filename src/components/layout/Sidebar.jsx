import { useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const path = useLocation().pathname;

  const getSidebarStyle = () => {
    const excludedPaths = [
      "/about",
      "/contact",
      "/help",
      "/service-agreement",
      "/privacy-policy",
    ];
    let baseStyle =
      "flex-grow hidden flex-col justify-between min-w-[17rem] max-w-[17rem] bg-stone-800 text-stone-100 sm:flex";

    return excludedPaths.includes(path)
      ? baseStyle.replace("sm:flex", "hidden")
      : baseStyle;
  };

  return (
    <aside className={getSidebarStyle()}>
      <ul className="grid">
        <SidebarItem text="home" />
        <SidebarItem text="accounts" />
        <SidebarItem text="services" />
      </ul>
      <ul>
        <SidebarItem text="logout" />
      </ul>
    </aside>
  );
};

export default Sidebar;
