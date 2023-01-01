import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TransactionCard from "./TransactionCard";

const Transactions = () => {
  const redirect = useNavigate();
  const userSession = useStoreState((state) => state.userSession);
  const { acctType } = useParams();
  
  const accounts = useStoreState((state) => state.accounts);
  const retrieveTransactions = useStoreActions((action) => action.retrieveTransactions);

  const [account, setAccount] = useState({});
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    if (!userSession)
      redirect('/')
  }, [userSession, redirect]);

  useEffect(() => {
    if (!["SAVINGS", "PAY"].includes(acctType))
      redirect('/accounts')
    else {
      const getTransactions = async () => {
        const list = await retrieveTransactions(userSession.token);

        setTransactions(list);
      }
      
      getTransactions();
    }
  }, [acctType, redirect, retrieveTransactions, userSession]);

  useEffect(() => {
    setAccount(accounts.filter(acct => acct.accountType === acctType)[0]);
  }, [setAccount, accounts, acctType])
  
  return (
    userSession ? 
    <section className="flex-grow p-7 bg-stone-100 opacity-95 text-stone-800">
      <TransactionCard acctType={acctType} account={account} transactions={transactions} />
    </section> : 
    <section className="flex-grow flex p-10 bg-stone-100 opacity-90 text-stone-800">
      <h1 className="text-2xl">Redirecting...</h1>
    </section>
  )
}

export default Transactions;