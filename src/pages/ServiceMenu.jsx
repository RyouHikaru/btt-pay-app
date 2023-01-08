import { useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Oval } from "react-loading-icons";
import ServiceMenuItem from "../components/services/ServiceMenuItem";

const ServiceMenu = () => {
  const redirect = useNavigate();
  const userSession = useStoreState((state) => state.userSession);

  useEffect(() => {
    if (!userSession) redirect("/");
  }, [userSession, redirect]);

  return userSession ? (
    <section className="flex-grow grid items-stretch gap-10 grid-rows-3 grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 p-10 bg-amber-300 opacity-95 text-stone-800">
      <ServiceMenuItem service="Cash In" />
      <ServiceMenuItem service="Transfer Coins" />
      <ServiceMenuItem service="Pay Bills" />
      <ServiceMenuItem service="Buy Load" />
    </section>
  ) : (
    <section className="flex-grow p-10">
      <h1 className="text-2xl">
        <Oval stroke="#F5F5F4" strokeWidth="4" />
      </h1>
    </section>
  );
};

export default ServiceMenu;
