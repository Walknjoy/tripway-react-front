import React from 'react';
import './WhyChoose.scss';
import { GiPriceTag } from 'react-icons/gi';
import { LiaAwardSolid } from 'react-icons/lia';
import { SiYourtraveldottv } from 'react-icons/si';

const WhyChoose = () => {
  return (
    <section id="why-choose">
      <div className="container">
        <div className="choose-title">
          <h3>Why Choose us</h3>
          <div className="horizantal"></div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4">
            <div className="choose-description">
              <GiPriceTag />
              <h4>Competitive Pricing</h4>
              <p>
                <span>
                  With 500+ suppliers and the purchasing power of 300 million
                  members, mytravel.com can save you more!
                </span>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <div className="choose-description">
              <LiaAwardSolid />
              <h4>Award-Winning Service</h4>
              <p>
                <span>
                  Travel worry-free knowing that we're here if you needus, 24
                  hours a day
                </span>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <div className="choose-description">
              <SiYourtraveldottv />
              <h4>Worldwide Coverage</h4>
              <p>
                <span>
                  Over 1,200,000 hotels in more than 200 countries and regions &
                  flights to over 5,000 cities
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
