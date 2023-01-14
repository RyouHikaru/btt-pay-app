import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { modalHeaders, modalType } from "../../util/modalContent";
import { isAccountExisting } from "../../util/validations";
import errorMessages from "../../util/errorMessages";
import Dropdown from "./Dropdown";
import Container from "./Container";
import TextField from "./TextField";
import Button from "./Button";
import Form from "./Form";

const TransferCoinsForm = () => {
  const { token, accounts } = useStoreState((state) => ({
    token: state.userSession.token,
    accounts: state.accounts,
  }));
  const { transferCoins, setShowModal } = useStoreActions((action) => ({
    transferCoins: action.transferCoins,
    setShowModal: action.setShowModal,
  }));

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
    <Form handleSubmit={handleSubmit}>
      <Container>
        <Dropdown
          htmlFor="select-account"
          text="Select Account"
          accounts={accounts}
          accountNumber={data.fromAccountNumber}
          handleInputChange={handleInputChange}
          serviceType="transfer-coins"
        />
      </Container>
      <Container>
        <TextField
          htmlFor="receiver"
          text="Receiver"
          handleInputChange={handleInputChange}
          value={data.toAccountNumber}
          name="toAccountNumber"
          type="text"
          placeHolderText="Enter recipient's account number"
          maxLength={9}
        />
      </Container>
      <Container>
        <TextField
          htmlFor="amount"
          text="Amount"
          handleInputChange={handleInputChange}
          value={data.amount}
          name="amount"
          type="number"
          placeHolderText="Enter amount"
          minAmount={0}
          balance={formatBal()}
        />
      </Container>
      <Button>Submit</Button>
    </Form>
  );
};

export default TransferCoinsForm;
