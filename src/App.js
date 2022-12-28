import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/Landing/Login';
import Register from './components/Landing/Register';
import ForgotPassword from './components/Landing/ForgotPassword';
import About from './components/Landing/About';
import Home from './components/Main/Home';
import Missing from './components/Missing';
import Logout from './components/Main/Logout';
import Account from './components/Main/Account';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route index element={<Login />} />
        <Route path='registration' element={<Register />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='about' element={<About />} />
        <Route path="home" element={<Home /> } />
        <Route path="accounts" element={<Account /> } />
        <Route path="logout" element={<Logout />} />
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
