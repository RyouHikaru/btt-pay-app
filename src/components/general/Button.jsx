const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-amber-500 text-amber-100 rounded-md py-3 px-5 self-start hover:opacity-75"
    >
      {text}
    </button>
  );
};

export default Button;
