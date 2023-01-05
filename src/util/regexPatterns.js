const regexPatterns = {
  NAME: /^[A-Za-z\s]+$/,
  EMAIL: /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  USERNAME: /^([a-zA-Z0-9_])+$/,
  PASSWORD: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]).*$/
}

export default regexPatterns;