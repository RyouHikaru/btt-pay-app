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
      })
    } catch(e) {
      console.log(e);
    }
  }),
  retrieveUserAccounts: thunk(async (actions, payload) => {
    const token = payload;
    const decodedToken = jwtDecode(token);
    const id = decodedToken.userId;

    let accounts = [];

    try {
      const URL = '/api/accounts/user?';
      const response = await api.post(`${URL}id=${id}`, null, {
        headers: { Authorization: `Bearer ${token}`}
      });

      accounts = response.data;
    } catch(e) {
      console.log(e);
    } finally {
      return accounts;
    }
  })
};

export default createStore(model);