import React, { useState } from 'react';

function Login() {
  const{formdata,setformdata} = useState({
    username: '',
    password: ''
  })
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label>Username</label>
          <input type='text'name='username' value={formdata.username}/>
        </div>
        <div>
          <label>Password</label>
          <input type='text'name='password' value={formdata.password}/>
        </div>
      </form>
    </div>
  );
}

export default Login;
