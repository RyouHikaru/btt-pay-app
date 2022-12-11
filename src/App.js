import Landing from "./components/Landing/Landing";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
    </Routes>
  );
}

export default App;
