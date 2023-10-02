import React from 'react';
import { Link } from 'react-router-dom';
import succesImg from '../../Media/mail-success.svg';
import './MailSuccess.scss';
import { Helmet } from 'react-helmet';
const MailSuccess = () => {
  return (
    <>
      <Helmet>
        <title>Successfully</title>
      </Helmet>

      <div className="mail_success">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="mail_image">
                <img src={succesImg} alt="mailimage" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="mail_text">
                <h3>Your Mail Sent Successfully!</h3>
                <p>
                  Thank you for contacting with us, We will send you feedback as
                  soon as possible.
                </p>
                <Link to="/">Go Home page</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MailSuccess;
