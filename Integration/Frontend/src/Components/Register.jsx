import { useState } from 'react';
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';
import '../Style/regist.css';

const Register = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/register',
        {
          name: user.name,
          email: user.email,
          password: user.password,
          confirmPassword: user.confirmPassword
        }
      );
        navigate('/')
      console.log(response.data); // handle success response
    } catch (error) {
      console.error('Registration failed', error); // handle error
      setError('Registration failed. Please try again.'); // Generic error message
    }
  };

  return (
    <div className='ui2'>
      <h2>Register Page</h2>
      <form onSubmit={handleRegistration}>
        <label>
          Name:<br />
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:<br />
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:<br />
          <input type="password" name="password" value={user.password} onChange={handleChange} />
        </label>
        <br />
        <label>
          Confirm Password:<br />
          <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Register</button>
        {error && <div className="error">{error}</div>}
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
