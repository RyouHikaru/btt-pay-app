import { useStoreState } from 'easy-peasy';
import { Outlet } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import Modal from '../Modal';
import Header from '../Header';
import Footer from '../Footer';
import MobileMenu from '../MobileMenu';
import Sidebar from '../Main/Sidebar';

const Landing = () => {
  const isClicked = useStoreState((state) => state.isMobileMenuClicked);
  const userSession = useStoreState((state) => state.userSession);
  const { width } = useWindowSize();

  const getComponents = () => {
    if (isClicked && width < 640) {
      return <MobileMenu />;
    } else {
      if (userSession) {
        return <div className='flex flex-grow justify-center'>
                <Sidebar />
                <Outlet />
               </div>
      }

      return <Outlet />
    }
  }

  return (
    <div className="flex flex-col min-h-screen h-max bg-fixed bg-center bg-cover bg-[url('/src/img/landing-1920x1080.jpg')]">
      <Header />
      {/* {userSession ? <Sidebar /> : null}
      {isClicked && width < 640 ?  <MobileMenu /> : <Outlet />} */}
      {getComponents()}
      <Footer />
      <Modal />
    </div>
  )
}

export default Landing;