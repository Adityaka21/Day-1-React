
import { Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Routes} from 'react-router-dom';
import Login from './Login.js';
import Home from './Home.js';
function App() {
  return (
    <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
