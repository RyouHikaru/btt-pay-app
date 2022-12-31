import { createStore, action, thunk } from 'easy-peasy';
import api from './services/api';
import jwtDecode from 'jwt-decode';

const model = {
  userSession: 
    sessionStorage.userSession ? 
    JSON.parse(sessionStorage.userSession) : null,
  setUserSession: action((state, payload) => {
    state.userSession = payload;
    sessionStorage.setItem('userSession', JSON.stringify(payload));
  }),
  accounts: [],
  setAccounts: action((state, payload) => {
    state.accounts = payload;
  }),
  logout: action((state) => {
    state.userSession = null;
    sessionStorage.clear();
  }),
  errorMsg: null,
  setErrorMsg: action((state, payload) => {
    state.errorMsg = payload;
  }),
  showModal: {
    header: '',
    body: '',
    visible: false,
    type: 'INFO',
    action: null
  },
  setShowModal: action((state, payload) => {
    state.showModal = payload;
  }),
  isMobileMenuClicked: false,
  setIsMobileMenuClicked: action((state, payload) => {
    state.isMobileMenuClicked = payload;
  }),
  login: thunk(async (actions, request, helper) => {
    const { setErrorMsg, setUserSession } = helper.getStoreActions();
    let successful = true;

    try {
      const response = await api.post('/api/auth/login', request);
      setUserSession(response.data);

    } catch(e) {
      setErrorMsg(e.response.data.message);
      successful = false;
    } finally {
      return successful;
    }
  }),
  register: thunk(async (actions, request, helper) => {
    const { setShowModal } = helper.getStoreActions();

    try {
      const response = await api.post('/api/auth/register', request);

      setShowModal({
        header: 'Registration',
        body: response.data.message,
        visible: true,
        type: 'INFO'
      });
    } catch(e) {
      console.log(e);
    }
  }),
  retrieveUserAccounts: thunk(async (actions, payload, helper) => {
    const { setAccounts } = helper.getStoreActions();

    const token = payload;
    const decodedToken = jwtDecode(token);

    const id = decodedToken.userId;

    try {
      const URL = '/api/accounts/user?';
      const response = await api.post(`${URL}id=${id}`, null, {
        headers: { Authorization: `Bearer ${token}`}
      });

      setAccounts(response.data);
    } catch(e) {
      console.log(e);
    }
  }),
  openAccount: thunk(async (actions, payload, helper) => {
    const { setShowModal, retrieveUserAccounts } = helper.getStoreActions();
    const { type, token } = payload;
    const decodedToken = jwtDecode(token);
    const id = decodedToken.userId;

    try {
      const data = { accountType: type, userId: id };

      const response = await api.post('/api/accounts', data, {
        headers: { Authorization: `Bearer ${token}`}
      });

      setShowModal({
        header: 'Open Account',
        body: response.data.message,
        visible: true,
        type: 'INFO'
      });

      retrieveUserAccounts(token);
    } catch(e) {
      console.log(e);
    }
  })
};

export default createStore(model);