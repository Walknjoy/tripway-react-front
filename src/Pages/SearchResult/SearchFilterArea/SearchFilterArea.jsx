import React, {  useState } from 'react';
import Slider from 'react-slider';
import mapImage from '../../../Media/image/map.jpg';
import { Link } from 'react-router-dom';
import './SearchFilterArea.scss';
import { AiFillStar, AiOutlineSearch, AiOutlineStar } from 'react-icons/ai';
import LazyLoadImg from '../../../Assets/LazyLoadImg';
import { BsCaretRightSquare } from 'react-icons/bs';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
const MIN = 50;
const MAX = 1050;
const SearchFilterArea = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(0);

const toggleMenu = (index) => {
  setOpenMenuIndex((prevOpenIndex) => (prevOpenIndex === index ? -1 : index));
}
  const [values, setValues] = useState([MIN, MAX]);
  return (
    <div className="all_filter_area">
      <div className="mobile_result_click">
        <button type="button">
          <BsCaretRightSquare />
          <span>Side bar</span>
        </button>
      </div>
      <div className="searching_areas">
        <form>
          <h4>Destination or Hotel name</h4>
          <div className="input-container">
            <input type="text" placeholder="Search ..." required />
            <span className="underline"></span>
          </div>
          <button type="submit">
            <AiOutlineSearch /> Search
          </button>
        </form>
      </div>
      <div className="map_area">
        <Link to="">
          <LazyLoadImg
            src={mapImage}
            alt="map image"
            width="100%"
            height="100%"
          />
        </Link>
      </div>
      <div className="filter_areas">
        <div className="price_raiting">
          <button
            type="button"
            className="box-title"
            onClick={() => toggleMenu(0)}>
            <span>Price Range ($)</span>
            {openMenuIndex === 0 ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          <div
            className={`price_body ${
              openMenuIndex === 0 ? 'active_price_body' : ''
            }`}>
            <div className={'values'}>
              ${values[0]} - ${values[1]}
            </div>
            <small>Currently Range:${values[1] - values[0]}</small>
            <Slider
              className={'range_slider'}
              onChange={setValues}
              value={values}
              min={MIN}
              max={MAX}
            />
            <div className="filter_btn">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 20 20"
                  height="20"
                  fill="none"
                  className="svg-icon">
                  <g strokeWidth="1.5" strokeLinecap="round" stroke="white">
                    <circle r="2.5" cy="10" cx="10"></circle>
                    <path
                      fillRule="evenodd"
                      d="m8.39079 2.80235c.53842-1.51424 2.67991-1.51424 3.21831-.00001.3392.95358 1.4284 1.40477 2.3425.97027 1.4514-.68995 2.9657.82427 2.2758 2.27575-.4345.91407.0166 2.00334.9702 2.34248 1.5143.53842 1.5143 2.67996 0 3.21836-.9536.3391-1.4047 1.4284-.9702 2.3425.6899 1.4514-.8244 2.9656-2.2758 2.2757-.9141-.4345-2.0033.0167-2.3425.9703-.5384 1.5142-2.67989 1.5142-3.21831 0-.33914-.9536-1.4284-1.4048-2.34247-.9703-1.45148.6899-2.96571-.8243-2.27575-2.2757.43449-.9141-.01669-2.0034-.97028-2.3425-1.51422-.5384-1.51422-2.67994.00001-3.21836.95358-.33914 1.40476-1.42841.97027-2.34248-.68996-1.45148.82427-2.9657 2.27575-2.27575.91407.4345 2.00333-.01669 2.34247-.97026z"
                      clipRule="evenodd"></path>
                  </g>
                </svg>
                <span className="lable">Filter</span>
              </button>
            </div>
          </div>
        </div>
        <div className="star_raiting">
          <button
            type="button"
            className="box-title"
            onClick={() => toggleMenu(1)}>
            <span>Star rating </span>
            {openMenuIndex === 1 ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          <ul
            className={`star_raiting_list ${
              openMenuIndex === 1 ? 'active_raiting_list' : ''
            }`}>
            <li>
              <Link to="">
                <span>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <span>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <span>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <span>
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <span>
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="propertyType">
          <button
            type="button"
            className="box-title"
            onClick={() => toggleMenu(2)}>
            <span>Property type</span>
            {openMenuIndex === 2 ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>
        <div className="city">
          <button
            type="button"
            className="box-title"
            onClick={() => toggleMenu(3)}>
            <span>City</span>
            {openMenuIndex === 3 ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterArea;
