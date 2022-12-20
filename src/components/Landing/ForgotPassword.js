import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TextField from './TextField';
import ErrorMessage from "../ErrorMessage";
import Button from "./Button";

const ForgotPassword = () => {
  const redirect = useNavigate();
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  // FIXME: Fetch from API
  const isEmailExisting = (email) => {
    let emailList = ['user@gmail.com', 'cjreblora@gmail.com']
    return emailList.includes(email);
  }

  const isEmailValid = (email) => {
    const EMAIL_PATTERN = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
    return EMAIL_PATTERN.test(email);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.length === 0) {
      setErrorMsg('Please enter your email address.');
      setIsValid(false);
    }
    else if (!isEmailValid(email)) {
      setErrorMsg('Please enter a valid email address.');
      setIsValid(false);
    }
    else if (!isEmailExisting(email)) {
      setErrorMsg('Sorry, we cannot find user with that email.');
      setIsValid(false);
    }
    else {
      setErrorMsg(null);
      setIsValid(true);
      redirect('/');
    }
  }

  const handleInputChange = (e) => {    
    setEmail(e.target.value);

    setIsValid(true);
    setErrorMsg(null);
  }

  return (
    <section className="flex-grow flex items-center px-5 py-10 sm:justify-center md:px-24">
      <div className="flex flex-col gap-8 p-5 w-full bg-stone-100 rounded-md opacity-90 shadow-2xl md:max-w-lg">
        <h1 className="text-2xl font-semibold">Forgot Password</h1>
        <h2 className='italic'>Please enter your email which you first registered with.</h2>
        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <TextField 
            type="text" name="email" text="Email address" handleChange={handleInputChange} 
            isEmpty={email.length === 0} isValid={isValid} 
          />
          <Button text="Reset Password" />
          <ErrorMessage message={errorMsg} />
        </form>
        <nav className="flex gap-2 mt-10 text-sm">
          <span className="hover:opacity-75 underline"><Link to="/">Back to Sign In</Link></span>
        </nav>
      </div>
    </section>
  )
}

export default ForgotPassword;