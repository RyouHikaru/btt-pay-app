import { useStoreState } from "easy-peasy";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Oval } from "react-loading-icons";
import Separator from "../components/general/Separator";

const Home = () => {
  const redirect = useNavigate();
  const userSession = useStoreState((state) => state.userSession);

  useEffect(() => {
    if (!userSession) redirect("/");
  }, [userSession, redirect]);

  return userSession ? (
    <section className="flex-grow flex p-10 bg-gradient-to-br from-amber-200 to-amber-400 opacity-95 text-stone-800">
      <article className="flex flex-col gap-10">
        <h1 className="text-3xl font-bold">Hi, {userSession.username}!</h1>
        <h2 className="text-2xl font-semibold">Welcome to BTT Pay!</h2>
        <ul className="grid gap-5 p-5 rounded-md shadow-md bg-amber-100 list-disc list-inside">
          <h3 className="text-lg font-bold">Quick Start:</h3>
          <li className="text-md">
            If you want to check your balance, please navigate to{" "}
            <span className="italic font-bold hover:opacity-75">
              <Link to="/accounts">ACCOUNTS</Link>
            </span>
            .
          </li>
          <li className="text-md">
            If you want to use a particular service, please navigate to{" "}
            <span className="italic font-bold hover:opacity-75">
              <Link to="/services">SERVICES</Link>
            </span>
            .
          </li>
          <Separator />
          <h3 className="text-md">
            For more information, please check out the{" "}
            <span className="italic font-bold hover:opacity-75">
              <Link to="/help">HELP</Link>
            </span>{" "}
            section.
          </h3>
        </ul>
      </article>
    </section>
  ) : (
    <section className="flex-grow p-10">
      <h1 className="text-2xl">
        <Oval stroke="#F5F5F4" strokeWidth="4" />
      </h1>
    </section>
  );
};

export default Home;
