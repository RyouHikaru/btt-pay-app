const TransactionListItem = ({ type, amount, date }) => {
  const formatAmount = () => {
    return type === "CREDIT" ? `+ ${amount}` : `- ${amount}`;
  };

  return (
    <li className="flex justify-between">
      <div className="grid">
        <span>{type}</span>
        <span className="text-xs">{date}</span>
      </div>
      <span>{formatAmount()}</span>
    </li>
  );
};

export default TransactionListItem;
