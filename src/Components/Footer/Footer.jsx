import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo/Logo';
import payment from '../../Media/image/credit-cards.png';
import { FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { MdMarkEmailUnread } from 'react-icons/md';
import { BsSendFill } from 'react-icons/bs';
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
                    <FaLocationDot />
                    <span>Binaqadi,S.Sani.Axundov,Baku</span>
                  </li>
                  <li>
                    <FaPhoneVolume />
                    <Link to="tel:">+994 55 55 55 55</Link>
                  </li>
                  <li>
                    <MdMarkEmailUnread />
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
                      <BsSendFill />
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
