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

  // Others
  INVALID_NAME: "Please use alphabetical characters only.",
  INVALID_EMAIL: "Please enter a valid email address.",
  INVALID_USERNAME: "Please use alphanumeric characters and underscore ( _ ) only.",
  INVALID_PASSWORD: "Password must have at least one (1) each: uppercase, lowercase, numeric, and special character.",
  EMAIL_ALREADY_USED: "Email is already in use.",
  USERNAME_TAKEN: "Username is already taken.",
  PASSWORD_MISMATCH: "Password does not match.",
  PASSWORD_UNCONFIRMED: "Please confirm your password."
};

export default errorMessages;