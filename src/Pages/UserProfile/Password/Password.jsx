import {
  AiFillEdit,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import './Password.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useCallback, useContext, useState } from 'react';
import { mainContext } from '../../../utils/ContextApi';

const Password = () => {
  const {
    passwordVisible,
    setConfirmPasswordVisible,
    setPasswordVisible,
    confirmPasswordVisible,
  } = useContext(mainContext);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = useCallback(
    (field) => {
      if (field === 'password') {
        setPasswordVisible(!passwordVisible);
      } else if (field === 'confirmPassword') {
        setConfirmPasswordVisible(!confirmPasswordVisible);
      }
    },
    [
      passwordVisible,
      setConfirmPasswordVisible,
      setPasswordVisible,
      confirmPasswordVisible,
    ]
  );
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        '/auth/user/profile/reset-password',
        {
          password: password,
          confirmPassword: confirmPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        }
      );
      if (res.status === 200) {
        toast.success(res.data.success);
        navigate('/user-profile');
      } else {
        toast.error(res.data.error);
        return;
      }
    } catch (error) {
      toast.error(error.response.data.error.error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="password-area">
          <div className="password-fields fields-position">
            <label htmlFor="password">Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordVisible ? (
              <AiOutlineEye
                onClick={() => togglePasswordVisibility('password')}
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() => togglePasswordVisibility('password')}
              />
            )}
          </div>
          <div className="password-fields fields-position">
            <label htmlFor="password">Confirm Password</label>
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              placeholder="Confirm password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordVisible ? (
              <AiOutlineEye
                onClick={() => togglePasswordVisibility('confirmPassword')}
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() => togglePasswordVisibility('confirmPassword')}
              />
            )}
          </div>
          <div className="password-fields">
            <button type="submit">
              Reset password <AiFillEdit />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Password;
