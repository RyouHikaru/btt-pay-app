import { useState } from "react";
import TextField from "./TextField";

const Landing = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsValid(username === "user" && password === "user");
  }

  const handleInputChange = (e) => {
    if (e.target.type === "text")
      setUsername(e.target.value);
    else
      setPassword(e.target.value);
  }
  
  return (
    <section className="flex-grow flex justify-center px-5 py-10 sm:justify-start md:px-24">
      {/* Login */}
      <div className="flex flex-col gap-8 p-5 self-start w-full bg-stone-100 rounded-md opacity-90 shadow-2xl md:max-w-sm">
        <h1 className="text-2xl font-semibold">Login to your account</h1>
        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <TextField type="text" name="username" text="Username" handleChange={handleInputChange} isValid={isValid} setIsValid={setIsValid} />
          <TextField type="password" name="password" text="Password" handleChange={handleInputChange} isValid={isValid} setIsValid={setIsValid} />
          <button className="bg-stone-800 text-stone-100 rounded-md py-3 px-5 self-start hover:opacity-75" type="submit">Login</button>
        </form>
        <span className={!isValid ? "text-red-500" : "text-red-500 hidden"}>You have entered invalid credentials.</span>
        <nav className="flex flex-col gap-2 mt-10">
          <a className="hover:opacity-75 text-sm" href="#!">Register</a>
          <a className="hover:opacity-75 text-sm" href="#!">Forgot Password</a>
        </nav>
      </div>
    </section>
  )
}

export default Landing;