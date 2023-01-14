import DropdownItem from "./DropdownItem";

const Dropdown = ({
  htmlFor,
  text,
  accounts,
  accountNumber,
  handleInputChange,
  serviceType,
}) => {
  const hasAccount = accounts.length;

  return (
    <>
      <label htmlFor={htmlFor}>{text}</label>
      <select
        value={accountNumber}
        onChange={handleInputChange}
        className={`bg-amber-50 p-4 border-2 border-amber-200 rounded-md outline-none focus:border-amber-300 ${
          hasAccount ? "" : "text-stone-500"
        }`}
        name={serviceType === "cash-in" ? "accountNumber" : "fromAccountNumber"}
      >
        <option defaultValue={""}>
          {hasAccount ? "" : "No accounts found"}
        </option>
        {accounts.map((account) => (
          <DropdownItem key={account.id} id={account.id} accountNumber={account.accountNumber} />
        ))}
      </select>
    </>
  );
};

export default Dropdown;
