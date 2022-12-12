import { useState } from "react";
import { Link } from 'react-router-dom';
import TextField from "./TextField";
import ErrorMessage from "../Error/ErrorMessage";
import Button from "./Button";

const Login = () => {
  const [data, setData] = useState({ username: '', password: '' });
  const [isValid, setIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    if (data.username.length === 0 && data.password.length === 0) {
      setErrorMsg('Please input your username and password.');
      setIsValid(false);
    }
    else if (data.username !== "user" && data.password !== "user") {
      setErrorMsg('You have entered invalid credentials.');
      setIsValid(false);
    }
    else {
      setErrorMsg(null);
      setIsValid(true);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setData(previousState => ({
      ...previousState, [name]: value
    }));
  }
  
  return (
    <section className="flex-grow flex justify-center px-5 py-10 sm:justify-start md:px-24">
      <div className="flex flex-col gap-8 p-5 self-start w-full bg-stone-100 rounded-md opacity-90 shadow-2xl md:max-w-sm">
        <h1 className="text-2xl font-semibold">Sign in to your account</h1>
        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <TextField type="text" name="username" text="Username" handleChange={handleInputChange} isEmpty={data.username.length === 0} isValid={isValid} setIsValid={setIsValid} />
          <TextField type="password" name="password" text="Password" handleChange={handleInputChange} isEmpty={data.password.length === 0} isValid={isValid} setIsValid={setIsValid} />
          <Button isValid={isValid} text="Sign In" />
        </form>
        <ErrorMessage isValid={isValid} message={errorMsg} />
        <nav>
          <ul className="flex flex-col gap-2 mt-10">
            <li className="hover:opacity-75 text-sm underline"><Link to="registration">Register</Link></li>
            <li className="hover:opacity-75 text-sm underline"><Link to="forgot-password">Forgot Password?</Link></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Login;