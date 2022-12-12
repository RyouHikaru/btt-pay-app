import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/Landing/Login';
import Registration from './components/Landing/Registration';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route index element={<Login />} />
        <Route path='registration'>
          <Route index element={<Registration />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
