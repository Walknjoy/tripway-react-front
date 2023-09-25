import NewPassword from '../Components/NewPassword/NewPassword';
import MainRoot from '../Layout/MainRoot';
import MainRootTwo from '../Layout/MainRootTwo';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import NotFound from '../Pages/NotFound/NotFound';
import Register from '../Pages/Register/Register';

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
        path: '/user-login',
        element: <Login />,
      },
      {
        path: '/user-register',
        element: <Register />,
      },
      {
        path: '/user-forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/reset-password',
        element: <NewPassword />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
