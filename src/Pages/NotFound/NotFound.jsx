import React from 'react';
import './NotFound.scss';
import errorSvg from '../../Media/404-error-img.svg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const NotFound = () => {
  return (
   <>
     <Helmet>
        <title>404 not found</title>
      </Helmet>
    <div className="not_found">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="error_image">
              <img src={errorSvg} alt="errorimage" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="error_text">
              <h3>Page Not Found</h3>
              <p>
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default NotFound;
