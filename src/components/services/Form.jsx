const Form = ({ children, handleSubmit }) => {
  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
