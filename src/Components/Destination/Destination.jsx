import { Link } from 'react-router-dom';
import './Destionation.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
const Destination = () => {
  return (
    <div className="destionation">
      <div className="container">
        <SectionTitle title={'Top Destination'} />
        <div className="row">
          <div className="col-12 col-xl-6 col-lg-6 col-md-6">
            <div className="destination_card" id="destination-bg-1">
              <div className="destination-content ">
                <Link to="/" className="destination-city">
                  Baku
                </Link>
                <ul className="destination-dropdown">
                  <li>
                    <Link to="/">
                      <span>20</span>
                      <span>Hotel</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>48</span>
                      <span>Tours</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>46</span>
                      <span>Activity</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>32</span>
                      <span>Yachts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12  col-xl-6 col-lg-6 col-md-6">
            <div className="destination_card" id="destination-bg-2">
              <div className="destination-content">
                <Link to="/" className="destination-city">
                  Ganja
                </Link>
                <ul className="destination-dropdown">
                  <li>
                    <Link to="/">
                      <span>20</span>
                      <span>Hotel</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>48</span>
                      <span>Tours</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>46</span>
                      <span>Activity</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>32</span>
                      <span>Yachts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12  col-xl-3 col-lg-3 col-md-6">
            <div className="destination_card" id="destination-bg-3">
              <div className="destination-content ">
                <Link to="/" className="destination-city">
                  Lenkeran
                </Link>
                <ul className="destination-dropdown">
                  <li>
                    <Link to="/">
                      <span>20</span>
                      <span>Hotel</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>48</span>
                      <span>Tours</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>46</span>
                      <span>Activity</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>32</span>
                      <span>Yachts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-3 col-lg-3 col-md-6">
            <div className="destination_card" id="destination-bg-4">
              <div className="destination-content ">
                <Link to="/" className="destination-city">
                 Ismayıllı
                </Link>
                <ul className="destination-dropdown">
                  <li>
                    <Link to="/">
                      <span>20</span>
                      <span>Hotel</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>48</span>
                      <span>Tours</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>46</span>
                      <span>Activity</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>32</span>
                      <span>Yachts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-3 col-lg-3 col-md-6">
            <div className="destination_card" id="destination-bg-5">
              <div className="destination-content ">
                <Link to="/" className="destination-city">
                 Qebele
                </Link>
                <ul className="destination-dropdown">
                  <li>
                    <Link to="/">
                      <span>20</span>
                      <span>Hotel</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>48</span>
                      <span>Tours</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>46</span>
                      <span>Activity</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>32</span>
                      <span>Yachts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12  col-xl-3 col-lg-3 col-md-6">
            <div className="destination_card" id="destination-bg-6">
              <div className="destination-content">
                <Link to="/" className="destination-city">
                  Oğuz
                </Link>
                <ul className="destination-dropdown">
                  <li>
                    <Link to="/">
                      <span>20</span>
                      <span>Hotel</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>48</span>
                      <span>Tours</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>46</span>
                      <span>Activity</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>32</span>
                      <span>Yachts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
