
import { Navigate, Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Routes} from 'react-router-dom';
import Login from './Login.js';
import Home from './Home.js';
import AppLayout from './layout/AppLayout.js';
import Dashboard from './pages/Dashboard.js';
import { useState } from 'react';
function App() {
  const [userDetails,setUserDetails] = useState(null);

  const updateUserDetails = (upadatedData) => {
    setUserDetails(upadatedData)
    
  }

  return (
    <Routes>
   <Route path='/' element={userDetails? <Navigate to = '/dashboard'/> : <AppLayout><Home /></AppLayout>} />
   {/* we're passing the updateUserDetails function to the Login component so that it can update the user details in the App component */}
  {/* we'll get user information from the Login component and update it in the App component */}
   <Route path='/login' element={userDetails?
    <Navigate to = '/dashboard'/> :
    <AppLayout><Login updateUserDetails = {updateUserDetails}/></AppLayout>} />
   <Route path='/dashboard' element={userDetails?<Dashboard />: <Navigate to = '/login' />}/>
    </Routes>
  );
}

export default App;
