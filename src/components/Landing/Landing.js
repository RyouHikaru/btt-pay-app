import Header from "./Header";
import Login from "./Login";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="flex flex-col h-screen bg-center bg-cover bg-[url('/src/img/landing-1920x1080.jpg')]">
      <Header />
      <Login />
      <Footer />
    </div>
  )
}

export default Landing