import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Oval } from "react-loading-icons";
import AccountCard from "../components/accounts/AccountCard";
import AddAccountCard from "../components/accounts/AddAccountCard";

const Accounts = () => {
  const redirect = useNavigate();
  const userSession = useStoreState((state) => state.userSession);
  const accounts = useStoreState((state) => state.accounts);
  const retrieveUserAccounts = useStoreActions(
    (action) => action.retrieveUserAccounts
  );

  const [isSavingsBalClicked, setIsSavingsBalClicked] = useState(false);
  const [isPayBalClicked, setIsPayBalClicked] = useState(false);

  useEffect(() => {
    if (!userSession) redirect("/");
    else retrieveUserAccounts(userSession.token);
  }, [userSession, redirect, retrieveUserAccounts]);

  const isSavings = (type) => {
    return type === "SAVINGS";
  };

  const getComponents = () => {
    if (!accounts.length) {
      // No Account
      return (
        <>
          <AddAccountCard type="PAY" />
          <AddAccountCard type="SAVINGS" />
        </>
      );
    } else if (accounts.length < 2) {
      // Single Account
      const acct = accounts[0];

      return (
        <>
          <AccountCard
            key={acct.id}
            text={`My ${acct.accountType} Account`}
            acctNo={acct.accountNumber}
            acctType={acct.accountType}
            bal={acct.balance}
            isClicked={
              isSavings(acct.accountType)
                ? isSavingsBalClicked
                : isPayBalClicked
            }
            setIsClicked={
              isSavings(acct.accountType)
                ? setIsSavingsBalClicked
                : setIsPayBalClicked
            }
          />
          <AddAccountCard
            type={isSavings(acct.accountType) ? "PAY" : "SAVINGS"}
          />
        </>
      );
    } else {
      // Both Accounts
      return accounts.map((acct) => (
        <AccountCard
          key={acct.id}
          text={`My ${acct.accountType} Account`}
          acctNo={acct.accountNumber}
          acctType={acct.accountType}
          bal={acct.balance}
          isClicked={
            isSavings(acct.accountType) ? isSavingsBalClicked : isPayBalClicked
          }
          setIsClicked={
            isSavings(acct.accountType)
              ? setIsSavingsBalClicked
              : setIsPayBalClicked
          }
        />
      ));
    }
  };

  return userSession ? (
    <section className="flex-grow grid grid-rows-2 grid-cols-1 items-center gap-5 p-10 bg-stone-100 opacity-95 text-stone-800 xl:grid-flow-col xl:grid-rows-none xl:grid-cols-2">
      {getComponents()}
    </section>
  ) : (
    <section className="flex-grow flex p-10 bg-stone-100 opacity-90 text-stone-800">
      <h1 className="text-2xl">
        <Oval stroke="#115e59" strokeWidth="4" />
      </h1>
    </section>
  );
};

export default Accounts;
