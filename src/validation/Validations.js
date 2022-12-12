// Error Messages
const required = field => `Please enter your ${field}.`;
const range = (from, to) => `Please use between ${from} and ${to} characters.`

const NAME_MSG = "Please use alphabetical characters only."
const NAME_RANGE_MSG = range(2, 20);
const EMAIL_MSG = "Please enter a valid email address."
const USERNAME_RANGE_MSG = range(6, 20);
const USERNAME_MSG = "Please use alphanumeric characters and underscore ( _ ) only."
const PASSWORD_RANGE_MSG = range(8, 30);
const PASSWORD_MSG = "Please make sure to have at least one (1) uppercase, lowercase, numeric, and special character."
const MATCH_PW_MSG = "Password does not match.";

// Patterns
const NAME_PATTERN = /^[A-Za-z\s]+$/i;
const EMAIL_PATTERN = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/i;
const USERNAME_PATTERN = /^([a-zA-Z0-9_])+$/i;
const PASSWORD_PATTERN = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]).*$/i;

const matchPasswordPattern = pattern => new RegExp(`^${pattern}$`);


export const firstNameValidation = {
  required: required('first name'),
  minLength: {
    value: 2,
    message: NAME_RANGE_MSG
  },
  maxLength: {
    value: 20,
    message: NAME_RANGE_MSG
  },
  pattern: {
    value: NAME_PATTERN,
    message: NAME_MSG
  }
}

export const lastNameValidation = {
  required: required('last name'),
  minLength: {
    value: 2,
    message: NAME_RANGE_MSG
  },
  maxLength: {
    value: 20,
    message: NAME_RANGE_MSG
  },
  pattern: {
    value: NAME_PATTERN,
    message: NAME_MSG
  }
}

export const emailValidation = {
  required: required('email address'),
  pattern: {
    value: EMAIL_PATTERN,
    message: EMAIL_MSG
  }
}

export const usernameValidation = {
  required: required('username'),
  minLength: {
    value: 6,
    message: USERNAME_RANGE_MSG
  },
  maxLength: {
    value: 20,
    message: USERNAME_RANGE_MSG
  },
  pattern: {
    value: USERNAME_PATTERN,
    message: USERNAME_MSG
  }
}

export const passwordValidation = {
  required: required('password'),
  minLength: {
    value: 8,
    message: PASSWORD_RANGE_MSG
  },
  maxLength: {
    value: 30,
    message: PASSWORD_RANGE_MSG
  },
  pattern: {
    value: PASSWORD_PATTERN,
    message: PASSWORD_MSG
  },
}

export const matchPasswordValidation = (pattern) => {
  return {
    required: MATCH_PW_MSG,
    pattern: {
      value: matchPasswordPattern(pattern),
      message: MATCH_PW_MSG
    }
  }
}