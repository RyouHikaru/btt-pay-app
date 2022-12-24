import { useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const redirect = useNavigate();
  const userSession = useStoreState((state) => state.userSession);

  useEffect(() => {
    if (!userSession)
      redirect('/');
  }, [userSession, redirect])

  return (
    <section className="flex-grow bg-stone-100 opacity-90 text-stone-800">
      
    </section>
  )
}

export default Home;