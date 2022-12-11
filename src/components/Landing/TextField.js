const TextField = ({ type, name, text, handleChange, isValid, setIsValid}) => {
  const getInputStyle = (isValid) => {
    const validStyles = "peer rounded-md border-2 border-stone-800 border-solid p-4 w-full bg-stone-100";
    const inValidStyles = validStyles
      .replace('border-stone-800', 'border-red-500')
      .concat(' ', 'text-red-500');

    return isValid ? validStyles : inValidStyles;
  }

  const getLabelStyle = (isValid) => {
    const validStyles = "peer-focus:animate-slide-out peer-valid:animate-slide-out peer-valid:bg-stone-100 text-md absolute top-4 left-3 px-1 pointer-events-none";
    const invalidStyles = validStyles.concat(' ', 'text-red-500');

    return isValid ? validStyles : invalidStyles;
  }

  return (
    <div className="relative">
      <div className="bg-stone-100"></div>
      <input className={getInputStyle(isValid)} type={type} onChange={handleChange} onFocus={() => setIsValid(true)} required />
      <label className={getLabelStyle(isValid)} htmlFor={name}>{text}</label>
    </div>
  )
}

export default TextField;