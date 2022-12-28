import { useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AccountCard from "./AccountCard";

const Account = () => {
  const redirect = useNavigate();
  const userSession = useStoreState((state) => state.userSession);
  const [savingsBal, setSavingsBal] = useState(0);
  const [payBal, setPayBal] = useState(0);
  const [isSavingsBalClicked, setIsSavingsBalClicked] = useState(false);
  const [isPayBalClicked, setIsPayBalClicked] = useState(false);

  useEffect(() => {
    if (!userSession)
      redirect('/');
  }, [userSession, redirect])

  useEffect(() => {
    // TODO: Fetch balance from API (store)
    setSavingsBal(1000000);
    setPayBal(69);
  }, [savingsBal, setSavingsBal, payBal, setPayBal])

  return (
    <section className="flex-grow grid grid-rows-2 grid-cols-1 gap-5 p-10 bg-stone-100 opacity-95 text-stone-800 xl:grid-flow-col xl:grid-rows-none xl:grid-cols-2">
      <AccountCard 
        text="My Savings Account" 
        acctNo="S10000001" 
        acctType="savings"
        isClicked={isSavingsBalClicked}
        bal={savingsBal}
        setIsClicked={setIsSavingsBalClicked}
      />

      <AccountCard 
        text="My Pay Account" 
        acctNo="P10000001" 
        acctType="pay"
        bal={payBal}
        isClicked={isPayBalClicked}
        setIsClicked={setIsPayBalClicked}
      />

    </section>
  )
}

export default Account;