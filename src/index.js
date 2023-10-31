import React from 'react';
import 'aos/dist/aos.css';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import ContextApi from './utils/ContextApi';
import { FilterContextProvider } from './utils/FilterContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FilterContextProvider>
  <ContextApi>
      <App />
  </ContextApi>
    </FilterContextProvider>
);
