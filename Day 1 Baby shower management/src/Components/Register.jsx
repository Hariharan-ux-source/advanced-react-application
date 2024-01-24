// src/LoginPage.js
import { useState } from 'react';
import '../Style/Login.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

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
    if (!phone.trim()){
        newErrors.phone = 'Phone number is required';   
    }
    if(!email.trim()){
        newErrors.phone = 'Email is required';
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
    
    <div className="register12">
      <h1>REGISTER</h1>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className='erclx'>
        {errors.username && <p className="error">{errors.username}</p>}
        </div>
      </div><br />
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className='erclx'>
        {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
      </div><br />
     
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='ercls'>
        {errors.password && <p className="error">{errors.password}</p>}
        </div>
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className>
        {errors.email && <p className="error">{errors.email}</p>}
        </div>
      </div>
      <button className="butt123" onClick={handleLogin}>
        Register
      </button>
    </div>
  );
};

export default Register;
