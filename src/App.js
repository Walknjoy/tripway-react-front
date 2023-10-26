import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BackToTop from './Components/BackToTop/BackToTop';
import { ROUTES } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import Spinner from './Assets/Spinner/Spinner';
function App() {
  const router = createBrowserRouter(ROUTES);
  return (
    <>
      <RouterProvider router={router}  fallbackElement={<Spinner initial={true} />}   future={{ v7_startTransition: true }}/>
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
