import { createStore, StoreProvider, action } from 'easy-peasy';

const model = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
  },
  setUser: action((state, payload) => {
    state.user = payload;
  }),
  errorMsg: '',
  setErrorMsg: action((state, payload) => {
    state.errorMsg = payload;
  })
};

export default createStore(model);