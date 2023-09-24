import React, { useState } from 'react';
import axios from 'axios';
import './Register.scss';
import bgSvg from '../../Media/register-bg.svg';
import { RxAvatar } from 'react-icons/rx';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Register = () => {
  const [avatar, setAvatar] = useState(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    country: '',
    email: '',
    password: '',
    city: '',
    phone: '',
  });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (
        !avatar ||
        !data.username ||
        !data.city ||
        !data.country ||
        !data.phone ||
        !data.email ||
        !data.password
      )
        return;
      const formData = new FormData();
      formData.append('username', data.username);
      formData.append('country', data.country);
      formData.append('email', data.email);
      formData.append('city', data.city);
      formData.append('phone', data.phone);
      formData.append('password', data.password);
      formData.append('img', avatar);
      const res = await axios.post('/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (res.status === 200) {
        setData({
          username: '',
          email: '',
          password: '',
          city: '',
          country: '',
          phone: '',
        });
        navigate('/user-login');
        toast.success(res.data.success);
        setAvatar(null);
      } else {
        navigate('/user-register');
      }
    } catch (error) {
      toast.error(error.response.data.error.error);
    }
  };

  return (
    <div className="registration-panel">
      <div className="container">
        <div className="bg-svg">
          <img src={bgSvg} alt="register bg" />
        </div>
        <div className="register-container">
          <h2>Register as new user</h2>
          <div className="form-side">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 col-lg-6 col-md-6">
                  <div className="input-fields">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      placeholder="username"
                      name="username"
                      id="username"
                      value={data.username}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6">
                  <div className="input-fields">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      id="email"
                      value={data.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6">
                  <div className="input-fields">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      placeholder="city"
                      name="city"
                      id="city"
                      value={data.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6">
                  <div className="input-fields">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      placeholder="phone"
                      name="phone"
                      id="phone"
                      value={data.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6">
                  <div className="input-fields">
                    <label htmlFor="country">Country</label>
                    <select
                      name="country"
                      id="country"
                      value={data.country}
                      onChange={handleChange}>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Italy">Italy</option>
                      <option value="Germany">German</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-lg- col-md-6">
                  <div className="input-fields fields-position">
                    <label htmlFor="password">Password</label>
                    <input
                      type={visible ? 'text' : 'password'}
                      placeholder="password"
                      name="password"
                      id="password"
                      value={data.password}
                      onChange={handleChange}
                    />
                    {visible ? (
                      <AiOutlineEye
                        className="absolute right-2 top-3 cursor-pointer"
                        onClick={() => setVisible(false)}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="absolute right-2 top-3 cursor-pointer"
                        onClick={() => setVisible(true)}
                      />
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-fields-avatar">
                    <label
                      htmlFor="avatar"
                      className="avatar-empty-label"></label>
                    <div className="avatar-side">
                      <span className="avatar-side-span">
                        {avatar ? (
                          <img src={URL.createObjectURL(avatar)} alt="avatar" />
                        ) : (
                          <RxAvatar className="h-8 w-8" />
                        )}
                      </span>
                      <label htmlFor="file-input" className="avatar-upload">
                        <span>Upload a file</span>
                        <input
                          type="file"
                          name="avatar"
                          id="file-input"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                  <button className="register-btn">Register</button>
                </div>
                <div className="col-12">
                  <div className="text-side">
                    <h4>Already have an account?</h4>
                    <Link to="/user-login">Sign in</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
