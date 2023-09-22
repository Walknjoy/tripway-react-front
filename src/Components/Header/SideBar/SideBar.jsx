import React, { useCallback, useContext } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './SideBar.scss';
import { Link } from 'react-router-dom';
import { mainContext } from '../../../utils/ContextApi';
const SideBar = () => {
  const { openBar, setClick, setOpenBar, openMenuIndex, setOpenMenuIndex } =
    useContext(mainContext);

  const toggleMenu = useCallback(
    (index) => {
      openMenuIndex === index ? setOpenMenuIndex(-1) : setOpenMenuIndex(index);

      setClick(false);
    },
    [openMenuIndex, setOpenMenuIndex, setClick]
  );

  const closeBar = useCallback(() => {
    setOpenBar(false);
    document.body.classList.remove('no-scroll');
    setClick(false);
    setOpenMenuIndex(-1);
  }, [setOpenBar, setClick, setOpenMenuIndex]);

  return (
    <>
      <div className={`side-bar ${openBar ? 'active-bar' : ''}`}>
        <div className="cotainer">
          <ul className="sidebar-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="side-bar-item">
              <h3>
                <Link to="/">Hotels </Link>
                <button onClick={() => toggleMenu(0)}>
                  {openMenuIndex === 0 ? <FaAngleUp /> : <FaAngleDown />}
                </button>
              </h3>
              <ul
                className={`side-bar-menu ${
                  openMenuIndex === 0 ? 'open' : ''
                }`}>
                <li>
                  <Link to="">Lorem</Link>
                </li>
                <li>
                  <Link to="">Lorem</Link>
                </li>
                <li>
                  <Link to="">Lorem</Link>
                </li>
                <li>
                  <Link to="">Lorem</Link>
                </li>
              </ul>
            </li>
            <li className="side-bar-item">
              <h3>
                <Link to="/tours">Tours</Link>
                <button onClick={() => toggleMenu(1)}>
                  {openMenuIndex === 1 ? <FaAngleUp /> : <FaAngleDown />}
                </button>
              </h3>
              <ul
                className={`side-bar-menu ${
                  openMenuIndex === 1 ? 'open' : ''
                }`}>
                <li>
                  <Link to="">Lorem</Link>
                </li>
                <li>
                  <Link to="">Lorem</Link>
                </li>
                <li>
                  <Link to="">Lorem</Link>
                </li>
                <li>
                  <Link to="">Lorem</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/entertainments">Entertainments</Link>
            </li>
            <li className="side-bar-item">
              <h3>
                <Link to="/rental">Rental</Link>
                <button onClick={() => toggleMenu(3)}>
                  {openMenuIndex === 3 ? <FaAngleUp /> : <FaAngleDown />}
                </button>
              </h3>
              <ul
                className={`side-bar-menu ${
                  openMenuIndex === 3 ? 'open' : ''
                }`}>
                <li>
                  <Link to="/cars">Cars</Link>
                </li>
                <li>
                  <Link to="/yachts">Yachts</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact-us">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`overlay-sidebar ${openBar ? 'active-bar' : ''}`}
        onClick={() => closeBar()}></div>
    </>
  );
};

export default SideBar;
