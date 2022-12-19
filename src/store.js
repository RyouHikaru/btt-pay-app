import { createStore, action, thunk } from 'easy-peasy';
import api from './services/api';

const model = {
  userSession: {},
  setUserSession: action((state, payload) => {
    state.useSession = payload;
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
  })
};

export default createStore(model);