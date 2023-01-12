import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { modalHeaders, modalType } from "../../util/modalContent";
import errorMessages from "../../util/errorMessages";
import { isAccountExisting } from "../../util/validations";

const TransferCoinsForm = () => {
  const accounts = useStoreState((state) => state.accounts);
  const setShowModal = useStoreActions((action) => action.setShowModal);
  const transferCoins = useStoreActions((action) => action.transferCoins);
  const token = useStoreState((state) => state.userSession).token;

  const initialData = {
    fromAccountNumber: "",
    toAccountNumber: "",
    details: "TRANSFER COINS",
    amount: "",
    transactionType: "DEBIT",
  };

  const [data, setData] = useState(initialData);
  const [balance, setBalance] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidReceiver = await isAccountExisting(
      data.toAccountNumber.toUpperCase(),
      token
    );

    if (data.fromAccountNumber === "") {
      setShowModal({
        header: modalHeaders.TRANSFER_COINS,
        body: errorMessages.NO_ACCOUNT_CHOSEN,
        visible: true,
        type: modalType.ERROR,
      });
    } else if (data.toAccountNumber === "") {
      setShowModal({
        header: modalHeaders.TRANSFER_COINS,
        body: errorMessages.NO_RECEIVER,
        visible: true,
        type: modalType.ERROR,
      });
    } else if (data.fromAccountNumber === data.toAccountNumber.toUpperCase()) {
      setShowModal({
        header: modalHeaders.TRANSFER_COINS,
        body: errorMessages.INVALID_RECEIVER,
        visible: true,
        type: modalType.ERROR,
      });
    } else if (!data.amount.length || data.amount === "0") {
      setShowModal({
        header: modalHeaders.TRANSFER_COINS,
        body: errorMessages.INVALID_AMOUNT,
        visible: true,
        type: modalType.ERROR,
      });
    } else if (balance < data.amount) {
      setShowModal({
        header: modalHeaders.TRANSFER_COINS,
        body: errorMessages.NOT_ENOUGH_BALANCE,
        visible: true,
        type: modalType.ERROR,
      });
    } else if (!isValidReceiver) {
      setShowModal({
        header: modalHeaders.TRANSFER_COINS,
        body: errorMessages.RECEIVER_DOES_NOT_EXIST,
        visible: true,
        type: modalType.ERROR,
      });
    } else {
      setShowModal({
        header: modalHeaders.TRANSFER_COINS,
        body: errorMessages.CONFIRM_TRANSFER.replace("%", data.amount).replace(
          "%",
          data.toAccountNumber
        ),
        visible: true,
        type: modalType.CONFIRM,
        callback: {
          action: transferCoins,
          args: data,
        },
        cleanUp: {
          action: resetForm,
          args: null,
        },
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "fromAccountNumber") {
      if (value !== "") {
        const balance = accounts.filter(
          (account) => account.accountNumber === value
        )[0].balance;
        setBalance(balance);
      } else {
        setBalance(0);
      }
    }

    setData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setData(initialData);
    setBalance(0);
  };

  const formatBal = () => {
    return Intl.NumberFormat("en", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(balance);
  };

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-1">
        <label htmlFor="select-account">Select Account</label>
        <select
          value={data.fromAccountNumber}
          onChange={handleInputChange}
          className={`bg-amber-50 p-4 border-2 border-amber-200 rounded-md outline-none focus:border-amber-300 ${
            accounts.length ? "" : "text-stone-500"
          }`}
          name="fromAccountNumber"
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
        <label htmlFor="amount">Receiver</label>
        <input
          onChange={handleInputChange}
          value={data.toAccountNumber}
          className="bg-amber-50 uppercase p-4 border-2 border-amber-200 rounded-md outline-none focus:border-amber-300 placeholder:normal-case placeholder:text-stone-500"
          name="toAccountNumber"
          type="text"
          maxLength={9}
          placeholder="Enter recipient's account number"
        />
      </div>
      <div className="grid gap-1">
        <span className="flex justify-between items-center">
          <label htmlFor="amount">Amount</label>
          <label htmlFor="available-balance" className="text-xs">
            Available: {formatBal()}
          </label>
        </span>
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

export default TransferCoinsForm;
