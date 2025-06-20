import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ updateUserDetails}) {
  // const navigate = useNavigate();
  const [formdata,setformdata] = useState({
    username: '',
    password: ''
  })
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setformdata({
      ...formdata,
      [name]: value
    })
  }
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
     const validate= () => {
      let newErrors = {};
      let isValid = true;
      if(formdata.username.length === 0) {
        newErrors.username = 'Username is required';
        isValid = false;
      }
      if(formdata.password.length === 0) {
        newErrors.password = 'Password is required';
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
     }
     
  // This function will handle the form submission

    const handleSubmit = async (event) => {
      event.preventDefault();
      if (validate()) {
        // if(formdata.username === 'admin' && formdata.password === 'admin') {
          // Assuming the user is authenticated successfully
          // navigate('/dashboard'); 
          // You can also pass user details to the parent component if needed

          // updateUserDetails({
          //   username: "Aditya",
          //   email: "Adi@gmail.com"
          // });
        //   setMessage('Login successful');
        // }else {
        //   setMessage('Invalid username or password');
        // }

        //Integrate with Rest endpoint
        const body = {
          username: formdata.username,
          password: formdata.password
        };

        const configuration = {
          withCredentials: true
        };
        try{
        const response = await axios.post('http://localhost:5000/auth/login', body, configuration);
        updateUserDetails(response.data.userDetails);
        }
        catch(error) {
          setErrors({message: 'Something went wrong, please try again later.'});
        }
          
      }
    }
  return (
    <div className='container text-center'>
      <h1>Login Page</h1>
      {message && (
        message
      )}
      {errors.message && (errors.message)}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type='text' name='username' value={formdata.username}
          onChange={handleChange}/>
          {errors.username && (<span className='error'>{errors.username}</span>)}
        </div>
        <div className='container text-center'>
          <label>Password</label>
          <input type='text'name='password' value={formdata.password}
          onChange={handleChange}
          />
          {errors.password && (<span className='error'>{errors.password}</span>)}
        </div>
        <div className='container text-center'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
