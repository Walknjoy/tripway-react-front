import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo/Logo';
import payment from '../../Media/image/credit-cards.png';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import LazyLoadImg from '../../Assets/LazyLoadImg';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer_head">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-6">
              <div className="footer_head_content">
                <Logo />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eaque inventore excepturi voluptatum aperiam, illum officia
                  numquam necessitatibus aut nemo? Consequatur.
                </p>
                <ul className="footer_head_list">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Isolation_Mode"
                      data-name="Isolation Mode"
                      viewBox="0 0 24 24">
                      <path d="M12,.021A10.077,10.077,0,0,0,1.935,10.087c0,5.274,8.166,12.329,9.1,13.117l.967.817.967-.817c.932-.788,9.1-7.843,9.1-13.117A10.077,10.077,0,0,0,12,.021Zm0,20.043c-3.065-2.792-7.067-7.328-7.067-9.977a7.067,7.067,0,1,1,14.134,0C19.067,12.731,15.064,17.269,12,20.064Z" />
                      <circle cx="12" cy="10.002" r="2.997" />
                    </svg>
                    <span>Binaqadi,S.Sani.Axundov,Baku</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24">
                      <path d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z" />
                    </svg>
                    <Link to="tel:">+994 55 55 55 55</Link>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24">
                      <path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" />
                    </svg>
                    <Link to="mailto:">example@example.com</Link>
                  </li>
                </ul>
                <ul className="footer-social">
                  <li>
                    <Link to="">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-2 col-md-6">
              <div className="footer_head_content">
                <h3 title="company">Company</h3>
                <ul className="footer_head_links">
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/hotels">All hotels</Link>
                  </li>
                  <li>
                    <Link to="/entertainments">EnterTainments</Link>
                  </li>
                  <li>
                    <Link to="/tours">All tours</Link>
                  </li>
                  <li>
                    <Link to="/yachts">All yachts</Link>
                  </li>
                  <li>
                    <Link to="/cars">All cars</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-2 col-md-6">
              <div className="footer_head_content">
                <h3 title="services">Services</h3>
                <ul className="footer_head_links">
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/user-login">Login</Link>
                  </li>
                  <li>
                    <Link to="/">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/user-register">Register</Link>
                  </li>
                  <li>
                    <Link to="/user-profile">My profile</Link>
                  </li>
                  <li>
                    <Link to="/">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6">
              <div className="footer_head_content">
                <h3 title="newsletter">Newsletter</h3>
                <p>
                  Subscribe to our weekly Newsletter and receive updates via
                  email.
                </p>
                <div className="subscribe_area">
                  <form>
                    <input
                      type="email"
                      name="email"
                      id="#"
                      placeholder="example@example.com"
                    />
                    <button type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <g id="_01_align_center" data-name="01 align center">
                          <path d="M1.444,6.669a2,2,0,0,0-.865,3.337l3.412,3.408V20h6.593l3.435,3.43a1.987,1.987,0,0,0,1.408.588,2.034,2.034,0,0,0,.51-.066,1.978,1.978,0,0,0,1.42-1.379L23.991.021ZM2,8.592l17.028-5.02L5.993,16.586v-4Zm13.44,13.424L11.413,18h-4L20.446,4.978Z" />
                        </g>
                      </svg>
                    </button>
                  </form>
                </div>
                <div className="payment_area">
                  <h5>We Accept</h5>
                  <LazyLoadImg src={payment} alt="payment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6">
              <div className="footer_bottom_content">
                <p>© {currentYear} Walknjoy. All rights reserved </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <div className="footer_bottom_content">
                <ul className="footer_bottom_list">
                  <li>
                    <Link to="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="">Privacy & Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
