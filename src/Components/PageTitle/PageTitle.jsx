import React from 'react';
import './PageTitle.scss';
const PageTitle = ({ title, backgroundImg }) => {
  return (
    <>
      <div
        className="page_title"
        style={{ background: `url(${backgroundImg})` }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page_description">
                <h2>{title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
