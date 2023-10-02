import React from 'react';
import './Footer.scss';
import logo from '../../Media/primary-logo.png';
import { AiFillHeart, AiOutlineSend } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { GoMail } from 'react-icons/go';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer className="new_footer_area">
      <div className="new_footer_top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-3 col-md-6">
              <div className="company_widget">
                <div className="logo">
                  <img src={logo} alt="primary logo" />
                  <h3>Walknjoy</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  quia dolorum obcaecati provident quod sunt.
                </p>
                <form className="subscribe">
                  <input type="text" name="email" placeholder="Email" />
                  <button className="subcribe-btn" type="submit">
                    <AiOutlineSend />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-2 col-md-6">
              <div className="widget-list">
                <h3>Main</h3>
                <ul className="widget-items">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About</Link>
                  </li>
                  <li>
                    <Link to="/hotels">Hotels</Link>
                  </li>
                  <li>
                    <Link to="/tours">Tours</Link>
                  </li>
                  <li>
                    <Link to="/entertainments">Enterntainments</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-2 col-md-6">
              <div className="widget-list">
                <h3>Pages</h3>
                <ul className="widget-items">
                  <li>
                    <Link to="/rental">Rental</Link>
                  </li>
                  <li>
                    <Link to="/yachts">Yachts</Link>
                  </li>
                  <li>
                    <Link to="/cars">Cars</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-2 col-md-6">
              <div className="widget-list">
                <h3>Help</h3>
                <ul className="widget-items">
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/term-conditions">Term & conditions</Link>
                  </li>
                  <li>
                    <Link to="/support-policy">Support Policy</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
              <div className="widget-list">
                <h3>Contact us</h3>
                <ul className="contact-list">
                  <li>
                    <Link to="mailto:walknjoy@gmail.com">
                      <GoMail /> walknjoy@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:+994-55 262 40 37">
                      {' '}
                      <BsTelephoneOutboundFill />
                      +994-55 262 40 37
                    </Link>
                  </li>
                </ul>
                <ul className="social-list">
                  <li>
                    <Link to="/">
                      <ImFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 col-sm-6">
              <div className="copyright">
                <p>© Walknjoy.. 2023 All rights reserved.</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-6 text-right">
              <div className="made_in">
                <p>
                  Made with <AiFillHeart /> in{' '}
                  <Link to="https://walknjoy.com">walknjoy.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
