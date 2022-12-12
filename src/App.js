import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/Landing/Login/Login';
import Register from './components/Landing/Registration/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route index element={<Login />} />
        <Route path='registration'>
          <Route index element={<Register />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
