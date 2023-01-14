import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { modalHeaders, modalType } from "../../util/modalContent";
import errorMessages from "../../util/errorMessages";
import Dropdown from "./Dropdown";
import Form from "./Form";
import Container from "./Container";
import Button from "./Button";
import TextField from "./TextField";

const CashInForm = () => {
  const accounts = useStoreState((state) => state.accounts);
  const { cashIn, setShowModal } = useStoreActions((action) => ({
    cashIn: action.cashIn,
    setShowModal: action.setShowModal,
  }));

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
        header: modalHeaders.CASH_IN,
        body: errorMessages.NO_ACCOUNT_CHOSEN,
        visible: true,
        type: modalType.ERROR,
      });
    } else if (!data.amount.length || data.amount === "0") {
      setShowModal({
        header: modalHeaders.CASH_IN,
        body: errorMessages.INVALID_AMOUNT,
        visible: true,
        type: modalType.ERROR,
      });
    } else {
      setShowModal({
        header: modalHeaders.CASH_IN,
        body: errorMessages.CONFIRM_CASH_IN.replace("%", data.amount).replace(
          "%",
          data.accountNumber
        ),
        visible: true,
        type: modalType.CONFIRM,
        callback: {
          action: cashIn,
          args: data,
        },
        cleanUp: {
          action: setData,
          args: initialData,
        },
      });
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
    <Form handleSubmit={handleSubmit}>
      <Container>
        <Dropdown
          htmlFor="select-account"
          text="Select Account"
          accounts={accounts}
          accountNumber={data.accountNumber}
          handleInputChange={handleInputChange}
          serviceType="cash-in"
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
        />
      </Container>
      <Button>Submit</Button>
    </Form>
  );
};

export default CashInForm;
