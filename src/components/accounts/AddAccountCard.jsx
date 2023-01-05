import { useStoreState, useStoreActions } from "easy-peasy";
import { MdSavings, MdPayments } from "react-icons/md";

const AddAccountCard = ({ type }) => {
  const userSession = useStoreState((state) => state.userSession);
  const setShowModal = useStoreActions((action) => action.setShowModal);
  const openAccount = useStoreActions((action) => action.openAccount);

  const getButtonStyle = () => {
    let baseStyle =
      "flex flex-col items-center min-w-[20rem] p-5 rounded-md bg-green-700 text-green-100 hover:brightness-110 hover:shadow-xl";
    return type === "SAVINGS"
      ? baseStyle
      : baseStyle.replaceAll("green", "teal");
  };

  const handleClick = () => {
    setShowModal({
      header: "Open Account",
      body: `By confirming, you have agreed that a ${type} account will be opened under your name.`,
      visible: true,
      type: "CONFIRM",
      action: {
        callback: openAccount,
        args: { type: type, token: userSession.token },
      },
    });
  };

  return (
    <div className="grid justify-center items-center max-w-xl">
      <button onClick={handleClick} className={getButtonStyle()}>
        <span className="text-9xl">
          {type === "SAVINGS" ? <MdSavings /> : <MdPayments />}
        </span>
        <span className="text-lg">{`Open a ${type} account`}</span>
      </button>
    </div>
  );
};

export default AddAccountCard;
