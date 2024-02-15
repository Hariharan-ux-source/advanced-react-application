import { useState } from 'react';
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';
import '../Style/Login.css';

const LoginPage = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let token=null;
  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      const response=await axios.post('http://127.0.0.1:8080/api/v1/auth/login',{
        
        email:email,
        password:password
  
      });
     navigate('/main')
      token=response.data.token;
      localStorage.setItem('token',token);
      localStorage.setItem('email',email);
     
      console.log(response.data); // handle success response
    } catch (error) {
      console.error('Login failed', error); // handle error
    }
    if (token) { 
      // Programmatically trigger a click on the link to navigate
      document.getElementById('homeLink').click();
    }
  };

  return (
    <div className='ui'>
      <h2>Login Page</h2>
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
        {/* <Link to="/main"> */}
        <button type="submit">Login</button>
        {/* </Link> */}
      </form>
      <p>
        Dont have an account? <Link to="/register">Register</Link>
      </p>
      <p>
        Are you an Admin? <Link to="/admmm">Admin Login</Link>
      </p>
      <Link id="homeLink" to="/main" style={{display:'none'}}/>
    </div>
  );
};

export default LoginPage;
