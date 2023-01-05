import { useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";

const Missing = () => {
  const userSession = useStoreState((state) => state.userSession);

  return (
    <section className="flex-grow flex justify-center items-center p-5">
      <div className="flex flex-col gap-8 p-5 w-full bg-stone-100 rounded-md opacity-90 shadow-2xl md:max-w-lg">
        <h1 className="text-2xl">Oops! It seems like you are lost.</h1>
        <span className="text-lg underline">
          {!userSession ? (
            <Link to="/">Back to Login</Link>
          ) : (
            <Link to="/home">Back to Home</Link>
          )}
        </span>
      </div>
    </section>
  );
};

export default Missing;
