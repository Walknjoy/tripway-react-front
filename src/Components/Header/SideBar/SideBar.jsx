import React, { useCallback, useContext, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './SideBar.scss';
import { NavLink } from 'react-router-dom';
import { mainContext } from '../../../utils/ContextApi';
import { useWindowSize } from '@uidotdev/usehooks';
const SideBar = () => {
  const { header, setHeader } = useContext(mainContext);
  const { width } = useWindowSize();
  const closeBar = useCallback(() => {
    setHeader((prevHeader) => ({
      ...prevHeader,
      openBar: false,
      click: false,
    }));
    document.body.classList.remove('no-scroll');
  }, [setHeader]);

  const handleItemClick = useCallback(
    (index) => {
      setHeader((prevHeader) => ({
        ...prevHeader,
        activeIndex: prevHeader.activeIndex === index ? null : index,
      }));
    },
    [setHeader]
  );
  const setHeaderCallback = useCallback(() => {
    setHeader((prevHeader) => ({
      ...prevHeader,
      openBar: false,
      click: false,
      activeIndex: false,
    }));
    document.body.classList.remove('no-scroll');
  }, [setHeader]);

  useEffect(() => {
    if (width > 992) {
      setHeaderCallback();
    }
  }, [setHeaderCallback, width]);

  return (
    <>
      <div className={`side-bar ${header.openBar ? 'active-bar' : ''}`}>
        <div className="container">
          <ul className="sidebar-list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="side-bar-item">
              <NavLink to="/hotels">Hotels </NavLink>
            </li>
            <li className="side-bar-item">
              <NavLink to="/tours">Tours</NavLink>
            </li>
            <li>
              <NavLink to="/entertainments">Entertainments</NavLink>
            </li>
            <li className="side-bar-item">
              <h3
                className={`${header?.activeIndex === 1 ? 'activeIndex' : ''}`}>
                <NavLink to="/rental">Rental</NavLink>
                <button onClick={() => handleItemClick(1)}>
                  {
                    <FaAngleDown
                      className={`${
                        header?.activeIndex === 1 ? 'activeArrow' : ''
                      }`}
                    />
                  }
                </button>
              </h3>
              <ul
                className={`side-bar-menu ${
                  header?.activeIndex === 1 ? 'open' : ''
                }
                `}>
                <li>
                  <NavLink to="/rental/cars">Cars</NavLink>
                </li>
                <li>
                  <NavLink to="/rental/yachts">Yachts</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`overlay-sidebar ${header.openBar ? 'active-bar' : ''}`}
        onClick={() => closeBar()}></div>
    </>
  );
};

const MemoizedSideBar = React.memo(SideBar);

export default MemoizedSideBar;
