import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";

const CashInForm = () => {
  const accounts = useStoreState((state) => state.accounts);
  const setShowModal = useStoreActions((action) => action.setShowModal);
  const cashIn = useStoreActions((action) => action.cashIn);

  const initialData = {
    accountNumber: "",
    details: "CASH IN",
    amount: "",
    transactionType: "CREDIT",
  };

  const [data, setData] = useState(initialData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.accountNumber === "") {
      setShowModal({
        header: "Cash In",
        body: "Please select an account.",
        visible: true,
        type: "EROR",
      });
    } else if (!data.amount.length || data.amount === "0") {
      setShowModal({
        header: "Cash In",
        body: "Please enter an amount more than 0.",
        visible: true,
        type: "EROR",
      });
    } else {
      cashIn(data);
      setData(initialData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-1">
        <label htmlFor="select-account">Select Account</label>
        <select
          value={data.accountNumber}
          onChange={handleInputChange}
          className={`bg-amber-50 p-4 border-2 border-amber-200 rounded-md outline-none focus:border-amber-300 ${
            accounts.length ? "" : "text-stone-500"
          }`}
          name="accountNumber"
        >
          <option defaultValue={""}>
            {accounts.length ? "" : "No accounts found"}
          </option>
          {accounts.map((account) => (
            <option key={account.id} value={account.accountNumber}>
              {account.accountNumber}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-1">
        <label htmlFor="amount">Amount</label>
        <input
          onChange={handleInputChange}
          value={data.amount}
          className="bg-amber-50 p-4 border-2 border-amber-200 rounded-md outline-none focus:border-amber-300 placeholder:text-stone-500"
          name="amount"
          type="number"
          step="any"
          min={0}
          placeholder="Enter amount"
        />
      </div>
      <button
        type="submit"
        className="justify-self-start bg-amber-500 text-amber-100 p-4 w-1/3 rounded-md hover:opacity-75"
      >
        Submit
      </button>
    </form>
  );
};

export default CashInForm;
