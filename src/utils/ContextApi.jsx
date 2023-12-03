import { createContext, useState } from 'react';
import { format } from 'date-fns';
export const mainContext = createContext(null);

function ContextApi({ children }) {
  const initialState = {
    openBar: false,
    click: false,
    userVisible: false,
    user: false,
    scrolled: false,
    activeIndex:false
  };

  const [header, setHeader] = useState(initialState);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [user, setUser] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [register, setRegister] = useState({
    username: '',
    country: '',
    email: '',
    password: '',
    city: '',
    phone: '',
  });
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });
  const [filterList, setFilteredList] = useState([]);
  //! function area
  const activeTabToggle = (index) => {
    setActiveTab(index);
  };
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [grid, setGrid] = useState(false);
  const min = 0;
  const max = 1500;
  const [rangeValues, setRangeValues] = useState([min, max]);
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [sideBarHotel, setSideBarHotel] = useState({
    city: '',
    rooms: options.room,
    type: 'all',
    startDate: format(startDate, 'MM/dd/yyyy'),
    endDate: format(endDate, 'MM/dd/yyyy'),
    featured: true,
    min: rangeValues[0],
    max: rangeValues[1],
    guests: Number(options.children + options.adult),
  });
  const values = {

    passwordVisible,
    setConfirmPasswordVisible,
    setPasswordVisible,
    grid,
    setGrid,
    confirmPasswordVisible,

    user,
    setUser,
    register,
    setRegister,
    avatar,
    setAvatar,
    login,
    setLogin,
    activeTabToggle,
    activeTab,
    setActiveTab,
    filterList,
    setFilteredList,
    options,
    setOptions,
    sideBarHotel,
    setSideBarHotel,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    selectionRange,
    rangeValues,
    setRangeValues,
    min,
    max,

    header,
    setHeader,
  };
  return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
}
export default ContextApi;
