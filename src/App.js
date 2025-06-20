
import { Navigate, Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Routes} from 'react-router-dom';
import Login from './Login.js';
import Home from './Home.js';
import AppLayout from './layout/AppLayout.js';
import Dashboard from './pages/Dashboard.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [userDetails,setUserDetails] = useState(null);

  const updateUserDetails = (upadatedData) => {
    setUserDetails(upadatedData)
    
  }

  const isUserLoggedIn = async() => {
    try{
      const response = await axios.post('http://localhost:5000/auth/is-user-logged-in', {}, {
        withCredentials: true
      });
      updateUserDetails(response.data.userDetails);

    }catch (error) {
      console.log('User is not logged in', error);
    }
  };
  useEffect(() => {
    isUserLoggedIn();
  }, []);

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
