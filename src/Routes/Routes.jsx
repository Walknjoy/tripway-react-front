import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import MainRoot from '../Layout/MainRoot';
import MainRootTwo from '../Layout/MainRootTwo';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';

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
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
