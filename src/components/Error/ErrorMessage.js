const ErrorMessage = ({ isValid, message }) => {
  return (
    <p className={!isValid ? "text-red-500 text-sm" : "hidden"}>{message}</p>
  )
}

export default ErrorMessage;