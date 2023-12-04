import { motion } from 'framer-motion';
import { mainContext } from '../../../utils/ContextApi';
import { useContext, useEffect, useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './SearchingInput.scss';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { BiSearch } from 'react-icons/bi';
import { GrMapLocation } from 'react-icons/gr';
import { BsCalendarDate } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../../utils/SearchContext';
import useFetch from '../../../hooks/useFetch';
const SearchingInput = () => {
  const { options, setOptions, activeTab } = useContext(mainContext);
  const { searchDispatch } = useContext(SearchContext);
  const { data, reFetch } = useFetch(`/${activeTab}`);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [city, setCity] = useState('');
  const [openDate, setOpenDate] = useState(false);

  const [openOptions, setOpenOptions] = useState(false);
  const navigate = useNavigate();
  const scaleVariants = {
    initial: { scale: 0.99 },
    animate: { scale: 1, transition: { duration: 0.5 } },
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const cityFilter = data?.filter((cities) => cities?.city?.includes(city));

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city) return;

    try {
      // Assuming reFetch is an asynchronous function
      await reFetch();

      searchDispatch({
        type: 'new_search',
        payload: { city: city, dates, options, filteredList: cityFilter },
      });

      const newqueryParams = new URLSearchParams();
      newqueryParams.set('city', city);
      newqueryParams.set('rooms', options.room);
      newqueryParams.set('startDate', format(dates[0].startDate, 'dd-MM-yyyy'));
      newqueryParams.set('endDate', format(dates[0].endDate, 'dd-MM-yyyy'));
      newqueryParams.set('featured', 'true');
      newqueryParams.set('guests', Number(options.children + options.adult));

      // Assuming navigate is a synchronous function
      navigate(`/search/${activeTab}?${newqueryParams.toString()}`, {
        state: { city: city, dates, options },
      });
    } catch (error) {
      console.error('Error during handleSearch:', error);
      // Handle the error appropriately, e.g., show an error message
    }
  };

  useEffect(() => {
    // Assuming reFetch is a dependency and reFetch is a function
    reFetch();
  }, [reFetch]);

  return (
    <div className="all-searching-fields">
      <motion.div
        initial="initial"
        animate={activeTab === 'hotels' ? 'animate' : 'initial'}
        variants={scaleVariants}
        className={`searching_area ${
          activeTab === 'hotels' ? 'active-bar' : ''
        }`}>
        <form onSubmit={handleSearch}>
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
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
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
                  <p>
                    {' '}
                    {`${format(dates[0].startDate, 'dd-MM-yyyy')} to ${format(
                      dates[0].endDate,
                      'dd-MM-yyyy'
                    )}`}
                  </p>
                </div>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
            </div>
            <div className="col-12 col-xl-4 col-lg-4">
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
            <div className="col-12 col-xl-2 col-lg-2">
              <div className="searching_btn">
                <button type="submit" value="Search">
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
      {/* <motion.div
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
      </motion.div> */}
    </div>
  );
};

export default SearchingInput;
