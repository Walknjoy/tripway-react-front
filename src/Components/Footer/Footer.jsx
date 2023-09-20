import React from 'react'
import './Footer.scss'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneVolume
} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-contact">
              <div className='col-12 col-lg-3 col-md-4 col-sm-6'>
                <div className="footer--contact-header">
                  <h4>Need my Travel Help?</h4>
                </div>
                <div className="footer--contact-number">
                  <div className="number-left">
                    <FaPhoneVolume />
                  </div>
                  <div className="number-right">
                    <p>
                      <a href="tel:+(888) 1234 56789">Got Questions ? Call us 24/7!</a>
                    </p>
                    <p>Call us:
                      <a href="tel:+(888) 1234 56789">+994513134794</a>
                    </p>
                  </div>
                </div>
                <div className="footer--contact-info">
                  <h4>Contact Info</h4>
                  <p>PO Box CT16122 Collins Street West, Victoria 8007,Australia.</p>
                </div>
                <div className="footer--social-media">
                  <ul>
                    <li><a href="#"><FaFacebookF /></a></li>
                    <li><a href="#"><FaTwitter /></a></li>
                    <li><a href="#"><FaInstagram /></a></li>
                    <li><a href="#"><FaLinkedin /></a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-company">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Privacy Statement</a></li>
                  <li><a href="#">Give Us Feedbacks</a></li>
                </ul>
              </div>
              <div className="footer-support">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Account</a></li>
                  <li><a href="#">Legal</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Affiliate Program</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="footer--mailing-list">
                <h4>Mailing List</h4>
                <p>Sign up for our mailing list to get latest updates and offers.</p>
                <div className="mail-subs">
                  <input type="text" placeholder='Your Email' />
                  <button type='submit'>Subscribes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer--copyright-navbar">
        <div className="container">
          <div className="row">
            <div className="copyright-navbar">
              <div className="footer-copyright">
                <p>© 2022 MyTravel. All rights reserved</p>
              </div>
              <div className="footer-navbar">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Hotel</a></li>
                  <li><a href="#">Tour</a></li>
                  <li><a href="#">Activity</a></li>
                  <li><a href="#">Rental</a></li>
                  <li><a href="#">Car</a></li>
                  <li><a href="#">Yacht</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
