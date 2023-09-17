import React, { useCallback, useContext } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './SideBar.scss';
import { Link } from 'react-router-dom';
import { mainContext } from '../../../utils/ContextApi';
const SideBar = () => {
  const {
    openBar,
    setClick,
    setOpenBar,
    openMenuIndex,
    setOpenMenuIndex,
    openMenuIndexTwo,
    setOpenMenuIndexTwo,
  } = useContext(mainContext);

  const toggleMenuTwo = useCallback(
    (index) => {
      openMenuIndexTwo === index
        ? setOpenMenuIndexTwo(-1)
        : setOpenMenuIndexTwo(index);
      setClick(false);
    },
    [openMenuIndexTwo, setOpenMenuIndexTwo,setClick]
  );
  const toggleMenu = useCallback(
    (index) => {
      openMenuIndex === index ? setOpenMenuIndex(-1) : setOpenMenuIndex(index);
      openMenuIndex === index
        ? setOpenMenuIndexTwo(-1)
        : setOpenMenuIndexTwo(index);

      setClick(false);
    },
    [openMenuIndex, setOpenMenuIndex, setOpenMenuIndexTwo,setClick]
  );

  const closeBar = useCallback(() => {
    setOpenBar(false);
    document.body.classList.remove('no-scroll');
    setClick(false);
    setOpenMenuIndexTwo(-1);
    setOpenMenuIndex(-1);
  }, [setOpenBar, setClick, setOpenMenuIndexTwo, setOpenMenuIndex]);

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
            <li className="side-bar-item">
              <h3>
                <Link to="/entertainments">Entertainments</Link>
                <button onClick={() => toggleMenu(2)}>
                  {' '}
                  {openMenuIndex === 2 ? <FaAngleUp /> : <FaAngleDown />}
                </button>
              </h3>
              <ul
                className={`side-bar-menu ${
                  openMenuIndex === 2 ? 'open' : ''
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
                <Link to="/rental">Rental</Link>
                <button onClick={() => toggleMenu(3)}>
                  {openMenuIndex === 3 ? <FaAngleUp /> : <FaAngleDown />}
                </button>
              </h3>
              <ul
                className={`side-bar-menu ${
                  openMenuIndex === 3 ? 'open' : ''
                }`}>
                <li className="side-bar-item-2">
                  <h3>
                    <Link to="/cars">Cars</Link>
                    <button onClick={() => toggleMenuTwo(0)}>
                      {openMenuIndexTwo === 0 ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                  </h3>
                  <ul
                    className={`side-bar-menu-2 ${
                      openMenuIndexTwo === 0 ? 'openTwoBar' : ''
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

                <li className="side-bar-item-2">
                  <h3>
                    <Link to="/yachts">Yachts</Link>
                    <button onClick={() => toggleMenuTwo(1)}>
                      {openMenuIndexTwo === 1 ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                  </h3>
                  <ul
                    className={`side-bar-menu-2 ${
                      openMenuIndexTwo === 1 ? 'openTwoBar' : ''
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
                      <Link to="">Lorecs k</Link>
                    </li>
                  </ul>
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
