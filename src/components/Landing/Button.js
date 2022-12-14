const Button = ({ text }) => {
  return (
    <button 
      type="submit" 
      className="bg-stone-800 text-stone-100 rounded-md py-3 px-5 self-start hover:opacity-75" 
    >{text}</button>
  )
}

export default Button;