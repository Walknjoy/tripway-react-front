import { motion } from 'framer-motion';
import { mainContext } from '../../../utils/ContextApi';
import { useContext, useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import './SearchingInput.scss';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
const SearchingInput = () => {
  const { activeTab } = useContext(mainContext);
  const [openDate, setOpenDate] = useState(false);
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
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearchSubmit=(e)=>{
    e.preventDefault();
  }
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
                <span>Destination or Hotel Name</span>
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
            <div className="col-12 col-xl-3 col-lg-3">
              <div className="searcing-input">
                <span>Check In - Out</span>
                <div className='date-area'   onClick={() => setOpenDate(!openDate)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    fill="#67747c"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24">
                    <path d="M19.5,2h-1.5V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5H7V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5v1.5h-1.5C2.02,2,0,4.02,0,6.5v13c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V6.5c0-2.48-2.02-4.5-4.5-4.5Zm-8,7v4H7v-4h4.5Zm5.5,0v4h-4.5v-4h4.5Zm6,0v4h-5v-4h5ZM6,13H1v-4H6v4Zm-5,1H6v4H1v-4Zm6,0h4.5v4H7v-4Zm4.5,5v4H7v-4h4.5Zm1,0h4.5v4h-4.5v-4Zm0-1v-4h4.5v4h-4.5Zm5.5-4h5v4h-5v-4ZM4.5,3h15c1.93,0,3.5,1.57,3.5,3.5v1.5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5ZM1,19.5v-.5H6v4h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5h-1.5v-4h5v.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                  </svg>
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
                <span>Rooms and Guests</span>
                <div className='rooms_area'    onClick={() => setOpenOptions(!openOptions)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    fill="#67747c"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24">
                    <path d="M0,12V6C0,3.243,2.243,1,5,1h14c2.757,0,5,2.243,5,5v6h-3v-1c0-2.206-1.794-4-4-4h-2c-1.2,0-2.266,.542-3,1.382-.734-.84-1.8-1.382-3-1.382h-2c-2.206,0-4,1.794-4,4v1H0Zm9-3h-2c-1.103,0-2,.897-2,2v1h6v-1c0-1.103-.897-2-2-2Zm10,2c0-1.103-.897-2-2-2h-2c-1.103,0-2,.897-2,2v1h6v-1ZM0,14v6c0,.553,.448,1,1,1s1-.447,1-1v-2H22v2c0,.553,.447,1,1,1s1-.447,1-1v-6H0Z" />
                  </svg>
                  <p>
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
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
                        <button type='button'
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button  type='button'
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button  type='button'
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
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
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
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
        animate={activeTab === 2 ? 'animate' : 'initial'}
        variants={scaleVariants}
        className={`searching_area ${activeTab === 2 ? ' active-bar' : ''}`}>
        <form>
          <div className="row">
            <div className="col-12 col-xl-9 col-lg-9">
              <div className="searcing-input">
                <span>City / Country </span>
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
                <span>City / Country </span>
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
                <span>City / Country </span>
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
                <span>City / Country </span>
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
