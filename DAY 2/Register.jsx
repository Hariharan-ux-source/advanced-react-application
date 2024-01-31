import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Style/regist.css';

const Register= () => {
  const [user, setUser] = useState({
    fullName: '',
    emailId: '',  // Change from 'email' to 'emailId'
    age: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/users/register', user);

      console.log(response.data); // handle success response
    } catch (error) {
      console.error('Registration failed', error); // handle error
    }
  };

  return (
    <div className='ui1'>
      <h2>Register Page</h2>
      <form onSubmit={handleRegistration}>
        <label>
          Full Name:<br />
          <input type="text" name="fullName" value={user.fullName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:<br />
          <input type="email" name="emailId" value={user.emailId} onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:<br />
          <input type="number" name="age" value={user.age} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone:<br />
          <input type="text" name="phone" value={user.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:<br />
          <input type="password" name="password" value={user.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;