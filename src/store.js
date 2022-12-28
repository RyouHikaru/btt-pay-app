import { createStore, action, thunk } from 'easy-peasy';
import api from './services/api';

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
      // const response = await api.post('/api/auth/login', request);
      // setUserSession(response.data);

      // Temporary
      setUserSession({
        token: 'bttPayToken',
        type: 'Bearer',
        id: 1,
        username: 'user',
        email: 'user@email.com'
      });
      
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
  })
};

export default createStore(model);