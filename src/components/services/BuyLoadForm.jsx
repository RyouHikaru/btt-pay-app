import { useStoreActions, useStoreState } from "easy-peasy";
import { useMemo, useState } from "react";
import { modalHeaders, modalType } from "../../util/modalContent";
import { isMobileNumberValid } from "../../util/validations";
import errorMessages from "../../util/errorMessages";
import Form from "./Form";
import Container from "./Container";
import Button from "./Button";
import TextField from "./TextField";

const CashInForm = () => {
  const accounts = useStoreState((state) => state.accounts);
  const { payBills, setShowModal } = useStoreActions((action) => ({
    payBills: action.payBills,
    setShowModal: action.setShowModal,
  }));

  const account = useMemo(() => {
    return accounts.filter((acct) => acct.accountType === "PAY")[0];
  }, [accounts]);

  const initialData = {
    accountNumber: "",
    mobileNo: "",
    details: "BUY LOAD",
    amount: "",
    transactionType: "DEBIT",
  };

  const [data, setData] = useState(initialData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!account.accountNumber) {
      setShowModal({
        header: modalHeaders.BUY_LOAD,
        body: errorMessages.NO_PAY_ACCOUNT,
        visible: true,
        type: modalType.ERROR,
      });
    } else if (data.mobileNo === "" || !isMobileNumberValid(data.mobileNo)) {
      setShowModal({
        header: modalHeaders.BUY_LOAD,
        body: errorMessages.INVALID_MOBILE_NO,
        visible: true,
        type: modalType.ERROR,
      });
    } else if (!data.amount.length || data.amount === "0") {
      setShowModal({
        header: modalHeaders.BUY_LOAD,
        body: errorMessages.INVALID_AMOUNT,
        visible: true,
        type: modalType.ERROR,
      });
    } else if (account.balance < data.amount) {
      setShowModal({
        header: modalHeaders.BUY_LOAD,
        body: errorMessages.NOT_ENOUGH_BALANCE,
        visible: true,
        type: modalType.ERROR,
      });
    } else {
      const payBillsData = data;
      payBillsData.accountNumber = account.accountNumber;

      setShowModal({
        header: modalHeaders.BUY_LOAD,
        body: errorMessages.CONFIRM_BUY_LOAD.replace("%", data.amount).replace(
          "%",
          data.mobileNo
        ),
        visible: true,
        type: modalType.CONFIRM,
        callback: {
          action: payBills,
          args: payBillsData,
        },
        cleanUp: {
          action: setData,
          args: initialData,
        },
      });

      account.balance = account.balance - data.amount;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const formatBal = () => {
    return Intl.NumberFormat("en", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(account?.balance);
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <Container>
        <TextField
          htmlFor="mobileNo"
          text="Mobile No."
          handleInputChange={handleInputChange}
          value={data.mobileNo}
          name="mobileNo"
          type="text"
          placeHolderText="Enter 11-digit mobile number"
          maxLength={11}
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

export default CashInForm;
