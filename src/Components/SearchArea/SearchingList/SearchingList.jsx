import React, { useContext } from 'react';
import { mainContext } from '../../../utils/ContextApi';
import './SearchingList.scss';
const SearchingList = () => {
  const { activeTab,activeTabToggle } = useContext(mainContext);
  return (
    <ul className="searching_list">
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
          Entertainments
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
  );
};

export default SearchingList;
