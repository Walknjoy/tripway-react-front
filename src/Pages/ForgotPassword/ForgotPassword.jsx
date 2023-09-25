import React, { useState } from 'react';
import './ForgotPassword.scss';
import bgSvg from '../../Media/register-bg.svg';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const handleChange = (e) => {
    const { value, name } = e.target;
    setEmail({
      ...email,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="forgot-panel">
      <div className="container">
        <div className="bg-svg">
          <img src={bgSvg} alt="forgot bg" />
        </div>
        <div className="forgot-container">
          <h2>Recover you user password</h2>
          <div className="form-side">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12">
                  <div className="input-fields">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 ">
                  <button className="recovery-btn">Recover Password</button>
                </div>
                <div className="col-12">
                  <div className="text-side">
                    <h4>Remember your password?</h4>
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

export default ForgotPassword;
