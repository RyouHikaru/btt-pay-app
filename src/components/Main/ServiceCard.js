import { RiBillLine } from "react-icons/ri";
import { FaMoneyBillWave, FaMobileAlt } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";

const ServiceCard = ({ service }) => {

  const getButtonStyle = () => {
    let baseStyle = "flex flex-col gap-3 max-h-40 justify-center items-center p-5 rounded-md bg-cyan-600 text-cyan-100 hover:brightness-110 hover:shadow-xl";
    return baseStyle;
  }

  const getIcon = () => {
    switch(service) {
      case "Pay Bills":
        return <RiBillLine />;
      case "Buy Load":
        return <FaMobileAlt />
      case "Send Coins":
        return <BsCashCoin />
      default:
        return <FaMoneyBillWave />;
    }
  }
  
  const handleClick = (e) => {
    console.log(e);
  }

  return (
    <button onClick={handleClick} className={getButtonStyle()}>
      <span className="text-6xl lg:text-7xl max-h-">{getIcon()}</span>
      <span className="text-lg">{service}</span>
    </button>
  )
}

export default ServiceCard;