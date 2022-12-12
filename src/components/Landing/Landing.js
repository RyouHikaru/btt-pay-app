import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen h-max bg-fixed bg-center bg-cover bg-[url('/src/img/landing-1920x1080.jpg')]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Landing