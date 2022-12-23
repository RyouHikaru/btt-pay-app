import { useStoreState, useStoreActions } from "easy-peasy";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const isClicked = useStoreState((state) => state.isMobileMenuClicked);
  const setIsClicked = useStoreActions((action) => action.setIsMobileMenuClicked);
  const userSession = useStoreState((state) => state.userSession);

  const getNavStyle = () => {
    let baseStyle = 'hidden flex flex-grow justify-end bg-stone-100 origin-right animate-show-menu sm:hidden';
    return isClicked ? baseStyle.replace('hidden', 'block') : baseStyle;
  }

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <nav className={getNavStyle()}>
      <ul className="p-7 w-full text-right flex flex-col gap-7 text-xl text-stone-800">
        <li onClick={handleClick}><Link to='about'>ABOUT</Link></li>
        <hr />
        <li onClick={handleClick}><Link to='contact'>CONTACT</Link></li>
        <hr />
        {userSession
        ? <li onClick={handleClick}><Link to='/logout'>SIGN OUT</Link></li>
        : <li onClick={handleClick}><Link to='/'>SIGN IN</Link></li>}
        <hr />
      </ul>
    </nav>
  )
}

export default MobileHeader;