import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AccountCard from "./AccountCard";

const Accounts = () => {
  const redirect = useNavigate();
  const userSession = useStoreState((state) => state.userSession);
  const retrieveUserAccounts = useStoreActions((action) => action.retrieveUserAccounts);

  const [accounts, setAccounts] = useState([]);
  const [isSavingsBalClicked, setIsSavingsBalClicked] = useState(false);
  const [isPayBalClicked, setIsPayBalClicked] = useState(false);

  useEffect(() => {
    if (!userSession)
      redirect('/');
  }, [userSession, redirect])

  useEffect(() => {
    const retrieveAccounts = async () => {
      const retrievedAccounts = await retrieveUserAccounts(userSession.token);
      setAccounts(retrievedAccounts);
    }

    retrieveAccounts();

  }, [retrieveUserAccounts, userSession])

  return (
    <section className="flex-grow grid grid-rows-2 grid-cols-1 gap-5 p-10 bg-stone-100 opacity-95 text-stone-800 xl:grid-flow-col xl:grid-rows-none xl:grid-cols-2">
      {accounts.map((acct) => (
        <AccountCard 
          key={acct.id}
          text={`My ${acct.accountType} Account`} 
          acctNo={acct.accountNumber} 
          acctType={acct.accountType}
          bal={acct.balance}
          isClicked={acct.accountType === 'SAVINGS' ? isSavingsBalClicked : isPayBalClicked}
          setIsClicked={acct.accountType === 'SAVINGS' ? setIsSavingsBalClicked : setIsPayBalClicked}
        />
      ))}

    </section>
  )
}

export default Accounts;