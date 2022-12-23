import { useStoreState } from 'easy-peasy';
import { Outlet } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import Modal from '../Modal';
import Header from '../Header';
import Footer from '../Footer';
import MobileMenu from '../MobileMenu';

const Landing = () => {
  const isClicked = useStoreState((state) => state.isMobileMenuClicked);
  const { width } = useWindowSize();

  return (
    <div className="flex flex-col min-h-screen h-max bg-fixed bg-center bg-cover bg-[url('/src/img/landing-1920x1080.jpg')]">
      <Header />
      {isClicked && width < 640
      ? <MobileMenu />
      : <Outlet />}
      <Footer />
      <Modal />
    </div>
  )
}

export default Landing;