import bttLogo from "../assets/img/btt-logo.png";
import bttCoinLogo from "../assets/img/logo192.png";
import bttPayLogo from "../assets/img/e-wallet.png";
import { Link } from "react-router-dom";
import { useStoreState } from "easy-peasy";

const About = () => {
  const userSession = useStoreState((state) => state.userSession);

  return (
    <section className="flex flex-col items-center md:p-10">
      <div className="flex flex-col gap-10 p-10 items-center bg-stone-100 opacity-90 shadow-2xl md:rounded-md md:items-center md:max-w-4xl">
        <div className="w-full grid grid-flow-col grid-cols-3 justify-center border- border-red-500 border-dashed">
          <span className="col-start-2 flex justify-center items-center">
            <h1 className="text-4xl font-semibold pb-7">About</h1>
          </span>
          {userSession ? (
            <Link
              className="hidden pt-2 underline sm:block hover:opacity-75"
              to="/home"
            >
              Back to Home
            </Link>
          ) : null}
        </div>

        <article className="flex flex-col gap-10 items-center md:flex-row md:max-w-3xl">
          <img
            src={bttLogo}
            alt="btt logo"
            width={224}
            height={224}
            className="drop-shadow-xl w-56 h-56"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold italic">
              Big Trading Traders
            </h2>
            <p className="text-justify">
              Big Trading Traders, also known as BTT, is a multi-million peso
              financial and trading services company which originated in Manila,
              Philippines during the beginning of COVID-19 pandemic. They have
              committed in serving Filipinos in times of despair and financial
              instability by providing free financial education, seminars, and
              tips & tricks.
            </p>
          </div>
        </article>

        <hr className="w-full h-1 bg-gradient-to-r from-stone-500 via-stone-700 to-stone-500" />

        <article className="flex flex-col gap-10 items-center md:flex-row-reverse md:max-w-3xl">
          <img
            src={bttCoinLogo}
            alt="btt coin logo"
            width={192}
            height={192}
            className="drop-shadow-xl w-48 h-48"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold italic md:text-right">
              BTT Coin
            </h2>
            <p className="text-justify md:text-right">
              BTT Coin serves as the native currency of BTT Pay. You can use
              your BTT Coins to purchase products and services, and shop in
              selected partner merchants.
            </p>
          </div>
        </article>

        <hr className="w-full h-1 bg-gradient-to-r from-stone-500 via-stone-700 to-stone-500" />

        <article className="flex flex-col items-center gap-10 md:flex-row md:max-w-3xl">
          <img
            src={bttPayLogo}
            alt="btt pay logo"
            width={192}
            height={192}
            className="drop-shadow-xl w-48 h-48"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold italic">BTT Pay</h2>
            <p className="text-justify">
              BTT Pay is an online e-wallet that lets you store, manage, and
              view your BTT Coins anywhere, online. All you need is an internet
              connection, and your device!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
