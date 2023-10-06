import MainRoot from '../Layout/MainRoot';
import MainRootTwo from '../Layout/MainRootTwo';
import About from '../Pages/About/About';
import BlogPage from '../Pages/BlogPage/BlogPage';
import Entertainments from '../Pages/Entertainments/Entertainments';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import Home from '../Pages/Home/Home';
import Hotel from '../Pages/Hotels/Hotel';
import HotelOne from '../Pages/Hotels/HotelOne/HotelOne';
import Login from '../Pages/Login/Login';
import MailSuccess from '../Pages/MailSucces/MailSuccess';
import NewPassword from '../Pages/NewPassword/NewPassword';
import NotFound from '../Pages/NotFound/NotFound';
import Register from '../Pages/Register/Register';
import Cars from '../Pages/Rental/Cars/Cars';
import Rental from '../Pages/Rental/Rental';
import Yachts from '../Pages/Rental/Yachts/Yachts';
import Tours from '../Pages/Tours/Tours';
import ToursOne from '../Pages/Tours/ToursOne';
import Information from '../Pages/UserProfile/Information/Information';
import Password from '../Pages/UserProfile/Password/Password';
import Profile from '../Pages/UserProfile/Profile/Profile';
import UserProfile from '../Pages/UserProfile/UserProfile';
import {
  AuthorizeUser,
  LoginRegisterUser,
  ProtectRoute,
} from '../middleware/auth';


export const ROUTES = [
  {
    path: '/',
    element: <MainRoot />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'tours',
        element: (
          <AuthorizeUser>
            <Tours />
          </AuthorizeUser>
        ),
        children: [
          {
            path: 'tours-1',
            element: <ToursOne />,
          },
        ],
      },
      {
        path: 'hotels',
        element: (
          <AuthorizeUser>
            <Hotel />
          </AuthorizeUser>
        ),
        children: [
          {
            path: 'hotel-1',
            element: <HotelOne />,
          },
        ],
      },
      {
        path: 'rental',
        element: (
          <AuthorizeUser>
            <Rental />
          </AuthorizeUser>
        ),
        children: [
          {
            path: 'cars',
            element: <Cars />,
          },
          {
            path: 'yachts',
            element: <Yachts />,
          },
        ],
      },
      {
        path: 'entertainments',
        element: (
          <AuthorizeUser>
            <Entertainments />
          </AuthorizeUser>
        ),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
    ],
  },
  {
    path: '/',
    element: <MainRootTwo />,
    children: [
      {
        path: 'success-mail',
        element: <MailSuccess />,
      },
      {
        path: 'user-login',
        element: (
          <LoginRegisterUser>
            <Login />
          </LoginRegisterUser>
        ),
      },
      {
        path: 'user-profile',
        element: (
          <AuthorizeUser>
            <UserProfile />
          </AuthorizeUser>
        ),
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
        element: (
          <LoginRegisterUser>
            <Register />
          </LoginRegisterUser>
        ),
      },
      {
        path: 'user-forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'reset-password',
        element: (
          <ProtectRoute>
            <NewPassword />
          </ProtectRoute>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
