import { Link, useNavigate } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import { useEffect } from "react";

const Help = () => {
  const redirect = useNavigate();
  const userSession = useStoreState((state) => state.userSession);

  useEffect(() => {
    if (!userSession) redirect("/");
  }, [userSession, redirect]);

  return (
    <section className="flex-grow flex flex-col bg-gradient-to-br from-amber-200 to-amber-400 opacity-95 items-center md:p-10">
      <div className="flex flex-col gap-10 p-10 items-center bg-amber-100 shadow-2xl md:rounded-md md:items-center md:max-w-4xl">
        <div className="w-full grid grid-flow-col grid-cols-3 justify-center border- border-red-500 border-dashed">
          <span className="col-start-2 flex justify-center items-center">
            <h1 className="text-4xl font-semibold pb-7">Help</h1>
          </span>
          {userSession && (
            <Link
              className="hidden pt-2 underline sm:block hover:opacity-75"
              to="/home"
            >
              Back to Home
            </Link>
          )}
        </div>

        <article className="flex flex-col gap-10 items-center md:max-w-3xl">
          <div className="flex flex-col gap-7">
            <h2 className="text-xl font-semibold underline">Accounts</h2>
            <p className="text-justify">
              In order to access the features of BTT Pay, the user MUST open an
              account. An account represents the user's e-wallet.
            </p>
            <h3 className="font-semibold italic">Account Types</h3>
            <p>
              <ul className="list-disc list-inside">
                <li>
                  <span className="font-semibold">PAY</span> - this account is
                  mainly used for consuming Services (check out Services section
                  below).
                </li>
                <li>
                  <span className="font-semibold">SAVINGS</span> - this account
                  is mainly used for savings and earning interests (check out
                  Interest calculation below).
                </li>
              </ul>
            </p>
            <p className="italic underline text-sm">
              Note: Both types may be used to consume Services. The only
              difference is that SAVINGS has an earning mechanism.
            </p>
            <h3 className="font-semibold italic">How to an Open Account</h3>
            <p>
              <ol className="list-decimal list-inside">
                <li>
                  Go to <span className="font-semibold">Accounts</span> by
                  clicking it in the menu.
                </li>
                <li>Click on the account type you want to open.</li>
                <li>
                  Confirm selecttion by clicking{" "}
                  <span className="font-semibold">"Yes, I agree"</span> button.
                </li>
              </ol>
            </p>
          </div>
        </article>

        <hr className="w-full border-1 border-stone-900" />

        <article className="flex flex-col gap-10 items-center md:max-w-3xl">
          <div className="flex flex-col gap-7">
            <h2 className="text-xl font-semibold underline">Services</h2>
            <p className="text-justify">
              BTT Pay offers different services for the users to consume.
              Currently, there are four available services:
            </p>
            <p>
              <ul className="list-disc list-inside">
                <li>
                  <span className="font-semibold">CASH IN</span> - this service
                  is used to cash in coins to your account.
                </li>
                <li>
                  <span className="font-semibold">TRANSFER COINS</span> - this
                  service is used to transfer your BTT coins from one account to
                  another.
                </li>
                <li>
                  <span className="font-semibold">PAY BILLS</span> - this
                  service is used to pay your bills to BTT partner merchants.
                </li>
                <li>
                  <span className="font-semibold">BUY LOAD</span> - this service
                  is used to buy load for your specified mobile number.
                </li>
              </ul>
            </p>
            <p className="italic underline text-sm">
              Note: PAY BILLS and BUY LOAD is currently under development.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Help;
