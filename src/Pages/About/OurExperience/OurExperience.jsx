import React from 'react';
import Teamwork from '../../../Media/about-img.png';
import './OurExperience.scss';
import CountUp from 'react-countup';
const OurExperience = () => {
  return (
    <section id="about_section">
      <div className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-6 col-lg-6">
              <div className="about-img-wrapper">
                <img src={Teamwork} alt="team work" width="100%" />
                <div className="about-experience">
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Est, adipisci.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6 col-lg-6">
              <div className="about-content-wrapper">
                <div className="section-title">
                  <span>About Us</span>
                  <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <div className="about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem, sunt voluptate inventore dignissimos esse ut
                    quisquam vitae, dolorem a sed adipisci repellat veritatis,
                    nobis laborum iure id? Fugit, quis ipsa.
                  </p>
                  <div className="counter-up">
                    <div className="counter">
                      <div className="countup">
                        <CountUp end={30} />k
                      </div>
                      <h4>Lorem, ipsum.</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia, necessitatibus.
                      </p>
                    </div>
                    <div className="counter">
                      <div className="countup">
                        <CountUp end={30} />k
                      </div>
                      <h4>Lorem, ipsum.</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia, necessitatibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExperience;
