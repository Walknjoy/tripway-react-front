import React, { useCallback, useContext, useEffect, useState } from 'react';
import Logo from '../../Assets/Logo/Logo';
import './Header.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { RiMenu2Line } from 'react-icons/ri';
import Language from '../../Assets/LanguageDropDown/Language';
import { AiOutlineClose } from 'react-icons/ai';
import SideBar from './SideBar/SideBar';
import { mainContext } from '../../utils/ContextApi';

const Header = () => {
  const { openBar, setOpenBar, setClick, setOpenMenuIndex } =
    useContext(mainContext);
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 992) {
        setOpenBar(false);
        document.body.classList.remove('no-scroll');
      } else {
        return;
      }
    };
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [setOpenBar]);
  const handleOpen = useCallback(() => {
    setOpenBar(!openBar);
    document.body.classList.toggle('no-scroll');
    setClick(false);
    setOpenMenuIndex(-1);
  }, [openBar, setOpenMenuIndex, setClick, setOpenBar]);
  const handleScroll = useCallback(() => {
    const offSet = window.scrollY;
    if (offSet > 200) {
      setScrolled(true);
      setClick(false);
    } else {
      setScrolled(false);
    }
  }, [setClick]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (location.pathname) {
      setOpenBar(false);
      setClick(false);
    }
  }, [location.pathname, setOpenBar, setClick]);
  return (
    <>
      <header className={`sticky-header ${scrolled ? 'fixed-header' : ''} `}>
        <div className="container">
          <nav className="navbar-wrapper">
            <div className="left-side">
              <Logo />
            </div>
            <div className="right-side">
              <ul className="nav-list">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/hotels">
                    Hotels <FaAngleDown />
                  </NavLink>
                  <ul className="sub-menu">
                    <li>
                      <NavLink>Lorem</NavLink>
                    </li>
                    <li>
                      <NavLink>Lorem</NavLink>
                    </li>
                    <li>
                      <NavLink>Lorem</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tours">
                    Tours <FaAngleDown />
                  </NavLink>
                  <ul className="sub-menu">
                    <li>
                      <NavLink>Lorem</NavLink>
                    </li>
                    <li>
                      <NavLink>Lorem</NavLink>
                    </li>
                    <li>
                      <NavLink>Lorem</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/rental">
                    Rental <FaAngleDown />
                  </NavLink>
                  <ul className="sub-menu">
                    <li>
                      <NavLink to="/cars">Cars</NavLink>
                    </li>
                    <li>
                      <NavLink to="/yachts">Yachts</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/entertainment">Entertainments</NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us">Contact us</NavLink>
                </li>
              </ul>
              <div id="language">
                <Language />
              </div>
              <Link to="/user-login" className="login">
                <FiLogIn />
                {/* <div className="login-avatar">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                    alt=""
                  />
                </div> */}
              </Link>
              <div className="hamburger">
                <button onClick={handleOpen}>
                  {openBar ? <AiOutlineClose /> : <RiMenu2Line />}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <SideBar />
    </>
  );
};

export default Header;
