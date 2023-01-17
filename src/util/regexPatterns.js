const regexPatterns = {
  NAME: /^[A-Za-z\s]+$/,
  EMAIL: /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  USERNAME: /^([a-zA-Z0-9_])+$/,
  PASSWORD: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]).*$/,
  MOBILE_NO: /^((09)[0-9]{9})+$/,
}

export default regexPatterns;