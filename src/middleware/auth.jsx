import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/AuthStore';

export const AuthorizeUser = ({ children }) => {
  const auth = localStorage.getItem('img');

  if (!auth) {
    return <Navigate to={'/user-login'} replace={true}></Navigate>;
  }

  return children;
};

export const ProtectRoute = ({ children }) => {
  const username = useAuthStore.getState().auth.username;
  if (!username) {
    return <Navigate to={'/'} replace={true}></Navigate>;
  }
  return children;
};

export const LoginRegisterUser = ({ children }) => {
  const auth = localStorage.getItem('img');

  if (auth) {
    return <Navigate to={'/'} replace={true}></Navigate>;
  }

  return children;
};
