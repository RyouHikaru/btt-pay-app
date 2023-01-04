import { useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Oval } from "react-loading-icons";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const redirect = useNavigate();
  const userSession = useStoreState((state) => state.userSession);

  useEffect(() => {
    if (!userSession)
      redirect('/');
  }, [userSession, redirect])

  return (
    userSession ? 
    <section className="flex-grow grid items-stretch gap-10 grid-rows-3 grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 p-10 bg-stone-100 opacity-95 text-stone-800">
      <ServiceCard service="Cash In" />
      <ServiceCard service="Send Coins" />
      <ServiceCard service="Pay Bills" />
      <ServiceCard service="Buy Load" />
    </section> : 
    <section className="flex-grow flex p-10 bg-stone-100 opacity-90 text-stone-800">
      <h1 className="text-2xl"><Oval stroke="#115e59" strokeWidth="4"/></h1>
    </section>
  )
}

export default Services;