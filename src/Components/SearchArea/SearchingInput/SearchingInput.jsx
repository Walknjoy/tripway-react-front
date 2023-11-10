import { motion } from 'framer-motion';
import { mainContext } from '../../../utils/ContextApi';
import { useContext, useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './SearchingInput.scss';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { BiSearch } from 'react-icons/bi';
import { GrMapLocation } from 'react-icons/gr';
import { BsCalendarDate } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
const SearchingInput = () => {
  const { activeTab,setFilteredList } = useContext(mainContext);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const scaleVariants = {
    initial: { scale: 0.99 },
    animate: { scale: 1, transition: { duration: 0.5 } },
  };
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });


  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();
  const [sideBarHotel, setSideBarHotel] = useState({
    city: '',
    rooms: options.room,
    type: 'all',
    startDate:format(date[0].startDate, 'MM/dd/yyyy') ,
    endDate: format( date[0].endDate, 'MM/dd/yyyy'),
    featured: true,
    guests: Number(options.children + options.adult),
  });
  
 const {data}=useFetch('/hotels')
  const handleChangeSearch = (e) => {
    if (e.target.name === 'city') {
      setSideBarHotel({ ...sideBarHotel, city: e.target.value });
    }
    
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filteredData = data.filter((hotel) => hotel.city.includes(sideBarHotel.city));
    setFilteredList(filteredData);
    const queryParams = new URLSearchParams();
    queryParams.set('type', sideBarHotel.type);
    queryParams.set('city', sideBarHotel.city);
    queryParams.set('rooms', sideBarHotel.rooms);
    queryParams.set('featured', sideBarHotel.featured);
    queryParams.set('startDate', sideBarHotel.startDate);
    queryParams.set('endDate', sideBarHotel.endDate);
    queryParams.set('guests', sideBarHotel.guests);
    navigate(`/search/hotels?${queryParams.toString()}`);
  };

  // useEffect(() => {
  //   const filteredData = data.filter((hotel) => hotel.city.includes(sideBarHotel.city));
  //   setFilteredList(filteredData);
  // }, [data, sideBarHotel.city,setFilteredList]);
  return (

    <div className="all-searching-fields">
      <motion.div
        initial="initial"
        animate={activeTab === 1 ? 'animate' : 'initial'}
        variants={scaleVariants}
        className={`searching_area ${activeTab === 1 ? 'active-bar' : ''}`}>
        <form onSubmit={handleSearchSubmit}>
          <div className="row">
            <div className="col-12 col-xl-3 col-lg-3">
              <div className="searcing-input">
                <label>Destination or Hotel Name</label>
                <div className="destination_hotel">
                  <GrMapLocation />
                  <input
                    type="search"
                    placeholder="Where are you going?"
                    name="city"
                    value={setSideBarHotel.city}
                    onChange={handleChangeSearch}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-3 col-lg-3">
              <div className="searcing-input">
                <label>Check In - Out</label>
                <div
                  className="date-area"
                  onClick={() => setOpenDate(!openDate)}>
                  <BsCalendarDate />
                  <p>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                    date[0].endDate,
                    'MM/dd/yyyy'
                  )}`}</p>
                </div>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
            </div>
            <div className="col-12 col-xl-3 col-lg-3">
              <div className="searcing-input">
                <label>Rooms and Guests</label>
                <div
                  className="rooms_area"
                  onClick={() => setOpenOptions(!openOptions)}>
                  <BiSearch />
                  <p>
                    {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      className={`chevron-icon ${openOptions ? 'active' : ''}`}
                      viewBox="0 0 24 24"
                      width="20"
                      fill="#67747c"
                      height="20">
                      <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                    </svg>
                  </p>
                </div>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          type="button"
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={(e) => {
                            handleOption('adult', 'd');
                          }}>
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          type="button"
                          className="optionCounterButton"
                          onClick={(e) => {
                            handleOption('adult', 'i');
                          }}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          type="button"
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={(e) => {
                            handleOption('children', 'd');
                          }}>
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          type="button"
                          className="optionCounterButton"
                          onClick={(e) => {
                            handleOption('children', 'i');
                          }}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          type="button"
                          onClick={(e) => {
                            handleOption('room', 'd');
                          }}>
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          type="button"
                          onClick={(e) => {
                            handleOption('room', 'i');
                          }}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="searching_btn">
                <button type='submit' value="Search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Outline"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18">
                    <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
      <motion.div
        initial="initial"
        animate={activeTab === 2 ? 'animate' : 'initial'}
        variants={scaleVariants}
        className={`searching_area ${activeTab === 2 ? ' active-bar' : ''}`}>
        <form>
          <div className="row">
            <div className="col-12 col-xl-9 col-lg-9">
              <div className="searcing-input">
                <label>City / Country </label>
                <div className="destination_hotel">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    fill="#67747c"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24">
                    <path d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,6ZM16,22.03l8,1.948V13.483a3,3,0,0,0-2.133-2.871l-2.1-.7A8.037,8.037,0,0,0,20,8.006a8,8,0,0,0-16,0,8.111,8.111,0,0,0,.1,1.212A2.992,2.992,0,0,0,0,12v9.752l7.983,2.281ZM7.757,3.764a6,6,0,0,1,8.493,8.477L12,16.4,7.757,12.249a6,6,0,0,1,0-8.485ZM2,12a.985.985,0,0,1,.446-.832A1.007,1.007,0,0,1,3.43,11.1l1.434.518a8.036,8.036,0,0,0,1.487,2.056L12,19.2l5.657-5.533a8.032,8.032,0,0,0,1.4-1.882l2.217.741a1,1,0,0,1,.725.961v7.949L16,19.97l-7.98,2L2,20.246Z" />
                  </svg>
                  <input type="search" placeholder="Where are you going?" />
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="searching_btn">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Outline"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18">
                    <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
      <motion.div
        initial="initial"
        animate={activeTab === 3 ? 'animate' : 'initial'}
        variants={scaleVariants}
        className={`searching_area ${activeTab === 3 ? ' active-bar' : ''}`}>
        <form>
          <div className="row">
            <div className="col-12 col-xl-9 col-lg-9">
              <div className="searcing-input">
                <label>City / Country </label>
                <div className="destination_hotel">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    fill="#67747c"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24">
                    <path d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,6ZM16,22.03l8,1.948V13.483a3,3,0,0,0-2.133-2.871l-2.1-.7A8.037,8.037,0,0,0,20,8.006a8,8,0,0,0-16,0,8.111,8.111,0,0,0,.1,1.212A2.992,2.992,0,0,0,0,12v9.752l7.983,2.281ZM7.757,3.764a6,6,0,0,1,8.493,8.477L12,16.4,7.757,12.249a6,6,0,0,1,0-8.485ZM2,12a.985.985,0,0,1,.446-.832A1.007,1.007,0,0,1,3.43,11.1l1.434.518a8.036,8.036,0,0,0,1.487,2.056L12,19.2l5.657-5.533a8.032,8.032,0,0,0,1.4-1.882l2.217.741a1,1,0,0,1,.725.961v7.949L16,19.97l-7.98,2L2,20.246Z" />
                  </svg>
                  <input type="search" placeholder="Where are you going?" />
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="searching_btn">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Outline"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18">
                    <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
      <motion.div
        initial="initial"
        animate={activeTab === 4 ? 'animate' : 'initial'}
        variants={scaleVariants}
        className={`searching_area ${activeTab === 4 ? ' active-bar' : ''}`}>
        <form>
          <div className="row">
            <div className="col-12 col-xl-9 col-lg-9">
              <div className="searcing-input">
                <label>City / Country </label>
                <div className="destination_hotel">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    fill="#67747c"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24">
                    <path d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,6ZM16,22.03l8,1.948V13.483a3,3,0,0,0-2.133-2.871l-2.1-.7A8.037,8.037,0,0,0,20,8.006a8,8,0,0,0-16,0,8.111,8.111,0,0,0,.1,1.212A2.992,2.992,0,0,0,0,12v9.752l7.983,2.281ZM7.757,3.764a6,6,0,0,1,8.493,8.477L12,16.4,7.757,12.249a6,6,0,0,1,0-8.485ZM2,12a.985.985,0,0,1,.446-.832A1.007,1.007,0,0,1,3.43,11.1l1.434.518a8.036,8.036,0,0,0,1.487,2.056L12,19.2l5.657-5.533a8.032,8.032,0,0,0,1.4-1.882l2.217.741a1,1,0,0,1,.725.961v7.949L16,19.97l-7.98,2L2,20.246Z" />
                  </svg>
                  <input type="search" placeholder="Where are you going?" />
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="searching_btn">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Outline"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18">
                    <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
      <motion.div
        initial="initial"
        animate={activeTab === 5 ? 'animate' : 'initial'}
        variants={scaleVariants}
        className={`searching_area ${activeTab === 5 ? ' active-bar' : ''}`}>
        <form>
          <div className="row">
            <div className="col-12 col-xl-9 col-lg-9">
              <div className="searcing-input">
                <label>City / Country </label>
                <div className="destination_hotel">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    fill="#67747c"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24">
                    <path d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,6ZM16,22.03l8,1.948V13.483a3,3,0,0,0-2.133-2.871l-2.1-.7A8.037,8.037,0,0,0,20,8.006a8,8,0,0,0-16,0,8.111,8.111,0,0,0,.1,1.212A2.992,2.992,0,0,0,0,12v9.752l7.983,2.281ZM7.757,3.764a6,6,0,0,1,8.493,8.477L12,16.4,7.757,12.249a6,6,0,0,1,0-8.485ZM2,12a.985.985,0,0,1,.446-.832A1.007,1.007,0,0,1,3.43,11.1l1.434.518a8.036,8.036,0,0,0,1.487,2.056L12,19.2l5.657-5.533a8.032,8.032,0,0,0,1.4-1.882l2.217.741a1,1,0,0,1,.725.961v7.949L16,19.97l-7.98,2L2,20.246Z" />
                  </svg>
                  <input type="search" placeholder="Where are you going?" />
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="searching_btn">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Outline"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18">
                    <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SearchingInput;
