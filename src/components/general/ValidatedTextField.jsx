import { useEffect, useState } from "react";
import { ErrorMessage } from "@hookform/error-message";

const ValidatedTextField = ({
  type,
  name,
  text,
  register,
  errors,
  validation,
  hasContent,
}) => {
  const [isValid, setIsValid] = useState(true);
  const error = errors?.[name];

  useEffect(() => {
    setIsValid(!error);
  }, [error]);

  return (
    <div className="relative">
      {type !== "textarea" ? (
        <input
          className={`peer rounded-md p-4 w-full bg-amber-100 border-2 border-solid focus:outline-none ${
            isValid ? "border-stone-500" : "border-red-500 text-red-500"
          }`}
          type={type}
          name={name}
          {...register(name, validation)}
          autoFocus={text === "First name" || text === "Name"}
        />
      ) : (
        <textarea
          rows="7"
          className={`peer rounded-md resize-none border-2 border-solid p-4 w-full bg-amber-100 focus:outline-none ${
            isValid ? "border-stone-500" : "border-red-500 text-red-500"
          }`}
          type={type}
          name={name}
          {...register(name, validation)}
        />
      )}
      <label
        className={`peer-focus:animate-slide-out text-md absolute top-4 left-3 px-1 pointer-events-none ${
          hasContent ? "peer-valid:animate-slide-out" : ""
        } ${isValid ? "" : "text-red-500"}`}
        htmlFor={name}
      >
        {text}
      </label>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="pt-2 text-red-500 text-xs">{message}</p>
        )}
      />
    </div>
  );
};

export default ValidatedTextField;
