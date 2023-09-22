import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';
import { Cloudinary } from '@cloudinary/url-gen';
import './Register.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassoword] = useState('');
  const [username, setUserName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [img, setImg] = useState();
  const [visible, setVisible] = useState(false);
  const handleFileInputChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    e.preventDefault();
    axios
      .post(`http://localhost:3000/api/auth/register`, {
        password,
        email,
        city,
        country,
        phone,
        username,
        img,
      })
      .then((res) => {
        toast.success('Register is success');
      })
      .catch((error) => {
        toast.error('Register is not success');
      });
  };

  return (
    <section className="register-page">
      <div className="register-fields">
        <h2 className="fields-title">Register as new user</h2>
        <div className="register-form-area">
          <div className="register-form">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="fields">
                    <label htmlFor="username">Full name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      required
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="fields">
                    <label htmlFor="email">Email Adress</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="fields">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="city"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="fields">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="fields">
                    <label htmlFor="avatar"></label>
                    <div className="avatar-area">
                      <span>
                        {img ? (
                          <img
                            src={
                              img instanceof File
                                ? URL.createObjectURL(img)
                                : img
                            }
                            alt="avatar"
                          />
                        ) : (
                          <RxAvatar />
                        )}
                      </span>
                      <label htmlFor="file-input" className="file-input">
                        <span>Upload a file</span>
                        <input
                          type="file"
                          name="avatar"
                          id="file-input"
                          accept=".jpg,.png,.jpeg"
                          onChange={handleFileInputChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="fields">
                    <label htmlFor="country">Country</label>
                    <select
                      name="country"
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}>
                      <option defaultChecked>Select your country</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Italy">Italy</option>
                      <option value="France">France</option>
                      <option value="England">England</option>
                      <option value="Germany">Germany</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="fields">
                    <label htmlFor="password">Password</label>
                    <div className="password-area">
                      <input
                        type={visible ? 'text' : 'password'}
                        name="password"
                        id="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassoword(e.target.value)}
                      />
                      {visible ? (
                        <AiOutlineEye onClick={() => setVisible(false)} />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={() => setVisible(true)}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="btn-fields">
                    <button type="submit">Submit</button>
                  </div>
                </div>
                <div className="col-12">
                  <div className="haveAccount">
                    <h4>Already have an account?</h4>
                    <Link to="/user-login">Sign in</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
