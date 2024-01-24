// src/LoginPage.js
import { useState } from 'react';
import '../Style/Login.css';
import {Link} from 'react-router-dom';
import './Register';
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};


    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (!/^(?=.*[A-Za-z])(?=.*\d{2})(?=.*[@#$%^&+=]).{5,}$/.test(password)) {
      newErrors.password =
        'Password must have 5 letters, 2 numbers, and 1 special character (@#$%^&+=)';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      // Add your authentication logic here
      console.log('Logging in with:', { username, password });
    }
  };

  return (
    <div className="login12">
      <div>
        <h1>LOGIN</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <div className='erclx'>
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
      </div><br />
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <div className='ercls'>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
      </div>
      <Link to="/MainPage">
      <button className="butt12" onClick={handleLogin}>
        Login
      </button>
      </Link>



      <h2> Dont have an account?<Link to="/Register">Sign up</Link></h2>


    </div>
  );
}

export default LoginPage;
