import api from "../../services/api";

const isEmailExisting = async (email) => {
  let isExisting = false;
  try {
    const URL = '/api/auth/register/validate-email?';

    const response = await api.post(`${URL}email=${email}`);
    isExisting = response.data;
  } catch(e) {
    console.log(e);
  } finally {
    return isExisting;
  }
};

const isUsernameExisting = async (username) => {
  let isExisting = false;
  try {
    const URL = '/api/auth/register/validate-username?';

    const response = await api.post(`${URL}username=${username}`);
    isExisting = response.data;
  } catch(e) {
    console.log(e);
  } finally {
    return isExisting;
  }
};


// Error Messages
const required = (field) => `Please enter your ${field}.`;
const range = (from, to) => `Please use between ${from} and ${to} characters.`
const NAME_MSG = "Please use alphabetical characters only.";
const NAME_RANGE_MSG = range(2, 20);
const EMAIL_MSG = "Please enter a valid email address.";
const EMAIL_TAKEN_MSG = "Email is already in use.";
const USERNAME_RANGE_MSG = range(6, 20);
const USERNAME_MSG = "Please use alphanumeric characters and underscore ( _ ) only.";
const USERNAME_TAKEN_MSG = "Username is already taken.";
const PASSWORD_RANGE_MSG = range(8, 30);
const PASSWORD_MSG = "Password must have at least one (1) each: uppercase, lowercase, numeric, and special character.";
const MATCH_PW_MSG = "Password does not match.";
const MATCH_PW_CONFIRM_MSG = "Please confirm your password.";

// Patterns
const NAME_PATTERN = /^[A-Za-z\s]+$/;
const EMAIL_PATTERN = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
const USERNAME_PATTERN = /^([a-zA-Z0-9_])+$/;
const PASSWORD_PATTERN = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]).*$/;

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
  },
  validate: {
    isAvailable: async (v) => ! await isEmailExisting(v) || EMAIL_TAKEN_MSG
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
  },
  validate: {
    isAvailable: async (v) => ! await isUsernameExisting(v) || USERNAME_TAKEN_MSG
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

export const matchPasswordValidation = (password) => {
  return {
    validate: {
      isConfirmed: (v) => (password.length > 0 && v.length > 0) || MATCH_PW_CONFIRM_MSG,
      isEqual: (v) => password === v || MATCH_PW_MSG
    }
  }
}