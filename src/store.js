import { createStore, action } from 'easy-peasy';

const model = {
  showModal: {
    header: '',
    body: '',
    visible: false,
    type: 'INFO',
    action: null
  },
  setShowModal: action((state, payload) => {
    state.showModal = payload;
  })
};

export default createStore(model);