const TextField = ({ type, name, text, handleChange, isValid, isEmpty }) => {
  return (
    <div className="relative">
      <input
        className={`peer rounded-md border-2 border-solid p-4 w-full focus:outline-none bg-amber-100 ${
          isValid ? "border-stone-500" : "border-red-500 text-red-500"
        }`}
        name={name}
        type={type}
        onChange={handleChange}
        autoFocus={text === "Username"}
      />
      <label
        className={`peer-focus:animate-slide-out text-md absolute top-4 left-3 px-1 pointer-events-none ${
          !isEmpty ? "peer-valid:animate-slide-out" : ""
        } ${!isValid ? "text-red-500" : ""}`}
        htmlFor={name}
      >
        {text}
      </label>
    </div>
  );
};

export default TextField;
