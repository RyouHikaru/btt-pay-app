import { useStoreState } from "easy-peasy";
import { Outlet } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import Modal from "../components/layout/Modal";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MobileMenu from "../components/layout/MobileMenu";
import Sidebar from "../components/layout/Sidebar";

const Layout = () => {
  const { isClicked, userSession } = useStoreState((state) => ({
    isClicked: state.isMobileMenuClicked,
    userSession: state.userSession,
  }));
  const { width } = useWindowSize();
  const isMobile = width < 640;

  return (
    <main className="flex flex-col min-h-screen h-max bg-fixed bg-center bg-cover bg-[url('/src/assets/img/landing-1920x1080.jpg')]">
      <Header />
      {isClicked && isMobile ? (
        <MobileMenu />
      ) : userSession ? (
        <div className="flex flex-grow justify-center">
          <Sidebar />
          <Outlet />
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
      <Modal />
    </main>
  );
};

export default Layout;
