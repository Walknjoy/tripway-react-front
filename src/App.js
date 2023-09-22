import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BackToTop from './Components/BackToTop/BackToTop';
import { ROUTES } from './Routes/Routes';
function App() {
  const router = createBrowserRouter(ROUTES);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <BackToTop />
    </>
  );
}

export default App;
