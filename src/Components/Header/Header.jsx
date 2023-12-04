import React, { useCallback, useContext, useEffect } from 'react';
import Logo from '../../Assets/Logo/Logo';
import './Header.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { RiMenu2Line } from 'react-icons/ri';
import Language from '../../Assets/LanguageDropDown/Language';
import { AiOutlineClose } from 'react-icons/ai';
import { mainContext } from '../../utils/ContextApi';
import axios from 'axios';
import { toast } from 'react-toastify';
import useFetch from '../../hooks/useFetch';
import MemoizedSideBar from './SideBar/SideBar';

const Header = () => {
  const { header, setHeader, user, setUser } = useContext(mainContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { data } = useFetch('/users/user/profile');

  const handleOpen = useCallback(() => {
    setHeader((prevHeader) => ({
      ...prevHeader,
      openBar: !prevHeader.openBar,
    }));
    document.body.classList.toggle('no-scroll');
  }, [setHeader]);
  const handleScroll = useCallback(() => {
    const offSet = window.scrollY;
    if (offSet > 150) {
      setHeader((prevHeader) => ({
        ...prevHeader,
        scrolled: true,
        click: false,
        userVisible: false,
      }));
    } else {
      setHeader((prevHeader) => ({
        ...prevHeader,
        scrolled: false,
      }));
    }
  }, [setHeader]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setHeader, handleScroll]);

  const resetStateOnPathChange = useCallback(() => {
    setHeader((prevHeader) => ({
      ...prevHeader,
      openBar: false,
      click: false,
      userVisible: false,
    }));
  }, [setHeader]);

  useEffect(() => {
    pathname && resetStateOnPathChange();
    pathname && window.scrollTo(0, 0);
  }, [pathname, resetStateOnPathChange]);
  const handleToggleUser = useCallback(() => {
    setHeader((prevHeader) => ({
      ...prevHeader,
      userVisible: !prevHeader.userVisible,
      click: false,
    }));
  }, [setHeader]);

  useEffect(() => {
    const storedImg = localStorage.getItem('img');
    if (storedImg) {
      setUser(storedImg);
    } else {
      setUser(false);
    }
  }, [setUser]);
  // logout
  const handleLogout = useCallback(async () => {
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
      <header
        className={
          pathname === '/' && pathname === '/about'
            ? `sticky-header ${header?.scrolled ? 'fixed-header' : ''} `
            : `sticky-another ${header?.scrolled ? 'fixed-header' : ''} `
        }>
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
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/hotels">Hotel</Link>
                </li>
                <li>
                  <Link to="#">Tours</Link>
                </li>
                <li>
                  <Link to="/entertainments">Entertainments</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
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
                    {header.userVisible && (
                      <ul className="user-info">
                        <li>
                          <Link to={`/user-profile/${data.username}`}>
                            Profile
                          </Link>
                        </li>
                        <li>
                          <button onClick={handleLogout}>Logout</button>
                        </li>
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link to="/user-login" className="login">
                    <FaUser />
                  </Link>
                )}
              </div>
              <div className="hamburger">
                <button onClick={handleOpen}>
                  {header.openBar ? <AiOutlineClose /> : <RiMenu2Line />}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <MemoizedSideBar />
    </>
  );
};
export default React.memo(Header);
