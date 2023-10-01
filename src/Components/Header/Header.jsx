import React, { useCallback, useContext, useEffect, useState } from 'react';
import Logo from '../../Assets/Logo/Logo';
import './Header.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { RiMenu2Line } from 'react-icons/ri';
import Language from '../../Assets/LanguageDropDown/Language';
import { AiOutlineClose } from 'react-icons/ai';
import SideBar from './SideBar/SideBar';
import { mainContext } from '../../utils/ContextApi';
import axios from 'axios';
import { toast } from 'react-toastify';
import useFetch from '../../hooks/useFetch';

const Header = () => {
  const {
    openBar,
    setOpenBar,
    setClick,
    setOpenMenuIndex,
    userVisible,
    setUserVisible,
    user,
    setUser,
  } = useContext(mainContext);
  const { data } = useFetch('/users/user/profile');

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const handleOpen = useCallback(() => {
    setOpenBar(!openBar);
    document.body.classList.toggle('no-scroll');
    setClick(false);
    setOpenMenuIndex(-1);
  }, [openBar, setOpenMenuIndex, setClick, setOpenBar]);
  const handleScroll = useCallback(() => {
    const offSet = window.scrollY;
    if (offSet > 0) {
      setScrolled(true);
      setClick(false);
      setUserVisible(false);
    } else {
      setScrolled(false);
    }
  }, [setClick, setUserVisible]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const resetStateOnPathChange = useCallback(() => {
    setOpenBar(false);
    setClick(false);
    setUserVisible(false);
  }, [setOpenBar, setClick, setUserVisible]);

  useEffect(() => {
    if (location.pathname) {
      resetStateOnPathChange();
      window.scrollTo(0, 0);
    }
  }, [location.pathname, resetStateOnPathChange]);

  const handleToggleUser = useCallback(() => {
    setUserVisible(!userVisible);
    setClick(false);
  }, [setUserVisible, userVisible, setClick]);

  useEffect(() => {
    const storedImg = localStorage.getItem('img');
    if (storedImg) {
      setUser(storedImg);
    }
  }, [setUser]);

  // logout
  const handleLogout = useCallback(async () => {
    console.log('logout olundu');
    try {
      const response = await axios.post('/auth/logout', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        localStorage.removeItem('img');
        window.location.reload();
        navigate('/');
        toast.success(response.data.success);
      }
    } catch (error) {
      toast.error(error.response.data.error.error);
    }
  }, [navigate]);
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
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Hotels <FaAngleDown />
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/hotels/hotel-1">Hotel-1</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Tours <FaAngleDown />
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/tours/tours-1">Tours -1</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Rental <FaAngleDown />
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/rental/cars">Cars</Link>
                    </li>
                    <li>
                      <Link to="/rental/yachts">Yachts</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/entertainments">Entertainments</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact us</Link>
                </li>
              </ul>
              <div id="language">
                <Language />
              </div>
              <div className="user-login">
                {user ? (
                  <div className="login-avatar">
                    <button onClick={handleToggleUser}>
                      <img src={user} alt="" />
                    </button>
                    <ul className={`user-info ${userVisible ? 'active' : ''}`}>
                      <li>
                        <Link to={`/user-profile/${data.username}`}>
                          Profile
                        </Link>
                      </li>
                      <li>
                        <button onClick={handleLogout}>Log out</button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link to="/user-login" className="login">
                    <FaUser />
                  </Link>
                )}
              </div>
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
