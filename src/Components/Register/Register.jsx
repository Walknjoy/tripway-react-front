import React, { useState } from 'react';
import './Register.scss';
import axios from 'axios';
import { useEffect, useRef } from 'react';

const Register = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [info, setInfo] = useState({});

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dvr9fma4d',
        uploadPreset: 'avatars',
      },
      function (err, result) {
        if (!err && result && result.event === 'success') {
          setImgUrl(result.info.secure_url);
        }
      }
    );
  }, [widgetRef]);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    debugger
    const newUser = {
      ...info,
      img: imgUrl,
    };
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
          <button
            type="file"
            id="file"
            onClick={() => widgetRef.current.open()}
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
