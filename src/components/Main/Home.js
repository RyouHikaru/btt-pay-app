import { useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const redirect = useNavigate();
  const userSession = useStoreState((state) => state.userSession);

  // useEffect(() => {
  //   if (!userSession)
  //     redirect('/');
  // }, userSession)

  return (
    <section className="flex-grow bg-stone-100 opacity-90">
      {/* <aside className="max-w-sm border-2 border-black border-solid">
        <h1>Home</h1>
        <h1>Accounts</h1>
        <h1>Services</h1>
        <h1>Logout</h1>
      </aside> */}
    </section>
  )
}

export default Home;