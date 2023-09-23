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
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 992) {
        setOpenBar(false);
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
  const location = useLocation();
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
                  <NavLink>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link">
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
                  <NavLink className="nav-link">Tours <FaAngleDown /></NavLink>
                  <ul className="sub-menu" >
                    <li>Tours
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
                  <NavLink className="nav-link">
                    Rental <FaAngleDown />
                  </NavLink>
                  <ul className="sub-menu">
                    <li>
                      <NavLink>Cars</NavLink>
                    </li>
                    <li>
                      <NavLink>Yachts</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink>Entertainments</NavLink>
                </li>
                <li>
                  <NavLink>Contact us</NavLink>
                </li>
              </ul>
              <div id="language">
                <Language />
              </div>
              <Link to="" className="login">
                <FiLogIn />
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
