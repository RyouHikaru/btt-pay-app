const ErrorMessage = ({ message }) => {
  return (
    <p className={!!message ? "text-red-500 text-sm" : "hidden"}>{message}</p>
  )
}

export default ErrorMessage;