import { useStoreState } from "easy-peasy";
import { Outlet } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import Modal from "../components/layout/Modal";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MobileMenu from "../components/layout/MobileMenu";
import Sidebar from "../components/layout/Sidebar";

const Layout = () => {
  const isClicked = useStoreState((state) => state.isMobileMenuClicked);
  const userSession = useStoreState((state) => state.userSession);
  const { width } = useWindowSize();

  const getComponents = () => {
    if (isClicked && width < 640) {
      return <MobileMenu />;
    } else {
      if (userSession) {
        return (
          <div className="flex flex-grow justify-center">
            <Sidebar />
            <Outlet />
          </div>
        );
      }

      return <Outlet />;
    }
  };

  return (
    <main className="flex flex-col min-h-screen h-max bg-fixed bg-center bg-cover bg-[url('/src/assets/img/landing-1920x1080.jpg')]">
      <Header />
      {getComponents()}
      <Footer />
      <Modal />
    </main>
  );
};

export default Layout;
