import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BackToTop from './Components/BackToTop/BackToTop';
import { ROUTES } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import LoadingTopBar from './Assets/LoadingTopBar/LoadingTopBar';
function App() {
  const router = createBrowserRouter(ROUTES);
  return (
    <>
      <LoadingTopBar />
      <RouterProvider router={router} />
      <BackToTop />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
