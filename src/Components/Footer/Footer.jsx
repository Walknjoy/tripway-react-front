import React from 'react';
import './Footer.scss';
import logo from '../../Media/walknjoy.png';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { BsTelephone } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { TbWorldWww } from 'react-icons/tb';
import { GoMail } from 'react-icons/go';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer_head">
          <div className="row">
            <div className="col-12 col-xl-4 col-lg-4 col-md-6">
              <div className="footer_content">
                <Link to="/" className="logo">
                  <img src={logo} alt="logo for footer" />
                </Link>
                <p className="desription">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Recusandae, sequi. Laudantium aliquam maxime dolores quam
                  magni animi laboriosam ea! Maiores.
                </p>
                <ul className="social_link">
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
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12  col-xl-2 col-lg-2 col-md-6">
              <div className="footer_content">
                <h3>Home</h3>
                <ul className="page_link">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/hotels">All Hotels</Link>
                  </li>
                  <li>
                    <Link to="/tours">All Tours</Link>
                  </li>
                  <li>
                    <Link to="/yachts">Yachts</Link>
                  </li>
                  <li>
                    <Link to="/entertainments">Entertainments</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12  col-xl-3 col-lg-3 col-md-6">
              <div className="footer_content">
                <h3>Other Page</h3>
                <ul className="page_link">
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/car">Car</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/term-conditions">Term & conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12  col-xl-3 col-lg-3 col-md-6">
              <div className="footer_content">
                <h3>Contact us</h3>
                <ul className="contact-link">
                  <li>
                    <Link to="tel:+994556264037">
                      <BsTelephone />
                      <span>+994 55 262 40 37</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:walknjoy@info.az">
                      <GoMail />
                      <span>walknjoy@info.az</span>
                    </Link>
                  </li>
                  <li>
                    <h6>
                      <CiLocationOn />
                      <span>Baku,Azerbaijan</span>
                    </h6>
                  </li>
                  <li>
                    <Link to="">
                      <TbWorldWww />
                      <span>www.walknjoy.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="row">
            <div className="col-12 col-xl-6 col-lg-6 col-md-6">
              <div className="footer_bottom-left">
                <p>© Walknjoy.. 2023 All rights reserved.</p>
              </div>
            </div>
            <div className="col-12 col-xl-6 col-lg-6 col-md-6">
              <div className="footer_bottom-right">
                <ul className="privacy_policy">
                  <li>
                    <Link to="/support-policy">Support Policy</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy</Link>
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
