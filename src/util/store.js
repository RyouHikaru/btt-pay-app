import { createStore, action, thunk } from "easy-peasy";
import api from "../adapters/api";
import jwtDecode from "jwt-decode";

const model = {
  userSession: sessionStorage.userSession
    ? JSON.parse(sessionStorage.userSession)
    : null,
  setUserSession: action((state, payload) => {
    state.userSession = payload;
    sessionStorage.setItem("userSession", JSON.stringify(payload));
  }),
  accounts: [],
  setAccounts: action((state, payload) => {
    state.accounts = payload;
  }),
  hasAccount: true,
  setHasAccount: action((state, payload) => {
    state.hasAccount = payload;
  }),
  errorMsg: null,
  setErrorMsg: action((state, payload) => {
    state.errorMsg = payload;
  }),
  showModal: {
    header: "",
    body: "",
    visible: false,
    type: "INFO",
    callback: null,
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
      const response = await api.post("/api/auth/login", request);
      setUserSession(response.data);
    } catch (e) {
      setErrorMsg(e.response.data.message);
      successful = false;
    } finally {
      return successful;
    }
  }),
  logout: thunk(async (actions, request, helper) => {
    const { userSession } = helper.getState();
    const { setUserSession, setShowModal } = helper.getStoreActions();

    try {
      const response = await api.post("/api/auth/logout", null, {
        headers: { Authorization: `Bearer ${userSession.token}` },
      });

      setUserSession(null);
      sessionStorage.clear();

      setShowModal({
        header: "Logout",
        body: response.data.message,
        visible: true,
        type: "INFO",
      });
    } catch (e) {
      console.log(e);
    }
  }),
  register: thunk(async (actions, request, helper) => {
    const { setShowModal } = helper.getStoreActions();

    try {
      const response = await api.post("/api/auth/register", request);

      setShowModal({
        header: "Registration",
        body: response.data.message,
        visible: true,
        type: "INFO",
      });
    } catch (e) {
      console.log(e);
    }
  }),
  retrieveUserAccounts: thunk(async (actions, payload, helper) => {
    const { setAccounts, setHasAccount } = helper.getStoreActions();

    const token = payload;
    const decodedToken = jwtDecode(token);

    const id = decodedToken.userId;

    try {
      const URL = "/api/accounts/user?";
      const response = await api.post(`${URL}id=${id}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setAccounts(response.data);
      setHasAccount(response.data.length !== 0);
    } catch (e) {
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

      const response = await api.post("/api/accounts", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setShowModal({
        header: "Open Account",
        body: response.data.message,
        visible: true,
        type: "INFO",
      });

      retrieveUserAccounts(token);
    } catch (e) {
      console.log(e);
    }
  }),
  retrieveTransactions: thunk(async (actions, payload, helper) => {
    // const { type, token } = payload;
    // const decodedToken = jwtDecode(token);
    // const id = decodedToken.userId;
    let transactionList = [];

    try {
      // TODO: Add API call for retrieving Transactions
      // const data = { accountType: type, userId: id };

      // const response = await api.post('/api/accounts', data, {
      //   headers: { Authorization: `Bearer ${token}`}
      // });

      // FIXME: Temporary
      transactionList = [
        {
          id: 1,
          transactionNumber: "REF1000001",
          details: "Cash in from BTT Bank",
          amount: "1000",
          transactionType: "CREDIT",
          account: null,
          metadata: {
            dateCreated: "2023-01-01",
          },
        },
        {
          id: 2,
          transactionNumber: "REF1000002",
          details: "Buy Load",
          amount: "420",
          transactionType: "DEBIT",
          account: null,
          metadata: {
            dateCreated: "2023-01-02",
          },
        },
      ];
    } catch (e) {
      console.log(e);
    } finally {
      return transactionList;
    }
  }),
};

export default createStore(model);
