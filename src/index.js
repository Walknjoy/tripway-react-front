import React from 'react';
import ReactDOM from 'react-dom/client';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "./reset.css"
import './index.scss';
import ContextApi from './utils/ContextApi';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextApi>
      <App />
    </ContextApi>
);
