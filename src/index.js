import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import ContextApi from './utils/ContextApi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextApi>
    <App />
  </ContextApi>
);
