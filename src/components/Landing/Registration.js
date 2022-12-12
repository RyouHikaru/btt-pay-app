import { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from './TextField';
import ErrorMessage from '../Error/ErrorMessage';
import Button from "./Button";

const Registration = () => {
  const [data, setData] = useState({ 
    firstname: '', lastname: '', email: '',
    username: '', password: '', confirmPassword: ''
  });
  const [isValid, setIsValid] = useState(true);

  const handleSignUp = (e) => {
    e.preventDefault();
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setData(previousState => ({
      ...previousState, [name]: value
    }));
  }

  const getErrorMessage = () => {
    // TODO
    return "Input invalid.";
  }

  return (
    <section className="flex-grow flex items-center px-5 py-10 sm:justify-center md:px-24">
      <div className="flex flex-col gap-8 p-5 w-full bg-stone-100 rounded-md opacity-90 shadow-2xl md:max-w-lg">
        <h1 className="text-2xl font-semibold">Registration</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSignUp}>
          <TextField type="text" name="firstname" text="First name" handleChange={handleInputChange} isEmpty={data.firstname.length === 0} isValid={isValid} setIsValid={setIsValid} />
          <ErrorMessage isValid={isValid} message={getErrorMessage()} />
          
          <TextField type="text" name="lastname" text="Last name" handleChange={handleInputChange} isEmpty={data.lastname.length === 0} isValid={isValid} setIsValid={setIsValid} />
          <ErrorMessage isValid={isValid} message={getErrorMessage()} />

          <TextField type="text" name="email" text="Email address" handleChange={handleInputChange} isEmpty={data.email.length === 0} isValid={isValid} setIsValid={setIsValid} />

          <TextField type="text" name="username" text="Username" handleChange={handleInputChange} isEmpty={data.username.length === 0} isValid={isValid} setIsValid={setIsValid} />
          <ErrorMessage isValid={isValid} message={getErrorMessage()} />

          <TextField type="password" name="password" text="Password" handleChange={handleInputChange} isEmpty={data.password.length === 0} isValid={isValid} setIsValid={setIsValid} />
          <ErrorMessage isValid={isValid} message={getErrorMessage()} />

          <Button isValid={isValid} text="Sign Up" />
        </form>
        <nav className="flex gap-2 mt-10 text-sm">
          <span className='italic'>
            Already have an account?
          </span>
          <span className="hover:opacity-75 underline"><Link to="/">Sign In</Link></span>
        </nav>
      </div>
    </section>
  )
}

export default Registration;