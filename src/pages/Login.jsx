import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../components/general/TextField";
import ErrorMessage from "../components/general/ErrorMessage";
import Button from "../components/general/Button";
import errorMessages from "../util/errorMessages";

const Login = () => {
  const redirect = useNavigate();
  const errorMsg = useStoreState((state) => state.errorMsg);
  const { setErrorMsg, login } = useStoreActions((action) => ({
    setErrorMsg: action.setErrorMsg,
    login: action.login,
  }));

  const [data, setData] = useState({ username: "", password: "" });
  const [isValid, setIsValid] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (data.username.length === 0 || data.password.length === 0) {
      setErrorMsg(errorMessages.REQUIRED_UN_AND_PW);
      setIsValid(false);
    } else {
      const loginResult = await login(data);

      setIsValid(loginResult);

      if (loginResult) {
        redirect("home");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData((previousState) => ({
      ...previousState,
      [name]: value,
    }));

    setIsValid(true);
    setErrorMsg(null);
  };

  return (
    <section className="flex-grow flex justify-center px-5 bg-gradient-to-br from-amber-200 to-amber-400 opacity-95 py-10 sm:justify-start md:px-24">
      <div className="flex flex-col gap-8 p-5 self-start w-full bg-amber-100 rounded-md shadow-2xl md:max-w-sm">
        <h1 className="text-2xl font-semibold">Sign in to your account</h1>
        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <TextField
            type="text"
            name="username"
            text="Username"
            handleChange={handleInputChange}
            isEmpty={data.username.length === 0}
            isValid={isValid}
          />
          <TextField
            type="password"
            name="password"
            text="Password"
            handleChange={handleInputChange}
            isEmpty={data.password.length === 0}
            isValid={isValid}
          />
          <Button text="Sign In" />
          <ErrorMessage message={errorMsg} />
        </form>
        <nav>
          <ul className="flex flex-col gap-2 mt-10">
            <li className="hover:opacity-75 text-sm underline">
              <Link to="registration">Sign Up</Link>
            </li>
            <li className="hover:opacity-75 text-sm underline">
              <Link to="forgot-password">Forgot Password?</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Login;
