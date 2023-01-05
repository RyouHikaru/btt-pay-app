import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/About";
import Home from "./pages/Home";
import Missing from "./pages/Missing";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";
import ServiceMenu from "./pages/ServiceMenu";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="registration" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="home" element={<Home />} />
        <Route path="accounts">
          <Route index element={<Accounts />} />
          <Route path=":acctType" element={<Transactions />} />
        </Route>
        <Route path="services">
          <Route index element={<ServiceMenu />} />
          <Route path=":service" element={<Service />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
