import { Link } from "react-router-dom";
import CashInForm from "./CashInForm";

const ServiceCard = ({ name }) => {
  const getComponents = () => {
    switch (name) {
      case "cash-in":
        return <CashInForm />;
      default:
        return null;
    }
  };

  return (
    <section className="flex flex-col bg-amber-100 gap-5 w-full md:w-3/4 xl:w-1/2 p-5 rounded-md shadow-xl">
      <span className="flex justify-between">
        <h2 className="text-lg font-semibold">
          {name.replaceAll("-", " ").toUpperCase()}
        </h2>
        <Link
          to="/services"
          className="hidden underline text-sm sm:block hover:opacity-75"
        >
          Back to Services
        </Link>
      </span>
      <div>{getComponents()}</div>
    </section>
  );
};

export default ServiceCard;
