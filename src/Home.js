import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='container text-center'>
      <h1>Welcome to Home</h1>
      <Link to ="/">Home</Link>
      <br></br>
      <Link to ="/login">Login</Link>
    </div>
  );
}

export default Home;
