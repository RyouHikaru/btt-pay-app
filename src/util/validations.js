import api from "../adapters/api";
import errorMessages from "../util/errorMessages";
import regexPatterns from "../util/regexPatterns";

const isUsernameExisting = async (username) => {
  let isExisting = false;
  try {
    const URL = "/api/auth/register/validate-username?";
    const response = await api.post(`${URL}username=${username}`);
    isExisting = response.data;
  } catch (e) {
    console.log(e);
  } finally {
    return isExisting;
  }
};

export const isEmailExisting = async (email) => {
  let isExisting = false;
  try {
    const URL = "/api/auth/register/validate-email?";
    const response = await api.post(`${URL}email=${email}`);
    isExisting = response.data;
  } catch (e) {
    console.log(e);
  } finally {
    return isExisting;
  }
};

export const isAccountExisting = async (accountNumber, token) => {
  let isExisting = false;
  try {
    const URL = "/api/accounts/exists?";
    const response = await api.post(
      `${URL}accountNumber=${accountNumber}`,
      null,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    isExisting = response.data;
  } catch (e) {
    console.log(e);
  } finally {
    return isExisting;
  }
};

export const isEmailValid = (email) => {
  return regexPatterns.EMAIL.test(email);
};

export const firstNameValidation = {
  required: errorMessages.REQUIRED_FIRST_NAME,
  minLength: {
    value: 2,
    message: errorMessages.RANGE_NAME,
  },
  maxLength: {
    value: 20,
    message: errorMessages.RANGE_NAME,
  },
  pattern: {
    value: regexPatterns.NAME,
    message: errorMessages.INVALID_NAME,
  },
};

export const lastNameValidation = {
  required: errorMessages.REQUIRED_LAST_NAME,
  minLength: {
    value: 2,
    message: errorMessages.RANGE_NAME,
  },
  maxLength: {
    value: 20,
    message: errorMessages.RANGE_NAME,
  },
  pattern: {
    value: regexPatterns.NAME,
    message: errorMessages.INVALID_NAME,
  },
};

export const emailValidation = {
  required: errorMessages.REQUIRED_EMAIL,
  pattern: {
    value: regexPatterns.EMAIL,
    message: errorMessages.INVALID_EMAIL,
  },
  validate: {
    isAvailable: async (v) =>
      !(await isEmailExisting(v)) || errorMessages.EMAIL_ALREADY_USED,
  },
};

export const usernameValidation = {
  required: errorMessages.REQUIRED_USERNAME,
  minLength: {
    value: 6,
    message: errorMessages.RANGE_USERNAME,
  },
  maxLength: {
    value: 20,
    message: errorMessages.RANGE_USERNAME,
  },
  pattern: {
    value: regexPatterns.USERNAME,
    message: errorMessages.INVALID_USERNAME,
  },
  validate: {
    isAvailable: async (v) =>
      !(await isUsernameExisting(v)) || errorMessages.USERNAME_TAKEN,
  },
};

export const passwordValidation = {
  required: errorMessages.REQUIRED_PASSWORD,
  minLength: {
    value: 8,
    message: errorMessages.RANGE_PASSWORD,
  },
  maxLength: {
    value: 30,
    message: errorMessages.RANGE_PASSWORD,
  },
  pattern: {
    value: regexPatterns.PASSWORD,
    message: errorMessages.INVALID_PASSWORD,
  },
};

export const matchPasswordValidation = (password) => {
  return {
    validate: {
      isConfirmed: (v) =>
        (password.length > 0 && v.length > 0) ||
        errorMessages.PASSWORD_UNCONFIRMED,
      isEqual: (v) => password === v || errorMessages.PASSWORD_MISMATCH,
    },
  };
};

export const contactNameValidation = {
  required: errorMessages.REQUIRED_CONTACT_NAME,
};

export const contactMsgValidation = {
  required: errorMessages.REQUIRED_CONTACT_MSG,
};
