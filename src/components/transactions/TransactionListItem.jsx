const TransactionListItem = ({ type, details, amount, date }) => {
  return (
    <li className="flex justify-between">
      <div className="grid">
        <span>
          {type} - {details}
        </span>
        <span className="text-xs">{date}</span>
      </div>
      <span>{type === "CREDIT" ? `+ ${amount}` : `- ${amount}`}</span>
    </li>
  );
};

export default TransactionListItem;
