import { useStoreState, useStoreActions } from "easy-peasy";
import MobileMenuItem from "./Main/MobileMenuItem";

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
      <ul onClick={handleClick} className="w-full grid text-lg text-stone-800">
        <MobileMenuItem text="home" />
        <MobileMenuItem text="accounts" />
        <MobileMenuItem text="services" />
        <MobileMenuItem text="logout" />
      </ul>
      : null}

      <ul onClick={handleClick} className="w-full grid text-lg text-stone-800">
        <MobileMenuItem text="about" />
        <MobileMenuItem text="contact" />
        <MobileMenuItem text="help" />
        {!userSession
        ? 
        <MobileMenuItem text="login" />
        : null}
      </ul>
    </nav>
  )
}

export default MobileHeader;