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
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="side-bar-item">
              {/* <h3> */}
                <Link to="#">Hotels </Link>
                {/* <button onClick={() => toggleMenu(0)}>
                  {openMenuIndex === 0 ? <FaAngleUp /> : <FaAngleDown />}
                </button> */}
              {/* </h3> */}
              {/* <ul
                className={`side-bar-menu ${
                  openMenuIndex === 0 ? 'open' : ''
                }`}>
                <li>
                  <Link to="/hotels/hotel-1">Hotel-1</Link>
                </li>
              </ul> */}
            </li>
            <li className="side-bar-item">
              {/* <h3> */}
                <Link to="#">Tours</Link>
                {/* <button onClick={() => toggleMenu(1)}>
                  {openMenuIndex === 1 ? <FaAngleUp /> : <FaAngleDown />}
                </button> */}
              {/* </h3> */}
              {/* <ul
                className={`side-bar-menu ${
                  openMenuIndex === 1 ? 'open' : ''
                }`}>
                <li>
                  <Link to="/tours/tours-1">Tour-1</Link>
                </li>
              </ul> */}
            </li>
            <li>
              <Link to="/entertainments">Entertainments</Link>
            </li>
            <li className="side-bar-item">
              <h3>
                <Link to="#">Rental</Link>
                <button onClick={() => toggleMenu(3)}>
                  {openMenuIndex === 3 ? <FaAngleUp /> : <FaAngleDown />}
                </button>
              </h3>
              <ul
                className={`side-bar-menu ${
                  openMenuIndex === 3 ? 'open' : ''
                }`}>
                <li>
                  <Link to="/rental/cars">Cars</Link>
                </li>
                <li>
                  <Link to="/rental/yachts">Yachts</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
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
