import React from "react";

const TextField = ({
  htmlFor,
  text,
  handleInputChange,
  value,
  name,
  type,
  placeHolderText,
  maxLength,
  minAmount,
  balance,
}) => {
  const isAmount = htmlFor === "account";

  return (
    <>
      {!isAmount ? (
        <label htmlFor={htmlFor}>{text}</label>
      ) : (
        <span className="flex justify-between items-center">
          <label htmlFor={htmlFor}>{text}</label>
          <label htmlFor="available-balance" className="text-xs">
            Available: {balance}
          </label>
        </span>
      )}
      <input
        onChange={handleInputChange}
        value={value}
        className="bg-amber-50 uppercase p-4 border-2 border-amber-200 rounded-md outline-none focus:border-amber-300 placeholder:normal-case placeholder:text-stone-500"
        name={name}
        type={type}
        maxLength={maxLength}
        min={minAmount}
        placeholder={placeHolderText}
      />
    </>
  );
};

export default TextField;
