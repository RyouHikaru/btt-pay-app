import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Oval } from "react-loading-icons";
import AccountCard from "../components/accounts/AccountCard";
import AddAccountCard from "../components/accounts/AddAccountCard";

const Accounts = () => {
  const redirect = useNavigate();
  const [isSavingsBalClicked, setIsSavingsBalClicked] = useState(false);
  const [isPayBalClicked, setIsPayBalClicked] = useState(false);
  const { userSession, isLoading, accounts } = useStoreState((state) => ({
    userSession: state.userSession,
    isLoading: state.isLoading,
    accounts: state.accounts,
  }));
  const retrieveUserAccounts = useStoreActions(
    (action) => action.retrieveUserAccounts
  );

  useEffect(() => {
    if (!userSession) redirect("/");
    else retrieveUserAccounts(userSession.token);
  }, [userSession, redirect, retrieveUserAccounts]);

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
      const isSavings = acct.accountType === "SAVINGS";

      return (
        <>
          <AccountCard
            key={acct.id}
            acctNo={acct.accountNumber}
            acctType={acct.accountType}
            bal={acct.balance}
            isClicked={isSavings ? isSavingsBalClicked : isPayBalClicked}
            setIsClicked={
              isSavings ? setIsSavingsBalClicked : setIsPayBalClicked
            }
          />
          <AddAccountCard type={isSavings ? "PAY" : "SAVINGS"} />
        </>
      );
    } else {
      // Both Accounts
      return accounts.map((acct) => {
        const isSavings = acct.accountType === "SAVINGS";

        return (
          <AccountCard
            key={acct.id}
            acctNo={acct.accountNumber}
            acctType={acct.accountType}
            bal={acct.balance}
            isClicked={isSavings ? isSavingsBalClicked : isPayBalClicked}
            setIsClicked={
              isSavings ? setIsSavingsBalClicked : setIsPayBalClicked
            }
          />
        );
      });
    }
  };

  return userSession ? (
    <section className="flex-grow grid grid-rows-2 grid-cols-1 gap-10 p-10 bg-gradient-to-br from-amber-200 to-amber-400 opacity-95 text-stone-800 xl:grid-flow-col xl:grid-rows-none xl:grid-cols-2 xl:items-start">
      {!isLoading && getComponents()}
    </section>
  ) : (
    <section className="flex-grow p-10">
      <h1 className="text-2xl">
        <Oval stroke="#F5F5F4" strokeWidth="4" />
      </h1>
    </section>
  );
};

export default Accounts;
