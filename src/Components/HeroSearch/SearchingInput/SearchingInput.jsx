import React, { useState } from 'react';
import { motion } from 'framer-motion';
const SearchingInput = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeTabToggle = (index) => {
    setActiveTab(index);
  };
  const scaleVariants = {
    initial: { scale: 0.99 },
    animate: { scale: 1, transition: { duration: 0.5 } },
  };
  return (
    <>
      <div className="searching_list">
        <div className="container">
          <ul>
            <li>
              <button onClick={() => activeTabToggle(1)}>
                <span className={activeTab === 1 ? 'active-span' : ''}>
                  <svg
                    id="Layer_1"
                    height="25"
                    viewBox="0 0 24 24"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1">
                    <path d="m11 0h-8a3 3 0 0 0 -3 3v21h14v-21a3 3 0 0 0 -3-3zm-5 19h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm5 12h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm10-2h-5v19h8v-16a3 3 0 0 0 -3-3zm0 14h-2v-2h2zm0-4h-2v-2h2zm0-4h-2v-2h2z" />
                  </svg>
                </span>
                Hotels
              </button>
            </li>
            <li>
              <button onClick={() => activeTabToggle(2)}>
                <span className={activeTab === 2 ? 'active-span' : ''}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="25"
                    height="25">
                    <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.534,13.511l-2.241,4.856c-.178.386-.564.633-.989.633h-.213c-.602,0-1.09-.488-1.09-1.09v-2.365c0-.349-.139-.684-.386-.931l-1.19-1.19c-.272-.272-.425-.641-.425-1.025v-.963c0-.279-.111-.547-.309-.745l-.373-.373c-.204-.204-.48-.318-.768-.318h-1.949c-.384,0-.751-.157-1.016-.436l-1.658-1.743c1.587-3.43,5.052-5.821,9.073-5.821.206,0,.407.019.609.031-.533.808-1.016,1.551-1.309,2.005-.185.285-.189.648-.014.94l.837,1.396c.222.369.163.842-.141,1.147l-.003.003c-.286.286-.722.357-1.084.176l-.88-.44c-.307-.154-.678-.093-.921.149l-.529.529c-.312.312-.312.817,0,1.128l.592.592c.22.22.519.344.83.344h1.431c.381,0,.754.107,1.077.309l2.562,1.601c.539.337.744,1.023.477,1.601Zm3.99-1.251c-.332-.165-.575-.467-.665-.827l-.627-2.507c-.137-.548.106-1.121.595-1.403l1.583-.913c1.002,1.557,1.59,3.405,1.59,5.39,0,.488-.047.963-.115,1.432l-2.362-1.172Z" />
                  </svg>
                </span>
                Tours
              </button>
            </li>
            <li>
              <button onClick={() => activeTabToggle(3)}>
                <span className={activeTab === 3 ? 'active-span' : ''}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="25"
                    height="25">
                    <path d="M24,11a3,3,0,0,0-2.841-2.984,9.918,9.918,0,0,0-5.175-5.175A3,3,0,0,0,13,0H11A3,3,0,0,0,8.016,2.841,9.921,9.921,0,0,0,2.841,8.016,3,3,0,0,0,0,11v3H2.2A9.967,9.967,0,0,0,7.85,21.093L6.861,24H8.974l.77-2.265a9.718,9.718,0,0,0,4.512,0L15.027,24h2.112l-.989-2.907A9.971,9.971,0,0,0,21.8,14H24ZM12,20a8.057,8.057,0,0,1-1.609-.166L12,15.1l1.609,4.73A8.057,8.057,0,0,1,12,20Zm3.5-.806-2.556-7.516a1,1,0,0,0-1.894,0L8.5,19.194A7.971,7.971,0,0,1,4.26,14H8V11A3,3,0,0,0,5.081,8.008,8.114,8.114,0,0,1,8,5.085V6h8V5.085a8.111,8.111,0,0,1,2.918,2.923A3,3,0,0,0,16,11v3h3.74A7.976,7.976,0,0,1,15.5,19.194Z" />
                  </svg>
                </span>
                Entertainment
              </button>
            </li>
            <li>
              <button onClick={() => activeTabToggle(4)}>
                <span className={activeTab === 4 ? 'active-span' : ''}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    width="25"
                    height="25"
                    data-name="Layer 1"
                    viewBox="0 0 24 24">
                    <path d="m1.755,8l1.828-5.025c.429-1.181,1.562-1.975,2.818-1.975h11.199c1.257,0,2.39.793,2.818,1.975l1.828,5.025H1.755Zm22.245,9.032v1.968H0v-1.968c0-1.019.082-2.03.215-3.032h3.785v-2H.562c.148-.672.316-1.34.52-2h21.837c.204.66.372,1.328.52,2h-3.438v2h3.785c.133,1.002.215,2.012.215,3.032Zm-8-2.032h-8v2h8v-2Zm-13,6v3h4v-3H3Zm18,0v3h-4v-3h4Z" />
                  </svg>
                </span>
                Cars
              </button>
            </li>
            <li>
              <button onClick={() => activeTabToggle(5)}>
                <span className={activeTab === 5 ? 'active-span' : ''}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="25"
                    height="25">
                    <path d="M14.96,6.139A5.033,5.033,0,0,0,11.78,5H8.771L7.453,0H1.029L2.347,5H0V7H11.78a3.029,3.029,0,0,1,1.913.687A13.424,13.424,0,0,1,17.077,12H14.7l-3,2H0v2H12.3l3-2h6.641A9.012,9.012,0,0,1,13,22H0v2H13A11.013,11.013,0,0,0,24,13V12H19.287A15.726,15.726,0,0,0,14.96,6.139ZM3.625,2H5.912L6.7,5H4.415ZM12,11H0V9H12ZM3,20a1,1,0,1,1,1-1A1,1,0,0,1,3,20Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,7,20Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,11,20Z" />
                  </svg>
                </span>
                Yachts
              </button>
            </li>
          </ul>
          <div className="all-searching-fields">
            <motion.div
              initial="initial"
              animate={activeTab === 1 ? 'animate' : 'initial'}
              variants={scaleVariants}
              className={`searching_area ${
                activeTab === 1 ? 'active-bar' : ''
              }`}>
              <form>
                <div className="row">
                  <div className="col-12 col-xl-3 col-lg-3">
                    <div className="searcing-input">
                      <span>Destination or Hotel Name</span>
                      <button>
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
                        <span>Where are you going?</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-xl-3 col-lg-3">
                    <div className="searcing-input">
                      <span>Check In - Out</span>
                      <button>
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
                        <p>Where are you going?</p>
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-xl-3 col-lg-3">
                    <div className="searcing-input">
                      <span>Rooms and Guests</span>
                      <button>
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
                          Where are you going?
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
                      </button>
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
              className={`searching_area ${
                activeTab === 2 ? ' active-bar' : ''
              }`}>
              <form>
                <div className="row">
                  <div className="col-12 col-xl-9 col-lg-9">
                    <div className="searcing-input">
                      <span>City / Country </span>
                      <button>
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
                        <span>Where are you going?</span>
                      </button>
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
              className={`searching_area ${
                activeTab === 3 ? ' active-bar' : ''
              }`}>
              <form>
                <div className="row">
                  <div className="col-12 col-xl-9 col-lg-9">
                    <div className="searcing-input">
                      <span>City / Country </span>
                      <button>
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
                        <span>Where are you going?</span>
                      </button>
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
              className={`searching_area ${
                activeTab === 4 ? ' active-bar' : ''
              }`}>
              <form>
                <div className="row">
                  <div className="col-12 col-xl-9 col-lg-9">
                    <div className="searcing-input">
                      <span>City / Country </span>
                      <button>
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
                        <span>Where are you going?</span>
                      </button>
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
              className={`searching_area ${
                activeTab === 5 ? ' active-bar' : ''
              }`}>
              <form>
                <div className="row">
                  <div className="col-12 col-xl-9 col-lg-9">
                    <div className="searcing-input">
                      <span>City / Country </span>
                      <button>
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
                        <span>Where are you going?</span>
                      </button>
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
        </div>
      </div>
    </>
  );
};

export default SearchingInput;
