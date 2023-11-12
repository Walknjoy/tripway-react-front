import { createContext, useState } from 'react';
import { format } from 'date-fns';
export const mainContext = createContext(null);

function ContextApi({ children }) {
  const [openBar, setOpenBar] = useState(false);
  const [click, setClick] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(-1);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [user, setUser] = useState(false);
  const [userVisible, setUserVisible] = useState(false);
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
    min: min,
    max: max,
    guests: Number(options.children + options.adult),
  });
  const values = {
    openBar,
    setOpenBar,
    click,
    setClick,
    passwordVisible,
    setConfirmPasswordVisible,
    setPasswordVisible,
    grid,
    setGrid,
    confirmPasswordVisible,
    openMenuIndex,
    setOpenMenuIndex,
    userVisible,
    setUserVisible,
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
  };
  return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
}
export default ContextApi;
