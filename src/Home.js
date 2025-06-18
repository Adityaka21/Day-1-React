import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <Link to ="/">Home</Link>
      <Link to ="/login">Login</Link>
    </div>
  );
}

export default Home;
