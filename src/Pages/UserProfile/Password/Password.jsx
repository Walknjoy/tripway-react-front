import { AiFillEdit } from 'react-icons/ai';
import useFetch from '../../../hooks/useFetch';
import './Password.scss';
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Password = () => {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate();
    const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/auth/user/profile/reset-password", {
        "password": password,
        "confirmPassword": confirmPassword
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
      if (res.status === 200) {
        toast.success(res.data.success);
        navigate('/user-profile');
      }
      else{
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
          <div className="password-fields">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="password-fields">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
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
