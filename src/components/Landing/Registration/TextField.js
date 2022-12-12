import { useEffect, useState } from "react";
import { ErrorMessage } from "@hookform/error-message";

const TextField = ({ type, name, text, register, errors, validation, hasContent }) => {
  const [isValid, setIsValid] = useState(true);
  const error = errors[name];

  useEffect(() => {
    setIsValid(error === undefined);
  }, [error])

  const getInputStyle = () => {
    const validStyles = "peer rounded-md border-2 border-stone-800 border-solid p-4 w-full bg-stone-100 focus:outline-none";
    const inValidStyles = validStyles
      .replace('border-stone-800', 'border-red-500')
      .concat(' ', 'text-red-500');

    return isValid ? validStyles : inValidStyles;
  }

  const getLabelStyle = () => {
    const baseStyle = "peer-focus:animate-slide-out text-md absolute top-4 left-3 px-1 pointer-events-none";
    const validStyles = !hasContent ? baseStyle: baseStyle.concat(' ', 'peer-valid:animate-slide-out');
    const invalidStyles = validStyles.concat(' ', 'text-red-500');

    return isValid ? validStyles : invalidStyles;
  }

  return (
    <div className="relative">
      <input className={getInputStyle()} type={type} name={name} {...register(name, validation)} />
      <label className={getLabelStyle()} htmlFor={name}>{text}</label>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className='pt-2 text-red-500 text-xs'>{message}</p>}
      />
    </div>
  )
}

export default TextField;