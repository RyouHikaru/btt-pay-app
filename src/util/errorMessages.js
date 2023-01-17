const required = (field) => `Please enter your ${field}.`;
const range = (from, to) => `Please use between ${from} and ${to} characters.`;

const errorMessages = {
  // Required
  REQUIRED_FIRST_NAME: required("first name"),
  REQUIRED_LAST_NAME: required("last name"),
  REQUIRED_EMAIL: required("email address"),
  REQUIRED_USERNAME: required("username"),
  REQUIRED_PASSWORD: required("password"),
  REQUIRED_CONTACT_NAME: required("name"),
  REQUIRED_CONTACT_MSG: required("message"),

  // Range
  RANGE_NAME: range(2, 20),
  RANGE_USERNAME: range(6, 20),
  RANGE_PASSWORD: range(8, 30),

  // Invalid
  INVALID_NAME: "Please use alphabetical characters only.",
  INVALID_EMAIL: "Please enter a valid email address.",
  INVALID_USERNAME: "Please use alphanumeric characters and underscore ( _ ) only.",
  INVALID_PASSWORD: "Password must have at least one (1) each: uppercase, lowercase, numeric, and special character.",
  INVALID_AMOUNT: "Please enter an amount more than 0.",
  INVALID_RECEIVER: "Sorry, you cannot transfer coins from the same account.",
  INVALID_REF_NO: "Please enter the reference number of the bill you are paying for.",
  INVALID_MOBILE_NO: "Please enter a valid mobile number.",
  EMAIL_ALREADY_USED: "Email is already in use.",
  USERNAME_TAKEN: "Username is already taken.",
  PASSWORD_MISMATCH: "Password does not match.",
  PASSWORD_UNCONFIRMED: "Please confirm your password.",
  NO_ACCOUNT_CHOSEN: "Please select an account.",
  NO_RECEIVER: "Please enter receiver's account number",
  RECEIVER_DOES_NOT_EXIST: "Receiver's account number does not exist.",
  NOT_ENOUGH_BALANCE: "Sorry, you do not have enough balance on your account.",
  NO_PAY_ACCOUNT: "Sorry, you do not have a PAY account yet. Consider opening one to access this feature.",

  // Confirmation
  CONFIRM_REGISTRATION: "By confirming, you have agreed that all details are valid.",
  CONFIRM_OPEN_ACCOUNT: "By confirming, you have agreed that a % account will be opened under your name.",
  CONFIRM_CASH_IN: "Confirm Cash In amount of % coins for your account %?",
  CONFIRM_TRANSFER: "Confirm Transfer of % coins to account %?",
  CONFIRM_PAY_BILLS: "Confirm Payment of % coins to the specified reference number?",
  CONFIRM_BUY_LOAD: "Confirm Buy Load using % coins to mobile number %?",
  
};

export default errorMessages;