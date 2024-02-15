import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Style/AdmLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });
      

      console.log(response.data); // handle success response
    } catch (error) {
      console.error('Login failed', error); // handle error
    }
  };

  return (
    <div className='ui1'>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <label className='labellog'>
          Email:<br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label className='labellog'>
          Password:<br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <Link to="/admin">
        <button type="submit">Login</button>
        </Link>
      </form>
      <p>
        Are you a User? <Link to="/login">User Login</Link>
      </p>
    </div>
  );
};

export default AdminLogin;
