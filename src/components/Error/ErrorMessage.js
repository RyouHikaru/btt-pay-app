const ErrorMessage = ({ isValid, message }) => {
  return (
    <span className={!isValid ? "text-red-500 text-sm" : "hidden"}>{message}</span>
  )
}

export default ErrorMessage;