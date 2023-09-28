import { AiFillEdit } from 'react-icons/ai';
import useFetch from '../../../hooks/useFetch';
import './Password.scss';

const Password = () => {
  const { data, loading } = useFetch('/users/user/profile');
  return (
    <>
      {loading ? (
        <p>loading....</p>
      ) : (
        <div className="password-area">
          <div className="password-fields">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              id="password"
              value="************"
              disabled={true}
            />
          </div>
          <div className="password-fields">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="email"
              name="email"
              id="email"
              disabled={true}
              value={data.email}
            />
          </div>
          <div className="password-fields">
            <button>
              Reset password <AiFillEdit />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Password;
