import bttCoin from "../../assets/img/logo192.png";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AccountCard = ({
  text,
  acctNo,
  acctType,
  bal,
  isClicked,
  setIsClicked,
}) => {
  const color = {
    SAVINGS: "bg-green-700 text-green-50",
    PAY: "bg-teal-700 text-teal-50",
  };

  const formatBal = () => {
    return Intl.NumberFormat("en", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(bal);
  };

  const formatHiddenBal = () => {
    let hiddenBal = formatBal();
    const numPattern = /[\d.,]/g;

    return hiddenBal.replace(numPattern, "*");
  };

  return (
    <article
      className={`flex flex-col gap-5 p-5 shadown-sm rounded-md max-w-xl hover:brightness-110 hover:shadow-xl xl:max-h-64 ${color[acctType]}`}
    >
      <div>
        <h2 className="text-lg font-semibold">{text}</h2>
        <h3 className="text-md">{acctNo}</h3>
      </div>
      <div className="flex flex-col items-start gap-2 p-5 md:flex-row">
        <h2 className="text-2xl font-semibold whitespace-nowrap">BALANCE :</h2>
        <div className="whitespace-nowrap">
          <span className="grid grid-flow-col gap-2 items-center">
            <span className="text-2xl">
              {isClicked ? formatBal() : formatHiddenBal()}
            </span>
            <img
              src={bttCoin}
              alt="btt-coins"
              width={25}
              height={25}
              className="min-w-[25px]"
            />
            <span
              onClick={() => setIsClicked(!isClicked)}
              className="text-xl cursor-pointer hover:opacity-75"
            >
              {!isClicked ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
            </span>
          </span>
        </div>
      </div>
      <hr />
      <div className="mx-auto">
        <span className="hover:opacity-75">
          <Link to={acctType.toLowerCase()}>View Transactions</Link>
        </span>
      </div>
    </article>
  );
};

export default AccountCard;
