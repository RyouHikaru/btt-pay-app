import { Link } from "react-router-dom";

const ServiceCard = ({ name }) => {
  const formatServiceName = () => {
    return name.replaceAll("-", " ").toUpperCase();
  };

  return (
    <section className="bg-cyan-600 text-cyan-100 w-full h-full md:w-3/4 xl:w-1/2 p-5 rounded-md shadow-xl">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">{formatServiceName()}</h2>
        <Link to="/services" className="hidden underline text-sm sm:block hover:opacity-75">
          Back to Services
        </Link>
      </div>
    </section>
  );
};

export default ServiceCard;
