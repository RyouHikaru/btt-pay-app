import React from "react";

const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="justify-self-start bg-amber-500 text-amber-100 p-4 w-1/3 rounded-md hover:opacity-75"
    >
      {children}
    </button>
  );
};

export default Button;
