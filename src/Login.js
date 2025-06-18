import React, { useState } from 'react';

function Login() {
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

    const handleSubmit = (event) => {
      event.preventDefault();
      if (validate()) {
        if(formdata.username === 'admin' && formdata.password === 'admin') {
          setMessage('Login successful');
        }else {
          setMessage('Invalid username or password');
        }
      }
    }
  return (
    <div>
      <h1>Login Page</h1>
      {message && (
        message
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type='text' name='username' value={formdata.username}
          onChange={handleChange}/>
          {errors.username && (<span className='error'>{errors.username}</span>)}
        </div>
        <div>
          <label>Password</label>
          <input type='text'name='password' value={formdata.password}
          onChange={handleChange}
          />
          {errors.password && (<span className='error'>{errors.password}</span>)}
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
