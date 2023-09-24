import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BackToTop from './Components/BackToTop/BackToTop';
import { ROUTES } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
function App() {
  const router = createBrowserRouter(ROUTES);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
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
      <ToastContainer />
    </>
  );
}

export default App;
