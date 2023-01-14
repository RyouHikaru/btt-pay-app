import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Oval } from "react-loading-icons";
import ServiceCard from "../components/services/ServiceCard";

const Service = () => {
  const redirect = useNavigate();
  const service = useParams().service;
  const userSession = useStoreState((state) => state.userSession);
  const retrieveUserAccounts = useStoreActions(
    (action) => action.retrieveUserAccounts
  );
  const services = ["cash-in", "transfer-coins", "pay-bills", "buy-load"];
  const hasService = services.includes(service);

  useEffect(() => {
    if (!userSession) redirect("/");
    else if (!hasService) redirect("/services");
    else retrieveUserAccounts(userSession.token);
  }, [userSession, hasService, redirect, retrieveUserAccounts]);

  return userSession ? (
    <article className="flex-grow bg-gradient-to-br from-amber-200 to-amber-400 opacity-95 flex justify-center items-center p-10">
      <ServiceCard name={service} />
    </article>
  ) : (
    <section className="flex-grow p-10">
      <h1 className="text-2xl">
        <Oval stroke="#F5F5F4" strokeWidth="4" />
      </h1>
    </section>
  );
};

export default Service;
