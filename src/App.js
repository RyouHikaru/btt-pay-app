import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/Landing/Login';
import Register from './components/Landing/Register';
import ForgotPassword from './components/Landing/ForgotPassword';
import About from './components/Landing/About';
import Home from './components/Main/Home';
import Missing from './components/Missing';
import Logout from './components/Main/Logout';
import Accounts from './components/Main/Accounts';
import Transactions from './components/Main/Transactions';
import Contact from './components/Landing/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route index element={<Login />} />
        <Route path="registration" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="home" element={<Home /> } />
        <Route path="accounts">
          <Route index element={<Accounts /> } />
          <Route path=":acctType" element={<Transactions /> } />
        </Route>
        <Route path="logout" element={<Logout />} />
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
