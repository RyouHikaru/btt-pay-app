import { useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const path = useLocation().pathname;
  const excludedPaths = [
    "/about",
    "/contact",
    "/help",
    "/service-agreement",
    "/privacy-policy",
  ];
  const isExempted = excludedPaths.includes(path);

  return (
    <aside
      className={`flex-grow hidden flex-col justify-between min-w-[17rem] max-w-[17rem] bg-gradient-to-r from-stone-800 to-stone-900 text-stone-100 ${
        !isExempted ? "sm:flex" : ""
      }`}
    >
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
