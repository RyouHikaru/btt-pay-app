import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import bttCoin from "../../assets/img/logo192.png";
import Separator from "../general/Separator";

const AccountCard = ({
  acctNo,
  acctType,
  bal,
  isClicked,
  setIsClicked,
}) => {
  const color = {
    SAVINGS: "text-emerald-800",
    PAY: "text-cyan-800",
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
      className={`flex flex-col gap-5 p-5 shadow-md rounded-md max-w-xl hover:brightness-110 hover:shadow-xl xl:max-h-64 bg-amber-100 text-stone-800`}
    >
      <div>
        <h2 className={`text-lg font-semibold ${color[acctType]}`}>{`My ${acctType} Account`}</h2>
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
      <Separator />
      <div className="mx-auto">
        <span className="hover:opacity-75">
          <Link to={acctType.toLowerCase()}>View Transactions</Link>
        </span>
      </div>
    </article>
  );
};

export default AccountCard;
