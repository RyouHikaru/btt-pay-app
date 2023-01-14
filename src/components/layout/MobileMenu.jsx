import { useStoreState, useStoreActions } from "easy-peasy";
import MobileMenuItem from "./MobileMenuItem";

const MobileHeader = () => {
  const { userSession, isClicked } = useStoreState((state) => ({
    userSession: state.userSession,
    isClicked: state.isMobileMenuClicked,
  }));
  const setIsClicked = useStoreActions(
    (action) => action.setIsMobileMenuClicked
  );

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav
      className={`${
        isClicked ? "block" : "hidden"
      } flex-col flex-grow justify-between bg-gradient-to-br from-amber-200 to-amber-400 origin-right animate-show-menu sm:hidden`}
    >
      {userSession && (
        <ul
          onClick={handleClick}
          className="w-full grid text-lg text-stone-800"
        >
          <MobileMenuItem text="home" />
          <MobileMenuItem text="accounts" />
          <MobileMenuItem text="services" />
        </ul>
      )}

      <ul onClick={handleClick} className="w-full grid text-lg text-stone-800">
        <MobileMenuItem text="about" />
        <MobileMenuItem text="contact" />
        <MobileMenuItem text="help" />
        {!userSession ? (
          <MobileMenuItem text="login" />
        ) : (
          <MobileMenuItem text="logout" />
        )}
      </ul>
    </nav>
  );
};

export default MobileHeader;
