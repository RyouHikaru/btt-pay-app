import { formatInTimeZone } from "date-fns-tz";
import { useStoreActions } from "easy-peasy";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bttCoin from "../../assets/img/logo192.png";
import Separator from "../general/Separator";
import TransactionListItem from "./TransactionListItem";

const TransactionCard = ({ acctType, account }) => {
  const retrieveTransactions = useStoreActions(
    (action) => action.retrieveTransactions
  );
  const [transactions, setTransactions] = useState([]);

  const color = {
    SAVINGS: "text-emerald-800",
    PAY: "text-cyan-800",
  };

  useEffect(() => {
    const retrieve = async () => {
      const transList = await retrieveTransactions(account?.accountNumber);
      setTransactions(transList);
    };

    retrieve();
  }, [retrieveTransactions, setTransactions, account]);

  const formatAmount = (amount) => {
    return Intl.NumberFormat("en", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(amount);
  };

  const formatDate = (date) => {
    const transactionDate = new Date(date);

    return formatInTimeZone(
      transactionDate,
      "Asia/Manila",
      "yyyy MMM dd HH:mm:ss"
    );
  };

  return (
    <article className="mx-auto flex flex-col gap-5 max-w-4xl p-5 shadow-md rounded-md bg-amber-100">
      <section>
        <div className="flex justify-between">
          <span>
            <h2 className={`text-lg font-semibold ${color[acctType]}`}>
              My {acctType} Account
            </h2>
            {account && <h3 className="text-md">{account.accountNumber}</h3>}
          </span>
          <span>
            <Link
              to="/accounts"
              className="hidden md:block underline text-sm hover:opacity-75"
            >
              Back to Accounts
            </Link>
          </span>
        </div>
        <span className="flex flex-row items-center gap-2 p-5 text-2xl">
          <h2 className="font-semibold whitespace-nowrap">BALANCE :</h2>
          <div className="whitespace-nowrap">
            <span className="grid grid-flow-col gap-2 items-center">
              {account && <span>{formatAmount(account.balance)}</span>}
              <img
                src={bttCoin}
                alt="btt-coins"
                width={25}
                height={25}
                className="min-w-[25px]"
              />
            </span>
          </div>
        </span>
      </section>
      <Separator />
      <section className="flex flex-col gap-7">
        <h3 className="text-md font-semibold">Transactions</h3>
        <ul className="grid gap-5 pr-2 max-h-[35vh] overflow-y-auto">
          {transactions.length
            ? transactions.map((trx) => (
                <TransactionListItem
                  key={trx.id}
                  type={trx.transactionType}
                  details={trx.details}
                  date={formatDate(trx.metadata.dateCreated)}
                  amount={formatAmount(trx.amount)}
                />
              ))
            : "No transactions yet"}
        </ul>
      </section>
    </article>
  );
};

export default TransactionCard;
