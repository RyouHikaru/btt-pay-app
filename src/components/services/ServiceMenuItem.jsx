import { RiBillLine } from "react-icons/ri";
import { FaMoneyBillWave, FaMobileAlt } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceMenuItem = ({ service }) => {
  const link = service.replaceAll(" ", "-").toLowerCase();

  const icon = {
    "Cash In": <FaMoneyBillWave />,
    "Pay Bills": <RiBillLine />,
    "Buy Load": <FaMobileAlt />,
    "Transfer Coins": <BsCashCoin />,
  };

  return (
    <Link
      to={link}
      className="flex flex-col gap-3 max-h-40 justify-center items-center p-5 rounded-md shadow-md bg-amber-100 text-stone-800 hover:brightness-110 hover:shadow-xl"
    >
      <span className="text-6xl lg:text-7xl max-h-">{icon[service]}</span>
      <span className="text-lg text-center">{service}</span>
    </Link>
  );
};

export default ServiceMenuItem;
