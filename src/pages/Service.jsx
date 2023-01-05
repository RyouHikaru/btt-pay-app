import { useStoreState } from "easy-peasy";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Oval } from "react-loading-icons";
import ServiceCard from "../components/services/ServiceCard";

const Service = () => {
  const redirect = useNavigate();
  const service = useParams().service;
  const userSession = useStoreState((state) => state.userSession);

  useEffect(() => {
    if (!userSession) redirect("/");
  }, [userSession, redirect]);

  return userSession ? (
    <article className="flex-grow bg-stone-100 opacity-95 flex justify-center items-center p-10">
      <ServiceCard name={service} />
    </article>
  ) : (
    <section className="flex-grow flex p-10 bg-stone-100 opacity-90 text-stone-800">
      <h1 className="text-2xl">
        <Oval stroke="#115e59" strokeWidth="4" />
      </h1>
    </section>
  );
};

export default Service;
