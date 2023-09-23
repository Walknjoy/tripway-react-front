import React, { useState } from 'react';
import './Register.scss';
import axios from 'axios';

const Register = () => {
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      // Handle file input separately to extract the file name
      const fileName = e.target.files[0].name;
      setInfo((prev) => ({ ...prev, [e.target.id]: fileName }));
    } else {
      // Handle other input types as before
      setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    debugger
    const newUser = {
      ...info,
    };
    console.log(newUser)
    await axios.post('/auth/register', newUser);
  };

  return (
    <div className="registration-panel">
      <div>
        <h2>Register</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" onChange={handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" onChange={handleChange} required />

          <label htmlFor="country">Country:</label>
          <input type="text" id="country" onChange={handleChange} />

          <label htmlFor="city">City:</label>
          <input type="text" id="city" onChange={handleChange} />

          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" onChange={handleChange} />

          <label htmlFor="img">Profile Picture:</label>
          <input
            type="file"
            id="img"
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            required
          />

          <button onClick={handleClick} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
