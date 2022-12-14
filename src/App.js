import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/Landing/Login';
import Register from './components/Landing/Register';
import ForgotPassword from './components/Landing/ForgotPassword';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route index element={<Login />} />
        <Route path='registration' element={<Register />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
