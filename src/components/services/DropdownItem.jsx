import React from "react";

const DropdownItems = ({ id, accountNumber }) => {
  return (
    <option key={id} value={accountNumber}>
      {accountNumber}
    </option>
  );
};

export default DropdownItems;
