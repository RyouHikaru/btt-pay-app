import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Oval } from "react-loading-icons";
import TransactionCard from "../components/transactions/TransactionCard";

const Transactions = () => {
  const redirect = useNavigate();
  const { acctType } = useParams();

  const userSession = useStoreState((state) => state.userSession);
  const accounts = useStoreState((state) => state.accounts);
  const hasAccount = useStoreState((state) => state.hasAccount);
  const accountTypes = useStoreState((state) => state.accountTypes);
  const retrieveUserAccounts = useStoreActions(
    (action) => action.retrieveUserAccounts
  );

  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (!userSession) redirect("/");
    else retrieveUserAccounts(userSession.token);
  }, [userSession, redirect, retrieveUserAccounts]);

  useEffect(() => {
    if (!hasAccount || !accountTypes.includes(acctType.toUpperCase())) {
      redirect("/accounts");
    }
  }, [redirect, accountTypes, acctType, hasAccount]);

  useEffect(() => {
    if (userSession) {
      setAccount(
        accounts.filter(
          (acct) => acct.accountType === acctType.toUpperCase()
        )[0]
      );
    }
  }, [userSession, acctType, accounts, setAccount]);

  return userSession && accounts.length && hasAccount ? (
    <section className="flex-grow p-4 bg-gradient-to-br from-amber-200 to-amber-400 opacity-95 text-stone-800 sm:p-6 md:p-10">
      <TransactionCard acctType={acctType.toUpperCase()} account={account} />
    </section>
  ) : (
    <section className="flex-grow flex p-10 bg-stone-100 opacity-90 text-stone-800">
      <h1 className="text-2xl">
        <Oval stroke="#115e59" strokeWidth="4" />
      </h1>
    </section>
  );
};

export default Transactions;
