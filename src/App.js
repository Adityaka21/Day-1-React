
import { Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Routes} from 'react-router-dom';
import Login from './Login.js';
import Home from './Home.js';
import AppLayout from './layout/AppLayout.js';
function App() {
  return (
    <Routes>
   <Route path='/' element={<AppLayout><Home /></AppLayout>} />
   <Route path='/login' element={<AppLayout><Login /></AppLayout>} />
    </Routes>
  );
}

export default App;
