import NewPassword from '../Components/NewPassword/NewPassword';
import MainRoot from '../Layout/MainRoot';
import MainRootTwo from '../Layout/MainRootTwo';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import NotFound from '../Pages/NotFound/NotFound';
import Register from '../Pages/Register/Register';
import Information from '../Pages/UserProfile/Information/Information';
import Password from '../Pages/UserProfile/Password/Password';
import Profile from '../Pages/UserProfile/Profile/Profile';
import UserProfile from '../Pages/UserProfile/UserProfile';

export const ROUTES = [
  {
    path: '/',
    element: <MainRoot />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <MainRootTwo />,
    children: [
      {
        path: 'user-login',
        element: <Login />,
      },
      {
        path: 'user-profile/',
        element: <UserProfile />,
        children: [
          {
            path: 'information',
            element: <Information />,
          },
          {
            path: 'password',
            element: <Password />,
          },
          {
            path: ':username',
            element: <Profile />,
          },
        ],
      },
      {
        path: 'user-register',
        element: <Register />,
      },
      {
        path: 'user-forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'reset-password',
        element: <NewPassword />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
